'use client';

// import AccessibleNav from '@/components/AccessibleNav'; // Removed - using Navigation from layout
import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// Universal background for entire page
const UniversalBackground = dynamic(
  () => import('@/components/UniversalBackground'),
  { ssr: false }
);

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
      {/* Universal Background - covers entire page */}
      <UniversalBackground />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <HeroSection />
      </section>

      {/* Strategic Vision Section */}
      <section id="strategic-vision" className="min-h-screen relative">
        {/* Strategic Vision Content */}
        <div className="relative z-10 w-full">
          <StrategicAdvantageHeader />
          <StrategicIntroCard />
          <CompanyExpertise />
          <StrategicDifferentiators />
        </div>
      </section>

      {/* Executive Experience Section */}
      <section id="executive-experience" className="min-h-screen relative">
        {/* Content */}
        <ExecutiveExperience />
      </section>

      {/* Transformation Leadership Section */}
      <section id="transformation-leadership" className="min-h-screen relative">
        {/* Content */}
        <TransformationLeadership />
      </section>

      {/* Testimonials Section */}
      <section id="professional-impact" className="min-h-screen relative">
        <TestimonialsSection />
      </section>

      {/* Industry Collaboration & Speaking Section */}
      <section id="connectwithme" className="min-h-screen relative">
        <IndustryCollaboration />
      </section>
    </div>
  );
}
