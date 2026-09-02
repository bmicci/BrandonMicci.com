import type { Metadata } from 'next';
import ArticlesContent from './ArticlesContent';

export const metadata: Metadata = {
  title: 'Articles & Frameworks',
  description:
    'Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale, written by Brandon Micci from experience inside Fortune 500 financial services.',
  keywords: [
    'AI operating model',
    'AI governance framework',
    'enterprise AI adoption',
    'AI transformation articles',
    'model risk management GenAI',
    'AI delivery lifecycle',
    'Brandon Micci articles',
  ],
  alternates: { canonical: '/articles' },
  openGraph: {
    title:
      'Articles & Frameworks | Brandon Micci — Enterprise AI & Digital Transformation',
    description:
      'Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale.',
    url: 'https://brandonmicci.com/articles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles & Frameworks | Brandon Micci',
    description:
      'Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale.',
  },
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
