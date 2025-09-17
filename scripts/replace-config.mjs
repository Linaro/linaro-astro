import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const templatePath = path.resolve("public/admin/config.template.yml");
const outputPath = path.resolve("public/admin/config.yml");

let config = fs.readFileSync(templatePath, "utf-8");

// Replace placeholders with env values
config = config.replace(/\${(\w+)}/g, (_, key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return process.env[key];
});

fs.writeFileSync(outputPath, config);

console.log("Decap CMS config.yml generated with env values");
