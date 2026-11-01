import type { Metadata } from 'next';
import BmShell, { SITE_NAV } from '@/components/bm/BmShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for BrandonMicci.com describing what limited information is collected and how it is used.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Brandon Micci',
    description:
      'What limited information BrandonMicci.com collects and how it is used.',
    url: 'https://brandonmicci.com/privacy',
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

const POLICY_LAST_UPDATED = 'May 10, 2026';

export default function PrivacyPage() {
  return (
    <BmShell nav={SITE_NAV}>
      <article className="post">
        <div className="wrap">
          <header className="post-head">
            <div className="label">Privacy</div>
            <h1>Privacy policy</h1>
            <div className="meta">Last updated {POLICY_LAST_UPDATED}</div>
          </header>
          <div className="post-body">
            <h2>Overview</h2>
            <p>
              This site is a personal portfolio, for information only. It does
              not sell personal data, and it collects only what it needs to run.
            </p>
            <h2>What is collected</h2>
            <ul>
              <li>
                Basic analytics: page views and device and browser details.
              </li>
              <li>No accounts, no user profiles and no ad tracking.</li>
            </ul>
            <h2>How it is used</h2>
            <p>
              To understand overall site usage and to improve the content and
              performance.
            </p>
            <h2>Third-party services</h2>
            <p>
              The site uses hosting and analytics providers such as Vercel. They
              may process IP addresses and basic request details to deliver the
              site.
            </p>
            <h2>Contact</h2>
            <p>
              Questions? Email{' '}
              <a href="mailto:brandon@brandonmicci.com">
                brandon@brandonmicci.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </BmShell>
  );
}
