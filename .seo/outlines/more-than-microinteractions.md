# Outline: There's more to design engineering than microinteractions ("what is a design engineer")

- URL: https://amoeba.design/knowledge/more-than-microinteractions (keep this URL)
- File: `src/content/knowledge/more-than-microinteractions.md`, rendered by `src/pages/knowledge/[id].astro`
- Status: "Coming soon" stub, `noindex: true`, out of the sitemap. Title, meta, and related links are in the frontmatter and body. The template emits Article + BreadcrumbList JSON-LD and a visible date once `noindex: false` and `published` are set.

## Title, H1, meta

- Document title (set, 52 chars): `Design engineering beyond microinteractions • Amoeba`. A map in `[id].astro` (`documentTitles`) shortens the frontmatter title for the `<title>`.
- H1 (set, frontmatter `title`): `There's more to design engineering than microinteractions`
- Meta description (set, frontmatter `description`, 159 chars): `A design engineer ships the interface, not a picture of it. What the role owns in B2B software, how it differs from design and front-end, and when to hire one.`
- Title alternatives, aimed at the target query:
  - `What is a design engineer? • Amoeba` (35). Recommended for the query. Change it in the `documentTitles` map, not the frontmatter, so the cheeky H1 stays.
  - `What a design engineer actually does • Amoeba` (45)
- Keep the H1 in his knowledge-title style (casual, slightly contrarian). Put the literal question "What is a design engineer?" as the first sentence or the first H2, so the query is matched on the page.
- The frontmatter `description` also prints on `/knowledge`. Keep it readable as a dek.

## Queries

- Target: "what is a design engineer".
- Secondary (from peer research; no volume data): "what does a design engineer do", "when should a startup hire a design engineer", "working with a design engineer", "design engineer meaning in software" (versus mechanical).
- Leave to other pages: the three-way "vs" comparison (`/compare/design-engineer-vs-product-designer-vs-frontend-engineer`) and renting versus hiring.

## Intent and reader

- Intent: informational / definitional. This is the main AEO target.
- Readers: founders and engineering/product leaders who keep hearing the title; designers and engineers wondering whether it fits them; recruiters writing reqs.
- What they need: a one-paragraph definition they can repeat, then enough texture to trust it.

## Thesis (from his public statements)

A design engineer owns the whole loop, from deciding how an interface should behave to shipping it as code, and most of the job is systems work, not microinteractions.

Grounded in the "just enough back-end… design sense… front-end chops… product judgment" quote, the RFC/CI joke, and the knowledge title itself.

## Structure

Mode: knowledge article. Open on a quote, a link, or an anecdote. Argue. Close on a one-liner. Few subheads (five or six H2s at most), short paragraphs.

### Direct answer (first paragraph, no heading)
- One to three sentences: what a design engineer is, the four-part skill combination, and the deliverable (shipped UI, not a picture of it).
- Then the hook. [YOUR EXAMPLE: a portfolio, a job post, or a tweet that treated design engineering as animation polish.]

### H2: The microinteraction myth
- Why people picture the spinner and the hover state.
- Credit the craft, then put it in its place: it's the last slice of the job.
- B2B reality: workflows that take ten clicks. Use the "operate on vibes" quote.

### H2: What a design engineer owns
- The four-part combination, quoted or paraphrased from "No More Hog Butchering".
- Why the combination matters: missing one piece breaks the loop. Use the "deficient in design" quote.
- Optional H3 per part (design sense / front-end chops / enough backend / product judgment), one or two sentences each. [YOUR EXAMPLE for at least one part.]

### H2: What the work looks like
- The loop: building inside the app, pushing states to a Figma page, tweaking, bringing changes back. Use the Cursor/Figma quote.
- The deliverable is a reviewed PR.
- [YOUR SCREENSHOT: a Figma page of app states generated from code, if shareable.]

### H2: The systems half
- RFCs, design-system enforcement, CI checks. Use the RFC joke.
- Agents and overrides: one paragraph with the 1,200-instance shadcn/lint story, then link the slop article and (later) `/knowledge/shadcn-lint`.
- Documentation agents can read (Storybook). Link `/knowledge/storybook-for-agents` once published.
- Editing as a skill. Use the editor quote.

### H2: Use what the browser gives you
- His CSS-purist view, in short: native elements, one readable stylesheet, no Tailwind soup.
- [YOUR STORY: learning CSS through CSS-Tricks, as he has said publicly.]
- Link `/knowledge/css-is-nothing-to-fear`, `/knowledge/shake-what-the-browser-gives-ya`, and `/knowledge/clean-up-messy-tailwind` once those are published.

### H2: Design engineering with AI
- Heavy user, skeptical of hype. Use the pairing-partners quote and the 30% cap.
- Vibe code is legacy code. Link his post.
- The "surgical team" idea: the right person plus AI ships a lot. Most people aren't that person.

### H2: When to hire one (short)
- Two or three sentences on the gap between a UI decision and a merged PR.
- Link the roles comparison for the full decision, and the offer page.
- Close with a one-liner. [YOUR LINE]

## Where Bryan's material goes

- [YOUR EXAMPLE: design engineering mistaken for animation]. Intro.
- [YOUR EXAMPLE: one moment where design sense and engineering had to meet in the same afternoon]. What a design engineer owns.
- [YOUR SCREENSHOT: app states on a Figma page]. What the work looks like.
- [YOUR NUMBERS: only the shadcn/lint figures already public ("1,200 instances in a few days", "violations fail CI") unless you add more]. The systems half.
- [YOUR STORY: CSS-Tricks and learning the craft one blog post at a time]. Use what the browser gives you.

## Public opinions that fit (quote + source)

- Microinteraction myth: "Business tools, ironically, get to operate on vibes much more than any data-driven leader would care to admit. It is painfully evident when using many top B2B SaaS tools, where workflows are erratic and it takes 10 clicks to complete one task." (https://www.amoebaunlimited.com/2026/07/23/mobile-first-mafia/)
- What it owns: "Just enough back-end knowledge to architect the system, design sense to build something people actually want, front-end chops to ship a working interface, and product judgment to know what matters." (https://bryanking.net/posts/no-more-hog-butchering)
- What it owns: "If I were deficient in design but world-class at backend, it wouldn't work. [...] If I were purely a designer with no technical chops, I'd never get past the implementation details." (same post)
- The work: "I usually build inside Cursor (and usually inside the app). I will ask Cursor to output the page(s) and any relevant states on a particular Figma page. [...] Make tweaks then have Cursor pick up changes." (https://x.com/bryan_king/status/2108681089896092015)
- Systems half: "are you really a design engineer if you arent writing 1,500 word RFCs that explain how you're going to overhaul to design system and add strict checks to the CI pipeline?" (https://x.com/bryan_king/status/2100686542352089427)
- Systems half: "I just added shadcn/lint to ID all the overrides in our app, and then set an agent loose to fix them. Agent fixed and I manually reviewed 1,200 instances in a few days. [...] Right now violations fail CI" (https://x.com/bryan_king/status/2108570981723783243)
- Systems half: "Also: edit. Learn to be an editor, which especially helpful when training agents to write more readable outputs." (https://x.com/bryan_king/status/2108519099072467339)
- Browser: "it's time to use what the browser gives us!!" (https://x.com/bryan_king/status/2097842392455880962)
- Browser: "I owe my career to Chris Coyier and the team that ran CSS Tricks." (https://www.amoebaunlimited.com/2026/08/05/you-are-what-you-eat/)
- Browser: "I'm a CSS purist, completely unable to use CSS-in-JS tools like this. [...] Mine is just one plain old css file. No builds or anything fancy." (https://x.com/bryan_king/status/2098014494622404901)
- AI: "LLMs will be great pairing partners, code reviewers, and quality testers. But I don't think it's sustainable to rely on machines to write and wrangle all the code for us." (https://x.com/bryan_king/status/2092721465904738702)
- AI: "LLMs will provide a 30% boost in programmer productivity, at best." (https://x.com/bryan_king/status/2094824455067377899)
- AI: "When you vibe code, you are incurring tech debt as fast as the LLM can spit it out. Which is why vibe coding is perfect for prototypes and throwaway projects: It's only legacy code if you have to maintain it!" (https://bryanking.net/posts/vibe-code-is-legacy-code)
- AI: "Not for everyone—most engineers still can't ship alone. But for people with the right combination of skills, judgment, and taste, the new surgical team is you, your AI copilot, and a small support crew keeping you honest." (https://bryanking.net/posts/no-more-hog-butchering). Don't carry the em dash into new prose.

## Competing pages and the angle

- Peer research (section 2, "what is a design engineer / when to hire") found recruiter.daily.dev, the Cadence blog, paraform.com, fekryaiad.com, and devinpickering.com. Recruiter and blog content answers this, not practitioner studios. The research calls this an opening, and expects a studio answer to win AI citations.
- The research did not record those pages' structure. [VERIFY: skim the top two or three for what they define and what they miss.]
- Angle:
  - A practitioner definition with concrete artifacts (PRs, RFCs, lint rules, CI) instead of a list of traits.
  - The contrarian hook (it's not microinteractions) matches his knowledge-title style and stands out from recruiter copy.
  - Grounded in B2B software, with a real number (1,200 overrides).
  - Clear software disambiguation.

## FAQ (optional; add FAQPage to the template only if the Q&A is visible)

- "Is a design engineer a designer or an engineer?" Both, by his four-part definition.
- "Does a design engineer need backend skills?" "Just enough back-end knowledge to architect the system."
- "Is design engineering the same as front-end development?" No. It adds design sense and product judgment. Link the comparison.
- "Is a software design engineer the same as a mechanical design engineer?" No, a different trade. This one-liner handles the SERP ambiguity.

## Internal links

- Must link: `/compare/design-engineer-vs-product-designer-vs-frontend-engineer`, `/rent-a-design-engineer`, `/knowledge/fix-ai-slop-ui`.
- Nice to have: `/compare/rent-a-design-engineer-vs-hiring`, `/tools/ui-polish-checklist`, `/work`, `/knowledge`, `/`.
- Later, once published: `/knowledge/shadcn-lint`, `/knowledge/storybook-for-agents`, `/knowledge/css-is-nothing-to-fear`, `/knowledge/shake-what-the-browser-gives-ya`, `/knowledge/clean-up-messy-tailwind`, `/knowledge/figma-to-code`.
- External (his own posts): https://bryanking.net/posts/no-more-hog-butchering and https://bryanking.net/posts/vibe-code-is-legacy-code.

## AEO

- The first 40–60 words must answer "what is a design engineer" on their own, with no "in this article" lead-in.
- Skeleton: "A design engineer is [a person who decides how a software interface should behave and ships it as code]. The job combines [design sense, front-end chops, enough backend, and product judgment]. [One sentence on the deliverable or the systems work.]"
- Use the words "design engineer", "software", and "interface" in that paragraph.
- Use plain, descriptive H2s ("What a design engineer owns"), even with a cheeky H1.

## Length

1,400–1,800 words.

## Pitfalls

- Cannibalizing the comparison page: keep the role-vs-role detail there.
- Presenting the definition as universal. Hedge where honest ("the way I use the title").
- Trait lists with no artifacts.
- AI hype, or AI-bashing. He's a heavy, pragmatic user.
- More than one or two analogies.
- Em dashes, banned phrases, a tidy three-part ending.
- Inventing numbers beyond the public shadcn/lint figures.

## Publishing checklist

1. Replace the body in `src/content/knowledge/more-than-microinteractions.md`. Delete the stub link list, or fold those links into the prose.
2. Frontmatter: `noindex: false`, `published: "YYYY-MM-DD"` (quoted string; the schema requires it).
3. Optional: change `documentTitles` in `src/pages/knowledge/[id].astro` to `What is a design engineer?`.
4. Re-check the description (150–160 chars, no price). It also prints on `/knowledge`.
5. `bun run build`. Check that the sitemap includes the URL and that Article JSON-LD appears.
6. Update `content-ledger.md` and `run-log.md`.
