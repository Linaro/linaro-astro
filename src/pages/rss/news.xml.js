import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const news = await getCollection("news");

  const items = [
    ...news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/news/${item.slug}`,
    })),
  ].sort((a, b) => {
    return b.pubDate - a.pubDate;
  });

  return rss({
    title: "Linaro News RSS Feed",
    description: "Linaro News",
    site: context.site,
    items: items,
  });
}
