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
  'Infrastructure',
  'AI & tools',
  'Studio model',
  'East Africa',
  'Founder stories',
  'Government & public sector',
] as const;

export type ThesisTag = (typeof thesisTags)[number];
export type JournalTag = (typeof journalTags)[number];

/** Medium publication tags that route content to site sections */
export const mediumRouteTags = {
  thesis: 'thesis',
  journal: 'journal',
} as const;

export type MediumRoute = keyof typeof mediumRouteTags;

export function mapMediumTagToSiteTag(mediumTag: string): string | null {
  const normalised = mediumTag.trim().toLowerCase();
  const mapping: Record<string, string> = {
    'studio model': 'Studio model',
    infrastructure: 'Infrastructure',
    'ai & tools': 'AI & tools',
    'east africa': 'East Africa',
    'founder stories': 'Founder stories',
    'government & public sector': 'Government & public sector',
  };
  return mapping[normalised] ?? null;
}

export function getMediumRouteFromTags(tags: string[]): MediumRoute | null {
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.includes(mediumRouteTags.thesis)) return 'thesis';
  if (lower.includes(mediumRouteTags.journal)) return 'journal';
  return null;
}
