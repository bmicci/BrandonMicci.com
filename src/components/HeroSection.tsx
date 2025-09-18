'use client';

import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
      
      {/* Neural Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridFlow 20s linear infinite'
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section - Photo and Title */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center mb-16">
          {/* Content Side */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-full px-4 py-2 text-sm text-white/90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for Executive Opportunities
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Senior{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                AI & Digital Transformation
              </span>{' '}
              Executive
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Driving Fortune 500 digital transformation through AI, Data Strategy, and client-centric products
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              With 16+ years of experience architecting enterprise-wide AI solutions, I&apos;ve transformed complex technological challenges into over $400M in measurable business outcomes. From leading the largest LLM deployment in the payments industry to building evangelical data communities of 30,000+ users, I bridge the gap between cutting-edge innovation and practical enterprise implementation.
            </p>
          </div>

          {/* Photo Side */}
          <div className="animate-fade-in-right">
            <div className="relative bg-white/8 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:bg-white/12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/headshot.jpg"
                  alt="Brandon Micci - AI & Digital Transformation Executive"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 480px) 240px, (max-width: 768px) 280px, 400px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">Brandon Micci</h3>
                  <p className="text-cyan-400 text-sm">VP, Head of NextGen AI/ML Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Me Different Section */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-white/5 backdrop-blur-3xl border border-cyan-400/20 rounded-3xl p-12 relative overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer"></div>
            
            <div className="text-center mb-8 relative z-10">
              <span className="text-4xl mb-4 block animate-bounce">🚀</span>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Makes Me Different
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white/3 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-8 transition-all duration-400 hover:bg-cyan-400/8 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="text-xl animate-pulse">⭐</span> Scale Expertise
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Led the largest LLM deployment in payments (27,000+ users) and built global teams of 50+ professionals.
                </p>
              </div>
              
              <div className="bg-white/3 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-8 transition-all duration-400 hover:bg-cyan-400/8 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="text-xl animate-pulse">💡</span> Financial Impact
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Consistent, outsized ROI—250%+ returns delivering $30M in new revenue streams.
                </p>
              </div>
              
              <div className="bg-white/3 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-8 transition-all duration-400 hover:bg-cyan-400/8 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="text-xl animate-pulse">🎯</span> Cross-Industry Innovation
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Deep expertise across Financial Services, Insurance, Airlines, Energy, and Life Sciences.
                </p>
              </div>
              
              <div className="bg-white/3 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-8 transition-all duration-400 hover:bg-cyan-400/8 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-3">
                  <span className="text-xl animate-pulse">⚡</span> Transformation Catalyst
                </h3>
                <p className="text-white/85 leading-relaxed">
                  AI evangelist who builds adoption communities that drive organizational change at scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
          {[
            { number: '$400M+', label: 'Value Delivered' },
            { number: '27K+', label: 'AI Users' },
            { number: '250%', label: 'Typical ROI' },
            { number: '16+', label: 'Years Leading' }
          ].map((metric, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/8 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-medium">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
