/**
 * Post-`astro build` fixes for the Vercel serverless bundle.
 */
import { readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const funcRoot = join(root, ".vercel/output/functions/_render.func");

const entryPath = join(funcRoot, ".vercel/output/server/entry.mjs");

function stripRolldownImport() {
	let source;
	try {
		source = readFileSync(entryPath, "utf8");
	} catch {
		console.warn("vercel-postbuild: server entry not found, skipping rolldown strip");
		return;
	}

	const stripped = source.replace(/^import "rolldown";\r?\n/m, "");
	if (stripped === source) {
		console.warn("vercel-postbuild: no rolldown import in server entry");
		return;
	}

	writeFileSync(entryPath, stripped);
	console.log("vercel-postbuild: removed spurious rolldown import");
}

/** Remove native image tooling the contact function does not need (saves NFT copy time and deploy size). */
function pruneFunctionDeps() {
	const relDirs = [
		"node_modules/sharp",
		"node_modules/@img",
		"node_modules/rolldown",
		"node_modules/@rolldown",
	];
	for (const rel of relDirs) {
		rmSync(join(funcRoot, rel), { recursive: true, force: true });
	}

	const serverChunks = join(funcRoot, ".vercel/output/server/chunks");
	for (const name of listDir(serverChunks)) {
		if (name.startsWith("sharp_") && name.endsWith(".mjs")) {
			rmSync(join(serverChunks, name), { force: true });
		}
	}

	console.log("vercel-postbuild: pruned sharp / @img / rolldown from serverless bundle");
}

/** @param {string} dir */
function listDir(dir) {
	try {
		return readdirSync(dir);
	} catch {
		return [];
	}
}

stripRolldownImport();
pruneFunctionDeps();
