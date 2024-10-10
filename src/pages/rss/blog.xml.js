import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blogs");

  const items = [
    ...blog.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/blog/${item.slug}`,
    })),
  ].sort((a, b) => {
    return b.pubDate - a.pubDate;
  });

  return rss({
    title: "Linaro Blog RSS Feed",
    description: "Linaro Blog",
    site: context.site,
    items: items,
  });
}
