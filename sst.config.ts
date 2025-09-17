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
  stacks(app) {
    app.stack(function Site({ stack }) {
      if (process.env.IS_PUBLIC === "true") {
        const site = new AstroSite(stack, "LinaroOrgStaticSite", {
          customDomain: {
            // domainAlias: process.env.CUSTOM_DOMAIN!.replace("www.", ""),
            domainName: process.env.CUSTOM_DOMAIN!,
          },
          environment: {
            IS_PUBLIC: "true",
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
            CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
            CLOUDINARY_UNSIGNED_UPLOAD_PRESET:
              process.env.CLOUDINARY_UNSIGNED_UPLOAD_PRESET!,
            PUBLIC_CLOUDINARY_CLOUD_NAME:
              process.env.PUBLIC_CLOUDINARY_CLOUD_NAME!,
          },
        });
        stack.addOutputs({
          url: site.url,
        });
      } else {
        const site = new AstroSite(stack, "LinaroOrgProtectedSite", {
          runtime: "nodejs20.x",
          customDomain: process.env.CUSTOM_DOMAIN!,
          buildCommand: `yarn build:auth`,
          nodejs: {
            install: ["@biscuit-auth/biscuit-wasm"],
          },
          timeout: "30 seconds",
          environment: {
            AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
            AUTH_TRUST_HOST: "true",
            AUTH_SECRET: process.env.AUTH_SECRET!,
            AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET!,
            AUTH0_ISSUER_BASE: process.env.AUTH0_ISSUER_BASE!,
            AUTH_API_URL: process.env.AUTH_API_URL!,
            NODE_OPTIONS: "--experimental-wasm-modules",
            SPIRE_WEBSITES_ID: process.env.SPIRE_WEBSITES_ID!,
            PUBLIC_KEY_URL: process.env.PUBLIC_KEY_URL!,
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!,
            CLOUDINARY_URL: process.env.CLOUDINARY_URL!,
            CLOUDINARY_UNSIGNED_UPLOAD_PRESET:
              process.env.CLOUDINARY_UNSIGNED_UPLOAD_PRESET!,
            PUBLIC_CLOUDINARY_CLOUD_NAME:
              process.env.PUBLIC_CLOUDINARY_CLOUD_NAME!,
            IS_PREVIEW: process.env.IS_PREVIEW!,
          },
        });
        stack.addOutputs({
          url: site.url,
        });
      }
    });
  },
} satisfies SSTConfig;
