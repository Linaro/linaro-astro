import { z, defineCollection, reference } from "astro:content";
import rowSchemas from "./schemas/rows";

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: z
        .object({
          title: z.string(),
          background_image: z.string().optional(),
          description: z.string(),
          button: z.object({ text: z.string(), url: z.string() }).optional(),
          styles: z
            .object({
              text_container: z.string().optional(),
              background: z.string().optional(),
              background_container: z.string().optional(),
              main_container: z.string().optional(),
              title: z.string().optional(),
              description: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
      connectHero: z
        .object({
          background: z.string(),
          inner_image: z.string().optional(),
          description: z.string().optional(),
          child_page: z.boolean().optional(),
          dates: z.string().optional(),
          styles: z
            .object({
              text_container: z.string().optional(),
              background: z.string().optional(),
              background_container: z.string().optional(),
              main_container: z.string().optional(),
              title: z.string().optional(),
              description: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
      flow: z
        .array(
          rowSchemas.transform((val) => ({
            ...val,
            row: {
              collection: "rows",
              slug: val.row,
            },
          }))
        )
        .optional(),
    }),
});

const rows = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const sections = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    tags: z.array(reference("tags")),
    author: reference("authors"),
    related: z.array(reference("blogs")),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    tags: z.array(reference("tags")),
    author: reference("authors"),
    related: z.array(reference("news")),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date_published: z.date(),
    event_start: z.date(),
    event_end: z.date(),
    image: z.string(),
    type: z.enum(["webinar", "presenter", "attend", "tech_days", "sponsor"]),
    location: z.string(),
    button: z
      .object({
        text: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
});

const authors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    username: z.string().optional(),
    image: z.string().optional(),
  }),
});

const team_members = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

const tags = defineCollection({
  type: "content",
  schema: z.object({ name: z.string() }),
});

export const collections = {
  pages,
  rows,
  sections,
  data,
  blogs,
  events,
  authors,
  tags,
  news,
  team_members,
};
