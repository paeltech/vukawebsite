import type { CtaLink, FaqItem, StepItem } from './types';

export type PathwaySlug =
  | 'studio-origination'
  | 'founder-in-residence'
  | 'corporate-spinout'
  | 'government-innovation';

export interface PathwayCopy {
  slug: PathwaySlug;
  eyebrow: string;
  headline: string;
  subcopy: string;
  problem: string;
  steps: StepItem[];
  youBring: string[];
  weBring: string[];
  commercialTerms: string;
  faqs: FaqItem[];
  cta: CtaLink;
  formEnquiryType: string;
}

export const whatWeDo = {
  eyebrow: 'How the studio works',
  headline: `Four ways to build inside the studio.
One standard of execution across all of them.`,
  subcopy: `Where you enter depends on where you're starting.
What Vuka commits to is the same regardless: embedded
operational capacity, hands on the product, and
accountability that doesn't end when a cheque is signed
or a programme completes.`,
  modelDistinction: `The accelerator coaches. The VC watches from a board seat.
The consultancy delivers the report and invoices the hours.
None of them stay through the operational build phase —
the period when a first-time founder most needs someone
who has built a company before.

Vuka stays. That is the model. It is not a positioning claim.
It is a structural commitment: equity alignment, embedded
capacity, and a co-founder relationship that lasts until
the company can stand alone.`,
  bottomCta: `Not sure which pathway fits?
Tell us where you're starting from.`,
  hubPromo: {
    eyebrow: 'On the home page',
    headline: 'How we build',
    body: 'Four pathways — origination, founder-in-residence, corporate spinouts, and government innovation — with one standard of execution.',
    cta: { label: 'See pathways on home', href: '/#pathways' },
  },
  thesisLink: {
    label: 'Read our thesis',
    href: '/our-thesis',
    description: 'Sector focus and published arguments live in the thesis.',
  },
} as const;

export const pathways: Record<PathwaySlug, PathwayCopy> = {
  'studio-origination': {
    slug: 'studio-origination',
    eyebrow: '01 · Studio Origination',
    headline: `Vuka identifies the opportunity.
You co-found it.
We build it together.`,
    subcopy: `Studio Origination is for domain experts who want to
build a technology company without starting from zero.
Vuka originates the venture, validates the market, and
brings you in as a co-founding partner with meaningful
equity from day one.`,
    problem: `The people who understand a market most deeply are
not always the ones with the co-founding team or the
technical infrastructure to build a company around
what they know.

You have spent years in your sector. You have seen
the gap. You know the customers. You know what the
product needs to do.

What you don't have is a product team, an engineering
function, a go-to-market structure, or a founding
partner who has built a technology company before.

Studio Origination is built for exactly that position.
Vuka brings the infrastructure. You bring the domain.
Together, we build the company.`,
    steps: [
      {
        title: 'Step 01 · Market research and origination',
        body: `Vuka continuously analyses East African markets across
four sector focus areas. Ideas are generated from pattern
recognition — not waited for.`,
      },
      {
        title: 'Step 02 · Internal validation',
        body: `Before a founding partner is approached, the idea is
validated: market sizing, customer interviews, competitive
mapping, and unit economics modelling. We don't build on
untested assumptions.`,
      },
      {
        title: 'Step 03 · Founding partner identification',
        body: `Vuka identifies a domain expert — someone with deep
sector knowledge who understands the problem at ground
level. We structure an equity co-founding arrangement
with clear contributions from both sides.`,
      },
      {
        title: 'Step 04 · Build sprint',
        body: `The venture enters Vuka's 90-day build sprint. Product,
technology, go-to-market, and operational infrastructure
are built simultaneously. The output is a working product —
not a pitch deck.`,
      },
    ],
    youBring: [
      'Deep sector or domain expertise',
      'Customer relationships in the target market',
      `An understanding of the problem no external researcher
can replicate`,
      'A commitment to co-build — not to supervise',
    ],
    weBring: [
      'The venture idea, market-validated before you arrive',
      'Product management and engineering capacity',
      'Go-to-market and sales structure',
      'Financial modelling and operational infrastructure',
      `East African ecosystem relationships and regulatory
navigation experience`,
      `Access to big tech build tool credits through our
partnership pursuit with AWS Activate, Google for
Startups, Microsoft for Startups, and Anthropic`,
    ],
    commercialTerms: `Equity is structured per venture based on the relative
contribution of the founding partner and the studio.
Terms are defined clearly at the outset and documented
in a co-founding agreement before the build begins.

There is no generic equity split. There is a structured
conversation about what each party brings — and a fair
arrangement that reflects that.`,
    faqs: [
      {
        question: 'Do I give up control if Vuka is a co-founder?',
        answer: `Co-founding is a partnership, not a takeover. Governance
structure, decision rights, and equity splits are defined
at the outset. You are not an employee. You are a co-founder.
The conversation about structure happens before any
commitment is made.`,
      },
      {
        question: 'What sectors is Vuka originating in right now?',
        answer: `B2B infrastructure and fintech, applied AI for traditional
industries (agriculture, logistics, healthcare), climate
and energy access, and government digital services. If you
have deep expertise in one of these areas and a strong
view on a specific opportunity, that is the conversation
to have.`,
      },
      {
        question: `What does Vuka bring that I couldn't hire independently?`,
        answer: `The studio brings embedded co-building — not a service
provider relationship. We are in the venture with equity,
accountable for the outcome, and present through the entire
build phase. Hiring a product agency delivers a product.
Co-founding with Vuka builds a company.`,
      },
    ],
    cta: {
      headline: `You know the market.
We know how to build in it.`,
      label: 'Express interest in Studio Origination →',
      href: '/work-with-us',
    },
    formEnquiryType: 'Studio Origination',
  },

  'founder-in-residence': {
    slug: 'founder-in-residence',
    eyebrow: '02 · Founder-in-Residence',
    headline: `Your idea.
Our build capacity.
90 days to first product.`,
    subcopy: `Founder-in-Residence is for founders who have a validated
idea and deep market knowledge — and who need a co-builder
with embedded operational capacity, not a programme with
a curriculum.`,
    problem: `You understand your market. You have talked to customers.
You know what the product needs to do. You may even have
a first version sketched out.

What you don't have is a complete co-founding team — the
product manager, the engineer, the go-to-market lead, the
finance person — all at once, all committed, all available.

Building alone means building slowly, building expensively,
and building without the institutional knowledge that comes
from having done it before. Accelerators offer a programme
and a network. Then they leave. You are back to building
alone, except now you've spent three months in workshops.

Founder-in-Residence puts you inside the studio. Vuka
embeds across your venture — product, technology,
go-to-market, finance — with equity alignment and a
structured 90-day sprint to a working first product.

You don't graduate. The company gets built.`,
    steps: [
      {
        title: 'Step 01 · Application and selection',
        body: `You apply with your idea, your market context, and an
honest account of where you are and what you need.
Vuka reviews every application. Selection is based on
market validity, founder-market fit, and sector alignment.
Not on pitch quality.`,
      },
      {
        title: 'Step 02 · Scoping and onboarding',
        body: `A working session to map your idea against Vuka's build
capacity, validate the market hypothesis, and agree on
the equity and operational terms. This takes one to two
weeks. No commitment is required to start this conversation.`,
      },
      {
        title: 'Step 03 · 90-day build sprint',
        body: `You move inside the studio. Product, engineering,
go-to-market, and operational infrastructure are built
simultaneously across a 90-day sprint. The output: a
working product in the hands of real users. Not a prototype.
Not a wireframe. A product.`,
      },
      {
        title: 'Step 04 · Post-sprint operational support',
        body: `Vuka stays. After the sprint, we continue as operational
co-founders — supporting the first sales cycle, the first
hire, the first fundraise. The engagement doesn't end
because the sprint does.`,
      },
    ],
    youBring: [
      'A validated idea with clear market evidence',
      'Deep knowledge of the customer and the problem',
      'A commitment to build — not just to explore',
      'Sector experience that no external partner can replicate',
    ],
    weBring: [
      'Embedded product management and engineering capacity',
      'Go-to-market structure and early sales execution',
      'Financial modelling and operational infrastructure',
      `A venture lab cheque ($5,000–$15,000) to fund the
initial build`,
      `AI-native build tooling — compressed build timelines
through Claude Code, Cursor, and GitHub Copilot as
studio shared infrastructure`,
      `Access to big tech credit programs through our pursuit
of ecosystem partner status with AWS Activate, Google
for Startups, Microsoft for Startups, and Anthropic`,
      `Regulatory navigation and East African market calibration
built from over a decade of operating in this ecosystem`,
    ],
    commercialTerms: `Vuka takes 10–20% equity in exchange for embedded
operational capacity, the venture lab cheque, and
ongoing co-founder support. The specific split is
discussed during the scoping session and reflects the
relative contribution of the founder and the studio.

This is a co-founder arrangement, not a service
agreement. Vuka's return is tied to the venture's
outcome — which is exactly why the co-building is real.`,
    faqs: [
      {
        question: 'How much equity does Vuka take?',
        answer: `10–20%, structured per venture based on the scoping
conversation. The range reflects different levels of
studio contribution — more embedded capacity, more equity.
Terms are agreed before any work begins.`,
      },
      {
        question: 'What does the 90-day sprint actually produce?',
        answer: `A working product in the hands of real users. The sprint
produces a minimum viable product validated by actual
customer interaction — not a prototype shown in a pitch.
What specifically gets built is defined during the scoping
session based on your market and your idea.`,
      },
      {
        question: `What if my idea isn't in your sector focus?`,
        answer: `Vuka builds in four sectors: B2B fintech, applied AI,
climate and energy, and government digital services.
If your idea sits outside these areas, the honest answer
is that our operational depth is calibrated to these
sectors and we are likely not the right co-builder for
a venture outside them. We will tell you that directly.`,
      },
      {
        question: `What happens if the build doesn't work?`,
        answer: `If the 90-day sprint produces evidence that the market
hypothesis is wrong, we stop and say so. Vuka's equity
stake gives us the same incentive you have: only continue
if the product has a real chance. We do not build for
the sake of building.`,
      },
    ],
    cta: {
      headline: `The programme ends.
The build continues.
Apply to build with us.`,
      label: 'Apply to Founder-in-Residence →',
      href: '/work-with-us',
      microcopy:
        'We read every application and respond within two working days.',
    },
    formEnquiryType: 'Founder-in-Residence',
  },

  'corporate-spinout': {
    slug: 'corporate-spinout',
    eyebrow: '03 · Corporate Spinout',
    headline: `Your internal idea deserves
more than a committee.`,
    subcopy: `Corporate Spinout is for organisations with a validated
internal innovation that cannot get built through internal
processes at the pace the market requires. Vuka co-builds
it as a standalone venture — with equity alignment that
holds both parties accountable for the outcome.`,
    problem: `You have watched the pattern before. A credible internal
idea. A sponsor with budget and conviction. Months of
internal approval processes. A specification handed to
an IT team or an external agency. A delivery that arrives
late, costs more than projected, and requires months of
additional work before it can go to market.

Or it dies in committee before it even gets that far.

The consultancy model compounds the problem. A management
consultancy delivers a strategy document and a recommended
roadmap. Then they invoice and move to the next engagement.
No equity alignment. No accountability for whether the
venture works. The institutional knowledge walks out the
door with the project team.

The internal team has the same problem in reverse: calibrated
for the core business, competing for resource attention with
quarterly targets, and building inside an organisational
culture that is structurally incompatible with startup-speed
product development.

Vuka is neither of these things. We co-build the spinout
as a founding partner — with an equity warrant that ties
our return to the venture's success, not to the contract's
delivery.`,
    steps: [
      {
        title: 'Step 01 · Scoping conversation',
        body: `A working session to assess the idea, the internal sponsor,
the target market, and what the spinout requires from Vuka.
No commitment required to begin. The output: a clear scope
of engagement and an honest assessment of fit.`,
      },
      {
        title: 'Step 02 · Commercial structure',
        body: `Fee-for-service plus equity warrant. The fee covers the
operational cost of the engagement. The warrant aligns
Vuka's return to the venture's long-term success. Terms
are agreed before any work begins — including IP ownership
(retained by the corporate parent) and governance structure.`,
      },
      {
        title: 'Step 03 · Build',
        body: `Vuka embeds across product, technology, go-to-market,
and operational infrastructure. The spinout is built as
a standalone company from day one — not as an internal
project that later needs to be restructured.`,
      },
      {
        title: 'Step 04 · Stand-alone',
        body: `Vuka stays until the company can operate independently.
That is not a fixed timeline — it is a defined outcome.
The engagement ends when the spinout has the internal
capacity to run without Vuka in the room.`,
      },
    ],
    youBring: [
      `A validated internal idea with clear market evidence
and internal sponsorship`,
      `Access to the market, the distribution channels,
and the customer relationships the spinout needs`,
      'Budget for the engagement fee',
      'A named internal champion with decision-making authority',
    ],
    weBring: [
      `Co-founder-level operational commitment with equity
alignment — not a vendor relationship`,
      `Product and engineering capacity calibrated for
East African market realities`,
      'Go-to-market structure and early sales execution',
      `Financial and operational infrastructure built from
day one — not retrofitted after launch`,
      `East African corporate and regulatory navigation from
over a decade of operating in this market`,
      `Smart Foundry relationship network as a warm entry
point into East African corporate ecosystems`,
    ],
    commercialTerms: `Engagement structure: fee-for-service plus equity warrant.

The fee covers embedded operational capacity for the
duration of the build. It is scoped per engagement
based on build complexity and timeline.

The equity warrant gives Vuka a stake in the spinout's
long-term success. Standard warrant terms are available
for review before the scoping conversation.

IP ownership is retained by the corporate parent.
This is a standard term, not a negotiation point.

All terms are agreed and documented before any work begins.`,
    faqs: [
      {
        question: 'How does the fee structure work?',
        answer: `The fee is scoped per engagement. It reflects the
complexity of the build, the level of embedded capacity
required, and the timeline. The scoping conversation
produces a specific fee proposal — not a rate card.`,
      },
      {
        question: 'Who owns the IP?',
        answer: `The corporate parent retains full IP ownership. Vuka's
stake is an equity warrant in the spinout venture — not
a claim on the intellectual property of the product.
This is a standard term in every engagement.`,
      },
      {
        question: 'What happens to the team after launch?',
        answer: `The spinout is built to operate independently. By the
time the venture is ready to stand alone, it has an
internal team capable of running without Vuka's embedded
capacity. Vuka exits the operational role but retains
the equity warrant position as a long-term stakeholder.`,
      },
      {
        question: 'How is this different from hiring a digital agency?',
        answer: `A digital agency delivers a product. Vuka builds a
company. The distinction is the equity warrant — it
means our incentive is the venture's long-term success,
not the contract's completion. An agency that delivers
a product and invoices has no reason to care what
happens after handover. We do.`,
      },
    ],
    cta: {
      headline: `The idea has been in committee
long enough.`,
      label: 'Start a spinout conversation →',
      href: '/work-with-us',
      microcopy:
        'The scoping conversation is one working session. No commitment required to begin.',
    },
    formEnquiryType: 'corporate spinout',
  },

  'government-innovation': {
    slug: 'government-innovation',
    eyebrow: '04 · Government Innovation & Transformation',
    headline: `Your agency needs a working service.
Not another transformation roadmap.`,
    subcopy: `Government Innovation is for East African public sector
agencies with digital transformation mandates and timelines
that standard procurement cannot meet. Vuka co-builds
scoped digital government services — a working service
in 90 days, not an 18-month implementation plan.`,
    problem: `You have a mandate. You have a timeline. You have a clear
view of exactly why the standard options for delivering
against both of them produce the same result: late, over
budget, and requiring months of additional work before
real citizens can use what was built.

Traditional IT procurement takes 12–18 months from tender
to delivery. The specification-driven build process produces
a technically delivered system that often reflects what
was written in the brief — not what citizens actually need.

Management consultancies produce transformation roadmaps
and change management recommendations. These are real
deliverables. They are not the thing your mandate requires.
The thing your mandate requires is a working digital service.

Your internal team — where it exists — is maintaining what
was already built. New mandates arrive without the internal
capacity to execute them.

Vuka is not a consultancy, an IT systems integrator, or
a policy adviser. We build working digital services —
designed for the actual users of the service, delivered
inside a defined timeline, and scoped honestly from
the first conversation.`,
    steps: [
      {
        title: 'Step 01 · Scoping engagement',
        body: `A working session to map your specific mandate against
a defined build scope. What needs to be built. Who the
users are. What the timeline requires. What the procurement
pathway looks like. No commitment required to begin.`,
      },
      {
        title: 'Step 02 · Pilot design',
        body: `Vuka proposes a scoped pilot engagement: a defined service,
a defined user group, a defined 90-day build timeline,
and milestone-based delivery. The pilot is designed to
produce a working service — not a proof of concept
that requires another procurement cycle to scale.`,
      },
      {
        title: 'Step 03 · Build',
        body: `Vuka embeds. Product, engineering, and UX are built
specifically for East African operating realities:
SMS-first architecture for low-smartphone-penetration
user groups, Swahili-language interfaces where required,
offline-capable design where connectivity is unreliable,
and integration with existing government data infrastructure.`,
      },
      {
        title: 'Step 04 · Handover and capability transfer',
        body: `The working service is delivered with full documentation,
training for internal teams, and a defined handover process.
Where DFI co-financing is available to support the
engagement, Vuka can help structure the funding pathway.`,
      },
    ],
    youBring: [
      'A specific digital mandate and a named executive sponsor',
      `Access to the citizens, the workflows, and the data
infrastructure the service needs to connect to`,
      `A defined budget envelope or an openness to explore
DFI co-financing options`,
      `Decision-making authority to commission a scoped
engagement outside standard IT procurement`,
    ],
    weBring: [
      `Product and engineering capacity calibrated for
East African public sector operating realities —
not adapted from a Western template`,
      `A 90-day build methodology that produces a working
service inside the timeline your mandate requires
(90 days = a working service in citizen hands,
not a completed specification)`,
      `DFI relationship access — our sector focus in
government digital services aligns with the
deployment mandates of IFC, UKAID, African
Development Bank, and GIZ`,
      `Hakiki as a documented proof of delivery:
a dual-channel product traceability service built
for the Tanzanian market, deployed with TOSCI and
ASA, and recognised at the presidential level`,
    ],
    commercialTerms: `Government engagements are structured as scoped,
milestone-based delivery contracts. Unlike corporate
spinout engagements, there is no equity warrant component
for government clients.

Pricing is agreed per engagement based on the scope of
the service, the build timeline, and the level of embedded
capacity required.

Vuka can support the identification of DFI co-financing
instruments that may apply to your engagement — reducing
or eliminating the government budget requirement in some
cases. This is discussed during the scoping conversation.`,
    faqs: [
      {
        question: 'Is this different from hiring a consultancy?',
        answer: `Fundamentally, yes. A consultancy delivers a recommendation
or a specification. Vuka delivers a working service. The
output is not a document — it is a digital service that
citizens can use. If you need a transformation strategy
or a policy recommendation, we are not the right partner.
If you need something built, we are.`,
      },
      {
        question: 'How does Vuka engage with government procurement?',
        answer: `We understand that standard government procurement
processes exist for good reasons and that working outside
them requires appropriate authority. The scoping conversation
is designed to explore what a Vuka engagement looks like
inside your specific procurement context — before any
formal process begins. We do not assume procurement
flexibility that does not exist.`,
      },
      {
        question: 'What does a scoped pilot engagement look like?',
        answer: `A defined service for a defined user group, delivered
in 90 days. The pilot is sized to be meaningful — not
a token proof of concept — but scoped to fit inside a
procurement envelope that does not require a full tender
process. The scoping conversation defines the specifics.`,
      },
      {
        question: 'Can Vuka connect us to DFI funding instruments?',
        answer: `Yes, where applicable. Vuka's sector focus in government
digital services aligns with DFI deployment mandates in
East Africa. We can support the identification and
structuring of co-financing options from IFC, UKAID,
African Development Bank, and GIZ. This is not guaranteed
for every engagement — but it is worth exploring in the
scoping conversation.`,
      },
    ],
    cta: {
      headline: `The mandate exists.
The internal capacity to execute it doesn't.
That gap has a solution.`,
      label: 'Explore a government engagement →',
      href: '/work-with-us',
      microcopy: `We understand procurement realities. The first conversation
scopes what a Vuka engagement looks like inside your
specific context — before any formal process begins.`,
    },
    formEnquiryType: 'government engagement',
  },
};
