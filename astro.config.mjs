// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://amoeba.design';

/** Paths whose knowledge frontmatter says `noindex: true`. Flip that flag to include the article. */
function noindexKnowledgeUrls() {
	const dir = join(process.cwd(), 'src/content/knowledge');
	const urls = new Set();
	for (const file of readdirSync(dir)) {
		if (!file.endsWith('.md')) continue;
		const raw = readFileSync(join(dir, file), 'utf8');
		const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!match || !/^noindex:\s*true\s*$/m.test(match[1])) continue;
		const slug = file.slice(0, -'.md'.length);
		urls.add(new URL(`/knowledge/${slug}`, SITE).href);
	}
	return urls;
}

const noindexUrls = noindexKnowledgeUrls();

// https://astro.build/config
export default defineConfig({
	site: SITE,
	// Canonicals omit a trailing slash. The homepage stays `https://amoeba.design/`.
	// vercel.json `trailingSlash: false` 308s slash URLs onto this form.
	trailingSlash: 'never',
	integrations: [
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/$/, '');
				return !noindexUrls.has(url.href);
			},
		}),
	],
});
