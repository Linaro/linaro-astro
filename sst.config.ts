import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";
export default {
  config(_input) {
    return {
      name: "linaro-website",
      region: "us-east-1",
      profile: process.env.AWS_PROFILE,
    };
  },
  async run() {
    // 1. Common environment variables used by both Build and Runtime
    const environment = {
      IS_PUBLIC: process.env.IS_PUBLIC || "true",
      IS_PREVIEW: process.env.IS_PREVIEW || "false",
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
      PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME!,
      PUBLIC_FRIENDLY_CAPTCHA_SITEKEY:
        process.env.PUBLIC_FRIENDLY_CAPTCHA_SITEKEY!,
      FRIENDLY_CAPTCHA_API_KEY: process.env.FRIENDLY_CAPTCHA_API_KEY!,
      PIPELINE_CRM_W2LID: process.env.PIPELINE_CRM_W2LID!,
      PIPELINE_CRM_ENDPOINT: process.env.PIPELINE_CRM_ENDPOINT!,
    };

    // 2. The Modern Astro Component (Replaces Function, StaticSite, and Router)
    const site = new sst.aws.Astro("LinaroSite", {
      environment,
      domain: process.env.CUSTOM_DOMAIN
        ? {
            name: process.env.CUSTOM_DOMAIN,
            aliases: process.env.CUSTOM_DOMAIN.startsWith("www.")
              ? [process.env.CUSTOM_DOMAIN.replace("www.", "")]
              : [],
          }
        : undefined,
      // This automatically handles /_astro, /_actions, and SSR routing
    });

    return {
      url: site.url,
    };
  },
} satisfies SSTConfig;
