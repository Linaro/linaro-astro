import { z, defineCollection, reference } from "astro:content";

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
          button: z.object({text: z.string(), url: z.string()}).optional()
        })
        .optional(),
      flow: z
        .array(
          z.object({
            row: reference("rows"),
            styles: z.string().optional(),
            background_image: z.string().optional(),
            sections: z.array(
              z
                .object({
                  component: reference("sections"),
                })
                .catchall(z.any())
            ),
          }).catchall(z.any())
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

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  pages,
  rows,
  sections,
  data,
};
