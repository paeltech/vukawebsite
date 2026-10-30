import Parser from 'rss-parser';
import { getMediumRouteFromTags, mediumTagsToSiteTags } from '@/lib/tags';
import type { MediumRoute } from '@/lib/tags';

export interface MediumPost {
  slug: string;
  title: string;
  excerpt: string;
  pubDate: Date;
  link: string;
  route: MediumRoute;
  tags: string[];
  siteTags: string[];
  content?: string;
}

const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: ['content:encoded', 'dc:creator'],
  },
});

function slugFromLink(link: string): string {
  try {
    const pathname = new URL(link).pathname;
    const segment = pathname.split('/').filter(Boolean).pop();
    return segment ?? 'untitled';
  } catch {
    return 'untitled';
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Remove stock-photo attribution lines Medium prepends to RSS snippets */
const PHOTO_CREDIT_PATTERN =
  /(?:Photo|Image|Cover(?:\s+image)?)\s+by\s+[^.!?\n<]+?\s+on\s+(?:Unsplash|Pexels|Pixabay)(?:\.com)?\.?/gi;

function stripPhotoCredits(text: string): string {
  return text.replace(PHOTO_CREDIT_PATTERN, '').replace(/\s+/g, ' ').trim();
}

function firstSubstantialParagraph(html: string): string {
  const paragraphs = html.match(/<p[^>]*>[\s\S]*?<\/p>/gi) ?? [];
  for (const paragraph of paragraphs) {
    const text = stripPhotoCredits(stripHtml(paragraph));
    if (text.length >= 20) return text;
  }
  return '';
}

function buildExcerpt(contentSnippet: string | undefined, html: string | undefined): string {
  const source = firstSubstantialParagraph(html ?? '') || contentSnippet || stripHtml(html ?? '');
  const cleaned = stripPhotoCredits(source).replace(/\s+/g, ' ').trim();
  if (cleaned.length <= 220) return cleaned;
  const sentences = cleaned.match(/[^.!?]+[.!?]+(?:[”’"']|$|\s)/g) ?? [];
  let summary = '';
  for (const sentence of sentences) {
    if ((summary + sentence).trim().length > 220) break;
    summary += sentence;
  }
  return summary.trim().length >= 50 ? summary.trim() : `${cleaned.slice(0, 219).replace(/\s+\S*$/, '').trim()}…`;

}

function getRssUrl(username: string): string {
  const override = import.meta.env.MEDIUM_RSS_URL;
  if (override) return override;
  return `https://medium.com/feed/@${username.replace(/^@/, '')}`;
}

/**
 * Fetches Medium posts via RSS at build time.
 * Requires MEDIUM_USERNAME in environment (see .env.example).
 */
async function loadMediumPosts(): Promise<MediumPost[]> {
  const username = import.meta.env.MEDIUM_USERNAME;
  if (!username) {
    console.warn('[medium] MEDIUM_USERNAME not set — skipping RSS fetch.');
    return [];
  }

  try {
    const feed = await parser.parseURL(getRssUrl(username));

    return (feed.items ?? [])
      .map((item): MediumPost | null => {
        const categories = (item.categories ?? []).map(String);
        const route = getMediumRouteFromTags(categories);
        if (!route) return null;

        const content = item['content:encoded'] as string | undefined;
        const excerpt = buildExcerpt(item.contentSnippet, content);

        return {
          slug: slugFromLink(item.link ?? ''),
          title: item.title ?? 'Untitled',
          excerpt,
          pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
          link: item.link ?? '',
          route,
          tags: categories,
          siteTags: mediumTagsToSiteTags(categories),
          content,
        } satisfies MediumPost;
      })
      .filter((post): post is MediumPost => post !== null)
      .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  } catch (error) {
    if (import.meta.env.PROD) {
      throw new Error('Medium feed unavailable. Build stopped to preserve published article routes.', { cause: error });
    }
    console.warn('[medium] Failed to fetch RSS feed:', error);
    return [];
  }
}

export async function getMediumPostsByRoute(route: MediumRoute): Promise<MediumPost[]> {
  const posts = await fetchMediumPosts();
  return posts.filter((post) => post.route === route);
}

// Reuse one feed snapshot across page generation, including concurrent requests.
let feedSnapshot: Promise<MediumPost[]> | undefined;
let snapshotExpiresAt = 0;
export function fetchMediumPosts(): Promise<MediumPost[]> {
  if (!feedSnapshot || Date.now() >= snapshotExpiresAt) {
    snapshotExpiresAt = Date.now() + 5 * 60 * 1000;
    feedSnapshot = loadMediumPosts();
  }
  return feedSnapshot;
}
