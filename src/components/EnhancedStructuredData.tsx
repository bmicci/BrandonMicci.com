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
const EMAIL = "brandon@brandonmicci.com";

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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Executive inquiries",
        email: EMAIL,
        availableLanguage: ["en"],
      },
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
    email: EMAIL,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Recruiting / executive search",
        email: EMAIL,
        areaServed: "US",
        availableLanguage: ["en"],
      },
    ],
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

  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    about: { "@type": "Person", name: NAME },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Executive inquiries",
        email: EMAIL,
        availableLanguage: ["en"],
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What executive roles is Brandon Micci best suited for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Chief AI Officer (CAIO), VP/Head of AI Products, or SVP of Digital Transformation. Brandon leads enterprise AI strategy, GenAI product portfolios, and data modernization programs to measurable ROI at Fortune 500 scale.",
        },
      },
      {
        "@type": "Question",
        name: "What measurable outcomes has Brandon delivered in enterprise AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scaled LLM deployments to 27,000+ users, delivered $400M+ in enterprise value, and achieved typical ROI improvements of 250%+ through AI product strategy, platform governance, and end-to-end adoption.",
        },
      },
      {
        "@type": "Question",
        name: "What industries has Brandon led AI transformation in?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Financial services, aviation, and consulting—spanning regulated data environments, mission-critical operations, and cross-functional enterprise change.",
        },
      },
      {
        "@type": "Question",
        name: "What is Brandon's approach to building an enterprise AI operating model?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A business-first operating model that connects data platform modernization, MLOps/LLMOps, responsible AI governance, and product roadmaps to value realization and scale.",
        },
      },
      {
        "@type": "Question",
        name: "How can recruiters or hiring executives contact Brandon?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Email Brandon at brandon@brandonmicci.com for executive opportunities in CAIO, VP of AI, or Digital Transformation leadership.",
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

  const payload: Record<string, unknown>[] = [website, organization, person, profilePage, contactPage, breadcrumbs];

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

