# Content ledger

Indexable URLs in this repo as deployed today. There is no `noindex`, no `robots.txt`, and no canonical, so all 11 built pages are treatable as indexable on the pre-launch host. Production on 2026-10-10 returned 200 for each URL below, with and without a trailing slash.

These URLs use https://amoeba-design.vercel.app because that is where this repo deploys now. Bryan has decided the launch canonical will be https://amoeba.design, replacing the legacy site there. Search Console data for `sc-domain:amoeba.design` does not measure these Vercel URLs. The only legacy URL with impressions is https://amoeba.design/.

Word count is whitespace-delimited words in the rendered `<main>` of the 2026-10-10 static build. It includes in-main headings. It excludes the masthead, nav, and footer. Image alt text is excluded; `/work` notes that separately.

"Meta description" means a `<meta name="description">` tag. Knowledge entries have a frontmatter `description`, and `/knowledge` prints those strings in the page body. That is not a meta description.

Target keyword/topic is inferred from the title and on-page text. Every topic cell is marked inferred. Search Console for `sc-domain:amoeba.design` measures the legacy site, not these Vercel URLs, so those queries are not used as this ledger's target keywords.

Last modified is the last git commit date of the page's source file (`git log -1 --format=%cs`). Article rows use the markdown file. The shared route `src/pages/knowledge/[id].astro` was last committed 2026-10-09.

| URL | File | Target keyword / topic | Words | Title | Meta description | Last modified |
|---|---|---|---|---|---|---|
| https://amoeba-design.vercel.app/ | `src/pages/index.astro` | rent a design engineer (inferred) | 59 | Amoeba Design \| Design engineering studio for growth-stage B2B software companies | No | 2026-10-09 |
| https://amoeba-design.vercel.app/work | `src/pages/work/index.astro` | design engineering portfolio (inferred) | 3 visible; 0 prose; 46 words across 13 image alts | Work \| Amoeba Design | No | 2026-10-09 |
| https://amoeba-design.vercel.app/info | `src/pages/info/index.astro` | Bryan King, Newport Kentucky (inferred) | 21 | Amoeba Design \| Design engineering studio for growth-stage B2B software companies | No | 2026-10-09 |
| https://amoeba-design.vercel.app/knowledge | `src/pages/knowledge/index.astro` | design engineering articles (inferred) | 113 | Knowledge \| Amoeba Design | No | 2026-10-09 |
| https://amoeba-design.vercel.app/knowledge/shake-what-the-browser-gives-ya | `src/content/knowledge/shake-what-the-browser-gives-ya.md` | native HTML elements for modern UI (inferred) | 8 | Shake what the browser gave ya \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/storybook-for-agents | `src/content/knowledge/storybook-for-agents.md` | Storybook documentation for coding agents (inferred) | 7 | Storybook documentation for your agents \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/clean-up-messy-tailwind | `src/content/knowledge/clean-up-messy-tailwind.md` | abstracting long Tailwind class strings (inferred) | 7 | Cleaning up the Tailwind mess \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/shadcn-lint | `src/content/knowledge/shadcn-lint.md` | shadcn/lint to enforce a design system (inferred) | 11 | How to use shadcn/lint to enforce your design system \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/more-than-microinteractions | `src/content/knowledge/more-than-microinteractions.md` | what a design engineer does beyond microinteractions (inferred) | 9 | There's more to design engineering than microinteractions \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/css-is-nothing-to-fear | `src/content/knowledge/css-is-nothing-to-fear.md` | pragmatic CSS in the age of AI (inferred) | 7 | Don't be afraid of CSS \| Amoeba Design | No | 2026-10-04 |
| https://amoeba-design.vercel.app/knowledge/figma-to-code | `src/content/knowledge/figma-to-code.md` | turning a Figma frame into code with agents (inferred) | 7 | One-shotting Figma designs in code \| Amoeba Design | No | 2026-10-04 |

Article word counts include the in-main H1 plus the body "Coming soon" (2 words). None of these articles has a body longer than those two words.
