/** Site filter tags — mapped from Medium publication tags */
export const thesisTags = [
  'All',
  'Studio model',
  'Infrastructure',
  'AI & tools',
  'East Africa',
  'Government & public sector',
] as const;

export const journalTags = [
  'All',
  'Studio model',
  'Corporate innovation',
  'Infrastructure',
  'AI & tools',
  'East Africa',
  'Founder stories',
  'Government & public sector',
] as const;

export type ThesisTag = (typeof thesisTags)[number];
export type JournalTag = (typeof journalTags)[number];

/** Medium publication tags that route content to site sections — never shown as content tags */
export const mediumRouteTags = {
  thesis: 'thesis',
  journal: 'journal',
} as const;

export type MediumRoute = keyof typeof mediumRouteTags;

const ROUTE_TAGS = new Set(Object.values(mediumRouteTags));

/** Known Medium tag slugs → site display labels */
const MEDIUM_TAG_ALIASES: Record<string, string> = {
  'studio model': 'Studio model',
  'studio-model': 'Studio model',
  infrastructure: 'Infrastructure',
  'ai & tools': 'AI & tools',
  'ai-and-tools': 'AI & tools',
  'ai tools': 'AI & tools',
  'east africa': 'East Africa',
  'east-africa': 'East Africa',
  'founder stories': 'Founder stories',
  'founder-stories': 'Founder stories',
  'government & public sector': 'Government & public sector',
  'government and public sector': 'Government & public sector',
  'government-and-public-sector': 'Government & public sector',
  'corporate innovation': 'Corporate innovation',
  'corporate-innovation': 'Corporate innovation',
};

function titleCaseFromSlug(slug: string): string {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function mapMediumTagToSiteTag(mediumTag: string): string | null {
  const raw = mediumTag.trim();
  if (!raw) return null;

  const normalised = raw.toLowerCase();
  if (ROUTE_TAGS.has(normalised)) return null;

  const alias = MEDIUM_TAG_ALIASES[normalised];
  if (alias) return alias;

  // Medium often uses kebab-case topic tags not in our alias table
  if (raw.includes('-') || raw.includes('_')) {
    return titleCaseFromSlug(raw);
  }

  return null;
}

/** Map all Medium categories to unique site tags (excludes thesis/journal route tags). */
export function mediumTagsToSiteTags(categories: string[]): string[] {
  const seen = new Set<string>();
  const tags: string[] = [];

  for (const category of categories) {
    const mapped = mapMediumTagToSiteTag(category);
    if (mapped && !seen.has(mapped)) {
      seen.add(mapped);
      tags.push(mapped);
    }
  }

  return tags;
}

export function getMediumRouteFromTags(tags: string[]): MediumRoute | null {
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.includes(mediumRouteTags.thesis)) return 'thesis';
  if (lower.includes(mediumRouteTags.journal)) return 'journal';
  return null;
}
