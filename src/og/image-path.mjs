import { getAllOgPathnames } from "./pages.mjs";

const known = new Set(getAllOgPathnames());

/**
 * Public URL path for a page's share image (under `public/`).
 *
 * @param {string} pathname Canonical pathname, e.g. `/work`.
 * @returns {string} Path beginning with `/`, e.g. `/og/work.png`.
 */
export function ogPublicPath(pathname) {
	const path = pathname.replace(/\/$/, "") || "/";
	if (!known.has(path)) return "/og.png";
	if (path === "/") return "/og/index.png";
	return `/og${path}.png`;
}

/**
 * File path relative to `public/` for a page's PNG.
 *
 * @param {string} pathname
 */
export function ogPublicFile(pathname) {
	const urlPath = ogPublicPath(pathname);
	return urlPath.slice(1);
}
