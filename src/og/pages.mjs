import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { noindexPathnames } from "../noindex-routes.mjs";
import { knowledgeDocumentTitle } from "./document-titles.mjs";

/** @typedef {{ pathname: string, title: string, description: string }} OgPage */

const STATIC_PAGES = [
	{
		pathname: "/",
		title: "Rent a design engineer, $500/wk • Amoeba",
		// OG subtitle only — omit $500/wk (already in title); meta description unchanged on the page.
		description:
			"Amoeba is a design engineering studio for ambitious B2B software companies. Ship polished UI as pull requests your team reviews.",
	},
	{
		pathname: "/rent-a-design-engineer",
		title: "Rent a design engineer, $500/wk • Amoeba",
		// OG subtitle only — price in title; derived from on-page offer copy.
		description:
			"Send a UI backlog. Get polished SaaS UI as pull requests your team reviews.",
	},
	{
		pathname: "/work",
		title: "Product interface work • Amoeba",
		description:
			"Product UI screenshots from Amoeba, a design engineering studio for ambitious B2B software companies. Dashboards, campaigns, invites, and contact import.",
	},
	{
		pathname: "/contact",
		title: "Contact • Amoeba",
		description:
			"Contact Bryan King at Amoeba about the design engineer rental or your SaaS UI backlog.",
	},
	{
		pathname: "/info",
		title: "Bryan King, Newport, Kentucky • Amoeba",
		description:
			"Amoeba is a design engineering studio run by Bryan King from Newport, Kentucky. The site is set in HEX Franklin and Acumin VF, and powered by Astro and Vercel.",
	},
	{
		pathname: "/knowledge",
		title: "Design engineering knowledge • Amoeba",
		description:
			"Knowledge from Amoeba on design engineering for ambitious B2B software: CSS, Tailwind, native HTML, Figma, Storybook, shadcn/lint, and fixing AI slop in the UI.",
	},
	{
		pathname: "/tools/ui-polish-checklist",
		title: "UI polish checklist • Amoeba",
		description:
			"A free checklist for teams cleaning up product UI. Read the code, remove overrides, use the browser, and check the states a SaaS interface actually has.",
	},
	{
		pathname: "/compare/design-engineer-vs-product-designer-vs-frontend-engineer",
		title: "Design engineer vs designer vs front end • Amoeba",
		description:
			"A design engineer, a product designer, and a frontend engineer own different parts of a SaaS product. When I would hire each, and why the titles differ.",
	},
	{
		pathname: "/compare/rent-a-design-engineer-vs-hiring",
		title: "Rent a design engineer vs hiring • Amoeba",
		description:
			"Renting a design engineer and hiring one full time solve different problems. What a weekly UI backlog gets you, and when a full-time seat is the better call.",
	},
];

/**
 * @param {string} title Full `<title>` including `• Amoeba` when present.
 */
export function stripBrandSuffix(title) {
	return title.replace(/\s*•\s*Amoeba\s*$/i, "").trim();
}

/**
 * @param {string} [root]
 * @returns {OgPage[]}
 */
export function getKnowledgeOgPages(root = process.cwd()) {
	const dir = join(root, "src/content/knowledge");
	const pages = [];
	for (const file of readdirSync(dir)) {
		if (!file.endsWith(".md")) continue;
		const raw = readFileSync(join(dir, file), "utf8");
		const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!match) continue;
		const block = match[1];
		const titleMatch = block.match(/^title:\s*["']?(.+?)["']?\s*$/m);
		const descMatch = block.match(/^description:\s*["']?(.+?)["']?\s*$/m);
		if (!titleMatch || !descMatch) continue;
		const fullTitle = titleMatch[1];
		const documentTitle = knowledgeDocumentTitle(fullTitle);
		const slug = file.slice(0, -".md".length);
		pages.push({
			pathname: `/knowledge/${slug}`,
			title: `${documentTitle} • Amoeba`,
			description: descMatch[1],
		});
	}
	pages.sort((a, b) => a.pathname.localeCompare(b.pathname));
	return pages;
}

/**
 * Every built page that gets its own share PNG (404 uses default `og.png` only).
 *
 * @param {string} [root]
 * @returns {OgPage[]}
 */
export function getAllOgPages(root = process.cwd()) {
	return [...STATIC_PAGES, ...getKnowledgeOgPages(root)];
}

/**
 * @param {string} [root]
 */
export function getAllOgPathnames(root = process.cwd()) {
	return getAllOgPages(root).map((p) => p.pathname);
}

/**
 * Indexable pages that must have a committed OG file before `astro build`.
 *
 * @param {string} [root]
 * @returns {OgPage[]}
 */
export function getIndexableOgPages(root = process.cwd()) {
	const noindex = noindexPathnames(root);
	return getAllOgPages(root).filter((p) => !noindex.has(p.pathname));
}
