import type { Metadata } from 'next';
import BmShell, { SITE_NAV } from '@/components/bm/BmShell';

const EMAIL = 'brandon@brandonmicci.com';
const SITE_URL = 'https://brandonmicci.com';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Brandon Micci about speaking invitations, podcasts, panels and conversations on enterprise AI.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Brandon Micci',
    description:
      'Speaking invitations, podcasts, panels and conversations on enterprise AI.',
    url: 'https://brandonmicci.com/contact',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci, enterprise AI and transformation executive',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  about: {
    '@type': 'Person',
    name: 'Brandon Micci',
    url: SITE_URL,
    email: EMAIL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Speaking and collaboration',
      email: EMAIL,
      availableLanguage: ['en'],
    },
  },
};

const mail = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const ROUTES = [
  {
    k: '01',
    title: 'Speaking, podcasts and panels',
    text: 'Keynotes, fireside chats and panels on enterprise AI, operating models and delivery.',
    href: mail(
      'Speaking invitation',
      'Hi Brandon,\n\nEvent or show:\nAudience:\nDate:\nTopic:\nFormat (keynote, panel, podcast):\n\nThanks,'
    ),
    cta: 'Send an invitation',
  },
  {
    k: '02',
    title: 'Conversations with other leaders',
    text: 'Comparing notes on running AI in a large, regulated company: what worked, what didn’t.',
    href: mail('Comparing notes', 'Hi Brandon,\n\n'),
    cta: 'Write to me',
  },
  {
    k: '03',
    title: 'Writing and collaboration',
    text: 'Guest articles, research and joint pieces on enterprise AI.',
    href: mail('Writing collaboration', 'Hi Brandon,\n\n'),
    cta: 'Suggest an idea',
  },
];

export default function ContactPage() {
  return (
    <BmShell nav={SITE_NAV} current="/contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="page-hero">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">Contact</div>
            <h1>Let’s compare notes.</h1>
            <p className="lead">
              Email is the quickest way to reach me. I usually reply within a
              business day.
            </p>
            <div className="actions">
              <a className="btn" href={`mailto:${EMAIL}`}>
                {EMAIL} <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="speak" id="contact">
        <div className="wrap grid">
          <div className="sec-head">
            <div className="label">Ways to connect</div>
          </div>
          <div className="sec-body">
            <ol className="topics">
              {ROUTES.map((r) => (
                <li key={r.k}>
                  <span className="k">{r.k}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <p className="go">
                      <a className="link arrow" href={r.href}>
                        {r.cta}{' '}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap grid">
          <div className="l">
            <div className="label onNavy">Elsewhere</div>
            <h2>Save my details.</h2>
            <p>LinkedIn, a contact card for your phone, and my resume.</p>
          </div>
          <div className="r">
            <a
              href="https://www.linkedin.com/in/brandonmicci"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/brandonmicci <span>LinkedIn</span>
            </a>
            <a href="/brandon-micci.vcf">
              Contact card <span>vCard</span>
            </a>
            <a
              href="/BrandonMicciResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <span>PDF</span>
            </a>
            <a
              href="/executive-brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Executive brief <span>PDF, one page</span>
            </a>
          </div>
        </div>
      </section>
    </BmShell>
  );
}
