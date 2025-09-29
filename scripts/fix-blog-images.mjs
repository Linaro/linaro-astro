import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");
const CLOUDINARY_PREFIX =
  "https://res.cloudinary.com/dl7c2wmhi/image/upload/v1758792170/";

// --- Helpers ---
function fixFrontmatterImage(image) {
  if (!image) return image;
  if (image.startsWith("http")) return image; // already fixed
  return CLOUDINARY_PREFIX + image.replace(/^\/+/, "");
}

function fixBodyImages(body) {
  // Replace any link or image path that starts with /aro-website
  return body.replace(
    /(\]\(|!\[.*?\]\()\/linaro-website/gi,
    `$1${CLOUDINARY_PREFIX}linaro-website`,
  );
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  let changed = false;

  // --- Fix frontmatter image ---
  if (parsed.data.image) {
    const oldImage = parsed.data.image;
    const newImage = fixFrontmatterImage(oldImage);
    if (oldImage !== newImage) {
      parsed.data.image = newImage;
      changed = true;
      console.log(`🖼️ Fixed frontmatter image in ${filePath}`);
    }
  }

  // --- Fix body images ---
  const oldBody = parsed.content;
  const newBody = fixBodyImages(oldBody);
  if (oldBody !== newBody) {
    parsed.content = newBody;
    changed = true;
    console.log(`📝 Fixed body images in ${filePath}`);
  }

  // --- Write back if changed ---
  if (changed) {
    const updated = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

function run() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  files.forEach((file) => processFile(path.join(BLOG_DIR, file)));
}

run();
