/**
 * Renders share PNGs with Chromium (local dev / CI with Playwright only).
 * Committed files under public/og/ and public/og.png — Vercel build does not run this.
 */
import { createServer } from "node:http";
import { mkdirSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { ogPublicFile } from "../src/og/image-path.mjs";
import { getAllOgPages, stripBrandSuffix } from "../src/og/pages.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
/** From public/fonts/acumin-variable.css — fetched at generate time only. */
const ACUMIN_WOFF2 =
	"https://use.typekit.net/af/cd27bb/0000000000000000774be2a6/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3";

function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function buildHtml({ headline, subtitle }) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: "HEX Franklin v0.3 Variable";
    src: url("/fonts/hex-franklin-variable.woff2") format("woff2");
    font-weight: 1 1000;
    font-stretch: 60% 120%;
    font-style: normal;
  }
  @font-face {
    font-family: "acumin-variable";
    src: url("${ACUMIN_WOFF2}") format("woff2");
    font-weight: 100 900;
    font-style: normal;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background: oklch(14.5% 0 0);
    color: oklch(98.5% 0 0);
    font-family: "acumin-variable", system-ui, sans-serif;
  }
  .frame {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 72px 80px;
    border: 3px solid oklch(37.1% 0 0);
  }
  .type-logotype {
    display: inline-flex;
    align-items: center;
    font-family: "HEX Franklin v0.3 Variable", "acumin-variable", sans-serif;
    font-size: 100px;
    font-weight: 800;
    font-stretch: 70%;
    font-variation-settings: "wdth" 70, "wght" 800;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: oklch(98.5% 0 0);
  }
  .bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 840px;
  }
  .page-title {
    font-weight: 700;
    font-size: 44px;
    letter-spacing: -0.03em;
    line-height: 1.05;
    text-wrap: balance;
    color: oklch(98.5% 0 0);
  }
  .subtitle {
    font-weight: 400;
    font-size: 34px;
    letter-spacing: -0.03em;
    line-height: 1.12;
    max-width: 780px;
    text-wrap: pretty;
    color: oklch(98.5% 0 0);
  }
</style>
</head>
<body>
  <div class="frame">
    <span class="type-logotype">Amoeba</span>
    <div class="bottom">
      <p class="page-title">${escapeHtml(headline)}</p>
      <p class="subtitle">${escapeHtml(subtitle)}</p>
    </div>
  </div>
</body>
</html>`;
}

async function startServer(getHtml) {
	const hexPath = join(root, "public/fonts/hex-franklin-variable.woff2");
	const hexBytes = await readFile(hexPath);

	return new Promise((resolve) => {
		const server = createServer((req, res) => {
			if (req.url === "/fonts/hex-franklin-variable.woff2") {
				res.writeHead(200, {
					"Content-Type": "font/woff2",
					"Access-Control-Allow-Origin": "*",
				});
				res.end(hexBytes);
				return;
			}
			if (req.url === "/" || req.url === "/index.html") {
				res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
				res.end(getHtml());
				return;
			}
			res.writeHead(404);
			res.end();
		});
		server.listen(0, "127.0.0.1", () => resolve(server));
	});
}

const pages = getAllOgPages(root);
/** @type {string | null} */
let currentHtml = null;

const server = await startServer(() => currentHtml ?? "");
const { port } = server.address();

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: WIDTH, height: HEIGHT },
	deviceScaleFactor: 1,
});

/** @type {Buffer | null} */
let homePng = null;

for (const entry of pages) {
	const headline = stripBrandSuffix(entry.title);
	const subtitle = entry.description;
	currentHtml = buildHtml({ headline, subtitle });

	await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
	await page.evaluate(async () => {
		await document.fonts.load('800 100px "HEX Franklin v0.3 Variable"');
		await document.fonts.load('700 44px "acumin-variable"');
		await document.fonts.load('400 34px "acumin-variable"');
		await document.fonts.ready;
	});

	const png = await page.screenshot({
		type: "png",
		clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
	});

	const rel = ogPublicFile(entry.pathname);
	const outPath = join(root, "public", rel);
	mkdirSync(dirname(outPath), { recursive: true });
	await writeFile(outPath, png);
	console.log(`Wrote public/${rel} (${png.length} bytes)`);

	if (entry.pathname === "/") homePng = png;
}

await browser.close();
server.close();

if (homePng) {
	await writeFile(join(root, "public/og.png"), homePng);
	console.log(`Wrote public/og.png (${homePng.length} bytes)`);
}

console.log(`Generated ${pages.length} page image(s) + default og.png.`);
