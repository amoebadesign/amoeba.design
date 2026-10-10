export const chromes = [
	{ slug: "inline", label: "Inline (current)" },
	{ slug: "hidey", label: "Scroll-hiding row" },
	{ slug: "collapse", label: "Large-title collapse" },
	{ slug: "pill", label: "Floating pill" },
	{ slug: "overlay", label: "Full-screen menu" },
	{ slug: "sheet", label: "Bottom sheet" },
] as const;

export type ChromeSlug = (typeof chromes)[number]["slug"];

export const productionChrome: ChromeSlug = "inline";

// Vercel exposes VERCEL_ENV at build time; CHROME_JIG=1 forces the jig into a local build.
export const jigEnabled =
	import.meta.env.DEV ||
	process.env.VERCEL_ENV === "preview" ||
	process.env.CHROME_JIG === "1";

export const shipsChrome = (slug: ChromeSlug) => jigEnabled || productionChrome === slug;
