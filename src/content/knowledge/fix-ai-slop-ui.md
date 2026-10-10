---
title: Fix the AI slop in your UI
description: AI-generated UI drifts off the design system one override at a time. How I read the code, remove the slop, and put checks in CI so the next screen stays clean.
noindex: false
published: "2026-10-10"
---

Open a settings screen your team generated last month. The buttons are from the kit. The spacing belongs to whoever prompted last. There are two card patterns and a third that is almost one of them. A chat affordance sits on a workflow that did not need a conversation. From across the room it looks finished.

I call that slop. The line on the [homepage](/) asks it in plainer words: are you looking to buff out the AI slop from your interface? This is the buffing, the way I actually do it. If you want the short version you can run with a team, the [UI polish checklist](/tools/ui-polish-checklist) is the same pass as boxes.

## Slop is a specific mess

I am using the word for failures I will spend a week on, not as a mood.

The design system is overridden. Agents override default component styles more often than they use them. You can have a careful set of tokens and a product that never touches them. Every "small tweak" in a prompt is a new source of truth. After a quarter, nobody knows which padding is the real one.

Nobody read the code. The review was a screenshot. I have done this. A stretch of building where the front end was checked by looking at it, and the overrides piled up under a UI that "looked good." A screenshot cannot tell you that two buttons are different components, or that a color is an arbitrary value one file away from the token.

The prototype became the product. Vibe coding is a great way to see an idea before lunch. It is also tech debt, issued at the speed of the model. Debt is fine when you are going to throw the code away. The moment customers are in it, and your team is the one who will maintain it, you are holding legacy code. I wrote that up as [vibe code is legacy code](https://bryanking.net/posts/vibe-code-is-legacy-code). The title does what it says on the tin.

Chat got bolted on. Incumbents do this, and plenty of startups copy them. A chat box lands on the product and the workflow underneath is the same errand it was last year. Sometimes it is worse, because the empty state now has to explain a bot. If the model does not remove clicks from the task, it is furniture. The feature was prototyped in Claude or ChatGPT, then glued to a screen that already had a job.

The layout is a string of classes. One page is a paragraph of utilities. The next page is a slightly different paragraph. That is the Tailwind mess. You cannot see the layout anymore. You also cannot trust an agent to extend it, because there is no pattern to extend, only a local accident that happened to render.

None of this requires a villain. It requires a team moving fast, a model that is eager to help, and no check that fails. The perceived bottleneck of writing code by hand used to let the work breathe. When that bottleneck disappears and the reading does not replace it, you get a lot of UI and very little product.

## A campaigns screen, clicked for real

Take a campaigns table. Filters, a status, a primary action, rows of names, a detail page behind each row. B2B tools are full of this shape. The [work page](/work) is full of it too: product UI, not a manifesto. It is a good test for slop because the happy path looks fine in a screenshot and falls apart in use.

Click the path yourself. Create a campaign, or edit one, and count the clicks. I have used tools where one ordinary task took ten clicks, and everyone involved would have called the company data-driven. Count anyway. If you cannot finish the task without guessing which button is the real one, the visual polish is a costume.

Then open the files that rendered the path. Mark every override. A padding value that restates the token. A text color in hex sitting on a component that already had a color. A second button, copied and renamed, because the prompt said "make it more primary." A dialog built from a div when the page already had a dialog component. A status pill styled three ways across the list, the filter, and the detail page.

Check the states the screenshot skipped. The empty list. The loading row. The error when the save fails. The campaign name that is long enough to wrap, or to blow out the row. Generated UI is optimistic. It draws the demo data. Customers bring the awkward data, and that is the interface. Read the file while you are there. The source tells you whether you have one system or five.

## Read it, then edit it

Editing is the job, especially if you want the next generation to be cleaner than this one. Models imitate the repo they are pointed at. If the repo is slop, the next pull request is slop with confidence. If the repo is strict, you get a better draft and a smaller review. Learn to be an editor. That skill matters even more when you are training agents to write something a person can read.

I treat the model as a pairing partner. It can propose the fix, point at the weird state, and grind through a mechanical cleanup. I keep the authorship. I have said the productivity bump tops out around 30 percent. Use that bump on people who already have judgment.

Stop before you reskin the app. A cleanup that tries to touch every page will manufacture a new pile of one-offs, and you will lose the thread. Limit the work in progress. Finish the campaign path before you open settings. Delete the accidental overrides, promote the ones you meant into the component, and check the states the screenshot skipped. The [checklist](/tools/ui-polish-checklist) is that pass written as boxes.

## Make the check deterministic

Taste does not survive a second agent session unless the build enforces it. I want a lint rule, and I want CI to fail.

On my own front end I added shadcn/lint, set an agent loose on the overrides it found, and manually reviewed 1,200 instances in a few days. The count is the boring part. The part that matters is what happened after: violations fail CI. The next session can try to sneak a one-off style through. The build says no. I would rather have a red check than a screenshot argument in review.

You do not have to use my exact tool. You do have to have a check that is deterministic. "The designer will notice" is not a control. The designer is in another tab, and the agent does not get tired. "We'll catch it in QA" is hope. Hope is not a pipeline.

Give the agent something true to read before you ask it to write. Storybook, or any docs that show the component in its real states, beats a prompt that says "match our design system" and then links nothing. An agent that can see the button will use the button. An agent that can only see a pile of overrides will add another override. Show the system. Then reject drifts from it.

Two sources of truth is how slop reproduces. An override you meant is a design decision. Put it in the component. An override you did not mean is noise. Delete it. Two ways to pad a card is how you get a third by Thursday.

## Use the platform you already have

A lot of generated UI rebuilds the browser. A custom modal that traps focus wrong. A div with a click handler where a button belonged. A disclosure built from state that a native element already had. I am a CSS purist about this, and also just tired. Native elements are harder for a model to "improve" into a mess, and they behave the way people expect. Use what the browser gives you. Spend the custom work on the part of the product that is actually yours: the task, the language, the density of a screen that has to show real data.

Same rule for type and space. One scale. A page does not get a new font size because the prompt said "a bit larger." If you use a kit, let the kit be the kit until you have a reason to change the kit. The slop starts the moment every screen is a special case. I want software that does what it says on the tin. A button that says Create campaign should create the campaign. A spacing token named for a step should be that step, everywhere, including in the file an agent touched at 1 a.m.

Low fidelity still helps. A rough sketch of the workflow will tell you the chat box does nothing before anyone generates a polished version of it. I do not want a team drunk on a high-fidelity prototype of the wrong task. Decide the task. Then generate inside the decision. Your customers will tell you what the task is, if anyone asks them. A lot of interface debt is a backlog of things customers already said, ignored because the incentives pointed at a demo.

## What I would leave alone

I would leave the roadmap alone. A cleanup roadmap is how a list of issues becomes a quarter of meetings. Make a list. Work the list. Kill the items that were decoration.

I would also leave the brand-new visual language alone until the existing one is enforced. Reskins feel productive while the overrides multiply. Enforcement first. If the system itself is the problem, change it in one place and let CI hold the line.

## If the list is longer than the week you have

Run the [checklist](/tools/ui-polish-checklist) with the people who ship the product. The misses are the backlog. When that backlog is longer than your engineers can pick up, that is the work I take. You populate the issues. I ship polished UI as pull requests for your engineering team to review. The plain version, with the price and the questions I can answer, is [rent a design engineer](/rent-a-design-engineer).

If you are still deciding whether this is a design problem, an engineering problem, or both, I wrote up [what a design engineer is](/knowledge/more-than-microinteractions), and the [comparison of the three roles](/compare/design-engineer-vs-product-designer-vs-frontend-engineer). The slop lives in the overlap. The fix is someone who will read the code and care how the task feels, then a build that keeps the care from leaking out.

Slop is unpaid debt. The interest is every future screen that copies it.

Fail the build, or it comes back.
