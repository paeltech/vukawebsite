import { siteConfig } from '@/config/site';
import { getAllArticleSlugs } from '@/lib/articles';
import { getPortfolioSlugs } from '@/lib/portfolio';
export async function GET() {
  const [thesis, journal, ventures] = await Promise.all([
    getAllArticleSlugs('thesis'), getAllArticleSlugs('journal'), getPortfolioSlugs(),
  ]);
  const paths = [
    '/', '/what-we-do', '/who-we-work-with', '/founders', '/corporates', '/government',
    '/investors', '/partners', '/work-with-us', '/join-our-team', '/our-thesis', '/studio-journal',
    '/what-we-do/studio-origination', '/what-we-do/founder-in-residence',
    '/what-we-do/corporate-spinout', '/what-we-do/government-innovation',
    ...(siteConfig.aboutEnabled ? ['/about'] : []),
    ...(siteConfig.portfolioEnabled ? ['/portfolio', ...ventures.map(slug => `/portfolio/${slug}`)] : []),
    ...thesis.map(slug => `/our-thesis/${slug}`), ...journal.map(slug => `/studio-journal/${slug}`),
  ];
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const urls = paths.map(path => `<url><loc>${escape(new URL(path, siteConfig.url).href)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
