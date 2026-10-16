# Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to the source files appear automatically while the development server is running.

## Project structure

```text
src/app/
  layout.tsx       Shared page layout and site metadata
  page.tsx         Home page
  globals.css      Tailwind theme, brand colors, and base styles
src/components/
  layout/          Shared navigation, theme toggle, and page layout
  sections/        Page sections styled with Tailwind utilities
src/data/          Skills, projects, navigation, and contact information
src/types/         Shared models and component props, each in its own file
public/            Static assets such as images and icons
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check code with ESLint |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Export the production site to `out/` |

## Deploy to Cloudflare Pages

The project uses Next.js static export. Images are served directly from their files, so hosting does not require a Next.js image server.

Connect this GitHub repository to a Cloudflare Pages project with these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version (`NODE_VERSION`) | `24` |

Check the deployed `pages.dev` address first. Then add `elkapshub.com` and `www.elkapshub.com` under the Pages project's **Custom domains**. Replace the existing Netlify DNS targets as part of connecting the domain to Pages.

## Development steps

Use Tailwind utilities in components. The theme provides `primary`, `secondary`, `white`, and `black` colors, plus `background`, `foreground`, and `hero-accent` colors that adapt to the selected theme. The `font-serif` utility uses Georgia, and `dark:` utilities follow the existing theme toggle.

Edit content lists in `src/data/` and their type definitions in `src/types/`. The View CV link opens the PDF from `public/Eleni-Kapona-CV.pdf` in a new browser tab.

Each step is a separate Git commit. The first step sets up the framework, configuration, and a placeholder home page. Future steps can add the portfolio layout, about section, projects, and contact information.

See the [Next.js documentation](https://nextjs.org/docs) for framework guidance.
