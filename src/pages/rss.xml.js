import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const news = await getCollection("news");

  return rss({
    title: "Linaro News and Blog",
    description: "Linaro News and Blog",
    site: context.site,
    items: [
      ...blog.map((item) => ({
        title: item.data.title,
        pubDate: item.data.date,
        description: item.data.description,
        link: `/blog/${item.slug}`,
      })),
      ...news.map((item) => ({
        title: item.data.title,
        pubDate: item.data.date,
        description: item.data.description,
        link: `/news/${item.slug}`,
      })),
    ],
  });
}
