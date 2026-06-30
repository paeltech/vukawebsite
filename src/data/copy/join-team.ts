export const teamCallout = {
  eyebrow: 'Join our team',
  headlineAccent: 'Experts',
  headline: 'who build.',
  body: `Venture builders and domain experts — if you want to give back, work with us, invest, or help East African ventures succeed, tell us what drives you.`,
  highlights: [
    'Venture builders and studio operators',
    'Domain experts with deep market knowledge',
    'Advisors, investors, and builders who want skin in the game',
  ],
  cta: { label: 'Express your interest', href: '/join-our-team' },
} as const;

export const joinTeamPage = {
  header: {
    eyebrow: 'Join our team',
    headline: 'Help us build what East Africa needs.',
    subcopy: `We are looking for venture building experts and domain specialists who want to work with Vuka — as volunteers, paid collaborators, investors, or advisors. Tell us your motive and how you would like to contribute.`,
  },
  formIntro: {
    headline: 'Express your interest',
    subcopy: `Share your background, what you want to contribute, and how you would like to work with us. We read every submission.`,
  },
  expertiseOptions: [
    'Venture building & studio operations',
    'Product & engineering',
    'Go-to-market & growth',
    'Finance, legal & compliance',
    'Domain expertise (sector-specific)',
    'Other',
  ],
  motiveOptions: [
    'Volunteer my expertise',
    'Paid contract or full-time role',
    'Invest in the studio or ventures',
    'Advisory or board involvement',
    'Other — I will explain below',
  ],
  fields: {
    name: { label: 'Your name', placeholder: 'First and last' },
    email: { label: 'Email', placeholder: 'you@example.com' },
    organisation: { label: 'Organisation', placeholder: 'Current company or affiliation (optional)' },
    expertise: { label: 'Your expertise' },
    motive: { label: 'How do you want to work with Vuka?' },
    message: {
      label: 'Tell us more',
      placeholder:
        'Your background, what you want to contribute, and what a good fit looks like for you.',
    },
  },
  submitLabel: 'Submit interest',
  success: {
    title: 'Interest received.',
    body: `Thank you for reaching out. We review every submission and will be in touch if there is a fit.`,
  },
  errors: {
    general: 'A few fields need your attention before we can send this.',
    required: 'This field is required.',
    email: "Check this email — it doesn't look quite right.",
  },
  directContact: {
    label: 'Prefer email?',
    email: 'hello@vukaventures.co',
  },
} as const;
