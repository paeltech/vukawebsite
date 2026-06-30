import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '@/config/site';

export type PortfolioEntry = CollectionEntry<'portfolio'>;

/** Normalise collection id to URL slug (strips .mdx if present) */
export function portfolioSlug(entry: PortfolioEntry): string {
  return entry.id.replace(/\.mdx?$/i, '');
}

export async function getPublishedPortfolio(): Promise<PortfolioEntry[]> {
  if (!siteConfig.portfolioEnabled) {
    return [];
  }

  const entries = await getCollection('portfolio', ({ data }) => data.published);

  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }
    return a.data.title.localeCompare(b.data.title);
  });
}

export async function getFeaturedPortfolio(): Promise<PortfolioEntry | null> {
  const published = await getPublishedPortfolio();
  return published.find((entry) => entry.data.featured) ?? published[0] ?? null;
}

export async function getPortfolioEntry(slug: string): Promise<PortfolioEntry | undefined> {
  if (!siteConfig.portfolioEnabled) {
    return undefined;
  }

  const entries = await getPublishedPortfolio();
  return entries.find((entry) => portfolioSlug(entry) === slug);
}

export async function getPortfolioSlugs(): Promise<string[]> {
  const entries = await getPublishedPortfolio();
  return entries.map((entry) => portfolioSlug(entry));
}

export function isPortfolioEnabled(): boolean {
  return siteConfig.portfolioEnabled;
}

/** First sentence for card teasers — full summary stays on the venture page */
export function portfolioTeaser(summary: string): string {
  const normalized = summary.replace(/\s+/g, ' ').trim();
  const firstSentence = normalized.match(/^[^.!?]+[.!?]/)?.[0]?.trim();
  return firstSentence ?? normalized;
}

export type PortfolioAudience = 'founders' | 'corporates' | 'government' | 'investors' | 'partners';

export async function getPortfolioForAudience(audience: PortfolioAudience): Promise<PortfolioEntry[]> {
  const published = await getPublishedPortfolio();
  return published.filter((entry) => entry.data.audiences?.includes(audience));
}
