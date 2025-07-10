const webinar_credentials: Record<string, string> = {
  onelab_scaling:
    "https://static.linaro.org/webinar_credentials/scaling-interoperability-testing-with-onelab-webinar-credentials.json",
  linux_snapdragon:
    "https://static.linaro.org/webinar_credentials/inside-linux-on-snapdragon-webinar-credentials.json",
};
export async function GET(context: { url: URL }) {
  const id = context.url.searchParams.get("webinarDataId");
  console.log("webinarDataId:", id);
  console.log("url:", context.url);
  const targetUrl = id
    ? webinar_credentials[id as keyof typeof webinar_credentials]
    : undefined;

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    const response = await fetch(targetUrl);

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
}
