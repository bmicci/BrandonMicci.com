// src/components/EnhancedStructuredData.tsx
// One consolidated JSON-LD payload: WebSite, Person, Organization,
// ProfilePage, BreadcrumbList + Recruiter-optimized FAQ, optional JobPosting.
// Safe to drop-in and replace your previous StructuredData component.

import React from "react";

const SITE_URL = "https://brandonmicci.com";
const NAME = "Brandon Micci";
const JOB_TITLE = "VP, Head of AI Products";
const DESCRIPTION =
  "Enterprise AI Transformation leader with 16+ years of experience delivering $400M+ in value and scaling LLM deployments to 27K+ users across Fortune 500 companies.";

const LOGO = `${SITE_URL}/android-chrome-192x192.png`; // ok to keep; you just generated these
const IMAGE = `${SITE_URL}/headshot.webp`;

// Toggle extras without editing schema objects:
const INCLUDE_FAQ = true;
const INCLUDE_JOB_POSTING = true; // set false if you don't want to signal "open to roles" yet

function buildJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brandon Micci — AI & Digital Transformation",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brandon Micci Digital Strategy",
    url: SITE_URL,
    logo: LOGO,
    founder: { "@type": "Person", name: NAME },
    sameAs: [
      "https://www.linkedin.com/in/brandonmicci",
      "https://github.com/bmicci",
      "https://twitter.com/brandonmicci",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    image: IMAGE,
    description: DESCRIPTION,
    sameAs: [
      "https://www.linkedin.com/in/brandonmicci",
      "https://github.com/bmicci",
      "https://twitter.com/brandonmicci",
    ],
    worksFor: {
      "@type": "Organization",
      name: "JPMorgan Chase",
      url: "https://www.jpmorganchase.com",
    },
    knowsAbout: [
      "Enterprise AI Strategy",
      "Generative AI",
      "LLM Deployment",
      "AI Product Management",
      "Digital Transformation",
      "AI Governance",
      "Data Platforms",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Texas at Dallas" },
    ],
    award: [
      // add/remove as desired
      "Led $400M+ enterprise value creation via AI & data transformation",
    ],
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `About ${NAME}`,
    url: `${SITE_URL}/`,
    about: { "@type": "Person", name: NAME },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Strategic Advantage",
        item: `${SITE_URL}/#strategic-vision`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Executive Experience",
        item: `${SITE_URL}/#executive-experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Transformation Leadership",
        item: `${SITE_URL}/#transformation-leadership`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Professional Impact",
        item: `${SITE_URL}/#professional-impact`,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What is Brandon Micci's expertise as an AI and Digital Transformation executive?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Brandon Micci is a Senior AI and Digital Transformation Executive specializing in scaling enterprise AI across Fortune 500 organizations. He has delivered $400M+ in measurable value through AI product strategy, LLM deployment, and enterprise modernization.",
        },
      },
      {
        "@type": "Question",
        name:
          "What leadership roles has Brandon Micci held in enterprise AI strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Brandon has served as VP, Head of AI Products at JPMorgan Chase, leading enterprise-scale AI initiatives for 27,000+ users. He previously led digital transformation programs at Southwest Airlines, EY, and Capital One.",
        },
      },
      {
        "@type": "Question",
        name:
          "What makes Brandon Micci a top candidate for Chief AI Officer or VP of AI roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "His combination of executive leadership, technical depth, and measurable ROI makes him uniquely suited for CAIO, CDO, or VP of AI roles. His focus areas include AI velocity, data democratization, responsible AI frameworks, and value realization.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries has Brandon led AI transformation in?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Financial services, aviation, and consulting—generating $400M+ in enterprise value and >250% typical ROI.",
        },
      },
      {
        "@type": "Question",
        name: "What is Brandon's approach to enterprise AI leadership?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A business-first AI approach that connects data modernization, ML product strategy, and generative AI innovation to measurable ROI at scale.",
        },
      },
    ],
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Chief AI Officer / VP, Head of AI Products (Executive Leadership)",
    description:
      "Open to executive opportunities leading enterprise AI, data transformation, and generative AI strategy for Fortune 500 organizations.",
    hiringOrganization: {
      "@type": "Person",
      name: NAME,
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/brandonmicci",
        "https://github.com/bmicci",
      ],
      logo: LOGO,
    },
    employmentType: "FULL_TIME",
    applicantLocationRequirements: { "@type": "Country", name: "United States" },
    jobLocationType: "TELECOMMUTE",
    validThrough: "2099-12-31", // keeps schema valid long-term
  };

  const payload: Record<string, unknown>[] = [website, organization, person, profilePage, breadcrumbs];

  if (INCLUDE_FAQ) payload.push(faq);
  if (INCLUDE_JOB_POSTING) payload.push(jobPosting);

  return payload;
}

export default function EnhancedStructuredData() {
  const data = buildJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

