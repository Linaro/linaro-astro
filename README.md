# Linaro Website

This is the git repository for Linaro website, hosted at [www.linaro.org](https://www.linaro.org).

If you are only interested in editing the content of the website, [skip to content](#content).

## Dependencies

The website is developed with the following tools:

- [Astro](https://astro.build/) - UI meta-framework used to develop and build the website.
- [Tailwind](https://tailwindcss.com/) - css framework used to do the majority of the styling.
- [Solid.js](https://www.solidjs.com/) - client-side UI framework used for highly interactive elements.
- [Pagefind](https://pagefind.app/) - fully static search library used to create search indexes from built website files.

## Project Structure

The high-level folder structure of the project is as follows:

```text

├── src/

│   └── components/

│   └── content/

│   └── layouts/

│   └── lib/

│   └── pages/

│   └── styles/


```

**_components_** contains `.astro` and `.tsx` (for solid.js) UI component files that are reused throughout the website to build pages.

**_content_** contains `.md`, `yaml` and other text files that provide the content of the website. [Go to content section](#content).

**_layouts_** contains reusable [Astro layout files](https://docs.astro.build/en/basics/layouts/) that describe the overall layout of a page, including html headers, scripts etc.

**_lib_** contains `.ts` typescript files with helper functions that are used throughout the website for formatting, fetching images etc.

**_pages_** contains [Astro page files](https://docs.astro.build/en/basics/astro-pages/) that describe the individual pages within the website. This folder uses file based routing to determine urls in the built site.

**_styles_** contains css files. Due to the use tailwind, there is only one global css file to extend tailwind where necessary (alongside `./tailwind.config.cjs`). Further stylesheets might be added where necessary for specific dependencies.

## Content

The content of the website is located in the `src/content` folder of the repo, spread across various folders, referred to as "collections". See [Astro content collections](https://docs.astro.build/en/guides/content-collections/) for more info.

```text


├── content/

│   └── authors/

│   └── blogs/

│   └── data/

│   └── events/

│   └── news/

│   └── pages/

│   └── rows/

│   └── sections/

│   └── tags/

```

### Pages

Pages can be edited via the relevant `.md` files in the `src/content/pages` folder. The `slug` property of the frontmatter determines the resulting url of the page.

New layouts can be built by adding rows and sections to the `flow` property of a page's frontmatter. This property defines a series of row components that contain section components to build the page. The `row` property of `flow` and the `component` property of a `sections` item must both reference a filename (without extension) within the `row` and `section` collections respectively.

```yaml
- flow:
    - row: container_row
      sections:
        - component: cards
```

`container_row` here references `src/content/rows/container_row.md` and `cards` references `src/content/sections/cards.md`

If a new row or section component is required, please contact [it-support@linaro.org](mailto:it-support@linaro.org).

To render the `.md` content of the page file, please use the `md_content` component as follows.

```yaml
- row: container_row
    sections:
      - component: md_content
```

**Developer note:** Pages are built from the pages collection in the `./src/pages/[...slug].astro` file.

### News, Blogs, Events

News, blog and meetings items can be added in the relevant folder within `src/content`. Please follow the format of the existing items, as the schema is explicitly enforced and the project will fail to build (on purpose) if it is not followed correctly.

Note that the `author` field must reference items in the `authors` content collections by filename (without extension). The same goes for `tags`.

For example

```yaml
author: linaro
title: This is a news post by Linaro
```

`trusted-firmware` here references `src/content/authors/linaro.md`

### Data

The `src/content/data` folder contains various lists of one-off items used in the site, such as nav links, footer links or lists of logos for "trusted by" sections. Any items added to these lists will be reflected in the website.

## Assets

### Images

Images must be uploaded to the Linaro ITS Cloudinary account and referenced by their public ID within content collection `.md` files. e.g. `linaro-website/graphics/logo`.

Images are downloaded from Cloudinary at build time, [optimised by Astro](https://docs.astro.build/en/guides/images/) and served from the same S3 bucket as the html files after deployment.

When developing locally, images are served straight from Cloudinary.

### Icons

Icons are implemented with [Astro Icon](https://www.astroicon.dev/).

Remote icon sets from [iconify](https://icon-sets.iconify.design/) can be installed from npm and used, or custom local icons can be stored in `src/assets/icons` and used thereafter.

### Docs, Videos

Documents and videos should be uploaded to `https://static.linaro.org` and referenced by their full urls within content collection `.md` files e.g. `https://static.linaro.org/videos/linaro.mp4`.

## Developer Info

Running the site locally will require `Node.js` (>=18) and the `yarn` package manager.

First, install dependencies with `yarn install`.

The following commands can then be used to build and run the site locally:

| Command               | Description                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn build:public`   | Builds the site in the `dist` folder of the root directory.                                                                                                                             |
| `yarn start:public`   | Runs the site in a development server, with hot module replacement to reflect updates to the code as soon as they are saved.                                                            |
| `yarn preview:public` | Runs the most recent build files in a development server. Unlike `yarn dev` this won't have live updates, but will be a closer representation of the site as it would be in deployment. |

These commmands use the `:public` suffix to avoid running the site with login protection.

## Questions?

If you have any questions about updating or building this website, please contact Linaro IT Support at [it-support@linaro.org](mailto:it-support@linaro.org).
