import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildAiDocuments } from '../llms/generate.mjs';
import { normalizePathname } from '../llms/urls.mjs';
import { noindexPathnames } from '../noindex-routes.mjs';

/**
 * Writes `/llms.txt`, `/llms-full.txt`, and a Markdown alternate for every
 * indexable HTML page. Runs after the pages exist so the text matches the
 * build. `noindexPathnames()` in `src/noindex-routes.mjs` (knowledge frontmatter
 * plus stub compare routes) and a robots noindex meta both omit a page.
 *
 * @param {{ site: string }} options
 */
export function llmsTxt({ site }) {
	return {
		name: 'llms-txt',
		hooks: {
			/** @param {{ dir: URL, logger: { info: (message: string) => void } }} options */
			'astro:build:done': async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);
				const htmlPages = await collectHtml(outDir);
				const { files, pages, skipped } = buildAiDocuments(htmlPages, {
					site,
					noindexPathnames: noindexPathnames(),
				});
				for (const [pathname, contents] of files) {
					const file = join(outDir, pathname.replace(/^\//, ''));
					await mkdir(dirname(file), { recursive: true });
					await writeFile(file, contents, 'utf8');
				}
				logger.info(
					`Wrote llms.txt, llms-full.txt, and ${pages.length} markdown page(s). Skipped ${skipped} noindex page(s).`,
				);
			},
		},
	};
}

/**
 * @param {string} outDir
 * @returns {Promise<{ pathname: string, html: string }[]>}
 */
async function collectHtml(outDir) {
	/** @type {{ pathname: string, html: string }[]} */
	const pages = [];

	/**
	 * @param {string} dir
	 */
	async function walk(dir) {
		const entries = await readdir(dir, { withFileTypes: true });
		for (const entry of entries) {
			const full = join(dir, entry.name);
			if (entry.isDirectory()) {
				if (entry.name === '_astro') continue;
				await walk(full);
				continue;
			}
			if (!entry.name.endsWith('.html')) continue;
			const rel = relative(outDir, full).split(sep).join('/');
			let pathname;
			if (rel === 'index.html') pathname = '/';
			else if (rel.endsWith('/index.html')) pathname = `/${rel.slice(0, -'/index.html'.length)}`;
			else pathname = `/${rel.slice(0, -'.html'.length)}`;
			pages.push({ pathname: normalizePathname(pathname), html: await readFile(full, 'utf8') });
		}
	}

	await walk(outDir);
	return pages;
}
