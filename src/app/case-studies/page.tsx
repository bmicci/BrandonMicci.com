import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Eight case studies on enterprise LLM deployment, IoT platforms, and fraud analytics across Fortune 500 financial services and aviation, by Brandon Micci.',
  keywords: [
    'AI transformation case studies',
    'enterprise AI results',
    'LLM deployment case study',
    'digital transformation ROI',
    'Fortune 500 AI implementation',
    'JPMorgan Chase AI',
    'IoT innovation platform',
    'fraud detection AI',
    'analytics center of excellence',
    'Brandon Micci case studies',
    '$50M documented savings',
  ],
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title:
      'Case Studies | Brandon Micci — Enterprise AI & Digital Transformation',
    description:
      '$50M+ in documented savings. 8 case studies covering LLM deployment, IoT platforms, fraud detection, analytics communities, and cloud transformation across Fortune 500 firms.',
    url: 'https://brandonmicci.com/case-studies',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci - Enterprise AI & Digital Transformation Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Brandon Micci — Enterprise AI Results',
    description:
      '$50M+ in documented savings. 8 case studies: LLM for 27K users, $20M IoT savings, $25M ARR analytics SaaS, and more.',
    images: ['/opengraph-image'],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
