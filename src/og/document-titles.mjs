/** Short document titles for `{Title} • Amoeba` when the full H1 is longer than 60 chars with suffix. */
export const knowledgeDocumentTitles = {
	"How to use shadcn/lint to enforce your design system":
		"Use shadcn/lint to enforce your design system",
	"There's more to design engineering than microinteractions":
		"Design engineering beyond microinteractions",
};

/**
 * @param {string} fullTitle Frontmatter `title` on a knowledge entry.
 */
export function knowledgeDocumentTitle(fullTitle) {
	return knowledgeDocumentTitles[fullTitle] ?? fullTitle;
}
