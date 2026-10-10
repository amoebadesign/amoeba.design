# Outline: Fix the AI slop in your UI

- URL: https://amoeba.design/knowledge/fix-ai-slop-ui
- File: `src/content/knowledge/fix-ai-slop-ui.md`, rendered by `src/pages/knowledge/[id].astro`
- Status: "Coming soon" stub, `noindex: true`, out of the sitemap. Title, meta, and related links are in place. The template emits Article + BreadcrumbList JSON-LD and a visible date once `noindex: false` and `published` are set.

## Title, H1, meta

- Title (set, 35 chars): `Fix the AI slop in your UI • Amoeba`
- H1 (set): `Fix the AI slop in your UI`
- Meta description (set, 159 chars): `AI-generated UI drifts off the design system one override at a time. How I read the code, remove the slop, and put checks in CI so the next screen stays clean.`
- Title alternatives:
  - `How to fix AI slop in your product UI • Amoeba` (46). "How to" matches the query shape.
  - `Cleaning up AI-generated UI • Amoeba` (36). Plainer wording for people who don't say "slop".
- If the document title changes to something other than the H1, add it to `documentTitles` in `[id].astro`.

## Queries

- Target: "fix AI slop UI".
- Secondary (from peer research; no volume data): "fix vibe-coded UI", "clean up AI-generated UI", "AI slop UI", "vibe-coded app to production", "design system overrides".
- Supporting, for a later article: "shadcn lint" (that's `/knowledge/shadcn-lint`). Mention it here and link once published. Don't write the full tutorial here.

## Intent and reader

- Intent: informational how-to with a commercial undertone. The reader has the problem now.
- Reader: a founder or engineering lead whose team (or who personally) shipped UI generated with Cursor or similar tools. It looks fine in screenshots and feels wrong in use. Often on shadcn/ui and Tailwind.
- What they need: a definition of the mess they're looking at, a repeatable cleanup pass, and a way to stop it coming back.

## Thesis (from his public statements)

AI slop in a UI is design-system drift that nobody read. Fix it by reading the code, removing the overrides, and making the build reject the next one.

Grounded in his overrides quote, the 8-months-of-not-reading quote, and the shadcn/lint + CI story.

## Structure

Mode: knowledge article with a how-to spine. The voice guide says lists are rare, but numbered step H2s suit a how-to and AEO. Use them for the steps, and keep the rest in prose.

### Intro (no heading)
- Hook: his own story of not reading the front-end code for months, then finding the overrides. [YOUR STORY: what you saw when you finally looked; only what's true.]
- The direct answer in two or three sentences (see AEO).
- Tie to the homepage line ("buff out the AI slop").

### H2: What slop actually is
- Overridden design-system components. Use the "overridden default component styles" quote.
- Code nobody read; screenshots as review. Use the "8 months" quote.
- Prototype turned product: vibe code as legacy code.
- Bolted-on chat that doesn't change the task. Use the incumbents quote.
- Tailwind class soup. Use his Tailwind line, and link `/knowledge/clean-up-messy-tailwind` once published.
- Keep each a short paragraph, not a bullet wall.

### H2: Step 1: Click the task and read the code
- Pick one workflow a customer runs weekly. Count clicks. Use the "10 clicks" quote.
- Check the states screenshots skip: empty, loading, error, long text.
- Open the files behind the screen. Reading beats looking.
- [YOUR SCREENSHOT: an annotated screen with overrides or broken states marked, anonymized.]

### H2: Step 2: Find every override
- A deterministic tool finds them. His tool is shadcn/lint. Any equivalent check works.
- The 1,200-instance story. [YOUR NUMBERS: only add figures you actually have, e.g. accidental vs intentional overrides.]

### H2: Step 3: Let the agent fix, review by hand
- The agent as pairing partner; he still reviews every change. Use the pairing-partner quote.
- Editing as the skill that makes the next generation cleaner. Use the editor quote.
- Promote intentional overrides into the component. Delete the accidental ones.

### H2: Step 4: Make CI fail
- "Right now violations fail CI". Taste doesn't survive the next agent session without enforcement.
- Give agents docs they can read (Storybook). Link `/knowledge/storybook-for-agents` once published.

### H2: Use what the browser gives you
- Native elements over custom widgets; fewer places for an agent to invent a pattern. Use the browser quote.
- One type scale, one spacing scale.

### H2: What not to do
- Don't reskin the app to "fix" it. Enforce first.
- Don't build a cleanup roadmap. Use the roadmaps quote.
- Don't expect a software factory to do this for you. Use the factory quote.
- Close with a one-liner, then the CTA: run the checklist, and the offer if the backlog is long. [YOUR LINE]

## Where Bryan's material goes

- [YOUR STORY: the months of not reading the code, and what you found]. Intro.
- [YOUR SCREENSHOT: an annotated slop screen, anonymized]. Step 1.
- [YOUR NUMBERS: beyond "1,200 instances in a few days" only if you have them]. Step 2.
- [YOUR EXAMPLE: one override that was intentional and got promoted into the component]. Step 3.
- [YOUR EXAMPLE: a bolted-on chat or AI feature that didn't change the task; no company names unless public and fair]. What slop is.

## Public opinions that fit (quote + source)

- Intro / what slop is: "agents have overridden default component styles more often than they used them, so you're S.O.L." (https://x.com/bryan_king/status/2103534162644701673)
- Intro: "all of this was necessary because we spent the last 8 months not reading the code, and just verifying that the front-end looked good." (same thread)
- Intro: "now I have shadcn/lint plugged in, safeguarding my front-end from agent slop. good riddance!" (same thread)
- What slop is: "When you vibe code, you are incurring tech debt as fast as the LLM can spit it out. Which is why vibe coding is perfect for prototypes and throwaway projects: It's only legacy code if you have to maintain it!" (https://bryanking.net/posts/vibe-code-is-legacy-code)
- What slop is: "Sadly, incumbents just bolt on chat UI and deliver features that they prototype with Claude or ChatGPT. They don't have much capacity for innovation." (https://x.com/bryan_king/status/2100238660041867519)
- What slop is: "Do you hate stringing together tailwind classes when building layouts?" (https://x.com/bryan_king/status/2097859260306600422)
- What slop is: "The perceived bottleneck of writing code was actually a good thing because it allowed the work to "breathe"." (https://x.com/bryan_king/status/2092726646700642746)
- Step 1: "Business tools, ironically, get to operate on vibes much more than any data-driven leader would care to admit. It is painfully evident when using many top B2B SaaS tools, where workflows are erratic and it takes 10 clicks to complete one task." (https://www.amoebaunlimited.com/2026/07/23/mobile-first-mafia/)
- Steps 2 and 4: "I just added shadcn/lint to ID all the overrides in our app, and then set an agent loose to fix them. Agent fixed and I manually reviewed 1,200 instances in a few days. [...] Right now violations fail CI" (https://x.com/bryan_king/status/2108570981723783243)
- Step 3: "LLMs will be great pairing partners, code reviewers, and quality testers. But I don't think it's sustainable to rely on machines to write and wrangle all the code for us." (https://x.com/bryan_king/status/2092721465904738702)
- Step 3: "Also: edit. Learn to be an editor, which especially helpful when training agents to write more readable outputs." (https://x.com/bryan_king/status/2108519099072467339)
- Browser: "it's time to use what the browser gives us!!" (https://x.com/bryan_king/status/2097842392455880962)
- What not to do: "Friends don't let friends build roadmaps" (https://x.com/bryan_king/status/2105697165372977170)
- What not to do: "The software factory is just another high-modernist scheme to wrangle illegible SDLC workflows that will end in disaster." (https://x.com/bryan_king/status/2096601490488004789)
- Tone guard: "LLMs will provide a 30% boost in programmer productivity, at best." (https://x.com/bryan_king/status/2094824455067377899)

## Competing pages and the angle

- Peer research (section 2, "fix vibe-coded app UI / AI slop") found designpixil.com (two posts), mowgli.ai, a GitHub skill, and a standoutmcp.io checklist. The research calls this SERP beatable.
- Demand signals in the peer set: Southleft's "AI prototype to production" service and Thomas Meijer's "you vibe coded an MVP" persona copy.
- The research did not record those pages' content. [VERIFY: skim designpixil's two posts and the standoutmcp checklist so this page covers what they miss.]
- Angle:
  - A practitioner with a real, public number (1,200 overrides reviewed, CI now failing on violations).
  - Deterministic enforcement as the fix, not a vibe-based "make it look better".
  - Reading the code as the first step.
  - A free, ungated checklist (`/tools/ui-polish-checklist`) as the companion. Directed Design gates its checklists, so they can't rank.

## FAQ (optional; FAQPage only if visible)

- "What is AI slop in a UI?" One sentence from the thesis.
- "Can AI fix its own slop?" Yes, with a human reviewing. His stated workflow.
- "Do I need shadcn/lint?" Not necessarily. Any deterministic check that fails CI does the job.
- "Should we stop using AI for UI?" No. Pairing partner, 30% at best, read the code.

## Internal links

- Must link: `/tools/ui-polish-checklist` (primary companion), `/rent-a-design-engineer` (if the backlog is long), `/knowledge/more-than-microinteractions`.
- Nice to have: `/work`, `/knowledge`, `/`.
- Later, once published: `/knowledge/shadcn-lint`, `/knowledge/storybook-for-agents`, `/knowledge/clean-up-messy-tailwind`, `/knowledge/shake-what-the-browser-gives-ya`.
- External: https://bryanking.net/posts/vibe-code-is-legacy-code, and the official shadcn/lint docs [VERIFY URL].
- Already linking here: `/knowledge` and the definition stub. The checklist and offer page links were removed while this is a stub.

## AEO

- Put the direct answer under the H1: what AI slop in a UI is, and the fix in one sentence.
- Skeleton: "AI slop in a UI is [design-system drift from generated code nobody read: overrides, one-off styles, skipped states]. Fix it by [reading the code], [removing the overrides], and [making CI fail on the next one]."
- Numbered step H2s ("Step 1: …") give engines a clean procedure to extract.

## Length

1,400–1,800 words.

## Pitfalls

- An anti-AI tone. He's a daily, pragmatic user. The enemy is unread output.
- "10x" or speed hype.
- Copying the checklist items verbatim. Link the tool instead.
- Turning it into the full shadcn/lint tutorial (separate article).
- Naming companies as bad examples without a public, fair basis.
- Inventing numbers beyond the public shadcn/lint figures.
- Profanity beyond a mild word; em dashes; banned phrases.

## Publishing checklist

1. Replace the body in `src/content/knowledge/fix-ai-slop-ui.md`. Fold the stub links into the prose.
2. Frontmatter: `noindex: false`, `published: "YYYY-MM-DD"` (quoted).
3. Re-check the description (150–160 chars). It prints on `/knowledge` too.
4. `bun run build`. Check the sitemap and Article JSON-LD.
5. Add links back from `/tools/ui-polish-checklist` and `/rent-a-design-engineer`. Both were removed while this was a stub.
6. Update `content-ledger.md` and `run-log.md`.
