// ============================================================
// EDIT THIS FILE TO UPDATE THE SITE.
// Everything visible on the page lives here.
// ============================================================

export type Fact = { label: string; value: string };

export type Experience = {
  company: string;
  descriptor: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

export type MotifKey = 'routes' | 'shield' | 'nodes' | 'grid';

export type Project = {
  name: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
  link: string | null;
  motif: MotifKey;
};

export type SkillGroup = { group: string; items: string[] };

export const site = {
  name: 'Sameer Bin Raees',
  shortName: 'Sameer',
  role: 'Full Stack Engineer',
  tagline: 'I build the systems behind the product.',
  intro:
    'Full stack engineer with a backend focus and 6+ years across Node.js, React, and Go. I work on payments, integrations, real time systems, and API gateways for products in logistics, AI, e-commerce, and payments.',
  location: 'Pakistan',
  timezoneLabel: 'PKT (UTC+5)',
  timezone: 'Asia/Karachi',
  email: 'sameerbinraees@gmail.com',
  availability: 'Open to opportunities',
  github: 'https://github.com/sameerbinraees',
  linkedin: 'https://linkedin.com/in/sameerbinraees',
  resumeUrl: '/Muhammad_Sameer_Bin_Raees_Resume.pdf',
};

export const about: { heading: string; paragraphs: string[]; facts: Fact[] } = {
  heading: 'Backend depth, full stack when it helps',
  paragraphs: [
    'Most of my work sits between the interface and the database: payment flows, third party integrations, real time systems, and API gateways. It is the plumbing that has to keep working whether or not anyone is looking at it.',
    'Over the past six years I have built for logistics SaaS, enterprise platforms, AI products, and e-commerce, with users across North America, MENA, and Australia. I write clean APIs, handle errors properly, and keep code readable for whoever touches it next.',
    'Outside work I tinker with my home solar and battery setup. I like systems I can actually measure.',
  ],
  facts: [
    { label: 'Experience', value: '6+ years' },
    { label: 'Focus', value: 'Node.js, React, Go' },
    { label: 'Base', value: 'Pakistan, Remote worldwide' },
    { label: 'Current', value: 'Backend Engineer at Teamo, Client: Beacon Lighting' },
  ],
};

export const experience: Experience[] = [
  {
    company: 'Teamo',
    descriptor: 'Software outsourcing · Client: Beacon Lighting Group, Australia',
    role: 'Backend Engineer',
    period: 'Oct 2025 – Present',
    location: 'Remote',
    points: [
      'Build and maintain a KrakenD API gateway in Go that pulls commercetools and internal services together behind one set of endpoints for the storefront.',
      'Write backend services in NestJS that connect to commercetools for headless commerce.',
      'Manage infrastructure as code with Terraform, provisioning commercetools resources, AWS IAM roles, and secrets.',
    ],
    stack: ['Go', 'KrakenD', 'NestJS', 'commercetools', 'Terraform', 'AWS'],
  },
  {
    company: 'AMJ Technology Solutions',
    descriptor: 'Enterprise SaaS for MENA · Abu Dhabi',
    role: 'Full Stack Software Development Engineer',
    period: 'Jun 2024 – Oct 2025',
    location: 'Remote',
    points: [
      'Built a RAG based chatbot that raised lead generation and user engagement by 30%.',
      'Rewrote MongoDB aggregation pipelines and added indexes to speed up slow queries.',
      'Automated the full billing lifecycle with Stripe and Zoho, covering discounts, upcharges, usage plans, and failed payments.',
      'Built customer facing dashboards, websites, and landing pages in React, owning the frontend end to end.',
    ],
    stack: ['Node.js', 'React', 'MongoDB', 'LangChain', 'OpenAI', 'Stripe', 'Zoho'],
  },
  {
    company: 'PackageX',
    descriptor: 'Global logistics SaaS platform · Islamabad',
    role: 'Full Stack Developer (Node.js)',
    period: 'Nov 2020 – Jun 2024',
    location: 'Hybrid',
    points: [
      'Integrated several third party carrier APIs to simplify label purchases and speed up checkout.',
      'Built the email systems for the Mailroom and Receive apps, reaching 300k+ recipients.',
      'Built a tier based Stripe payment model that lifted conversion and revenue by 25%.',
      "Integrated HubSpot APIs into the admin portal for the sales team, and reworked the app's pricing structure.",
      'Mentored 10 interns into productive full stack developers.',
    ],
    stack: ['Node.js', 'React', 'Serverless', 'AWS', 'Stripe', 'Postgres', 'OpenSearch', 'HubSpot'],
  },
  {
    company: 'Ingenio',
    descriptor: 'Software development',
    role: 'Full Stack Developer',
    period: 'Jun 2020 – Nov 2020',
    location: 'Hybrid',
    points: [
      'Built responsive UIs in React and backend APIs in Node.js and Express.',
      'Worked on performance and general code quality across the projects I touched.',
    ],
    stack: ['React', 'Node.js', 'Express'],
  },
];

export const projects: Project[] = [
  {
    name: 'Beacon Lighting E-commerce API',
    kind: 'Headless commerce gateway',
    summary:
      "Backend for frontend API gateway that brings the storefront's services together behind KrakenD, with commercetools for headless commerce and AWS infrastructure managed in Terraform. Built for an Australian retail group.",
    points: [],
    stack: ['Go', 'KrakenD', 'NestJS', 'commercetools', 'Terraform', 'AWS'],
    link: null,
    motif: 'nodes',
  },
  {
    name: 'ChatArm',
    kind: 'AI chatbot platform',
    summary:
      "Chatbot platform for handling customer conversations, built on retrieval augmented generation over each business's own content.",
    points: [],
    stack: [
      'Node.js',
      'React.js',
      'AWS',
      'Zoho CRM',
      'Zoho Billing',
      'ZeptoMail',
      'MongoDB',
      'LangChain',
      'RAG',
    ],
    link: 'https://www.chatarm.ai/',
    motif: 'nodes',
  },
  {
    name: 'PackageX Receive',
    kind: 'Last mile delivery',
    summary:
      "PackageX product for the last yard of delivery, tracking packages from the moment they reach your building to the right person's hands.",
    points: [],
    stack: [
      'Node.js',
      'React.js',
      'Serverless',
      'AWS',
      'Stripe',
      'SendGrid',
      'Twilio',
      'Firebase',
      'Postgres',
      'OpenSearch',
      'HubSpot',
      'JOI',
    ],
    link: 'https://packagex.io/products/receive',
    motif: 'routes',
  },
  {
    name: 'PackageX Mailroom',
    kind: 'Digital mailroom platform',
    summary:
      "PackageX's mailroom app for receiving, forwarding, and shipping packages, used by offices, universities, and other large buildings.",
    points: [],
    stack: [
      'Node.js',
      'React.js',
      'Serverless',
      'AWS',
      'Stripe',
      'SendGrid',
      'Twilio',
      'Firebase',
      'Postgres',
      'ElasticSearch',
      'JOI',
    ],
    link: 'https://packagex.io/solutions/mailroom',
    motif: 'grid',
  },
  {
    name: '3cix Applicant Tracking System',
    kind: 'Hiring platform',
    summary:
      'Applicant tracking system where candidates apply and recruiters post roles and upload CVs. It runs a talent pool through an AI pipeline and has a full calendar for scheduling interviews.',
    points: [],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'AI Integration'],
    link: 'https://3cix.com/',
    motif: 'grid',
  },
  {
    name: 'Bidmoto / Bidlingo',
    kind: 'Real time auction platforms',
    summary:
      'Real time bidding platforms using Kafka and WebSockets for live bid updates. Bidmoto, for Canadian motorcycle auctions, is live. Bidlingo, for UAE car auctions, was built on the same pattern.',
    points: [],
    stack: ['Next.js', 'Node.js', 'Kafka', 'WebSockets', 'Stripe', 'MongoDB'],
    link: 'https://bidmoto.com/', // Bidmoto only; Bidlingo is not shipped, no link
    motif: 'routes',
  },
];

export const skills: SkillGroup[] = [
  {
    group: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'Go', 'TypeScript', 'Kafka', 'REST APIs'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Styled Components'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firestore', 'OpenSearch/ElasticSearch'],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'AWS (Lambda, ECS, EC2, S3, Cognito)',
      'Terraform',
      'Docker',
      'Serverless',
      'Jenkins',
      'Git',
    ],
  },
  {
    group: 'Integrations',
    items: [
      'Stripe',
      'commercetools',
      'KrakenD',
      'Twilio',
      'SendGrid',
      'Zoho Billing',
      'HubSpot',
      'LangChain',
      'OpenAI',
    ],
  },
];

export const education = {
  school: 'National University of Sciences & Technology (NUST)',
  degree: 'BS Computer Science',
  period: '2016 – 2020',
  location: 'Islamabad, Pakistan',
};
