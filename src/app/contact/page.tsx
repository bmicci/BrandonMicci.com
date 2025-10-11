import type { Metadata } from 'next';

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
  const subjectExec = encodeURIComponent('Executive Inquiry: Brandon Micci');
  const bodyExec = encodeURIComponent(
    "Hi Brandon,\n\nI'm reaching out about an executive opportunity.\n\nCompany:\nRole/Title:\nLocation (or Remote):\nTimeline:\nNotes:\n\nThanks!"
  );
  const subjectSpeak = encodeURIComponent('Speaking / Advisory Inquiry: Brandon Micci');
  const bodySpeak = encodeURIComponent(
    "Hi Brandon,\n\nI'm reaching out about a speaking/advisory engagement.\n\nEvent/Org:\nAudience:\nDate(s):\nTopic(s):\nFormat (keynote, workshop):\n\nThanks!"
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ContactJsonLd />
      <section className="prose prose-invert">
        <h1>Contact</h1>
        <p className="opacity-90">
          For <strong>executive search</strong>, <strong>advisory</strong>, or <strong>speaking</strong> inquiries, email me directly:
        </p>

        <div className="not-prose mt-6 flex flex-col gap-3">
          <a
            href={`mailto:${EMAIL}?subject=${subjectExec}&body=${bodyExec}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10"
            aria-label="Email Brandon for executive inquiries"
          >
            ✉️ Executive inquiries — {EMAIL}
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${subjectSpeak}&body=${bodySpeak}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10"
            aria-label="Email Brandon for speaking and advisory inquiries"
          >
            🎤 Speaking & advisory — {EMAIL}
          </a>
          <a
            href="/brandon-micci.vcf"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10"
            aria-label="Download Brandon's vCard"
          >
            📇 Download vCard (Brandon Micci)
          </a>
        </div>

        <hr className="my-8 border-white/10" />

        <h2>Response Time</h2>
        <p>I aim to respond within one business day to executive search and event requests.</p>
      </section>
    </main>
  );
}

