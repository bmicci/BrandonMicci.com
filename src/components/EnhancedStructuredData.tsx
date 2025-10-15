// src/components/EnhancedStructuredData.tsx
// One consolidated JSON-LD payload: WebSite, Person, Organization,
// ProfilePage, BreadcrumbList + Recruiter-optimized FAQ, optional JobPosting.
// Safe to drop-in and replace your previous StructuredData component.

import React from 'react';

const SITE_URL = 'https://brandonmicci.com';
const NAME = 'Brandon Micci';
const JOB_TITLE = 'VP, Head of AI Products';
const DESCRIPTION =
  'Enterprise AI Transformation leader with 16+ years of experience delivering $400M+ in value and scaling LLM deployments to 27K+ users across Fortune 500 companies.';

const LOGO = `${SITE_URL}/android-chrome-192x192.png`; // ok to keep; you just generated these
const IMAGE = `${SITE_URL}/headshot.webp`;
const EMAIL = 'brandon@brandonmicci.com';
const PHONE = '+14697088925'; // Google Voice for recruiter contact

// Toggle extras without editing schema objects:
const INCLUDE_FAQ = true;
const INCLUDE_JOB_POSTING = false; // Disabled: JobPosting is for employers hiring candidates, not for being hired

function buildJsonLd() {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Brandon Micci — AI & Digital Transformation',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Brandon Micci Digital Strategy',
    url: SITE_URL,
    logo: LOGO,
    founder: { '@type': 'Person', name: NAME },
    sameAs: [
      'https://www.linkedin.com/in/brandonmicci',
      'https://github.com/bmicci',
      'https://twitter.com/brandonmicci',
      'https://link.v1ce.co/brandon.micci',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Executive inquiries',
        email: EMAIL,
        availableLanguage: ['en'],
      },
    ],
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: NAME,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    image: IMAGE,
    description: DESCRIPTION,
    email: EMAIL,
    sameAs: [
      'https://www.linkedin.com/in/brandonmicci',
      'https://github.com/bmicci',
      'https://twitter.com/brandonmicci',
      'https://link.v1ce.co/brandon.micci',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'JPMorgan Chase',
      url: 'https://www.jpmorganchase.com',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Recruiting / executive search',
        email: EMAIL,
        telephone: PHONE,
        areaServed: 'US',
        availableLanguage: ['en'],
      },
    ],
    knowsAbout: [
      // Core AI/ML
      'Enterprise AI Strategy',
      'Generative AI',
      'LLM Deployment',
      'MLOps',
      'LLMOps',
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Deep Learning',
      'Predictive Analytics',
      'AI Product Management',
      'AI Governance',
      'AI Ethics',
      'Model Governance',
      
      // Digital Transformation
      'Digital Transformation',
      'Industry 4.0',
      'IoT Platforms',
      'Digital Twins',
      'Change Management',
      
      // Cloud & Infrastructure
      'AWS',
      'Azure',
      'Google Cloud Platform',
      'Snowflake',
      'Databricks',
      'Apache Spark',
      'Kafka',
      'Data Lakes',
      'Big Data',
      'DevOps',
      'CI/CD',
      'Kubernetes',
      'Docker',
      'Microservices',
      
      // Data & Analytics
      'Data Platforms',
      'Data Governance',
      'Tableau',
      'Alteryx',
      'Power BI',
      'Python',
      'SQL',
      'Data Science',
      
      // Leadership & Strategy
      'Executive Leadership',
      'P&L Management',
      'C-Suite Engagement',
      'Strategic Planning',
      'ROI Analysis',
      'Team Building',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'AI & Digital Transformation Executive',
        description:
          'Delivers measurable ROI through enterprise AI and data strategy leadership.',
      },
      {
        '@type': 'Occupation',
        name: 'Keynote Speaker & Executive Advisor',
        description:
          'Provides executive briefings, workshops, and advisory on AI strategy and transformation.',
      },
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'The George Washington University' },
    ],
    award: [
      'Led $400M+ enterprise value creation via AI & data transformation',
      'Scaled LLM deployment to 27,000+ users at JPMorgan Chase',
      'Achieved 30% operational efficiency improvement through AI implementation',
      'Launched $20M IoT-AI optimization program in aviation sector',
    ],
  };

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `About ${NAME}`,
    url: `${SITE_URL}/`,
    about: { '@type': 'Person', name: NAME },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Strategic Advantage',
        item: `${SITE_URL}/#strategic-advantage`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Executive Experience',
        item: `${SITE_URL}/#executive-experience`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Transformation Leadership',
        item: `${SITE_URL}/#transformation-leadership`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Professional Impact',
        item: `${SITE_URL}/#professional-impact`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    about: { '@type': 'Person', name: NAME },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Executive inquiries',
        email: EMAIL,
        availableLanguage: ['en'],
      },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What executive roles does Brandon Micci specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon Micci is a Senior AI and Digital Transformation Executive specializing in Chief AI Officer, VP of AI Products, and Head of Enterprise AI Strategy roles. He leads large-scale AI initiatives across Fortune 500 organizations—transforming data, analytics, and technology strategy into measurable ROI.',
        },
      },
      {
        '@type': 'Question',
        name: 'What measurable outcomes has Brandon achieved through AI leadership?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon has delivered $400M+ in measurable business value through AI and digital transformation. His initiatives include deploying an enterprise LLM assistant to 27,000 users at JPMorgan Chase, achieving 30% operational efficiency gains, and launching a $20M IoT-AI optimization program in aviation.',
        },
      },
      {
        '@type': 'Question',
        name: 'In what industries has Brandon led transformation programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Financial services, aviation, insurance, and consulting. Brandon has implemented AI-powered fraud analytics at global insurers, IoT modernization at major airlines, and AI governance frameworks for top financial institutions.',
        },
      },
      {
        '@type': 'Question',
        name: "What are Brandon Micci's primary areas of expertise?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enterprise AI strategy, large language model deployment, AI governance, data modernization, and ROI-driven transformation. Brandon focuses on creating scalable AI platforms, governance models, and executive operating frameworks that accelerate adoption and measurable value.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Brandon provide speaking or advisory services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Brandon provides executive briefings, board workshops, and private advisory sessions focused on enterprise AI strategy, scaling LLMs, and digital transformation operating models. Engagements include 60–120 minute board sessions, 2–4 week ROI sprints, and keynote speaking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can recruiters or organizations contact Brandon Micci?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Email brandon@brandonmicci.com or connect via LinkedIn at linkedin.com/in/brandonmicci for executive search, advisory, or speaking engagements.',
        },
      },
    ],
  };

  const jobPosting = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Chief AI Officer / VP, Head of AI Products (Executive Leadership)',
    description:
      'Open to executive opportunities leading enterprise AI, data transformation, and generative AI strategy for Fortune 500 organizations.',
    datePosted: '2024-09-01',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Brandon Micci Digital Strategy',
      url: SITE_URL,
      logo: LOGO,
      sameAs: [
        'https://www.linkedin.com/in/brandonmicci',
        'https://github.com/bmicci',
      ],
    },
    employmentType: 'FULL_TIME',
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'United States',
    },
    jobLocationType: 'TELECOMMUTE',
    validThrough: '2099-12-31', // keeps schema valid long-term
  };

  // New schema: Occupation / RoleExperience (for Knowledge Graph + recruiter searches)
  const roleExperience = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: 'VP, Head of AI Products',
    description:
      'Leads enterprise AI transformation initiatives across Fortune 500 organizations — delivering measurable ROI through applied Generative AI, data modernization, and large language model deployment.',
    occupationLocation: {
      '@type': 'Place',
      name: 'Dallas, Texas, USA',
    },
    estimatedSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        value: '300000',
        unitText: 'YEAR',
      },
    },
    skills: [
      'Enterprise AI Strategy',
      'Generative AI',
      'LLM Deployment',
      'Digital Transformation Leadership',
      'AI Governance',
      'Data Platforms',
      'Executive Advisory',
    ],
    responsibilities: [
      'Define and scale enterprise AI product portfolios',
      'Develop responsible AI governance frameworks',
      'Deliver measurable ROI across data and digital initiatives',
      'Lead AI Center of Excellence operations and adoption programs',
    ],
    occupationalCategory:
      'Artificial Intelligence and Machine Learning Leadership',
    mainEntityOfPage: SITE_URL,
  };

  const payload: Record<string, unknown>[] = [
    website,
    organization,
    person,
    profilePage,
    contactPage,
    roleExperience,
    breadcrumbs,
  ];

  if (INCLUDE_FAQ) payload.push(faq);
  if (INCLUDE_JOB_POSTING) payload.push(jobPosting);

  return payload;
}

export default function EnhancedStructuredData({ nonce }: { nonce?: string }) {
  const data = buildJsonLd();
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
