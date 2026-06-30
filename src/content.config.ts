import { defineCollection, z } from 'astro:content';

const portfolioSectors = [
  'B2B Infrastructure & Fintech',
  'Applied AI',
  'Climate & Energy Access',
  'Government Digital Services',
  'Applied Technology',
] as const;

const portfolioPathways = [
  'studio-origination',
  'founder-in-residence',
  'corporate-spinout',
  'government-innovation',
] as const;

const portfolioAudiences = [
  'founders',
  'corporates',
  'government',
  'investors',
  'partners',
] as const;

const clientLogoSchema = z.object({
  name: z.string(),
  src: z.string(),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sector: z.enum(portfolioSectors),
    sectorLabel: z.string().optional(),
    pathway: z.enum(portfolioPathways),
    stage: z.string(),
    summary: z.string(),
    logo: z.string(),
    logoDark: z.string().optional(),
    clientLogos: z.array(clientLogoSchema).optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(false),
    order: z.number().default(0),
    /** Audience routes where this venture is relevant proof */
    audiences: z.array(z.enum(portfolioAudiences)).default([]),
  }),
});

export const collections = { portfolio };

export { portfolioSectors, portfolioPathways, portfolioAudiences };
