import HeroBackground from '@/components/HeroBackground';
import HeroTitle from '@/components/HeroTitle';
import HeroParagraph from '@/components/HeroParagraph';
import HeroImage from '@/components/HeroImage';
import CompactDifferentiators from '@/components/CompactDifferentiators';
import MetricsGrid from '@/components/MetricsGrid';
import StrategicVisionBackground from '@/components/StrategicVisionBackground';
import StarsBackground from '@/components/StarsBackground';
import CompanyExpertise from '@/components/CompanyExpertise';
import StrategicAdvantageHeader from '@/components/StrategicAdvantageHeader';
import StrategicIntroCard from '@/components/StrategicIntroCard';
import StrategicDifferentiators from '@/components/StrategicDifferentiators';
import SuperpowerSection from '@/components/SuperpowerSection';
import ExecutiveExperience from '@/components/ExecutiveExperience';
import TransformationLeadership from '@/components/TransformationLeadership';
import TechBackground from '@/components/TechBackground';

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Section with Background */}
      <section id="home" className="min-h-screen relative pt-12">
        {/* Animated Background */}
        <HeroBackground />
        
        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <HeroTitle />
          <HeroParagraph />
          <HeroImage />
          <MetricsGrid />
          <CompactDifferentiators />
        </div>
      </section>

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
          <SuperpowerSection />
        </div>
      </section>

      {/* Executive Experience Section */}
      <section id="executive-experience" className="min-h-screen relative">
        {/* Background */}
        <StrategicVisionBackground />
        
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

      {/* Professional Impact Section */}
      <section id="professional-impact" className="min-h-screen relative py-20">
        {/* Background */}
        <TechBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Professional Impact</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about leveraging AI and digital technologies to solve complex business challenges 
            and drive meaningful transformation.
          </p>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section id="connect-with-me" className="min-h-screen relative py-20">
        {/* Background */}
        <StrategicVisionBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to explore executive opportunities in AI and digital transformation?
          </p>
          <a 
            href="mailto:contact@brandonmicci.com"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>
      </section>

    </div>
  );
}
