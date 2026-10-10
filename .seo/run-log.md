# Run log

Append-only. Newest entry at the top.

## 2026-10-10 — Bryan's answers on legacy URLs, peers, pricing, positioning

- Scope: `.seo/` notes only. No page or config code edits.
- Legacy amoeba.design has only the homepage. No other URLs need 301s. The open question is closed.
- Peers (people doing similar things, not strict competitors) recorded in `config.json`. `competitors` stays empty.
- Pricing: accurate current claim is $500/week, Rent a design engineer (test pricing, offer not yet formalized). Other offers and prices, including the commented $5,000 design-system block, are not formalized and must not be used. Prices stay out of titles and meta descriptions. The homepage price stays on the page.
- Positioning to use: ambitious B2B software companies (current masthead).

## 2026-10-10 — Launch domain and legacy Search Console

- Scope: `.seo/` notes only. No page, layout, or Astro config edits.
- Bryan: this Astro build will replace the current site at https://amoeba.design. Launch canonical is that origin. https://amoeba-design.vercel.app stays the pre-launch deploy URL.
- Code check: `astro.config.mjs` does not set `site`. `src/layouts/Base.astro` emits no canonical. No `vercel.json`. https://amoeba-design.vercel.app/ returned HTTP 200 on 2026-10-10 with no redirect to https://amoeba.design.
- Search Console property `sc-domain:amoeba.design`, via the bot connector, measures the legacy site only. Recorded the supplied 90-day export (2026-07-10 to 2026-10-08) as the pre-migration baseline. This build has no Search Console data of its own. No sitemap is submitted. No other metrics added.
- Backlog: domain migration is now the top item. Details in `baseline.md`.

## 2026-10-10 — Setup and baseline

- Scope: create `.seo/` only. No page, layout, content, or config edits.
- Project: Astro 7.3.5 at the repo root. `astro.config.mjs` is empty. Static output. No sitemap, MDX, or Vercel adapter. `bun.lock` is the lockfile.
- Build: `bun run build` exited 0. Astro reported output `static`, 11 pages, about 6.8s. `dist/` contained no `robots.txt`, sitemap, `404.html`, or `llms.txt`. `dist/` is gitignored and was not committed.
- Production fetch: https://amoeba-design.vercel.app on 2026-10-10. Titles, missing meta tags, and "Coming soon" bodies match this repo. No `x-robots-tag`. `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned the Vercel plain-text 404.
- Brand domain: https://amoeba.design returned a different Next.js site with its own canonical of https://amoeba.design. www.amoeba.design did not resolve. Canonical for this Astro app is unset. Details in `baseline.md`.
- Data: no Google Search Console, DataForSEO, or rank tracking. No metrics recorded. Competitors left empty.
- Artifacts: `config.json`, `truth.md`, `content-ledger.md`, `baseline.md`, `README.md`, this log.
