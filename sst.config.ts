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
      PIPELINE_CRM_API_KEY: process.env.PIPELINE_CRM_API_KEY!,
      PIPELINE_CRM_APP_KEY: process.env.PIPELINE_CRM_APP_KEY!,
    };

    console.log("Checking Stage:", $app.stage);
    console.log("Checking CUSTOM_DOMAIN env:", process.env.CUSTOM_DOMAIN);

    const domainName = process.env.CUSTOM_DOMAIN;

    if ($app.stage === "production" && !domainName) {
      console.warn(
        "⚠️ WARNING: Stage is production but CUSTOM_DOMAIN is undefined!",
      );
    }

    if ($app.stage !== "production") {
      console.warn("⚠️ WARNING: Stage is not called 'production'!");
    }

    const domain =
      $app.stage === "prod" && process.env.CUSTOM_DOMAIN
        ? {
            name: process.env.CUSTOM_DOMAIN,
            dns: sst.aws.dns({
              zone: "Z09046081VYR7RM3MIIG5", // Replace with your actual Route 53 Hosted Zone ID
            }),
            aliases: [],
          }
        : undefined;

    const site = new sst.aws.Astro("LinaroSite", {
      environment,
      domain,
    });

    // This is *TEMPORARILY* needed because of a bug between SST v3
    // and Pulumi, missing out an additional permission required by AWS.
    if (site?.nodes?.server) {
      new aws.lambda.Permission("MyServiceInvokePermission", {
        action: "lambda:InvokeFunction",
        function: site.nodes.server.name,
        principal: "*",
        statementId: "FunctionURLInvokeAllowPublicAccess",
      });
    }

    return {
      url: site.url,
    };
  },
});
