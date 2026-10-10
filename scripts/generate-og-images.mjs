/**
 * Build-time Open Graph images (1200×630) for amoeba.design.
 *
 * Logotype: Libre Franklin 800 (@fontsource) — HEX Franklin VF in the repo uses CFF2 outlines
 *   that satori/opentype cannot embed; Libre Franklin is the closest open substitute for the mark.
 * Body: Source Sans 3 (@fontsource) — stand-in for Acumin (Adobe web license; not embeddable here).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { decompress } from "wawoff2";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const LEDE =
	"Amoeba is a design engineering studio for ambitious B2B software companies.";

const palette = {
	white: "#ffffff",
	black: "#000000",
	neutral50: "oklch(98.5% 0 0)",
	neutral100: "oklch(97% 0 0)",
	neutral300: "oklch(87% 0 0)",
	neutral500: "oklch(55.6% 0 0)",
	neutral700: "oklch(37.1% 0 0)",
	neutral950: "oklch(14.5% 0 0)",
	green50: "oklch(98.2% 0.018 155.826)",
	green200: "oklch(92.5% 0.084 155.995)",
	green950: "oklch(26.6% 0.065 152.934)",
	green1000: "oklch(20% 0.045 152.934)",
	pink400: "oklch(71.8% 0.202 349.761)",
	yellow300: "oklch(90.5% 0.182 98.111)",
};

async function loadFont(path) {
	const woff2 = readFileSync(path);
	return Buffer.from(await decompress(woff2));
}

const libreFranklin = await loadFont(
	join(
		root,
		"node_modules/@fontsource/libre-franklin/files/libre-franklin-latin-800-normal.woff2",
	),
);
const sourceSans = await loadFont(
	join(root, "node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2"),
);

const fonts = [
	{
		name: "Libre Franklin",
		data: libreFranklin,
		weight: 800,
		style: "normal",
	},
	{
		name: "Source Sans 3",
		data: sourceSans,
		weight: 400,
		style: "normal",
	},
];

function logotype({ color, size = 88 }) {
	return {
		type: "div",
		props: {
			children: "Amoeba",
			style: {
				fontFamily: "Libre Franklin",
				fontSize: size,
				fontWeight: 800,
				letterSpacing: "-0.04em",
				textTransform: "uppercase",
				lineHeight: 1,
				color,
			},
		},
	};
}

function lede({ color, maxWidth = 560, fontSize = 34 }) {
	return {
		type: "div",
		props: {
			children: LEDE,
			style: {
				fontFamily: "Source Sans 3",
				fontSize,
				fontWeight: 400,
				letterSpacing: "-0.03em",
				lineHeight: 1.15,
				maxWidth,
				color,
				marginTop: 28,
			},
		},
	};
}

const options = {
	a: {
		type: "div",
		props: {
			style: {
				width: WIDTH,
				height: HEIGHT,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				padding: "80px",
				backgroundColor: palette.white,
			},
			children: {
				type: "div",
				props: {
					style: {
						display: "flex",
						flexDirection: "column",
					},
					children: [
						logotype({ color: palette.black, size: 96 }),
						{
							type: "div",
							props: {
								children: LEDE,
								style: {
									fontFamily: "Source Sans 3",
									fontSize: 34,
									fontWeight: 400,
									letterSpacing: "-0.03em",
									lineHeight: 1.15,
									maxWidth: 520,
									color: palette.black,
									marginTop: 32,
								},
							},
						},
					],
				},
			},
		},
	},
	b: {
		type: "div",
		props: {
			style: {
				width: WIDTH,
				height: HEIGHT,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "72px 80px",
				backgroundColor: palette.neutral950,
				border: `3px solid ${palette.neutral700}`,
				boxSizing: "border-box",
			},
			children: [
				logotype({ color: palette.neutral50, size: 80 }),
				{
					type: "div",
					props: {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 24,
						},
						children: [
							{
								type: "div",
								props: {
									style: {
										width: 80,
										height: 3,
										backgroundColor: palette.neutral500,
									},
								},
							},
							lede({ color: palette.neutral50, maxWidth: 580, fontSize: 32 }),
						],
					},
				},
			],
		},
	},
	c: {
		type: "div",
		props: {
			style: {
				width: WIDTH,
				height: HEIGHT,
				display: "flex",
				flexDirection: "row",
				backgroundColor: palette.green1000,
			},
			children: [
				{
					type: "div",
					props: {
						style: {
							width: 12,
							height: "100%",
							backgroundColor: palette.pink400,
						},
					},
				},
				{
					type: "div",
					props: {
						style: {
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							padding: "64px 80px 64px 68px",
						},
						children: [
							logotype({ color: palette.yellow300, size: 76 }),
							lede({ color: palette.green50, maxWidth: 600, fontSize: 33 }),
							{
								type: "div",
								props: {
									children: "amoeba.design",
									style: {
										fontFamily: "Source Sans 3",
										fontSize: 18,
										fontWeight: 400,
										letterSpacing: "0.08em",
										textTransform: "uppercase",
										color: palette.green200,
										marginTop: 40,
									},
								},
							},
						],
					},
				},
			],
		},
	},
};

async function renderOption(key, element) {
	const svg = await satori(element, {
		width: WIDTH,
		height: HEIGHT,
		fonts,
	});
	const resvg = new Resvg(svg, {
		fitTo: { mode: "width", value: WIDTH },
	});
	const png = resvg.render().asPng();
	return png;
}

const outDir = join(root, "public/og-options");
mkdirSync(outDir, { recursive: true });

for (const [key, element] of Object.entries(options)) {
	const png = await renderOption(key, element);
	const filename = `option-${key}.png`;
	writeFileSync(join(outDir, filename), png);
	console.log(`Wrote public/og-options/${filename} (${png.length} bytes)`);
}
