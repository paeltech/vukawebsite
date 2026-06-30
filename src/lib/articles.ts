import { staticThesisEssays, type StaticEssay } from '@/data/copy/thesis';
import { sanitizeArticleHtml } from '@/lib/article-content';
import { fetchMediumPosts, type MediumPost } from '@/lib/medium';
import type { ArticleCardData } from '@/components/sections/ArticleCard.astro';

export interface Article extends ArticleCardData {
  paragraphs?: string[];
  canonicalUrl?: string;
  siteTags: string[];
  contentHtml?: string;
}

function staticToArticle(essay: StaticEssay, basePath: string): Article {
  return {
    slug: essay.slug,
    title: essay.title,
    excerpt: essay.excerpt,
    date: essay.date,
    tag: essay.tag,
    href: `${basePath}/${essay.slug}`,
    featured: essay.featured,
    comingSoon: essay.comingSoon,
    paragraphs: essay.paragraphs,
    canonicalUrl: essay.canonicalUrl,
    siteTags: [essay.tag],
  };
}

function mediumToArticle(post: MediumPost, basePath: string): Article {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.pubDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    tag: post.siteTags[0] ?? 'Essay',
    href: `${basePath}/${post.slug}`,
    siteTags: post.siteTags.length ? post.siteTags : ['Essay'],
    canonicalUrl: post.link,
    contentHtml: post.content ? sanitizeArticleHtml(post.content, post.title) : undefined,
  };
}

function mergeArticles(staticEssays: StaticEssay[], mediumPosts: MediumPost[], basePath: string): Article[] {
  const map = new Map<string, Article>();

  for (const essay of staticEssays) {
    map.set(essay.slug, staticToArticle(essay, basePath));
  }

  for (const post of mediumPosts) {
    const existing = map.get(post.slug);
    const fromMedium = mediumToArticle(post, basePath);
    map.set(post.slug, existing ? { ...existing, ...fromMedium, featured: existing.featured } : fromMedium);
  }

  return [...map.values()].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export async function getThesisArticles(): Promise<Article[]> {
  const medium = (await fetchMediumPosts()).filter((p) => p.route === 'thesis');
  return mergeArticles(staticThesisEssays, medium, '/our-thesis');
}

export async function getJournalArticles(): Promise<Article[]> {
  const medium = (await fetchMediumPosts()).filter((p) => p.route === 'journal');
  return mergeArticles([], medium, '/studio-journal');
}

export async function getArticleBySlug(
  slug: string,
  route: 'thesis' | 'journal',
): Promise<Article | undefined> {
  const articles = route === 'thesis' ? await getThesisArticles() : await getJournalArticles();
  return articles.find((a) => a.slug === slug);
}

export async function getAllArticleSlugs(route: 'thesis' | 'journal'): Promise<string[]> {
  const articles = route === 'thesis' ? await getThesisArticles() : await getJournalArticles();
  return articles.filter((a) => !a.comingSoon).map((a) => a.slug);
}
