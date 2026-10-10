import { absoluteUrl, canonicalUrl, markdownPathname, normalizePathname, siteOrigin } from './urls.mjs';

const NAMED_ENTITIES = {
	amp: '&',
	lt: '<',
	gt: '>',
	quot: '"',
	apos: "'",
	nbsp: '\u00a0',
	rsquo: '\u2019',
	lsquo: '\u2018',
	rdquo: '\u201d',
	ldquo: '\u201c',
	mdash: '\u2014',
	ndash: '\u2013',
	hellip: '\u2026',
	copy: '\u00a9',
	rarr: '\u2192',
	larr: '\u2190',
};

const VOID = new Set([
	'area',
	'base',
	'br',
	'col',
	'embed',
	'hr',
	'img',
	'input',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr',
]);

const PAGE_LABELS = {
	'/': 'Home',
	'/work': 'Work',
	'/info': 'Info',
	'/knowledge': 'Knowledge',
};

/**
 * @param {string} value
 */
export function decodeEntities(value) {
	return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body) => {
		if (body[0] === '#') {
			const code =
				body[1] === 'x' || body[1] === 'X' ? Number.parseInt(body.slice(2), 16) : Number.parseInt(body.slice(1), 10);
			if (!Number.isFinite(code)) return entity;
			try {
				return String.fromCodePoint(code);
			} catch {
				return entity;
			}
		}
		return NAMED_ENTITIES[body.toLowerCase()] ?? entity;
	});
}

/**
 * @param {string} html
 */
function stripTags(html) {
	return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/**
 * @param {string} attrs
 * @param {string} name
 */
function attr(attrs, name) {
	const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
	if (!match) return '';
	return decodeEntities(match[2] ?? match[3] ?? '');
}

/**
 * @param {string} html
 * @param {string} name
 */
function metaContent(html, name) {
	const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
	for (const tag of tags) {
		const metaName = attr(tag, 'name');
		if (metaName.toLowerCase() !== name.toLowerCase()) continue;
		return attr(tag, 'content');
	}
	return '';
}

/**
 * @param {string} html
 */
export function hasNoindexMeta(html) {
	return /\bnoindex\b/i.test(metaContent(html, 'robots'));
}

/**
 * @param {string} html
 */
function extractMain(html) {
	const match = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
	return match ? match[1] : '';
}

/**
 * @param {string} html
 */
function preclean(html) {
	return html
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
		.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')
		.replace(/<dialog\b[^>]*>[\s\S]*?<\/dialog>/gi, '')
		.replace(/<template\b[^>]*>[\s\S]*?<\/template>/gi, '')
		.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '');
}

/**
 * @param {string} html
 */
function tokenize(html) {
	/** @type {{ type: 'text', text: string } | { type: 'start' | 'end', name: string, attrs: string, selfClosing: boolean }[]} */
	const tokens = [];
	const re = /<\/?([a-zA-Z][\w:-]*)([^>]*)>|([^<]+)/g;
	let match;
	while ((match = re.exec(html))) {
		if (match[3] != null) {
			const text = decodeEntities(match[3]).replace(/\s+/g, ' ');
			if (text) tokens.push({ type: 'text', text });
			continue;
		}
		const closing = match[0].startsWith('</');
		const name = match[1].toLowerCase();
		const attrs = match[2] ?? '';
		const selfClosing = !closing && (VOID.has(name) || /\/\s*$/.test(attrs));
		tokens.push({ type: closing ? 'end' : 'start', name, attrs, selfClosing });
	}
	return tokens;
}

/**
 * @param {string} text
 */
function inline(text) {
	return text.replace(/\s+/g, ' ').trim();
}

/**
 * @param {string} href
 * @param {string} origin
 * @param {Set<string>} noindexPathnames
 */
function rewriteHref(href, origin, noindexPathnames) {
	if (!href || href.startsWith('#')) return href;
	let url;
	try {
		url = new URL(href, origin);
	} catch {
		return href;
	}
	if (url.origin !== origin) {
		// `URL.href` adds a slash to a bare origin (`https://astro.build` → `https://astro.build/`).
		// Keep the href the page actually publishes.
		if (/^https?:\/\//i.test(href)) return href;
		return url.href;
	}
	const path = normalizePathname(url.pathname);
	if (noindexPathnames.has(path)) return null;
	return absoluteUrl(markdownPathname(path), origin);
}

/**
 * @param {string} name
 * @param {string} inner
 * @param {boolean} drop
 */
function wrapBlock(name, inner, drop) {
	const text = inner.trim();
	if (!text || drop) return '';
	if (/^h[1-6]$/.test(name)) {
		const level = Number(name.slice(1));
		const heading = inline(text).replace(/^#+\s+/, '');
		return `\n\n${'#'.repeat(level)} ${heading}\n\n`;
	}
	if (name === 'p') return `\n\n${inline(text)}\n\n`;
	if (name === 'li') {
		const parts = text
			.split(/\n{2,}/)
			.map((part) => inline(part).replace(/^#+\s+/, ''))
			.filter(Boolean);
		if (parts.length === 0) return '';
		const [first, ...rest] = parts;
		let item = `\n- ${first}`;
		for (const part of rest) item += `\n\n  ${part}`;
		return `${item}\n`;
	}
	if (name === 'br') return '\n';
	return `\n${text}\n`;
}

/**
 * Convert a fragment of this site's HTML into Markdown.
 * Internal links to indexable pages point at the `.md` alternate.
 * A link to a noindex pathname drops the whole enclosing `<li>` when there is one,
 * and otherwise keeps the visible text without the URL.
 *
 * @param {string} html
 * @param {{ site: string | URL, noindexPathnames: Set<string> }} options
 */
export function htmlToMarkdown(html, options) {
	const origin = siteOrigin(options.site);
	const tokens = tokenize(preclean(html));

	/**
	 * @param {number} index
	 * @param {string | null} stop
	 * @param {{ noindexLink: boolean }} ctx
	 * @returns {{ out: string, index: number }}
	 */
	function walk(index, stop, ctx) {
		let out = '';
		while (index < tokens.length) {
			const token = tokens[index];
			if (token.type === 'end') {
				if (token.name === stop) return { out, index: index + 1 };
				index += 1;
				continue;
			}
			if (token.type === 'text') {
				out += token.text;
				index += 1;
				continue;
			}
			if (token.selfClosing) {
				if (token.name === 'img') {
					const alt = attr(token.attrs, 'alt').replace(/\s+/g, ' ').trim();
					if (alt) out += `\n- ${alt}\n`;
				} else if (token.name === 'br') {
					out += '\n';
				}
				index += 1;
				continue;
			}
			const child = { noindexLink: false };
			const inner = walk(index + 1, token.name, child);
			if (child.noindexLink) ctx.noindexLink = true;
			if (token.name === 'a') {
				const text = inline(inner.out);
				const href = attr(token.attrs, 'href');
				let path = '';
				try {
					path = normalizePathname(new URL(href, origin).pathname);
				} catch {
					path = '';
				}
				const sameOrigin = (() => {
					try {
						return new URL(href, origin).origin === origin;
					} catch {
						return false;
					}
				})();
				if (sameOrigin && noindexPathnamesHas(options.noindexPathnames, path)) {
					ctx.noindexLink = true;
					out += text;
				} else if (!href || !text) {
					out += text;
				} else {
					const target = rewriteHref(href, origin, options.noindexPathnames);
					out += target ? `[${text.replaceAll(']', '\\]')}](${target})` : text;
				}
			} else {
				out += wrapBlock(token.name, inner.out, token.name === 'li' && child.noindexLink);
			}
			index = inner.index;
		}
		return { out, index };
	}

	return tightenLists(
		walk(0, null, { noindexLink: false })
			.out.replace(/[ \t]+\n/g, '\n')
			.replace(/\n{3,}/g, '\n\n'),
	).trim();
}

/** Collapse blank lines between consecutive list items. */
function tightenLists(markdown) {
	let next = markdown;
	let prev;
	do {
		prev = next;
		next = prev.replace(/(\n- [^\n]+)\n{2,}(?=- )/g, '$1\n');
	} while (next !== prev);
	return next;
}

/**
 * @param {Set<string>} paths
 * @param {string} path
 */
function noindexPathnamesHas(paths, path) {
	return paths.has(normalizePathname(path));
}

/**
 * @param {string} mainHtml
 */
function firstHeading(mainHtml, level) {
	const match = mainHtml.match(new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, 'i'));
	return match ? stripTags(match[1]) : '';
}

/**
 * @param {string} mainHtml
 */
function firstBodyParagraph(mainHtml) {
	const re = /<p\b([^>]*)>([\s\S]*?)<\/p>/gi;
	let match;
	while ((match = re.exec(mainHtml))) {
		if (/\bprice\b/i.test(match[1])) continue;
		const text = stripTags(match[2]);
		if (text) return text;
	}
	return '';
}

/**
 * @param {string} mainHtml
 */
function priceText(mainHtml) {
	const match = mainHtml.match(/<([a-z0-9]+)\b[^>]*\bclass=(["'])[^"']*\bprice\b[^"']*\2[^>]*>([\s\S]*?)<\/\1>/i);
	return match ? stripTags(match[3]) : '';
}

/**
 * @param {string} mainHtml
 */
function expertiseItems(mainHtml) {
	const match = mainHtml.match(/<h3\b[^>]*>\s*Expertise\s*<\/h3>([\s\S]*?)<\/ul>/i);
	if (!match) return [];
	return [...match[1].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
		.map((item) => stripTags(item[1]))
		.filter(Boolean);
}

/**
 * @param {string} html
 */
function footerLinks(html) {
	const match = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/i);
	if (!match) return [];
	return [...match[1].matchAll(/<a\b[^>]*href=(["'])([\s\S]*?)\1[^>]*>([\s\S]*?)<\/a>/gi)].map((link) => ({
		href: decodeEntities(link[2]),
		text: stripTags(link[3]),
	}));
}

/**
 * @param {string[]} items
 */
function joinList(items) {
	if (items.length <= 1) return items[0] ?? '';
	if (items.length === 2) return `${items[0]} and ${items[1]}`;
	return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}

/**
 * @param {string} markdown
 */
function splitLeadingH1(markdown) {
	const match = markdown.match(/^#\s+([^\n]+)\n*/);
	if (!match) return { heading: '', body: markdown.trim() };
	return { heading: match[1].trim(), body: markdown.slice(match[0].length).trim() };
}

/**
 * @param {string} value
 */
function plainText(value) {
	return value
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/\\]/g, ']')
		.replace(/\s+/g, ' ')
		.trim();
}

const UNPUBLISHED_KNOWLEDGE =
	'No knowledge articles are published yet. An article is added to this file when its frontmatter `noindex` flag is not true.';

/**
 * Copy from `.seo/truth.md`: the homepage price is test pricing and the offer is not formalized.
 * Kept off titles and meta descriptions. Removed from these files once that note in truth.md changes.
 */
const TEST_PRICE_NOTE = 'That figure is test pricing, and the offer is not yet formalized.';

/**
 * @param {string} html
 * @param {string} pathname
 * @param {{ site: string | URL, noindexPathnames: Set<string> }} options
 */
export function pageFromHtml(html, pathname, options) {
	const path = normalizePathname(pathname);
	const mainHtml = extractMain(html);
	const converted = htmlToMarkdown(mainHtml, options);
	const split = splitLeadingH1(converted);
	const outsideH1 = (() => {
		const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
		return match ? stripTags(match[1]) : '';
	})();
	const heading = split.heading || outsideH1;
	let body = split.body;
	if (path === '/knowledge' && !/\/knowledge\/[^)\s]+/.test(body)) {
		body = body ? `${body}\n\n${UNPUBLISHED_KNOWLEDGE}` : UNPUBLISHED_KNOWLEDGE;
	}
	const price = path === '/' ? priceText(mainHtml) : '';
	if (price) body = body ? `${body}\n\n${TEST_PRICE_NOTE}` : TEST_PRICE_NOTE;

	const description = metaContent(html, 'description');
	const canonical = canonicalUrl(path, options.site);
	const chunks = [`# ${heading || plainText(description) || path}`, '', `Canonical: ${canonical}`, ''];
	if (description && plainText(description) !== plainText(heading)) chunks.push(description, '');
	if (body) chunks.push(body, '');
	const markdown = `${chunks.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;

	return {
		pathname: path,
		heading,
		plainHeading: plainText(heading),
		description,
		canonical,
		markdownPath: markdownPathname(path),
		markdown,
		offerHeading: path === '/' ? firstHeading(mainHtml, 2) : '',
		offerBody: path === '/' ? firstBodyParagraph(mainHtml) : '',
		price,
		expertise: path === '/' ? expertiseItems(mainHtml) : [],
		footerLinks: footerLinks(html),
	};
}

/**
 * @param {ReturnType<typeof pageFromHtml>} page
 */
function linkLabel(page) {
	return PAGE_LABELS[page.pathname] ?? (page.plainHeading || page.pathname);
}

/**
 * @param {ReturnType<typeof pageFromHtml>[]} pages
 */
function sortPages(pages) {
	const rank = { '/': 0, '/work': 1, '/info': 2, '/knowledge': 3 };
	return [...pages].sort((a, b) => {
		const ra = rank[a.pathname] ?? (a.pathname.startsWith('/knowledge/') ? 4 : 5);
		const rb = rank[b.pathname] ?? (b.pathname.startsWith('/knowledge/') ? 4 : 5);
		if (ra !== rb) return ra - rb;
		return a.plainHeading.localeCompare(b.plainHeading) || a.pathname.localeCompare(b.pathname);
	});
}

/**
 * @param {ReturnType<typeof pageFromHtml>} page
 */
function listItem(page, site) {
	const href = absoluteUrl(page.markdownPath, site);
	const notes = page.description.replace(/\s+/g, ' ').trim();
	const label = linkLabel(page).replaceAll(']', '\\]');
	if (!notes) return `- [${label}](${href})`;
	return `- [${label}](${href}): ${notes}`;
}

/**
 * llms.txt (https://llmstxt.org/). H1, one-line blockquote, detail paragraphs, then H2 file lists.
 * File-list links are Markdown alternates of indexable pages only.
 *
 * @param {ReturnType<typeof pageFromHtml>[]} pages
 * @param {string | URL} site
 */
export function renderLlmsTxt(pages, site) {
	const ordered = sortPages(pages);
	const home = ordered.find((page) => page.pathname === '/');
	const info = ordered.find((page) => page.pathname === '/info');
	const articles = ordered.filter((page) => page.pathname.startsWith('/knowledge/'));
	const staticPages = ordered.filter((page) => !page.pathname.startsWith('/knowledge/'));

	const studio = (home?.plainHeading || 'Amoeba is a design engineering studio for ambitious B2B software companies').replace(
		/\.$/,
		'',
	);
	const who = info?.plainHeading.replace(/\.$/, '') ?? '';
	const runBy = who.replace(/^Amoeba is run by\s+/i, '');
	const summary =
		runBy && runBy !== who ? `${studio}, run by ${runBy}.` : who ? `${studio}. ${who}.` : `${studio}.`;

	/** @type {string[]} */
	const details = [];
	if (home?.offerHeading && home.offerBody) {
		let offer = `The published offer is ${home.offerHeading}: ${home.offerBody}`;
		if (home.price) offer += ` The homepage shows this at ${home.price}. ${TEST_PRICE_NOTE}`;
		details.push(offer);
	}
	if (home && home.expertise.length > 0) {
		details.push(`Expertise named on the homepage: ${joinList(home.expertise)}.`);
	}
	const profiles = home?.footerLinks.filter((link) => link.text && link.href) ?? [];
	if (profiles.length > 0) {
		const linked = profiles.map((link) => `[${link.text}](${link.href})`);
		details.push(`Profiles linked from the site: ${joinList(linked)}.`);
	}
	details.push(
		'The list below is every indexable page, as Markdown. Pages with `noindex` in frontmatter, including unpublished knowledge articles, are left out. Those Markdown URLs are not in the sitemap. Responses for them send `X-Robots-Tag: noindex`, and robots.txt still allows the crawl. Cite the canonical HTML URL.',
	);

	const sections = [`# Amoeba`, '', `> ${summary}`, '', details.join('\n\n'), '', '## Pages', '', staticPages.map((page) => listItem(page, site)).join('\n')];
	if (articles.length > 0) {
		sections.push('', '## Knowledge', '', articles.map((page) => listItem(page, site)).join('\n'));
	}
	sections.push(
		'',
		'## Optional',
		'',
		`- [All indexable pages](${absoluteUrl('/llms-full.txt', site)}): The pages above, in one file.`,
		'',
	);
	return sections.join('\n');
}

/**
 * @param {string} llmsTxt
 * @param {ReturnType<typeof pageFromHtml>[]} pages
 */
export function renderLlmsFull(llmsTxt, pages) {
	const parts = [llmsTxt.trim(), ...sortPages(pages).map((page) => page.markdown.trim())];
	return `${parts.join('\n\n---\n\n')}\n`;
}

/**
 * @param {{ pathname: string, html: string }[]} htmlPages
 * @param {{ site: string | URL, noindexPathnames: Set<string> }} options
 */
export function buildAiDocuments(htmlPages, options) {
	/** @type {ReturnType<typeof pageFromHtml>[]} */
	const pages = [];
	let skipped = 0;
	for (const entry of htmlPages) {
		const pathname = normalizePathname(entry.pathname);
		if (pathname === '/404') {
			skipped += 1;
			continue;
		}
		if (options.noindexPathnames.has(pathname) || hasNoindexMeta(entry.html)) {
			skipped += 1;
			continue;
		}
		pages.push(pageFromHtml(entry.html, pathname, options));
	}
	const ordered = sortPages(pages);
	const llmsTxt = renderLlmsTxt(ordered, options.site);
	const llmsFull = renderLlmsFull(llmsTxt, ordered);
	/** @type {Map<string, string>} */
	const files = new Map();
	files.set('/llms.txt', llmsTxt.endsWith('\n') ? llmsTxt : `${llmsTxt}\n`);
	files.set('/llms-full.txt', llmsFull);
	for (const page of ordered) files.set(page.markdownPath, page.markdown);
	return { files, pages: ordered, skipped };
}
