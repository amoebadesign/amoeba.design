// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { llmsTxt } from './src/integrations/llms-txt.mjs';
import { noindexKnowledgeUrls } from './src/noindex-routes.mjs';

const SITE = 'https://amoeba.design';

/**
 * Knowledge entries whose frontmatter says `noindex: true`, plus stub routes in
 * `src/noindex-routes.mjs`. Flip the flag, or remove the route, to include the page.
 */
const noindexUrls = noindexKnowledgeUrls(SITE);

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
				if (url.pathname.endsWith('.md')) return false;
				if (url.pathname === '/llms.txt' || url.pathname === '/llms-full.txt') return false;
				if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/$/, '');
				// 404.astro is the error document. It is noindex and not a URL to list.
				if (url.pathname === '/404' || url.pathname === '/404.html') return false;
				return !noindexUrls.has(url.href);
			},
		}),
		llmsTxt({ site: SITE }),
	],
});
