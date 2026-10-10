# Truth file

Claims below are copied from copy that this Astro site actually publishes. Each claim cites the source file. Nothing here is inferred from filenames, from the commented-out homepage draft, or from the separate site at https://amoeba.design.

Owner-supplied positioning used for the SEO program (not a claim this page is quoting from the site) lives in `.seo/config.json`.

Fetched 2026-10-10: production HTML at https://amoeba-design.vercel.app matches these claims.

## Identity and positioning

- Amoeba is a design engineering studio for ambitious B2B software companies. Source: `src/components/Masthead.astro` (the page H1 on every URL that uses `LayoutA`).
- The default document title calls the same practice a design engineering studio for growth-stage B2B software companies, under the name Amoeba Design. Source: `src/layouts/Base.astro`.
- The logotype text is "Amoeba". Source: `src/components/Masthead.astro`.
- "Amoeba Design" is the name used in document titles. Source: `src/layouts/Base.astro`, `src/pages/work/index.astro`, `src/pages/knowledge/index.astro`, `src/pages/knowledge/[id].astro`.

The masthead says "ambitious". The default title says "growth-stage". Both are published. They are not the same phrase.

## Who runs it

- Amoeba is run by Bryan King from Newport, Kentucky. Source: `src/pages/info/index.astro`.
- Bryan King's X profile is linked as https://x.com/bryan_king. Source: `src/pages/info/index.astro`.

## Offer

- The homepage offer is titled "Rent a design engineer". Source: `src/pages/index.astro`.
- Published description: "Is your app rough around the edges? Are you looking to buff out the AI slop from your interface? Populate a backlog of issues and I’ll ship polished UI as PRs for your engineering team to review." Source: `src/pages/index.astro`.
- Published price next to that offer: $500 / week. Source: `src/pages/index.astro`.

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

Seven entries exist. Each has a title and a description in frontmatter. The rendered article body of every entry is "Coming soon". Sources: `src/content/knowledge/*.md`, rendered by `src/pages/knowledge/[id].astro`. Descriptions are shown on `/knowledge` (`src/pages/knowledge/index.astro`). They are not meta descriptions.

| Title | Description on the index | Body |
|---|---|---|
| Shake what the browser gave ya | Using native HTML elements to build modern UI | Coming soon |
| Storybook documentation for your agents | Show your agents how to use your design system with Storybook | Coming soon |
| Cleaning up the Tailwind mess | How to abstract long Tailwind strings into reusable patterns | Coming soon |
| How to use shadcn/lint to enforce your design system | Keep your agents on track with deterministic checks on your UI code | Coming soon |
| There's more to design engineering than microinteractions | How to think about working with a design engineer | Coming soon |
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
- Any price other than $500 / week. UNKNOWN.
- Whether the homepage's commented-out blocks are real offers. `src/pages/index.astro` contains an HTML comment with "(Re)build your design system", "Starting at $5,000", "Prototyping", "Starting at $x,000", and lorem ipsum. That block is not rendered. It is not a published claim. Ask Bryan before anyone treats it as an offer.
- Named clients, case-study results, or permission to name the companies in the work screenshots. UNKNOWN.
- A public email, calendar link, or contact form. UNKNOWN. The published contact paths are the X profile on `/info` and the footer Twitter/GitHub links.
- Which origin is canonical: this Astro app, or https://amoeba.design. UNKNOWN. See `.seo/baseline.md`. The Next.js site on the brand domain is a different codebase and its copy is not recorded here.
- Competitors. UNKNOWN. Left empty in `.seo/config.json`.
- Audience segments. The owner stated them for the program (see config). The site itself does not list an audience.
