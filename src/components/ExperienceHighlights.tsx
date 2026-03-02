'use client';

import Link from 'next/link';
import { Brain, Rocket, Search, BarChart, ArrowRight } from 'lucide-react';

type HighlightRole = {
  dates: string;
  role: string;
  companyType: string;
  icon: React.ReactNode;
  keyMetric: string;
  metricLabel: string;
  achievement: string;
};

const HIGHLIGHT_ROLES: HighlightRole[] = [
  {
    dates: 'Feb 2024 - Present',
    role: 'Head of AI Strategy & Business Transformation',
    companyType: 'Fortune 50 Bank (Payments)',
    icon: (
      <Brain
        className="w-6 h-6 text-cyan-400"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
      />
    ),
    keyMetric: '$22M+',
    metricLabel: 'Annualized Savings',
    achievement:
      'Scaled enterprise LLM Assistant to 27,000+ users—largest deployment in payments industry',
  },
  {
    dates: 'Jan 2022 - Feb 2024',
    role: 'Senior Director, Head of AI/IoT & Emerging Technology',
    companyType: 'Global Consulting Firm',
    icon: (
      <Rocket
        className="w-6 h-6 text-cyan-400"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
      />
    ),
    keyMetric: '$30M',
    metricLabel: 'P&L Ownership',
    achievement:
      'Built AI/IoT practice from ground up; drove $9.8M new revenue with 34% market share increase',
  },
  {
    dates: 'Feb 2021 - Jan 2022',
    role: 'Senior Manager, AI/ML Forensic Analytics & Technology',
    companyType: 'Big Four Consulting',
    icon: (
      <Search
        className="w-6 h-6 text-cyan-400"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
      />
    ),
    keyMetric: '$400M',
    metricLabel: '10-Year Deal',
    achievement:
      'Procured strategic engagement for real-time AI-powered fraud analytics engine',
  },
  {
    dates: '2015 - 2019',
    role: 'Analytics COE Leader & Digital Innovation',
    companyType: 'Fortune 100 Bank + Major Airline',
    icon: (
      <BarChart
        className="w-6 h-6 text-cyan-400"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.6))' }}
      />
    ),
    keyMetric: '30,000+',
    metricLabel: 'Platform Users',
    achievement:
      'Built world-class analytics community; delivered 250% ROI IoT pilot scaled to $20M+ annual',
  },
];

const ExperienceHighlights = () => {
  return (
    <section
      id="experience-highlights"
      className="relative z-10 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Executive Experience
            </span>
          </h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            17+ years leading AI strategy, digital transformation, and data
            innovation across Fortune 500 organizations
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {HIGHLIGHT_ROLES.map((role) => (
            <div
              key={role.dates}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(30, 144, 255, 0.05))',
                }}
              />

              <div className="relative z-10">
                {/* Top row: Icon + Dates */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(30, 144, 255, 0.1))',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                      }}
                    >
                      {role.icon}
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                      style={{
                        background: 'rgba(0, 212, 255, 0.15)',
                        border: '1px solid rgba(0, 212, 255, 0.4)',
                        color: '#9be8ff',
                      }}
                    >
                      {role.dates}
                    </span>
                  </div>
                </div>

                {/* Role + Company */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {role.role}
                </h3>
                <p className="text-sm text-cyan-300 font-medium mb-3">
                  {role.companyType}
                </p>

                {/* Key Metric */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mb-3"
                  style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.25)',
                  }}
                >
                  <span className="text-2xl font-extrabold text-cyan-400">
                    {role.keyMetric}
                  </span>
                  <span className="text-xs text-slate-300 uppercase tracking-wide">
                    {role.metricLabel}
                  </span>
                </div>

                {/* Achievement */}
                <p className="text-sm text-slate-200 leading-relaxed">
                  {role.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full experience */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #1e90ff)',
              boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
            }}
          >
            View Full Executive Timeline
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-3 text-sm text-slate-400">
            11 roles across Fortune 500, Big Four, and leading enterprises
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
