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
  const subjectSpeak = encodeURIComponent(
    'Speaking / Advisory Inquiry: Brandon Micci'
  );
  const bodySpeak = encodeURIComponent(
    "Hi Brandon,\n\nI'm reaching out about a speaking/advisory engagement.\n\nEvent/Org:\nAudience:\nDate(s):\nTopic(s):\nFormat (keynote, workshop):\n\nThanks!"
  );

  return (
    <div className="mx-auto max-w-4xl px-6 pt-24 pb-16">
      <ContactJsonLd />
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[rgba(15,23,42,0.92)] to-[rgba(10,14,30,0.92)] p-8 md:p-12 shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-white/90 leading-relaxed">
          For <strong className="text-white">executive search</strong>,{' '}
          <strong className="text-white">advisory</strong>, or{' '}
          <strong className="text-white">speaking</strong> inquiries, email me
          directly:
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={`mailto:${EMAIL}?subject=${subjectExec}&body=${bodyExec}`}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/15 transition"
            aria-label="Email Brandon for executive inquiries"
          >
            <span className="mr-2">✉️</span> Executive inquiries — {EMAIL}
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${subjectSpeak}&body=${bodySpeak}`}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/15 transition"
            aria-label="Email Brandon for speaking and advisory inquiries"
          >
            <span className="mr-2">🎤</span> Speaking & advisory — {EMAIL}
          </a>
          <a
            href="/brandon-micci.vcf"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-r from-[#0E1B33] to-[#0A0F1F] px-5 py-3 text-sm font-medium text-white hover:from-[#14274d] hover:to-[#0f1a2f] transition"
            aria-label="Download Brandon's vCard"
          >
            <span className="mr-2">📇</span> Download vCard (Brandon Micci)
          </a>
        </div>

        <hr className="my-8 border-white/10" />

        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Response Time
        </h2>
        <p className="mt-3 text-white/90 leading-relaxed">
          I aim to respond within one business day to executive search and event
          requests.
        </p>
      </section>
    </div>
  );
}
