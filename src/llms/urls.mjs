/**
 * URL helpers shared by the document head and the build-time llms generator.
 * Extensionless routes use `/{route}.md`. The homepage uses `/index.md`
 * (llms.txt: a URL with no filename appends `index.md`).
 */

/** @param {string} pathname */
export function normalizePathname(pathname) {
	if (!pathname) return '/';
	let path = pathname.split('?')[0].split('#')[0];
	if (path.endsWith('/index.html')) path = path.slice(0, -'/index.html'.length);
	else if (path.endsWith('.html')) path = path.slice(0, -'.html'.length);
	if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
	if (!path.startsWith('/')) path = `/${path}`;
	return path || '/';
}

/** @param {string} pathname */
export function markdownPathname(pathname) {
	const path = normalizePathname(pathname);
	if (path === '/') return '/index.md';
	return `${path}.md`;
}

/** @param {string | URL} site */
export function siteOrigin(site) {
	return new URL(site).origin;
}

/**
 * HTML canonical. Homepage keeps the trailing slash; every other path omits it.
 *
 * @param {string} pathname
 * @param {string | URL} site
 */
export function canonicalUrl(pathname, site) {
	const origin = siteOrigin(site);
	const path = normalizePathname(pathname);
	if (path === '/') return `${origin}/`;
	return `${origin}${path}`;
}

/**
 * @param {string} pathname
 * @param {string | URL} site
 */
export function absoluteUrl(pathname, site) {
	return new URL(pathname, siteOrigin(site)).href;
}
