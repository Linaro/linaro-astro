/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "linaro-website",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile: process.env.AWS_PROFILE,
        },
      },
    };
  },
  async run() {
    const site = new sst.aws.Astro("LinaroOrgSite", {
      domain: process.env.CUSTOM_DOMAIN
        ? {
          name: process.env.CUSTOM_DOMAIN,
          aliases: process.env.CUSTOM_DOMAIN.replace("www.", "") !== process.env.CUSTOM_DOMAIN ? [process.env.CUSTOM_DOMAIN.replace("www.", "")] : [],
        }
        : undefined,
      environment: {
        IS_PUBLIC: process.env.IS_PUBLIC || "true",
        IS_PREVIEW: process.env.IS_PREVIEW || "false",
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
        PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME!,
        PUBLIC_FRIENDLY_CAPTCHA_SITEKEY: process.env.PUBLIC_FRIENDLY_CAPTCHA_SITEKEY!,
        FRIENDLY_CAPTCHA_API_KEY: process.env.FRIENDLY_CAPTCHA_API_KEY!,
        PIPELINE_CRM_API_KEY: process.env.PIPELINE_CRM_API_KEY!,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
        AUTH_TRUST_HOST: "true",
        AUTH_SECRET: process.env.AUTH_SECRET!,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET!,
        AUTH0_ISSUER_BASE: process.env.AUTH0_ISSUER_BASE!,
        AUTH_API_URL: process.env.AUTH_API_URL!,
        SPIRE_WEBSITES_ID: process.env.SPIRE_WEBSITES_ID!,
        PUBLIC_KEY_URL: process.env.PUBLIC_KEY_URL!,
      },
    });

    return {
      url: site.url,
    };
  },
});
