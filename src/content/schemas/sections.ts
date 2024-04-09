import { z } from "astro/zod";
import { reference, type CollectionEntry } from "astro:content";

const component = (filename: CollectionEntry<"sections">["slug"]) =>
  z.literal(filename);

export const buttonsSchema = z.object({
  component: component("buttons"),
  buttons: z.array(
    z.object({
      text: z.string(),
      url: z.string(),
      style: z.string(),
    })
  ),
});

export const fileCarouselSchema = z.object({
  component: component("file_carousel"),
  filename: reference("data"),
});

export const cardsSchema = z.object({
  component: component("cards"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
      cardTitle: z.string().optional(),
      card_heading: z.string().optional(),
    })
    .optional(),
  cards: z.array(
    z.object({
      title: z.string(),
      text: z.string().optional(),
      icon: z.string().optional(),
      style: z.string().optional(),
      button: z
        .object({
          text: z.string(),
          url: z.string(),
        })
        .optional(),
    })
  ),
});
export const backcardsSchema = z.object({
  component: component("backcards"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
    })
    .optional(),
  background_image: z.string().optional(),
  cards: z.array(
    z.object({
      text: z.string().optional(),
      style: z.string().optional(),
    })
  ),
});

export const statGridSchema = z.object({
  component: component("stat_grid"),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
});

export const socialsSchema = z.object({
  component: component("socials"),
});

export const textSchema = z.object({
  component: component("text"),
  text_content: z.string(),
  style: z.string().optional(),
});

export const contactSchema = z.object({
  component: component("contact"),
  form_id: z.string(),
  description: z.string(),
  content: z.string(),
  styles: z.string(),
});

export const twoColumnSchema = z.object({
  component: component("two_column"),
  container_styles: z.string().optional(),
  columns: z.array(
    z.discriminatedUnion("type", [
      z.object({
        type: z.literal("text"),
        text_content: z.string(),
        styles: z.string().optional(),
      }),
      z.object({
        type: z.literal("image"),
        image: z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
        }),
        styles: z.string().optional(),
      }),
    ])
  ),
});
export const moreInfoSchema = z.object({
  component: component("more_info"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
    })
    .optional(),
  more_info: z.array(
    z.object({
      title: z.string(),
      icon: z.string().optional(),
    })
  ),
});
export default z.discriminatedUnion("component", [
  buttonsSchema,
  fileCarouselSchema,
  cardsSchema,
  statGridSchema,
  socialsSchema,
  textSchema,
  contactSchema,
  twoColumnSchema,
  backcardsSchema,
  moreInfoSchema,
]);
