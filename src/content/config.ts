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
          background_image: z.string(),
          description: z.string(),
          button: z.object({ text: z.string(), url: z.string() }).optional(),
          styles: z
            .object({
              text_container: z.string().optional(),
              background: z.string().optional(),
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

const tags = defineCollection({
  type: "content",
  schema: z.object({ name: z.string() }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  pages,
  rows,
  sections,
  data,
  blogs,
  authors,
  tags,
};
