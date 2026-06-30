import type { CtaLink, PageHeader } from './types';

export interface AudiencePageCopy {
  slug: string;
  header: PageHeader;
  problem: string;
  offer: string;
  howItWorks: string;
  proof: string;
  objection: { question: string; answer: string };
  pathways: { label: string; href: string }[];
  cta: CtaLink;
  formEnquiryType: string;
}

export const whoWeWorkWith = {
  header: {
    headline: `Five ways to work with Vuka.`,
    subcopy: `The overview lives on the home page. Choose a route below for the full picture — founders, corporates, government, investors, or technology partners.`,
  },
  hubPromo: {
    eyebrow: 'On the home page',
    headline: 'Who we work with',
    body: 'Five audience routes with the same destination: building what East Africa needs.',
    cta: { label: 'See audiences on home', href: '/#audiences' },
  },
  bottomNote: `Not sure which fits?
Tell us where you are and what you're trying to solve.
We'll find the right entry point together.`,
  bottomCta: { label: 'Start with the contact form →', href: '/work-with-us' },
} as const;

export const audiences: Record<string, AudiencePageCopy> = {
  founders: {
    slug: 'founders',
    header: {
      headline: 'Ready to build. Not ready to be coached.',
      subcopy: `You have the market knowledge and the conviction.
What you need is a co-builder with operational depth —
not a programme that ends before the product ships.`,
    },
    problem: `You understand your market. You may already have customer conversations, a clear product direction, and the energy to build.

What you don't have is the full co-founding infrastructure — product management, engineering, go-to-market, financial structure — all at once, all committed.

Accelerators offer a curriculum and a network. Then they leave. You are back to building alone, except now you've spent months in workshops.

There is also the infrastructure gap: cloud compute, development environments, and AI-assisted build tools that Western-backed founders access through partnership programs. For a founder in Dar es Salaam or Nairobi without external funding, basic build infrastructure can exceed $200–500 per month.

Vuka is built for founders who are ready to build — not ready to be coached.`,
    offer: `Vuka embeds operational capacity inside your venture — product, engineering, go-to-market, and financial infrastructure — with equity alignment and a structured 90-day sprint to a working first product.

Two pathways apply: Founder-in-Residence, if you bring the idea; Studio Origination, if Vuka originates the venture and you join as domain co-founder.`,
    howItWorks: `Apply with your idea and an honest account of where you are. Vuka reviews every application based on market validity, founder-market fit, and sector alignment — not pitch quality.

If there is a fit, a scoping session maps the build, equity terms, and sprint scope. You move inside the studio. The output is a working product in the hands of real users — not a prototype for a demo day.

Vuka stays after the sprint — through first sales, first hire, first fundraise.`,
    proof: `Vuka is founded by Paul Mandele — a decade inside the East African ecosystem as an operator, not an observer. The studio's founding argument is published: Africa Doesn't Need More Startup Accelerators, It Needs Venture Engines Instead.

The $100 Problem essay documents the infrastructure access gap — why credits exist and why most East African founders cannot reach them.

Hakiki — product traceability built for the Tanzanian market — is operational proof that the studio model produces companies still running, not demo-day graduates.`,
    objection: {
      question: "What does Vuka actually do that an accelerator doesn't?",
      answer: `An accelerator adds polish to what you already have. Vuka adds what you are missing — operational co-building, embedded capacity, and equity alignment that lasts through the build phase.

Accelerators extract value at the moment of contact and leave. The studio stays in the room until the company can stand alone. That is the Venture Engines argument — and it is specific to the founder experience of being left alone after a programme ends.`,
    },
    pathways: [
      { label: 'Founder-in-Residence', href: '/what-we-do/founder-in-residence' },
      { label: 'Studio Origination', href: '/what-we-do/studio-origination' },
    ],
    cta: {
      headline: 'The programme ends. The build continues.',
      label: 'Apply to build with us →',
      href: '/work-with-us?type=founder',
    },
    formEnquiryType: 'I want to build inside the studio (Founder-in-Residence)',
  },
  corporates: {
    slug: 'corporates',
    header: {
      headline: 'You have the idea. We have the execution infrastructure.',
      subcopy: `Internal innovation that cannot survive committee.
External vendors that deliver documents, not companies.
There is a third model.`,
    },
    problem: `You have watched the pattern before. A credible internal idea. A sponsor with budget. Months of approval processes. A delivery that arrives late, costs more than projected, and requires months of additional work before it can go to market.

Or it dies in committee before it even gets that far.

Consultancies deliver strategy documents and move on — no equity alignment, no accountability for whether the venture works. Internal teams are calibrated for the core business, competing for resources with quarterly targets.

You need a co-builder with skin in the game — not a retainer.`,
    offer: `Vuka co-builds validated internal innovations as standalone ventures — fee-for-service plus equity warrant. We embed across product, technology, go-to-market, and operational infrastructure until the spinout can stand alone.

IP ownership stays with the corporate parent. Vuka's return is tied to the venture's long-term success.`,
    howItWorks: `A scoping conversation assesses the idea, sponsor, market, and fit. Commercial structure is agreed before work begins — fee scoped to build complexity, warrant terms documented, IP retained by parent.

Vuka builds the spinout as a standalone company from day one — not an internal project that later needs restructuring.`,
    proof: `Paul Mandele has built ventures inside corporations across East Africa through Smart Foundry and a decade of ecosystem operation. The Venture Engines essay is the structural argument for co-building over consultancy.

Hakiki demonstrates delivery at regulatory scale — a co-built venture operational across Tanzania's food and agricultural supply chain.`,
    objection: {
      question: 'Why give equity to an external partner?',
      answer: `Because equity is alignment. A vendor who invoices and leaves has no incentive to care what happens after handover. An equity warrant ties Vuka's return to the venture's outcome — which is exactly why the co-building is real, not performative.`,
    },
    pathways: [{ label: 'Corporate Spinout', href: '/what-we-do/corporate-spinout' }],
    cta: {
      headline: 'The idea has been in committee long enough.',
      label: 'Start a spinout conversation →',
      href: '/work-with-us?type=corporate',
    },
    formEnquiryType: 'I want to explore a corporate spinout',
  },
  government: {
    slug: 'government',
    header: {
      headline: 'We build digital services for citizens. Not transformation roadmaps for committees.',
      subcopy: `A working service in 90 days, not an 18-month implementation plan.`,
    },
    problem: `You have a mandate and a timeline. Standard IT procurement takes 12–18 months from tender to delivery. Consultancies produce transformation roadmaps — real deliverables, but not the working digital service your mandate requires.

Your internal team maintains what was already built. New mandates arrive without capacity to execute them.

You need a team that builds working services — not one that advises.`,
    offer: `Vuka co-builds scoped digital government services — designed for East African operating realities: SMS-first architecture, Swahili interfaces where required, offline-capable design, integration with existing government data infrastructure.

Government engagements are milestone-based contracts. No equity warrant component for government clients.`,
    howItWorks: `A scoping engagement maps your mandate to a defined build scope — users, timeline, procurement pathway. Vuka proposes a scoped pilot: defined service, defined user group, 90-day build timeline (a working service in citizen hands, not a completed specification).

Handover includes documentation, training, and capability transfer.`,
    proof: `Vuka's sector focus in government digital services aligns with DFI deployment mandates. Hakiki — product traceability built for the Tanzanian market — is documented proof of delivery at regulatory scale.`,
    objection: {
      question: 'How is this different from the IT vendors we already work with?',
      answer: `IT vendors deliver against specifications written months earlier. Vuka delivers working services designed for actual users — co-built with your team, at startup speed (a working service in 90 days, not an 18-month implementation plan), with no equity warrant for government clients.`,
    },
    pathways: [{ label: 'Government Innovation', href: '/what-we-do/government-innovation' }],
    cta: {
      headline: "The mandate exists. The internal capacity to execute it doesn't.",
      label: 'Explore a government engagement →',
      href: '/work-with-us?type=government',
    },
    formEnquiryType: 'I want to explore a government engagement',
  },
  investors: {
    slug: 'investors',
    header: {
      headline: 'The East African venture studio gap is real. Vuka is building into it.',
      subcopy: `Stage honesty is a trust signal. Here is where the studio is — and what the investment conversation looks like now.`,
    },
    problem: `DFIs and development investors have funded accelerators across East Africa for years. Portfolio outcomes often show polished founders abandoned at the moment they need operational depth most.

There are approximately 50 venture studios operating across the entire African continent. The US alone has hundreds. The venture builder model is proven globally — but thin on the ground here, at the depth and methodology level the market now requires.`,
    offer: `Vuka is a founding-stage East African venture studio with a published operating thesis, defined methodology, sector focus aligned with DFI mandates (climate/energy, government digital, B2B fintech), and a first portfolio venture operational.

The investment conversation is about what the next phase of the studio build requires — not about claiming depth that doesn't exist yet.`,
    howItWorks: `Start with the published thesis. Assess the studio model against your portfolio strategy. If the conversation is worth having in more depth, we scope what studio-level backing looks like at this stage — governance, capital deployment, and venture pipeline.`,
    proof: `The Venture Engines essay is the universal founding argument — subject to rebuttal, named institutions, specific mechanisms. Paul Mandele brings a decade of East African ecosystem operation. Sector focus maps to IFC, UKAID, African Development Bank, and GIZ deployment mandates.

Hakiki is the first portfolio venture — operational, established, and documented at /portfolio/hakiki.`,
    objection: {
      question: 'Why fund a studio over funding individual companies or accelerators?',
      answer: `Because capital efficiency matters. The Venture Engines argument applied to capital deployment: 4 companies built right versus 17 polished and abandoned. A venture studio keeps operational capacity in the room — the infrastructure accelerators do not provide.`,
    },
    pathways: [{ label: 'Read the founding thesis', href: '/our-thesis' }],
    cta: {
      headline: 'The thesis is published. The case is live.',
      label: 'Talk to us about studio investment →',
      href: '/work-with-us?type=investor',
    },
    formEnquiryType: "I'm interested in studio-level investment or partnership (DFI / investor)",
  },
  partners: {
    slug: 'partners',
    header: {
      headline: "East African founders can't reach your program. We can change that.",
      subcopy: `The access gap is structural — not an awareness problem.`,
    },
    problem: `AWS Activate, Google for Startups, Microsoft for Startups, Anthropic — hundreds of millions in in-kind credits every year. Most East African founders cannot access higher-value tiers.

Not because they are ineligible. Because programs are partnership-gated through accelerator and VC networks concentrated in Western markets. The $100 Problem documents the mechanism — and the fix.`,
    offer: `Vuka is pursuing formal ecosystem partner status with big tech startup programs as an African organisation. Partners receive a vetted East African founder pipeline and a credible local operator — not a one-off application volume play.`,
    howItWorks: `Vuka qualifies founders inside the studio against program requirements. Partner status routes credits and tooling to ventures being built — not pitched. Every founder who builds inside Vuka gets access to tools historically limited to Western-backed pipelines.`,
    proof: `The $100 Problem essay is the published access-gap argument. Vuka's studio model produces the operational proof partners need — Hakiki is a documented venture still running, built inside the studio through Studio Origination.`,
    objection: {
      question: 'We already accept African applications directly — why do we need a partner?',
      answer: `Because direct application channels do not overcome partnership-gated tier structures. Founders who apply individually often reach only the lowest credit tiers. A local ecosystem partner with operational depth routes qualified ventures into the programs as they were designed to work — at scale, with accountability.`,
    },
    pathways: [{ label: 'The $100 Problem essay', href: '/our-thesis' }],
    cta: {
      headline: 'The credits exist. The door is closed.',
      label: 'Explore a partnership →',
      href: '/work-with-us?type=partner',
    },
    formEnquiryType: 'I want to explore a technology partnership',
  },
};

export const audienceSlugs = Object.keys(audiences) as (keyof typeof audiences)[];
