// src/components/EnhancedStructuredData.tsx
// One consolidated JSON-LD payload: WebSite, Person, Organization,
// ProfilePage, BreadcrumbList + Recruiter-optimized FAQ, optional JobPosting.
// Safe to drop-in and replace your previous StructuredData component.

import React from 'react';

const SITE_URL = 'https://brandonmicci.com';
const NAME = 'Brandon Micci';
const JOB_TITLE = 'Head of AI Strategy & Business Transformation';
const DESCRIPTION =
  'Enterprise AI Transformation leader with 17+ years of experience delivering $400M+ in value and scaling LLM deployments to 27K+ users across Fortune 500 companies.';

const LOGO = `${SITE_URL}/android-chrome-192x192.png`; // ok to keep; you just generated these
const IMAGE = `${SITE_URL}/headshot.webp`;
const EMAIL = 'brandon@brandonmicci.com';

// Toggle extras without editing schema objects:
const INCLUDE_FAQ = true;
const INCLUDE_JOB_POSTING = false; // Disabled: JobPosting is for employers hiring candidates, not for being hired

function buildJsonLd(pathname: string) {
  const isHome = pathname === '/';

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Brandon Micci — AI & Digital Transformation',
    url: SITE_URL,
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
      'Responsible AI',
      'Responsible AI & Governance',
      'AI Governance',
      'AI Ethics',
      'Model Governance',
      'Human-in-the-Loop Review',
      'LLM Evaluation Harnesses',
      'AIOps',
      'AI Delivery Lifecycle',

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
      {
        '@type': 'CollegeOrUniversity',
        name: 'The George Washington University',
      },
    ],
  };

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `About ${NAME}`,
    url: `${SITE_URL}/`,
    mainEntity: {
      '@type': 'Person',
      name: NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: SITE_URL,
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
          text: 'Brandon Micci is a Senior AI and Digital Transformation Executive specializing in Chief Data & AI Officer, Head of AI Strategy, and Enterprise AI Transformation roles. He leads large-scale AI initiatives across Fortune 500 organizations—transforming data, analytics, and technology strategy into measurable ROI.',
        },
      },
      {
        '@type': 'Question',
        name: 'What measurable outcomes has Brandon achieved through AI leadership?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon has delivered $400M+ in measurable business value through AI and digital transformation. His initiatives include deploying an enterprise LLM assistant to 27,000 users at JPMorgan Chase, delivering $22M+ in annualized efficiency gains, and launching a $20M IoT-AI optimization program in aviation.',
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
      {
        '@type': 'Question',
        name: 'What Fortune 500 companies has Brandon worked with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon has led enterprise AI and digital transformation initiatives at JPMorgan Chase, Capital One, Citigroup, Southwest Airlines, and delivered advisory engagements through Ernst & Young (EY), PwC, Capgemini, and Booz Allen Hamilton for Fortune 50 insurance and financial services clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technical skills does Brandon bring to AI leadership roles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon combines executive leadership with deep technical expertise in: LLM deployment (MLOps/LLMOps), cloud architecture (AWS, Azure, Snowflake, Databricks), enterprise data platforms (Spark, Kafka, Data Lakes), DevOps/Kubernetes, analytics platforms (Tableau, Power BI), and AI governance frameworks. He has built and led 50+ FTE technical organizations with $30M+ P&L responsibility at Capgemini and ownership of the $15M+ annual AI portfolio at JPMorgan Chase — from strategy and investment through delivery.',
        },
      },
      {
        '@type': 'Question',
        name: "What is Brandon's approach to Responsible AI in regulated environments?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon architects AI systems with embedded governance from day one — model risk management, LLM evaluation harnesses, human-in-the-loop review for high-stakes decisions, and AIOps for continuous monitoring and improvement. In financial services, this means partnering with risk, compliance, and audit functions across the AI delivery lifecycle (experiment → production → operations) to ensure deployments meet regulatory expectations while delivering measurable business outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What size organizations and budgets has Brandon managed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon has led cross-functional teams of 50+ full-time employees with direct P&L oversight of $30M+ technology portfolios. His programs have generated $400M+ in measurable enterprise value across Fortune 500 organizations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Brandon open to relocation for executive roles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brandon is based in Dallas, Texas and open to hybrid, remote, or relocation opportunities for the right executive role. He has successfully led distributed global teams and is available for Chief Data & AI Officer, Head of AI Strategy, and VP AI & Digital Transformation positions.',
        },
      },
    ],
  };

  const jobPosting = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title:
      'Chief AI Officer / Head of AI Strategy & Business Transformation (Executive Leadership)',
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
    name: 'Head of AI Strategy & Business Transformation',
    description:
      'Leads enterprise AI transformation initiatives across Fortune 500 organizations — delivering measurable ROI through applied Generative AI, data modernization, and large language model deployment.',
    occupationLocation: {
      '@type': 'Place',
      name: 'Dallas, Texas, USA',
    },
    skills: [
      'Enterprise AI Strategy',
      'Generative AI',
      'LLM Deployment',
      'Digital Transformation Leadership',
      'Responsible AI & Governance',
      'Human-in-the-Loop Review',
      'LLM Evaluation Harnesses / AIOps',
      'Data Platforms',
      'Executive Advisory',
    ],
    responsibilities: [
      'Define and scale enterprise AI product portfolios',
      'Architect Responsible AI by design — embedded governance, model risk frameworks, evaluation harnesses, and AIOps from day one',
      'Deliver measurable ROI across data and digital initiatives',
      'Lead AI Center of Excellence operations and adoption programs',
    ],
    occupationalCategory:
      'Artificial Intelligence and Machine Learning Leadership',
    mainEntityOfPage: SITE_URL,
  };

  // Professional Service / Local Business schema for local SEO
  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Brandon Micci Digital Strategy',
    description:
      'Enterprise AI Strategy & Digital Transformation Executive Services for Fortune 500 organizations. Expert in LLM deployment, data platforms, and measurable ROI delivery.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'United States',
      },
      {
        '@type': 'Place',
        name: 'Remote',
      },
    ],
    email: EMAIL,
    url: SITE_URL,
    image: IMAGE,
    founder: {
      '@type': 'Person',
      name: NAME,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Executive Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive AI Strategy',
            description:
              'Enterprise AI transformation and strategy consulting for C-suite executives and Fortune 500 organizations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Transformation Leadership',
            description:
              'Full-scale digital transformation programs including LLM deployment, data modernization, and cloud strategy.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Advisory & Speaking',
            description:
              'Board workshops, executive briefings, keynote speaking, and strategic advisory on AI and digital innovation.',
          },
        },
      ],
    },
  };

  const payload: Record<string, unknown>[] = [
    website,
    organization,
    person,
    roleExperience,
    professionalService,
  ];

  // ProfilePage and FAQPage describe homepage content — rendering them on every
  // page (including /privacy) is a structured-data guideline violation, since
  // the markup wouldn't reflect what's actually on the page.
  if (isHome) {
    payload.push(profilePage);
    if (INCLUDE_FAQ) payload.push(faq);
  }
  if (INCLUDE_JOB_POSTING) payload.push(jobPosting);

  return payload;
}

export default function EnhancedStructuredData({
  nonce,
  pathname,
}: {
  nonce?: string;
  pathname?: string;
}) {
  const data = buildJsonLd(pathname || '/');
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      nonce={nonce}
      // Suppress hydration warning: nonce is intentionally different between server (CSP) and client
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
