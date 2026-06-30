import type { LinkCta, PageHeader } from './types';

export interface HomeAudienceCard {
  tag: string;
  headline: string;
  body: string;
  cta: LinkCta;
}

export interface HomePathwayCard {
  tag: string;
  title: string;
  body: string;
  cta: LinkCta;
}

export interface SectorCard {
  title: string;
  body: string;
}

export const homeHero = {
  
  headline: `Building innovative ventures with bold`,
  accentRotate: ['founders', 'corporations', 'governments', 'partners'],
  primaryCta: { label: 'See who we work with →', href: '/#audiences' },
  secondaryCta: { label: 'Read our thesis', href: '/our-thesis' },
} as const;

export const homeWhy = {
  body: `Great idea or market insights shouldn't die in committee or fail from a lack of execution. Vuka bridges the gap. We provide the operational depth founders lack, and the agile culture corporates can't build.`,
  statement: `Great ideas need an engine.`,
  statementAccent: `We are yours.`,
  cta: { label: 'Build with vuka', href: '/work-with-us' },
} as const;

export const homeAudiences = {
  headlineAccent: 'Who we',
  headline: 'work with',
  intro: 'Five routes. One destination. Choose your entry point.',
  sectionCta: { label: 'See who we work with', href: '/who-we-work-with' },
  cards: [
    {
      tag: 'Founders',
      headline: 'You have the idea or market insight. We have the build engine.',
      body: `Bring your deep market knowledge; we’ll provide the co-founding engine to build it. No generic curriculums, no classrooms—just pure execution.`,
      cta: { label: 'Build with us', href: '/founders' },
    },
    {
      tag: 'Corporates',
      headline: 'Spin out your best ideas at startup speed.',
      body: `Stop letting bureaucracy kill your validation process. We are skin-in-the-game co-builders, not a consultancy hidden behind a monthly retainer.`,
      cta: { label: 'Accelerate your spin-out', href: '/corporates' },
    },
    {
      tag: 'Government',
      headline: 'Deploy citizen-facing tech on time.',
      body: `Meet your digital transformation mandates without internal capacity bottlenecks. We build and launch working public services—not slide decks or recommendations.`,
      cta: { label: 'Partner for delivery', href: '/government' },
    },
    {
      tag: 'Investors',
      headline: "Close the East African venture studio gap.",
      body: `Evaluate our thesis, assess our pipeline, and see how we map impact to repeatable startup creation. Let’s skip the fluff and look at the data.`,
      cta: { label: 'Review our thesis', href: '/investors' },
    },
    {
      tag: 'EcosystemPartners',
      headline: 'Unlock higher-value tiers for local founders.',
      body: `Bridge the gap for East African founders looking to scale into global startup networks. Partner with Vuka to upgrade your ecosystem initiatives.`,
      cta: { label: 'Connect with vuka', href: '/partners' },
    },
  ] satisfies HomeAudienceCard[],
} as const;

export const homePathways = {
  headlineAccent: 'How we',
  headline: 'build',
  statement: 'Accelerators teach. VCs invest.',
  statementAccent: ' Vuka builds.',
  intro:
    'We don’t just build — we provide co-founder depth from day zero until scale.',

  cards: [
    {
      tag: 'Our idea → Our engine',
      title: 'Studio Origination',
      body: `We spot East African market gaps, validate the data, assemble the founding team, and launch the venture ourselves.`,
      cta: { label: 'See our active bets', href: '/what-we-do/studio-origination' },
    },
    {
      tag: 'Your idea → Our execution',
      title: 'Founder-in-Residence',
      body: `You have a validated idea but lack the team to build it. We embed full studio capacity for a 90-day sprint to your first product.`,
      cta: { label: 'Apply for a residency', href: '/what-we-do/founder-in-residence' },
    },
    {
      tag: 'Enterprise idea → Spinout',
      title: 'Corporate Spinouts',
      body: `Move your internal ideas past corporate bureaucracy. We co-build market-ready ventures using a high-incentive, equity-aligned model.`,
      cta: { label: 'Accelerate your spinout', href: '/what-we-do/corporate-spinout' },
    },
    {
      tag: 'Public mandate → Working tech',
      title: 'Government Innovation',
      body: `Modernize agency infrastructure at a pace procurement cannot match. We build and deploy digital public services, not policy roadmaps.`,
      cta: { label: 'Partner for delivery', href: '/what-we-do/government-innovation' },
    }
  ] satisfies HomePathwayCard[],
} as const;

export const homeCredentials = {
  sectionLabel: 'Where we come from',
  left: `Vuka is founded by Paul Mandele — a Venture Builder
and Innovation Strategist who has spent over a decade
inside the East African startup ecosystem.

Not as an observer. As an operator.

Co-founding companies. Managing innovation hubs.
Running accelerator programmes. Building ventures
inside corporations. Working directly with founders
across Dar es Salaam, Nairobi, and Kampala.

Paul currently leads venture building and business
operations at Smart Foundry. Vuka is what a decade
of watching the same gap appear — and knowing exactly
what fills it — produces.`,
  right: `Vuka's founding argument is published and specific.

"Africa Doesn't Need More Startup Accelerators,
It Needs Venture Engines Instead" — April 2026.

An argument, not a mission statement. Named institutions.
Specific mechanisms. Subject to rebuttal. That is the point.`,
  essayCta: { label: 'Read the essay →', href: '/our-thesis' },
  tags: [
    'Smart Foundry',
    '10+ years East Africa',
    'Accelerator programmes',
    'Innovation hubs',
    'Corporate ventures',
    'Published thought leadership',
  ],
  teamCta: { label: 'Meet the team →', href: '/about' },
} as const;

export const homeThesis = {
  sectionLabel: 'The argument behind the studio',
  headline: `Africa doesn't need more startup accelerators.
It needs venture engines.`,
  body: `The accelerator model was designed for founders
who already have 80% of what they need. Most East
African founders are starting at 30%.

A curriculum and a demo day adds polish.
It doesn't add infrastructure.

Vuka is built on a different model — and a
published, specific argument for why it works.`,
  cta: { label: 'Read the founding thesis →', href: '/our-thesis' },
} as const;

export const homeSectors = {
  sectionLabel: 'Where we build',
  intro: 'Four sectors. Structural East African advantage in each.',
  cards: [
    {
      title: 'B2B Infrastructure & Fintech',
      body: `SME financial infrastructure across East Africa remains
deeply underbuilt. Fragmented but high-frequency commercial
activity creates durable distribution opportunities for
the right fintech products.`,
    },
    {
      title: 'Applied AI for Traditional Industries',
      body: `Agriculture, logistics, and healthcare have large informal
sectors generating enormous unstructured data. AI applied
here produces asymmetric value — not foundational models,
applied intelligence with a local data moat.`,
    },
    {
      title: 'Climate & Energy Access',
      body: `Clean energy access and climate finance attract DFI capital
and blended funding structures. Studios that build here
reach a broader funding base than pure VC — and address
one of the region's most persistent infrastructure gaps.`,
    },
    {
      title: 'Government Digital Services',
      body: `East African governments are under sustained pressure to
modernise service delivery — tax, land, health, social
protection. The internal product capacity to build at pace
rarely exists. Vuka sits at the intersection of public
sector mandate and startup-speed execution.`,
    },
  ] satisfies SectorCard[],
} as const;

export const homeInvestment = {
  sectionLabel: 'Studio investment',
  headline: `We are building the venture studio
this ecosystem has been missing.`,
  body: `There are approximately 50 venture studios operating
across the entire African continent. The US alone has
hundreds. The model is proven globally. In East Africa,
the space is wide open.

Vuka is at founding stage. The thesis is documented.
The methodology is defined. The first portfolio venture
is established and operational. The investment conversation
is about what the next phase of the studio build requires.

African startup funding crossed $4.1 billion in 2025.
Capital is returning — with harder expectations around
governance, profitability, and execution quality.
Vuka is built for exactly that environment.`,
  stat: { value: '~50', caption: `venture studios operating across the entire
African continent. Hundreds in the US alone.` },
  cta: { label: 'Talk to us about studio investment →', href: '/investors' },
} as const;

export const homePartnership = {
  sectionLabel: 'The infrastructure thesis',
  headline: `The credits exist.
The door is closed.
We're opening it.`,
  body: `Big tech startup programs — AWS Activate, Google for
Startups, Microsoft for Startups, Anthropic — represent
hundreds of millions in available in-kind credits every year.

Most East African founders cannot access them. Not because
they are ineligible. Because the programs are partnership-gated
through accelerator and VC networks concentrated in Western
markets.

Vuka is pursuing formal ecosystem partner status with these
programs as an African organisation. Every founder who builds
inside Vuka gets access to tools that have historically been
available only to founders inside Western-backed pipelines.`,
  programs: ['AWS Activate', 'Google for Startups', 'Microsoft for Startups', 'Anthropic'],
  statusNote: 'Partnerships in progress · 2026',
  cta: { label: 'Explore a technology partnership →', href: '/partners' },
} as const;

export const homeClosing = {
  headline: `Whatever you're building toward —
the conversation starts here.`,
  body: `Vuka works with founders who are ready to build,
organisations with ideas worth spinning out,
government bodies under pressure to deliver,
investors looking at the studio, and technology
partners who want to reach this ecosystem.

The next step is the same for all of them.`,
  primaryCta: { label: 'Work with us →', href: '/work-with-us' },
  secondaryCta: { label: 'Read our thesis first', href: '/our-thesis' },
} as const;
