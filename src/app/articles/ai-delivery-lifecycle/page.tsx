import type { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: "Your AI Pilot Didn't Fail. It Was Never Designed to Ship.",
  description:
    'The missing discipline between the demo that wowed the steering committee and a system the business depends on: a delivery lifecycle designed for AI.',
  keywords: [
    'AI delivery lifecycle',
    'AI pilot to production',
    'evaluation harness',
    'AIOps',
    'human in the loop',
    'AI operations',
    'kill criteria',
    'Brandon Micci',
  ],
  alternates: { canonical: '/articles/ai-delivery-lifecycle' },
  openGraph: {
    title: "Your AI Pilot Didn't Fail. It Was Never Designed to Ship.",
    description:
      'A pilot is built to prove value. A production system has to prove trust. The delivery lifecycle is the designed path between them.',
    url: 'https://brandonmicci.com/articles/ai-delivery-lifecycle',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your AI Pilot Didn't Fail. It Was Never Designed to Ship.",
    description:
      'A pilot is built to prove value. A production system has to prove trust. The delivery lifecycle is the designed path between them.',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Your AI Pilot Didn't Fail. It Was Never Designed to Ship.",
  description:
    'The missing discipline between the demo that wowed the steering committee and a system the business depends on: a delivery lifecycle designed for AI.',
  author: {
    '@type': 'Person',
    name: 'Brandon Micci',
    url: 'https://brandonmicci.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'Brandon Micci',
  },
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  mainEntityOfPage: 'https://brandonmicci.com/articles/ai-delivery-lifecycle',
};

export default function AiDeliveryLifecyclePage() {
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
