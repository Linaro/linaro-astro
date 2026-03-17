import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const news = await getCollection("news");
  const blog = await getCollection("blogs");

  const items = [
    ...news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/news/${item.id.replace(/\.mdx?$/, "")}`,
    })),
    ...blog.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/blog/${item.id.replace(/\.mdx?$/, "")}`,
    })),
  ].sort((a, b) => {
    return b.pubDate - a.pubDate;
  });

  return rss({
    title: "Linaro RSS Feed",
    description: "Linaro RSS Feed",
    site: context.site,
    items: items,
  });
}
