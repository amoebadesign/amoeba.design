# Technical baseline

Date: 2026-10-10. Scope is this Astro repo and the URLs it publishes. No page or config was changed in this run.

## How this was checked

- Read `package.json`, `astro.config.mjs`, layouts, pages, the knowledge collection, and nav.
- `bun run build` with Astro 7.3.5 (lockfile resolution). Exit 0. Output mode `static`. 11 pages in about 6.8s. Build directory `dist/` (gitignored).
- Fetched production HTML and response headers for https://amoeba-design.vercel.app (home, `/work`, `/work/`, `/info`, `/knowledge`, `/knowledge/`, all seven articles, a missing path, `robots.txt`, `sitemap.xml`, `llms.txt`).
- Fetched https://amoeba.design, http://amoeba.design, and https://www.amoeba.design.
- No Google Search Console, DataForSEO, or rank-tracking export was available. This file has no impressions, clicks, positions, or search volume.

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

## Canonical host

This repo does not declare a site URL.

- `astro.config.mjs` does not set `site`.
- No `<link rel="canonical">` in source or in the built HTML.
- https://amoeba-design.vercel.app serves this codebase. Homepage title on 2026-10-10: "Amoeba Design | Design engineering studio for growth-stage B2B software companies". Response size about 12.5 KB. No `x-robots-tag`.
- https://amoeba.design is a different application. Response headers include `x-nextjs-prerender` and `vary: rsc`. Homepage title: "Amoeba • Design engineering for early-stage B2B startups". It emits `<link rel="canonical" href="https://amoeba.design">`, a meta description, and Open Graph / Twitter tags. Visible H1: "Design engineering for early-stage B2B startups". Body copy describes Bryan as one person covering product, design, and front-end. That copy is not in this repo and is not copied into `truth.md`.
- http://amoeba.design redirects to https://amoeba.design.
- https://www.amoeba.design did not resolve (name not found).

Canonical for the Astro site: **unset**. The brand domain is in use, and it canonicalizes itself, but it is not this project. Both origins are indexable. They disagree on stage ("growth-stage" / "ambitious" B2B software companies on this site, "early-stage B2B startups" on the Next.js site) and on shape (a studio in the masthead, "just me" on the brand domain). Ask Bryan which origin should rank before any redirect or canonical tag is added.

The Vercel host is indexable beside the brand domain. There is no `noindex` and no robots file on https://amoeba-design.vercel.app. These are not byte-for-byte duplicates. The risk is two public sites for one brand, plus slash-duplicate URLs on the Astro host (below).

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

Every built page has exactly one `<title>`. Production matched these strings.

There is no impression data, so this audit cannot rank title fixes by current clicks. The commercial URLs are `/` and `/work`. `/` is also the duplicate-title URL.

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

`@astrojs/sitemap` is not a dependency. No `sitemap.xml` or `sitemap-index.xml` in `dist/`. Production returned 404 for `/sitemap.xml`. Astro would also need a `site` value before a sitemap integration could emit absolute URLs.

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

Order follows the program priority: accuracy and broken technical issues, then titles and meta (no impression data, so the commercial pages come first), then comparison pages, then buyer-question articles, then free tools, then other technical work, then AEO. Impact and effort are 1–5 judgments. Impact is not based on traffic numbers. Nothing below has been implemented.

1. **Decide the canonical host, then make the other origin stop competing.** Impact 5, effort 2 after Bryan answers. This Astro app is live at https://amoeba-design.vercel.app with no canonical and no `noindex`. https://amoeba.design is a separate Next.js site that already canonicalizes to itself and uses different positioning ("early-stage B2B startups"). Files to touch once the decision exists: `astro.config.mjs` (`site`) and `src/layouts/Base.astro`. Host redirects are a Vercel project setting, not a file in this repo.
2. **Keep the seven "Coming soon" URLs out of the index until they have a real body.** Impact 5, effort 1. Files: `src/content/knowledge/*.md` and `src/pages/knowledge/[id].astro`. They are linked, return 200, and have a two-word body. Unpublishing or `noindex` is the fix. Writing them is item 7, not this item.
3. **Give every indexable URL a unique title ending in `• Amoeba`, plus a meta description.** Impact 4, effort 2. Home and info share an 81-character title (`src/layouts/Base.astro`, `src/pages/info/index.astro`). `/work` and `/knowledge` are generic. No description meta exists. Do `/` and `/work` first. The head change belongs in `src/layouts/Base.astro`.
4. **Use one unique H1 per URL.** Impact 3, effort 1. The masthead H1 in `src/components/Masthead.astro` is the only H1 on `/`, `/work`, `/info`, and `/knowledge`. Article pages add a second H1 in `src/pages/knowledge/[id].astro`.
5. **Emit one canonical URL per page and pick one trailing-slash form.** Impact 4, effort 2. Depends on item 1. `/work` and `/work/` both returned 200. No canonical in `src/layouts/Base.astro`. `site` is unset in `astro.config.mjs`.
6. **Add high-intent comparison, alternatives, or use-case pages.** Impact 4, effort 4. None exist. Blocked on a competitor list (empty in `config.json` on purpose). When unblocked, put them in `src/pages/compare/{slug}.astro`.
7. **Replace the knowledge stubs with in-depth buyer-question articles.** Impact 4, effort 5. The seven titles already name topics (working with a design engineer, CSS, Figma-to-code, Tailwind, shadcn/lint, Storybook, native HTML). Bodies are "Coming soon". Do this after item 2 so the stubs are not sitting in the index while they are being written.
8. **Ship one free tool.** Impact 3, effort 4. No tool exists. Blocked on Bryan choosing the tool. Convention, not yet a directory: `src/pages/tools/{slug}.astro`.
9. **Add `robots.txt` and an XML sitemap after the indexable set is real.** Impact 3, effort 1. Missing today. A sitemap of the current 11 URLs would advertise seven empty articles, so this waits on items 1 and 2. `@astrojs/sitemap` also needs `site`.
10. **Add JSON-LD and a real HTML 404.** Impact 2, effort 2. No Organization, WebSite, Person, Service, Article, or BreadcrumbList. No `src/pages/404.astro`; unknown URLs are the Vercel plain-text 404. Schema should wait until the canonical host and the published claims are confirmed.

Next, and not in the top 10: `llms.txt` and an explicit AI-crawler policy (AEO). Low value until the articles exist. Also later: more specific work-image alts once clients can be named (`src/pages/work/index.astro`), and `target="_blank"` on the external anchors. No lab speed data was collected. The build does emit responsive WebP for the work images. Typekit is a render-blocking stylesheet in `src/layouts/Base.astro`. No Core Web Vitals number is claimed here.

Internal-link repair is not in the backlog. The audit found no broken internal links and no orphan URLs.

## What would most improve the next runs

Ask Bryan:

1. Which host should be canonical for this business: https://amoeba-design.vercel.app, https://amoeba.design, or another hostname pointed at this Astro app? The two live sites disagree (growth-stage studio vs early-stage, one person).
2. Google Search Console on the chosen property. No query data exists, so title and content work cannot be ordered by impressions yet.
3. The competitor and alternatives list. It is an empty TODO. Do not guess.
4. Priority keywords or jobs-to-be-hired, if he has them. The ledger topics are inferred from titles only.
5. Pricing. The only published price is $500 / week for "Rent a design engineer". The commented block in `src/pages/index.astro` mentions a design-system figure of $5,000 and a prototyping figure of "$x,000" plus lorem ipsum. Is any of that real?
6. Whether the work screenshots may name a client, product, and outcome. Filenames are not treated as names.
7. Whether amoebaunlimited.com is still the blog, or whether `/knowledge` is the only place new posts should go.
8. A contact path he wants published (email or calendar). None is on the site.
9. Which free tool, if any, is worth building.
10. Confirmation that the owner-supplied audience and the "product design and design engineering for growth-stage B2B software" line should be the positioning, given the masthead says "ambitious" and the other site says "early-stage".
