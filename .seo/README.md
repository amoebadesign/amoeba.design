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
| `voice-guide.md`, `peer-research.md` | Voice and query research briefs from the 2026-10-10 content run |
| `outlines/*.md` | Outlines Bryan writes from. One per unpublished page. Not copy |

## Content structure

Astro project root is the repo root (`package.json`, `astro.config.mjs`). Astro 7.3.5, static output, `@astrojs/sitemap`, no MDX. Deployed as static files on Vercel.

- Head: `src/layouts/Base.astro`. There is no SEO component. The head sets charset, viewport, title, description, canonical, Open Graph, and Twitter card tags. Per-page `og:image` / `twitter:image` URLs are derived from the route (`src/og/image-path.mjs`), with `public/og.png` as the fallback (e.g. `/404`). **After adding a page or knowledge post**, run `bun run generate:og` locally (Playwright + Chromium; not on Vercel), commit the new PNGs under `public/og/`, and update `src/og/pages.mjs` if the route is not a knowledge markdown file. `bun run build` runs `scripts/check-og-images.mjs` and fails if an indexable page is missing its image.
- Chrome: `src/layouts/LayoutA.astro` (masthead, nav, main, footer).
- Pages: `src/pages/index.astro` (`/`), `src/pages/work/index.astro` (`/work`), `src/pages/info/index.astro` (`/info`).
- Collection: `knowledge` in `src/content.config.ts`, files in `src/content/knowledge/*.md`, listed at `/knowledge`, rendered at `/knowledge/{id}`.
- Nav: `src/components/nav-items.ts` (Home, Work, Info, Knowledge).

New blog posts belong in `src/content/knowledge/` until Bryan says the off-site blog at amoebaunlimited.com is the blog of record.

Comparison pages live in `src/pages/compare/{slug}.astro`. The free tool lives in `src/pages/tools/{slug}.astro`. Offer page: `src/pages/rent-a-design-engineer.astro`. Voice and peer research for this program are `voice-guide.md` and `peer-research.md` in this directory.

Bryan writes article and comparison prose himself. Agents write outlines in `outlines/`, not copy. Unpublished pages stay "Coming soon" and out of the index: knowledge entries with `noindex: true` in frontmatter, page routes by listing the path in `src/noindex-routes.mjs`. Both drive the `noindex, follow` tag and the sitemap filter in `astro.config.mjs`.

`/llms.txt`, `/llms-full.txt`, and `/{route}.md` (homepage: `/index.md`) are generated at the end of `astro build` from the built HTML. `noindexPathnames()` in `src/noindex-routes.mjs` is the shared list for knowledge `noindex: true` and stub routes. The sitemap filter and the llms generator both use it. Those text files are not committed under `public/`.
