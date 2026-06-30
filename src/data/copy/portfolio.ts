export const portfolioPage = {
  header: {
    eyebrow: "What we've built.",
    headline: `The proof is in
what survived.`,
    subcopy: `Every venture in this portfolio was built from inside
the studio — co-executed, not coached. These are not
pitch competition graduates. They are companies built
with operational infrastructure, tested against East
African market realities, and still running.`,
  },
  bottomCta: {
    headline: 'Building something in East Africa?',
    body: 'Start the conversation.',
    label: 'Work with us →',
    href: '/work-with-us',
  },
} as const;

export const pathwayLabels: Record<string, string> = {
  'studio-origination': 'Studio Origination',
  'founder-in-residence': 'Founder-in-Residence',
  'corporate-spinout': 'Corporate Spinout',
  'government-innovation': 'Government Innovation',
};
