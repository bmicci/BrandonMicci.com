'use client';

import HeroSection from '@/components/HeroSection';

// Regular imports for lighter components
import CompanyExpertise from '@/components/CompanyExpertise';
import StrategicAdvantageHeader from '@/components/StrategicAdvantageHeader';
import StrategicIntroCard from '@/components/StrategicIntroCard';
import StrategicDifferentiators from '@/components/StrategicDifferentiators';
import ExecutiveExperience from '@/components/ExecutiveExperience';
import TransformationLeadership from '@/components/TransformationLeadership';
import IndustryCollaboration from '@/components/IndustryCollaboration';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Section */}
      <div id="home" className="section-shell min-h-screen" data-surface="hero">
        <div className="section-shell-content">
          <HeroSection />
        </div>
      </div>

      {/* Strategic Vision Section */}
      <section
        id="strategic-vision"
        className="relative min-h-screen section-shell"
        data-surface="primary"
      >
        <div className="section-shell-content w-full">
          <StrategicAdvantageHeader />
          <StrategicIntroCard />
          <CompanyExpertise />
          <StrategicDifferentiators />
        </div>
      </section>

      {/* Executive Experience Section */}
      <section
        id="executive-experience"
        className="relative min-h-screen section-shell"
        data-surface="accent"
      >
        <div className="section-shell-content">
          <ExecutiveExperience />
        </div>
      </section>

      {/* Transformation Leadership Section */}
      <section
        id="transformation-leadership"
        className="relative min-h-screen section-shell"
        data-surface="accent"
      >
        <div className="section-shell-content">
          <TransformationLeadership />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="professional-impact"
        className="relative min-h-screen section-shell"
        data-surface="calm"
      >
        <div className="section-shell-content">
          <TestimonialsSection />
        </div>
      </section>

      {/* Industry Collaboration & Speaking Section */}
      <section
        id="connect-with-me"
        className="relative min-h-screen section-shell"
        data-surface="accent"
      >
        <div className="section-shell-content">
          <IndustryCollaboration />
        </div>
      </section>
    </div>
  );
}
