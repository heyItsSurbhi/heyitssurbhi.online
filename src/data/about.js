export const summary = [
  'I’m a Lead Product Owner with 8+ years in technology across banking, healthcare, and e-commerce. I started as a software developer, and I bring that technical grounding to product decisions, from choosing which customer problems to solve to making trade-offs with engineering and improving what we ship.',
  'At Citibank, I led an AI-powered conversational credit card issuance platform serving millions of customers globally. We simplified the journey from application to issuance and cut turnaround from 3–5 days to within 24 hours.',
  'At GE HealthCare, I contributed to Portrait Mobile, a wearable solution for continuous patient monitoring, and AI-enabled infant monitoring initiatives. That work shaped how I approach high-stakes products, where users need to understand information quickly and act with confidence.',
  'At ALDO, I built responsive shopping features as a developer and later worked on digital commerce as a Product Owner. I bring design, engineering, business, and operations together from discovery and roadmap prioritisation through launch and iteration.',
  'I’m especially interested in using AI to simplify complex journeys and give customers a clearer next step. Open to Product Manager, Senior Product Manager, and Lead Product Manager opportunities.',
];

export const about = {
  summary,
  education: [
    {
      id: 'cspo',
      group: 'certification',
      credential: 'Certified Scrum Product Owner (CSPO)',
      institution: 'Certification',
      period: 'Certified',
    },
    {
      id: 'azure-fundamentals',
      group: 'certification',
      credential: 'Microsoft Certified: Azure Fundamentals',
      institution: 'Microsoft',
      period: 'Certified',
    },
    {
      id: 'azure-ai',
      group: 'certification',
      credential: 'Microsoft Certified: Azure AI Fundamentals',
      institution: 'Microsoft',
      period: 'Certified',
    },
    {
      id: 'prompt',
      group: 'certification',
      credential: 'Prompt Engineering for Generative AI',
      institution: 'Certification',
      period: 'Certified',
    },
    {
      id: 'copilot',
      group: 'certification',
      credential: 'Microsoft Copilot: AI Prompts & Workflows',
      institution: 'Microsoft',
      period: 'Certified',
    },
    {
      id: 'btech',
      group: 'education',
      credential: 'Bachelor of Technology — Computer Science',
      institution: 'Maharashtra Institute of Technology, Aurangabad',
      period: '2014 – 2017',
    },
  ],
  languages: [{ id: 'english', name: 'English', level: 'Full professional' }],
};

export const skillGroups = [
  {
    id: 'strategy',
    label: 'Product Strategy & Leadership',
    skills: [
      'Product Discovery',
      'Product Strategy',
      'Roadmap Ownership',
      'Product Lifecycle Management',
      'MoSCoW Prioritization',
      'Backlog Prioritization',
      'Product Launch & Iteration',
    ],
  },
  {
    id: 'customer',
    label: 'Customer & Business Management',
    skills: [
      'Customer Discovery',
      'User Research',
      'Stakeholder Management',
      'B2B Enterprise Products',
    ],
  },
  {
    id: 'ai',
    label: 'AI-Powered Products',
    skills: [
      'AI-Powered Products',
      'Conversational AI',
      'Prompt Engineering',
      'Microsoft Copilot',
    ],
  },
  {
    id: 'technical',
    label: 'Technical foundation',
    skills: [
      'TypeScript',
      'Angular',
      'JavaScript',
      'HTML',
      'CSS',
      'User Stories',
      'Acceptance Criteria',
      'Systems Integration',
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.skills);

export const toolGroups = [
  {
    id: 'planning',
    label: 'Planning & Delivery',
    tools: ['Jira', 'Azure DevOps'],
  },
  {
    id: 'requirements',
    label: 'Requirements & Documentation',
    tools: ['Confluence', 'Notion', 'Citi Stylus Workspaces (Enterprise Banking AI)'],
  },
  {
    id: 'discovery',
    label: 'Discovery & Collaboration',
    tools: ['Miro', 'Figma'],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    tools: ['SQL', 'Microsoft Excel'],
  },
];

export const tools = toolGroups.flatMap((group) => group.tools);
