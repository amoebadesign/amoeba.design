export const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/work", label: "Work" },
	{ href: "/info", label: "Info" },
	{ href: "/knowledge", label: "Knowledge" },
] as const;

export function isActive(pathname: string, href: string) {
	const path = pathname.replace(/\/$/, "") || "/";
	return href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
}
