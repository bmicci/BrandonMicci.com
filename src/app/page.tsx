'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import HashScrollOnLoad from '@/components/HashScrollOnLoad';
import { useEffect } from 'react';

// Strategic Vision Components - Above fold, load immediately
import StrategicAdvantageHeader from '@/components/StrategicAdvantageHeader';
import StrategicIntroCard from '@/components/StrategicIntroCard';
import CompanyExpertise from '@/components/CompanyExpertise';
import StrategicDifferentiators from '@/components/StrategicDifferentiators';

// Below-fold components - Lazy loaded with SSR to prevent CLS
const ExperienceHighlights = dynamic(
  () => import('@/components/ExperienceHighlights'),
  { ssr: true }
);

const ProfessionalImpact = dynamic(
  () => import('@/components/TransformationLeadership'),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import('@/components/FAQSection'),
  { ssr: true }
);

const IndustryCollaboration = dynamic(
  () => import('@/components/IndustryCollaboration'),
  { ssr: true }
);

export default function Home() {
  // Prevent first-load jump
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in history)
      (history as History & { scrollRestoration?: string }).scrollRestoration =
        'manual';
    const { hash } = window.location;
    if (!hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <HashScrollOnLoad />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <HeroSection />
      </section>

      {/* Strategic Vision Section */}
      <section
        id="strategic-advantage"
        aria-labelledby="strategic-advantage-title"
        className="
          relative
          scroll-mt-[var(--header-h,4.5rem)]
          pt-4
        "
      >
        {/* Strategic Vision Content */}
        <div className="relative z-10 w-full">
          <StrategicAdvantageHeader />
          <StrategicIntroCard />
          <CompanyExpertise />
          <StrategicDifferentiators />
        </div>
      </section>

      {/* Executive Experience Highlights - Full timeline at /experience */}
      <section
        id="executive-experience"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <ExperienceHighlights />
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

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative scroll-mt-[var(--header-h,4.5rem)]"
      >
        <FAQSection />
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
