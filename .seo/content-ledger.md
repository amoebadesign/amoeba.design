# Content ledger

Canonical URLs for this build. `astro.config.mjs` sets `site` to https://amoeba.design and `trailingSlash` to `never`, so every canonical below is on that origin and, except the homepage, has no trailing slash.

`vercel.json` sends `X-Robots-Tag: noindex` when the host is neither `amoeba.design` nor `www.amoeba.design`. As of 2026-10-10, Vercel has www as primary: the apex 308s to www. Canonicals stay on the apex. Search Console `sc-domain:amoeba.design` covers both names. The legacy site had only the homepage.

Knowledge articles with `noindex: true` are built and linked, omitted from `sitemap-0.xml`, and marked No in the sitemap column. Flip the flag to `false` to index one article.

Word count is whitespace-delimited words in the rendered `<main>` of the 2026-10-10 static build. It includes in-main headings. It excludes the masthead, nav, and footer. Image alt text is excluded; `/work` notes that separately.

"Meta description" means a `<meta name="description">` tag. Knowledge entries have a frontmatter `description`, and `/knowledge` prints those strings in the page body. That is not a meta description.

Target keyword/topic is inferred from the title and on-page text. Every topic cell is marked inferred. Search Console for `sc-domain:amoeba.design` still measures the legacy site, so those queries are not used as this ledger's target keywords.

Last modified is the last git commit date of the page's source file. Article rows use the markdown file. Dates of `2026-10-10` are this change (homepage title, or `noindex: true` on a stub).

| URL | File | Target keyword / topic | Words | Title | Meta description | In sitemap | Last modified |
|---|---|---|---|---|---|---|---|
| https://amoeba.design/ | `src/pages/index.astro` | design engineering for ambitious B2B software (inferred) | 59 | Design engineering for ambitious B2B software • Amoeba | No | Yes | 2026-10-10 |
| https://amoeba.design/work | `src/pages/work/index.astro` | design engineering portfolio (inferred) | 3 visible; 0 prose; 46 words across 13 image alts | Work \| Amoeba Design | No | Yes | 2026-10-09 |
| https://amoeba.design/info | `src/pages/info/index.astro` | Bryan King, Newport Kentucky (inferred) | 21 | Amoeba Design \| Design engineering studio for growth-stage B2B software companies | No | Yes | 2026-10-09 |
| https://amoeba.design/knowledge | `src/pages/knowledge/index.astro` | design engineering articles (inferred) | 113 | Knowledge \| Amoeba Design | No | Yes | 2026-10-09 |
| https://amoeba.design/knowledge/shake-what-the-browser-gives-ya | `src/content/knowledge/shake-what-the-browser-gives-ya.md` | native HTML elements for modern UI (inferred) | 8 | Shake what the browser gave ya \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/storybook-for-agents | `src/content/knowledge/storybook-for-agents.md` | Storybook documentation for coding agents (inferred) | 7 | Storybook documentation for your agents \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/clean-up-messy-tailwind | `src/content/knowledge/clean-up-messy-tailwind.md` | abstracting long Tailwind class strings (inferred) | 7 | Cleaning up the Tailwind mess \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/shadcn-lint | `src/content/knowledge/shadcn-lint.md` | shadcn/lint to enforce a design system (inferred) | 11 | How to use shadcn/lint to enforce your design system \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/more-than-microinteractions | `src/content/knowledge/more-than-microinteractions.md` | what a design engineer does beyond microinteractions (inferred) | 9 | There's more to design engineering than microinteractions \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/css-is-nothing-to-fear | `src/content/knowledge/css-is-nothing-to-fear.md` | pragmatic CSS in the age of AI (inferred) | 7 | Don't be afraid of CSS \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |
| https://amoeba.design/knowledge/figma-to-code | `src/content/knowledge/figma-to-code.md` | turning a Figma frame into code with agents (inferred) | 7 | One-shotting Figma designs in code \| Amoeba Design | No | No (`noindex: true`) | 2026-10-10 |

Article word counts include the in-main H1 plus the body "Coming soon" (2 words). None of these articles has a body longer than those two words.
