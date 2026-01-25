import type { Metadata } from 'next';
import Link from 'next/link';
import ExecutiveExperience from '@/components/ExecutiveExperience';

export const metadata: Metadata = {
  title: 'Executive Experience | AI Leadership & Digital Transformation',
  description:
    'Explore Brandon Micci\'s 16+ year executive career spanning Fortune 500 banks, Big Four consulting, and leading enterprises. VP AI Products at JPMorgan Chase, delivering $400M+ enterprise value through AI strategy and digital transformation.',
  keywords: [
    'AI executive experience',
    'enterprise AI leadership',
    'Fortune 500 AI transformation',
    'digital transformation executive',
    'LLM deployment leader',
    'Chief AI Officer candidate',
    'VP AI Products',
    'Dallas AI executive',
  ],
  openGraph: {
    title: 'Executive Experience | Brandon Micci',
    description:
      '16+ years leading AI strategy and digital transformation across Fortune 500 organizations. $400M+ enterprise value delivered.',
    url: 'https://brandonmicci.com/experience',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Experience | Brandon Micci',
    description:
      '16+ years leading AI strategy and digital transformation across Fortune 500 organizations.',
  },
  alternates: {
    canonical: '/experience',
  },
};

export default function ExperiencePage() {
  return (
    <div className="text-white relative min-h-screen">
      {/* Full Timeline - component includes its own header */}
      <ExecutiveExperience />

      {/* Back to Home CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <Link
          href="/#connectwithme"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #1e90ff)',
            boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
          }}
        >
          Discuss Opportunities
        </Link>
      </div>
    </div>
  );
}
