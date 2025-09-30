// Run with: node add-tag-slugs.js
// Requires: npm install gray-matter

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const TAGS_DIR = path.join(process.cwd(), "src/content/tags");

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const fileName = path.basename(filePath, ".md").toLowerCase();
  const slugName = fileName.trim();

  if (parsed.data.slug_name !== slugName) {
    parsed.data.slug_name = slugName;
    const out = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, out, "utf8");
    console.log(
      `✅ Added slug_name to ${path.basename(filePath)} -> ${slugName}`,
    );
  } else {
    console.log(`ℹ️ slug_name already correct in ${path.basename(filePath)}`);
  }
}

function run() {
  const files = fs.readdirSync(TAGS_DIR).filter((f) => f.endsWith(".md"));
  files.forEach((file) => processFile(path.join(TAGS_DIR, file)));
}

run();
