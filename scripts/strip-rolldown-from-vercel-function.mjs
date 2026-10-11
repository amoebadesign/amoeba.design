/**
 * @deprecated Use `scripts/vercel-postbuild.mjs` (invoked from `npm run build`).
 * Astro's Vercel server entry includes `import "rolldown"`, which pulls in native
 * bindings that are not bundled into `_render.func` on deploy and crashes cold start.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const entryPath = fileURLToPath(
	new URL('../.vercel/output/functions/_render.func/.vercel/output/server/entry.mjs', import.meta.url),
);

let source;
try {
	source = readFileSync(entryPath, 'utf8');
} catch {
	console.warn('strip-rolldown: Vercel function entry not found, skipping');
	process.exit(0);
}

const stripped = source.replace(/^import "rolldown";\r?\n/m, '');
if (stripped === source) {
	console.warn('strip-rolldown: no rolldown import found in server entry');
	process.exit(0);
}

writeFileSync(entryPath, stripped);
console.log('strip-rolldown: removed spurious rolldown import from Vercel server entry');
