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
      card_title: z.string().optional(),
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

export const imageCardsSchema = z.object({
  component: component("image_cards"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
      card_title: z.string().optional(),
      image: z.string().optional(),
    })
    .optional(),
  cards: z.array(
    z.object({
      title: z.string(),
      text: z.string().optional(),
      image: z.object({ src: z.string(), alt: z.string() }),
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

export const threeColumnSchema = z.object({
  component: component("three_column"),
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
export const membershipSchema = z.object({
  component: component("membership"),
  form_id: z.string(),
  description: z.string(),
  text: z.string(),
  style: z.string().optional(),
  styles: z.object({
    card: z.string().optional(),
    container: z.string().optional(),
    // cardTitle: z.string().optional(),
    // card_heading: z.string().optional(),
  }),
  MemberManagementPanel: z
    .array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        name: z.string().optional(),
        title_style: z.string().optional(),
        style: z.string().optional(),
      })
    )
    .optional(),
});

export const twoColumnSchema = z.object({
  component: component("two_column"),
  container_styles: z.string().optional(),
  columns: z.array(
    z.discriminatedUnion("type", [
      z.object({
        type: z.literal("text"),
        title: z.string().optional(),
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
      url: z.string(),
    })
  ),
});

export const logoGridSchema = z.object({
  component: component("logo_grid"),
  logos: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    })
  ),
});

export const graphicSchema = z.object({
  component: component("graphic"),
  src: z.string(),
  mobile_src: z.string().optional(),
  alt: z.string(),
  accessible_version: z.string().optional(),
  width: z.number(),
  height: z.number(),
});

export const videosSchema = z.object({
  component: component("videos"),
  videos: z.array(z.object({ src: z.string(), title: z.string() })),
});

export default z.discriminatedUnion("component", [
  buttonsSchema,
  fileCarouselSchema,
  cardsSchema,
  imageCardsSchema,
  statGridSchema,
  socialsSchema,
  textSchema,
  contactSchema,
  twoColumnSchema,
  threeColumnSchema,
  moreInfoSchema,
  logoGridSchema,
  membershipSchema,
  graphicSchema,
  videosSchema,
]);
