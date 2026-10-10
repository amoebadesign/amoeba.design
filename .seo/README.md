# .seo

Committed working notes for the ongoing SEO/AEO program. No secrets. Later runs should read these files before editing the site, then append to `run-log.md`.

Do not invent Search Console, DataForSEO, or rank-tracking numbers. Competitors stay empty until Bryan names them. Claims about the business go in `truth.md` only when a source file on this site says them.

## Files

| File | Role |
|---|---|
| `config.json` | Pre-launch host, launch domain https://amoeba.design, brand, audience, content paths, empty competitor list, legacy Search Console export |
| `truth.md` | Published claims with source files, and explicit UNKNOWN gaps |
| `content-ledger.md` | Every indexable URL |
| `baseline.md` | Technical baseline and the ranked backlog |
| `run-log.md` | Append-only log of runs |

## Content structure

Astro project root is the repo root (`package.json`, `astro.config.mjs`). Astro 7.3.5, static output, no integrations, no MDX, no sitemap adapter. Deployed as static files on Vercel.

- Head: `src/layouts/Base.astro`. There is no SEO component. The head sets charset, viewport, title, description, canonical, Open Graph, and Twitter card tags. No `og:image` yet (`TODO(og-image)` in `Base.astro`).
- Chrome: `src/layouts/LayoutA.astro` (masthead, nav, main, footer).
- Pages: `src/pages/index.astro` (`/`), `src/pages/work/index.astro` (`/work`), `src/pages/info/index.astro` (`/info`).
- Collection: `knowledge` in `src/content.config.ts`, files in `src/content/knowledge/*.md`, listed at `/knowledge`, rendered at `/knowledge/{id}`.
- Nav: `src/components/nav-items.ts` (Home, Work, Info, Knowledge).

New blog posts belong in `src/content/knowledge/` until Bryan says the off-site blog at amoebaunlimited.com is the blog of record.

Comparison pages and free tools do not exist. When a later run adds one, use `src/pages/compare/{slug}.astro` and `src/pages/tools/{slug}.astro`. Those directories are a convention recorded in `config.json`. They were not created in the setup run.
