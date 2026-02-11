'use client';

import { useEffect, useRef, useState, memo } from 'react';
import Link from 'next/link';
import {
  Brain,
  Rocket,
  Search,
  Plane,
  Database,
  Cloud,
  Shield,
  Building2,
  BarChart,
  TrendingUp,
  Globe,
} from 'lucide-react';

const IconCircle: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => (
    <div
      className="
    relative flex items-center justify-center
    w-8 h-8 md:w-12 md:h-12
    rounded-full border border-white/10
    bg-white/[0.03] backdrop-blur-sm
    shadow-inner
    before:content-[''] before:absolute before:inset-0 before:rounded-full
    before:shadow-[0_0_20px_rgba(0,212,255,0.5)]
    md:before:shadow-[0_0_35px_rgba(0,212,255,0.6)]
    ring-2 ring-cyan-400/40
    transition-all duration-300
    hover:scale-110
  "
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
);
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
    role: 'Head of AI Strategy & Enablement',
    company: 'JPMorgan Chase',
    location: 'Dallas, TX',
    icon: <Brain className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      'Lead AI strategy, automation, and LLM transformation across Payments Operations. Own end-to-end AI product delivery, $15M+ P&L, governance, and enterprise scaling for call centers, client servicing, and knowledge systems.',
    skills: [
      'AI Strategy',
      'LLM Deployment',
      'P&L Management',
      'AI Governance',
    ],
    achievements: [
      {
        title: '$22M+ Annualized Savings',
        text: 'Delivered $22M+ annualized savings through LLM-powered workflow automation, intelligent routing, and accelerated knowledge retrieval.',
      },
      {
        title: 'Industry-Leading AI Deployment',
        text: 'Architected multi-repository RAG system spanning 12+ knowledge sources, scaling enterprise LLM Assistant to 27,000+ employees—one of the largest LLM deployments in Commercial Payments.',
      },
      {
        title: 'Operational Excellence',
        text: 'Automated 38% of Tier-1 inquiries and reduced handle times by 55%, improving SLA performance and operational throughput.',
      },
      {
        title: 'AI Governance',
        text: 'Established AI governance framework and model risk management standards, ensuring regulatory compliance across 30+ AI/ML use cases.',
      },
    ],
  },
  {
    dates: '2022 - 2024',
    role: 'Senior Director, Head of AI/IoT & Emerging Technology Practice',
    company: 'Capgemini',
    location: 'Dallas, TX',
    icon: <Rocket className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      'Directed AI and emerging technology commercialization across Intelligent Industry portfolio. Built and scaled new practice focused on digital transformation and real-time AI analytics for Fortune 50 clients.',
    skills: ['P&L Management', 'AI/IoT Solutions', 'GTM Strategy', 'Team Leadership'],
    achievements: [
      {
        title: '$30M P&L Ownership',
        text: 'Owned $30M P&L for AI/IoT practice, leading 30+ architects, data scientists, and product leaders across pricing, margin optimization, and revenue targets.',
      },
      {
        title: '$9.8M Revenue Growth',
        text: 'Drove $9.8M in new revenue through GTM execution and solution commercialization, achieving 34% market penetration in new insurance technology vertical.',
      },
      {
        title: 'Fortune 50 Impact',
        text: 'Architected telematics and AI-driven risk platforms for Fortune 50 insurers, delivering significant improvements in loss mitigation through real-time predictive analytics.',
      },
      {
        title: 'Industry 4.0 Platform',
        text: 'Launched Industry 4.0 IoT Platform connecting thousands of devices across telematics, smart buildings, wearables, and industrial equipment with unified AI analytics.',
      },
    ],
  },
  {
    dates: '2021 - 2022',
    role: 'Senior Manager, AI/ML Forensic Analytics & Technology',
    company: 'Ernst & Young',
    location: 'Dallas, TX',
    icon: <Search className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      "Scaled AI/ML & Data Science strategy within Forensics Practice. Regional Leader and SME advising engagements across Financial Services, Life Sciences, and Energy sectors.",
    skills: [
      'Fraud Analytics',
      'AI/ML',
      'Business Development',
      'Data Science',
    ],
    achievements: [
      {
        title: 'Mega-Deal Success',
        text: 'Procured $400MM, 10-year strategic engagement with global insurance firm for real-time AI-powered fraud analytics engine.',
      },
      {
        title: 'Revenue Generation',
        text: 'Championed Analytics-as-a-Service platform enhancements and go-to-market strategy, contributing to $25MM+ in annual recurring revenue.',
      },
      {
        title: 'ESG Innovation',
        text: 'Pioneered ESG analytics prototype for Fortune 50 Oil & Gas sector, driving $6M+ in new revenue; led DOJ/FCPA compliance monitoring for healthcare client.',
      },
    ],
  },
  {
    dates: '2020 - 2021',
    role: 'Head of Digital Innovation & IoT',
    company: 'Southwest Airlines',
    location: 'Dallas, TX',
    icon: <Plane className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      'Promoted to newly created role reporting directly to CIO. Built and led Innovation Team driving digital transformation leveraging IoT, AI, and Edge Computing. Managed $25M technology budget and cross-functional team of 20+.',
    skills: ['IoT Architecture', 'Edge Computing', 'Digital Transformation', 'Budget Management'],
    achievements: [
      {
        title: 'Breakthrough ROI',
        text: 'Pioneered IoT Fuel Savings initiative delivering 250% ROI in 6 months; scaled to 20 stations generating $20M+ annual savings.',
      },
      {
        title: 'Comprehensive IoT Transformation',
        text: 'Led comprehensive IoT transformation across 3 Fuel Farms, 7 Baggage Handling Systems, and 8 De-Icing Stations on AWS-based platform.',
      },
    ],
  },
  {
    dates: '2019 - 2020',
    role: 'Manager, Data Enablement & Analytics COE',
    company: 'Southwest Airlines',
    location: 'Dallas, TX',
    icon: <Database className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      "Built Southwest's first Data Enablement & Analytics COE, driving 40% adoption increase in Tableau/Alteryx across 2,500+ users.",
    skills: ['Data Analytics', 'COE Leadership', 'Tableau', 'Alteryx'],
    achievements: [
      {
        title: 'Platform Rationalization',
        text: 'Replaced and decommissioned thousands of underutilized legacy dashboards across Business Objects, Quickbase, Cognos, and Crystal Reports platforms.',
      },
      {
        title: 'Community Building',
        text: 'Created evangelical Data Analyst Community growing to several thousand users, driving cultural shift toward data-driven decision-making.',
      },
      {
        title: 'Operational Excellence',
        text: 'Architected Tier 1 Production Data Environment achieving 100% availability and disaster recovery for critical real-time operations, implementing secure data isolation and access controls.',
      },
    ],
  },
  {
    dates: '2017 - 2019',
    role: 'Vice President, Global Infrastructure Transformation',
    company: 'Citigroup',
    location: 'Irving, TX',
    icon: <Cloud className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      'Led global infrastructure transformation across LATAM, NAM, EMEA, and APAC regions, matrixed across global CTOs while indirectly managing 500+ engineers worldwide.',
    skills: ['Global Programs', 'DevOps', 'Cloud Architecture', 'CI/CD'],
    achievements: [
      {
        title: 'Global Platform',
        text: 'Architected global telemetry platform and service improvement program eliminating weekly Sev1 outages, accelerating cloud adoption by 200%, achieving 98% uptime worldwide.',
      },
      {
        title: 'Marketing Engine',
        text: 'Built event-based marketing engine leveraging Hadoop/Cloudera reaching 10M+ customers through data-driven targeted campaigns.',
      },
      {
        title: 'DevOps Transformation',
        text: 'Led organizational change management for DevOps transformation across 500+ engineers, establishing world-class CI/CD practices.',
      },
    ],
  },
  {
    dates: '2015 - 2017',
    role: 'Manager, Big Data & Analytics COE',
    company: 'Capital One',
    location: 'Richmond / Plano',
    icon: <BarChart className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
    description:
      "Established and led Capital One's Tableau & Big Data Center of Excellence—one of the most successful enterprise analytics transformations in financial services. Built Risk & Analytics organization for Auto Finance & Home Loans.",
    skills: [
      'Tableau COE',
      'Big Data',
      'Risk Analytics',
      'Executive Dashboards',
    ],
    achievements: [
      {
        title: 'World-Class Analytics Community',
        text: 'Built largest evangelical Tableau community globally, scaling adoption from zero to 30,000+ enterprise users.',
      },
      {
        title: 'CEO Dashboard Architect',
        text: 'Appointed to architect executive mobile dashboards for CEO Rich Fairbank, delivering top-of-house BI for strategic decision-making.',
      },
      {
        title: '$8M Cost Savings',
        text: 'Led enterprise-wide platform rationalization, decommissioning 2,000+ legacy dashboards and reports, delivering $8M annual savings.',
      },
      {
        title: 'NLP/OCR Innovation',
        text: 'Pioneered NLP/OCR automation scanning official regulatory changes from government sources, auto-generating compliance testing scripts and increasing control coverage by 80%.',
      },
    ],
  },
  {
    dates: '2013 - 2015',
    role: 'Senior Consultant, Lead Data Analyst',
    company: 'Booz Allen Hamilton',
    location: 'McLean, VA',
    icon: (
      <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />
    ),
    description:
      "Pioneered Tableau Enterprise deployments, establishing data analytics infrastructure for fraud detection, compliance, and C-suite reporting.",
    skills: ['Data Analytics', 'Fraud Detection', 'Predictive Analytics', 'ML'],
    achievements: [
      {
        title: 'Fraud Detection',
        text: 'Architected predictive analytics platform using ML, increasing fraud detection anomalies by 150%.',
      },
      {
        title: 'Governance Framework',
        text: 'Established steering committee to govern new system implementation, formalizing continuous reporting framework for compliance management.',
      },
    ],
  },
  {
    dates: '2009 - 2013',
    role: 'Global Operations and Strategy Associate',
    company: 'PricewaterhouseCoopers',
    location: 'McLean, VA',
    icon: <Globe className="w-4 h-4 md:w-6 md:h-6 text-white stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />,
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
          0%,
          100% {
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
          0%,
          100% {
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
          .se-tight .title-tight {
            font-size: 13px;
          }
          .se-tight .desc-tight {
            font-size: 13px;
          }
        }

        .section-header-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .section-header-title {
            font-size: 2.6rem;
          }
        }

        @media (max-width: 768px) {
          .section-header-title {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 480px) {
          .section-header-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="relative z-10 font-sans">
        <div className="px-2 py-6 md:px-8 md:py-12 text-center">
          <h2 className="section-header-title">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Executive Experience
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm md:text-xl leading-relaxed text-slate-200 px-2 font-semibold">
            16+ years of{' '}
            <Link
              href="/#strategic-advantage"
              className="text-cyan-400 hover:text-cyan-300 transition-colors border-b border-cyan-400/30 hover:border-cyan-400/80"
            >
              architecting enterprise AI solutions
            </Link>
            , leading{' '}
            <Link
              href="/#transformation-leadership"
              className="text-cyan-400 hover:text-cyan-300 transition-colors border-b border-cyan-400/30 hover:border-cyan-400/80"
            >
              Fortune 500 digital transformation initiatives
            </Link>
            , and scaling LLM deployments
          </p>
        </div>

        <div className="mx-auto max-w-full overflow-x-clip px-1 pb-8 md:max-w-6xl md:px-8 md:pb-16">
          <div className="relative">
            <div
              className="absolute -bottom-4 -top-8 left-6 md:left-12"
              style={{
                width: '2px',
                backgroundColor: 'rgba(0, 212, 255, 0.8)',
                background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.8) 0%, rgba(0, 212, 255, 0.9) 15%, rgba(0, 212, 255, 0.9) 85%, rgba(0, 212, 255, 0.8) 100%)',
                boxShadow:
                  '0 0 8px rgba(0, 212, 255, 0.6), 0 0 16px rgba(0, 212, 255, 0.3)',
                transform: 'translateX(-50%)',
                willChange: 'opacity',
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
                      border: isVisible
                        ? '1px solid rgba(0, 212, 255, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(-50%)',
                      transition: 'background 0.3s ease, border 0.3s ease',
                    }}
                  >
                    <IconCircle>{role.icon}</IconCircle>
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
                      animation: isVisible
                        ? 'glowPulse 3s ease-in-out infinite'
                        : 'none',
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
                        background:
                          'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(30, 144, 255, 0.05), rgba(0, 212, 255, 0.05))',
                        backgroundSize: '200% 200%',
                        animation: isVisible
                          ? 'gradientShift 4s ease-in-out infinite'
                          : 'none',
                        filter: 'blur(8px)',
                      }}
                    />

                    <div className="relative z-10">
                      <span 
                        className="mb-2 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(30, 144, 255, 0.3))',
                          border: '1px solid rgba(0, 212, 255, 0.5)',
                          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
                        }}
                      >
                        {role.dates}
                      </span>

                      <h3 className="text-[13px] font-bold leading-tight text-white break-words md:text-2xl title-tight">
                        {role.role}
                      </h3>
                      <div className="mb-2 text-xs font-medium md:text-base">
                        <span 
                          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
                          style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }}
                        >
                          {role.company}
                        </span>
                        <span className="ml-2 text-xs text-slate-400 md:text-sm">
                          | {role.location}
                        </span>
                      </div>

                      <p className="mb-2 text-sm leading-relaxed text-slate-100 md:text-base desc-tight" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                        {role.description}
                      </p>

                      <div className="mb-2 flex flex-wrap gap-0.5 pb-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="whitespace-nowrap rounded-full px-1.5 py-0.5 text-xs font-medium text-slate-200 transition-colors hover:bg-cyan-500/30 md:text-sm md:px-3 md:py-1"
                            style={{
                              border: '1px solid rgba(0, 212, 255, 0.7)',
                              background: 'rgba(0, 212, 255, 0.25)',
                              boxShadow: '0 0 8px rgba(0, 212, 255, 0.3)',
                              fontWeight: 600
                            }}
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
                            className="rounded-md border-l-4 p-3 transition-all duration-300 hover:translate-x-1 hover:bg-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/20"
                            style={{
                              borderLeft: '4px solid rgba(0, 212, 255, 0.6)',
                              background: 'rgba(0, 212, 255, 0.1)',
                              boxShadow: '-2px 0 8px rgba(0, 212, 255, 0.2)'
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 text-lg text-cyan-400 stroke-2">
                                →
                              </span>
                              <div>
                                <div className="mb-1 text-sm font-semibold text-cyan-400 stroke-2 md:text-base md:mb-2">
                                  {achievement.title}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-100 md:text-base" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
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
            <p className="text-sm md:text-lg text-slate-100 max-w-3xl mx-auto font-medium">
              Strategic expertise across AI/ML, digital transformation, and
              enterprise leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI/ML Strategy & Innovation',
                skills: [
                  'Generative AI',
                  'LLM Deployment',
                  'MLOps',
                  'LLMOps',
                  'Machine Learning',
                  'Model Governance',
                  'AI Ethics',
                  'Predictive Analytics',
                  'NLP',
                  'Computer Vision',
                  'Deep Learning',
                ],
              },
              {
                title: 'Digital Transformation',
                skills: [
                  'Industry 4.0',
                  'IoT Platforms',
                  'Digital Twins',
                  'DevOps',
                  'Agile',
                  'Change Management',
                ],
              },
              {
                title: 'Cloud & Data Architecture',
                skills: [
                  'AWS',
                  'Azure',
                  'GCP',
                  'Snowflake',
                  'Databricks',
                  'Spark',
                  'Kafka',
                  'Data Lakes',
                  'Data Governance',
                  'Big Data',
                  'ETL/ELT',
                  'Data Mesh',
                ],
              },
              {
                title: 'Leadership & Strategy',
                skills: [
                  'Executive Leadership',
                  'P&L Management',
                  'Strategic Planning',
                  'C-Suite Engagement',
                  'Team Building',
                  'Innovation',
                ],
              },
              {
                title: 'Analytics & BI Platforms',
                skills: [
                  'Tableau',
                  'Alteryx',
                  'PowerBI',
                  'Looker',
                  'Python',
                  'R',
                  'SQL',
                  'Data Science',
                  'Statistical Analysis',
                  'Apache Airflow',
                ],
              },
              {
                title: 'Emerging Technologies',
                skills: [
                  'Blockchain',
                  'AR/VR',
                  'Robotics',
                  'Geospatial',
                  'Web 3.0',
                  'Telematics',
                ],
              },
              {
                title: 'Enterprise Technology Stack',
                skills: [
                  'Kubernetes',
                  'Docker',
                  'Microservices',
                  'API Gateway',
                  'CI/CD',
                  'Infrastructure as Code',
                  'Terraform',
                  'Container Orchestration',
                  'Distributed Systems',
                ],
              },
              {
                title: 'Cross-Functional Excellence',
                skills: [
                  'Product Strategy',
                  'Vendor Management',
                  'Budget Planning',
                  'Risk Management',
                  'Compliance',
                  'M&A Integration',
                  'Executive Reporting',
                  'Board Presentations',
                ],
              },
              {
                title: 'Financial & Business Acumen',
                skills: [
                  'Revenue Growth',
                  'Cost Optimization',
                  'ROI Analysis',
                  'Business Case Development',
                  'Market Analysis',
                  'Competitive Intelligence',
                  'KPI Development',
                  'Performance Metrics',
                ],
              },
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
                    background:
                      'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(30, 144, 255, 0.1))',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 4s ease-in-out infinite',
                  }}
                />

                <div className="relative z-10">
                  <div className="text-lg font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                    {competency.title}
                  </div>

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

        {/* Education Section */}
        <div className="mx-auto max-w-full px-1 pb-16 md:max-w-6xl md:px-8 md:pb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl font-bold md:text-3xl mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education & Leadership Development
              </span>
            </h3>
            <p className="text-sm md:text-lg text-slate-100 max-w-3xl mx-auto font-medium">
              Academic foundation and continuous professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Primary Education */}
            <div
              className="relative overflow-hidden rounded-lg p-6 text-center transition-all duration-700 hover:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(30, 144, 255, 0.08))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
              }}
            >
              <div className="relative z-10">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Bachelor of Arts, Business Administration
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  The George Washington University
                </p>
                <p className="text-slate-300 text-sm mb-3">
                  School of Business • Washington, D.C.
                </p>
                <div className="text-xs text-slate-400">
                  <span className="bg-cyan-500/20 border border-cyan-500/30 rounded-full px-3 py-1">
                    Study Abroad: Florence, Italy
                  </span>
                </div>
              </div>
            </div>

            {/* Leadership Approach */}
            <div
              className="relative overflow-hidden rounded-lg p-6 text-center transition-all duration-700 hover:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(30, 144, 255, 0.08))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
              }}
            >
              <div className="relative z-10">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Leadership Approach
                </h3>
                <div className="space-y-2">
                  {[
                    'Transformational Leadership',
                    'Innovation-Driven',
                    'Data-Driven Decisions',
                    'People-First Culture',
                    'Continuous Learning',
                    'Results-Oriented',
                  ].map((approach) => (
                    <div
                      key={approach}
                      className="text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 py-1 px-3 inline-block mx-1"
                      style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        color: '#9be8ff',
                      }}
                    >
                      {approach}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
ExecutiveExperience.displayName = 'ExecutiveExperience';

export default ExecutiveExperience;
