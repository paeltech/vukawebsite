export const siteConfig = {
  name: 'vuka.',
  title: "vuka. · East Africa's venture studio",
  description:
    'Vuka is an East African venture studio. We co-build technology companies with founders, organisations, and institutions who are ready to build.',
  url: 'https://vukaventures.co',
  email: 'hello@vukaventures.co',
  location: 'Dar es Salaam, East Africa',

  /** Enabled — first venture (Hakiki) is public-ready */
  portfolioEnabled: true,

  /** Enabled — team and culture page live */
  aboutEnabled: true,

  social: {
    linkedin: 'https://www.linkedin.com/company/vukaventures',
    paul: 'https://paulmandele.co',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function isAboutEnabled(): boolean {
  return siteConfig.aboutEnabled;
}

export function isPortfolioEnabled(): boolean {
  return siteConfig.portfolioEnabled;
}

export const navLinks = [
  { label: 'what we do', href: '/what-we-do' },
  {
    label: 'who we work with',
    href: '/who-we-work-with',
    children: [
      { label: 'Founders', href: '/founders' },
      { label: 'Corporates', href: '/corporates' },
      { label: 'Government agencies', href: '/government' },
      { label: 'Investors & DFIs', href: '/investors' },
      { label: 'Technology partners', href: '/partners' },
    ],
  },
  { label: 'our thesis', href: '/our-thesis' },
  { label: 'studio journal', href: '/studio-journal' },
  ...(siteConfig.portfolioEnabled
    ? [{ label: 'portfolio', href: '/portfolio' } as const]
    : []),
] as const;

export const footerLinks = {
  studio: [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'Who we work with', href: '/who-we-work-with' },
    { label: 'Our thesis', href: '/our-thesis' },
    { label: 'Studio journal', href: '/studio-journal' },
    ...(siteConfig.portfolioEnabled ? [{ label: 'Portfolio', href: '/portfolio' }] : []),
    ...(siteConfig.aboutEnabled ? [{ label: 'About', href: '/about' }] : []),
  ],
  workWithUs: [
    { label: 'Founders', href: '/founders' },
    { label: 'Corporates', href: '/corporates' },
    { label: 'Government', href: '/government' },
    { label: 'Investors & DFIs', href: '/investors' },
    { label: 'Technology partners', href: '/partners' },
  ],
} as const;

export const primaryCta = {
  label: 'work with us',
  href: '/work-with-us',
} as const;
