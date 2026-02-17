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

function isScoredQuestion(q: any): boolean {
  return typeof q?.name === "string" && Q_NAME_RE.test(q.name);
}

function computeScore(survey: any) {
  let totalScore = 0;
  let maxScore = 0;
  survey.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;
    const weight = Number(q.weight ?? 1);
    const value = Number(q.value ?? 0);
    totalScore += value * weight;
    const maxChoiceValue = Math.max(
      ...(q.choices ?? []).map((c: any) => Number(c.value ?? 0)),
      0,
    );
    maxScore += maxChoiceValue * weight;
  });
  const readinessPercentage =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 1000) / 10 : 0;
  return { totalScore, maxScore, readinessPercentage };
}

function setScoreVariables(sender: any) {
  const { totalScore, maxScore, readinessPercentage } = computeScore(sender);
  sender.setVariable("totalScore", totalScore);
  sender.setVariable("maxScore", maxScore);
  sender.setVariable("readinessPercentage", readinessPercentage);
}

function buildAnswersText(sender: any): string {
  const lines: string[] = [];
  sender.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;

    // Extracts the number from the name property
    const qNumber = q.name.replace("q", "");
    const questionText = q.title || q.name;
    const answerText = q.displayValue ? String(q.displayValue) : "N/A";

    lines.push(`${qNumber}. ${questionText}: ${answerText}`);
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
        <h3>Thanks!</h3>
        <p>Your CRA readiness score is: <strong>{totalScore}</strong> / <strong>{maxScore}</strong></p>
        <p>Your readiness percentage is: <strong>{readinessPercentage}%</strong></p>
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
