import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);

// sst.config.ts
import "sst/constructs";
var sst_config_default = {
  config(_input) {
    return {
      name: "linaro-website",
      region: "us-east-1",
      profile: process.env.AWS_PROFILE
    };
  }
};
export {
  sst_config_default as default
};
