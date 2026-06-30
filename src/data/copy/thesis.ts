export const thesisPage = {
  header: {
    eyebrow: 'Our Thesis',
    headline: `Informed by onground experience`,
  },
  summary: `East Africa does not have an idea problem or a talent shortage—it has an execution bottleneck, compounded quarterly by fragmented infrastructure. Traditional models—accelerators, incubators, and standard VCs—are structured to extract equity or data at the moment of contact, leaving the heavy lifting to the founder. None of them stay in the room. Vuka structurally closes both gaps by embedding elite operational capacity and anchoring the venture through the entire build phase. These arguments are our blueprint.`,
  essaysLabel: 'Published Thesis Essays',
  emptyState: 'Our core essays are currently being finalized for publication.',
} as const;

export const journalPage = {
  header: {
    eyebrow: 'Studio Journal',
    headline: 'The intellectual architecture of our builds.',
    subcopy: `How Vuka thinks. What we are architecting. What the market is teaching us. Published only when we have a specific, validated perspective to share.`,
  },
  thesisLink: { label: 'Read Our Thesis', href: '/our-thesis' },
  emptyState: "We are currently documenting our initial builds. Check back shortly.",
  filterEmpty: 'No entries match this tag yet.',
} as const;
