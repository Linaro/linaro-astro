export async function GET() {
  try {
    const response = await fetch(
      "https://static.linaro.org/webinar_credentials/scaling-interoperability-testing-with-onelab-webinar-credentials.json",
    );

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
