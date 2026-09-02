import type { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: "Your AI Strategy Isn't the Problem. Your Operating Model Is.",
  description:
    'What it actually takes to run AI at enterprise scale: five components to design on purpose, three mechanics that make them real, and why model risk management is an advantage, not a drag.',
  keywords: [
    'AI operating model',
    'AI governance',
    'AI decision rights',
    'model risk management GenAI',
    'enterprise AI scaling',
    'AI Center of Excellence',
    'AI operating model framework',
    'Brandon Micci',
  ],
  alternates: { canonical: '/articles/ai-operating-model' },
  openGraph: {
    title: "Your AI Strategy Isn't the Problem. Your Operating Model Is.",
    description:
      'When a model produces a wrong answer in production on a Tuesday afternoon, who owns it? A framework for running AI at enterprise scale, learned inside a Fortune-50 financial institution.',
    url: 'https://brandonmicci.com/articles/ai-operating-model',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your AI Strategy Isn't the Problem. Your Operating Model Is.",
    description:
      'A framework for running AI at enterprise scale, learned inside a Fortune-50 financial institution.',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Your AI Strategy Isn't the Problem. Your Operating Model Is.",
  description:
    'What it actually takes to run AI at enterprise scale: five components to design on purpose and three mechanics that make them real.',
  author: {
    '@type': 'Person',
    name: 'Brandon Micci',
    url: 'https://brandonmicci.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'Brandon Micci',
  },
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  mainEntityOfPage: 'https://brandonmicci.com/articles/ai-operating-model',
};

export default function AiOperatingModelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleContent />
    </>
  );
}
