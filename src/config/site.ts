export const siteConfig = {
  name: 'vuka.',
  title: "vuka. · AI-native venture studio in East Africa",
  description:
    'Vuka is an AI-native venture studio in East Africa. We co-build companies with AI at the core of their products and operations, grounded in local market insight.',
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
  { label: 'What we do', href: '/what-we-do' },
  { label: 'How we work', href: '/what-we-do#process' },
  ...(siteConfig.portfolioEnabled ? [{ label: 'Portfolio', href: '/portfolio' }] : []),
  ...(siteConfig.aboutEnabled ? [{ label: 'Studio', href: '/about' }] : []),
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
  label: 'Build with Vuka',
  href: '/work-with-us',
} as const;
