'use client';

import React, { useEffect, useRef, useState } from 'react';

type Achievement = {
  title: string;
  text: string;
};

type Role = {
  dates: string;
  role: string;
  company: string;
  location: string;
  icon: string;
  description: string;
  skills: string[];
  achievements: Achievement[];
};

const ROLES: Role[] = [
  {
    dates: '2024 - PRESENT',
    role: 'VP, Head of NextGen AI/ML Solutions',
    company: 'JPMorgan Chase',
    location: 'Plano, TX',
    icon: '🤖',
    description:
      'Drive enterprise AI strategy and implementation across payments operations, leading organization-wide transformation initiatives that enhance operational efficiency and customer experience at scale.',
    skills: ['AI Strategy', 'LLM Deployment', 'Enterprise Architecture', 'Team Leadership'],
    achievements: [
      {
        title: 'Industry-Leading AI Deployment',
        text: 'Pioneered first-of-its-kind AI Assistant scaling to 27,000+ users across Payments—the largest LLM deployment in the payments industry.',
      },
      {
        title: 'Operational Excellence',
        text: 'Architected comprehensive AI strategy delivering 30% efficiency gains and 20% workforce optimization across operations.',
      },
      {
        title: 'Customer Impact',
        text: 'Deployed intelligent automation handling 40% of customer inquiries while reducing handle time by 300%.',
      },
    ],
  },
  {
    dates: '2022',
    role: 'Senior Director, Intelligent Industry GTM & Solution Leader',
    company: 'Capgemini',
    location: 'Dallas, TX',
    icon: '💡',
    description:
      'Directed go-to-market strategy and solution development for emerging AI technologies, leading cross-functional teams of product managers, solution architects, and sales professionals.',
    skills: ['Go-to-Market Strategy', 'IoT Solutions', 'Product Management'],
    achievements: [
      {
        title: 'Market Dominance',
        text: 'Orchestrated go-to-market strategy achieving 34% market share increase in NextGen insurance solutions.',
      },
      {
        title: 'Fortune 50 Impact',
        text: 'Architected telematics solutions for Fortune 50 insurance providers, delivering 60% improvement in loss mitigation.',
      },
      {
        title: 'Platform Innovation',
        text: 'Launched Industry 4.0 IoT Platform integrating telematics, smart building monitoring, and wearables under a unified ecosystem.',
      },
    ],
  },
  {
    dates: '2021 - 2022',
    role: 'Senior Manager, Forensic Analytics & Data Science',
    company: 'Ernst & Young',
    location: 'Dallas, TX',
    icon: '📊',
    description:
      "Spearheaded AI/ML strategy and capability development within EY's Forensics Practice, serving as Regional Leader for complex analytics engagements across Financial Services, Life Sciences, and Energy sectors.",
    skills: ['Fraud Analytics', 'AI/ML', 'Business Development', 'Data Science'],
    achievements: [
      {
        title: 'Mega-Deal Success',
        text: 'Secured $400MM, 10-year strategic engagement with a global insurance leader, delivering real-time AI-powered fraud analytics.',
      },
      {
        title: 'Revenue Generation',
        text: 'Developed an Analytics-as-a-Service platform generating $30MM in new continuous annual revenue.',
      },
      {
        title: 'Capability Building',
        text: 'Led regional AI/ML talent development and established a forensic analytics Center of Excellence.',
      },
    ],
  },
  {
    dates: '2019 - 2021',
    role: 'IoT & Digital Innovation Leader',
    company: 'Southwest Airlines',
    location: 'Dallas, TX',
    icon: '🔌',
    description:
      'Led digital transformation initiatives focused on IoT implementation and cloud migration, driving operational efficiency improvements across airline infrastructure and customer-facing systems.',
    skills: ['IoT Architecture', 'Cloud Migration', 'Digital Transformation'],
    achievements: [
      {
        title: 'Breakthrough ROI',
        text: 'Pioneered an IoT Fuel Savings pilot delivering 250% ROI within six months, generating $5.8M annual savings.',
      },
      {
        title: 'Cloud Transformation',
        text: 'Migrated 10+ legacy applications to the cloud in 6 months, reducing annual technology spend by $3.2M.',
      },
      {
        title: 'Infrastructure Modernization',
        text: 'Implemented IoT capabilities across 3 Fuel Farms, 7 Baggage Handling Systems, and 8 De-Icing Stations.',
      },
    ],
  },
  {
    dates: '2019',
    role: 'Data Enablement & Analytics COE Lead',
    company: 'Southwest Airlines',
    location: 'Dallas, TX',
    icon: '📈',
    description:
      'Established and led the enterprise-wide Center of Excellence for data analytics, driving adoption of modern BI platforms and building analytical capabilities across all business units.',
    skills: ['Data Analytics', 'COE Leadership', 'Platform Architecture'],
    achievements: [
      {
        title: 'Cost Optimization',
        text: 'Decommissioned hundreds of legacy dashboards across 5 platforms, reducing annual support costs by $5M.',
      },
      {
        title: 'Community Building',
        text: 'Built an evangelical Data Analyst Community scaling to 2,500+ users with 40% adoption increase.',
      },
      {
        title: 'Operational Excellence',
        text: 'Architected a Tier 1 production data environment achieving 100% availability for critical real-time operations.',
      },
    ],
  },
  {
    dates: '2017 - 2019',
    role: 'VP, Global Digital and Cloud Transformation Leader',
    company: 'Citigroup',
    location: 'Irving, TX',
    icon: '🌐',
    description:
      'Spearheaded global cloud transformation initiatives and DevOps adoption across multiple business units, establishing enterprise-wide standards for cloud-native architecture and deployment practices.',
    skills: ['Cloud Architecture', 'DevOps', 'Global Programs', 'CI/CD'],
    achievements: [
      {
        title: 'Global Platform',
        text: 'Architected a global telemetry platform increasing environment stability to 98% across worldwide operations.',
      },
      {
        title: 'DevOps Acceleration',
        text: 'Evangelized DevOps transformation accelerating cloud enablement by 200% through CI/CD pipeline implementation.',
      },
      {
        title: 'Legacy Modernization',
        text: 'Drove modernization across legacy infrastructure stacks, establishing world-class performance standards.',
      },
    ],
  },
  {
    dates: '2016 - 2017',
    role: 'Risk Analytics Leader, Auto Finance & Home Loans',
    company: 'Capital One',
    location: 'Plano, TX',
    icon: '⚡',
    description:
      'Led risk analytics transformation for consumer lending portfolios, implementing advanced ML models and automated compliance systems to enhance risk assessment and regulatory reporting capabilities.',
    skills: ['Risk Analytics', 'Compliance Tech', 'NLP/OCR'],
    achievements: [
      {
        title: 'Team Building',
        text: 'Built and led the first Risk & Analytics Reporting Team (7 analysts/engineers) with a dedicated Tableau environment.',
      },
      {
        title: 'Compliance Innovation',
        text: 'Implemented automated compliance testing with advanced NLP and real-time OCR scanning for regulatory requirements.',
      },
      {
        title: 'Risk Management',
        text: 'Created automated controls to detect emerging high-risk blind spots in real time.',
      },
    ],
  },
  {
    dates: '2016',
    role: 'Enterprise Analytics Leader, Risk & Compliance',
    company: 'Capital One',
    location: 'Plano, TX',
    icon: '🎯',
    description:
      'Drove enterprise-wide analytics strategy and governance, establishing data quality standards and building scalable analytics infrastructure to support risk management and regulatory compliance initiatives.',
    skills: ['Enterprise Analytics', 'Data Governance', 'Tableau'],
    achievements: [
      {
        title: 'Performance Optimization',
        text: 'Achieved 200% team output increase with 10 Data Engineers/Analysts, delivering 15+ enterprise risk dashboards.',
      },
      {
        title: 'Data Governance',
        text: 'Established an enterprise gold standard for Data Quality, enhancing organizational capability by 80%.',
      },
      {
        title: 'Cross-Functional Leadership',
        text: 'Led large-scale Tableau dashboard efforts as an internal consultant across enterprise functions.',
      },
    ],
  },
  {
    dates: '2015 - 2016',
    role: 'Center of Excellence Leader, Tableau & Big Data',
    company: 'Capital One',
    location: 'Plano, TX',
    icon: '🚀',
    description:
      "Pioneered enterprise-wide business intelligence transformation, establishing one of the world's largest Tableau communities and driving company-wide adoption of self-service analytics capabilities.",
    skills: ['Tableau COE', 'Big Data', 'Community Building', 'Executive Dashboards'],
    achievements: [
      {
        title: 'World Record Achievement',
        text: 'Established an enterprise Tableau COE driving adoption to 30,000+ users—one of the largest evangelical Tableau communities worldwide.',
      },
      {
        title: 'Executive Engagement',
        text: "Appointed to develop top-of-house mobile dashboards for Capital One's CEO, Rich Fairbanks.",
      },
      {
        title: 'Platform Transformation',
        text: 'Led comprehensive big data platform transformation and legacy system modernization.',
      },
    ],
  },
  {
    dates: '2013 - 2014',
    role: 'Senior Consultant, Lead Data Analyst',
    company: 'Booz Allen Hamilton',
    location: 'McLean, VA',
    icon: '🔍',
    description:
      "Established and led the firm's first dedicated data analytics practice, developing advanced analytics solutions for government and commercial clients across defense, healthcare, and financial services sectors.",
    skills: ['Data Analytics', 'Fraud Detection', 'Business Intelligence'],
    achievements: [
      {
        title: 'Department Creation',
        text: "Built and led the firm's first Tableau Enterprise Data & Analytics department dedicated to fraud and compliance.",
      },
      {
        title: 'Solution Development',
        text: 'Led development of data analytics and BI solutions for government and commercial clients.',
      },
    ],
  },
  {
    dates: '2009 - 2013',
    role: 'Global Operations and Strategy Associate',
    company: 'PricewaterhouseCoopers',
    location: 'Tampa, FL',
    icon: '📋',
    description:
      "Served as strategic analyst and performance metrics lead for global delivery operations, pioneering the firm's first business intelligence implementations and executive dashboard automation initiatives.",
    skills: ['Strategy', 'Operations', 'Executive Analytics'],
    achievements: [
      {
        title: 'Executive Support',
        text: 'Served as Lead Analyst to the COO of Global Delivery, sole provider of performance metrics and dashboards.',
      },
      {
        title: 'Innovation Pioneer',
        text: "Spearheaded the firm's first Tableau deployment for optimized dashboard automation.",
      },
    ],
  },
];

const ExecutiveExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          } else {
            setVisibleItems(prev => {
              const next = new Set(prev);
              next.delete(index);
              return next;
            });
          }
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px',
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const toggle = (i: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
          }
        }
        
        /* Enhanced mobile styles for scroll effects */
        @media (max-width: 768px) {
          .timeline-item-visible {
            animation: mobileSlideIn 0.6s ease-out;
          }
        }
        
        @keyframes mobileSlideIn {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(8px) scale(1.02);
          }
        }
      `}</style>
      
      <div className="relative z-10 font-sans">
        {/* Header */}
        <div className="text-center py-12 px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Timeline
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            16+ years of architecting enterprise AI solutions and driving digital transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            
            {ROLES.map((role, i) => (
              <div
                key={i}
                className="relative pl-12 md:pl-24 mb-8 md:mb-12"
                ref={el => {
                  itemRefs.current[i] = el;
                }}
              >
                {/* Timeline node */}
                <div className={`absolute left-0 md:left-8 top-5 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                  visibleItems.has(i) 
                    ? 'shadow-cyan-400/40 scale-110' 
                    : 'shadow-cyan-400/20 scale-100'
                }`}>
                  <span className="text-sm">{role.icon}</span>
                </div>

                {/* Content card with SCROLL-TRIGGERED styling */}
                <div
                  className={`relative overflow-hidden transition-all duration-700 group ${
                    visibleItems.has(i) 
                      ? 'translate-x-2 scale-[1.02] opacity-100' 
                      : 'translate-x-0 scale-100 opacity-90'
                  }`}
                  style={{
                    background: visibleItems.has(i)
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: visibleItems.has(i) ? 'blur(25px)' : 'blur(15px)',
                    WebkitBackdropFilter: visibleItems.has(i) ? 'blur(25px)' : 'blur(15px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: visibleItems.has(i)
                      ? '0 25px 50px rgba(0, 212, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                      : '0 8px 16px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  
                  {/* Enhanced border gradient - more prominent when visible */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      visibleItems.has(i) ? 'opacity-80' : 'opacity-30'
                    }`}
                    style={{
                      borderRadius: '20px',
                      padding: '1px',
                      background: 'linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff)',
                      backgroundSize: '200% 200%',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      animation: visibleItems.has(i) ? 'gradientShift 3s ease infinite' : 'none',
                    }}
                  >
                  </div>
                  
                  {/* Enhanced glow effect when visible */}
                  <div
                    className={`absolute -inset-4 transition-opacity duration-500 pointer-events-none ${
                      visibleItems.has(i) ? 'opacity-60' : 'opacity-0'
                    }`}
                    style={{
                      borderRadius: '24px',
                      background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  >
                  </div>

                  {/* Shimmer overlay - more intense when visible */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                      visibleItems.has(i) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      borderRadius: '20px',
                      background: 'linear-gradient(120deg, rgba(255,255,255,0.1), transparent 35%, transparent 65%, rgba(255,255,255,0.08))',
                      mixBlendMode: 'screen',
                    }}
                  >
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Date badge */}
                    <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                      {role.dates}
                    </span>
                    
                    {/* Role and company */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white leading-tight">
                      {role.role}
                    </h3>
                    <div className="text-cyan-400 text-lg mb-4 font-medium">
                      {role.company}
                      <span className="text-slate-400 text-base ml-2">| {role.location}</span>
                    </div>

                    {/* ADDED: Role description */}
                    <p className="text-slate-300 leading-relaxed mb-6 text-base">
                      {role.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
                      {role.skills.map((skill, k) => (
                        <span
                          key={k}
                          className="bg-blue-500/20 border border-blue-500/40 text-slate-200 px-3 py-1 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-blue-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Mobile toggle button */}
                    <button
                      className="md:hidden w-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 py-3 px-4 rounded-xl font-semibold hover:bg-cyan-500/30 transition-all duration-300 mb-4"
                      onClick={() => toggle(i)}
                      aria-expanded={expanded.has(i)}
                    >
                      {expanded.has(i) ? 'Hide Achievements' : 'View Achievements'}
                      <span className={`ml-2 transition-transform duration-300 ${expanded.has(i) ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {/* Achievements - always visible on desktop, collapsible on mobile */}
                    <div
                      className={`space-y-4 transition-all duration-400 overflow-hidden ${
                        expanded.has(i)
                          ? 'max-h-screen opacity-100'
                          : 'md:max-h-screen md:opacity-100 max-h-0 opacity-0'
                      }`}
                    >
                      {role.achievements.map((achievement, j) => (
                        <div
                          key={j}
                          className="bg-cyan-500/10 border-l-4 border-cyan-400 rounded-lg p-4 hover:bg-cyan-500/15 hover:translate-x-1 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-cyan-400 text-lg mt-0.5">→</span>
                            <div>
                              <h4 className="font-semibold text-cyan-400 mb-2">
                                {achievement.title}
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                {achievement.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveExperience;
