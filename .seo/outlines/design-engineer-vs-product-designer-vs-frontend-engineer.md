# Outline: Design engineer vs product designer vs frontend engineer

- URL: https://amoeba.design/compare/design-engineer-vs-product-designer-vs-frontend-engineer
- File: `src/pages/compare/design-engineer-vs-product-designer-vs-frontend-engineer.astro`
- Status: "Coming soon" stub, `noindex, follow`, out of the sitemap (listed in `src/noindex-routes.mjs`). Title, meta, Article/BreadcrumbList scaffolding, and related links are in the file.

## Title, H1, meta

- Title (set, 49 chars): `Design engineer vs designer vs front end • Amoeba`
- Meta description (set, 152 chars): `A design engineer, a product designer, and a frontend engineer own different parts of a SaaS product. When I would hire each, and why the titles differ.`
- H1 (set): `Design engineer vs product designer vs frontend engineer`
- Title alternatives:
  - `Design engineer vs product designer vs frontend • Amoeba` (56). Closer to the full query. Recommended if the 56 characters don't bother you.
  - `Design engineer, product designer, or frontend? • Amoeba` (56). Reads as the hiring question.
- If you rewrite the meta: 150–160 characters, no price, and name all three roles.

## Queries

- Target: "design engineer vs product designer vs frontend engineer".
- Secondary (inferred variants; no volume data): "design engineer vs frontend engineer", "design engineer vs product designer", "should I hire a product designer or a frontend engineer".
- Not this page: "what is a design engineer". That belongs to `/knowledge/more-than-microinteractions`. Define the role here in one or two sentences and link out, so the two pages don't compete.

## Intent and reader

- Intent: commercial investigation. Someone is about to write a job req or a budget line.
- Primary reader: a founder or engineering/product/design leader at a B2B SaaS company, deciding which role fills the gap.
- Secondary reader: ICs comparing the titles for their own career. Serve them lightly. Don't turn this into career advice.

## Thesis (proposed; confirm it is yours)

The three titles are three different gaps. Hire for the thing you are missing: a point of view on the problem (product designer), an owner for a large front end (frontend engineer), or someone who takes a UI decision all the way to a reviewed pull request (design engineer).

Supported by his public "skill combination" view (quotes below). The "hire for the missing artifact" framing is a proposal for Bryan to keep or replace.

## Structure

Mode: the blog's contrarian-explainer ("AI didn't kill Airtable"). Correct the assumption that the titles are interchangeable, give each role real credit, then state the tradeoff plainly. Blunt but fair.

### Intro (no heading)
- Hook: job posts and search results mash the titles together. [YOUR EXAMPLE: a req, a recruiter message, or a hiring conversation where the titles got mixed up.]
- The direct answer in two or three sentences (see AEO).
- One line on why you can speak to all three. [YOUR STORY: have you held each role, or done each job inside one role? Only state what is true.]

### H2: The short answer (table)
- Columns: Role / What they own / What they hand you / Hire when.
- Three rows, short cells. The roles table is the most liftable element for AI answers. It also has to stay readable at 390px wide.
- Fill the cells from the three sections below. Don't introduce claims that only live in the table.

### H2: Product designer
- Owns the problem, the flows, the research, and the argument for why this solution is the one.
- Communication is the skill that makes the rest land. Use the omakase quotes.
- Hire when the company doesn't yet know what to build, or the interface calls are contested.
- [YOUR EXAMPLE: a product designer who won a decision by explaining it, or a good design that died because nobody could explain it.]

### H2: Frontend engineer
- Owns the implementation: components, states, accessibility, performance, and a codebase that holds up.
- A deep specialist job. Give credit; don't treat it as "design engineer minus taste".
- Hire when the design is settled and the surface area is large.
- [YOUR EXAMPLE: a front end that needed a dedicated owner, and what happened without one.]

### H2: Design engineer
- Owns the overlap: design sense, front-end chops, enough backend, product judgment. Use the skill-list quote.
- The unglamorous half: RFCs, design-system enforcement, CI checks. Use the RFC joke.
- The working loop between the app and Figma. Use the Cursor/Figma quote.
- Hire when the gap sits between a UI decision and a merged PR. Link the offer page here.

### H2: Where the lines blur
- Small teams and zero-to-one work blur the titles, and that's fine for a while.
- AI amplifies people who already have the combination. It doesn't install it. Use the "one person" and "surgical team" quotes, and the 30% cap.
- When blurring stops working: "everyone does a bit of design" means the interface belongs to nobody. Bring in the process-purist view.

### H2: How to choose
- Three or four diagnostic questions, each pointing to one role. Example shapes: Do you know what to build? Is the design settled and the surface large? Is the gap between a decision and a PR?
- Mention the "rent vs hire" decision and link it. Don't argue it here.
- Close with a one-liner.

## Where Bryan's material goes

- [YOUR EXAMPLE: titles mixed up in a req or conversation]. Intro.
- [YOUR STORY: your own history across the three roles]. Intro.
- [YOUR EXAMPLE: a designer winning or losing on communication]. Product designer.
- [YOUR EXAMPLE: a front end that needed an owner]. Frontend engineer.
- [YOUR EXAMPLE: a design-engineering task that needed both calls in the same afternoon]. Design engineer.
- No invented companies, teams, or salary numbers.

## Public opinions that fit (quote + source)

- Product designer: "But the best designers, the ones that make magic, are omakase designers." (https://www.amoebaunlimited.com/2026/08/09/great-designers-are-great-communicators/)
- Product designer: "It's because they communicate precisely why their solution is not just the right solution to a problem, but the only solution." (same post)
- Product designer, mild-profanity version for articles only: "You can be a flaming asshole or a hack of a designer and still be successful if you're able to communicate why your solution is the best one available." (same post). Paraphrase it if the page should stay clean.
- Design engineer: "Just enough back-end knowledge to architect the system, design sense to build something people actually want, front-end chops to ship a working interface, and product judgment to know what matters." (https://bryanking.net/posts/no-more-hog-butchering)
- Design engineer: "If I were deficient in design but world-class at backend, it wouldn't work. [...] If I were purely a designer with no technical chops, I'd never get past the implementation details." (same post)
- Design engineer: "are you really a design engineer if you arent writing 1,500 word RFCs that explain how you're going to overhaul to design system and add strict checks to the CI pipeline?" (https://x.com/bryan_king/status/2100686542352089427). Paraphrase rather than quote the typos.
- Design engineer: "I usually build inside Cursor (and usually inside the app). I will ask Cursor to output the page(s) and any relevant states on a particular Figma page. [...] Make tweaks then have Cursor pick up changes." (https://x.com/bryan_king/status/2108681089896092015)
- Where the lines blur: "One person, armed with AI, can ship big things fast. Really fast." (https://bryanking.net/posts/no-more-hog-butchering)
- Where the lines blur: "Not for everyone—most engineers still can't ship alone. But for people with the right combination of skills, judgment, and taste, the new surgical team is you, your AI copilot, and a small support crew keeping you honest." (same post). The original has an em dash. Don't carry it into new prose.
- Where the lines blur: "LLMs will provide a 30% boost in programmer productivity, at best." (https://x.com/bryan_king/status/2094824455067377899)
- Where the lines blur: "The best teams I've worked with live and die by the book." (https://www.amoebaunlimited.com/2026/08/12/if-youre-so-smart-why-dont-you-ship/)

## Competing pages and the angle

- Peer research (section 2, "design engineer vs frontend engineer vs product designer") recorded lastres.ai, warp.co, modeinspect.com (two pages), and refery.io: recruiter and tool blogs, not practitioners.
- Peer research recorded who surfaced, not what those pages cover. [VERIFY: skim them for structure and gaps before drafting.]
- Angle:
  - A practitioner who has done the work, with a hiring decision rule, not a generic job-description comparison.
  - Framed for B2B SaaS teams specifically.
  - Fair credit to all three roles. Recruiter content tends to flatten them.
  - A clean table near the top for AI answers, then depth.

## FAQ (optional; add FAQPage schema only if the Q&A is visible on the page)

- "Does a design engineer need to know backend?" Answer from the "just enough back-end knowledge" quote.
- "Can a design engineer replace a product designer?" Answer from your view on communication and research. [YOUR VIEW]
- "Is a design engineer just a frontend engineer with taste?" Answer from the overlap and systems-work points.
- "Is a UX engineer the same thing?" Not covered by peer research or the voice guide. Skip it unless you have a view. [YOUR VIEW, optional]

## Internal links

- Must link: `/knowledge/more-than-microinteractions` (definition), `/rent-a-design-engineer` (offer, in the Design engineer section), and `/compare/rent-a-design-engineer-vs-hiring` (How to choose).
- Nice to have: `/knowledge/fix-ai-slop-ui`, `/knowledge`, `/`.
- Already linking here: offer page body and FAQ, `/knowledge` "Also" list, the other comparison stub, the definition stub.

## AEO

- Put the direct answer right under the H1: one sentence per role on what they own, then a one-sentence decision rule.
- Skeleton: "A product designer owns [the problem and the why]. A frontend engineer owns [the implementation]. A design engineer owns [the overlap, from UI decision to shipped PR]. Hire for [the gap you have]."
- Put the table in the first screenful after that. Use plain role names in headings so engines can map sections to roles.

## Length

1,200–1,600 words, including the table.

## Pitfalls

- Ranking the roles, or condescending to designers or engineers. The voice guide asks for credit before the knock.
- Salary or market-rate numbers. If you want any, cite a real public source with a link and a date.
- Repeating the full definition article. Link it instead.
- Career-advice drift.
- Long table cells that wreck mobile.
- A tidy three-part conclusion, em dashes, banned phrases (see `.seo/voice-guide.md`, section 3).
- Naming peers as competitors.

## Publishing checklist

1. Replace the stub body in the `.astro` file. Keep the single H1 and the `.copy` measure. A `<table>` with `<caption>` and `scope` attributes is the accessible pattern.
2. Remove the path from `src/noindex-routes.mjs`. That flips `noindex` and adds the page to the sitemap.
3. Set `const published = "YYYY-MM-DD"` in the file so Article schema gets dates.
4. Re-check the title and meta against the final copy.
5. `bun run build`. Confirm the page is in `dist/sitemap-0.xml` and has no robots meta.
6. Update `content-ledger.md` (words, sitemap Yes) and `run-log.md`.
