import { defineCollection, z } from 'astro:content';

const apps = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    category: z.string(),
    platform: z.string(),
    repo: z.string(),
    releaseTag: z.string(),
    downloadUrl: z.string(),
    sizeBytes: z.number(),
    sha256: z.string(),
    requires: z.string(),
    license: z.string(),
    author: z.object({ name: z.string(), url: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subhead: z.string(),
    }),
    pillars: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        snippet: z.string().optional(),
      })
    ),
    secondaryFeatures: z.array(z.string()),
    positioningQuote: z.string(),
    installSteps: z.array(z.string()),
    fullFeatureList: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
    screenshots: z.array(
      z.object({
        file: z.string(),
        title: z.string(),
        caption: z.string(),
        section: z.string(),
      })
    ),
    icon: z.string(),
  }),
});

export const collections = { apps };
