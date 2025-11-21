# Project Context: Gatsby Blog

## Overview
This project is a static blog site built with **Gatsby**, using **TypeScript** for type safety and **Markdown** for content. It features a custom design utilizing **Tailwind CSS** and **Typography.js**.

## Architecture & Technologies

*   **Framework:** [Gatsby](https://www.gatsbyjs.com/) (React-based static site generator)
*   **Language:** TypeScript (`src/**/*.tsx`, `src/**/*.ts`) and JavaScript (Gatsby config files).
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/) (configured via `tailwind.config.js`).
    *   [Typography.js](https://kyleamathews.github.io/typography.js/) with `typography-theme-ocean-beach` (configured in `src/utils/typography.ts`).
    *   Stylus (`.styl` files, supported by `gatsby-plugin-stylus`).
*   **Content:**
    *   Blog posts are written in Markdown and located in `content/blog/`.
    *   Images and assets are handled by `gatsby-remark-images` and `gatsby-source-filesystem`.
*   **Data Layer:** GraphQL (standard Gatsby data layer).
*   **Deployment:** GitHub Actions (`.github/workflows/node.js.yml`).

## Key Directories & Files

*   **`content/blog/`**: Contains the blog posts as Markdown files. Subdirectories are used for individual posts (e.g., `content/blog/my-post/index.md`).
*   **`src/`**: Source code for the site.
    *   **`components/`**: Reusable React components (Layout, PostItem, etc.).
    *   **`pages/`**: Standard Gatsby pages (About, Index, Link).
    *   **`templates/`**: Templates for programmatically generated pages (`blog-post.tsx`, `tag.tsx`).
    *   **`utils/`**: Utility functions (e.g., `typography.ts`).
    *   **`styles/`**: Global styles (`theme.css`, `global.styl`).
*   **`gatsby-config.js`**: Main site configuration, including metadata and plugins.
*   **`gatsby-node.js`**: Node.js API implementation for Gatsby. Handles the creation of blog post pages from Markdown files and setting up slugs.
*   **`tailwind.config.js`**: Tailwind CSS configuration.
*   **`tsconfig.json`**: TypeScript configuration.

## Development Workflow

### Prerequisites
*   Node.js (Ensure a compatible version for Gatsby v2).
*   npm or yarn.

### Commands

| Command | Description |
| :--- | :--- |
| `npm run develop` | Starts the development server at `http://localhost:4000`. |
| `npm run build` | Builds the production-ready static site to `public/`. |
| `npm run serve` | Serves the built version of the site locally. |
| `npm run format` | Formats code using Prettier. |

### Common Tasks

*   **Adding a Post:** Create a new folder in `content/blog/` and add an `index.md` file with the required frontmatter (title, date, etc.).
*   **Modifying Styles:** Edit `src/styles/` or use Tailwind classes in components.
*   **Updating Config:** Modify `gatsby-config.js` to add plugins or change site metadata.

## Conventions

*   **TypeScript:** Used for components and logic in `src/`. configuration files in root remain in JavaScript.
*   **Prettier:** Used for code formatting (`.prettierrc`).
*   **Naming:** React components use PascalCase (`BlogPost`), files use camelCase or kebab-case depending on type (pages/templates often match URL structure).
