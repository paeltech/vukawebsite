export interface StaticEssay {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  featured?: boolean;
  comingSoon?: boolean;
  canonicalUrl?: string;
  paragraphs?: string[];
}

export const thesisPage = {
  header: {
    headline: `We build on published arguments,
not assumptions.`,
    subcopy: `These are the arguments Vuka is built on. They are named,
specific, and subject to rebuttal. That is the point.
A studio with a public operating thesis attracts the
founders, partners, and investors worth working with.`,
  },
  statement: `Vuka's founding argument is this:

The East African startup ecosystem does not have
an idea problem. It does not have a talent problem.
It has a co-execution problem — and an infrastructure
problem that makes the co-execution problem worse
every quarter.

The co-execution problem: the infrastructure that
converts founder ambition into a working product —
operational depth, technical capacity, market calibration —
is thin, unevenly distributed, and almost entirely absent
for founders building outside the four dominant funding
markets. Every existing model — accelerator, incubator,
VC — extracts value at the moment of contact and leaves.
None of them stay in the room and build.

The infrastructure problem: the tools that define
competitive product building in 2026 — AI-assisted
development environments, cloud infrastructure, critical
SaaS build tooling — are available at reduced or zero cost
to founders inside Western-backed institutional pipelines.
East African founders are structurally excluded from these
programs not because they are ineligible, but because the
partnership gateway is concentrated in markets where they
are not. This is a design failure. Not an awareness failure.

Vuka is built to close both gaps — structurally, not
aspirationally. The studio model is the right vehicle
because it is the only model that stays in the room.
These arguments are published and specific. They are
subject to rebuttal. That is the point.`,
  subscribe: {
    copy: `We publish new arguments when we have something
specific to say. No volume. No noise.`,
    placeholder: 'Your email',
    cta: 'Notify me →',
  },
} as const;

export const staticThesisEssays: StaticEssay[] = [
  {
    slug: 'venture-engines',
    title: `Africa Doesn't Need More Startup Accelerators. It Needs Venture Engines Instead.`,
    date: 'April 14, 2026',
    tag: 'Studio model',
    excerpt: `The accelerator model was invented for founders who
already have 80% of what they need. Most East African
founders are starting at 30%. Coaching doesn't close
that gap. Co-building does.`,
    featured: true,
    paragraphs: [
      `The accelerator model was invented for founders who already have 80% of what they need. Most East African founders are starting at 30%. Coaching doesn't close that gap. Co-building does.`,
      `Every existing model — accelerator, incubator, VC — extracts value at the moment of contact and leaves. None of them stay in the room and build. A venture engine — a studio with embedded operational capacity and equity alignment — is the structural answer.`,
      `Vuka is built on this argument. It is published, specific, and subject to rebuttal. That is the point.`,
    ],
  },
  {
    slug: 'the-100-problem',
    title: `The $100 Problem: Why Big Tech's Startup Programs Are Failing African Founders`,
    date: '2025',
    tag: 'Infrastructure',
    excerpt: `The credits exist. The door is closed. The mechanism that keeps it closed is specific — and so is the fix.`,
    paragraphs: [
      `AWS Activate, Google for Startups, Microsoft for Startups, Anthropic — hundreds of millions in in-kind credits every year. Most East African founders cannot access them.`,
      `Not because they are ineligible. Because these programs are partnership-gated through accelerator and VC networks that have no significant presence on the continent. The design is the problem. Not the awareness.`,
      `Vuka is pursuing ecosystem partner status as an African organisation — opening the door for founders who build inside the studio.`,
    ],
  },
];

export const journalPage = {
  header: {
    headline: 'The arguments we build on.',
    subcopy: `How Vuka thinks. What we're building. What we're learning.
Published when we have something specific to say.`,
  },
  emptyState: "Nothing here yet. We're writing this one.",
} as const;
