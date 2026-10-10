// Page routes (not knowledge entries) that are still stubs. They emit `noindex, follow`
// and astro.config.mjs drops them from the sitemap. Remove a path here to publish it.
// Knowledge entries use `noindex: true` in their frontmatter instead.
export const noindexRoutes = new Set([
	"/compare/design-engineer-vs-product-designer-vs-frontend-engineer",
	"/compare/rent-a-design-engineer-vs-hiring",
]);
