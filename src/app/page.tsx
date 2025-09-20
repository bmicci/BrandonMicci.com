'use client';

import HeroSection from '@/components/HeroSection';
import StrategicVisionBackground from '@/components/StrategicVisionBackground';
import StarsBackground from '@/components/StarsBackground';
import CompanyExpertise from '@/components/CompanyExpertise';
import StrategicAdvantageHeader from '@/components/StrategicAdvantageHeader';
import StrategicIntroCard from '@/components/StrategicIntroCard';
import StrategicDifferentiators from '@/components/StrategicDifferentiators';
import ExecutiveExperience from '@/components/ExecutiveExperience';
import TransformationLeadership from '@/components/TransformationLeadership';
import FuturisticBackground from '@/components/FuturisticBackground';
import IndustryCollaboration from '@/components/IndustryCollaboration';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Section with Background */}
      <HeroSection />

      {/* Strategic Vision Section */}
      <section id="strategic-vision" className="min-h-screen relative">
        {/* Animated Backgrounds */}
        <StrategicVisionBackground />
        <StarsBackground />

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
        {/* Background */}
        <FuturisticBackground />

        {/* Content */}
        <ExecutiveExperience />
      </section>

      {/* Transformation Leadership Section */}
      <section id="transformation-leadership" className="min-h-screen relative">
        {/* Background */}
        <StarsBackground />

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
