'use client';

import NewHero from '@/components/NewHero';
import CaseStudyCards from '@/components/CaseStudyCards';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Universal background for entire page
const UniversalBackground = dynamic(
  () => import('@/components/UniversalBackground'),
  { ssr: false }
);

// Regular imports for lighter components
import ExecutiveExperience from '@/components/ExecutiveExperience';
import ProfessionalImpact from '@/components/TransformationLeadership';
import IndustryCollaboration from '@/components/IndustryCollaboration';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  // Prevent first-load jump and manage hash anchors after first paint
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in history) (history as History & { scrollRestoration?: string }).scrollRestoration = 'manual';
    const { hash } = window.location;
    if (!hash) window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    });
  }, []);

  return (
    <div className="text-white relative">
      {/* Universal Background - covers entire page */}
      <UniversalBackground />

      {/* Hero Section */}
      <section
        id="home"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <NewHero />
      </section>

      {/* Strategic Vision Section */}
      <section
        id="strategic-vision"
        className="
          relative
          scroll-mt-[var(--header-h,4.5rem)]
          lg:-mt-12 xl:-mt-16
        "
      >
        {/* Strategic Vision Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Advantage</h2>
            <CaseStudyCards />
          </div>
        </div>
      </section>

      {/* Executive Experience Section */}
      <section
        id="executive-experience"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        {/* Content */}
        <ExecutiveExperience />
      </section>

      {/* Professional Impact Section */}
      <section
        id="transformation-leadership"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        {/* Content */}
        <ProfessionalImpact />
      </section>

      {/* Professional Impact Section */}
      <section
        id="professional-impact"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <TestimonialsSection />
      </section>

      {/* Industry Collaboration & Speaking Section */}
      <section
        id="connectwithme"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <IndustryCollaboration />
      </section>
    </div>
  );
}
