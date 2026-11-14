/**
 * Reading lenses for hiring managers. These are target-role frames,
 * not claims of employment or specialist credentials.
 */
export const focuses = [
  {
    id: 'all',
    label: 'All work',
    shortLabel: 'All',
    hiringContext: 'Show every published case study in chronological or featured order.',
    lookFor: [],
    exampleDomains:
      'Use this when you want the full set of decisions, not a role-specific cut.',
  },
  {
    id: 'ai-complex',
    label: 'AI and complex systems',
    shortLabel: 'AI & systems',
    hiringContext:
      'Useful when assessing fit for technically complex B2B products involving AI/ML, ecosystem management, GIS, remote sensing, or scientific stakeholders.',
    lookFor: [
      'technical discovery',
      'AI/ML evaluation',
      'scientific uncertainty',
      'data quality',
      'B2B adoption',
      'field operations',
    ],
    exampleDomains:
      'For example, roles that require judgement under incomplete data and alignment with scientific or operational experts.',
    transferableNote:
      'Matching case studies are tagged only where the work actually involved these problems. Transferable experience is labelled as such and is not implied employment.',
  },
  {
    id: 'healthcare-commerce',
    label: 'Healthcare and commerce',
    shortLabel: 'Health & commerce',
    hiringContext:
      'Useful when assessing fit for digital healthcare, online pharmacy, telehealth, e-commerce, integrations, backlog ownership, and coordinated delivery.',
    lookFor: [
      'integrations',
      'delivery ownership',
      'clinical and operational workflows',
      'privacy requirements',
      'safe failure handling',
    ],
    exampleDomains:
      'For example, roles that coordinate product, operations, and partner systems without assuming clinical credentials.',
    transferableNote:
      'This filter does not imply legal, clinical, or compliance qualifications. Only tagged, evidenced work is highlighted.',
  },
  {
    id: 'platforms-scale',
    label: 'Platforms and scale',
    shortLabel: 'Platforms',
    hiringContext:
      'Useful when assessing fit for product strategy, research, experimentation, adoption, commercial value, AI/data platforms, and operational reliability.',
    lookFor: [
      'experimentation',
      'OKRs',
      'adoption',
      'commercial trade-offs',
      'platform dependencies',
      'reliability',
    ],
    exampleDomains:
      'For example, roles that weigh platform constraints against customer and commercial outcomes.',
    transferableNote:
      'Relevance is explained through the actual decisions in each case study, not through implied tenure at any retailer or platform organisation.',
  },
];
