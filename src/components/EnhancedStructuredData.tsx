// src/components/EnhancedStructuredData.tsx
// One JSON-LD payload: WebSite and Person on every page, plus ProfilePage on
// the homepage. This is a personal portfolio, so there is no Organization,
// ProfessionalService, JobPosting or FAQ markup: none of it describes what the
// pages actually show.

import React from 'react';

const SITE_URL = 'https://brandonmicci.com';
const NAME = 'Brandon Micci';
const DESCRIPTION =
  'Enterprise AI, data and business transformation executive. 17+ years in regulated companies including JPMorgan Chase, Citi, Southwest Airlines, EY and Capital One, with $50M+ in documented savings.';
const IMAGE = `${SITE_URL}/headshot.webp`;
const EMAIL = 'brandon@brandonmicci.com';
const SAME_AS = [
  'https://www.linkedin.com/in/brandonmicci',
  'https://github.com/bmicci',
];

function buildJsonLd(pathname: string) {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#person` },
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: NAME,
    url: SITE_URL,
    image: IMAGE,
    description: DESCRIPTION,
    email: `mailto:${EMAIL}`,
    sameAs: SAME_AS,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The George Washington University',
    },
    knowsAbout: [
      'Enterprise AI strategy',
      'AI operating models',
      'AI governance and Responsible AI',
      'Large language models and retrieval-augmented generation',
      'LLM evaluation and AIOps',
      'Business transformation',
      'Data strategy and analytics',
      'Analytics centers of excellence',
      'IoT and edge computing',
      'DevOps and cloud transformation',
    ],
  };

  const payload: Record<string, unknown>[] = [website, person];

  if (pathname === '/') {
    payload.push({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: `${SITE_URL}/`,
      name: NAME,
      mainEntity: { '@id': `${SITE_URL}/#person` },
    });
  }

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
