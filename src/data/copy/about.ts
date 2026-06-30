import type { CtaLink, PageHeader } from './types';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  href?: string;
  credentials: string[];
}

export interface OperatingPrinciple {
  title: string;
  body: string;
}

export const aboutPage = {
  header: {
    eyebrow: 'About the studio',
    headline: `Operators who stay\nin the room.`,
    subcopy: `Vuka is an East African venture studio built by people
who have spent a decade inside the ecosystem — not
observing it from the outside. This page is who we are,
how we work, and what we commit to.`,
  } satisfies PageHeader,
  story: `The studio exists because the same gap kept appearing.

Founders with market knowledge and no co-founding infrastructure.
Corporates with validated ideas that died in committee.
Government agencies with mandates and no product capacity to
execute them. Investors funding accelerators that polish founders
and leave before the build phase ends.

Vuka is the response: a venture studio that embeds operational
depth inside ventures — product, engineering, go-to-market,
regulatory navigation — and stays through the build phase.

The founding argument is published. The methodology is defined.
The first portfolio venture is operational. The team is growing
into the studio the East African ecosystem has been missing.`,
  principles: [
    {
      title: 'Co-execution, not coaching',
      body: `We do not run programmes that end before the product ships.
We embed inside ventures with equity alignment and build until
the company can stand alone.`,
    },
    {
      title: 'Published arguments',
      body: `Our operating thesis is public, specific, and subject to
rebuttal. Named institutions. Named mechanisms. That is how
we attract the founders, partners, and investors worth working with.`,
    },
    {
      title: 'Stage honesty',
      body: `We are at founding stage and we say so. We do not claim
portfolio depth or team scale we have not earned. What we
commit to is documented and verifiable.`,
    },
    {
      title: 'East African operating reality',
      body: `We build for SMS-first verification, mixed digital literacy,
unreliable connectivity, and the regulatory relationships
required to make services enforceable — not just visible.`,
    },
  ] satisfies OperatingPrinciple[],
  team: [
    {
      name: 'Paul Mandele',
      role: 'Founder · Venture Builder',
      bio: `Paul has spent over a decade inside the East African startup
ecosystem as an operator — co-founding companies, managing
innovation hubs, running accelerator programmes, and building
ventures inside corporations across Dar es Salaam, Nairobi, and Kampala.

He currently leads venture building and business operations at
Smart Foundry. Vuka is what a decade of watching the same gap
appear — and knowing exactly what fills it — produces.`,
      href: 'https://paulmandele.co',
      credentials: [
        'Smart Foundry',
        '10+ years East Africa',
        'Accelerator programmes',
        'Innovation hubs',
        'Corporate ventures',
        'Published thought leadership',
      ],
    },
  ] satisfies TeamMember[],
  cta: {
    headline: 'Ready to build with a studio that stays in the room?',
    label: 'Work with us →',
    href: '/work-with-us',
  } satisfies CtaLink,
} as const;
