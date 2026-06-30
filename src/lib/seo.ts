import { siteConfig } from '@/config/site';

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export function buildSeo({
  title,
  description = siteConfig.description,
  canonical,
  ogType = 'website',
  noindex = false,
}: SeoProps = {}) {
  const pageTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = canonical
    ? new URL(canonical, siteConfig.url).href
    : undefined;

  return {
    title: pageTitle,
    description,
    canonical: canonicalUrl,
    ogType,
    noindex,
  };
}
