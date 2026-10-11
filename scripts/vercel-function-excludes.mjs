/**
 * Paths (relative to repo root) omitted from the Vercel serverless NFT copy.
 * Static pages already ship optimized images; `/api/contact` does not use them.
 */
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/** @param {string} dir */
function walkFiles(dir) {
	/** @type {string[]} */
	const files = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		const rel = full.slice(root.length + 1);
		if (statSync(full).isDirectory()) {
			files.push(...walkFiles(full));
		} else {
			files.push(rel);
		}
	}
	return files;
}

/** @param {string} relDir */
function filesUnder(relDir) {
	const abs = join(root, relDir);
	try {
		if (!statSync(abs).isDirectory()) return [];
		return walkFiles(abs);
	} catch {
		return [];
	}
}

const PACKAGE_ROOTS = [
	"node_modules/sharp",
	"node_modules/@img",
	"node_modules/rolldown",
	"node_modules/@rolldown",
];

export const vercelFunctionExcludeFiles = PACKAGE_ROOTS.flatMap(filesUnder);
