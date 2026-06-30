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
  const plain = stripHtml(html ?? '');
  const candidates = [contentSnippet, plain].filter(Boolean) as string[];

  for (const candidate of candidates) {
    const cleaned = stripPhotoCredits(candidate);
    if (cleaned.length >= 20) return cleaned.slice(0, 280);
  }

  const fromHtml = firstSubstantialParagraph(html ?? '');
  if (fromHtml) return fromHtml.slice(0, 280);

  return stripPhotoCredits(candidates[0] ?? '').slice(0, 280);
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
export async function fetchMediumPosts(): Promise<MediumPost[]> {
  const username = import.meta.env.MEDIUM_USERNAME;
  if (!username) {
    console.warn('[medium] MEDIUM_USERNAME not set — skipping RSS fetch.');
    return [];
  }

  try {
    const feed = await parser.parseURL(getRssUrl(username));

    return (feed.items ?? [])
      .map((item) => {
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
    console.warn('[medium] Failed to fetch RSS feed:', error);
    return [];
  }
}

export async function getMediumPostsByRoute(route: MediumRoute): Promise<MediumPost[]> {
  const posts = await fetchMediumPosts();
  return posts.filter((post) => post.route === route);
}
