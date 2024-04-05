import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  image: {
    remotePatterns: [{
      protocol: "https"
    }],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
     },
  },
},
  cacheDir: "./cache",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx()]
});