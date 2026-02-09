// src/pages/api/whitepaper-data/[whitepaperId].ts
import type { APIRoute } from "astro";

const whitepapers: Record<string, string> = {
  // Add the correct key from your original page
  "from-x86-to-arm":
    "https://static.linaro.org/assets/WP+-+From+x86+to+Arm_v9_combined.pdf",
  // add more here
};

export const GET: APIRoute = async ({ params }) => {
  const id = params.whitepaperId;
  const targetUrl = id ? whitepapers[id] : undefined;

  console.log(`Requested whitepaper ID: ${id}, URL: ${targetUrl}`);

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ url: targetUrl }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};

export function getStaticPaths() {
  return [{ params: { whitepaperId: "from-x86-to-arm" } }];
}
