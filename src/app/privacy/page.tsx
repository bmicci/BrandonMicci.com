import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for BrandonMicci.com describing what limited information is collected and how it is used.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>Overview</h2>
      <p>
        This site is an executive portfolio for informational purposes. We do not sell personal data and we collect the
        minimum information necessary to operate the site.
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>Basic analytics (page views, device/browser metadata).</li>
        <li>No account system, no user profiles, no ad tracking.</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>To understand aggregate site usage and improve content and performance.</p>

      <h2>Third-Party Services</h2>
      <p>
        We may use hosting and analytics providers (e.g., Vercel). These providers may process IP addresses and basic
        request metadata to deliver the site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:brandon@brandonmicci.com">brandon@brandonmicci.com</a>.
      </p>
    </main>
  );
}

