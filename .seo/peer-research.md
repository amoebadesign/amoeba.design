# Amoeba: SEO/AEO peer research

Researched Sat Oct 10, 2026 (ET). Method: raw HTML of each homepage plus `/robots.txt`, `/llms.txt`, `/sitemap.xml` (and `/sitemap-index.xml` when robots pointed there), all fetched with curl; a few subpages; 15 WebSearch queries. No browser was used.
Raw files: `/workspace/seo/raw/` (homepage HTML, robots, llms, sitemaps, extracted text).

**Caveats**
- The WebSearch tool returns about 5 summarized results from an external index. It is **not a Google SERP or a rank tracker**: no location, no positions beyond the top few, no volumes. Treat "who ranks" as directional only.
- "Not verified" means I could not confirm it from the site. It does not mean the thing is absent.
- Content volume = URL count in the sitemap, split by path, unless noted otherwise.

---

## 1. Per-peer table

| Peer | Homepage `<title>` | Meta description | H1 | One-line positioning | Target | Services / offers | Public pricing / engagement model |
|---|---|---|---|---|---|---|---|
| **Halaska** (halaska.com) | Halaska / Design intelligence studio for startups | "Brand, product, website and marketing, designed as one thing. We work in sprints and set up Halaska OS, so your team and AI tools keep it consistent." | Design intelligence for startups | Solo-led studio (ex-Google staff designer). Brand, product, and web as one system, plus "Halaska OS", an AI brand/design system that works in Claude and Cursor | Startup founders in AI, crypto, and fintech ("web3 founders who've raised $400M+") | AI strategy & systems, Product, Brand & story, Web & launch, plus a crypto services page | Sprints. No public prices (none in HTML or schema) |
| **Baseline Design** (baselinedesign.com) | Design System Strategy, Implementation & Training for Teams – Baseline Design | "Baseline helps teams build better design systems with strategy, implementation, and training across Figma, design tokens, governance, documentation…" | Systems, strategy, and training for teams building what comes next. | Design-system consultancy and Figma training (founder Joey Banks: ex-Twitter/Webflow DS, ex-Figma advocate; official Figma Partner) | Design/product teams and DS teams, mid-size to enterprise (The Athletic testimonial) | Consulting (audits, architecture, tokens, docs, governance, AI + code), strategy, training (teams, cohorts, MCP/AI workflows, Figma for leaders) | No public prices found. Consulting plus training products |
| **PERMANENT** (permanent.is) | PERMANENT | "We embed designers into companies, fractionally. A studio for design culture." | Design culture, hands-on. | Fractional embedded design team ("not a project, not a sprint") | Venture-backed startup founders (Lovable, Legora, Harmonic, Glide, Default…) | Embedded software, brand, and collateral designers; help hiring founding designers; internship program | Fractional, set in days per week within a total budget. No prices |
| **Southleft** (southleft.com) | Southleft — AI-Powered Design Systems | "Design systems consulting, engineering, and AI integration — from the team behind Figma Console MCP and Story UI." | AI-powered design systems. Built by the people building the tools. | Design-system engineering plus AI tooling (MCP) studio, founded 2012, partnered with Baseline | Enterprise product orgs (Caterpillar, Novartis, UPS, NASDAQ) and agencies | AI + design systems (AI-readiness audits, MCP integrations), DS engineering, workshops/training (course with Brad Frost), team augmentation, **AI prototype to production** (vibe-coded apps made production-ready) | Augmentation is retainer-based ("capacity that fits your planning cycle"). No prices |
| **Thomas Meijer** (thomasmeijer.design) | Thomas Meijer: Product Designer for Founders | "…senior product designer based in the Netherlands. I partner with founders to design products that drive traction and hold up under VC scrutiny… Top 1% on Contra." | Product design for founders who ship. | Solo senior product designer for founders | Pre-seed/seed founders, technical founders, "you vibe coded an MVP" | Design Sprint (one core flow), Full Product Design, Design Partner (ongoing, 3-month minimum) | Tiered packages. No prices on the page |
| **Directed Design** (directed.design) | Directed Design | "Directed Design helps growth-stage startups create product experiences customers love and design systems their teams can use…" | The design expertise your team needs. A product your customers will love. | Independent design partner (Sam) for growth-stage, engineering-led startups | Growth-stage startups, engineering-led teams, CTOs | Full product design (onboarding, navigation, custom React design systems) and design advisory (office hours, coaching) | **Design advisory $4,000/month** (public). Full design: fixed-fee strategy, fixed-fee design & build, monthly support retainer; engineering often hourly |
| **Turbo** (turbodesign.co) | Turbo – Product design studio for startups based in Brooklyn | "We accelerate ground-breaking startups with product design. The product design agency for growth." | "Users have higher expectations than ever" (repeated H1s; no positioning H1) | Embedded product design for AI-native startups | Venture-backed startups | Product design team (concepts to hi-fi, UX) | Not verified / no prices |
| **Little Plains** (littleplains.com) | Little Plains \| About *(homepage title says "About")* | "We collaborate with founders and operators to build, launch, and scale early-stage startups. Digital design studio in New York." | *(no H1 in HTML)* | Multidisciplinary NYC studio: brand, product, technology, "agentic brand systems" | Early-stage startup leaders | Brand systems, motion, software/product, AI agents | Project-based (weekly sprints) or monthly retainer. No prices |
| **Outpace Studios** (outpacestudios.com) | Design & Development Studio for VC-Backed Startups - Outpace Studios | "Senior-led design and development studio for Y Combinator, Techstars, and VC-backed startups…" | Our clients raised $200M+. Yours could be next. | Senior design and dev studio for funded startups (AI, SaaS, Web3) | YC/Techstars/VC-backed, Seed to Series C | Brand, product/UX, design systems, AI interfaces, full-stack dev | **Public: Marathon from $12k/month, Sprint from $16k (2–4 weeks)**, plus an "Ultra" plan page. llms.txt adds Brand from $6,000 |
| **melior** (melior.design) | melior.design | "Agile product design solution for founders… fast product design, rapid MVP development…" | *(no H1 in HTML)* | One-person London product design studio, one client at a time | Early-stage founders | Week-long product design sprints ("most products take 2–3 sprints") | **Public: sprints from £4k/week**, book the weeks you need |
| **Baked** (baked.design) | Baked Design Studio · Design and build studio for startups | "Brand, product, websites, full-stack web apps and launch videos for startups. Send a request in Slack, work is ready to review within a day." | Baked Design Studio | Async design-and-build subscription studio run in Slack | Startups, especially YC (10 YC clients claimed) | Brand, product design, websites, full-stack web apps, launch videos, decks | Flat monthly subscription, no contracts. **Prices not listed** (set on a call). 10% YC discount, stacking referral discounts |
| *Amoeba (amoeba.design), for reference* | Design engineering for ambitious B2B software • Amoeba | **none** (no meta description on home, /knowledge, or the articles checked) | Amoeba is a design engineering studio for ambitious B2B software companies. | Design engineering studio | B2B software | "Rent a design engineer": polished UI shipped as PRs from your backlog | $500/week (test) |

### Site sections, content volume, and SEO signals

| Peer | Platform | Sitemap size | Sections (blog / case studies / compare / tools / glossary) | Schema (JSON-LD on homepage) | llms.txt | robots.txt | Other notable signals |
|---|---|---|---|---|---|---|---|
| Halaska | Framer | 32 URLs | Notes blog: **2 posts**. Case studies: **~18**. 5 service pages. No compare, no glossary. Footer links to "Tools", "UI by Halaska", and "Dash" (not inspected) | Organization, ProfessionalService, Service, OfferCatalog/Offer, **FAQPage**, Person, WebSite | 404 | Allow all, plus sitemap | Outcome-led case titles ("…that raised $9M") |
| Baseline | Framer | 43 URLs | Posts: **30** (Figma how-tos, variables, naming, MCP, monthly "Between the lines" newsletter). Training: 7 pages. Free resource: `/figma-shortcuts`. No case studies, no compare | none found | 404 | Allow all | Strongest Figma-education content in the set. Newsletter |
| PERMANENT | Astro (sitemap-index pattern) | 10 URLs | News: 3. `/companies` client list. `/intro` "letter to founders". No blog, no case studies | none | 404 (`/sitemap.xml` 404s too; sitemap is at `/sitemap-index.xml`) | Allow all | Minimal SEO footprint. Brand and referral driven |
| Southleft | Astro | **109 URLs** | Insights: **~60** across AI, design-systems, development, business. Projects: ~25. Services: 4, plus `/ai-design-systems` and a long-form guide `/figma-design-systems`. **Tools hub** (`/tools`, Altitude), **`/scorecard`** (AI-ready DS self-assessment), `/quiz`, `/speaking`. A "vs" post: "Figma MCP vs Figma Console MCP" | Organization, Person | **Yes, rich** (services, OSS tools, company). Also publishes `/tokens.json` (DTCG) and an AGENTS.md | Allow all | Open-source tools (figma-console-mcp, story-ui, figmalint) act as link and brand magnets. Most AEO-mature peer besides Baked |
| Thomas Meijer | Framer | **1 URL** (single page) | None. Services are sections on the homepage | Organization, Person, Service, OfferCatalog/Offer, WebPage, WebSite | 404 | Allow all | Persona-based "Is this you?" copy ("You vibe coded an MVP…") |
| Directed Design | Astro | **No sitemap** (`/sitemap.xml` and `/llms.txt` return the homepage HTML with a 200: soft-200 fallback) | `/resources`: **email-gated** founder-fit assessment, design-team health scorecard, DS step-by-step, designer hiring checklist, workshop agendas, book previews, side tools (Density UI, Spooky). Clients page. Services (advisory, full design). No blog | none | effectively none (soft-200 HTML) | Disallow `/components/` only | Meta title on homepage is just the brand. Gated resources are lead magnets, not indexable content |
| Turbo | Framer | 5 URLs (`/`, `/home-2`, `/ai-native`, `/vsl`, `/thank-you`) | None indexable. `/ai-native` reuses the homepage title and meta | none | 404 | Allow all | Weak: duplicate titles, thank-you page in sitemap, H1s not used for positioning |
| Little Plains | custom (Sanity-like `/studio/` disallowed) | 50 URLs | Projects: **27**. Writings: **9** (agentic brand systems, knowledge products, guide to raising). Talent/careers: 9 | none | 404 (soft-HTML) | Allow all, disallow `/api/`, `/search`, `/studio/` | Homepage title "Little Plains \| About" and no H1 are clear on-page misses |
| Outpace | Next.js | 9 URLs | Work, plans (sprint, marathon, ultra), intro, next-steps. No blog | Organization, ProfessionalService, Service, OfferCatalog, **FAQPage**, **AggregateRating/Review (self-serving)**, City | **Yes** (`llms.txt` with services, ideal clients, prices), plus `/api/llm` | **Explicit AI-crawler allowlist** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot…) | Most aggressive AEO setup. Note: Google does not show stars for self-serving Organization reviews, so that markup is mostly decorative |
| melior | Framer | 6 URLs (includes `/404` and `/archive/old-home*`) | None | none | 404 | Allow all | Sitemap hygiene issues. Effectively a one-page site |
| Baked | custom (Markdown twin of each page) | 61 URLs | Work: **33 case studies**. Services: 5 (one page each). **Compare: 3** (`/compare/baked-vs-hiring-a-designer`, `-vs-design-agency`, `-vs-freelancers`). FAQ (pricing, process, speed). **Free tools/resources:** `/interfaces` (free UI components with code + AI install prompt), `/sizes` (social image sizes with Figma frames), `/fun`. `/growth` (build-in-public), `/changelog`, `/apps`, `/yc` (YC pricing page) | Organization, Service, OfferCatalog/Offer, ContactPoint, Person, WebPage, WebSite | **Yes, very detailed** ("When to use Baked", "How agents should engage", plans, client list). Every page available as `.md` or via `Accept: text/markdown`. `/.well-known/ard.json` | Allow, disallow admin/drafts | **Best SEO/AEO template in the peer set**: service pages, compare pages, FAQ, free tools, machine-readable everything |
| *Amoeba* | Astro + Vercel | **4 URLs** (`/`, `/info`, `/knowledge`, `/work`). **The 7 `/knowledge/*` articles are missing from the sitemap** even though they return 200 | Knowledge: 7 stubs (about 42–46 words of visible text each) | none | 404 | Allow all, sitemap-index | `/info` title differs ("…for growth-stage B2B software companies"). No meta descriptions |

Knowledge stubs found on amoeba.design/knowledge: `/knowledge/clean-up-messy-tailwind`, `/css-is-nothing-to-fear`, `/figma-to-code`, `/more-than-microinteractions`, `/shadcn-lint`, `/shake-what-the-browser-gives-ya`, `/storybook-for-agents`.

### Peer notes (short)
- **Halaska**: sells an AI-era design system ("Halaska OS", "works in Claude and Cursor") as the product wrapper. Case-study titles lead with funding and ARR outcomes. FAQPage schema on the homepage. Almost no editorial content.
- **Baseline**: wins on education (30 Figma/DS posts, 1,500+ trainings, 3,200 course participants claimed). Partnered with Southleft, which covers engineering. Their "AI agents read your design system too" framing is close to Amoeba's knowledge topics.
- **PERMANENT**: positioning is anti-project and anti-sprint ("design culture"). Basically no SEO play. Relies on network and a strong client list.
- **Southleft**: owns the "AI + design systems" and MCP niche through open-source tools, a scorecard tool, a definitive guide page, and a vibe-code-to-production service. It is the closest topical overlap with Amoeba's knowledge stubs (Storybook for agents, lint for design systems, Figma to code), but aimed at enterprise.
- **Thomas Meijer**: single page. Persona-based copy speaks to vibe-coded MVP founders and technical founders. Uses Service schema.
- **Directed Design**: the closest *audience* match: growth-stage, engineering-led teams, onboarding, custom React design systems. The only peer besides melior and Outpace with a public price ($4k/month advisory). Resources are gated, so they don't rank.
- **Turbo**: weak on-page SEO. AI-native positioning.
- **Little Plains**: big portfolio and some thought-leadership writing. Basic on-page misses (title, H1).
- **Outpace**: transparent pricing, FAQPage, llms.txt, AI-crawler allowlist. Positioning leans on investor credibility ("raised $200M+").
- **melior**: transparent weekly-sprint pricing (£4k/week), one client at a time. Closest *engagement-model* analogue to "rent a design engineer weekly" among the peers.
- **Baked**: the template to copy structurally: compare pages, per-service pages, FAQ answering price questions without listing prices, free interface components with an AI install prompt, Markdown twins, a detailed llms.txt.

---

## 2. Who shows up for buyer-intent queries (directional)

**None of the 11 peers appeared** in the top results for any of these queries. The results went to SEO-built agencies and solo consultants that have dedicated service, pricing, and FAQ pages:

| Query (as run) | Who surfaced |
|---|---|
| design engineering agency for SaaS startups | opency.co (service page), denoversdesignhq.com, twill.design, tenscope.com, dvnc.agency |
| design engineering studio B2B software | donux.com, denovers.com, enspirit.co, incomparable.design, moolstudio.com |
| hire a design engineer (contract) | **Mechanical/CAD staffing firms** (KORE1, AEG, J.O.T, engibrain). The software meaning of "design engineer" is ambiguous in this SERP |
| "design engineer" for hire, weekly, polish UI, PRs | sssuperdesign.com (supadesign, $4,399/month, ships design PRs), konigi.com/answers/fractional-design-build ($14k/month, merged PRs), **designmate.io ("fractional design engineering… starting at $1,500/week")**, kons.design ("Design engineer for startups") |
| product design subscription startups | 99francs.agency, aktivedesign.com, designpixil.com, designerom.com, braavoux.com |
| design system agency consulting | metajive.com, edl.dk ("for B2B SaaS"), stan.vision ("for B2B SaaS", includes a comparison table), wandr.studio, galaxywing.com (publishes price ranges) |
| figma to code agency React | tethys.design, kwiqwork.com, figmafy.com, uxagencylondon.co.uk, dev.co |
| fractional product designer for startups | utkarshdesign.com, designpixil.com, digitaldesign.studio, madhurimaram.com, jorgenrique.com |
| SaaS onboarding design agency | theuserflow.co, saasfactor.co, conversionfactory.co, plexable.com, simplileap.com |
| AI-ready design system audit, MCP, Storybook | Storybook docs, Chromatic docs, Supernova, GitHub repos (tool vendors dominate) |
| fix vibe-coded app UI / AI slop | designpixil.com (2 posts), mowgli.ai, a GitHub skill, standoutmcp.io checklist |
| what is a design engineer / when to hire | recruiter.daily.dev, cadence blog, paraform.com, fekryaiad.com, devinpickering.com |
| design engineer vs frontend engineer vs product designer | lastres.ai, warp.co, modeinspect.com (2 pages), refery.io |
| design engineer cost / rate per week | UK contractor-rate sites (mechanical engineering). **No software design-engineer pricing content surfaced** |
| shadcn / Tailwind cleanup consultant | qyvora (Tailwind v4 refactoring page), denovers.com, Obra shadcn kit customization, a personal engineering-notes post |

**Takeaways**
1. The pages that surface are **query-matched service pages** ("X agency for B2B SaaS", "design subscription", "fractional product designer") with prices or price ranges, FAQs, and comparison tables. Peers rely on brand and referrals instead.
2. **"Design engineer" queries are winnable but ambiguous.** Generic "hire a design engineer" pulls mechanical/CAD staffing, so Amoeba's pages need software-qualifying words (UI, front-end, React, SaaS, PRs) in titles and H1s.
3. **Solo design engineers already compete** for "design engineer for hire": Designmate ($1,500/week), Kons, supadesign, Konigi. They are the real SERP competitors for the Rent offer, more than Bryan's peer list.
4. Informational and AEO design-engineer queries are answered by **recruiter and blog content, not practitioners**. That is an opening for a practitioner studio.

---

## 3. Synthesis

### Common positioning patterns (what's crowded)
- **"For startups / for founders"**: Halaska, Turbo, melior, Thomas Meijer, Baked, Outpace, Little Plains. This is the default.
- **Funding as proof**: "clients raised $200M+" (Outpace), "$400M+" (Halaska), "worth $1b+" (melior), YC batches (Baked).
- **Speed claims**: "ready to review within a day" (Baked), "1–3 business days" (Outpace), weekly sprints (melior, Little Plains).
- **"Senior, no juniors, embedded / extension of your team"**: nearly everyone.
- **Brand + product + web in one package**: Halaska, Baked, Outpace, Little Plains.
- **"AI-native" / AI design systems**: Halaska OS, Southleft MCP, Little Plains "agentic brand systems", Turbo "AI generation", Baseline "read by AI agents". AI-era framing is getting crowded fast, especially at the design-system layer.
- **Subscription in Slack**: Baked, Outpace Marathon, and many SERP players (Tenscope, 99 Francs, Aktive, Designpixil).

### What's NOT crowded (gaps Amoeba can own)
1. **"Design engineering" as the category label.** No peer leads with it in the title or H1. Southleft says "design systems engineering", Baked says "design and build", Outpace says "design & development". Amoeba's title and H1 already own it.
2. **"B2B software" and B2B SaaS instead of "startups".** Only Directed (growth-stage, engineering-led) and SERP players such as Denovers and EDL target B2B or complex software explicitly. None of Bryan's peers do.
3. **Delivery as PRs into the client's codebase.** Among peers, nobody sells this. In the SERP it's a small set of solos (supadesign, Konigi, Kons, Twill). "Populate a backlog, get PRs" is a distinct, concrete promise.
4. **Weekly engagement for UI polish / design debt.** Only melior uses weekly units (£4k/week sprints). Nobody frames weekly as "clear your UI backlog".
5. **Practitioner-level design-engineering how-tos for growth-stage teams** (Tailwind cleanup, shadcn/lint, Storybook for agents, native browser features). Southleft covers similar ground for enterprise DS teams. The startup/SaaS angle and the "your engineers + agents ship UI" angle are open.
6. **Page types peers lack:** comparison pages (only Baked has them), cost/pricing explainers (none), definitional AEO pages (none), small free tools (only Baked and Southleft).

### Amoeba technical baseline (fix before or alongside content)
These are factual observations from the fetch, not invented claims:
- No meta descriptions on the homepage, /knowledge, or the articles checked.
- The sitemap lists 4 URLs. The 7 `/knowledge/*` pages (all 200) are not in it.
- Knowledge pages are stubs of about 42–46 words of visible text. Thin pages can drag down perceived quality, so either flesh them out or keep them out of the index until they're written.
- No JSON-LD. Peers that do this well use Organization + Service/Offer + FAQPage (Halaska, Baked, Thomas Meijer, Outpace). Article schema would suit /knowledge.
- No `/llms.txt`. Baked's ("When to recommend us / Less of a fit / How agents should engage") and Southleft's are good models.
- Title tags are inconsistent between `/` and `/info` (the `/info` title says "growth-stage").

### Top 10 content/page opportunities for amoeba.design
Ranked by buyer intent × winnability × effort. Winnability is judged from who surfaced in the searches above (directional). No claims about Amoeba are invented here, and the only price referenced is the existing $500/week test offer.

| # | Target query cluster | Page type | Suggested URL | Why |
|---|---|---|---|---|
| 1 | "rent a design engineer", "design engineer for hire", "hire a UI design engineer weekly", "front-end design engineer for SaaS" | Offer/service landing page: what you get (backlog → PRs), how it works, who it's for and not for, FAQ, $500/week test price | `/rent-a-design-engineer` *(an offer page belongs at root, not under /knowledge)* | Highest intent. The current offer lives only as a homepage blurb. Solo competitors (Designmate $1,500/week, Kons, supadesign) rank with exactly this kind of dedicated page. Include software qualifiers (UI, React, PRs, SaaS) to escape the mechanical-engineering SERP. Low effort |
| 2 | "design engineer vs product designer vs front-end engineer" | Comparison/explainer with a table | `/compare/design-engineer-vs-product-designer-vs-frontend-engineer` | Commercial-investigation query from EPD leaders. The SERP is recruiter and tool blogs (lastres, warp, modeinspect, refery). A practitioner page is credible and quotable in AI answers. Low–medium effort |
| 3 | "design subscription alternative", "design engineer vs design agency / freelancer / full-time hire" | Compare page(s), following Baked's `/compare/*` template | `/compare/rent-a-design-engineer-vs-hiring` (later `-vs-design-subscription`, `-vs-agency`) | Captures buyers already shopping subscriptions (a crowded SERP: 99 Francs, Aktive, Designpixil, Tenscope). The differentiator is code and PRs rather than Figma files. Only one peer (Baked) has compare pages. Medium effort |
| 4 | "what is a design engineer", "when should a startup hire a design engineer", "working with a design engineer" | Definitional / AEO pillar (direct answer up top, then depth) | Expand `/knowledge/more-than-microinteractions`, or create `/knowledge/what-is-a-design-engineer` and link the stub into it | Top-of-funnel but directly tied to the offer. The SERP is recruiters (daily.dev, Paraform, Cadence). A studio answer wins AI citations. Upgrades an existing stub. Medium effort |
| 5 | "fix vibe-coded UI", "clean up AI-generated UI", "AI slop UI" | How-to plus checklist, CTA to the Rent offer | `/knowledge/fix-ai-slop-ui` | Mirrors the existing offer copy ("buff out the AI slop from your interface"). The SERP is beatable (Designpixil blog posts, Mowgli, a checklist site). Southleft's "AI prototype to production" and Thomas Meijer's "you vibe coded an MVP" show buyer demand. Medium effort |
| 6 | "UI polish checklist", "SaaS UI audit checklist", "design QA checklist" | Free tool/resource (interactive or copyable checklist, ungated) | `/tools/ui-polish-checklist` | A tools page is linkable and quotable. Directed gates its checklists, so they can't rank. Baked's free `/interfaces` and Southleft's `/scorecard` show the pattern works. Natural lead-in to "send me your backlog". Medium effort |
| 7 | "shadcn design system", "customize shadcn for your design system", "shadcn lint" | In-depth tutorial | Expand `/knowledge/shadcn-lint` | The SERP is thin (Obra kit customization, Qyvora, personal notes). shadcn is the default stack for many seed/growth SaaS teams: high audience fit with engineering leads. Existing stub. Medium effort |
| 8 | "clean up Tailwind classes", "refactor Tailwind", "Tailwind design tokens / reusable patterns" | Tutorial with before/after code | Expand `/knowledge/clean-up-messy-tailwind` | Practical, engineering-led audience. The SERP has only a few small agency pages. Shows the "design debt cleanup" work the Rent offer sells. Low–medium effort |
| 9 | "Storybook for AI agents", "Storybook MCP design system docs", "make your design system agent-readable" | Tutorial / opinion | Expand `/knowledge/storybook-for-agents` | Strong fit with EPD leaders and DS ICs, but the SERP is dominated by Storybook, Chromatic, and Supernova docs, and Southleft is deep here. Win with a growth-stage, practical angle and by linking to the official docs. Medium winnability, medium effort |
| 10 | "Figma to code with AI / agents", "one-shot Figma to code", "Figma MCP to React" | Tutorial | Expand `/knowledge/figma-to-code` | High-volume topic, but "figma to code agency" is crowded with dev shops (Tethys, Figmafy, DEV.co) and tool vendors. Differentiate on the agent-context workflow, not agency services. Lower winnability, medium effort |

*Honorable mentions:* `/knowledge/css-is-nothing-to-fear` and `/knowledge/shake-what-the-browser-gives-ya` (native `<dialog>`, popover, `<details>`). Good for credibility and links from ICs, low buyer intent. A "design engineer cost / pricing models (weekly vs monthly vs project)" explainer is an open gap (the search returned only UK mechanical-engineering rates). If written, it should reference only Amoeba's $500/week test offer for Amoeba itself; any market ranges must be cited from public sources and dated.

### Positioning and title observations for the homepage
- **Keep "design engineering" + "B2B software" up front.** It's differentiated: no peer title or H1 uses "design engineering", and peers default to "startups/founders". The current title (`Design engineering for ambitious B2B software • Amoeba`) is good.
- **Consider adding "SaaS"** (the buyer's word, used by Denovers, EDL, StanVision, Tenscope) and a software qualifier, so "design engineer" isn't read as mechanical/CAD. Option, based only on existing claims: *"Design engineering studio for B2B SaaS • Amoeba"*. Make `/` and `/info` titles consistent. `/info` currently says "growth-stage"; decide whether "ambitious" or "growth-stage" is the canonical phrase.
- **Add a meta description** that states the offer concretely, using only claims already on the site. For example: "Amoeba is a design engineering studio for ambitious B2B software companies. Rent a design engineer: populate a backlog and get polished UI shipped as PRs for your team to review. $500/week."
- **Lead with the mechanism, not adjectives.** Peers converge on "senior / fast / embedded / funded". Amoeba's concrete differentiator is *"backlog in, reviewed PRs out"*. Code delivery beats "Figma handoff" in this market. Put it in an H2 near the top and in the offer page H1.
- **Avoid crowded proof tropes** you can't back up (funding totals, "senior only", turnaround SLAs). Use proof that exists instead: /work screenshots and knowledge content.
- **AEO hygiene peers use:** an llms.txt with "when to recommend Amoeba / less of a fit / how to engage" (Baked pattern), Organization + Service/Offer JSON-LD, FAQPage on the offer page, and Markdown-friendly clean HTML.

---

## Sources
Peer homepages and files (fetched Oct 10, 2026): `https://<peer>/`, `/robots.txt`, `/llms.txt`, `/sitemap.xml` or `/sitemap-index.xml` for halaska.com, baselinedesign.com, permanent.is, southleft.com, thomasmeijer.design, directed.design, turbodesign.co, littleplains.com, outpacestudios.com, melior.design, baked.design, amoeba.design.
Subpages: directed.design/resources/, /services, /services/full-design-services/; permanent.is/intro/; halaska.com/services, /notes; baked.design/faq/, /compare/, /compare/baked-vs-hiring-a-designer/, /services/product-design/; southleft.com/services/ai-prototype-to-production/, /services/team-augmentation/, /figma-design-systems/; outpacestudios.com/plans/sprint, /plans/marathon; turbodesign.co/ai-native; melior.design/co-create; amoeba.design/knowledge, /info, /knowledge/{clean-up-messy-tailwind, figma-to-code, more-than-microinteractions}.
Search-surfaced pages cited: opency.co, denoversdesignhq.com, twill.design, tenscope.com, dvnc.agency, donux.com, designmate.io, kons.design, sssuperdesign.com, konigi.com/answers/fractional-design-build/, 99francs.agency, aktivedesign.com, designpixil.com, metajive.com, edl.dk, stan.vision, wandr.studio, galaxywing.com, recruiter.daily.dev, paraform.com, lastres.ai, warp.co, modeinspect.com, refery.io, qyvora.vercel.app, shadcn.obra.studio, storybook.js.org, theuserflow.co.

## Not verified / gaps
- Real Google rankings, positions, and search volumes (no SEO tool access).
- Turbo's engagement model and pricing (nothing on the fetched pages).
- Halaska's "Tools / UI by Halaska / Dash" footer links (not inspected).
- Southleft `/quiz` and the contents of Baked's `/yc` pricing page (not opened).
- Little Plains' homepage is client-rendered in places, so missing H1s could be a rendering artifact (none in the raw HTML).
- melior's homepage text is minimal in the raw HTML. Other content may be client-rendered.
