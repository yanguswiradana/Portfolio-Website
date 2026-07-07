import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'id']),
    summary: z.string(),
    publishedDate: z.string(),
    coverImage: z.string().optional(),
    content: z.any(), // Keystatic document node tree
  }),
});

export const collections = {
  posts: postsCollection,
};
