import { onMount, onCleanup } from "solid-js";
import type { JSX } from "solid-js";
import { Model } from "survey-core";
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

function buildAnswers(sender: any): Record<number, string> {
  const answers: Record<number, string> = {};

  sender.getAllQuestions().forEach((q: any) => {
    if (!isScoredQuestion(q)) return;
    const questionNumber = Number(q.name.replace("q", ""));
    answers[questionNumber] = String(q.displayValue ?? "");
  });

  return answers;
}

function renderSurvey(survey: Model, container: HTMLDivElement) {
  container.innerHTML = "";
  survey.render(container);
}

// function wireSurveyEvents(survey: Model) {
//   survey.onValueChanged.add((sender: any) => setScoreVariables(sender));
//   survey.onCurrentPageChanged.add((sender: any) => setScoreVariables(sender));

//   survey.onComplete.add((sender: any) => {
//     const score = computeScore(sender);
//     const company = sender.data.company;
//     const answers = buildAnswers(sender);

//     console.log("CRA Result:", {
//       company,
//       answers,
//       score,
//     });
//   });
// }

function wireSurveyEvents(survey: Model) {
  survey.onValueChanged.add((sender: any) => setScoreVariables(sender));
  survey.onCurrentPageChanged.add((sender: any) => setScoreVariables(sender));

  survey.onComplete.add(async (sender: any) => {
    const { totalScore, readinessPercentage } = computeScore(sender);
    const company = sender.data.company;
    const answers = buildAnswers(sender);

    const payload = {
      Company: company,
      "Total Score": totalScore,
      "Readiness Percentage": readinessPercentage,
      ...answers,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(
        "https://avqfk3gzg2.execute-api.us-east-1.amazonaws.com/prod/formSubmit",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "ox9fSkYfRK16mxy5Gv6pM121H7iAubAQ6uzsDmoW",
          },
        },
      );

      const result = await response.json();
      console.log("API response:", result);

      // Optional: redirect after successful submit
      // window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  });
}

export default function CraSelfAssessment(props: Readonly<Props>): JSX.Element {
  let surveyContainer: HTMLDivElement | undefined;
  let surveyInstance: Model | null = null;

  onMount(() => {
    console.log("Mounted");
    if (!surveyContainer || !props.surveyJson) {
      console.error("Survey container or JSON missing");
      return;
    }

    try {
      surveyInstance = new Model(props.surveyJson);
      wireSurveyEvents(surveyInstance);
      setScoreVariables(surveyInstance);
      renderSurvey(surveyInstance, surveyContainer);
    } catch (error) {
      console.error("Error initializing survey:", error);
      surveyContainer.innerHTML = `
        <div class="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          Error loading survey. Check console for details.
        </div>
      `;
    }
  });

  onCleanup(() => {
    surveyInstance?.dispose();
  });

  return (
    <div
      ref={surveyContainer}
      id="surveyContainer"
      class="min-h-[200px] backdrop-blur rounded-xl p-2 shadow-lg"
    >
      <div class="p-5 text-gray-400 text-center">Loading survey...</div>
    </div>
  );
}
