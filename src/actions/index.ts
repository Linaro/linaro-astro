import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";

const getEnv = (key: string) => {
  return import.meta.env[key] || process.env[key];
};

const FRIENDLY_CAPTCHA_API_KEY = getEnv("FRIENDLY_CAPTCHA_API_KEY");
const PUBLIC_FRIENDLY_CAPTCHA_SITEKEY = getEnv(
  "PUBLIC_FRIENDLY_CAPTCHA_SITEKEY",
);

const PIPELINE_CRM_API_KEY = getEnv("PIPELINE_CRM_API_KEY");
const PIPELINE_CRM_APP_KEY = getEnv("PIPELINE_CRM_APP_KEY");

const BILL_FLETCHER_ID = 269524;

const pipelineFetch = async (endpoint: string, options: RequestInit = {}) => {
  if (!PIPELINE_CRM_API_KEY) throw new Error("PIPELINE_CRM_API_KEY is missing");
  if (!PIPELINE_CRM_APP_KEY) throw new Error("PIPELINE_CRM_APP_KEY is missing");

  const baseUrl = "https://api.pipelinecrm.com/api/v3";
  const url = `${baseUrl}${endpoint}`;

  const separator = url.includes("?") ? "&" : "?";
  const authUrl = `${url}${separator}api_key=${PIPELINE_CRM_API_KEY}&app_key=${PIPELINE_CRM_APP_KEY}`;

  const res = await fetch(authUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Pipeline API Error [${endpoint}]:`, errorText);
    throw new Error(`Pipeline API request failed: ${res.statusText}`);
  }

  return res.json();
};

export const craSubmit = defineAction({
  accept: "json",
  handler: async (input) => {
    const res = await fetch(
      "https://tfiwmhtln2.execute-api.us-east-1.amazonaws.com/formSubmit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      },
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Backend error");
    }

    return await res.json();
  },
});

export const server = {
  contact: defineAction({
    accept: "json",
    input: z
      .object({
        formName: z.string(),
        "frc-captcha-response": z.string().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        message: z.string().optional(),
        contactByExpert: z.any().optional(),
        newsletter: z.any().optional(),
        jobTitle: z.string().optional(),
        country: z.string().optional(),
        whitepaperId: z.string().optional(),
        webinarDataId: z.string().optional(),
      })
      .passthrough(),
    handler: async (input) => {
      const { formName, "frc-captcha-response": captchaResponse } = input;

      // 1. Verify Friendly Captcha
      if (captchaResponse) {
        const verifyUrl = "https://global.frcapi.com/api/v2/captcha/siteverify";
        const verifyRes = await fetch(verifyUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": FRIENDLY_CAPTCHA_API_KEY,
          },
          body: JSON.stringify({
            response: captchaResponse,
            sitekey: PUBLIC_FRIENDLY_CAPTCHA_SITEKEY,
          }),
        });

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "Captcha verification failed",
          });
        }
      } else if (
        ["contact-form", "whitepaper_contact", "webinar_contact"].includes(
          formName,
        )
      ) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Captcha is required",
        });
      }

      // --- Start Pipeline CRM Logic ---
      try {
        let companyId: number | null = null;
        let personId: number | null = null;

        // A. Handle Company
        if (input.company) {
          // Check for exact match
          const companySearch = await pipelineFetch(
            `/companies?conditions[company_name_eq]=${encodeURIComponent(input.company)}`,
          );

          if (companySearch.entries && companySearch.entries.length > 0) {
            // Found existing company
            companyId = companySearch.entries[0].id;
            console.log("company exists: ", companyId);
          } else {
            // Create new company
            const newCompany = await pipelineFetch("/companies", {
              method: "POST",
              body: JSON.stringify({
                company: {
                  name: input.company,
                  owner_id: BILL_FLETCHER_ID,
                  // Optional: Add country/phone to company if desired
                },
              }),
            });
            companyId = newCompany.id;
            console.log("company created:", companyId);
          }
        }

        console.log("searching person...");

        // B. Handle Person
        const personSearch = await pipelineFetch(
          `/people?conditions[person_email]=${encodeURIComponent(input.email)}`,
        );

        if (personSearch.entries && personSearch.entries.length > 0) {
          personId = personSearch.entries[0].id;
        } else {
          const personPayload: any = {
            first_name: input.firstName,
            last_name: input.lastName,
            email: input.email,
          };

          if (input.phone) personPayload.phone = input.phone;
          if (companyId) personPayload.company_id = companyId; // Link to Company
          if (input.jobTitle) personPayload.position_title = input.jobTitle;
          if (input.country) personPayload.country = input.country;
          const newPerson = await pipelineFetch("/people", {
            method: "POST",
            body: JSON.stringify({ person: personPayload }),
          });
          personId = newPerson.id;
          console.log("person created with id: ", personId);

          if (newPerson.id) {
            console.log("adding bill's id...");
            //update person owner id
            await pipelineFetch(`/people/${newPerson.id}`, {
              method: "PUT",
              body: JSON.stringify({ user_id: BILL_FLETCHER_ID }),
            });
            console.log("Person assigned to bill");
          }
        }

        // C. Create Activities (Notes)
        if (personId) {
          await pipelineFetch("/notes", {
            method: "POST",
            body: JSON.stringify({
              note: {
                person_id: personId,
                content: `Source Form: ${formName}`,
                title: "Lead Source",
              },
            }),
          });
          console.log("Adding notes");

          let messageContent = input.message || "";

          const extraDetails = [];
          if (input.contactByExpert)
            extraDetails.push(`Contact by Expert: ${input.contactByExpert}`);
          if (input.newsletter)
            extraDetails.push(`Newsletter: ${input.newsletter}`);

          if (extraDetails.length > 0) {
            messageContent += `\n\n--- Additional Info ---\n${extraDetails.join("\n")}`;
          }

          if (messageContent.trim()) {
            await pipelineFetch("/notes", {
              method: "POST",
              body: JSON.stringify({
                note: {
                  person_id: personId,
                  content: messageContent,
                  title: "How can Linaro help you?",
                },
              }),
            });
          }
          console.log("adding form content");
        }
        console.log("Success");
      } catch (e) {
        console.error("Pipeline CRM Integration Failed", e);
        // We catch the error so the user still sees the "Thank you" message,
        // effectively falling back to a soft fail (or you can re-throw if you want to block the UI).
      }

      // 4. Return Data
      if (input.whitepaperId)
        return { success: true, type: "whitepaper", id: input.whitepaperId };
      if (input.webinarDataId)
        return { success: true, type: "webinar", id: input.webinarDataId };

      return { success: true, message: "Thank you for contacting us." };
    },
  }),
  craSubmit,
};
