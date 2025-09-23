'use client';

import { useEffect, useRef } from 'react';
import { Bot, Zap, ShieldAlert, Users, Factory, Network, Target, LineChart } from 'lucide-react';

type ProjectMetric = {
  value: string;
  label: string;
};

type Project = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  mobileDescription: string;
  metrics: ProjectMetric[];
  tags: string[];
};

const primaryProjects: Project[] = [
  {
    title: 'Enterprise LLM Deployment',
    icon: Bot,
    description:
      'Industry-first Large Language Model implementation across JPMorgan Chase Payments operations, representing the largest enterprise LLM deployment in financial services.',
    mobileDescription: 'Largest LLM deployment in financial services at JPMorgan.',
    metrics: [
      { value: '27,000+', label: 'Active Users' },
      { value: '40%', label: 'Automation Rate' },
    ],
    tags: ['LLM', 'NLP', 'Enterprise AI'],
  },
  {
    title: 'IoT Innovation Platform',
    icon: Zap,
    description:
      'Breakthrough IoT ecosystem at Southwest Airlines implementing edge computing and AI analytics across fuel, baggage, and de-icing operations.',
    mobileDescription: 'IoT platform delivering massive operational savings.',
    metrics: [
      { value: '250%', label: 'ROI Achievement' },
      { value: '$20M+', label: 'Annual Savings' },
    ],
    tags: ['IoT', 'AWS', 'Edge Computing'],
  },
  {
    title: 'AI Fraud Detection Engine',
    icon: ShieldAlert,
    description:
      'Real-time fraud analytics platform for global insurance leader processing millions of transactions with advanced ML algorithms.',
    mobileDescription: 'Real-time ML fraud detection at massive scale.',
    metrics: [
      { value: '$400M', label: 'Contract Value' },
      { value: '99.9%', label: 'Accuracy Rate' },
    ],
    tags: ['ML', 'Fraud Detection', 'Real-time'],
  },
  {
    title: "World's Largest Analytics Community",
    icon: Users,
    description:
      "Established Capital One's enterprise Tableau platform—the largest evangelical analytics community worldwide.",
    mobileDescription: "30,000+ user platform—world's largest analytics community.",
    metrics: [
      { value: '30,000+', label: 'Platform Users' },
      { value: '80%', label: 'Capability Boost' },
    ],
    tags: ['Tableau', 'Data Governance', 'COE'],
  },
];

const secondaryProjects: Project[] = [
  {
    title: 'Industry 4.0 IoT Ecosystem',
    icon: Factory,
    description:
      'Comprehensive platform integrating 1000+ IoT devices across telematics, smart buildings, and wearables with unified AI analytics.',
    mobileDescription: 'Connected 1000+ IoT devices for Fortune 50 insurers.',
    metrics: [
      { value: '1000+', label: 'Connected Devices' },
      { value: '60%', label: 'Loss Reduction' },
    ],
    tags: ['Industry 4.0', 'Telematics', 'AI Analytics'],
  },
  {
    title: 'Global Infrastructure Transformation',
    icon: Network,
    description:
      'Worldwide infrastructure modernization at Citigroup, architecting telemetry platforms that eliminated weekly Sev1 outages.',
    mobileDescription: 'Achieved 98% uptime from weekly outages at Citi.',
    metrics: [
      { value: '98%', label: 'Uptime' },
      { value: '200%', label: 'Cloud Acceleration' },
    ],
    tags: ['DevOps', 'Cloud', 'Global Scale'],
  },
  {
    title: 'Event-Based Marketing Engine',
    icon: Target,
    description:
      'Real-time Hadoop-powered engine at Citigroup reaching millions with personalized campaigns and 300% conversion improvement.',
    mobileDescription: 'Reached 10M+ customers with 300% better conversion.',
    metrics: [
      { value: '10M+', label: 'Customers Reached' },
      { value: '300%', label: 'Conversion Uplift' },
    ],
    tags: ['Hadoop', 'Real-time', 'Big Data'],
  },
  {
    title: 'Analytics-as-a-Service Platform',
    icon: LineChart,
    description:
      'Self-service analytics platform at EY automating Risk, Compliance, and Fraud detection, generating continuous revenue stream.',
    mobileDescription: 'SaaS platform generating $30M annual revenue at EY.',
    metrics: [
      { value: '$30M', label: 'Annual Revenue' },
      { value: '85%', label: 'Process Automation' },
    ],
    tags: ['SaaS', 'Analytics', 'Platform'],
  },
];

const TransformationLeadership = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Skip mouse tracking on mobile devices for better performance
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return;
    }

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!cards.length) {
      return;
    }

    const baseBackground = 'rgba(255, 255, 255, 0.05)';
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      let rafId: number;
      
      const handleMouseMove = (event: MouseEvent) => {
        // Use requestAnimationFrame to throttle updates for better performance
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 212, 255, 0.1), ${baseBackground})`;
        });
      };

      const handleMouseLeave = () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        card.style.background = baseBackground;
      };

      card.style.background = baseBackground;
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.style.background = baseBackground;
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="transformation-section">
      <style jsx>{`
        .transformation-section {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 3rem 0 4rem;
            position: relative;
            z-index: 10;
            overflow: hidden;
        }

        .background-overlay {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
        }

        .star-field {
            position: absolute;
            top: -100%;
            left: 0;
            width: 200%;
            height: 300%;
            background-repeat: repeat;
            opacity: 0.15;
            animation: starDrift var(--duration) linear infinite;
        }

        .star-layer-1 {
            background-image: radial-gradient(2px 2px at 20px 20px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
                              radial-gradient(1px 1px at 50px 80px, rgba(0, 212, 255, 0.6) 50%, transparent 50%),
                              radial-gradient(1.5px 1.5px at 90px 40px, rgba(30, 144, 255, 0.5) 50%, transparent 50%),
                              radial-gradient(1.5px 1.5px at 140px 120px, rgba(0, 212, 255, 0.55) 50%, transparent 50%),
                              radial-gradient(2px 2px at 180px 60px, rgba(255, 255, 255, 0.5) 50%, transparent 50%);
            --duration: 60s;
        }

        .star-layer-2 {
            background-image: radial-gradient(1.5px 1.5px at 30px 30px, rgba(255, 255, 255, 0.5) 50%, transparent 50%),
                              radial-gradient(2px 2px at 70px 100px, rgba(0, 212, 255, 0.4) 50%, transparent 50%),
                              radial-gradient(1px 1px at 120px 60px, rgba(30, 144, 255, 0.4) 50%, transparent 50%),
                              radial-gradient(1.5px 1.5px at 160px 140px, rgba(255, 255, 255, 0.45) 50%, transparent 50%),
                              radial-gradient(1.2px 1.2px at 200px 90px, rgba(0, 212, 255, 0.35) 50%, transparent 50%);
            --duration: 90s;
        }

        .star-layer-3 {
            background-image: radial-gradient(1px 1px at 40px 50px, rgba(255, 255, 255, 0.35) 50%, transparent 50%),
                              radial-gradient(2px 2px at 100px 20px, rgba(0, 212, 255, 0.35) 50%, transparent 50%),
                              radial-gradient(1.5px 1.5px at 150px 90px, rgba(30, 144, 255, 0.3) 50%, transparent 50%),
                              radial-gradient(1px 1px at 210px 150px, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
                              radial-gradient(1.2px 1.2px at 60px 160px, rgba(0, 212, 255, 0.28) 50%, transparent 50%);
            --duration: 120s;
        }

        @keyframes starDrift {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-25%, 25%, 0); }
        }

        .portfolio-header-section {
            text-align: center;
            padding: 3rem 2rem;
            animation: fadeInDown 1s ease-out;
            background: transparent;
        }

        .portfolio-title {
            font-size: 2.8rem;
            font-weight: 800;
            letter-spacing: -0.01em;
            margin-bottom: 1rem;
            color: #ffffff;
        }

        .portfolio-title .gradient-text {
            color: #00d4ff; /* Fallback solid color */
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            /* Improve gradient text rendering */
            -webkit-text-stroke: 0.5px transparent;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .portfolio-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .projects-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem 2rem;
        }

        .projects-container-secondary {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem 4rem;
            position: relative;
            background: transparent;
            
            
            overflow: hidden;
        }



        .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .project-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 16px;
            border: 1px solid rgba(0, 212, 255, 0.22);
            overflow: hidden;
            position: relative;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(30px);
            animation: cardReveal 0.8s ease forwards;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.15s; }
        .project-card:nth-child(3) { animation-delay: 0.2s; }
        .project-card:nth-child(4) { animation-delay: 0.25s; }

        .project-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            border: 0.5px solid rgba(0, 255, 255, 0.3);
            padding: 2px;
            background: linear-gradient(135deg, #00ffff, #00d4ff, #00ffff);
            background-size: 200% 200%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.5;
            animation: gradientRotate 4s linear infinite;
        }

        .project-card:hover {
            transform: translateY(-5px) scale(1.01);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(0, 212, 255, 0.4);
            box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
        }

        .project-card:hover::before {
            opacity: 1;
        }

        .project-image {
            height: 140px;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(0, 212, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .project-image::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(30, 144, 255, 0.05) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .project-card:hover .project-image::before {
            opacity: 1;
        }

        .project-image::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: shimmer 3s infinite;
        }

        .project-icon {
            color: #00d4ff;
            z-index: 1;
            position: relative;
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 212, 255, 0.3));
        }

        .project-card:hover .project-icon {
            color: #ffffff;
            transform: scale(1.05);
            filter: drop-shadow(0 4px 8px rgba(0, 212, 255, 0.5));
        }

        .project-content {
            padding: 2rem;
            position: relative;
            z-index: 1;
        }

        .project-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #00d4ff; /* Fallback solid color */
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.8rem;
            line-height: 1.3;
            /* Improve gradient text rendering */
            -webkit-text-stroke: 0.5px transparent;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .project-description {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
            margin-bottom: 1.2rem;
            font-size: 0.9rem;
        }

        .project-metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
            margin-bottom: 1.2rem;
        }

        .project-metric {
            background: rgba(0, 212, 255, 0.08);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 12px;
            padding: 0.8rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .project-metric:hover {
            background: rgba(0, 212, 255, 0.12);
            border-color: rgba(0, 212, 255, 0.3);
            transform: translateY(-2px);
        }

        .project-metric-number {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00d4ff, #1e90ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            margin-bottom: 0.2rem;
        }

        .project-metric-label {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .tech-tag {
            background: rgba(30, 144, 255, 0.1);
            border: 1px solid rgba(30, 144, 255, 0.25);
            color: rgba(255, 255, 255, 0.9);
            padding: 0.25rem 0.6rem;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            transition: all 0.3s ease;
        }

        .tech-tag:hover {
            background: rgba(30, 144, 255, 0.18);
            border-color: rgba(30, 144, 255, 0.4);
            transform: translateY(-1px);
        }

        .desktop-text {
            display: block;
        }

        .mobile-text {
            display: none;
        }

        /* Fallback for browsers that don't support gradient text properly */
        @supports not (background-clip: text) or not (-webkit-background-clip: text) {
            .portfolio-title .gradient-text,
            .project-title,
            .project-metric-number {
                color: #00d4ff;
                background: none;
                -webkit-text-fill-color: initial;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes cardReveal {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes gradientRotate {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes circuitMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100px, 100px); }
        }

        @media (max-width: 1024px) {
            .projects-grid {
                gap: 1.5rem;
            }

            .project-content {
                padding: 1.5rem;
            }
        }

        @media (max-width: 768px) {
            /* Use solid colors on mobile for better performance and rendering */
            .portfolio-title .gradient-text,
            .project-title {
                color: #00d4ff !important;
                background: none !important;
                -webkit-text-fill-color: initial !important;
                -webkit-background-clip: initial !important;
                background-clip: initial !important;
            }
            
            .project-metric-number {
                color: #00d4ff !important;
                background: none !important;
                -webkit-text-fill-color: initial !important;
                -webkit-background-clip: initial !important;
                background-clip: initial !important;
            }
            
            /* Disable performance-heavy animations on mobile */
            .star-field {
                animation: none !important;
                opacity: 0.2;
            }
            
            .project-card::before {
                animation: none !important;
            }
            
            .project-image::after {
                animation: none !important;
            }

            .portfolio-header-section {
                padding: 2rem 1rem;
            }

            .portfolio-title {
                font-size: 2rem;
            }

            .portfolio-subtitle {
                font-size: 1rem;
            }

            .projects-container {
                padding: 0 1rem 2rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .project-image {
                height: 140px;
            }

            .project-content {
                padding: 1.5rem;
            }

            .project-title {
                font-size: 1.2rem;
            }

            .project-description {
                font-size: 0.85rem;
            }

            .project-metric-number {
                font-size: 1.3rem;
            }

            .project-metric-label {
                font-size: 0.65rem;
            }

            .tech-tag {
                font-size: 0.65rem;
                padding: 0.2rem 0.5rem;
            }

            .desktop-text {
                display: none;
            }

            .mobile-text {
                display: block;
            }

            .projects-container-secondary {
                padding: 0 1rem 3rem;
            }
        }

        @media (max-width: 480px) {
            .transformation-section {
                padding: 2rem 0 3rem;
            }

            .portfolio-header-section {
                padding: 1.5rem 1rem;
            }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
            .star-field,
            .project-card::before,
            .project-image::after {
                animation: none !important;
            }
            
            .project-card {
                animation: none !important;
                opacity: 1;
                transform: none;
            }
        }
      `}</style>

      <div className="background-overlay">
        <div className="star-field star-layer-1" />
        <div className="star-field star-layer-2" />
        <div className="star-field star-layer-3" />
      </div>

      <div className="portfolio-header-section">
        <h2 className="portfolio-title">
          <span className="gradient-text">TRANSFORMATION LEADERSHIP</span>
        </h2>
        <p className="portfolio-subtitle desktop-text">
          Revolutionary innovations that don&apos;t just solve today&apos;s challenges—they redefine how entire industries operate tomorrow
        </p>
        <p className="portfolio-subtitle mobile-text">AI solutions driving Fortune 500 transformation</p>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {primaryProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="project-card"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div className="project-image">
                  <IconComponent size={56} className="project-icon" />
                  
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description desktop-text">{project.description}</p>
                  <p className="project-description mobile-text">{project.mobileDescription}</p>

                  <div className="project-metrics">
                    {project.metrics.map((metric) => (
                      <div key={`${project.title}-${metric.label}`} className="project-metric">
                        <span className="project-metric-number">{metric.value}</span>
                        <div className="project-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={`${project.title}-${tag}`} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="projects-container-secondary">
        <div className="projects-grid">
          {secondaryProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="project-card"
                ref={(el) => {
                  cardRefs.current[primaryProjects.length + index] = el;
                }}
              >
                <div className="project-image">
                  <IconComponent size={56} className="project-icon" />
                  
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description desktop-text">{project.description}</p>
                  <p className="project-description mobile-text">{project.mobileDescription}</p>

                  <div className="project-metrics">
                    {project.metrics.map((metric) => (
                      <div key={`${project.title}-${metric.label}`} className="project-metric">
                        <span className="project-metric-number">{metric.value}</span>
                        <div className="project-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={`${project.title}-${tag}`} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransformationLeadership;
