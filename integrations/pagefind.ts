import type { AstroIntegration } from "astro";
import { execSync } from "child_process";
import sirv from "sirv";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

export default function pagefind({is_pre_build, is_public}: {is_pre_build: boolean, is_public: boolean}): AstroIntegration {
    let outDir: string;
    if (is_pre_build) return {name: "pagefind", hooks: {}};
    return {
        name: "pagefind",
        hooks: {
            "astro:config:setup": ({ config, logger }) => {
                // In a Hybrid/SSR build with SST, static assets always live in dist/client.
                // We simplify this to ensure Pagefind always indexes the folder SST uploads.
                const target = "dist/client";
                outDir = `./${target}`;
            },
            "astro:server:setup": ({ server, logger }) => {
                if (!outDir) {
                    logger.warn(
                        "astro-pagefind couldn't reliably determine the output directory. Search assets will not be served.",
                    );
                    return;
                }
                logger.warn(outDir)
                const serve = sirv(outDir, {
                    dev: true,
                    etag: true,
                });
                server.middlewares.use((req, res, next) => {
                    if (req.url?.startsWith("/pagefind/")) {
                        serve(req, res, next);

  return {
    name: "pagefind",
    hooks: {
      "astro:config:done": ({ config }) => {
        // In Astro v5 SSR/SST, static files are always in /client
        outDir = fileURLToPath(new URL("client", config.outDir));
      },
      "astro:server:setup": ({ server, logger }) => {
        // Serve the pagefind folder from dist/client during dev
        // We use a middleware that runs BEFORE the Astro router
        const serve = sirv(outDir, { dev: true, etag: true });

        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/pagefind/")) {
            // Check if directory exists before trying to serve
            if (fs.existsSync(outDir)) {
              serve(req, res, next);
            } else {
              logger.warn(
                "Pagefind folder not found in dist/client. Run 'npm run build' first.",
              );
              next();
            }
          } else {
            next();
          }
        });
      },
      "astro:build:done": ({ logger }) => {
        if (is_pre_build) return;

        logger.info(`Indexing site in ${outDir}...`);

        try {
          // Force npx pagefind to run
          execSync(`npx pagefind --site "${outDir}"`, {
            stdio: "inherit",
          });
        } catch (e) {
          logger.error(
            "Pagefind indexing failed. Ensure 'pagefind' is in your devDependencies.",
          );
        }
      },
    },
  };
}
