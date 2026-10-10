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

`Base.astro` emits charset, viewport, a title, an inline theme script, Astro `ClientRouter`, a font preload, and the Adobe Typekit stylesheet. It does not emit a description, canonical, robots meta, Open Graph, Twitter cards, or JSON-LD.

## Launch domain

Answered by Bryan on 2026-10-10: this Astro build will replace the site that is live at https://amoeba.design. The launch and canonical origin is **https://amoeba.design**. The current deploy of this repo stays **https://amoeba-design.vercel.app** until that cutover.

The codebase does not implement that decision yet.

- `astro.config.mjs` does not set `site`. It is `defineConfig({})`.
- `src/layouts/Base.astro` does not emit `<link rel="canonical">`. Built HTML has none.
- There is no `vercel.json` and no redirect in the repo.
- `package.json` `"name": "amoeba.design"` is the npm package name, not a site URL.
- https://amoeba-design.vercel.app/ returned HTTP 200 on 2026-10-10 with no `Location` header. The Vercel host is indexable (no `noindex`, no robots file, no `x-robots-tag`) and does not send visitors to https://amoeba.design.
- https://amoeba.design still serves a different Next.js application. Its own pages emit `<link rel="canonical" href="https://amoeba.design">`. Homepage title there: "Amoeba • Design engineering for early-stage B2B startups". Visible H1: "Design engineering for early-stage B2B startups". That copy is not in this repo and is not in `truth.md`.
- http://amoeba.design redirects to https://amoeba.design. https://www.amoeba.design did not resolve.

Until launch, two origins stay public. They are not the same HTML. The migration has to move the brand domain onto this build and keep the Vercel host out of the index. Slash-duplicate URLs on the Astro host are a separate gap (below).

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

**Branding / disambiguation.** "amoeba ide" is the largest query: 60 impressions and 1 click at position 6.6. The exact phrase "amoeba design" has 5 impressions at position 7.4. The same homepage also appears for the misspellings "ameoba ide" and "ameba design", and for other names that share the word Amoeba (architects, creative sdn bhd, studios, project, ai). People are reaching the legacy homepage through ambiguous brand-adjacent queries, not through queries about design engineering or the $500/week offer. When this build takes over https://amoeba.design/, that homepage URL keeps this query mix. The new title and H1 need to say which Amoeba this is. The export does not say what "amoeba ide" refers to, and this note does not guess.

## Titles

Preferred pattern from Bryan: `{Page Title} • Amoeba`. It is not implemented.

Implemented pattern on most URLs: `{Page title} | Amoeba Design`. Home and info do not pass a title, so they share the 81-character default in `src/layouts/Base.astro`.

Character counts are the decoded title string.

| URL | Chars | Title | Notes |
|---|---|---|---|
| `/` | 81 | Amoeba Design \| Design engineering studio for growth-stage B2B software companies | Same title as `/info`. Longer than a typical SERP truncation around 60 characters. Does not use the preferred suffix. |
| `/info` | 81 | Same as `/` | Duplicate title. File: `src/pages/info/index.astro` (no `title` prop). |
| `/work` | 20 | Work \| Amoeba Design | Short and generic. `src/pages/work/index.astro`. |
| `/knowledge` | 25 | Knowledge \| Amoeba Design | Short and generic. `src/pages/knowledge/index.astro`. |
| `/knowledge/shake-what-the-browser-gives-ya` | 46 | Shake what the browser gave ya \| Amoeba Design | |
| `/knowledge/storybook-for-agents` | 55 | Storybook documentation for your agents \| Amoeba Design | |
| `/knowledge/clean-up-messy-tailwind` | 45 | Cleaning up the Tailwind mess \| Amoeba Design | |
| `/knowledge/shadcn-lint` | 68 | How to use shadcn/lint to enforce your design system \| Amoeba Design | Long. |
| `/knowledge/more-than-microinteractions` | 73 | There's more to design engineering than microinteractions \| Amoeba Design | Long. |
| `/knowledge/css-is-nothing-to-fear` | 38 | Don't be afraid of CSS \| Amoeba Design | |
| `/knowledge/figma-to-code` | 50 | One-shotting Figma designs in code \| Amoeba Design | |

Every built page has exactly one `<title>`. The Vercel deploy matched these strings.

This Astro build has no impressions of its own. The legacy URL it will replace, https://amoeba.design/, is the only URL with Search Console impressions (298 in the last 90 days, 5 clicks). Title and description work on this homepage is the page-with-impressions task. `/work` and the other routes have no query data. `/` is also the duplicate-title URL shared with `/info`.

## Meta descriptions

No page has `<meta name="description">`. Confirmed in source, in `dist/*.html`, and on production.

Knowledge frontmatter `description` is required by `src/content.config.ts` and is printed on `/knowledge` only. Article templates do not put it in `<head>` or in the article body.

## Canonical tags and trailing slashes

No canonical tag on any Astro URL.

The build writes directory indexes (`dist/work/index.html`, `dist/knowledge/figma-to-code/index.html`, and so on). On production, `/work` and `/work/` both returned 200 with the same HTML length and the same title. The same was true for `/knowledge` and `/knowledge/`. Without a canonical, those pairs are duplicate URLs.

## Open Graph and Twitter

Zero `og:` and zero `twitter:` tags in the Astro build and on the Vercel host. No share image is defined. No favicon file is in `public/` (`/favicon.ico` returned the Vercel 404).

## robots.txt

Not in the repo, not in `dist/`, and https://amoeba-design.vercel.app/robots.txt returned 404 with the Vercel plain-text body. There is no `X-Robots-Tag` and no robots meta. Crawlers, including AI crawlers, are under the default allow behavior.

## Sitemap

`@astrojs/sitemap` is not a dependency. No `sitemap.xml` or `sitemap-index.xml` in `dist/`. The Vercel host returned 404 for `/sitemap.xml`. Search Console for `sc-domain:amoeba.design` has no sitemap submitted. A sitemap integration needs `site` set to `https://amoeba.design` before it can emit absolute URLs on the launch origin. Submitting that sitemap is part of the domain-migration item, after thin URLs are kept out of the index.

## JSON-LD

No `application/ld+json` anywhere in `src/` or in the built HTML. These types are absent: Organization, WebSite, Person, Service, Article, BreadcrumbList.

Published facts that could support them later, once Bryan confirms they are still accurate, are in `truth.md` (person, one priced offer, expertise list). Article schema would describe "Coming soon" pages if it were added now.

## H1

`src/components/Masthead.astro` renders this H1 on every `LayoutA` page:

> Amoeba is a design engineering studio for ambitious B2B software companies.

| URL | H1 count | What they say |
|---|---|---|
| `/`, `/work`, `/info`, `/knowledge` | 1 | Masthead sentence only. The homepage offer "Rent a design engineer" is an H2. `/work` has no heading of its own. `/info` uses an H3 for "Colophon". `/knowledge` uses H2 for each entry. |
| Each `/knowledge/{id}` | 2 | Masthead sentence, then the article title in `src/pages/knowledge/[id].astro` (`<h1 class="type-title-alt">`). |

Home, work, info, and the knowledge index have no unique H1. Article URLs have two H1s.

## Thin pages

Rendered `<main>` word counts are in `content-ledger.md`.

- All seven articles: body text is "Coming soon" (2 words). With the in-main title, main text is 7–11 words. They are live, linked from `/knowledge`, and return 200. They are thin indexable URLs.
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

https://amoeba-design.vercel.app/llms.txt returned the same plain-text 404. Nothing in the repo references `llms.txt`, GPTBot, Google-Extended, or other AI user agents. With no robots.txt, this host does not publish an allow or disallow policy for them.

Adding `llms.txt` now would point models at "Coming soon" articles and a 59-word homepage. That is recorded as a later backlog item.

## Ranked backlog

Order follows the program priority: accuracy and broken technical issues (including the domain migration, which is what protects the only URL with impressions), then titles and meta on that URL, then comparison pages, then buyer-question articles, then free tools, then other technical work, then AEO. Impact and effort are 1–5 judgments. Nothing below has been implemented.

1. **Domain migration onto https://amoeba.design.** Impact 5, effort 3. Bryan confirmed this build replaces the legacy site. Search Console on `sc-domain:amoeba.design` is the pre-migration baseline to protect: only https://amoeba.design/ has impressions (298 in the last 90 days, 5 clicks, average position 11.3). This repo does not point at that host yet. Do all of the following together:
   - Set Astro `site` to `https://amoeba.design` and emit canonicals on that origin. Files: `astro.config.mjs`, `src/layouts/Base.astro`. Neither sets this today.
   - Keep https://amoeba-design.vercel.app out of the index. It returned HTTP 200 on 2026-10-10 with no redirect. Prefer a host redirect from the Vercel domain to the same path on https://amoeba.design. `noindex` on non-production hosts is the alternative if a redirect is not available. A canonical tag alone, while both hosts return 200, is the weaker option. The redirect itself is a Vercel project setting; this repo has no `vercel.json`.
   - Publish `robots.txt` and an XML sitemap whose URLs are `https://amoeba.design/...`. Do not list the Vercel host. No sitemap is submitted in Search Console today. Submit the new sitemap on `sc-domain:amoeba.design` after launch, and only after the "Coming soon" URLs are out of the index (item 2). `@astrojs/sitemap` needs `site` set first.
   - 301 each legacy amoeba.design URL to its new equivalent. The export shows impressions for the homepage only. Paths beyond `/` are not in this repo and were not provided. Get that list (a crawl of the legacy site, or from Bryan) before cutover so old URLs do not 404 on the new build.
   - After launch, compare the homepage against the table above, including the "amoeba ide" query. Those numbers are the legacy site's, and they are the baseline the migration has to hold.
2. **Keep the seven "Coming soon" URLs out of the index until they have a real body.** Impact 5, effort 1. Files: `src/content/knowledge/*.md` and `src/pages/knowledge/[id].astro`. They are linked, return 200, and have a two-word body. Unpublishing or `noindex` is the fix. Do this before the sitemap in item 1 is submitted, or the brand domain inherits empty articles. Writing them is item 7.
3. **Give every indexable URL a unique title ending in `• Amoeba`, plus a meta description. Do the homepage first.** Impact 4, effort 2. https://amoeba.design/ is the only URL with impressions, and this homepage will replace it. The current title is 81 characters and is shared with `/info` (`src/layouts/Base.astro`, `src/pages/info/index.astro`). The legacy query mix is brand-ambiguous ("amoeba ide" at 60 impressions, ahead of "amoeba design" at 5), so the new homepage title has to say this is the design-engineering studio. `/work` and `/knowledge` are generic and have no query data. The head change belongs in `src/layouts/Base.astro`.
4. **Use one unique H1 per URL.** Impact 3, effort 1. The masthead H1 in `src/components/Masthead.astro` is the only H1 on `/`, `/work`, `/info`, and `/knowledge`. Article pages add a second H1 in `src/pages/knowledge/[id].astro`. The homepage H1 is also the disambiguation line for the queries in the Search Console table.
5. **Pick one trailing-slash form and canonical it.** Impact 3, effort 1. Depends on item 1 for the host. `/work` and `/work/` both returned 200 on the Vercel deploy. The same was true for `/knowledge` and `/knowledge/`.
6. **Add high-intent comparison, alternatives, or use-case pages.** Impact 4, effort 4. None exist. The legacy property has zero non-branded service queries, so these pages are how service demand would start. Blocked on a competitor list (empty in `config.json` on purpose). When unblocked, put them in `src/pages/compare/{slug}.astro`.
7. **Replace the knowledge stubs with in-depth buyer-question articles.** Impact 4, effort 5. The seven titles already name topics (working with a design engineer, CSS, Figma-to-code, Tailwind, shadcn/lint, Storybook, native HTML). Bodies are "Coming soon". Do this after item 2 so the stubs are not sitting on the brand domain while they are being written.
8. **Ship one free tool.** Impact 3, effort 4. No tool exists. Blocked on Bryan choosing the tool. Convention, not yet a directory: `src/pages/tools/{slug}.astro`.
9. **Add JSON-LD and a real HTML 404.** Impact 2, effort 2. No Organization, WebSite, Person, Service, Article, or BreadcrumbList. No `src/pages/404.astro`; unknown URLs on the Vercel host are the plain-text Vercel 404. `robots.txt` and the sitemap are item 1, not this item. Schema should use https://amoeba.design once `site` is set, and it should wait until the published claims in `truth.md` are still the ones Bryan wants on the brand domain.
10. **Add `llms.txt` and an explicit AI-crawler policy.** Impact 2, effort 1. AEO, and last on purpose. https://amoeba-design.vercel.app/llms.txt 404s, and there is no robots policy. Writing the file before the articles exist would cite "Coming soon" pages. Do it after items 2 and 7, on the launch origin.

Also later, not a separate ranked item: more specific work-image alts once clients can be named (`src/pages/work/index.astro`), and `target="_blank"` on the external anchors. No lab speed data was collected. The build does emit responsive WebP for the work images. Typekit is a render-blocking stylesheet in `src/layouts/Base.astro`. No Core Web Vitals number is claimed here.

Internal-link repair is not in the backlog. The audit found no broken internal links and no orphan URLs.

## What would most improve the next runs

Answered:

1. Which domain will this build launch on, and is a migration from the current amoeba.design planned? **Yes.** Launch and canonical origin is https://amoeba.design. This Astro build replaces the legacy site there. https://amoeba-design.vercel.app is the pre-launch deploy only. The codebase does not set `site` or a canonical to that origin yet. The work is backlog item 1.

Still ask Bryan:

2. The legacy URL list on amoeba.design beyond the homepage. Search Console shows impressions only for https://amoeba.design/. A 301 map cannot be written from this repo alone.
3. The competitor and alternatives list. It is an empty TODO. Do not guess.
4. Priority service keywords, if he has them. The ledger topics are inferred from titles. The legacy property's queries are brand-adjacent only, led by "amoeba ide".
5. Pricing. The only published price on this build is $500 / week for "Rent a design engineer". The commented block in `src/pages/index.astro` mentions a design-system figure of $5,000 and a prototyping figure of "$x,000" plus lorem ipsum. Is any of that real?
6. Whether the work screenshots may name a client, product, and outcome. Filenames are not treated as names.
7. Whether amoebaunlimited.com is still the blog, or whether `/knowledge` is the only place new posts should go.
8. A contact path he wants published (email or calendar). None is on this build.
9. Which free tool, if any, is worth building.
10. Confirmation that the owner-supplied audience and the "product design and design engineering for growth-stage B2B software" line should be the positioning the new homepage uses. The masthead says "ambitious". The legacy site says "early-stage". The query mix to protect is mostly "amoeba ide" and other Amoeba names, not service terms.
