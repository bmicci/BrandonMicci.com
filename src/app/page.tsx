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
      <section id="executive-experience" className="min-h-screen relative py-20">
        {/* Background */}
        <StrategicVisionBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Executive Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-400 pl-6 bg-black/20 backdrop-blur-sm rounded-r-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">AI & Digital Transformation Specialist</h3>
              <p className="text-gray-400 mb-2">Current Role</p>
              <p className="text-gray-300">Leading digital transformation initiatives and AI implementations</p>
            </div>
            {/* Add more experience items here */}
          </div>
        </div>
      </section>

      {/* Transformation Leadership Section */}
      <section id="transformation-leadership" className="min-h-screen relative py-20">
        {/* Background */}
        <StarsBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Transformation Leadership</h2>
          <p className="text-center text-gray-300 text-lg">
            Driving innovation through cutting-edge AI solutions and digital strategies
          </p>
        </div>
      </section>

      {/* Professional Impact Section */}
      <section id="professional-impact" className="min-h-screen relative py-20">
        {/* Background */}
        <HeroBackground />
        
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
