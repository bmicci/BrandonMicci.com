import type { Metadata } from 'next';
import ContactCard from '@/components/ContactCard';

const EMAIL = 'brandon@brandonmicci.com';
const SITE_URL = 'https://brandonmicci.com';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Brandon Micci for executive search, advisory, and speaking inquiries.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/contact' },
};

function ContactJsonLd() {
  const data = [
    // ContactPage for the page itself
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: `${SITE_URL}/contact`,
      mainEntityOfPage: `${SITE_URL}/contact`,
      about: {
        '@type': 'Person',
        name: 'Brandon Micci',
        url: SITE_URL,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Executive inquiries',
          email: `mailto:${EMAIL}`,
          availableLanguage: ['en'],
          areaServed: 'US',
        },
      ],
    },
    // ContactPoint on Person for redundancy/graph linking
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Brandon Micci',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Recruiting / executive search',
          email: `mailto:${EMAIL}`,
          availableLanguage: ['en'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Speaking & advisory',
          email: `mailto:${EMAIL}`,
          availableLanguage: ['en'],
        },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-24 pb-16">
      <ContactJsonLd />
      <ContactCard />
    </main>
  );
}

