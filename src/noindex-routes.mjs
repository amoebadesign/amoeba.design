import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Page routes (not knowledge entries) that are still stubs. They emit `noindex, follow`
// and astro.config.mjs drops them from the sitemap. Remove a path here to publish it.
// Knowledge entries use `noindex: true` in their frontmatter instead.
export const noindexRoutes = new Set([
	'/compare/design-engineer-vs-product-designer-vs-frontend-engineer',
	'/compare/rent-a-design-engineer-vs-hiring',
]);

/**
 * Pathnames that must stay out of the sitemap, llms.txt, and Markdown alternates.
 * Knowledge articles with `noindex: true` plus stub routes in `noindexRoutes`.
 *
 * @param {string} [root]
 * @returns {Set<string>} Pathnames such as `/knowledge/shadcn-lint`. No trailing slash.
 */
export function noindexPathnames(root = process.cwd()) {
	/** @type {Set<string>} */
	const paths = new Set(noindexRoutes);
	const dir = join(root, 'src/content/knowledge');
	let files;
	try {
		files = readdirSync(dir);
	} catch {
		return paths;
	}
	for (const file of files) {
		if (!file.endsWith('.md')) continue;
		const raw = readFileSync(join(dir, file), 'utf8');
		const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!match || !/^noindex:\s*true\s*$/m.test(match[1])) continue;
		const slug = file.slice(0, -'.md'.length);
		paths.add(`/knowledge/${slug}`);
	}
	return paths;
}

/**
 * Absolute URLs for every noindex pathname.
 *
 * @param {string} site Origin, including protocol, with no path.
 * @param {string} [root]
 * @returns {Set<string>}
 */
export function noindexKnowledgeUrls(site, root = process.cwd()) {
	const origin = new URL(site).origin;
	/** @type {Set<string>} */
	const urls = new Set();
	for (const pathname of noindexPathnames(root)) {
		urls.add(new URL(pathname, origin).href);
	}
	return urls;
}
