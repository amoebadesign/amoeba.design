# Outline: Rent a design engineer (offer page)

- URL: https://amoeba.design/rent-a-design-engineer
- File: `src/pages/rent-a-design-engineer.astro`
- Status: live and indexable. The copy there is a placeholder. Bryan rewrites it from this outline. Keep the route, the JSON-LD scaffolding, and the `TODO(contact)` until a contact path exists.
- Sources: offer facts from `.seo/truth.md`. Opinions from `.seo/voice-guide.md`. SERP notes from `.seo/peer-research.md`.

## Title, H1, meta

- Title (set, 40 chars): `Rent a design engineer for SaaS • Amoeba`
- Meta description (set, 159 chars): `Rent a design engineer for ambitious B2B software companies. Send a UI backlog and I will ship polished SaaS UI as pull requests your engineering team reviews.`
- Title alternatives (all ≤60, no price):
  - `Rent a design engineer for your SaaS UI • Amoeba` (48)
  - `Hire a design engineer by the week • Amoeba` (43). Uses "hire", the buyer's verb. The weekly unit is published.
  - `Design engineer for hire: SaaS UI as PRs • Amoeba` (49)
- H1 options:
  - `Rent a design engineer for your SaaS UI` (current)
  - `Rent a design engineer` (matches the homepage H2 exactly, weakest software signal)
  - `Rent a design engineer: UI backlog in, pull requests out`
- Rules: no price in the title, meta, or Service schema. Title ≤60. Meta 150–160. One H1.

## Queries

- Target: "rent a design engineer" / "hire a design engineer", in the software sense.
- Secondary (variants from peer research; no volume data exists): "design engineer for hire", "hire a UI design engineer weekly", "front-end design engineer for SaaS", "fractional design engineer" (the framing a SERP competitor uses), "fix vibe-coded app UI" (supporting).
- Disambiguation: generic "hire a design engineer" returns mechanical/CAD staffing firms. Put software words (UI, React, SaaS, pull requests) in the H1 or the first two sentences.

## Intent and reader

- Intent: transactional / late commercial investigation.
- Reader: a SaaS founder or engineering lead at an ambitious B2B software company. The product is live, the UI backlog is real, and engineers review PRs. They arrive from the homepage offer link, a comparison page, or a "design engineer for hire" search.
- What they need in under a minute: what they get, what it costs, whether this is a software person, and how to start.
- Secondary readers: design and product leaders checking skills, and agency leaders looking for overflow help.

## Thesis (one sentence)

Populate a backlog of UI issues and I ship polished UI as pull requests your engineering team reviews, for $500 / week.

(This is the published offer restated. Do not add terms to it.)

## Structure

Tone: match the homepage. Short rhetorical questions that name the pain, a plain promise in the first person, and the price stated flatly. No profanity on this page. Keep prose short; the FAQ carries detail.

### Hero (H1)
- Reuse or tighten the homepage questions ("rough around the edges", "buff out the AI slop").
- One-sentence promise: backlog in, pull requests out, your engineers review.
- Price line `$500 / week`, styled as on the homepage (`type-display`). State it the way the homepage does and nothing more. No "starting at", no totals, no discount, no "test" label unless Bryan wants one.
- Primary CTA above the fold once a contact path exists.

### H2: How it works
- At most three steps: you populate the backlog, I ship PRs, your engineers review and merge.
- Where the backlog lives (GitHub issues, Linear, other): [FACT NEEDED].
- What a good issue looks like: [YOUR EXAMPLE: one real UI issue you worked, anonymized, before/after in a sentence each].
- [YOUR SCREENSHOT: a before/after of a screen, or a PR diff, only with permission].

### H2: Who it's for (and who it isn't)
- For: ambitious B2B software companies with a live product, a UI backlog, and engineers who review PRs.
- Not for: [FACT NEEDED: what you will not take, e.g. greenfield brand work, native mobile, backend-only work, a backlog with no product yet].
- Listen to customers before renting the week. A guessed backlog gets polished just as fast as the right one.
- Peer pattern: Baked's llms.txt has a "less of a fit" section. A short "not for" list builds trust.

### H2: Who you get
- Bryan King, Newport, Kentucky (published on `/info`).
- The homepage expertise list: Product Design, Design Systems, Front-end Engineering, User Research, Usability Testing, Product Management, Software Development Lifecycle.
- [YOUR STORY: one or two lines of background. Public statements you could reuse: "building B2B products in the marketing and advertising space since 2015" (amoebaunlimited.com/about) and "a specialty in taking B2B products from zero to one" (bryanking.net/about). Confirm before putting them on this page.]
- Link `/work` (screenshots, no client names) and `/info`.

### H2: Questions (H3 per question)
- See the FAQ section below. The visible Q&A and the FAQPage JSON-LD must match word for word. Both are generated from the `faqs` array in the file.

### H2: Start
- One clear CTA. Today the only published path is the X profile https://x.com/bryan_king (`TODO(contact)` in the file).
- Say what to send (backlog link, repo): [FACT NEEDED: what you want in a first message].

## Where Bryan's material goes

- [YOUR EXAMPLE: one real backlog issue and what the PR changed]. Goes in How it works.
- [YOUR SCREENSHOT: before/after or a PR diff, with permission]. Goes in How it works.
- [YOUR STORY: background in one or two lines]. Goes in Who you get.
- [YOUR LIST: what you won't take]. Goes in Who it's for.
- Never invent clients, results, turnaround, or volume ("X PRs a week").

## Public opinions that fit (quote + source)

- Hero: "Is your app rough around the edges? Are you looking to buff out the AI slop from your interface? Populate a backlog of issues and I'll ship polished UI as PRs for your engineering team to review." (https://amoeba.design)
- Who it's for: "Your customers will tell you what you want, you just have to listen!!" (https://x.com/bryan_king/status/2103666404251602968). On this page, paraphrase without the "!!".
- Who you get: "Just enough back-end knowledge to architect the system, design sense to build something people actually want, front-end chops to ship a working interface, and product judgment to know what matters." (https://bryanking.net/posts/no-more-hog-butchering)
- Who you get: "I switched to Cursor in June 2024 and haven't looked back" (https://bryanking.net/posts/inside-cursor)
- How it works, only if it matches how you actually run the week: "Rule number 1: limit work-in-progress!" (https://x.com/bryan_king/status/2101788510264910316)
- Use one opinion at most per section. This page sells. The articles argue.

## Competing pages and the angle

- Real SERP competitors for this offer are solo design engineers, not Bryan's peer list (peer research, section 2): designmate.io ("fractional design engineering… starting at $1,500/week"), kons.design ("Design engineer for startups"), sssuperdesign.com (supadesign, $4,399/month, ships design PRs), and konigi.com/answers/fractional-design-build ($14k/month, merged PRs).
- Peers with public prices: melior (sprints from £4k/week), Directed Design ($4,000/month advisory), and Outpace (Marathon from $12k/month). Pages that surface for buyer queries are query-matched service pages with prices and FAQs.
- Peer research recorded who surfaced and their headline offers, not their section structure. [VERIFY: skim designmate.io, kons.design, and sssuperdesign.com before drafting.]
- Angle that beats them, from what is known:
  - Software qualifiers in the H1, to leave the mechanical SERP.
  - The mechanism stated first (backlog in, reviewed PRs out). No peer sells delivery as PRs into the client's repo.
  - A public weekly price where most peers hide pricing.
  - "Ambitious B2B software" instead of the default "startups/founders".
  - Practitioner proof via the knowledge articles once they are published, plus `/work`.
- Do not name any of these companies on the page. `config.json` says peers are not competitors, and no SERP player is approved for naming.

## FAQ

Answerable now from `truth.md`:

| Question | Answer must say | Source |
|---|---|---|
| What do I get? | You populate a backlog of issues. I ship polished UI as PRs for your engineering team to review. | `src/pages/index.astro` offer copy |
| What does it cost? | `$500 / week`. Nothing more. | `src/pages/index.astro` |
| Who reviews the work? | Your engineering team. | offer copy ("for your engineering team to review") |
| Is this software design engineering? | Yes: UI for B2B software, delivered as PRs. Mechanical/CAD design engineering is a different trade. | masthead + offer copy |
| Who is behind it, and where? | Bryan King, Newport, Kentucky. | `src/pages/info/index.astro` |
| What skills come with it? | The homepage expertise list. | `src/pages/index.astro` |
| Can I see the work? | `/work` has product UI screenshots, with no client names or outcomes. | `src/pages/work/index.astro` |
| Who is it for? | Ambitious B2B software companies. | masthead |
| How do I get in touch? | Currently the X profile linked from `/info`. Replace when a contact path exists. | `src/pages/info/index.astro` |

Facts Bryan must supply before more questions go on the page:

- Hours per week, or whether the week is defined by hours at all.
- Minimum engagement (one week? multiple?) and how billing works (prepay, invoice, cancellation).
- Turnaround: when the first PR lands, and what "a week" of output looks like. No SLA language unless you mean it.
- Contact path: email, calendar link, or form. This replaces `TODO(contact)`.
- How a week starts: repo access, tracker, onboarding call or not.
- Stack you work in (React only? Which styling approaches?) and what is out of scope.
- One client at a time, or several?
- Communication: async in GitHub, Slack, calls; time zone.
- IP and NDA terms, if you want them stated.
- Whether Figma or other design files are part of the deliverable.
- Whether "test pricing" should be labeled on the page.

Cleanup on the live placeholder:

- "What do you hand over?" describes the Figma/Cursor loop. That comes from an X post, not from `truth.md`. Keep it only if you want it as an offer term.
- Done: the "I wrote up…" paragraph and the FAQ links to the comparison pages and knowledge articles were removed while those pages are stubs. Add links back as each one publishes.

## Internal links

- From: the homepage offer heading (already links here), `/knowledge` "Also" list, the checklist, and both comparison pages.
- To: `/work`, `/info`, `/tools/ui-polish-checklist` ("turn the misses into issues"), `/compare/rent-a-design-engineer-vs-hiring`, `/compare/design-engineer-vs-product-designer-vs-frontend-engineer`, `/knowledge/more-than-microinteractions`, `/knowledge/fix-ai-slop-ui`, and `/knowledge`. Links to stubs are fine, but don't describe a stub as written.

## Schema (already in the file)

- Service: name, description, provider (Organization + Person). No Offer and no price.
- FAQPage: built from the same `faqs` array as the visible list. Visible answers with links are hand-coded branches in the template. Keep the schema text identical to what renders.
- BreadcrumbList: Home → Rent a design engineer.

## AEO

- Put the direct answer in the first two sentences: what it is, the mechanism, who reviews, and the price.
- Skeleton (fill in your words): "[Rent a design engineer] is [Amoeba's weekly offer]: you [populate a backlog of UI issues], and I [ship polished UI as pull requests] for [your engineering team] to review. [Price: $500 / week.]"
- Use the exact phrase "rent a design engineer" in the H1 or the first sentence, and "design engineer" next to a software word (UI, React, SaaS).
- A future `llms.txt` can quote this answer verbatim, so keep it self-contained.

## Length

500–900 visible words, including the FAQ. Scannable. Short paragraphs.

## Pitfalls

- Inventing terms: hours, minimums, turnaround, guarantees, refunds, SLAs, "unlimited requests".
- Repeating the price outside the hero and the cost answer, or putting it in the title, meta, or Service schema.
- Profanity (the voice guide keeps it off the offer page).
- The corporate "we" or agency puffery ("seamless", "elevate", "unlock", "world-class").
- Naming peers or SERP players.
- Client names, logos, or outcomes without permission.
- AI speed hype ("10x"). His public cap is "a 30% boost in programmer productivity, at best."
- Em dashes.
- Claiming a comparison or article exists while it is still a stub.

## Publishing checklist

1. Rewrite the copy in `src/pages/rent-a-design-engineer.astro`. Keep one H1.
2. Edit the `faqs` array, and the hand-coded linked answers, so the visible text and FAQPage match.
3. Replace `TODO(contact)` and the X CTA once a path exists.
4. `bun run build`. Confirm the page is in `dist/sitemap-0.xml`.
5. Update the word count in `content-ledger.md` and add a `run-log.md` entry.
