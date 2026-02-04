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

**_styles_** contains css files. Due to the use tailwind, there is only one global css file to extend tailwind where necessary (alongside the [tailwind configuration file](https://tailwindcss.com/docs/configuration)). Further stylesheets might be added where necessary if required for specific dependencies.

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

**Developer note:** Pages are built from the pages collection by the `src/pages/[...slug].astro` file.

### News, Blogs, Events

News, blog and meetings items can be added in the relevant folder within `src/content`. Please follow the format of the existing items, as the schema is explicitly enforced and the project will fail to build (on purpose) if it is not followed correctly.

Note that the `author` field must reference items in the `authors` content collections by filename (without extension). The same goes for `tags`.

For example

```yaml
author: linaro
title: This is a news post by Linaro
```

`linaro` here references `src/content/authors/linaro.md`

### Webinars with Passcode

How to Add a New Webinar Recording
To enable recording access for a new webinar, follow these steps:

- Upload Credentials: Create a JSON file with the following structure and upload it to Amazon S3 → Buckets → static-linaro-org → webinar_credentials/.

```JSON
{
  "url": "https://link-to-recording.com",
  "passcode": "123456"
}
```

Update API Route: In the API file:

- Add the new S3 URL to the webinar_credentials object.

- Add the new ID to the getStaticPaths function.

- Update Webinar Frontmatter: In the relevant webinar Markdown file, replace the standard button data with the webinarContactButton object:

```YAML
webinarContactButton:
  button_text: View Recording
  form_id: "9"
  modal_id: webinarContactForm
  description: Request Recording
  formName: webinar_contact
  webinarDataId: your_new_id_here
```

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

### Environment Variables

Some features of the website can be controlled using environment variables, both in deployment and local development.

- **IS_PUBLIC** - setting this to `true` ensures that the website is publicly available and not protected behind a login. All other values will lead to the website being built in SSR mode, implementing a middleware that protects pages from unauthenticated users.

  If not set to `true` additional configuration is needed to facilitate the login mechanism, which is outside the scope of these docs. Please contact IT support for more information.

- **IS_PREVIEW** - setting this to `true` builds the website in preview mode, where unpublished blogs, news and events are visible in the site. All other values will lead to these posts being hidden.

These can be set by adding entries to a `.env.local` file located in the root directory. e.g.

```
IS_PUBLIC=true
IS_PREVIEW=true
```

### Local Development

Running the site locally will require `Node.js` (>=18) and the `yarn` package manager.

First, install dependencies with `yarn install`.

The following commands can then be used to build and run the site locally.

| Command        | Description                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn build`   | Builds the site in the `dist` folder of the root directory.                                                                                                                             |
| `yarn start`   | Runs the site in a development server, with hot module replacement to reflect updates to the code as soon as they are saved.                                                            |
| `yarn preview` | Runs the most recent build files in a development server. Unlike `yarn dev` this won't have live updates, but will be a closer representation of the site as it would be in deployment. |

For local development, the `IS_PUBLIC` environment variable should be set to `true` in a `.env.local` file to avoid needing additional login configuration for the protected site.

Environment variables can also be overriden oravoided by using the `:public` vs `:auth` suffixes on any of the above commands to use either the public or login protected site respectively.

### Deployment

The site is deployed using the [SST AstroSite construct](https://docs.sst.dev/constructs/AstroSite). The configuration is located in `./sst.config.ts`.

# CMS Integration Overview

This project integrates [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) with an Astro frontend to provide a simple, Git-based content management system.

## Overview

- **Frontend**: The Astro site serves the CMS at `/admin`, where editors can log in and manage content.
- **CMS Configuration**: The CMS uses `public/admin/config.yml`, generated from `public/admin/config.template.yml` through the `replace-config.mjs` script. This file defines the backend, collections, and media storage.
- **Authentication**: GitHub OAuth is used for authentication, ensuring only authorized contributors can edit content.
- **Backend**: Authentication is handled by the [`netlify-cms-github-oauth-provider`](https://github.com/vencax/netlify-cms-github-oauth-provider), deployed on AWS.
  - The backend exchanges GitHub OAuth tokens and passes them to the CMS.
  - A GitHub OAuth App is registered to connect the site with GitHub’s API.

## Deployment

- The **Astro site** (including the CMS frontend) is deployed normally.
- The **OAuth provider backend** is deployed separately on AWS and exposed through a public domain.
- The CMS frontend (`/admin`) communicates with this backend for login and token handling.

## Usage

- Visit `/admin` on the site.
- Log in using a GitHub account with access to the repo.
- Create, edit, and publish content directly through the CMS interface.

## Notes

- Content is stored directly in the GitHub repository, keeping the workflow version-controlled.

## Questions?

If you have any questions about updating or building this website, please contact Linaro IT Support at [it-support@linaro.org](mailto:it-support@linaro.org).
