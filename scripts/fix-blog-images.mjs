import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");
const CLOUDINARY_PREFIX =
  "https://res.cloudinary.com/dl7c2wmhi/image/upload/v1758792170/";

function fixImageLink(image) {
  if (!image) return image;
  // If it's already a Cloudinary link, skip
  if (image.startsWith("http")) return image;
  // Otherwise, prepend the prefix
  return CLOUDINARY_PREFIX + image.replace(/^\/+/, "");
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const parsed = matter(content);

  if (parsed.data.image) {
    const oldImage = parsed.data.image;
    const newImage = fixImageLink(oldImage);

    if (oldImage !== newImage) {
      parsed.data.image = newImage;
      const updated = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(filePath, updated, "utf8");
      console.log(`✅ Updated image in: ${filePath}`);
    } else {
      console.log(`ℹ️ Skipped (already correct): ${filePath}`);
    }
  } else {
    console.log(`⚠️ No image field in: ${filePath}`);
  }
}

function run() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  files.forEach((file) => {
    const filePath = path.join(BLOG_DIR, file);
    processFile(filePath);
  });
}

run();
