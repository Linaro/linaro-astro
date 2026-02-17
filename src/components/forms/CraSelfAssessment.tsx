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
      color: "#f87171", // Red
      comment:
        "Your responses indicate significant gaps against the requirements of the EU Cyber Resilience Act (CRA). Substantial re-work across risk management, secure design, and vulnerability handling is likely required before the product could be considered compliant. Immediate attention is recommended, particularly for mandatory CRA obligations.",
    };
  } else if (percentage <= 59) {
    return {
      level: "Emerging",
      color: "#fb923c", // Orange
      comment:
        "Your product demonstrates early progress towards CRA readiness, but important requirements are only partially implemented or missing. Targeted remediation and formalisation of processes will be required to reduce the risk of non-compliance.",
    };
  } else if (percentage <= 79) {
    return {
      level: "Developing",
      color: "#facc15", // Yellow/Gold
      comment:
        "Your product is broadly aligned with many CRA requirements, with several key controls already implemented. However, gaps remain that may prevent full compliance. Focused improvements and validation of existing processes are recommended.",
    };
  } else {
    return {
      level: "Strong",
      color: "#4ade80", // Green
      comment:
        "Your product demonstrates strong alignment with the requirements of the EU Cyber Resilience Act. Based on the information provided, only minor enhancements or validation activities are likely required to achieve and maintain compliance.",
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

    // 1. Ensure rawValue is at least 0
    const rawValue = Math.max(0, Number(q.value ?? 0));

    // Your existing logic: cap the question score at 1
    const adjustedScore = Math.min(rawValue, 1);

    totalScore += adjustedScore * weight;

    // 2. Ensure max score calculation also treats negative choices as 0
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

  // New banding variables
  sender.setVariable("readinessLevel", banding.level);
  sender.setVariable("readinessComment", banding.comment);
  sender.setVariable("levelColor", banding.color);
}

function buildAnswersText(sender: any): string {
  const lines: string[] = [];
  sender.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;

    const qNumber = q.name.replace("q", "");
    const questionText = q.title || q.name;
    const answerText = q.displayValue ? String(q.displayValue) : "N/A";

    lines.push(`${qNumber}. ${questionText} ${answerText}`);
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
        captchaWidget.destroy?.();
      } catch {}
      captchaWidget = null;
    }
    captchaWidget = fc.createWidget({
      element: mount,
      sitekey: import.meta.env.PUBLIC_FRIENDLY_CAPTCHA_SITEKEY,
    });
  };

  const wireSurveyEvents = (survey: Model) => {
    survey.onValueChanged.add((sender: any) => setScoreVariables(sender));
    survey.onAfterRenderPage.add((_sender: any, options: any) => {
      if (options.page?.name === "contact") initCaptcha();
    });

    survey.onComplete.add(async (sender: any) => {
      const captchaToken = captchaWidget?.response;

      if (!captchaToken) {
        alert("Please complete the captcha before submitting!");
        sender.clear(false, true);
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

        if (error)
          throw new Error("Verification failed. Server encountered an error.");

        // Type cast to handle dynamic ticket Key from Jira/Backend
        const ticketKey = data?.ticketKey || "Submitted";

        sender.setVariable("ticketNumber", ticketKey);

        setViewState("form");
      } catch (err: any) {
        setErrorMessage(err.message || "An unexpected error occurred.");
        setViewState("error");
        captchaWidget?.reset?.();
      }
    });
  };

  onMount(async () => {
    if (!surveyContainer || !props.surveyJson) return;
    try {
      const mod = await import("@friendlycaptcha/sdk");
      fc = new mod.FriendlyCaptchaSDK();

      if (!Serializer.findProperty("question", "weight")) {
        Serializer.addProperty("question", {
          name: "weight:number",
          default: 1,
        });
      }

      const modifiedJson = { ...props.surveyJson };
      modifiedJson.completedHtml = `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; text-align: left; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff;">
    <div style="background-color: {levelColor}; padding: 24px; text-align: center; color: #fff;">
      <h3 style="margin: 0; font-size: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Readiness Level</h3>
      <h2 style="margin: 10px 0 0 0; font-size: 2.5rem; font-weight: 800;">{readinessLevel}</h2>
    </div>
    
    <div style="padding: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6;">
        <div>
          <span style="color: #6b7280; font-size: 0.875rem;">Score</span>
          <div style="font-size: 1.5rem; font-weight: 700; color: #111827;">{totalScore} / {maxScore}</div>
        </div>
        <div style="text-align: right;">
          <span style="color: #6b7280; font-size: 0.875rem;">Percentage</span>
          <div style="font-size: 1.5rem; font-weight: 700; color: {levelColor};">{readinessPercentage}%</div>
        </div>
      </div>

      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid {levelColor};">
        <h4 style="margin: 0 0 8px 0; color: #374151; font-size: 1rem;">Assessment Summary</h4>
        <p style="margin: 0; color: #4b5563; line-height: 1.6; font-size: 0.95rem;">{readinessComment}</p>
      </div>

      <div style="margin-top: 24px; text-align: center; color: #6b7280; font-size: 0.875rem;">
        <p><strong>A support ticket has been created.</strong><br/>
        Our experts will contact you shortly to discuss these findings.</p>
      </div>
    </div>
  </div>
`;

      surveyInstance = new Model(modifiedJson);
      wireSurveyEvents(surveyInstance);
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
    <div
      class={`${"relative min-h-[400px] flex flex-col items-center justify-center"}`}
    >
      {/* FULL SCREEN SPINNER */}
      <Show when={viewState() === "loading"}>
        <div class="flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-lg text-center">
          <div class="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <h2 class="mt-6 text-xl font-bold text-gray-800">
            Processing Results
          </h2>
          <p class="text-gray-500">
            Please wait while we secure your assessment...
          </p>
        </div>
      </Show>

      {/* ERROR SCREEN */}
      <Show when={viewState() === "error"}>
        <div class="max-w-md p-8 bg-red-50 border border-red-200 rounded-xl text-center shadow-md">
          <div class="text-red-500 mb-4 text-center">
            <svg
              class="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-red-800 mb-2">Submission Failed</h3>
          <p class="text-red-700 mb-6">{errorMessage()}</p>
          <button
            onClick={() => {
              setViewState("form");
              if (captchaWidget) captchaWidget.reset();
            }}
            class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Go Back & Try Again
          </button>
        </div>
      </Show>

      {/* SURVEY VIEW */}
      <div
        ref={surveyContainer}
        id="surveyContainer"
        class="w-full backdrop-blur rounded-xl p-2 shadow-lg"
        style={{ display: viewState() === "form" ? "block" : "none" }}
      >
        <div class="p-5 text-gray-400 text-center">Initialising Survey...</div>
      </div>
    </div>
  );
}
