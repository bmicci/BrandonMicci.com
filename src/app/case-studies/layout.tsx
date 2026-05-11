import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI & Digital Transformation Case Studies | Brandon Micci' },
  description:
    'Explore detailed case studies of enterprise AI deployments, IoT platforms, and digital transformation initiatives led by Brandon Micci across Fortune 500 financial services, aviation, and Big 4 consulting.',
  keywords: [
    'AI case studies',
    'digital transformation examples',
    'enterprise LLM deployment',
    'IoT platform case study',
    'Fortune 500 AI',
    'ML fraud detection',
    'data analytics COE',
    'Brandon Micci portfolio',
  ],
  openGraph: {
    title: 'AI & Digital Transformation Case Studies | Brandon Micci',
    description:
      'Detailed case studies showcasing measurable business outcomes from AI and digital transformation initiatives across Fortune 500 enterprises.',
    url: 'https://brandonmicci.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Digital Transformation Case Studies | Brandon Micci',
    description:
      'Detailed case studies showcasing measurable business outcomes from AI and digital transformation initiatives.',
  },
  alternates: {
    canonical: 'https://brandonmicci.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
