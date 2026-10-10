# Run log

Append-only. Newest entry at the top.

## 2026-10-10 — Merge main into llms.txt branch (PR #15)

- Scope: resolve conflicts with `main` after #13 (offer, checklist, compare and knowledge stubs, `noindex-routes`), #14 (sitewide JSON-LD and 404), and #16 (Typekit performance in `Base.astro`). Keep llms generation, Markdown alternates, and the AI crawler policy from this branch.
- `src/noindex-routes.mjs` now exports `noindexRoutes` for stub compare pages and `noindexPathnames()` for those paths plus every knowledge file with `noindex: true`. `astro.config.mjs` and the llms build both use `noindexKnowledgeUrls()`.
- `src/layouts/Base.astro` keeps `SiteGraph`, page `jsonLd`, non-blocking Acumin loading, and the `rel="alternate"` / `rel="describedby"` links for indexable pages.
- `node --test src/llms/generate.test.mjs`: 4 passed. `bun run build` exited 0. 17 pages. Log: "Wrote llms.txt, llms-full.txt, and 6 markdown page(s). Skipped 11 noindex page(s)."
- `dist/sitemap-0.xml` lists `/`, `/info`, `/knowledge`, `/rent-a-design-engineer`, `/tools/ui-polish-checklist`, `/work`. No `.md`, no `llms.txt`, no 404, no compare stubs, no knowledge stubs. `knowledge.md` links the offer and checklist only, not the compare stubs.

## 2026-10-10 — llms.txt, Markdown alternates, and AI crawler policy

- Scope: make the indexable site easy for ChatGPT, Perplexity, Claude, and Google AI Overviews to fetch and describe. No schema, no 404 page, no `og:image`, no speed changes in the first commit on this branch. The homepage price was not added to any title or meta description.
- Build hook `src/integrations/llms-txt.mjs` (`astro:build:done`) reads the HTML just written to `dist/` and writes `/llms.txt`, `/llms-full.txt`, and a `/{route}.md` alternate for every indexable page. Nothing is committed under `public/`.
- `llms.txt` follows llmstxt.org. The offer paragraph points at the Rent a design engineer page when that route is indexable. Stub knowledge articles, compare routes in `noindexRoutes`, and `/404` are omitted. Markdown alternates get `X-Robots-Tag: noindex` via `vercel.json` and are excluded from the sitemap.
- `public/robots.txt` names major AI user agents, all `Allow: /`, and keeps the sitemap line.

## 2026-10-10 — Merge main into the performance branch

- Scope: bring PR #14 (sitewide JSON-LD and the 404) and PR #13 (offer page, checklist, stubs, `noindex-routes`) onto the performance branch before merging PR #16. No new copy.
- Conflict: `.seo/run-log.md` only. Both sides' entries stay. This note is newest.
- `src/layouts/Base.astro` merged cleanly. `SiteGraph`, the page `jsonLd` slot, and `noindex` stay. The non-blocking Acumin stylesheet stays in place of the render-blocking Typekit kit. `astro.config.mjs` and `src/noindex-routes.mjs` were not edited. The sitemap filter still drops `/404` and every `noindex` URL.
- New pages have no content images: `/rent-a-design-engineer`, `/tools/ui-polish-checklist`, both `/compare/` stubs, `/404`, and the knowledge routes. They use `LayoutA`, so they get the Typekit change from `Base.astro`. `/work` already had the LCP image `priority`, sizes, and 640w candidate. The `/fonts/` cache header in `vercel.json` is unchanged.
- The performance entry below says `/rent-a-design-engineer` 404'd. That was the live host before this route existed in the repo. The page is in this tree now.

## 2026-10-10 — Performance: Typekit, work images, font cache

- Scope: lab performance only. No schema, 404, `llms.txt`, or `og:image` edits. `src/layouts/Base.astro` changed only in the font links. Titles, descriptions, canonicals, and share tags were not touched.
- Tool: Lighthouse 13.5.0, mobile, simulated throttling, performance category only. One run per URL, then a second run of local `/` and `/work` after the change (those two matched the first run within 3 ms). INP is not emitted by this lab run. TBT is the lab stand-in. `/rent-a-design-engineer` is not a page: `https://amoeba.design/rent-a-design-engineer` returned 404, and `https://www.amoeba.design/rent-a-design-engineer` returned 307 to that 404. It was not scored.
- Live "after" is not in this table. These numbers are the production host before this branch is deployed, and a local `astro preview` of `main` versus this branch. Cold loads. Cache-Control does not move these scores.

Performance score is Lighthouse's 0–100 score. Times are milliseconds.

| Page | Where | Score | LCP | CLS | TBT | FCP |
|---|---|---|---|---|---|---|
| `/` | live before | 96 | 2306 | 0.0093 | 0 | 2306 |
| `/` | local before | 97 | 2129 | 0.0093 | 0 | 2129 |
| `/` | local after | 100 | 1505 | 0.0093 | 0 | 937 |
| `/work` | live before | 94 | 2631 | 0.0002 | 0 | 2352 |
| `/work` | local before | 95 | 2635 | 0.0002 | 0 | 2131 |
| `/work` | local after | 98 | 2403 | 0.0002 | 0 | 933 |
| `/info` | live before | 96 | 2292 | 0.0042 | 0 | 2292 |
| `/info` | local before | 97 | 2125 | 0.0042 | 0 | 2125 |
| `/info` | local after | 100 | 1505 | 0.0050 | 0 | 933 |
| `/knowledge` | live before | 96 | 2292 | 0.0135 | 0 | 2292 |
| `/knowledge` | local before | 97 | 2136 | 0.0135 | 0 | 2136 |
| `/knowledge` | local after | 100 | 1503 | 0.0135 | 0 | 929 |

Repeat local after: `/` score 100, LCP 1504, CLS 0.0093, TBT 0, FCP 936. `/work` score 98, LCP 2406, CLS 0.0002, TBT 0, FCP 936.

- LCP element was the logotype "AMOEBA" on `/`, `/info`, and `/knowledge`, and the first work image on `/work`. That stayed true after the change.
- Render-blocking before, every page: `https://use.typekit.net/dit6fmi.css` (~760–780 ms) and its `@import` of `https://p.typekit.net/p.css` (~760 ms). Estimated savings about 1,310–1,480 ms. The kit CSS sets `font-display: auto` on Acumin VF. `p.css` is an empty file. The preconnect to `p.typekit.net` was unused because it was `crossorigin` and the import is a no-cors stylesheet request.
- Acumin is not self-hosted. Adobe Fonts' web license does not allow hosting the font files. `public/fonts/acumin-variable.css` points at the kit's woff2 on `use.typekit.net` and sets `font-display: swap`. `Base.astro` preconnects to that origin with `crossorigin` and preloads the small stylesheet, then swaps it to `rel="stylesheet"` on load. The font request in the after trace was still `https://use.typekit.net/af/...woff2` (638,885 bytes). In the browser, `document.fonts` reported `acumin-variable` status `loaded` and display `swap`, and HEX Franklin still `loaded`. CLS on `/`, `/work`, and `/knowledge` did not move. `/info` moved from 0.0042 to 0.0050.
- `/work` images already had `width` and `height`. The unsized-images audit passed, and CLS was 0.0002. The LCP image was missing `fetchpriority=high`, and `sizes="100vw"` made mobile download the 768w file (60,942 bytes) for a slot of about 553 device pixels. The image-delivery audit estimated 103 KiB savings. The first image now uses Astro `priority` (`loading="eager"`, `decoding="sync"`, `fetchpriority="high"`). `sizes` matches the column and the button padding. A 640w candidate was added. The after trace fetched the 640w file (42,902 bytes). The image-delivery audit passed, and the LCP checklist shows `fetchpriority=high`.
- ClientRouter was not removed. The unused-JavaScript audit reported 0 wasted bytes, and TBT was 0 ms. The router is what runs the view transitions. A click from `/work` to `/info` stayed on the same document.
- Caching, measured with `curl -I` on the live host before this change: `/_astro/*` already sends `public, max-age=31536000, immutable`. `/fonts/hex-franklin-variable.woff2` sent `public, max-age=0, must-revalidate`. `vercel.json` now sets `public, max-age=31536000, immutable` for `/fonts/(.*)`. `astro preview` does not apply `vercel.json`, so this header is not in the lab scores. Replacing that font file in place will stay cached for a year; a new filename is the cache bust.
- Build: `bun run build` exited 0. Astro 7.3.5, static output, 11 pages.
- Left alone: the design-system stylesheet is still render-blocking (about 300 ms on localhost, no estimated savings once Typekit was gone). Inlining it was not worth a layout-CSS change at a score of 100. The 638 KB variable font is still downloaded from Adobe. Subsetting it would mean self-hosting.

## 2026-10-10 — Merge main (sitewide JSON-LD, 404) into the offer/outlines branch

- Scope: bring PR #14 into PR #13 before merging #13. No copy changes.
- Conflicts: `src/layouts/Base.astro` (both sides added to the head) and this log (both prepended entries). `astro.config.mjs` merged cleanly: the sitemap filter drops `/404` and every URL from `noindexPageUrls()` (knowledge `noindex: true` plus `src/noindex-routes.mjs`).
- `Base.astro` now renders `SiteGraph` on every page, then the page's own `jsonLd` when a page passes one.
- Page-level schema had inline Organization and Person nodes that disagreed with the sitewide graph (Person `url` was the X profile; the graph uses `/info` and lists X in `sameAs`). Replaced them with `@id` references: Service `provider` on the offer page, Article `author` and `publisher` in `src/pages/knowledge/[id].astro` and both compare pages. Article nodes are still only emitted on indexable pages, so today only the offer page uses a reference.
- Log order: the PR #14 entry is newer than this branch's three entries, so it sits above them.
- Build: `bun run build` exited 0. 17 pages, `dist/404.html` present. `dist/sitemap-0.xml` lists `/`, `/info`, `/knowledge`, `/rent-a-design-engineer`, `/tools/ui-polish-checklist`, `/work`. The 404 and all nine stubs emit `noindex, follow` and are absent. Every page has the sitewide graph. The offer page adds Service, FAQPage, and BreadcrumbList; the checklist adds BreadcrumbList. All JSON-LD parses, and every `@id` reference resolves to a node on the same page. Internal link check: 0 broken.

## 2026-10-10 — Sitewide JSON-LD and branded 404

- Scope: one `@graph` in `src/components/SiteGraph.astro`, included from `src/layouts/Base.astro`. A branded `src/pages/404.astro`. Sitemap filter drops `/404`. No prices. No page-level types (no Service, Article, or BreadcrumbList). Knowledge stubs stay `noindex: true` and get only this graph. Did not touch `llms.txt`, `robots.txt`, `public/og.png`, or the speed work.
- Graph `@id` values, stable for later page-level nodes: `https://amoeba.design/#organization`, `https://amoeba.design/#website`, `https://amoeba.design/#bryan-king`.
- Organization: name `Amoeba`, url `https://amoeba.design`, description is the masthead sentence, `founder` points at the Person `@id`. `sameAs` is only the footer profiles: `https://twitter.com/amoeba_design` and `https://github.com/amoebadesign`. The footer Blog link (`http://amoebaunlimited.com`) is not a profile of this site, so it is not in `sameAs`. Astro, Vercel, and the type foundry links on `/info` are credits, not profiles.
- WebSite: name `Amoeba`, url `https://amoeba.design`, `publisher` points at the Organization `@id`, `inLanguage` `en` (the document `lang`). No `SearchAction`.
- Person: name `Bryan King`, url `https://amoeba.design/info` (the page that names him), `homeLocation` is a Place named `Newport, Kentucky`, `sameAs` is `https://x.com/bryan_king` (the link on `/info`).
- 404: `src/pages/404.astro` uses `LayoutA`. Title `Not found • Amoeba`. Visible H1 and meta description: `That page isn’t on this site.` `noindex, follow`. Links in the main content: `/` Home, `/work` Work, `/knowledge` Knowledge, `/info` Info. The masthead stays a paragraph.
- Build: `bun run build` exited 0. Astro 7.3.5, static output, 12 pages. The build wrote `dist/404.html` (not `dist/404/index.html`). `astro preview` returned HTTP 404 for `/does-not-exist` and served that file (title, H1, `noindex`). `/`, `/work`, `/info`, `/knowledge`, and a knowledge stub returned 200. Requesting `/404` itself is 200 because the file is also a route; Vercel uses root `404.html` as the error document for unknown paths. In the browser, the four content links landed on Home, Work, Knowledge, and Info.
- Sitemap: `dist/sitemap-0.xml` still lists only `https://amoeba.design/`, `/info`, `/knowledge`, and `/work`. The 404 and the seven `noindex` articles are absent.
- JSON-LD: every built page has exactly one `application/ld+json` block, and the twelve blocks are identical. `JSON.parse` succeeds. The string contains no `$` and no `500`. schema.org vocabulary check (domainIncludes, including parent types, and rangeIncludes for nested types and `@id` refs): 0 errors. `https://validator.schema.org/validate` returned `totalNumErrors` 0 and `totalNumWarnings` 0. It resolved Organization, WebSite, Person, and Place, and followed `founder` and `publisher` to the `@id` nodes.

## 2026-10-10 — Remove claims that point to unpublished pages

- Scope: deletions only on the two live pages. No replacement prose.
- `/rent-a-design-engineer`: removed the paragraph pointing to both comparisons, both stub articles, and "More writing lives on Knowledge". Kept its checklist sentence, trimmed to the checklist link. Two FAQ answers lost their trailing sentence ("I wrote up when I would hire each one…", "The tradeoffs are on…"). They are now plain `faqs` entries, so the visible answers and the FAQPage JSON-LD text are the same strings.
- `/tools/ui-polish-checklist`: removed "I wrote the longer version of the slop problem in fix the AI slop in your UI" from the intro, and the closing sentence linking `/knowledge/more-than-microinteractions` and "the rest of the writing" on Knowledge. Links to the offer page and the homepage stay.
- Neither page links a stub now. The `/knowledge` link left on both is the site nav. `/knowledge`'s own "Also" list still links the comparison stubs, which is allowed.
- Outlines updated where they described those sentences (`rent-a-design-engineer.md`, `fix-ai-slop-ui.md`): add the links back as each piece publishes.
- Build: `bun run build` exited 0. 16 pages. Sitemap unchanged at 6 URLs. Internal link check: 0 broken. Word counts in `<main>`: offer 556, checklist 400.

## 2026-10-10 — Outlines only; four pages back to stubs

- Scope: Bryan does not want AI-written prose and will write these pieces by hand. Same branch and PR as the entry below. No new copy.
- Outlines in `.seo/outlines/`: `rent-a-design-engineer.md`, `design-engineer-vs-product-designer-vs-frontend-engineer.md`, `rent-a-design-engineer-vs-hiring.md`, `more-than-microinteractions.md`, `fix-ai-slop-ui.md`. Each has the title and meta set plus alternatives with character counts, target and secondary queries, intent and reader, a one-sentence thesis, H2/H3 structure with bullets, `[YOUR EXAMPLE: …]` prompts, Bryan's own public statements with quote and source, a competitor angle from `peer-research.md` (peers not named on pages), FAQ, internal links, schema/AEO notes, length, pitfalls, and a publishing checklist. Theses on the two comparisons and the hiring page are proposals for Bryan to accept or replace.
- Stubs: both `/compare/` pages, `/knowledge/more-than-microinteractions`, and `/knowledge/fix-ai-slop-ui` are "Coming soon" with a short list of related links. Routes, titles, meta descriptions, and internal links are kept. Article and BreadcrumbList code is kept but only emitted when the page is indexable. `published` dates were removed from the two knowledge entries.
- Noindex for page routes: new `src/noindex-routes.mjs`. The compare pages read it for `noindex, follow`, and `astro.config.mjs` drops the same paths from the sitemap. Knowledge entries still use `noindex: true` in frontmatter.
- Live and unchanged: `/rent-a-design-engineer` and `/tools/ui-polish-checklist`. Bryan will rewrite the offer copy.
- Flag, not edited: the offer page says "I wrote up…" and links the role comparison, the hiring comparison, the microinteractions article, and the fix-ai-slop article; the same text is in its FAQPage JSON-LD. The checklist intro says "I wrote the longer version of the slop problem in fix the AI slop". Those targets are now "Coming soon". The links resolve; the sentences overstate what exists until Bryan publishes or rewrites them.
- Facts Bryan must supply before the offer page FAQ can grow: hours per week, minimum engagement and billing, turnaround, contact path (replaces `TODO(contact)`), how a week starts, stack and out-of-scope work, one client at a time or several, communication and time zone, IP and NDA, whether Figma files are included, whether "test pricing" is labeled. The hiring comparison also needs any rent-to-hire arrangement, and every market figure needs a real source.
- Build: `bun run build` exited 0. 16 pages. `dist/sitemap-0.xml` lists `/`, `/info`, `/knowledge`, `/rent-a-design-engineer`, `/tools/ui-polish-checklist`, `/work`. All nine stubs emit `noindex, follow` and no JSON-LD. Internal link check over `dist/`: 0 broken.

## 2026-10-10 — Offer page, comparisons, two articles, polish checklist

- Scope: the six pages Bryan approved. Branched from `main`. Voice from `.seo/voice-guide.md`. Queries from `.seo/peer-research.md`. Both files are copies of the briefs for this run. No new prices, clients, results, or hours. `$500 / week` is stated the way the homepage states it.
- `/rent-a-design-engineer`: offer page. H1 "Rent a design engineer for your SaaS UI". Body repeats the homepage promise and the price. FAQPage JSON-LD for questions answerable from published facts and his public practice (Figma in the loop, Newport, review stays with the client's engineers). Service JSON-LD has no Offer price. The cost FAQ text is `$500 / week`, so that figure is inside FAQPage JSON-LD and nowhere else in schema. Titles and meta descriptions have no price.
- `/compare/design-engineer-vs-product-designer-vs-frontend-engineer` and `/compare/rent-a-design-engineer-vs-hiring`: Article and BreadcrumbList JSON-LD. The hiring page states the homepage price once and does not quote a salary. No peer is named as a competitor.
- `/knowledge/more-than-microinteractions`: body replaced, URL kept, `noindex` set to false. The first paragraph answers what a design engineer is. Document title stays shortened so it fits 60 characters.
- `/knowledge/fix-ai-slop-ui`: new indexable article.
- `/tools/ui-polish-checklist`: 23 native checkboxes, progress text, `localStorage` key `amoeba-ui-polish-checklist`, reset. No account and no external script.
- Links: the homepage offer heading links to the offer page. `/knowledge` lists the offer, both comparisons, and the checklist under "Also". The new pages link to each other, the homepage, and `/knowledge`. Nav was not redesigned.
- `TODO(contact)` in `src/pages/rent-a-design-engineer.astro`. There is still no email, calendar, or form. The CTA is the X profile already linked from `/info` (https://x.com/bryan_king).
- Head: `Base.astro` accepts `jsonLd`. Indexable articles emit Article and BreadcrumbList. Stubs stay `noindex: true` and out of the sitemap.
- Build: `bun run build` exited 0. 16 pages. `dist/sitemap-0.xml` lists `/`, `/info`, `/knowledge`, `/work`, the offer, both comparisons, both indexable articles, and the checklist. The five stubs are absent. Checked in the browser: offer page, homepage link into the offer, checklist check/reload/reset/keyboard/client-side return, mobile width on the checklist and the roles table. Favicon 404 and the font preload warning are the existing head, not these pages.
- Word counts, titles, and descriptions are in `content-ledger.md`. Articles are 1,793 and 1,794 words in `<main>`.

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
