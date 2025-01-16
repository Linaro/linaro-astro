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
    }),
  ),
});

export const fileCarouselSchema = z.object({
  component: component("file_carousel"),
  filename: reference("data"),
});

export const teamSchema = z.object({
  component: component("team"),
  id: z.string(),
  title: z.string(),
  members: z.array(reference("team_members")),
});

export const cardsSchema = z.object({
  component: component("cards"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
      card_title: z.string().optional(),
      button: z.string().optional(),
      icon: z.string().optional(),
      card_text: z.string().optional(),
      content: z.string().optional(),
    })
    .optional(),
  cards: z.array(
    z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      icon: z.string().optional(),
      style: z.string().optional(),
      button: z
        .object({
          text: z.string(),
          url: z.string(),
        })
        .optional(),
    }),
  ),
  divider: z.boolean().optional(),
});

export const imageCardsSchema = z.object({
  component: component("image_cards"),
  styles: z
    .object({
      card: z.string().optional(),
      button: z.string().optional(),
      container: z.string().optional(),
      card_title: z.string().optional(),
      image: z.string().optional(),
      text: z.string().optional(),
    })
    .optional(),
  cards: z.array(
    z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      text: z.string().optional(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
        width: z.number().optional().default(500),
        height: z.number().optional().default(500),
      }),
      style: z.string().optional(),
      button: z
        .object({
          text: z.string(),
          url: z.string(),
        })
        .optional(),
      url: z.string().optional(),
    }),
  ),
  button_cards: z.boolean().optional(),
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
    }),
  ),
});

export const statGridSchema = z.object({
  component: component("stat_grid"),
  stats: z.array(
    z.object({
      value: z.number(),
      label: z.string(),
    }),
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

export const titleSchema = z.object({
  component: component("title"),
  title_content: z.object({
    text: z.string(),
    size: z.string().optional(),
  }),
  style: z.string().optional(),
});

export const contactSchema = z.object({
  component: component("contact"),
  form_id: z.string(),
  description: z.string().optional(),
  content: z.string().optional(),
  styles: z.object({
    card: z.string().optional(),
    container: z.string().optional(),
  }),
});

export const contactButtonsSchema = z.object({
  component: component("contact_buttons"),
  buttons: z.array(
    z.discriminatedUnion("type", [
      z.object({
        title: z.string(),
        type: z.literal("link"),
        icon: z.string().optional(),
        url: z.string(),
        button_text: z.string(),
        style: z.string().optional(),
      }),
      z.object({
        title: z.string(),
        type: z.literal("form"),
        icon: z.string().optional(),
        form_id: z.string(),
        modal_id: z.string(),
        button_text: z.string(),
        style: z.string().optional(),
        description: z.string().optional(),
      }),
      z.object({
        type: z.literal("insight"),
        button_text: z.string(),
        title: z.string().optional(),
        icon: z.string().optional(),
        style: z.string().optional(),
      }),
    ]),
  ),
  styles: z.object({
    card: z.string().optional(),
    container: z.string().optional(),
    card_title: z.string().optional(),
  }),
});

export const membershipSchema = z.object({
  component: component("membership"),
  form_id: z.string(),
  description: z.string(),
  style: z.string().optional(),
  styles: z.object({
    card: z.string().optional(),
    container: z.string().optional(),
  }),
  MemberManagementPanel: z
    .array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        name: z.string().optional(),
        title_style: z.string().optional(),
        style: z.string().optional(),
      }),
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
          svg: z.boolean().optional().default(false),
        }),
        styles: z.string().optional(),
      }),
    ]),
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
    }),
  ),
});

export const logoGridSchema = z.object({
  component: component("logo_grid"),
  logos: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    }),
  ),
});

export const graphicSchema = z.object({
  component: component("graphic"),
  mobile: z
    .object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      svg: z.boolean().optional().default(false),
    })
    .optional(),
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  svg: z.boolean().optional().default(false),
  height: z.number(),
  accessible_version: z.string().optional(),
});

export const videosSchema = z.object({
  component: component("videos"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
    })
    .optional(),
  videos: z.array(
    z.object({
      src: z.string(),
      title: z.string(),
      thumbnail: z.string().optional(),
    }),
  ),
});

export const videoHeroSchema = z.object({
  component: component("video_hero"),
  styles: z
    .object({
      video: z.string().optional(),
      container: z.string().optional(),
    })
    .optional(),
  src: z.string(),
  type: z.string(),
});

export const articlesSchema = z.object({
  component: component("articles"),
  title: z.string().optional(),
  posts: z.array(
    z.discriminatedUnion("collection", [
      z.object({
        collection: z.literal("blogs"),
        post: reference("blogs"),
      }),
      z.object({
        collection: z.literal("events"),
        post: reference("events"),
      }),
      z.object({
        collection: z.literal("news"),
        post: reference("news"),
      }),
    ]),
  ),
});

export const tabsSchema = z.object({
  component: component("tabs"),
  tabs: z.array(
    z.object({
      title: z.string(),
      id: z.string(),
      content: z.string(),
    }),
  ),
});

export const teamTailorSchema = z.object({
  component: component("team_tailor"),
});

export const dateCountdownSchema = z.object({
  component: component("date_countdown"),
  countdownDate: z.string(),
});

export const fadedLineSchema = z.object({
  component: component("faded_line"),
});

export const connectSloganSchema = z.object({
  component: component("connect_slogan"),
  style: z.string().optional(),
});

export const connectSaveDateSchema = z.object({
  component: component("connect_save"),
  style: z.string().optional(),
  btnId: z.string(),
});

export const largeImageSchema = z.object({
  component: component("large_image"),
  src: z.string(),
  alt: z.string(),
  style: z.string().optional(),
});

export const largeCardSchema = z.object({
  component: component("large_card"),
  styles: z
    .object({
      card: z.string().optional(),
      container: z.string().optional(),
      card_title: z.string().optional(),
      button: z.string().optional(),
      icon: z.string().optional(),
      card_text: z.string().optional(),
    })
    .optional(),
  cards: z.array(
    z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      icon: z.string().optional(),
      secondIcon: z.string().optional(),
      style: z.string().optional(),
      flip_image: z.boolean().optional(),
      button: z
        .object({
          text: z.string(),
          url: z.string(),
        })
        .optional(),
    }),
  ),
});

export const connectContentSchema = z.object({
  component: component("connect_content"),
  title: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  styles: z
    .object({
      container: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      content: z.string().optional(),
    })
    .optional(),
  text_content: z.string(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
});

export default z.discriminatedUnion("component", [
  buttonsSchema,
  fileCarouselSchema,
  teamSchema,
  cardsSchema,
  imageCardsSchema,
  statGridSchema,
  socialsSchema,
  textSchema,
  contactSchema,
  contactButtonsSchema,
  twoColumnSchema,
  threeColumnSchema,
  moreInfoSchema,
  logoGridSchema,
  membershipSchema,
  graphicSchema,
  videosSchema,
  videoHeroSchema,
  articlesSchema,
  tabsSchema,
  teamTailorSchema,
  largeCardSchema,
  dateCountdownSchema,
  fadedLineSchema,
  connectSloganSchema,
  connectSaveDateSchema,
  largeImageSchema,
  connectContentSchema,
  titleSchema,
]);
