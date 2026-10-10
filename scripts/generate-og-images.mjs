/**
 * Renders public/og.png (1200×630) with Chromium so share art uses the same
 * typefaces as the live masthead (HEX Franklin + Acumin VF).
 *
 * - HEX Franklin: self-hosted woff2 from public/fonts/ (same as fonts.css).
 * - Acumin VF: fetched at generate time from the Adobe Fonts kit URL in
 *   public/fonts/acumin-variable.css (web license; bytes are not committed).
 */
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const LEDE =
	"Amoeba is a design engineering studio for ambitious B2B software companies.";
const OFFER = "Rent a design engineer • $500/wk";

/** From public/fonts/acumin-variable.css — not committed, only requested when generating. */
const ACUMIN_WOFF2 =
	"https://use.typekit.net/af/cd27bb/0000000000000000774be2a6/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3";

const html = `<!DOCTYPE html>
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
    font-size: 120px;
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
    gap: 24px;
    max-width: 580px;
  }
  .rule {
    width: 80px;
    height: 3px;
    background: oklch(55.6% 0 0);
  }
  .masthead-lede {
    font-weight: 400;
    font-size: 26px;
    letter-spacing: -0.03em;
    line-height: 100%;
    max-width: 451px;
    text-wrap: wrap;
    color: oklch(98.5% 0 0);
  }
  .offer {
    font-weight: 400;
    font-size: 26px;
    letter-spacing: -0.03em;
    line-height: 100%;
    color: oklch(98.5% 0 0);
  }
</style>
</head>
<body>
  <div class="frame">
    <span class="type-logotype">Amoeba</span>
    <div class="bottom">
      <div class="rule" aria-hidden="true"></div>
      <p class="masthead-lede">${LEDE}</p>
      <p class="offer">${OFFER}</p>
    </div>
  </div>
</body>
</html>`;

async function startServer() {
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
				res.end(html);
				return;
			}
			res.writeHead(404);
			res.end();
		});
		server.listen(0, "127.0.0.1", () => resolve(server));
	});
}

const server = await startServer();
const { port } = server.address();

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: WIDTH, height: HEIGHT },
	deviceScaleFactor: 1,
});

await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
await page.evaluate(async () => {
	await document.fonts.load('800 120px "HEX Franklin v0.3 Variable"');
	await document.fonts.load('400 26px "acumin-variable"');
	await document.fonts.ready;
});

const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
await browser.close();
server.close();

const outPath = join(root, "public/og.png");
await writeFile(outPath, png);
console.log(`Wrote public/og.png (${png.length} bytes)`);
