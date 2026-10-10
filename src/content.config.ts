import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const knowledge = defineCollection({
	loader: glob({ base: './src/content/knowledge', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Set true while the body is still a stub. Flip to false to index the article.
		noindex: z.boolean().default(false),
		// ISO date (YYYY-MM-DD) once the body is a real article.
		published: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
	}),
});

export const collections = { knowledge };
