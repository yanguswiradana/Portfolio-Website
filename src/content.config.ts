import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '*.json',
    base: './src/content/posts',
    // Entry id = filename without extension (matches current post.id in URLs)
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'id']),
    summary: z.string(),
    publishedDate: z.string(),
    coverImage: z.string().optional(),
    githubUrl: z.string().optional(),
    content: z.any(), // Keystatic document node tree
  }),
});

export const collections = { posts };
