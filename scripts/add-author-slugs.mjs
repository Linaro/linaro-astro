// Run with: node fix-author-images.js
// Requires: npm install gray-matter

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const AUTHORS_DIR = path.join(process.cwd(), "src/content/authors");
const CLOUDINARY_PREFIX =
  "https://res.cloudinary.com/dl7c2wmhi/image/upload/v1758792170/";

function fixImageLink(image) {
  if (!image) return image;
  const s = String(image).trim();
  // Skip if already a full http/https URL
  if (/^https?:\/\//i.test(s)) return s;
  // Otherwise prepend the Cloudinary prefix
  return CLOUDINARY_PREFIX + s.replace(/^\/+/, "");
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  if (parsed.data.image) {
    const oldImage = parsed.data.image;
    const newImage = fixImageLink(oldImage);

    if (oldImage !== newImage) {
      parsed.data.image = newImage;
      const out = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(filePath, out, "utf8");
      console.log(
        `✅ Updated image in ${path.basename(filePath)} -> ${newImage}`,
      );
    } else {
      console.log(`ℹ️ Skipped (already correct) ${path.basename(filePath)}`);
    }
  } else {
    console.log(`⚠️ No image field in ${path.basename(filePath)}`);
  }
}

function run() {
  const files = fs.readdirSync(AUTHORS_DIR).filter((f) => f.endsWith(".md"));
  files.forEach((file) => processFile(path.join(AUTHORS_DIR, file)));
}

run();
