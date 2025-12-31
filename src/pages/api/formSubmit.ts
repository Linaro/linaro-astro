import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();

    const upstream = await fetch(process.env.FORM_ENDPOINT!, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "X-Api-Key": process.env.API_KEY!,
      },
    });

    const data = await upstream.json();
    return new Response(JSON.stringify(data), {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error forwarding request.", err }),
      { status: 500 },
    );
  }
};
