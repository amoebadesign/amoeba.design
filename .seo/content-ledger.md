# Content ledger

Canonical URLs for this build. `astro.config.mjs` sets `site` to https://amoeba.design and `trailingSlash` to `never`, so every canonical below is on that origin and, except the homepage, has no trailing slash.

`vercel.json` sends `X-Robots-Tag: noindex` when the host is neither `amoeba.design` nor `www.amoeba.design`. As of 2026-10-10, Vercel has www as primary: the apex 308s to www. Canonicals stay on the apex. Search Console `sc-domain:amoeba.design` covers both names. The legacy site had only the homepage.

Knowledge articles with `noindex: true` are built and linked, omitted from `sitemap-0.xml`, and marked No in the sitemap column. Flip the flag to `false` to index one article.

Word count is whitespace-delimited words in the rendered `<main>` of the static build for this run. It includes in-main headings, including a visually hidden H1. It excludes the masthead, nav, and footer. Image alt text is excluded; `/work` notes that separately.

"Meta description" is the content of `<meta name="description">`. Article rows use the knowledge frontmatter `description` unchanged. Character counts for titles and descriptions are in the run log for this run.

Target keyword/topic is inferred from the title and on-page text. Every topic cell is marked inferred. Search Console for `sc-domain:amoeba.design` still measures the legacy site, so those queries are not used as this ledger's target keywords.

Last modified is the last git commit date of the page's source file. Article rows use the markdown file. The shared route `src/pages/knowledge/[id].astro` changed in this run; article markdown dates did not.

H1 is the single `<h1>` text. `/work` and `/knowledge` hide that heading visually. The homepage H1 is the masthead, outside `<main>`.

| URL | File | Target keyword / topic | Words | Title | H1 | Meta description | In sitemap | Last modified |
|---|---|---|---|---|---|---|---|---|
| https://amoeba.design/ | `src/pages/index.astro` | design engineering for ambitious B2B software (inferred) | 59 | Design engineering for ambitious B2B software • Amoeba | Amoeba is a design engineering studio for ambitious B2B software companies. | Amoeba is a design engineering studio for ambitious B2B software companies. Rent a design engineer to ship polished UI as pull requests for your team to review. | Yes | 2026-10-10 |
| https://amoeba.design/work | `src/pages/work/index.astro` | design engineering portfolio (inferred) | 4 in main (hidden H1 plus 3 visible lightbox words); 0 prose; 46 words across 13 image alts | Product interface work • Amoeba | Work | Product UI screenshots from Amoeba, a design engineering studio for ambitious B2B software companies. Dashboards, campaigns, invites, and contact import. | Yes | 2026-10-10 |
| https://amoeba.design/info | `src/pages/info/index.astro` | Bryan King, Newport Kentucky (inferred) | 21 | Bryan King, Newport, Kentucky • Amoeba | Amoeba is run by Bryan King from Newport, Kentucky. | Amoeba is a design engineering studio run by Bryan King from Newport, Kentucky. The site is set in HEX Franklin and Acumin VF, and powered by Astro and Vercel. | Yes | 2026-10-10 |
| https://amoeba.design/knowledge | `src/pages/knowledge/index.astro` | design engineering articles (inferred) | 114 | Design engineering knowledge • Amoeba | Knowledge | Knowledge from Amoeba on design engineering for ambitious B2B software companies: CSS, Tailwind, native HTML, Figma-to-code, Storybook, and shadcn/lint. | Yes | 2026-10-10 |
| https://amoeba.design/knowledge/shake-what-the-browser-gives-ya | `src/content/knowledge/shake-what-the-browser-gives-ya.md` | native HTML elements for modern UI (inferred) | 8 | Shake what the browser gave ya • Amoeba | Shake what the browser gave ya | Using native HTML elements to build modern UI | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/storybook-for-agents | `src/content/knowledge/storybook-for-agents.md` | Storybook documentation for coding agents (inferred) | 7 | Storybook documentation for your agents • Amoeba | Storybook documentation for your agents | Show your agents how to use your design system with Storybook | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/clean-up-messy-tailwind | `src/content/knowledge/clean-up-messy-tailwind.md` | abstracting long Tailwind class strings (inferred) | 7 | Cleaning up the Tailwind mess • Amoeba | Cleaning up the Tailwind mess | How to abstract long Tailwind strings into reusable patterns | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/shadcn-lint | `src/content/knowledge/shadcn-lint.md` | shadcn/lint to enforce a design system (inferred) | 11 | Use shadcn/lint to enforce your design system • Amoeba | How to use shadcn/lint to enforce your design system | Keep your agents on track with deterministic checks on your UI code | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/more-than-microinteractions | `src/content/knowledge/more-than-microinteractions.md` | what a design engineer does beyond microinteractions (inferred) | 9 | Design engineering beyond microinteractions • Amoeba | There's more to design engineering than microinteractions | How to think about working with a design engineer | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/css-is-nothing-to-fear | `src/content/knowledge/css-is-nothing-to-fear.md` | pragmatic CSS in the age of AI (inferred) | 7 | Don't be afraid of CSS • Amoeba | Don't be afraid of CSS | A pragmatic guide to CSS in the age of AI | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/figma-to-code | `src/content/knowledge/figma-to-code.md` | turning a Figma frame into code with agents (inferred) | 7 | One-shotting Figma designs in code • Amoeba | One-shotting Figma designs in code | Creating context for your agents to convert a Figma frame to code. | No (`noindex: true`) | 2026-10-10 |

Article word counts include the in-main H1 plus the body "Coming soon" (2 words). None of these articles has a body longer than those two words.
