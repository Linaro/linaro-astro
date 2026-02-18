/* eslint-disable react/no-unknown-property */
import { actions } from "astro:actions";
import { onMount, onCleanup, createSignal, Show } from "solid-js";
import type { JSX } from "solid-js";
import { Model, Serializer } from "survey-core";
import "survey-core/survey-core.min.css";
import "survey-js-ui";

interface Props {
  surveyJson: any;
}

const Q_NAME_RE = /^q\d+$/;

function getBanding(percentage: number) {
  if (percentage <= 39) {
    return {
      level: "High Risk",
      color: "#f87171",
      comment:
        "Your responses indicate significant gaps against the requirements of the EU Cyber Resilience Act (CRA). Substantial re-work across risk management, secure design, and vulnerability handling is likely required before the product could be considered compliant.",
    };
  } else if (percentage <= 59) {
    return {
      level: "Emerging",
      color: "#fb923c",
      comment:
        "Your product demonstrates early progress towards CRA readiness, but important requirements are only partially implemented or missing. Targeted remediation is required.",
    };
  } else if (percentage <= 79) {
    return {
      level: "Developing",
      color: "#facc15",
      comment:
        "Your product is broadly aligned with many CRA requirements, with several key controls already implemented. Focused improvements are recommended.",
    };
  } else {
    return {
      level: "Strong",
      color: "#4ade80",
      comment:
        "Your product demonstrates strong alignment with the requirements of the EU Cyber Resilience Act. Only minor enhancements or validation activities are likely required.",
    };
  }
}

function isScoredQuestion(q: any): boolean {
  return typeof q?.name === "string" && Q_NAME_RE.test(q.name);
}

function computeScore(survey: any) {
  let totalScore = 0;
  let maxScore = 0;

  survey.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;
    const weight = Number(q.weight ?? 1);
    const rawValue = Math.max(0, Number(q.value ?? 0));
    const adjustedScore = Math.min(rawValue, 1);
    totalScore += adjustedScore * weight;

    const maxValFound = Math.max(
      ...(q.choices ?? []).map((c: any) => Math.max(0, Number(c.value ?? 0))),
      0,
    );
    const maxChoiceValue = Math.min(maxValFound, 1);
    maxScore += maxChoiceValue * weight;
  });

  const readinessPercentage =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 1000) / 10 : 0;
  return { totalScore, maxScore, readinessPercentage };
}

function setScoreVariables(sender: any) {
  const { totalScore, maxScore, readinessPercentage } = computeScore(sender);
  const banding = getBanding(readinessPercentage);

  sender.setVariable("totalScore", totalScore);
  sender.setVariable("maxScore", maxScore);
  sender.setVariable("readinessPercentage", readinessPercentage);
  sender.setVariable("readinessLevel", banding.level);
  sender.setVariable("readinessComment", banding.comment);
  sender.setVariable("levelColor", banding.color);
}

function buildAnswersText(sender: any): string {
  const lines: string[] = [];
  sender.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;
    lines.push(
      `${q.name.replace("q", "")}. ${q.title || q.name}: ${q.displayValue || "N/A"}`,
    );
  });
  return lines.join("\n");
}

export default function CraSelfAssessment(props: Readonly<Props>): JSX.Element {
  let surveyContainer: HTMLDivElement | undefined;
  let surveyInstance: Model | null = null;
  const [viewState, setViewState] = createSignal<"form" | "loading" | "error">(
    "form",
  );
  const [errorMessage, setErrorMessage] = createSignal<string>("");

  let fc: any = null;
  let captchaWidget: any = null;

  const initCaptcha = () => {
    const mount = document.querySelector<HTMLElement>(
      "#friendly-captcha-widget",
    );
    if (!mount || !fc) return;
    if (captchaWidget) {
      try {
        captchaWidget.destroy();
      } catch {}
    }
    captchaWidget = fc.createWidget({
      element: mount,
      sitekey: import.meta.env.PUBLIC_FRIENDLY_CAPTCHA_SITEKEY,
    });
  };

  onMount(async () => {
    if (!surveyContainer || !props.surveyJson) return;
    try {
      const mod = await import("@friendlycaptcha/sdk");
      fc = new mod.FriendlyCaptchaSDK();

      // Register the custom 'weight' property for questions
      if (!Serializer.findProperty("question", "weight")) {
        Serializer.addProperty("question", {
          name: "weight:number",
          default: 1,
        });
      }

      const modifiedJson = JSON.parse(JSON.stringify(props.surveyJson));

      // Shared block HTML: banding (level + comment) + score + percentage
      // Uses SurveyJS variables: {levelColor}, {readinessLevel}, {readinessComment}, {totalScore}, {maxScore}, {readinessPercentage}
      const bandingBlockHtml = `
        <div style="font-family: sans-serif; margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);">
          <div style="background-color: {levelColor}; padding: 16px; text-align: center; color: #fff;">
            <h3 style="margin: 0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9;">Assessment Result</h3>
            <h2 style="margin: 4px 0 0 0; font-size: 1.75rem; font-weight: 800;">{readinessLevel}</h2>
          </div>
          <div style="padding: 20px;">
            <div style="margin-bottom: 12px;">
              <div style="font-size: 0.875rem; color: #4b5563; margin-bottom: 4px;">Readiness score</div>
              <div style="position: relative; height: 24px; background: #f3f4f6; border-radius: 8px; overflow: hidden;">
                <div style="height: 100%; width: {readinessPercentage}%; background: {levelColor}; transition: width 0.3s;"></div>
                <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #111827;">{readinessPercentage}%</div>
              </div>
            </div>
            <div style="font-size: 0.95rem; color: #4b5563; margin-bottom: 16px;">Score: <strong>{totalScore}</strong> / <strong>{maxScore}</strong></div>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid {levelColor};">
              <p style="margin: 0; color: #4b5563; line-height: 1.5; font-size: 0.95rem;">{readinessComment}</p>
            </div>
          </div>
        </div>
      `;

      const pages = modifiedJson.pages ?? [];
      const contactPageIndex = pages.findIndex(
        (p: any) => p.name === "contact",
      );
      const contactPage =
        contactPageIndex >= 0
          ? pages[contactPageIndex]
          : pages[pages.length - 1];

      if (contactPage && contactPageIndex >= 0) {
        const contactElements = contactPage.elements ?? [];

        // Results page: score + banding + consultation CTA
        const resultsPage = {
          name: "results",
          title: "Assessment Results",
          elements: [
            {
              type: "html",
              name: "scoreSummary",
              html: bandingBlockHtml.trim(),
            },
            {
              type: "html",
              name: "consultationCta",
              html: '<p style="margin: 0 0 16px 0; color: #4b5563; font-size: 0.95rem;">Contact us for a consultation to discuss your results in more detail.</p>',
            },
          ],
        };

        // Contact page: only form fields (company, email, captcha)
        const formElements = contactElements.filter(
          (e: any) =>
            e.name === "company" || e.name === "email" || e.name === "captcha",
        );
        contactPage.elements = formElements;
        contactPage.title = "Contact details";

        // Insert results page before contact page
        pages.splice(contactPageIndex, 0, resultsPage);
      }

      // Thank-you page: full banding block + ticket
      modifiedJson.completedHtml = `
      <div style="text-align: center; padding: 40px; font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <div style="font-family: sans-serif; margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); text-align: left;">
          <div style="background-color: {levelColor}; padding: 16px; text-align: center; color: #fff;">
            <h3 style="margin: 0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9;">Readiness Level</h3>
            <h2 style="margin: 4px 0 0 0; font-size: 1.75rem; font-weight: 800;">{readinessLevel}</h2>
          </div>
          <div style="padding: 20px;">
            <div style="font-size: 0.95rem; color: #4b5563; margin-bottom: 16px;">Score: <strong>{totalScore}</strong> / <strong>{maxScore}</strong> · <strong>{readinessPercentage}%</strong></div>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid {levelColor}; margin-bottom: 16px;">
              <p style="margin: 0; color: #4b5563; line-height: 1.5; font-size: 0.95rem;">{readinessComment}</p>
            </div>
            <h2 style="margin: 0 0 10px 0; text-align: center;">Thank You!</h2>
            <p style="color: #6b7280; text-align: center; margin-bottom: 16px;">Your assessment has been submitted. One of our experts will be in touch shortly.</p>
          
          </div>
        </div>
      </div>
    `;

      surveyInstance = new Model(modifiedJson);

      // --- SURVEY EVENT LISTENERS ---

      // Update variables whenever any question value changes
      surveyInstance.onValueChanged.add((sender) => setScoreVariables(sender));

      surveyInstance.onCurrentPageChanged.add((sender) =>
        setScoreVariables(sender),
      );

      // Initialize captcha AFTER the contact page DOM is rendered (onCurrentPageChanged fires before DOM is ready)
      surveyInstance.onAfterRenderPage.add((sender, options) => {
        if (options.page?.name === "contact") {
          // Defer to ensure the captcha div is in the DOM
          queueMicrotask(() => initCaptcha());
        }
      });

      // Handle submit: use onCompleting so we run craSubmit BEFORE survey completes
      surveyInstance.onCompleting.add(async (sender, options) => {
        const captchaToken = captchaWidget?.response;

        if (!captchaToken) {
          options.allow = false;
          options.message = "Please complete the captcha before submitting.";
          captchaWidget?.focus?.();
          return;
        }

        setViewState("loading");

        const { totalScore, readinessPercentage } = computeScore(sender);
        const payload = {
          email: sender.data.email ?? "",
          summary: "CRA Self-assessment Results",
          description: `Company: ${sender.data.company}\nScore: ${totalScore}\nReadiness: ${readinessPercentage}%\n\n${buildAnswersText(sender)}`,
          form_id: "cra-self-assessment-results",
          "frc-captcha-response": captchaToken,
        };

        try {
          const { data, error } = await actions.craSubmit(payload);

          if (error) {
            options.allow = false;
            options.message =
              error.message ||
              "Verification failed. Server encountered an error.";
            captchaWidget?.reset?.();
            setViewState("form");
            return;
          }

          // Pass the ticket key so it shows in completedHtml
          sender.setVariable("ticketNumber", data?.ticketKey || "Submitted");
          setViewState("form");
        } catch (err: any) {
          options.allow = false;
          options.message =
            err.message || "An unexpected error occurred. Please try again.";
          captchaWidget?.reset?.();
          setViewState("form");
        }
      });

      // Initial score calculation and rendering
      setScoreVariables(surveyInstance);
      surveyInstance.render(surveyContainer);
    } catch (err) {
      console.error("Survey Initialization Error:", err);
      setViewState("error");
      setErrorMessage("Error loading survey.");
    }
  });

  onCleanup(() => {
    captchaWidget?.destroy?.();
    surveyInstance?.dispose();
  });

  return (
    <div class="relative min-h-[400px] flex flex-col items-center justify-center">
      <Show when={viewState() === "loading"}>
        <div class="text-center p-10 bg-white rounded-xl shadow-lg">
          <div class="w-12 h-12 border-4 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <h2 class="mt-4 font-bold">Submitting Your Request...</h2>
        </div>
      </Show>

      <Show when={viewState() === "error"}>
        <div class="p-8 bg-red-50 text-center rounded-xl border border-red-200">
          <h3 class="text-red-800 font-bold">Error</h3>
          <p>{errorMessage()}</p>
          <button
            onClick={() => setViewState("form")}
            class="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Try Again
          </button>
        </div>
      </Show>

      <div
        ref={surveyContainer}
        class="w-full backdrop-blur rounded-xl shadow-lg"
        style={{ display: viewState() === "form" ? "block" : "none" }}
      />
    </div>
  );
}
