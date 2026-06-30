import { sanitizeArticleHtml } from '@/lib/article-content';
import { fetchMediumPosts, type MediumPost } from '@/lib/medium';
import type { ArticleCardData } from '@/components/sections/ArticleCard.astro';

export interface Article extends ArticleCardData {
  paragraphs?: string[];
  canonicalUrl?: string;
  siteTags: string[];
  contentHtml?: string;
  publishedAt?: Date;
}

function mediumToArticle(post: MediumPost, basePath: string, fallbackTag: string): Article {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.pubDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    tag: post.siteTags[0] ?? fallbackTag,
    href: `${basePath}/${post.slug}`,
    siteTags: post.siteTags,
    canonicalUrl: post.link,
    contentHtml: post.content ? sanitizeArticleHtml(post.content, post.title) : undefined,
    publishedAt: post.pubDate,
  };
}

function articlesFromMedium(posts: MediumPost[], basePath: string, fallbackTag: string): Article[] {
  return posts.map((post) => mediumToArticle(post, basePath, fallbackTag));
}

function sortByPublishedAt(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    const aTime = a.publishedAt?.getTime() ?? 0;
    const bTime = b.publishedAt?.getTime() ?? 0;
    return bTime - aTime;
  });
}

export async function getThesisArticles(): Promise<Article[]> {
  const medium = (await fetchMediumPosts()).filter((p) => p.route === 'thesis');
  return sortByPublishedAt(articlesFromMedium(medium, '/our-thesis', 'Thesis'));
}

export async function getJournalArticles(): Promise<Article[]> {
  const medium = (await fetchMediumPosts()).filter((p) => p.route === 'journal');
  return sortByPublishedAt(articlesFromMedium(medium, '/studio-journal', 'Journal'));
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
