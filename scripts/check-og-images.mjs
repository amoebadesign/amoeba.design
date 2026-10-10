import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { getIndexableOgPages } from "../src/og/pages.mjs";
import { ogPublicFile } from "../src/og/image-path.mjs";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const publicDir = join(root, "public");

/** @type {string[]} */
const missing = [];

if (!existsSync(join(publicDir, "og.png"))) {
	missing.push("public/og.png (default fallback)");
}

for (const page of getIndexableOgPages(root)) {
	const rel = ogPublicFile(page.pathname);
	if (!existsSync(join(publicDir, rel))) {
		missing.push(`public/${rel} (${page.pathname})`);
	}
}

if (missing.length > 0) {
	console.error("Missing Open Graph PNG(s). Run `bun run generate:og` and commit the files:\n");
	for (const line of missing) console.error(`  - ${line}`);
	process.exit(1);
}

console.log(`OG images OK (${getIndexableOgPages(root).length} indexable pages + public/og.png).`);
