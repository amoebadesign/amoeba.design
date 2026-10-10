# Outline: Rent a design engineer vs hiring

- URL: https://amoeba.design/compare/rent-a-design-engineer-vs-hiring
- File: `src/pages/compare/rent-a-design-engineer-vs-hiring.astro`
- Status: "Coming soon" stub, `noindex, follow`, out of the sitemap (listed in `src/noindex-routes.mjs`). Title, meta, Article/BreadcrumbList scaffolding, and related links are in the file.

## Title, H1, meta

- Title (set, 41 chars): `Rent a design engineer vs hiring • Amoeba`
- Meta description (set, 157 chars): `Renting a design engineer and hiring one full time solve different problems. What a weekly UI backlog gets you, and when a full-time seat is the better call.`
- H1 (set): `Rent a design engineer vs hiring`
- Title alternatives:
  - `Renting vs hiring a design engineer • Amoeba` (44)
  - `Should you rent or hire a design engineer? • Amoeba` (51). Matches a question-style query.
- No price in the title or meta.

## Queries

- Target: "rent a design engineer vs hiring".
- Secondary (from the peer-research clusters; no volume data): "design engineer vs full-time hire", "design engineer vs design agency", "design engineer vs freelancer", "design subscription alternative", "fractional vs full-time design engineer".
- Adjacent gap: "design engineer cost / rate per week". Peer research found only UK mechanical-engineering contractor rates there, and no software pricing content. It's an opening, but only with cited sources (see Cost below).

## Intent and reader

- Intent: commercial investigation, late stage. The reader can afford either option.
- Reader: a founder or engineering lead with a req drafted, or a UI backlog nobody owns. They want an honest tradeoff, not a sales page.
- They will also read the offer page. This page earns trust by being fair to hiring.

## Thesis (proposed; confirm it is yours)

Rent the week when the work is a defined UI backlog your engineers can review. Hire when the interface is a standing function that needs someone in the building.

The offer mechanism is published (truth.md). The "standing function" framing is a proposal. Bryan has not published a view on full-time hiring, so state your own.

## Structure

Mode: contrarian explainer. Correct the assumption that renting and hiring are the same purchase at different prices. Credit hiring honestly, then state the tradeoff.

### Intro (no heading)
- Hook: [YOUR EXAMPLE: a team that opened a req for what was really a backlog, or rented help for what was really a job].
- The direct answer in two or three sentences (see AEO).

### H2: What renting gets you
- The published mechanism: you populate a backlog, I ship polished UI as PRs, your engineers review.
- Price: `$500 / week`, stated as on the homepage, once on this page.
- What the work lands as: PRs in your repo. Your team decides what merges.
- Fill only with supplied facts: [FACT NEEDED: hours per week], [FACT NEEDED: minimum engagement], [FACT NEEDED: turnaround / first PR], [FACT NEEDED: how a week starts]. If a fact isn't supplied, leave the point out. Don't hedge around it.

### H2: What a full-time hire gets you
- Context compounds: domain knowledge, customers, the history behind odd screens.
- Ownership over years: design system care, research cadence, coherence after the tenth feature.
- A teammate who follows the methodology you run. Use the "by the book" view.
- Give this section real credit. The reader can tell if you sandbag it.

### H2: Cost, honestly
- Qualitative only, unless you cite: salary plus benefits, recruiting time, management time, and ramp-up.
- If you want a market number: [SOURCE NEEDED: a published salary or rate survey you trust, with a link and the date]. Otherwise say plainly that you won't quote one.
- Peer research found that "design engineer cost" searches return mechanical/CAD rates. Say the software numbers floating around are unreliable only if you can back that up. [YOUR VIEW]
- Renting buys a defined list. Hiring buys someone who finds the next list.

### H2: Where each one goes wrong
- Renting fails on a vague or guessed backlog. Use the "customers will tell you" quote.
- Hiring fails on a long search and a calendar full of metawork. Use the "loaded calendars" and "metawork" quotes.
- [YOUR EXAMPLE: one of each, anonymized].

### H2: Versus agencies, freelancers, and design subscriptions (optional, short)
- One paragraph or a short list. The concrete difference to argue: the work ships as PRs in your codebase, not as design files to hand off. Peer research flags "code and PRs rather than Figma files" as the differentiator in a crowded subscription SERP.
- Speak about categories, not named companies.
- If this grows past a short section, split it into its own `/compare/...` page later (Baked runs three separate compare pages).

### H2: When I'd pick which
- Two short paragraphs or a two-item list: rent when…, hire when….
- "Both": a week can clear debt before a new hire starts, or cover a spike a hire shouldn't context-switch into. Don't imply a bundled package; none is published.
- Close with a one-liner.

## Where Bryan's material goes

- [YOUR EXAMPLE: a req that should have been a backlog, or the reverse]. Intro.
- [YOUR EXAMPLE: a vague backlog that wasted a week; a hire buried in meetings]. Where each goes wrong.
- [SOURCE NEEDED: any market figure]. Cost.
- [FACT NEEDED: hours, minimum, turnaround, start process]. What renting gets you.

## Public opinions that fit (quote + source)

- What renting gets you (unit of work): "The man-month is dead. Long live the man-day." (https://bryanking.net/posts/no-more-hog-butchering)
- What renting gets you: "One person, armed with AI, can ship big things fast. Really fast." (same post). Pair it with the 30% cap so it doesn't read as hype.
- What renting gets you (only if it matches how you run the week): "Rule number 1: limit work-in-progress!" (https://x.com/bryan_king/status/2101788510264910316)
- Full-time hire: "The best teams I've worked with live and die by the book." (https://www.amoebaunlimited.com/2026/08/12/if-youre-so-smart-why-dont-you-ship/)
- Where each goes wrong (renting): "Your customers will tell you what you want, you just have to listen!!" (https://x.com/bryan_king/status/2103666404251602968)
- Where each goes wrong (hiring): "Loaded calendars are a cancer lurking inside of software companies." (https://www.amoebaunlimited.com/2026/08/05/playing-tetris/)
- Where each goes wrong (hiring): "The workday is filled with metawork, everyone knows it, but nobody is willing to raise their hand and say "this is wrong"." (same post)
- Caution on hype: "LLMs will provide a 30% boost in programmer productivity, at best." (https://x.com/bryan_king/status/2094824455067377899)

## Competing pages and the angle

- Baked is the only peer with compare pages: `/compare/baked-vs-hiring-a-designer`, `-vs-design-agency`, `-vs-freelancers` (peer research, section 1). Its FAQ answers price questions without listing prices.
- The "product design subscription" SERP is crowded (99francs.agency, aktivedesign.com, designpixil.com, tenscope.com).
- Peer research lists Baked's hiring compare page as fetched but did not record its content. [VERIFY: read it before drafting so this page isn't a structural copy.]
- Angle:
  - A published weekly price next to an honest refusal to invent salary numbers.
  - Delivery as PRs in the client's repo, versus design files.
  - Real credit to hiring. Most vendor compare pages sandbag the alternative.
  - Written by the person doing the work, in the first person.
- Don't name Baked or any SERP player on the page.

## FAQ (optional; FAQPage only if visible)

- "Is renting cheaper than hiring?" Answer qualitatively. No salary unless cited.
- "Can I rent first and hire later?" Only the general idea that both can coexist. [FACT NEEDED if you mean any formal arrangement]
- "Does a rented design engineer work in our repo?" Yes: the published deliverable is PRs your team reviews.
- "Who owns the code?" [FACT NEEDED: IP terms]. Leave the question out until supplied.

## Internal links

- Must link: `/rent-a-design-engineer` (in "What renting gets you" and the close) and `/compare/design-engineer-vs-product-designer-vs-frontend-engineer` (if the reader is unsure which role).
- Nice to have: `/knowledge/more-than-microinteractions`, `/tools/ui-polish-checklist` (make the backlog specific first), `/`.
- Already linking here: offer page body and FAQ, `/knowledge` "Also" list, the roles comparison stub, the definition stub.

## AEO

- Direct answer under the H1, in two sentences: when renting fits, when hiring fits.
- Skeleton: "Rent a design engineer when [the work is a defined UI backlog and your engineers can review PRs]. Hire full time when [the interface is a standing function that needs an owner inside the company]."
- A short "rent when / hire when" pair near the end gives engines a second clean extract.

## Length

1,000–1,400 words.

## Pitfalls

- Invented salary, rate, or "you save X%" figures.
- Inventing engagement terms (minimums, notice periods, conversion fees).
- Sandbagging full-time hiring.
- Naming peers or SERP players.
- Repeating the offer page's FAQ word for word. Link it instead.
- More than one or two price mentions.
- Em dashes and the banned phrases in `.seo/voice-guide.md`, section 3.

## Publishing checklist

1. Replace the stub body in the `.astro` file. Keep the single H1.
2. Remove the path from `src/noindex-routes.mjs`.
3. Set `const published = "YYYY-MM-DD"` for Article schema dates.
4. If you state the price here, note it in `.seo/truth.md` and `config.json` (they record every page that repeats it).
5. `bun run build`. Check the sitemap and that the robots meta is gone.
6. Update `content-ledger.md` and `run-log.md`.
