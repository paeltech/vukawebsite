export const workWithUs = {
  header: {
    headline: "Tell us where you're starting from.",
    subcopy: `We read every message. If there's a conversation
to have, we'll find it — and get back to you
within two working days.`,
  },
  formHeader: {
    headline: 'Send your message',
    subcopy: `Choose what brings you here in the form. If you're still orienting, start with the audiences overview on the home page or open a route below.`,
  },
  startingPoints: [
    { label: 'See audiences on home', href: '/#audiences' },
    { label: 'Founders', href: '/founders' },
    { label: 'Corporates', href: '/corporates' },
    { label: 'Government', href: '/government' },
    { label: 'Investors & DFIs', href: '/investors' },
    { label: 'Technology partners', href: '/partners' },
    { label: 'Join our team', href: '/#join-team' },
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
