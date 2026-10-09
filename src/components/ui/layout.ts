/** Spacing steps. `space="4"` is `calc(var(--spacing) * 4)` (1rem). */
export const spacingKeys = [
	"0",
	"0.5",
	"1",
	"1.5",
	"2",
	"2.5",
	"3",
	"3.5",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"14",
	"16",
	"20",
	"24",
	"28",
	"32",
	"36",
	"40",
	"44",
	"48",
	"52",
	"56",
	"60",
	"64",
	"72",
	"80",
	"96",
] as const;

export type Spacing = (typeof spacingKeys)[number];

const spacingSet = new Set<string>(spacingKeys);

export function isSpacing(value: string): value is Spacing {
	return spacingSet.has(value);
}

export function toSpace(space: Spacing): string {
	return `calc(var(--spacing) * ${space})`;
}

/** Spacing step or CSS length. `"72"` is a step; `"20rem"` / `"50%"` / `"100svh"` pass through. */
export type Length = Spacing | (string & {});

export function toLength(value: Length): string {
	return isSpacing(value) ? toSpace(value) : value;
}

export const measures = {
	sm: "24rem",
	md: "28rem",
	lg: "32rem",
	xl: "36rem",
	"2xl": "42rem",
	"3xl": "48rem",
	"4xl": "56rem",
	"5xl": "64rem",
	"6xl": "72rem",
	"7xl": "80rem",
	prose: "65ch",
} as const;

export type Measure = keyof typeof measures | (string & {});

export function toMeasure(measure: Measure): string {
	return measure in measures ? measures[measure as keyof typeof measures] : measure;
}

export type Justify = "start" | "center" | "end" | "between";
export type Align = "start" | "center" | "end" | "baseline" | "stretch";
export type SplitAfter = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type SwitcherLimit = 2 | 3 | 4 | 5 | 6;

export const justifyMap: Record<Justify, string> = {
	start: "flex-start",
	center: "center",
	end: "flex-end",
	between: "space-between",
};

export const alignMap: Record<Align, string> = {
	start: "flex-start",
	center: "center",
	end: "flex-end",
	baseline: "baseline",
	stretch: "stretch",
};

/** Builds an inline style from layout custom properties, keeping any style the caller passed. */
export function layoutStyle(
	vars: Record<string, string | undefined>,
	style?: string | Record<string, unknown>,
): string | undefined {
	const declarations = Object.entries(vars)
		.filter(([, value]) => value !== undefined)
		.map(([property, value]) => `${property}: ${value}`);

	if (typeof style === "string" && style.trim()) {
		declarations.push(style.trim().replace(/;$/, ""));
	} else if (style && typeof style === "object") {
		for (const [property, value] of Object.entries(style)) {
			if (value === undefined || value === null) continue;
			const name = property.startsWith("--")
				? property
				: property.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
			declarations.push(`${name}: ${value}`);
		}
	}

	return declarations.length ? declarations.join("; ") : undefined;
}
