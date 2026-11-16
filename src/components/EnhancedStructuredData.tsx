// src/components/EnhancedStructuredData.tsx
// One JSON-LD payload: WebSite, Organization and Person on every page, plus
// ProfilePage on the homepage. The Organization node describes the site itself
// (the "Brandon Micci" name, logo and profiles) so crawlers that expect
// publisher/brand markup find a complete one. It is deliberately not a
// ProfessionalService or business: this is a personal portfolio, so there is
// no service, JobPosting or FAQ markup.

import React from 'react';

const SITE_URL = 'https://brandonmicci.com';
const NAME = 'Brandon Micci';
const DESCRIPTION =
  'Enterprise AI, data and business transformation executive. 17+ years in regulated companies including JPMorgan Chase, Citi, Southwest Airlines, EY and Capital One, with $50M+ in documented savings.';
const IMAGE = `${SITE_URL}/headshot.webp`;
const EMAIL = 'brandon@brandonmicci.com';
const LOGO = `${SITE_URL}/android-chrome-512x512.png`;
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

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: LOGO,
      contentUrl: LOGO,
      width: 512,
      height: 512,
      caption: NAME,
    },
    image: { '@id': `${SITE_URL}/#logo` },
    description: `Professional portfolio and writing of ${NAME}.`,
    email: EMAIL,
    sameAs: SAME_AS,
    founder: { '@id': `${SITE_URL}/#person` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
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

  const payload: Record<string, unknown>[] = [website, organization, person];

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
