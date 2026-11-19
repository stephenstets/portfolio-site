# portfolio-site

My personal portfolio site, built with **React + TypeScript + Vite** — and my
React/TypeScript learning project. The code is deliberately plain and commented:
typed data in `src/data.ts`, one component per section in `src/components/`,
plain CSS in `src/index.css`, no UI framework.

## Sections

- **Hero** — name, one-line pitch, links
- **Skills** — languages, web/data, IT & systems, design & fabrication, trades
- **Projects** — cards for every repo in this portfolio, driven by the typed
  `projects` array in `src/data.ts`
- **Contact** — email and GitHub

## Run it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## How it's put together

| File | What it teaches |
|---|---|
| `src/data.ts` | TypeScript `interface`s — every project must have a title, description, language, and link, or the build fails |
| `src/components/Hero.tsx` | A component is a function that returns JSX |
| `src/components/Skills.tsx` | `.map()` over arrays, and why each element needs a `key` |
| `src/components/Projects.tsx` | Data-driven UI — add a project to `data.ts` and the page updates |
| `src/App.tsx` | Composition — the page is small components put together |

## Deploy

Any static host works with the `dist/` output (`npm run build`): GitHub Pages,
Netlify, Vercel, or a plain web server.

## License

MIT — see `LICENSE`.
