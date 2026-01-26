import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";

const PUBLIC_FRIENDLY_CAPTCHA_SITEKEY = process.env.PUBLIC_FRIENDLY_CAPTCHA_SITEKEY;
const FRIENDLY_CAPTCHA_API_KEY = process.env.FRIENDLY_CAPTCHA_API_KEY;

export const server = {
    contact: defineAction({
        accept: "json",
        input: z.object({
            formName: z.string(),
            "frc-captcha-response": z.string().optional(),
            // Standard Fields
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().email(),
            phone: z.string().optional(),
            company: z.string().optional(),
            message: z.string().optional(),
            // Checkboxes/Radios (Standardized)
            contactByExpert: z.any().optional(), // Yes/No
            newsletter: z.any().optional(), // Yes/No
            agreed: z.literal("on").optional(),
            form_id: z.string().optional(),
            jobTitle: z.string().optional(),
            country: z.string().optional(),
            // Content IDs
            whitepaperId: z.string().optional(),
            webinarDataId: z.string().optional(),
        }).passthrough(),
        handler: async (input) => {
            const { formName, "frc-captcha-response": captchaResponse } = input;

            // 1. Verify Friendly Captcha
            if (captchaResponse) {
                const verifyUrl = "https://api.friendlycaptcha.com/api/v1/siteverify";
                const verifyBody = {
                    solution: captchaResponse,
                    secret: FRIENDLY_CAPTCHA_API_KEY,
                    sitekey: PUBLIC_FRIENDLY_CAPTCHA_SITEKEY,
                };

                const verifyRes = await fetch(verifyUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(verifyBody),
                });

                const verifyData = await verifyRes.json();
                if (!verifyData.success) {
                    throw new ActionError({
                        code: "BAD_REQUEST",
                        message: "Captcha verification failed",
                    });
                }
            } else {
                // Some forms might not have captcha? The plan implies adding it.
                // Assuming specific forms require it.
                if (['contact-form', 'whitepaper_contact', 'webinar_contact'].includes(formName)) {
                    throw new ActionError({
                        code: "BAD_REQUEST",
                        message: "Captcha is required",
                    });
                }
            }

            // 2. Map data for Pipeline CRM
            const crmPayload: Record<string, any> = {};

            // Standard User Mappings
            if (input.firstName) crmPayload["person[first_name]"] = input.firstName;
            if (input.lastName) crmPayload["person[last_name]"] = input.lastName;
            // Fallback for single name field if needed, but we prefer distinct first/last
            if (input.email) crmPayload["person[email]"] = input.email;
            if (input.phone) crmPayload["person[phone]"] = input.phone;
            if (input.company) crmPayload["company[name]"] = input.company;

            // Notes / Message
            if (input.message) {
                crmPayload["note_title_1"] = "How can Linaro help you?";
                crmPayload["note_1"] = input.message;
            }

            // Hidden Fields Injection
            // W2LID
            const w2lid = process.env.PIPELINE_CRM_W2LID;
            if (w2lid) {
                crmPayload["w2lid"] = w2lid;
            } else {
                console.warn("PIPELINE_CRM_W2LID is not set!");
            }

            // Source
            if (formName) {
                const sourceLine = `\nSource Form: ${formName}`;
                if (crmPayload["note_1"]) {
                    crmPayload["note_1"] += sourceLine;
                } else {
                    crmPayload["note_title_1"] = "Lead Source";
                    crmPayload["note_1"] = `Source Form: ${formName}`;
                }
            }

            // Custom Fields (Job Title, Country, etc) - Appending to note for visibility
            let extraInfo = "";
            if (input.jobTitle) extraInfo += `\nJob Title: ${input.jobTitle}`;
            if (input.country) extraInfo += `\nCountry: ${input.country}`;
            if (input.contactByExpert) extraInfo += `\nContact by Expert: ${input.contactByExpert}`;
            if (input.newsletter) extraInfo += `\nNewsletter: ${input.newsletter}`;

            if (extraInfo) {
                if (crmPayload["note_1"]) {
                    crmPayload["note_1"] += "\n---" + extraInfo;
                } else {
                    if (!crmPayload["note_title_1"]) crmPayload["note_title_1"] = "Additional Info";
                    crmPayload["note_1"] = extraInfo.trim();
                }
            }

            // 3. Submit to Pipeline CRM
            const crmEndpoint = process.env.PIPELINE_CRM_ENDPOINT;

            if (crmEndpoint) {
                try {
                    // Use URLSearchParams for x-www-form-urlencoded if strictly required by Pipeline, 
                    // but most modern web-to-lead accept JSON or Multipart.
                    // Given the field names like 'person[first_name]', it strongly suggests form-data or urlencoded.
                    // I will try JSON first as it's standard, but fallback or switch if docs implied otherwise (docs link was 'api/docs', usually JSON).
                    // However, specific field names like person[x] are Rails/PHP style form params.
                    // Let's use URLSearchParams to be safe for a "web form" receiver.

                    /* 
                       Refactoring to use URLSearchParams if it's a traditional POST handler.
                       Wait, the user said "Setting up the form".
                       Usually web-to-lead is form-encoded.
                    */
                    const formData = new URLSearchParams();
                    for (const key in crmPayload) {
                        formData.append(key, crmPayload[key]);
                    }

                    const crmRes = await fetch(crmEndpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: formData
                    });

                    if (!crmRes.ok) {
                        console.error("Pipeline CRM submission failed", await crmRes.text());
                    }
                } catch (e) {
                    console.error("Pipeline CRM error", e);
                }
            } else {
                console.warn("PIPELINE_CRM_ENDPOINT not set. Skipping CRM submission.");
            }


            // 4. Return Data (Whitepaper/Webinar)
            if (input.whitepaperId) {
                return { success: true, type: 'whitepaper', id: input.whitepaperId };
            }

            if (input.webinarDataId) {
                return { success: true, type: 'webinar', id: input.webinarDataId };
            }

            return { success: true, message: "Thank you for contacting us." };
        },
    }),
};
