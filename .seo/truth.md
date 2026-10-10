# Truth file

Claims below are copied from copy that this Astro site actually publishes. Each claim cites the source file. Nothing here is inferred from filenames, from the commented-out homepage draft, or from the separate site at https://amoeba.design.

Owner-supplied positioning used for the SEO program (not a claim this page is quoting from the site) lives in `.seo/config.json`.

Fetched 2026-10-10: production HTML at https://amoeba-design.vercel.app matches these claims.

## Identity and positioning

- Amoeba is a design engineering studio for ambitious B2B software companies. Source: `src/components/Masthead.astro`. That sentence is the H1 on `/` only. On every other `LayoutA` page it is a paragraph with the same visual style.
- Document titles use `{Page title} • Amoeba`. The fallback in `src/layouts/Base.astro`, used only when a page does not pass a title, is `Design engineering for ambitious B2B software • Amoeba`. The old growth-stage "Amoeba Design | …" default is gone.
- The logotype text is "Amoeba". Source: `src/components/Masthead.astro`.
- Document titles end in "Amoeba", not "Amoeba Design".

Bryan said on 2026-10-10 to keep "ambitious B2B software companies" (the masthead wording) for positioning. Do not write new content with the growth-stage or early-stage lines. Titles and meta descriptions do not include prices.

## Who runs it

- Amoeba is run by Bryan King from Newport, Kentucky. Source: `src/pages/info/index.astro`.
- Bryan King's X profile is linked as https://x.com/bryan_king. Source: `src/pages/info/index.astro`.

## Offer and pricing

- Accurate current claim, confirmed by Bryan on 2026-10-10: $500/week, Rent a design engineer (test pricing, offer not yet formalized). The homepage shows the heading "Rent a design engineer" and the price "$500 / week". Source: `src/pages/index.astro`. He is testing that price.
- The same figure is repeated as `$500 / week` on `/rent-a-design-engineer` (the price line and the "What does it cost?" answer). The hiring comparison is a "Coming soon" stub and does not state it. Bryan's 2026-10-10 content run asked for the homepage price on the offer page, and nothing beyond that figure. Titles and meta descriptions still omit the price. Service JSON-LD has no Offer. The cost answer is inside FAQPage JSON-LD because that answer is the FAQ. No other price is allowed.
- Published description next to that heading: "Is your app rough around the edges? Are you looking to buff out the AI slop from your interface? Populate a backlog of issues and I’ll ship polished UI as PRs for your engineering team to review." Source: `src/pages/index.astro`.
- Other offers and prices are not formalized and must not be used. That includes the HTML comment in `src/pages/index.astro` with "(Re)build your design system", "Starting at $5,000", "Prototyping", "Starting at $x,000", and lorem ipsum. The comment is not rendered and is not a claim.

## Expertise named on the homepage

Listed without further description. Source: `src/pages/index.astro`.

- Product Design
- Design Systems
- Front-end Engineering
- User Research
- Usability Testing
- Product Management
- Software Development Lifecycle

## Work

- `/work` publishes 13 screenshots and no prose, no client names, and no outcomes. Source: `src/pages/work/index.astro`.
- Alt text describes UI types (product UI, dashboard, analytics, invite modal, campaigns list, segment builder, campaign detail, contact-import steps). It does not name a company. Source: `src/pages/work/index.astro`.
- Asset filenames include `acme-*` and `cdp-import-*`. Those strings are not visible captions. They are not treated as client names here.

## Knowledge

Eight entries exist. Each has a title and a description in frontmatter. Sources: `src/content/knowledge/*.md`, rendered by `src/pages/knowledge/[id].astro`. Descriptions are shown on `/knowledge` (`src/pages/knowledge/index.astro`). Article pages also use that frontmatter string as `<meta name="description">`. Two document titles are shortened so `{Title} • Amoeba` stays at or under 60 characters: shadcn/lint, and the microinteractions article. Their visible H1s stay the full frontmatter titles. Every body is "Coming soon" and every entry is `noindex: true`. Bryan is writing the microinteractions and fix-ai-slop articles by hand from the outlines in `.seo/outlines/`. Their descriptions were rewritten in the 2026-10-10 content run and kept for when he publishes. The stub bodies link to related pages.

| Title | Description on the index | Body |
|---|---|---|
| Shake what the browser gave ya | Using native HTML elements to build modern UI | Coming soon |
| Storybook documentation for your agents | Show your agents how to use your design system with Storybook | Coming soon |
| Cleaning up the Tailwind mess | How to abstract long Tailwind strings into reusable patterns | Coming soon |
| How to use shadcn/lint to enforce your design system | Keep your agents on track with deterministic checks on your UI code | Coming soon |
| There's more to design engineering than microinteractions | A design engineer ships the interface, not a picture of it. What the role owns in B2B software, how it differs from design and front-end, and when to hire one. | Coming soon. `noindex: true`. Outline: `.seo/outlines/more-than-microinteractions.md` |
| Fix the AI slop in your UI | AI-generated UI drifts off the design system one override at a time. How I read the code, remove the slop, and put checks in CI so the next screen stays clean. | Coming soon. `noindex: true`. Outline: `.seo/outlines/fix-ai-slop-ui.md` |
| Don't be afraid of CSS | A pragmatic guide to CSS in the age of AI | Coming soon |
| One-shotting Figma designs in code | Creating context for your agents to convert a Figma frame to code. | Coming soon |

## Colophon and stack, as published

- Typefaces: HEX Franklin and Acumin VF. Source: `src/pages/info/index.astro`.
- Powered by Astro and Vercel. Source: `src/pages/info/index.astro`.

## Links the site publishes

- Footer, label "Blog": http://amoebaunlimited.com. Source: `src/components/Footer.astro`. On 2026-10-10 that URL redirected to https://www.amoebaunlimited.com/ and returned 200. It is not a page in this repo.
- Footer, label "Twitter": https://twitter.com/amoeba_design. Source: `src/components/Footer.astro`. Returned 200 on 2026-10-10.
- Footer, label "GitHub": https://github.com/amoebadesign. Source: `src/components/Footer.astro`. Returned 200 on 2026-10-10.

## Not published (UNKNOWN — ask Bryan)

- Process: how an engagement starts, how long it runs, what Bryan will not do. UNKNOWN.
- Named clients, case-study results, or permission to name the companies in the work screenshots. UNKNOWN.
- A public email, calendar link, or contact form. UNKNOWN. The published contact paths are the X profile on `/info` (https://x.com/bryan_king) and the footer Twitter/GitHub links. `/rent-a-design-engineer` uses that X profile as the CTA. `TODO(contact)` is in `src/pages/rent-a-design-engineer.astro` until Bryan names an email or calendar.
- Launch domain, answered by Bryan on 2026-10-10: this Astro build will replace the current site at https://amoeba.design. `astro.config.mjs` now sets `site` to that origin and `src/layouts/Base.astro` emits canonicals there. The pre-launch deploy remains https://amoeba-design.vercel.app until Bryan attaches the domain. Legacy copy on the Next.js site is still not recorded here.
- Legacy URLs, answered by Bryan on 2026-10-10: amoeba.design has only the homepage. No other legacy URLs need 301s.
- Competitors. UNKNOWN. Bryan named a peer set (people doing similar things, not strict competitors) in `.seo/config.json` under `peers`. Do not treat those sites as competitors.
- Audience segments. The owner stated them for the program (see config). The site itself does not list an audience.
