---
title: There's more to design engineering than microinteractions
description: A design engineer ships the interface, not a picture of it. What the role owns in B2B software, how it differs from design and front-end, and when to hire one.
noindex: false
published: "2026-10-10"
---

A design engineer is the person who can decide how a software interface should behave and ship that decision as code. The job takes design sense, front-end chops, enough back-end knowledge to shape the system around the screen, and product judgment about what matters. If you came here asking what a design engineer is, that is the answer. The rest is what the job looks like on a B2B product, and when I would hire one.

People hear the title and picture a microinteraction. A button that settles. A spinner with a nice curve. A tooltip that waits a beat before it nags you. That craft is real. I like it. It is the last slice of the work, and it gets talked about as if it were the whole trade. A B2B product does not get better because the hover state is lovely while the workflow still takes ten clicks.

I have spent my career on software like that. Business tools, the kind [ambitious B2B companies](/) ship, where the interface is the product and the product is a series of tasks a customer has to finish. Those tools get to operate on vibes more often than any data-driven leader wants to admit. Workflows wander. The important action is styled like the unimportant one. Somebody generated a plausible screen and nobody was embarrassed.

## The loop is the job

The work is a loop. You look at the task. You decide what the interface should do. You build it in the repo. You read what you built. You put it in front of the engineers who have to live with the diff.

I usually build inside the app. Cursor is where that happens for me, and has been since I switched in June 2024. When a page has states worth seeing side by side, I have the editor put those states on a Figma page, I tweak them, and I bring the changes back into the code. The picture is a tool. The product is the pull request.

That loop is why the role sits beside a product designer and a frontend engineer, and why I refuse to rank the three titles. A product designer can own the problem, the research, and the argument for why this solution is the one. The best of them communicate that so clearly the team trusts the call. I have said it before: you can be difficult and still be successful if you can explain why your solution is the right one available. A frontend engineer can own the components, the performance, the accessibility, and a codebase that still makes sense in a year. I want both of those people on serious products.

The design engineer is the overlap. Someone who will make the product call and the implementation call in the same afternoon, and who can tell when one of them is wrong because they can see both. If I were a strong engineer with no design sense, I would ship something sturdy that nobody wanted to use. If I were a designer with no technical chops, I would stall the moment the implementation talked back. I wrote the longer version of that list in [No more hog butchering](https://bryanking.net/posts/no-more-hog-butchering). One person with the combination can ship a lot. Most people are missing a piece of it, and the title exists for the ones who are not.

## Systems work, after the spinner

There is a joke I made in public. Are you really a design engineer if you are not writing a long RFC about overhauling the design system and adding strict checks to CI? The joke works because that is the job once the product is real.

Microinteractions do not keep the tenth feature in the same family as the first. A system does. A system holds only if something fails the build when a person, or an agent, paints outside it. The delightful easing curve on a button that has three competing definitions is decoration on top of drift. The work I actually respect is an RFC for the change, one visual decision per component, a lint rule that fails CI, and a backlog small enough to finish. The spinner can come last. If it comes first, you have a prototype of care.

## Read the code, including the generated kind

I use the models every day. I want them as pairing partners, reviewers, and testers. I still read the code. When you vibe code, you take on tech debt as fast as the model can emit it. That is a fair way to see an idea before lunch. It is a bad way to own a product you have to maintain. I wrote that down in [Vibe code is legacy code](https://bryanking.net/posts/vibe-code-is-legacy-code), and the maintenance bill has not gotten kinder.

The failure I keep seeing is quieter than a bad demo. The screen looks acceptable, so nobody reads the code. Agents override the default styles of a component more often than they use them. A few months of that and the design system is a story you tell, while the app is a pile of one-offs. I ran the accounting on my own front end. I added shadcn/lint to find the overrides, set an agent on the fixes, and reviewed 1,200 instances over a few days. Violations fail CI now. That pass was design engineering. It was slower than another afternoon on the easing curve, and it is the work that makes the easing curve worth doing.

I would cap the productivity story. A model is a boost. I have said 30 percent at best, and I still think the cap is about there. The boost goes to people who already have judgment and taste. It does not install those things. Editing is the skill that falls out of this. You cut the generated paragraph of classes. You keep the line that matches the system. You train the next session by leaving a codebase that reads clean, because the model will imitate whatever you tolerated last time.

If that mess is the thing you are staring at, I wrote a separate piece on [how I fix AI slop in a UI](/knowledge/fix-ai-slop-ui), and a [checklist](/tools/ui-polish-checklist) a team can run before they call a screen done.

## The browser is already a design system

I am a CSS purist in a specific sense. CSS was the first language that felt like drawing to me, and I owe the early part of my career to Chris Coyier and CSS-Tricks. I still want a stylesheet I can read. I have little patience for a layout that is a long string of utility classes, slightly different on every page, with a custom widget restating something the browser already does.

Use what the browser gives you. A dialog, a popover, a disclosure, a form control, a focus ring. Native elements carry behavior you will otherwise reinvent badly, and they give an agent fewer places to invent a second pattern. A custom modal that traps focus wrong is not a microinteraction. It is a bug with a drop shadow.

The [knowledge index](/knowledge) is that argument split into titles: CSS, the Tailwind mess, native HTML, Figma to code, Storybook for agents, shadcn/lint. They belong together because a design engineer is accountable for the system the interface is made of, not only for the moment it moves.

Storybook matters for the same reason CI matters. If an agent cannot see how a component is supposed to be used, it will guess, and the guess will look like every other guess on the internet. Documentation the model can read is part of the design system now. So is the lint rule that rejects the guess.

## When I would hire one

Hire a design engineer when the gap in the company is between a decision and a shipped interface.

You build ambitious B2B software. The product exists. Customers are in it. The UI is rough around the edges, or it drifted, or a model produced a screen that looks finished and behaves like a template. You have engineers who can review a pull request. You may not have anyone who will both decide the fix and open it.

That is a different gap from "we do not know what to build." If the problem is muddy, hire a product designer and let them do the research and the argument. User research and usability testing are real disciplines. I list them because I use them, and because a design engineer who skips them is decorating. Your customers will tell you what they want. Someone has to listen. A week spent polishing a guessed backlog is a fast way to improve the wrong screen.

It is also a different gap from "the design is settled and the surface area is large." Hire a frontend engineer for that. Give them the system, the performance budget, and the time to own the code. A specialist in the front end is a full job. On a big product I want that person in the repo every day.

Small teams blur the titles, and that is fine while the product is young. I am long on a skilled generalist for zero to one. I am also a purist about method once "everyone does everything" means nobody finishes. The best teams I have worked with follow the book they claim, scrum or Shape Up. Hire the role that matches the gap.

I wrote the three roles out on their own page, because job posts and search mash the titles together: [design engineer vs product designer vs frontend engineer](/compare/design-engineer-vs-product-designer-vs-frontend-engineer). The trade against a full-time seat is a different question: [rent a design engineer vs hiring](/compare/rent-a-design-engineer-vs-hiring). A priced week works a backlog. A job holds the product.

## Working with one

The offer I publish is plain on purpose. Populate a backlog of issues. I ship polished UI as pull requests for your engineering team to review. The page is [rent a design engineer](/rent-a-design-engineer). The price sits there and on the [homepage](/), and this essay is not a contract.

If you want to see the kind of interface I mean, the [work page](/work) is screenshots of product UI. Dashboards, campaigns, invites, imports. No client names and no outcomes. I would rather show the screen than invent a case study.

Bring a list. Limit what is in progress. Say which workflow a customer actually finishes, and which part of it feels like vibes. I will turn that into a diff your engineers can review. If the list is "make the generated UI look like our product," run the checklist first. Tighter issues make better pull requests.

The spinner can wait. The workflow cannot.
