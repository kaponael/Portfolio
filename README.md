# Portfolio

A personal portfolio built with Next.js, React, TypeScript, and plain CSS.

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
  globals.css      Global styles
  page.module.css  Home page styles
public/            Static assets such as images and icons
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check code with ESLint |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build after building |

## Development steps

Each step is a separate Git commit. The first step sets up the framework, configuration, and a placeholder home page. Future steps can add the portfolio layout, about section, projects, and contact information.

See the [Next.js documentation](https://nextjs.org/docs) for framework guidance.
