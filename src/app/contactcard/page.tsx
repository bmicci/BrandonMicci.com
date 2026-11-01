import type { Metadata } from 'next';
import ContactCard from '@/components/ContactCard';
import BmEnhancements from '@/components/bm/BmEnhancements';
import { bmFontVars } from '@/components/bm/fonts';
import '@/components/bm/bm.css';

export const metadata: Metadata = {
  title: { absolute: 'Connect with Brandon Micci | Digital Business Card' },
  description:
    'Enterprise AI & Digital Transformation Executive. Connect instantly via LinkedIn, email, or save my contact info.',
  alternates: { canonical: '/contactcard' },
  // Reached via NFC business-card tap and email signature, not site navigation,
  // so keep it out of search results and SEO audits.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Connect with Brandon Micci',
    description:
      'Enterprise AI & Digital Transformation Executive. 27K+ LLM users deployed, $50M+ documented savings.',
    url: 'https://brandonmicci.com/contactcard',
    type: 'profile',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci - Enterprise AI & Digital Transformation Executive',
      },
    ],
  },
};

export default function ContactCardPage() {
  return (
    <div className={`bm ${bmFontVars}`}>
      <main id="main" className="card-page">
        <ContactCard />
      </main>
      <BmEnhancements />
    </div>
  );
}
