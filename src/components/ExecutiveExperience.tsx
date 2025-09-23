'use client';

import { useEffect, useRef, useState, memo } from 'react';
import { Brain, Rocket, Search, Plane, Database, Cloud, Shield, Building2, BarChart, TrendingUp, Globe } from 'lucide-react';

const IconCircle: React.FC<{ children: React.ReactNode }> = memo(({ children }) => (
  <div className="
    relative flex items-center justify-center
    w-8 h-8 md:w-12 md:h-12
    rounded-full border border-white/10
    bg-white/[0.03] backdrop-blur-sm
    shadow-inner
    before:content-[''] before:absolute before:inset-0 before:rounded-full
    before:shadow-[0_0_14px_rgba(0,212,255,0.18)]
    md:before:shadow-[0_0_25px_rgba(0,212,255,0.25)]
    ring-1 ring-white/5
  ">
    <div className="relative z-10">
      {children}
    </div>
  </div>
));
IconCircle.displayName = 'IconCircle';

type Achievement = {
  title: string;
  text: string;
};

type Role = {
  dates: string;
  role: string;
  company: string;
  location: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  achievements: Achievement[];
};

const ROLES: Role[] = [
  {
    dates: '2024 - PRESENT',
    role: 'VP, Head of AI Products',
    company: 'JPMorgan Chase',
    location: 'Plano, TX',
    icon: <Brain className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
    description:
      'Drive enterprise AI strategy and implementation across payments operations, leading organization-wide transformation initiatives that enhance operational efficiency and customer experience at scale.',
    skills: [
      'AI Strategy',
      'LLM Deployment',
      'Enterprise Architecture',
      'Team Leadership',
    ],
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
    icon: <Rocket className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Search className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
    description:
      "Spearheaded AI/ML strategy and capability development within EY's Forensics Practice, serving as Regional Leader for complex analytics engagements across Financial Services, Life Sciences, and Energy sectors.",
    skills: [
      'Fraud Analytics',
      'AI/ML',
      'Business Development',
      'Data Science',
    ],
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
    icon: <Plane className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Database className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Cloud className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Shield className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Building2 className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <BarChart className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
    description:
      "Pioneered enterprise-wide business intelligence transformation, establishing one of the world's largest Tableau communities and driving company-wide adoption of self-service analytics capabilities.",
    skills: [
      'Tableau COE',
      'Big Data',
      'Community Building',
      'Executive Dashboards',
    ],
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
    icon: <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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
    icon: <Globe className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 stroke-2" />,
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

const DESKTOP_EXPANDED = new Set(ROLES.map((_, index) => index));

const ExecutiveExperience = memo(() => {
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());
  const [visibleItems, setVisibleItems] = useState<Set<number>>(
    () => new Set()
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set initial expanded state and handle resize
  useEffect(() => {
    const applyExpandedState = () => {
      const isDesktop = window.innerWidth >= 768;
      setExpanded(isDesktop ? new Set(DESKTOP_EXPANDED) : new Set());
    };

    applyExpandedState();
    window.addEventListener('resize', applyExpandedState);
    return () => window.removeEventListener('resize', applyExpandedState);
  }, []);

  // Intersection observer for scroll-triggered styling
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          } else {
            setVisibleItems((prev) => {
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
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
      <div className="relative overflow-x-clip text-white se-tight">
      {/* Gradient overlay removed to show Universal Background */}

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 
              0 25px 50px rgba(0, 0, 0, 0.3), 
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              0 0 20px rgba(0, 212, 255, 0.15);
          }
          50% {
            box-shadow: 
              0 35px 70px rgba(0, 0, 0, 0.4), 
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 30px rgba(0, 212, 255, 0.25);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(0, 212, 255, 0.5);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .timeline-item-visible {
            animation: mobileSlideIn 0.6s ease-out;
          }
        }

        @media (max-width: 360px) {
          .se-tight .card-shell {
            width: calc(100vw - 5.75rem); /* a hair narrower for iPhone SE */
          }
          .se-tight .title-tight { font-size: 13px; }
          .se-tight .desc-tight  { font-size: 13px; }
        }
      `}</style>

      <div className="relative z-10 font-sans">
        <div className="px-2 py-6 md:px-8 md:py-12 text-center">
          <h2 className="text-2xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Executive Experience
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm md:text-xl leading-relaxed text-slate-300 px-2">
            16+ years of architecting enterprise AI solutions and driving
            digital transformation
          </p>
        </div>

        <div className="mx-auto max-w-full overflow-x-clip px-1 pb-8 md:max-w-6xl md:px-8 md:pb-16">
          <div className="relative">
            <div 
              className="absolute -bottom-8 -top-20 left-6 md:left-12" 
              style={{
                width: '2px',
                background: '#00d4ff',
                boxShadow: '0 0 8px rgba(0, 212, 255, 0.6), 0 0 4px rgba(0, 212, 255, 0.8)',
                transform: 'translateX(-50%)',
              }}
            />

            {ROLES.map((role, index) => {
              const isVisible = visibleItems.has(index);
              const isExpanded = expanded.has(index);

              return (
                <div
                  key={role.dates}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative mb-6 pl-16 md:mb-12 md:pl-28"
                >
                  <div
                    className="absolute top-2 left-6 md:top-4 md:left-12 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full"
                    style={{
                      background: isVisible 
                        ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(30, 144, 255, 0.15))'
                        : 'rgba(255, 255, 255, 0.1)',
                      border: isVisible ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(-50%)',
                      transition: 'background 0.3s ease, border 0.3s ease',
                    }}
                  >
                    <IconCircle>
                      {role.icon}
                    </IconCircle>
                  </div>

                  <div
                    className={`timeline-item-visible relative overflow-hidden rounded-lg
                                p-4 md:p-8
                                w-[calc(100vw-5.5rem)] max-w-[92vw] md:w-auto md:max-w-none
                                transition-all duration-700
                                card-shell
                                ${isVisible ? 'opacity-100 md:translate-x-2 md:scale-[1.02]' : 'opacity-95'}`}
                    style={{
                      background: isVisible
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: isVisible ? 'blur(25px)' : 'blur(15px)',
                      WebkitBackdropFilter: isVisible
                        ? 'blur(25px)'
                        : 'blur(15px)',
                      border: isVisible 
                        ? '1px solid rgba(0, 212, 255, 0.2)' 
                        : '1px solid rgba(255, 255, 255, 0.05)',
                      animation: isVisible ? 'glowPulse 3s ease-in-out infinite' : 'none',
                      willChange: 'transform, opacity',
                      transform: 'translateZ(0)', // Force hardware acceleration
                    }}
                  >
                    {/* Gradient border removed - using universal background */}

                    <div
                      className={`pointer-events-none absolute inset-0 md:-inset-2 transition-opacity duration-500 rounded-lg ${
                        isVisible ? 'opacity-40' : 'opacity-0'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(30, 144, 255, 0.05), rgba(0, 212, 255, 0.05))',
                        backgroundSize: '200% 200%',
                        animation: isVisible ? 'gradientShift 4s ease-in-out infinite' : 'none',
                        filter: 'blur(8px)',
                      }}
                    />

                    <div className="relative z-10">
                      <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {role.dates}
                      </span>

                        <h3 className="text-[13px] font-bold leading-tight text-white break-words md:text-2xl title-tight">
                        {role.role}
                      </h3>
                      <div className="mb-2 text-xs font-medium text-cyan-400 md:text-base">
                        {role.company}
                        <span className="ml-2 text-xs text-slate-400 md:text-sm">
                          | {role.location}
                        </span>
                      </div>

                      <p className="mb-2 text-[13px] leading-relaxed text-slate-300 md:text-base desc-tight">
                        {role.description}
                      </p>

                      <div className="mb-2 flex flex-wrap gap-0.5 pb-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="whitespace-nowrap rounded-full border border-blue-500/40 bg-blue-500/20 px-1.5 py-0.5 text-xs font-medium text-slate-200 transition-colors hover:bg-blue-500/30 md:text-sm md:px-3 md:py-1"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        aria-expanded={isExpanded}
                        className="mb-2 block w-3/4 mx-auto rounded-md border border-cyan-500/40 bg-cyan-500/20 py-1.5 px-2 text-xs font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/30 md:hidden"
                      >
                        {isExpanded ? 'Hide Achievements' : 'View Achievements'}
                        <span
                          className={`ml-2 inline-block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`space-y-4 overflow-hidden transition-all duration-300 md:max-h-screen md:opacity-100 ${
                          isExpanded
                            ? 'max-h-screen opacity-100'
                            : 'max-h-0 opacity-0 md:max-h-screen md:opacity-100'
                        }`}
                      >
                        {role.achievements.map((achievement) => (
                          <div
                            key={achievement.title}
                            className="rounded-md border-l-4 border-cyan-400 bg-cyan-500/10 p-3 transition-all duration-300 hover:translate-x-1 hover:bg-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/20"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 text-lg text-cyan-400 stroke-2">
                                →
                              </span>
                              <div>
                                <h4 className="mb-1 text-sm font-semibold text-cyan-400 stroke-2 md:text-base md:mb-2">
                                  {achievement.title}
                                </h4>
                                <p className="text-[13px] leading-relaxed text-slate-300 md:text-sm">
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
              );
            })}
          </div>
        </div>

        {/* Core Competencies Section */}
        <div className="mx-auto max-w-full px-1 pb-8 md:max-w-6xl md:px-8 md:pb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl font-bold md:text-3xl mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Core Competencies
              </span>
            </h3>
            <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto">
              Strategic expertise across AI/ML, digital transformation, and enterprise leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI/ML Strategy & Innovation",
                skills: ["Generative AI", "LLM Deployment", "OpenAI", "ChatGPT", "Machine Learning", "TensorFlow", "PyTorch", "AI Ethics", "Predictive Analytics", "NLP", "Computer Vision"]
              },
              {
                title: "Digital Transformation",
                skills: ["Industry 4.0", "IoT Platforms", "Digital Twins", "DevOps", "Agile", "Change Management"]
              },
              {
                title: "Cloud & Data Architecture",
                skills: ["AWS", "Azure", "GCP", "Snowflake", "Databricks", "Spark", "Kafka", "Data Lakes", "Data Governance", "Big Data", "ETL/ELT", "Data Mesh"]
              },
              {
                title: "Leadership & Strategy",
                skills: ["Executive Leadership", "P&L Management", "Strategic Planning", "C-Suite Engagement", "Team Building", "Innovation"]
              },
              {
                title: "Analytics & BI Platforms",
                skills: ["Tableau", "Alteryx", "PowerBI", "Looker", "Qlik", "Python", "R", "SQL", "Pandas", "NumPy", "Jupyter", "Apache Airflow"]
              },
              {
                title: "Emerging Technologies",
                skills: ["Blockchain", "AR/VR", "Robotics", "Geospatial", "Web 3.0", "Telematics"]
              },
              {
                title: "Enterprise Technology Stack",
                skills: ["Kubernetes", "Docker", "Microservices", "API Gateway", "Jenkins", "Git", "Terraform", "MongoDB", "PostgreSQL", "Redis"]
              },
              {
                title: "Cross-Functional Excellence",
                skills: ["Product Strategy", "Vendor Management", "Budget Planning", "Risk Management", "Compliance", "M&A Integration", "Executive Reporting", "Board Presentations"]
              }
            ].map((competency, index) => (
              <div
                key={competency.title}
                className="relative overflow-hidden rounded-lg p-6 transition-all duration-700 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Gradient border effect */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-lg opacity-0 hover:opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(30, 144, 255, 0.1))',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 4s ease-in-out infinite',
                  }}
                />

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                    {competency.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {competency.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.3)',
                          color: '#9be8ff',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
ExecutiveExperience.displayName = 'ExecutiveExperience';

export default ExecutiveExperience;
