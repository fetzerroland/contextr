import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    segment: z.string(),
    package: z.enum(['Kontext-Analyse', 'Kontext + Aufbau', 'Vollsystem']),
    date: z.date(),
    summary: z.string(),
    results: z.array(z.string()).optional(),
    testimonial: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    package: z.enum(['Kontext-Analyse', 'Kontext + Aufbau', 'Vollsystem']).optional(),
    date: z.date(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'blog': blog,
  'testimonials': testimonials,
};
