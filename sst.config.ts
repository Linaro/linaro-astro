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

    // Look up the Managed-AllViewerExceptHostHeader policy programmatically to ensure the ID is valid
    const policy = aws.cloudfront.getOriginRequestPolicyOutput({
      name: "Managed-AllViewerExceptHostHeader",
    });

    // 2. The Server Function (Handles Actions & SSR for Astro v4)
    const server = new sst.aws.Function("AstroServer", {
      handler: "dist/server/entry.mjs",
      bundle: "dist/server",
      environment,
      url: {
        authorization: "none",
        cors: true,
      },
    });

    // 3. The Static Assets (S3 Bucket)
    const assets = new sst.aws.StaticSite("LinaroAssets", {
      path: "dist/client",
    });

    // 4. The Router
    const router = new sst.aws.Router("LinaroRouter", {
      domain: process.env.CUSTOM_DOMAIN
        ? {
            name: process.env.CUSTOM_DOMAIN,
            aliases:
              process.env.CUSTOM_DOMAIN.replace("www.", "") !==
              process.env.CUSTOM_DOMAIN
                ? [process.env.CUSTOM_DOMAIN.replace("www.", "")]
                : [],
          }
        : undefined,
      routes: {
        "/_astro/*": assets.url,
        "/favicon.ico": assets.url,
        "/pagefind/*": assets.url,
        "/_actions/*": server.url,
        "/*": server.url,
      },
      transform: {
        cdn: (args) => {
          args.transform = {
            distribution: (dist) => {
              // Apply the AllViewerExceptHostHeader policy to the default behavior (/*)
              if (dist.defaultCacheBehavior) {
                (dist.defaultCacheBehavior as any).originRequestPolicyId = policy.id;
              }

              // Apply it ONLY to the Lambda-backed routes (/* and /_actions/*)
              // S3 origins (/_astro/*, /pagefind/*) do not support Origin Request Policies
              dist.orderedCacheBehaviors = (dist.orderedCacheBehaviors as any)?.map(
                (behavior: any) => {
                  if (
                    behavior.pathPattern === "/_actions/*" ||
                    behavior.pathPattern === "/*"
                  ) {
                    behavior.originRequestPolicyId = policy.id;
                  }
                  return behavior;
                }
              );
            },
          };
        },
      },
    });

    return {
      url: router.url,
      server: server.url,
      assets: assets.url,
    };
  },
});
