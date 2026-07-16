import type { Metadata } from 'next';
import Link from 'next/link';
import ExecutiveExperience from '@/components/ExecutiveExperience';

export const metadata: Metadata = {
  title: 'Executive Experience',
  description:
    "Brandon Micci's 17+ year executive career across Fortune 500 banks, Big Four consulting, and global enterprises — $400M+ in delivered value.",
  keywords: [
    'AI executive experience',
    'enterprise AI leadership',
    'Fortune 500 AI transformation',
    'digital transformation executive',
    'LLM deployment leader',
    'Chief AI Officer candidate',
    'Head of AI Strategy',
    'Dallas AI executive',
  ],
  openGraph: {
    title: 'Executive Experience | Brandon Micci',
    description:
      '17+ years leading AI strategy and digital transformation across Fortune 500 organizations. $400M+ enterprise value delivered.',
    url: 'https://brandonmicci.com/experience',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Experience | Brandon Micci',
    description:
      '17+ years leading AI strategy and digital transformation across Fortune 500 organizations.',
  },
  alternates: {
    canonical: '/experience',
  },
};

export default function ExperiencePage() {
  return (
    <div className="text-white relative min-h-screen">
      {/* Back to Home Link */}
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Full Timeline - component includes its own header */}
      <ExecutiveExperience />

      {/* Back to Home CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <Link
          href="/#connectwithme"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #1e90ff)',
            color: '#07101d',
            boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
          }}
        >
          Discuss Opportunities
        </Link>
      </div>
    </div>
  );
}
