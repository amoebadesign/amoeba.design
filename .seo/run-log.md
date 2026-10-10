# Run log

Append-only. Newest entry at the top.

## 2026-10-10 — llms.txt, Markdown alternates, and AI crawler policy

- Scope: make the indexable site easy for ChatGPT, Perplexity, Claude, and Google AI Overviews to fetch and describe. No schema, no 404 page, no `og:image`, no speed changes. The homepage price was not added to any title or meta description.
- `src/noindex-routes.mjs` is the shared reader for knowledge frontmatter `noindex: true`. `astro.config.mjs` sitemap filter imports it (same URL set as before). The llms build imports it too. There was no `src/noindex-routes.mjs` on `main` before this run.
- Build hook `src/integrations/llms-txt.mjs` (`astro:build:done`) reads the HTML just written to `dist/` and writes:
  - `dist/llms.txt`
  - `dist/llms-full.txt`
  - `dist/index.md`, `dist/work.md`, `dist/info.md`, `dist/knowledge.md`
- Nothing is committed under `public/` for those files. The next build regenerates them from the pages, so a newly published article cannot drift from a checked-in copy. A knowledge file joins the list when its `noindex` flag is not `true` (and the built page has no robots `noindex`). `/404` is skipped. This run skipped 7 noindex articles and wrote 4 Markdown pages.
- `llms.txt` follows the llmstxt.org order: H1 `Amoeba`, a one-line blockquote, detail paragraphs, then H2 file lists. The blockquote is composed from the homepage H1 and the info H1: "Amoeba is a design engineering studio for ambitious B2B software companies, run by Bryan King from Newport, Kentucky." The offer paragraph is the homepage heading "Rent a design engineer" plus the paragraph under it. The homepage price `$500 / week` is included there, with the truth.md qualifier that the figure is test pricing and the offer is not yet formalized. That sentence is also appended to `index.md`. It is not in the link notes. The commented $5,000 / prototyping block is not in the HTML, so it is not in these files. Expertise is the homepage list. Footer profile links (Blog, Twitter, GitHub) are in the detail section. File-list links point at the Markdown alternates of indexable pages only. Unpublished articles are not listed, including their "Coming soon" bodies. `llms-full.txt` is the same index plus those four pages.
- `knowledge.md` keeps the index page's own description and states that no articles are published yet. It does not link to the stubs.
- Each indexable HTML page emits `<link rel="alternate" type="text/markdown">` to its `.md` URL and `<link rel="describedby">` to `https://amoeba.design/llms.txt` (`src/layouts/Base.astro`). Noindex articles emit `describedby` only, so they do not advertise a Markdown URL that was not built. The alternate link is safe to emit: the HTML canonical stays on the HTML URL, `.md` URLs are not in `sitemap-0.xml`, and `vercel.json` sets `X-Robots-Tag: noindex` on `/(.*).md` while `robots.txt` does not `Disallow` them. Crawlers can fetch the Markdown. Search should not index it as a second copy. The same header sets `Content-Type: text/markdown; charset=utf-8` and `Link: </llms.txt>; rel="describedby"`. `/llms.txt` and `/llms-full.txt` are `text/plain; charset=utf-8`. The existing host noindex rule is unchanged.
- `public/robots.txt` still ends with `Sitemap: https://amoeba.design/sitemap-index.xml` and `User-agent: *` / `Allow: /`. Named groups are also `Allow: /`. None are disallowed. Search/citation: `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`. Training: `GPTBot`, `ClaudeBot`, `CCBot`, plus the training opt-out tokens `Google-Extended` and `Applebot-Extended`. Those two tokens do not fetch pages. Allowing them permits Gemini and Apple Intelligence training use. Google AI Overviews use `Googlebot`, and Apple search uses `Applebot`; both stay allowed under `*`. Disallowing `Google-Extended` would not remove AI Overviews. `ChatGPT-User`, `Claude-User`, and `Perplexity-User` are allowed even though those vendors say user-triggered fetches may ignore robots.txt. Agents that are not named are allowed by `*`.
- `node --test src/llms/generate.test.mjs`: 4 passed. `bun run build` exited 0. Astro 7.3.5, static, 11 pages. Log line: "Wrote llms.txt, llms-full.txt, and 4 markdown page(s). Skipped 7 noindex page(s)."
- `dist/sitemap-0.xml` is still only `https://amoeba.design/`, `/info`, `/knowledge`, and `/work`. No `.md`, no `llms.txt`.
- Built HTML: the four indexable pages have one canonical, one `rel="alternate" type="text/markdown"`, and one `rel="describedby"`. The seven articles have `noindex, follow`, no alternate Markdown link, and `describedby`. No price in any title or description. No "Coming soon", no `$5,000`, and no knowledge slug in `llms.txt` or the Markdown files.
- Not done: article bodies, comparison pages, `og:image`, JSON-LD, HTML 404.

## 2026-10-10 — On-page titles, descriptions, H1s, and share tags

- Scope: backlog items for unique titles, meta descriptions, and one H1 per URL, plus Open Graph and Twitter card tags. No prices. No new claims, clients, or numbers. Knowledge stubs stay `noindex: true`.
- Titles: `{Page title} • Amoeba` on every page, each at or under 60 characters. The `Base.astro` fallback is no longer the 81-character growth-stage default. It is `Design engineering for ambitious B2B software • Amoeba` (54). `/info` passes its own title. Two article document titles are shortened (shadcn/lint; microinteractions) so the suffix fits. Their visible H1s keep the full frontmatter title. Strings and counts are in `content-ledger.md` and `baseline.md`.
- Descriptions: one `<meta name="description">` per page. Indexable pages are 152–160 characters, written from the masthead positioning and the copy already on that page. Article metas are the existing frontmatter descriptions (41–67 characters) and were not rewritten, because the bodies are still "Coming soon".
- H1: the masthead sentence is the H1 on `/` only. Elsewhere it is a paragraph using the old masthead type rules. `/info` promotes its existing first sentence to an H1 with `type-body` so the size, weight, and link color stay put. `/work` and `/knowledge` use a visually hidden H1 ("Work", "Knowledge") because those layouts have no title to restyle. Article pages keep one H1, the article title. `transition:persist` moved from the brand block to the logotype link so a client-side navigation does not keep the homepage H1 stuck on later pages.
- Share tags in `src/layouts/Base.astro`: `og:title`, `og:description`, `og:url` (canonical), `og:type` (`website`, or `article` on knowledge entries), `og:site_name` (`Amoeba`), `twitter:card` (`summary`), `twitter:title`, `twitter:description`, `twitter:url` (canonical).
- `TODO(og-image)`: no suitable share image in the repo. `public/` has `robots.txt` and `public/fonts/hex-franklin-variable.woff2` only. Work screenshots were not used. When a 1200×630 file exists at `public/og.png`, emit `og:image` and `twitter:image` as absolute URLs on `https://amoeba.design`.
- Build: `bun run build` exited 0. Astro 7.3.5, static output, 11 pages. `dist/sitemap-0.xml` still lists only `/`, `/info`, `/knowledge`, and `/work`.
- Built HTML, every page: exactly one `<title>`, one `<meta name="description">`, one canonical on `https://amoeba.design`, one `<h1>`. `og:url` and `twitter:url` match that canonical. `og:site_name` is `Amoeba`. `og:type` is `article` on the seven knowledge entries and `website` elsewhere. No `og:image`. The `TODO(og-image)` comment is in each built file. No price in any title or description. Every title is 60 characters or fewer.
- Not done: comparison pages (still blocked; peers are not competitors), article bodies, `og:image` artwork, JSON-LD, HTML 404.

## 2026-10-10 — Land migration on main; do not noindex www

- PR #9 merged into `cursor/seo-baseline-a5f5`, not `main`. `main` still had an empty `defineConfig({})`. This change merges that branch onto `main` and adds the www exemption below.
- Checked after Bryan attached the domain: `https://amoeba.design/` returned 308 to `https://www.amoeba.design/`. www returned 200 and the Astro homepage already deployed (long default title, no canonical). www is primary and has a CNAME to Vercel. Apex is not what visitors land on.
- Canonicals and the sitemap stay on `https://amoeba.design`. Recommendation for Bryan: in Vercel, make the apex the primary domain and redirect www to the apex. Do not change `site` or the canonicals to www.
- `vercel.json` previously noindexed every host except `amoeba.design`, which would have noindexed `www.amoeba.design` while it is the live host. The rule now requires both `amoeba.design` and `www.amoeba.design` to be missing before it sets `X-Robots-Tag: noindex`. Neither name can receive that header. `amoeba-design.vercel.app` and other hosts still can. www must stay indexable through the transition, including after it only redirects.

## 2026-10-10 — Domain migration readiness and stub noindex

- Scope: canonicals, sitemap, robots, non-production noindex, homepage title, and `noindex` on the seven knowledge stubs. The homepage `$500 / week` line was not edited.
- `astro.config.mjs`: `site` is `https://amoeba.design`, `trailingSlash` is `never`, `@astrojs/sitemap` 3.7.4. The sitemap filter drops any knowledge entry whose frontmatter says `noindex: true`.
- `src/layouts/Base.astro` emits one canonical on that origin. Homepage canonical is `https://amoeba.design/`. Other pages have no trailing slash.
- `vercel.json`: `trailingSlash: false` (308). `X-Robots-Tag: noindex` only when the Host is missing `amoeba.design`, so the production host cannot receive this header from this rule. Tradeoff: both hosts serve the same static HTML, so a meta robots tag cannot differ by host without also noindexing amoeba.design. The header is request-time. It does not redirect. Crawlers that ignore `X-Robots-Tag` can still fetch the Vercel URL; Bryan's domain redirect at cutover is what closes that. `robots.txt` stays `Allow: /` because that file is shared with the production host. It points at `https://amoeba.design/sitemap-index.xml`.
- Stubs: `noindex: true` on each file in `src/content/knowledge/`. Articles emit `noindex, follow` and are absent from `dist/sitemap-0.xml`. The sitemap lists `/`, `/info`, `/knowledge`, and `/work`. Flip a flag to `false` to publish one article.
- Homepage title, from `src/pages/index.astro`: `Design engineering for ambitious B2B software • Amoeba` (54 characters). No price. Other titles were left for the next run. `/info` still uses the old default.
- Build: `bun run build` exited 0. 11 pages. Static output.
- Not done here: attach amoeba.design to this Vercel project, redirect `amoeba-design.vercel.app` to that domain, submit the sitemap in Search Console.

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
