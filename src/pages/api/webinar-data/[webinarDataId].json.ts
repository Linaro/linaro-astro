import type { APIRoute } from "astro";

const webinar_credentials: Record<string, string | Record<string, string>> = {
  onelab_scaling:
    "https://static.linaro.org/webinar_credentials/scaling-interoperability-testing-with-onelab-webinar-credentials.json",
  linux_snapdragon:
    "https://static.linaro.org/webinar_credentials/inside-linux-on-snapdragon-webinar-credentials-2.json",
  cra_compliance_journey:
    "https://static.linaro.org/webinar_credentials/cra-compliance-journey-webinar-credentials.json",
  mastering_parallel_debugging_and_profiling_with_linaro_forge: {
    type: "link",
    url: "https://bit.ly/42L94i6",
    passcode: "",
  },
};
export const GET: APIRoute = async ({ params, request }) => {
  const id = params.webinarDataId;

  const entry = id ? webinar_credentials[id] : undefined;

  if (!entry) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  // If the entry is an inline object, return it directly
  if (typeof entry === "object") {
    return new Response(JSON.stringify(entry), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }

  // Otherwise, fetch from the remote URL
  try {
    const response = await fetch(entry);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch webinar data" }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("API route error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export function getStaticPaths() {
  return [
    { params: { webinarDataId: "linux_snapdragon" } },
    { params: { webinarDataId: "onelab_scaling" } },
    { params: { webinarDataId: "cra_compliance_journey" } },
    {
      params: {
        webinarDataId:
          "mastering_parallel_debugging_and_profiling_with_linaro_forge",
      },
    },
  ];
}
