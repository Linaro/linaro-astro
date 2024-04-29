import { z } from "astro/zod";
import sectionSchemas from "./sections";
import { type CollectionEntry } from "astro:content";

const rowReference = (filename: CollectionEntry<"rows">["slug"]) =>
  z.literal(filename);

export const containerRowSchema = z.object({
  row: rowReference("container_row"),
  no_border: z.boolean().optional(),
  title: z.string().optional(),
  styles: z
    .object({
      outer: z.string().optional(),
      inner: z.string().optional(),
    })
    .optional(),
  background_image: z.string().optional(),
  sections: z.array(
    sectionSchemas.transform((val) => ({
      ...val,
      component: {
        collection: "sections",
        slug: val.component,
      },
    }))
  ),
});

export default z.discriminatedUnion("row", [containerRowSchema]);
