import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { statSync } from 'node:fs';
import { join } from 'node:path';

/** @param {import('astro:content').CollectionEntry<'knowledge'>} entry */
function pubDateForEntry(entry) {
	if (entry.data.published) {
		return new Date(`${entry.data.published}T12:00:00Z`);
	}
	const filePath =
		entry.filePath ?? join(process.cwd(), 'src/content/knowledge', `${entry.id}.md`);
	try {
		return statSync(filePath).mtime;
	} catch {
		return undefined;
	}
}

/** @param {import('astro:content').CollectionEntry<'knowledge'>} entry @param {URL} site */
function itemLink(entry, site) {
	const url = new URL(`/knowledge/${entry.id}`, site);
	return url.href;
}

export async function GET(context) {
	const knowledge = (await getCollection('knowledge')).sort((a, b) => {
		const aTime = pubDateForEntry(a)?.getTime() ?? 0;
		const bTime = pubDateForEntry(b)?.getTime() ?? 0;
		if (bTime !== aTime) return bTime - aTime;
		return a.data.title.localeCompare(b.data.title);
	});

	return rss({
		title: 'Amoeba Knowledge',
		description:
			'Design engineering knowledge from Amoeba: CSS, Tailwind, native HTML, Figma, Storybook, shadcn/lint, and fixing AI slop in the UI.',
		site: context.site,
		trailingSlash: false,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
		},
		customData: `<atom:link href="${new URL('rss.xml', context.site).href}" rel="self" type="application/rss+xml" />`,
		items: knowledge.map((entry) => ({
			title: entry.data.title,
			description: entry.data.description,
			pubDate: pubDateForEntry(entry),
			link: itemLink(entry, context.site),
		})),
	});
}
