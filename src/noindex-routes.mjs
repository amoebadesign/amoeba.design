import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Knowledge articles whose frontmatter says `noindex: true`.
 * The sitemap filter and the llms.txt build both call this, so a flag flip
 * publishes the article in both places on the next build.
 *
 * @param {string} [root]
 * @returns {Set<string>} Pathnames such as `/knowledge/shadcn-lint`. No trailing slash.
 */
export function noindexPathnames(root = process.cwd()) {
	const dir = join(root, 'src/content/knowledge');
	/** @type {Set<string>} */
	const paths = new Set();
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
 * Absolute sitemap URLs for those articles.
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
