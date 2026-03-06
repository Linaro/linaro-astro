import { z } from "astro/zod";
import sectionSchemas from "./sections";
import { type CollectionEntry } from "astro:content";

const rowReference = (filename: CollectionEntry<"rows">["slug"]) =>
  z.literal(filename);

const sectionWithRef = sectionSchemas.transform((val) => ({
  ...val,
  component: {
    collection: "sections",
    slug: val.component,
  },
}));

export const containerRowSchema = z.object({
  row: rowReference("container_row"),
  no_border: z.boolean().optional(),
  full_width: z.boolean().optional(),
  title: z.string().optional(),
  show_title_line: z.boolean().optional(),
  styles: z
    .object({
      outer: z.string().optional(),
      inner: z.string().optional(),
      title: z.string().optional(),
    })
    .optional(),
  animation: z.string().optional(),
  background_image: z.string().optional(),
  sections: z.array(sectionWithRef).optional(),
  blocks: z
    .array(
      z.object({
        title: z.string().optional(),
        no_border: z.boolean().optional(),
        show_title_line: z.boolean().optional(),
        styles: z
          .object({
            outer: z.string().optional(),
            inner: z.string().optional(),
          })
          .optional(),
        sections: z.array(sectionWithRef),
      }),
    )
    .optional(),
});

export default z.discriminatedUnion("row", [containerRowSchema]);
