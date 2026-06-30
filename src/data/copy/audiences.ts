import type { AudienceCard, CtaLink, FaqItem, StepItem } from './types';

export type AudienceSlug = 'founders' | 'corporates' | 'government' | 'investors' | 'partners';

export interface AudiencePageCopy {
  slug: AudienceSlug;
  eyebrow: string;
  headline: string;
  subcopy: string;
  problem: string;
  steps: StepItem[];
  youBring: string[];
  weBring: string[];
  engagement: string;
  proof: string;
  faqs: FaqItem[];
  pathways: { label: string; href: string }[];
  relatedWorkIntro: string;
  cta: CtaLink;
  formEnquiryType: string;
}

export const whoWeWorkWith = {
  header: {
    headline: `Five ways to work with Vuka.\nHere is each one.`,
    subcopy: `Vuka is not a founder-only studio. We build with founders, corporates, government agencies, investors, and technology partners. The home page introduces each route in a line — this page goes one level deeper before you choose a dedicated path.`,
  },
  overview: {
    label: 'Why five audiences',
    body: `East Africa's venture gap is not a single-audience problem. Founders need co-builders. Corporates need spinout infrastructure. Government needs working services on mandate timelines. Investors need a studio model with published methodology. Technology partners need a local operator who can qualify ventures at scale.

One studio. Five entry points. Choose yours below — or start with the contact form and we will find the right route together.`,
  },
  cards: [
    {
      title: 'Founders',
      problemHeadline: `You're ready to build. You need someone to build with.`,
      body: `You have a validated idea and deep market knowledge. What you don't have is the full co-founding infrastructure to build it alone. Vuka embeds in your venture and builds alongside you — with equity, operational capacity, and a 90-day sprint to first product.`,
      cta: { label: 'Built for founders →', href: '/founders' },
    },
    {
      title: 'Corporates',
      problemHeadline: `Your internal idea keeps dying in committee.`,
      body: `You have a validated internal innovation that can't get built through internal processes at the pace the market requires. Vuka co-builds it as a standalone venture — fee-for-service plus equity warrant. No retainer. Real accountability.`,
      cta: { label: 'Built for corporates →', href: '/corporates' },
    },
    {
      title: 'Government agencies',
      problemHeadline: `Your mandate requires a service, not a strategy.`,
      body: `You have a digital transformation mandate and a timeline that standard procurement cannot meet. Vuka co-builds scoped digital government services — a working service in 90 days, not an 18-month plan.`,
      cta: { label: 'Built for government →', href: '/government' },
    },
    {
      title: 'Investors & DFIs',
      problemHeadline: `You're funding ecosystem development. The model matters.`,
      body: `You're a DFI, development investor, or impact fund evaluating whether the venture builder model produces better outcomes per capital deployed than the accelerators you've historically funded. Vuka has the argument — published, specific, and subject to rebuttal.`,
      cta: { label: 'Built for investors →', href: '/investors' },
    },
    {
      title: 'Technology partners',
      problemHeadline: `Your program can't reach the founders it was built for.`,
      body: `You run a startup credits program. East African founders can't access your higher-value tiers through the current partnership structure. Vuka is building the East African partner position that changes that.`,
      cta: { label: 'Built for tech partners →', href: '/partners' },
    },
  ] satisfies AudienceCard[],
  bottomNote: `Not sure which fits?
Tell us where you are and what you're trying to solve.
We'll find the right entry point together.`,
  bottomCta: { label: 'Start with the contact form →', href: '/work-with-us' },
} as const;

export const audiences: Record<AudienceSlug, AudiencePageCopy> = {
  founders: {
    slug: 'founders',
    eyebrow: 'For founders',
    headline: 'Ready to build. Not ready to be coached.',
    subcopy: `You have the market knowledge and the conviction. Vuka embeds operational capacity inside your venture — product, engineering, go-to-market, and finance — with equity alignment and a 90-day sprint to a working first product.`,
    problem: `You understand your market. You may already have customer conversations, a clear product direction, and the energy to build.

What you don't have is the full co-founding infrastructure — product management, engineering, go-to-market, financial structure — all at once, all committed.

Accelerators offer a curriculum and a network. Then they leave. You are back to building alone, except now you've spent months in workshops.

There is also the infrastructure gap: cloud compute, development environments, and AI-assisted build tools that Western-backed founders access through partnership programs. For a founder in Dar es Salaam or Nairobi without external funding, basic build infrastructure can exceed $200–500 per month.

Vuka is built for founders who are ready to build — not ready to be coached.`,
    steps: [
      {
        title: 'Application and selection',
        body: `Apply with your idea, market context, and an honest account of where you are. Vuka reviews every application based on market validity, founder-market fit, and sector alignment — not pitch quality.`,
      },
      {
        title: 'Scoping and alignment',
        body: `A working session maps your idea against Vuka's build capacity, validates the market hypothesis, and agrees equity and sprint scope. One to two weeks. No upfront commitment required to start the conversation.`,
      },
      {
        title: '90-day build sprint',
        body: `You move inside the studio. Product, engineering, go-to-market, and operational infrastructure are built simultaneously. The output is a working product in the hands of real users — not a prototype for a demo day.`,
      },
      {
        title: 'Post-sprint co-execution',
        body: `Vuka stays after the sprint — through first sales, first hire, and first fundraise. The engagement does not end because the programme would have.`,
      },
    ],
    youBring: [
      'Deep market knowledge and customer access',
      'A validated idea or clear product direction',
      'Founder conviction and availability to build',
      'An honest account of operational gaps',
    ],
    weBring: [
      'Embedded product, engineering, and go-to-market capacity',
      'Financial modelling and operational infrastructure',
      'Equity-aligned co-building through the build phase',
      'Access to tier-1 cloud and tooling via partner programs',
    ],
    engagement: `Vuka embeds inside your venture with equity alignment. Two pathways apply depending on where you start:

Founder-in-Residence — you bring the idea; Vuka provides the build engine.
Studio Origination — Vuka originates the venture; you join as domain co-founder.

Commercial terms are agreed during scoping. Selection is based on market validity and fit — not pitch polish.`,
    proof: `Vuka is founded by Paul Mandele — a decade inside the East African ecosystem as an operator, not an observer. The studio's founding argument is published: Africa Doesn't Need More Startup Accelerators, It Needs Venture Engines Instead.

The $100 Problem essay documents the infrastructure access gap — why credits exist and why most East African founders cannot reach them.

Hakiki — product traceability built for the Tanzanian market — is operational proof that the studio model produces companies still running, not demo-day graduates.`,
    faqs: [
      {
        question: "What does Vuka actually do that an accelerator doesn't?",
        answer: `An accelerator adds polish to what you already have. Vuka adds what you are missing — operational co-building, embedded capacity, and equity alignment that lasts through the build phase.

Accelerators extract value at the moment of contact and leave. The studio stays in the room until the company can stand alone.`,
      },
      {
        question: 'Which pathway should I apply for?',
        answer: `Founder-in-Residence if you bring the idea and need a co-builder. Studio Origination if Vuka identifies the opportunity and you join as domain co-founder. If you are unsure, apply through the contact form — we will route you.`,
      },
    ],
    pathways: [
      { label: 'Founder-in-Residence', href: '/what-we-do/founder-in-residence' },
      { label: 'Studio Origination', href: '/what-we-do/studio-origination' },
    ],
    relatedWorkIntro: `Ventures built inside the studio through founder-facing pathways — operational proof of what co-building produces.`,
    cta: {
      headline: 'The programme ends. The build continues.',
      label: 'Apply to build with us →',
      href: '/work-with-us?type=founder',
    },
    formEnquiryType: 'I want to build inside the studio (Founder-in-Residence)',
  },

  corporates: {
    slug: 'corporates',
    eyebrow: 'For corporates',
    headline: 'You have the idea. We have the execution infrastructure.',
    subcopy: `Vuka co-builds validated internal innovations as standalone ventures — fee-for-service plus equity warrant. IP stays with the parent. Our return is tied to the venture's outcome.`,
    problem: `You have watched the pattern before. A credible internal idea. A sponsor with budget. Months of approval processes. A delivery that arrives late, costs more than projected, and requires months of additional work before it can go to market.

Or it dies in committee before it even gets that far.

Consultancies deliver strategy documents and move on — no equity alignment, no accountability for whether the venture works. Internal teams are calibrated for the core business, competing for resources with quarterly targets.

You need a co-builder with skin in the game — not a retainer.`,
    steps: [
      {
        title: 'Scoping conversation',
        body: `We assess the idea, executive sponsor, market fit, and organisational readiness. Commercial structure is scoped before any build work begins.`,
      },
      {
        title: 'Commercial alignment',
        body: `Fee scoped to build complexity. Equity warrant terms documented. IP ownership retained by the corporate parent. No ambiguity before the first sprint.`,
      },
      {
        title: 'Spinout build',
        body: `Vuka builds the venture as a standalone company from day one — product, technology, go-to-market, and operational infrastructure — not an internal project that later needs restructuring.`,
      },
      {
        title: 'Launch and handover',
        body: `The spinout goes to market with Vuka embedded through early traction. Accountability continues because our warrant ties us to the outcome.`,
      },
    ],
    youBring: [
      'A validated internal innovation with executive sponsorship',
      'Market access, domain expertise, and IP ownership',
      'Budget authority for a scoped build engagement',
      'Clarity on spinout governance and parent relationship',
    ],
    weBring: [
      'Standalone venture build at startup speed',
      'Product, engineering, and go-to-market execution',
      'Equity warrant alignment — skin in the game',
      'Operational infrastructure until the venture can stand alone',
    ],
    engagement: `Corporate spinouts run on fee-for-service plus equity warrant. The fee covers the build scope; the warrant ties Vuka's return to long-term venture success.

IP ownership stays with the corporate parent. Vuka does not operate as a consultancy on retainer — we co-build with accountability for whether the venture works.`,
    proof: `Paul Mandele has built ventures inside corporations across East Africa through Smart Foundry and a decade of ecosystem operation. The Venture Engines essay is the structural argument for co-building over consultancy.

Hakiki demonstrates delivery at regulatory scale — a co-built venture operational across Tanzania's food and agricultural supply chain.`,
    faqs: [
      {
        question: 'Why give equity to an external partner?',
        answer: `Because equity is alignment. A vendor who invoices and leaves has no incentive to care what happens after handover. An equity warrant ties Vuka's return to the venture's outcome — which is exactly why the co-building is real, not performative.`,
      },
      {
        question: 'How is this different from hiring a consultancy?',
        answer: `Consultancies deliver documents and move on. Vuka builds a standalone company with equity alignment and stays through launch. The engagement is structured for venture outcomes — not billable hours.`,
      },
    ],
    pathways: [{ label: 'Corporate Spinout', href: '/what-we-do/corporate-spinout' }],
    relatedWorkIntro: `Co-built ventures with corporate and B2B stakeholders — proof of delivery beyond strategy documents.`,
    cta: {
      headline: 'The idea has been in committee long enough.',
      label: 'Start a spinout conversation →',
      href: '/work-with-us?type=corporate',
    },
    formEnquiryType: 'I want to explore a corporate spinout',
  },

  government: {
    slug: 'government',
    eyebrow: 'For government agencies',
    headline: 'We build digital services for citizens. Not transformation roadmaps for committees.',
    subcopy: `Vuka co-builds scoped digital government services — SMS-first, Swahili-ready, offline-capable — on milestone-based contracts. A working service in 90 days, not an 18-month implementation plan.`,
    problem: `You have a mandate and a timeline. Standard IT procurement takes 12–18 months from tender to delivery. Consultancies produce transformation roadmaps — real deliverables, but not the working digital service your mandate requires.

Your internal team maintains what was already built. New mandates arrive without capacity to execute them.

You need a team that builds working services — not one that advises.`,
    steps: [
      {
        title: 'Mandate scoping',
        body: `We map your mandate to a defined build scope — target users, service boundaries, timeline, and procurement pathway. No open-ended transformation framing.`,
      },
      {
        title: 'Pilot definition',
        body: `A scoped pilot: defined service, defined user group, 90-day build timeline. The deliverable is a working service in citizen hands — not a completed specification document.`,
      },
      {
        title: 'Co-built delivery',
        body: `Vuka builds alongside your team — SMS-first architecture, Swahili interfaces where required, offline-capable design, integration with existing government data infrastructure.`,
      },
      {
        title: 'Handover and capability transfer',
        body: `Documentation, training, and operational handover so your team can maintain and extend the service after launch.`,
      },
    ],
    youBring: [
      'A clear mandate and defined user group',
      'Internal stakeholders and procurement pathway',
      'Existing data infrastructure and policy constraints',
      'Authority to scope a time-bound pilot engagement',
    ],
    weBring: [
      'Working digital services built for East African operating realities',
      'Startup-speed execution within defined scope',
      'Co-build methodology with your internal team',
      'Handover documentation and capability transfer',
    ],
    engagement: `Government engagements are milestone-based contracts. No equity warrant component for government clients.

Fees are scoped to defined deliverables — a working service, not an advisory engagement. Vuka delivers at startup speed within the boundaries your procurement process requires.`,
    proof: `Vuka's sector focus in government digital services aligns with DFI deployment mandates. Hakiki — product traceability built for the Tanzanian market — is documented proof of delivery at regulatory scale.`,
    faqs: [
      {
        question: 'How is this different from the IT vendors we already work with?',
        answer: `IT vendors deliver against specifications written months earlier. Vuka delivers working services designed for actual users — co-built with your team, at startup speed, with no equity warrant for government clients.`,
      },
      {
        question: 'Can this work within our procurement timelines?',
        answer: `We scope engagements to fit defined pilot boundaries — a single service, a defined user group, a 90-day build. The scoping conversation maps your mandate to a procurement pathway that works.`,
      },
    ],
    pathways: [{ label: 'Government Innovation', href: '/what-we-do/government-innovation' }],
    relatedWorkIntro: `Ventures deployed with regulators and public-sector stakeholders — working services, not roadmaps.`,
    cta: {
      headline: "The mandate exists. The internal capacity to execute it doesn't.",
      label: 'Explore a government engagement →',
      href: '/work-with-us?type=government',
    },
    formEnquiryType: 'I want to explore a government engagement',
  },

  investors: {
    slug: 'investors',
    eyebrow: 'For investors & DFIs',
    headline: 'The East African venture studio gap is real. Vuka is building into it.',
    subcopy: `A founding-stage East African venture studio with a published operating thesis, defined methodology, sector focus aligned with DFI mandates, and a first portfolio venture operational.`,
    problem: `DFIs and development investors have funded accelerators across East Africa for years. Portfolio outcomes often show polished founders abandoned at the moment they need operational depth most.

There are approximately 50 venture studios operating across the entire African continent. The US alone has hundreds. The venture builder model is proven globally — but thin on the ground here, at the depth and methodology level the market now requires.`,
    steps: [
      {
        title: 'Review the published thesis',
        body: `Start with the Venture Engines argument — specific, named institutions, subject to rebuttal. Assess whether the studio model fits your portfolio strategy before any conversation.`,
      },
      {
        title: 'Assess studio fit',
        body: `Evaluate sector focus (climate/energy, government digital, B2B fintech), methodology, and pipeline against your deployment mandates. Stage honesty is a trust signal.`,
      },
      {
        title: 'Scope the investment conversation',
        body: `If the conversation is worth having in depth, we map what studio-level backing looks like at this stage — governance, capital deployment, and venture pipeline.`,
      },
      {
        title: 'Define governance and deployment',
        body: `Agree reporting, venture selection criteria, and capital deployment structure. The conversation is about what the next phase of the studio build requires.`,
      },
    ],
    youBring: [
      'Portfolio strategy and deployment mandate',
      'Governance and reporting requirements',
      'Sector alignment criteria (climate, digital, fintech)',
      'Appetite for venture builder model evaluation',
    ],
    weBring: [
      'Published operating thesis and methodology',
      'East African ecosystem operator track record',
      'Sector focus mapped to DFI deployment mandates',
      'Operational portfolio ventures — not pitch-stage pipeline',
    ],
    engagement: `The investment conversation is about what the next phase of the studio build requires — not about claiming depth that doesn't exist yet.

Vuka is at founding stage with a published thesis, defined methodology, and a first operational portfolio venture. Studio-level backing conversations cover governance, capital deployment, and venture pipeline development.`,
    proof: `The Venture Engines essay is the universal founding argument — subject to rebuttal, named institutions, specific mechanisms. Paul Mandele brings a decade of East African ecosystem operation. Sector focus maps to IFC, UKAID, African Development Bank, and GIZ deployment mandates.

Hakiki is the first portfolio venture — operational, established, and documented.`,
    faqs: [
      {
        question: 'Why fund a studio over funding individual companies or accelerators?',
        answer: `Because capital efficiency matters. The Venture Engines argument applied to capital deployment: 4 companies built right versus 17 polished and abandoned. A venture studio keeps operational capacity in the room — the infrastructure accelerators do not provide.`,
      },
      {
        question: 'What stage is the studio at today?',
        answer: `Founding stage — with a published thesis, defined methodology, sector focus, and a first operational portfolio venture. We are direct about what exists and what the next phase of the build requires.`,
      },
    ],
    pathways: [{ label: 'Read the founding thesis', href: '/our-thesis' }],
    relatedWorkIntro: `Portfolio ventures that demonstrate studio-level outcomes — operational companies, not demo-day graduates.`,
    cta: {
      headline: 'The thesis is published. The case is live.',
      label: 'Talk to us about studio investment →',
      href: '/work-with-us?type=investor',
    },
    formEnquiryType: "I'm interested in studio-level investment or partnership (DFI / investor)",
  },

  partners: {
    slug: 'partners',
    eyebrow: 'For technology partners',
    headline: "East African founders can't reach your program. We can change that.",
    subcopy: `Vuka is building formal ecosystem partner status with big tech startup programs — a vetted East African founder pipeline and a credible local operator, not a one-off application volume play.`,
    problem: `AWS Activate, Google for Startups, Microsoft for Startups, Anthropic — hundreds of millions in in-kind credits every year. Most East African founders cannot access higher-value tiers.

Not because they are ineligible. Because programs are partnership-gated through accelerator and VC networks concentrated in Western markets. The $100 Problem documents the mechanism — and the fix.`,
    steps: [
      {
        title: 'Define program fit',
        body: `We map your tier structures, partnership requirements, and qualification criteria against the ventures building inside the Vuka studio.`,
      },
      {
        title: 'Qualify the pipeline',
        body: `Founders inside the studio are assessed against program requirements before application — operational ventures being built, not pitch-stage applicants.`,
      },
      {
        title: 'Route credits and tooling',
        body: `Partner status routes credits and development tooling to ventures at build stage. Every founder who builds inside Vuka gets access to tools historically limited to Western-backed pipelines.`,
      },
      {
        title: 'Report and scale',
        body: `Accountable routing at scale — a local operator with operational depth, not a volume play without venture accountability.`,
      },
    ],
    youBring: [
      'Startup credits or tooling program with tier structures',
      'Partnership criteria and qualification requirements',
      'Appetite for East African ecosystem expansion',
      'Reporting and accountability frameworks',
    ],
    weBring: [
      'Vetted East African venture pipeline at build stage',
      'Local operator with decade of ecosystem depth',
      'Venture qualification against program requirements',
      'Operational proof — companies still running, not applicants',
    ],
    engagement: `Vuka is pursuing formal ecosystem partner status with big tech startup programs as an African organisation.

Partners receive a qualified pipeline and accountable local routing — ventures being built inside the studio, assessed against program requirements before credits are deployed.`,
    proof: `The $100 Problem essay is the published access-gap argument. Vuka's studio model produces the operational proof partners need — Hakiki is a documented venture still running, built inside the studio through Studio Origination.`,
    faqs: [
      {
        question: 'We already accept African applications directly — why do we need a partner?',
        answer: `Because direct application channels do not overcome partnership-gated tier structures. Founders who apply individually often reach only the lowest credit tiers. A local ecosystem partner with operational depth routes qualified ventures into the programs as they were designed to work — at scale, with accountability.`,
      },
      {
        question: 'What does a qualified venture look like?',
        answer: `A company being built inside the studio — with operational depth, market validation, and program fit assessed before application. Not a pitch competition graduate or a cold application without build context.`,
      },
    ],
    pathways: [{ label: 'The $100 Problem essay', href: '/our-thesis' }],
    relatedWorkIntro: `Studio-built ventures that demonstrate the qualified pipeline partners need — companies still running, not pitch-stage applicants.`,
    cta: {
      headline: 'The credits exist. The door is closed.',
      label: 'Explore a partnership →',
      href: '/work-with-us?type=partner',
    },
    formEnquiryType: 'I want to explore a technology partnership',
  },
};

export const audienceSlugs = Object.keys(audiences) as AudienceSlug[];

export const audienceNavLabels: Record<AudienceSlug, string> = {
  founders: 'Founders',
  corporates: 'Corporates',
  government: 'Government',
  investors: 'Investors & DFIs',
  partners: 'Technology partners',
};
