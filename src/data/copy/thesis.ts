export const thesisPage = {
  header: { eyebrow: 'Our thesis', headline: 'AI changes the build. The market still decides.' },
  summary: 'Vuka’s AI-native studio thesis: combine AI product development, local market knowledge and operating capacity to build companies for East Africa. Explore the thinking behind the approach.',
  essaysLabel: 'Essays',
  emptyState: 'Our essays will appear here as they are published.',
} as const;

export const journalPage = {
  header: {
    eyebrow: 'Studio journal',
    headline: 'Notes from an AI-native build.',
    subcopy: 'Products, AI systems and the work of building companies in East African markets. Explore the decisions and questions behind the studio’s work.',
  },
  thesisLink: { label: 'Read our thesis', href: '/our-thesis' },
  emptyState: 'Studio notes will appear here as they are published.',
  filterEmpty: 'No entries match this topic yet.',
} as const;
