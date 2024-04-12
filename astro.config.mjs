import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import pagefind from "./integrations/pagefind";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "static",
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
  },
  cacheDir: "./cache",
  integrations: [
    solidJs(),
    icon({
      iconDir: "src/assets/icons",
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    pagefind({
      is_pre_build: false,
      is_public: true,
    }),
    mdx(),
  ],
});
