import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Eight case studies covering enterprise LLM deployment, IoT platforms, and fraud analytics across Fortune 500 financial services and aviation, led by Brandon Micci.',
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
    '$400M enterprise impact',
  ],
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Brandon Micci — Enterprise AI & Digital Transformation',
    description:
      '$400M+ enterprise value delivered. 8 case studies covering LLM deployment, IoT platforms, fraud detection, analytics communities, and cloud transformation across Fortune 500 firms.',
    url: 'https://brandonmicci.com/case-studies',
  },
  twitter: {
    title: 'Case Studies | Brandon Micci — Enterprise AI Results',
    description:
      '$400M+ enterprise value. 8 case studies: LLM for 27K users, $20M IoT savings, $25M ARR analytics SaaS, and more.',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
