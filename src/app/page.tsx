'use client';

// import AccessibleNav from '@/components/AccessibleNav'; // Removed - using Navigation from layout
import HeroSection from '@/components/HeroSection';
import HashScrollOnLoad from '@/components/HashScrollOnLoad';
import { useEffect } from 'react';

// Regular imports for lighter components
import ExecutiveExperience from '@/components/ExecutiveExperience';
import ProfessionalImpact from '@/components/TransformationLeadership';
import IndustryCollaboration from '@/components/IndustryCollaboration';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  // Prevent first-load jump
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in history) (history as History & { scrollRestoration?: string }).scrollRestoration = 'manual';
    const { hash } = window.location;
    if (!hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <HashScrollOnLoad />
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
          pt-8
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
