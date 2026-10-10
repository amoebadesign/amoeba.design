# Technical baseline

Date: 2026-10-10. Scope is this Astro repo and the URLs it publishes. No page or config was changed in this run.

## How this was checked

- Read `package.json`, `astro.config.mjs`, layouts, pages, the knowledge collection, and nav.
- `bun run build` with Astro 7.3.5 (lockfile resolution). Exit 0. Output mode `static`. 11 pages in about 6.8s. Build directory `dist/` (gitignored).
- Fetched production HTML and response headers for https://amoeba-design.vercel.app (home, `/work`, `/work/`, `/info`, `/knowledge`, `/knowledge/`, all seven articles, a missing path, `robots.txt`, `sitemap.xml`, `llms.txt`).
- Fetched https://amoeba.design, http://amoeba.design, and https://www.amoeba.design.
- Re-checked https://amoeba-design.vercel.app/ response headers on 2026-10-10: HTTP 200, no `Location` redirect.
- Search Console property `sc-domain:amoeba.design` is connected via the bot's connector. The numbers below are the export Bryan supplied for 2026-07-10 to 2026-10-08 versus the prior 90 days. They describe the legacy site at https://amoeba.design, which this build will replace. This Astro deploy has no Search Console data of its own. DataForSEO and rank tracking are still absent. No metric was added beyond that export.

## Project

| Item | Value |
|---|---|
| Root | Repository root. `package.json` name `amoeba.design`. `astro.config.mjs`. |
| Astro | `^7.3.5` in package.json. Resolved and built as 7.3.5. |
| Integrations | None. The config is `defineConfig({})`. |
| MDX | Not installed. Knowledge files are `.md`. |
| Sitemap package | Not installed. |
| Output | Static. No adapter. |
| Deploy | Vercel static hosting. Production `server: Vercel`. Info page says "Powered by Vercel". No `vercel.json` and no `@astrojs/vercel`. |
| Package manager | bun (`bun.lock`). README dev command is `bun dev`. Node engine `>=22.12.0`. |
| Head | `src/layouts/Base.astro` only. No SEO component. |

`Base.astro` emits charset, viewport, a title, a meta description, a canonical URL on `https://amoeba.design`, Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name` = Amoeba), and Twitter card tags (`twitter:card` = summary, `twitter:title`, `twitter:description`, `twitter:url`). It emits `noindex, follow` only when a page asks for it. It does not emit `og:image` or `twitter:image` (`TODO(og-image)` in `Base.astro`: `public/` has no share image). It does not emit JSON-LD.

## Launch domain

Answered by Bryan on 2026-10-10: this Astro build will replace the site that is live at https://amoeba.design. The launch and canonical origin is **https://amoeba.design**. The current deploy of this repo stays **https://amoeba-design.vercel.app** until that cutover.

The repo now implements the canonical origin. The live Vercel project does not, until this branch is deployed and Bryan attaches the domain.

- `astro.config.mjs` sets `site` to `https://amoeba.design` and `trailingSlash` to `never`.
- `src/layouts/Base.astro` emits one `<link rel="canonical">` per page on that origin. The homepage canonical is `https://amoeba.design/`. Other pages have no trailing slash, for example `https://amoeba.design/work`.
- `vercel.json` sets `trailingSlash: false` (308 from `/work/` to `/work`) and `X-Robots-Tag: noindex` only when the host is neither `amoeba.design` nor `www.amoeba.design`.
- `package.json` `"name": "amoeba.design"` is still just the npm package name.
- Before this change, https://amoeba-design.vercel.app/ returned HTTP 200 on 2026-10-10 with no `Location` header. The header rule is the code safeguard. It is not a redirect. Bryan still redirects the Vercel hostname to the custom domain at cutover.
- https://amoeba.design still serves a different Next.js application. Its own pages emit `<link rel="canonical" href="https://amoeba.design">`. Homepage title there: "Amoeba • Design engineering for early-stage B2B startups". Visible H1: "Design engineering for early-stage B2B startups". That copy is not in this repo and is not in `truth.md`.
- Checked again on 2026-10-10 after the domain was attached: `https://amoeba.design/` returned 308 to `https://www.amoeba.design/`. `https://www.amoeba.design/` returned 200 with the Astro homepage that is deployed today (the long default title, no canonical). www is primary. Canonicals in this repo stay on the apex. Bryan should flip Vercel so the apex is primary and www redirects to `https://amoeba.design`.

www is the host Vercel is serving right now, so the noindex rule must leave both `amoeba.design` and `www.amoeba.design` alone. `amoeba-design.vercel.app` and any other host still get `X-Robots-Tag: noindex`. Slash duplicates are handled by `trailingSlash: false` in `vercel.json`.

## Legacy Search Console (pre-migration baseline)

Property: `sc-domain:amoeba.design`, via the bot's connector. This is whatever is live on that domain today, not https://amoeba-design.vercel.app. No sitemap has been submitted in Search Console.

Period: 2026-07-10 to 2026-10-08 (90 days), compared with the prior 90 days. Only one page had any impressions.

| URL | Clicks | Impressions | Prior 90 impressions | CTR | Avg position | Prior 90 position |
|---|---|---|---|---|---|---|
| https://amoeba.design/ | 5 | 298 | 11 | 1.7% | 11.3 | 23.0 |

Queries, all to that homepage. A click count is listed only where the export included one.

| Query | Impressions | Position | Clicks |
|---|---|---|---|
| amoeba ide | 60 | 6.6 | 1 |
| amoeba designs | 9 | 21.2 | |
| amoeba design | 5 | 7.4 | |
| ameoba ide | 3 | 7.3 | |
| amoeba architects | 3 | 35 | |
| ameba design | 2 | 6.5 | |
| amoeba creative sdn bhd | 2 | 27.5 | |
| amoeba design website | 1 | 3 | |
| amoeba coding | 1 | 8 | |
| in points | 1 | 2 | |
| amoeba design studio | 1 | 39 | |
| amoeba studios | 1 | 38 | |
| amoeba project | 1 | 50 | |
| amoeba ai | 1 | 69 | |

Zero non-branded service queries. No other pages, queries, or periods were in the export.

**Branding / disambiguation.** "amoeba ide" is the largest query: 60 impressions and 1 click at position 6.6. The exact phrase "amoeba design" has 5 impressions at position 7.4. The same homepage also appears for the misspellings "ameoba ide" and "ameba design", and for other names that share the word Amoeba (architects, creative sdn bhd, studios, project, ai). People are reaching the legacy homepage through ambiguous brand-adjacent queries, not through queries about design engineering. The export does not say what "amoeba ide" refers to, and this note does not guess. The homepage title is "Design engineering for ambitious B2B software • Amoeba" so the URL that inherits this query mix names the practice. The homepage H1 is the masthead sentence. Other pages have their own H1.

## Titles

Preferred pattern from Bryan: `{Page Title} • Amoeba`. Implemented on every page. The fallback in `src/layouts/Base.astro` is the homepage title (54 characters), not the old 81-character growth-stage default. `/info` passes its own title.

Character counts are the decoded title string. Two article document titles are shortened so the string stays at or under 60 characters. Their visible H1s keep the full frontmatter title.

| URL | Chars | Title | Notes |
|---|---|---|---|
| `/` | 54 | Design engineering for ambitious B2B software • Amoeba | Set in `src/pages/index.astro`. No price. |
| `/info` | 38 | Bryan King, Newport, Kentucky • Amoeba | Was the 81-character default. |
| `/work` | 31 | Product interface work • Amoeba | |
| `/knowledge` | 37 | Design engineering knowledge • Amoeba | |
| `/knowledge/shake-what-the-browser-gives-ya` | 39 | Shake what the browser gave ya • Amoeba | |
| `/knowledge/storybook-for-agents` | 48 | Storybook documentation for your agents • Amoeba | |
| `/knowledge/clean-up-messy-tailwind` | 38 | Cleaning up the Tailwind mess • Amoeba | |
| `/knowledge/shadcn-lint` | 54 | Use shadcn/lint to enforce your design system • Amoeba | Full H1 is "How to use shadcn/lint to enforce your design system" (that plus the suffix is 61). |
| `/knowledge/more-than-microinteractions` | 52 | Design engineering beyond microinteractions • Amoeba | Full H1 kept. The full title plus the suffix is 66. |
| `/knowledge/css-is-nothing-to-fear` | 31 | Don't be afraid of CSS • Amoeba | |
| `/knowledge/figma-to-code` | 43 | One-shotting Figma designs in code • Amoeba | |

Every built page has exactly one `<title>`. No price in any title.

This Astro build has no impressions of its own. The legacy URL it will replace, https://amoeba.design/, is the only URL with Search Console impressions (298 in the last 90 days, 5 clicks).

## Meta descriptions

Every page emits one `<meta name="description">` from `src/layouts/Base.astro`. Indexable pages are about 150–160 characters, with no prices. Article pages use the knowledge frontmatter `description` unchanged (41–67 characters). Those strings are also printed on `/knowledge`. The article bodies are still "Coming soon", so the descriptions were not expanded. The exact strings are in `content-ledger.md`.

## Canonical tags and trailing slashes

Every built page has one canonical on `https://amoeba.design`. Policy is `trailingSlash: 'never'`: the homepage is `https://amoeba.design/`, and `/work` is `https://amoeba.design/work`. The build still writes directory indexes (`dist/work/index.html`). `vercel.json` `trailingSlash: false` 308s `/work/` to `/work` once this config is deployed. Before that, the live Vercel host served both forms with 200.

## Open Graph and Twitter

`src/layouts/Base.astro` emits `og:title`, `og:description`, `og:url` (the canonical), `og:type` (`website`, or `article` on knowledge entries), and `og:site_name` (`Amoeba`). Twitter tags are `twitter:card` (`summary`), `twitter:title`, `twitter:description`, and `twitter:url` (the canonical). Title and description match the document title and meta description.

No `og:image` or `twitter:image`. `public/` contains `robots.txt` and a font file. The work screenshots are not a share image. `TODO(og-image)` in `Base.astro` names `public/og.png` for when Bryan supplies a 1200×630 asset. No favicon file is in `public/`.

## robots.txt

Not in the repo, not in `dist/`, and https://amoeba-design.vercel.app/robots.txt returned 404 with the Vercel plain-text body. There is no `X-Robots-Tag` and no robots meta. Crawlers, including AI crawlers, are under the default allow behavior.

## Sitemap

`@astrojs/sitemap` 3.7.4 writes `dist/sitemap-index.xml` and `dist/sitemap-0.xml`. The built sitemap lists `https://amoeba.design/`, `/info`, `/knowledge`, and `/work`. The seven `noindex: true` articles are excluded. `public/robots.txt` allows crawling and points at `https://amoeba.design/sitemap-index.xml`. Search Console still has no sitemap submitted. Bryan submits `https://amoeba.design/sitemap-index.xml` on `sc-domain:amoeba.design` after the domain serves this build.

## JSON-LD

No `application/ld+json` anywhere in `src/` or in the built HTML. These types are absent: Organization, WebSite, Person, Service, Article, BreadcrumbList.

Published facts that could support them later, once Bryan confirms they are still accurate, are in `truth.md` (person, one priced offer, expertise list). Article schema would describe "Coming soon" pages if it were added now.

## H1

The masthead sentence is an `<h1>` on `/` only. On every other `LayoutA` page it is a `<p class="masthead-lede">` with the same rules that used to target the masthead `h1` (`src/layouts/LayoutA.astro`). The logotype link is what persists across `ClientRouter` navigations, so the sentence's element can change with the page.

| URL | H1 count | What it says |
|---|---|---|
| `/` | 1 | Masthead sentence: "Amoeba is a design engineering studio for ambitious B2B software companies." "Rent a design engineer" stays an H2. |
| `/work` | 1 | "Work". Visually hidden (`clip-path`) inside `<main>`, because the page design has no title. |
| `/info` | 1 | "Amoeba is run by Bryan King from Newport, Kentucky." The old paragraph, now an H1 styled with `type-body` so the size, weight, and link color stay the same. "Colophon" stays an H3. |
| `/knowledge` | 1 | "Knowledge". Visually hidden, same treatment as `/work`. Entry titles stay H2. |
| Each `/knowledge/{id}` | 1 | The article title (`<h1 class="type-title-alt">`). The masthead is not a second H1. |

## Thin pages

Rendered `<main>` word counts are in `content-ledger.md`.

- All seven articles: body text is "Coming soon" (2 words). With the in-main title, main text is 7–11 words. They are still linked from `/knowledge`, and each has `noindex: true`, so they are built but kept out of the sitemap and out of the index.
- `/info`: 21 words.
- `/work`: 3 visible words, all lightbox controls ("Close", "Previous", "Next"). No captions and no case-study prose. 13 images carry alt text (46 words total).
- `/`: 59 words. Short, and it is the only page with an offer and a price.
- `/knowledge`: 113 words, almost entirely the seven titles and descriptions.

No URL in this set is a long article.

## Orphan pages and internal links

From the built HTML, every internal `href` that is a page route resolves to one of the 11 pages. None are broken.

Link sources:

- Masthead logotype → `/` (`src/components/Masthead.astro`).
- Header nav and the collapse-bar nav → `/`, `/work`, `/info`, `/knowledge` (`src/components/nav-items.ts`, `src/components/Nav.astro`, `src/components/CollapseBar.astro`).
- `/knowledge` links each article via `/knowledge/${id}` (`src/pages/knowledge/index.astro`). The seven ids match the markdown filenames.

No orphans: each URL is in the nav or is linked from `/knowledge`. Article bodies do not link to each other. That is a thin-content issue, not an orphan issue.

Footer and info links leave the site (X, Twitter, GitHub, Astro, Vercel, Typekit, HEX Franklin, amoebaunlimited.com). Those external URLs returned 200 on 2026-10-10. `http://amoebaunlimited.com` redirected to https://www.amoebaunlimited.com/. Several anchors use `target="blank"` rather than `target="_blank"` (`src/pages/info/index.astro`, `src/components/Footer.astro`). That is invalid as the special new-tab keyword. It is not a broken href.

## Image alt text

`/work` gives every content image an alt string (`src/pages/work/index.astro`). The strings describe the UI and do not name a product or client. The lightbox `<img>` in `src/components/Lightbox.astro` is rendered with `alt=""`. Its caption is filled by script from the same alt strings. No other pages contain images. Knowledge entries have no figures.

## 404

There is no `src/pages/404.astro` and the build did not emit `404.html`.

https://amoeba-design.vercel.app/does-not-exist returned HTTP 404 with a plain-text Vercel body (`The page could not be found` / `NOT_FOUND`), about 79 bytes, no HTML title, and no robots meta. The status code is a hard 404. There is no branded recovery page and no links back into the site.

The 404 on https://amoeba.design is that other Next.js app (HTML 404, `noindex`, and a canonical pointing at https://amoeba.design). It is not this site's template.

## llms.txt and AI crawlers

https://amoeba-design.vercel.app/llms.txt returned the same plain-text 404 before this change, and this repo still has no `llms.txt`. `public/robots.txt` allows all crawlers and does not name AI user agents. Host-level noindex is the `X-Robots-Tag` rule in `vercel.json`, not a robots.txt disallow, because that file is shared with https://amoeba.design.

Adding `llms.txt` now would point models at "Coming soon" articles and a 59-word homepage. That is recorded as a later backlog item.

## Ranked backlog

Order follows the program priority: accuracy and broken technical issues (including the domain migration, which is what protects the only URL with impressions), then titles and meta on that URL, then comparison pages, then buyer-question articles, then free tools, then other technical work, then AEO. Impact and effort are 1–5 judgments.

Done before this metadata run:

1. **Domain migration readiness.** `site`, canonicals, trailing-slash policy, `robots.txt`, and the sitemap are in the repo. Legacy amoeba.design has only the homepage, so there is no extra 301 map. Still manual at cutover: point the Vercel project domain at this deployment and redirect `amoeba-design.vercel.app` to `https://amoeba.design`, then submit `https://amoeba.design/sitemap-index.xml` in Search Console. After launch, compare the homepage with the legacy table, including "amoeba ide".
2. **Stubs stay out of the index.** Each knowledge file has `noindex: true`. The article template emits `<meta name="robots" content="noindex, follow">`, and the sitemap filter drops those URLs. Set the flag to `false` when a body is real.
3. **Homepage title.** `Design engineering for ambitious B2B software • Amoeba` (54 characters, no price).

Done in the on-page metadata run:

4. **Unique titles, meta descriptions, and share tags on every page.** `{Page title} • Amoeba`, including the `Base.astro` fallback. One description per page. No prices. Open Graph and Twitter tags as described above. No share image (`TODO(og-image)`).
5. **One H1 per URL.** Masthead sentence is the H1 on `/` only. Article pages keep the article title as their only H1.

Trailing slash is done with the migration: canonicals use `trailingSlash: 'never'`, and `vercel.json` 308s a slashed path to the slashless path. The homepage stays `https://amoeba.design/`.

Still to do, in program order:

1. **Add high-intent comparison, alternatives, or use-case pages.** Impact 4, effort 4. None exist. The legacy property has zero non-branded service queries. `config.json` has a peer set, not a competitor list. Do not publish those URLs as competitors. When a page is written, put it in `src/pages/compare/{slug}.astro`. Blocked until Bryan names competitors. Peers are not that list.
2. **Replace the knowledge stubs with in-depth buyer-question articles.** Impact 4, effort 5. The seven titles already name the topics. Bodies are "Coming soon". They are `noindex` until `noindex` is set to `false`. This is the next unblocked content action. Start with "There's more to design engineering than microinteractions".
3. **Ship one free tool.** Impact 3, effort 4. No tool exists. Blocked on Bryan choosing the tool. Convention, not yet a directory: `src/pages/tools/{slug}.astro`.
4. **Add JSON-LD and a real HTML 404.** Impact 2, effort 2. No Organization, WebSite, Person, Service, Article, or BreadcrumbList. No `src/pages/404.astro`. Do not put the test price in schema. Use the claims in `truth.md`.
5. **Add `llms.txt` and an explicit AI-crawler policy.** Impact 2, effort 1. Do this after the articles have real bodies. `public/robots.txt` currently allows all crawlers.
6. **Add `public/og.png` and emit `og:image` / `twitter:image`.** Impact 2, effort 1. Blocked on artwork from Bryan. The hook is `TODO(og-image)` in `src/layouts/Base.astro`.

Also later, not a separate ranked item: more specific work-image alts once clients can be named (`src/pages/work/index.astro`), and `target="_blank"` on the external anchors. No lab speed data was collected. The build does emit responsive WebP for the work images. Typekit is a render-blocking stylesheet in `src/layouts/Base.astro`. No Core Web Vitals number is claimed here.

Internal-link repair is not in the backlog. The audit found no broken internal links and no orphan URLs.

## What would most improve the next runs

Answered:

1. Which domain will this build launch on, and is a migration from the current amoeba.design planned? **Yes.** Launch and canonical origin is https://amoeba.design. This repo now sets `site` and canonicals to that origin. https://amoeba-design.vercel.app stays the pre-launch host until Bryan attaches the domain and redirects it.

Answered on 2026-10-10, continued:

2. Legacy amoeba.design has only the homepage. No other legacy URLs need 301s. This question is closed.
3. Pricing: $500/week, Rent a design engineer (test pricing, offer not yet formalized) is an accurate current claim and stays on the homepage. Other offers and prices, including the commented $5,000 design-system block, are not formalized and must not be used. Keep prices out of titles and meta descriptions.
4. Positioning: keep "ambitious B2B software companies" (the current masthead). Peers, not strict competitors, are listed in `config.json`.

Still ask Bryan:

5. Priority service keywords, if he has them. The ledger topics are inferred from titles. The legacy property's queries are brand-adjacent only, led by "amoeba ide".
6. Whether the work screenshots may name a client, product, and outcome. Filenames are not treated as names.
7. Whether amoebaunlimited.com is still the blog, or whether `/knowledge` is the only place new posts should go.
8. A contact path he wants published (email or calendar). None is on this build.
9. Which free tool, if any, is worth building.
10. Whether any peer should be named on a comparison page. The peer list is context, not approval to publish those sites as competitors.
