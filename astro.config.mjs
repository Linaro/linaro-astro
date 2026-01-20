import { defineConfig } from "astro/config";
import aws from "astro-sst";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import pagefind from "./integrations/pagefind";
import auth from "./integrations/auth";
import { loadEnv } from "vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

const { IS_PUBLIC, PRE_BUILD, CUSTOM_DOMAIN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);
const is_public = IS_PUBLIC === "true";
const is_pre_build = PRE_BUILD === "true";

// https://astro.build/config
export default defineConfig({
  ...(is_public
    ? {
        output: "static",
        adapter: aws(),
        integrations: [
          sitemap(),
          pagefind({
            is_pre_build: is_pre_build,
            is_public: is_public,
          }),
          tailwind({
            applyBaseStyles: false,
          }),
          solidJs(),
          icon({
            iconDir: "src/assets/icons",
          }),
          mdx(),
        ],
      }
    : {
        output: PRE_BUILD ? "hybrid" : "server",
        adapter: aws({
          serverRoutes: ["/api/*"],
        }),
        integrations: [
          sitemap(),
          pagefind({
            is_pre_build: is_pre_build,
            is_public: is_public,
          }),
          tailwind({
            applyBaseStyles: false,
          }),
          solidJs(),
          icon({
            iconDir: "src/assets/icons",
          }),
          mdx(),
          auth({
            injectEndpoints: true,
          }),
        ],
      }),
  site: `https://${CUSTOM_DOMAIN}`,
  cacheDir: "./cache",
  compressHTML: true,
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["/pagefind/pagefind.js"],
    },
    redirects: true,
  },
  vite: {
    optimizeDeps: { exclude: ["auth:config"] },
  },
  redirects: {
    "/lts": "/solutions/lts",
    "/automotive-iot-and-edge-devices": "/projects/automotive-iot-edge",
    "/cloud-computing-and-servers": "/projects/cloud-computing",
    "/windows-on-arm": "/projects/windows-on-arm",
    "/services/hands-on-training": "/services/training",
    "/working-groups": "/",
    "/projects": "/",
    // '/core-technologies/[...slug]': "/",
    "/core-technologies/virtualization": "/projects/automotive-iot-edge",
    "/core-technologies/artificial-intelligence": "/solutions/ai-ml",
    "/support": "/contact",
    "/about/team": "/about",
    "/about/tsc": "/about",
    // '/learning-hub/[...slug]': '/about',
    "/whitepapers/protecting-investment-in-code-optimisation-with-toolchain-ci-linaro-white-paper/":
      "/whitepapers",
    "/sig": "/",
    "/latest/downloads": "/downloads",
    //hidden pages
    "/connect": "/",
    "/connect/registration": "/",
    "/connect/schedule": "/",
    "/connect/sponsorship": "/",
    "/technologies/apache-big-top": "/",
    "/projects/automotive-iot-edge": "/",
    "/technologies/ai-ml": "/",
    "/projects/cloud-computing": "/",
    "/solutions/codelinaro": "/",
    "/solutions/iot-embedded": "/",
    "/projects/windows-on-arm": "/",
    "/industries/enterprise": "/",
  },
});
