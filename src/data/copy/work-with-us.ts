export const workWithUs = {
  header: {
    headline: "Tell us where you're starting from.",
    subcopy: `We read every message. If there's a conversation
to have, we'll find it — and get back to you
within two working days.`,
  },
  formHeader: {
    headline: "Tell us where you're starting from.",
    subcopy: `We read every message. If there's a conversation
to have, we'll find it.`,
  },
  routingCards: [
    {
      headline: 'You want to build inside the studio',
      body: `You have an idea, deep market knowledge, and the conviction
to build. You're looking for a co-builder with operational
capacity — not a programme with a curriculum.`,
      cta: { label: 'Apply as a founder →', href: '/work-with-us?type=founder' },
      formEnquiryType: 'I want to build inside the studio (Founder-in-Residence)',
    },
    {
      headline: 'You want to spin something out',
      body: `You have a validated internal idea your organisation can't
execute independently. You need a co-builder with skin in
the game — not a consultancy with a retainer.`,
      cta: { label: 'Start a spinout conversation →', href: '/work-with-us?type=corporate' },
      formEnquiryType: 'I want to explore a corporate spinout',
    },
    {
      headline: 'You want to deliver for citizens, faster',
      body: `You have a digital transformation mandate and a timeline
that internal capacity cannot meet. You need a team
that builds working services — not one that advises.`,
      cta: { label: 'Talk to us about a government engagement →', href: '/work-with-us?type=government' },
      formEnquiryType: 'I want to explore a government engagement',
    },
    {
      headline: "You're evaluating the studio",
      body: `You're a DFI, development investor, or fund looking at
the East African venture studio gap. You want to understand
the thesis, assess the stage, and decide if this conversation
is worth having in more depth.

It is. Start here.`,
      cta: { label: 'Talk to us about studio investment →', href: '/work-with-us?type=investor' },
      formEnquiryType: "I'm interested in studio-level investment or partnership (DFI / investor)",
    },
    {
      headline: 'You want to reach East African founders',
      body: `You run a startup program, developer relations initiative,
or ecosystem partnership. East African founders can't reach
your program through the current partnership structure.
Vuka can change that.`,
      cta: { label: 'Explore a partnership →', href: '/work-with-us?type=partner' },
      formEnquiryType: 'I want to explore a technology partnership',
    },
  ],
  enquiryOptions: [
    'I want to build inside the studio (Founder-in-Residence)',
    "I'm interested in Studio Origination",
    'I want to explore a corporate spinout',
    'I want to explore a government engagement',
    "I'm interested in studio-level investment or partnership (DFI / investor)",
    'I want to explore a technology partnership',
    'Something else',
  ],
  fields: {
    name: { label: 'Your name', placeholder: 'First and last' },
    organisation: { label: 'Organisation', placeholder: 'Company or institution' },
    enquiry: { label: 'What brings you here?' },
    message: {
      label: 'What are you building or exploring?',
      placeholder:
        "Tell us about your situation, idea, or the conversation you'd like to have.",
    },
  },
  submitLabel: 'Send your message →',
  success: {
    title: 'Message received.',
    body: `We'll get back to you within two working days.

In the meantime — the published thesis is at
vukaventures.co/our-thesis.`,
    thesisLink: '/our-thesis',
  },
  errors: {
    general: 'A few fields need your attention before we can send this.',
    required: 'This field is required.',
    email: "Check this email — it doesn't look quite right.",
  },
  directContact: {
    label: 'Prefer to reach out directly?',
    email: 'hello@vukaventures.co',
  },
} as const;

export const enquiryTypeMap: Record<string, string> = {
  founder: 'I want to build inside the studio (Founder-in-Residence)',
  origination: "I'm interested in Studio Origination",
  corporate: 'I want to explore a corporate spinout',
  government: 'I want to explore a government engagement',
  investor: "I'm interested in studio-level investment or partnership (DFI / investor)",
  partner: 'I want to explore a technology partnership',
};
