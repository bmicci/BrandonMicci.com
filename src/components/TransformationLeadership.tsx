'use client';

import { useEffect, useRef } from 'react';

type ProjectMetric = {
  value: string;
  label: string;
};

type Project = {
  title: string;
  emoji: string;
  description: string;
  mobileDescription: string;
  metrics: ProjectMetric[];
  tags: string[];
};

const primaryProjects: Project[] = [
  {
    title: 'Enterprise LLM Deployment',
    emoji: '🤖',
    description:
      'Industry-first Large Language Model implementation across JPMorgan Chase Payments operations, representing the largest enterprise LLM deployment in financial services.',
    mobileDescription:
      'Largest LLM deployment in financial services at JPMorgan.',
    metrics: [
      { value: '27,000+', label: 'Active Users' },
      { value: '40%', label: 'Automation Rate' },
    ],
    tags: ['LLM', 'NLP', 'Enterprise AI'],
  },
  {
    title: 'IoT Innovation Platform',
    emoji: '✈️',
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
    emoji: '🔍',
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
    emoji: '📊',
    description:
      "Established Capital One's enterprise Tableau platform—the largest evangelical analytics community worldwide.",
    mobileDescription:
      "30,000+ user platform—world's largest analytics community.",
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
    emoji: '🏢',
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
    emoji: '🌐',
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
    emoji: '📱',
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
    emoji: '💼',
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
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!cards.length) {
      return;
    }

    const baseBackground = 'rgba(255, 255, 255, 0.03)';
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 212, 255, 0.1), ${baseBackground})`;
      };

      const handleMouseLeave = () => {
        card.style.background = baseBackground;
      };

      card.style.background = baseBackground;
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
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
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
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
          opacity: 0.4;
          animation: starDrift var(--duration) linear infinite;
        }

        .star-layer-1 {
          background-image:
            radial-gradient(
              2px 2px at 20px 20px,
              rgba(255, 255, 255, 0.6) 50%,
              transparent 50%
            ),
            radial-gradient(
              1px 1px at 50px 80px,
              rgba(0, 212, 255, 0.6) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.5px 1.5px at 90px 40px,
              rgba(30, 144, 255, 0.5) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.5px 1.5px at 140px 120px,
              rgba(0, 212, 255, 0.55) 50%,
              transparent 50%
            ),
            radial-gradient(
              2px 2px at 180px 60px,
              rgba(255, 255, 255, 0.5) 50%,
              transparent 50%
            );
          --duration: 60s;
        }

        .star-layer-2 {
          background-image:
            radial-gradient(
              1.5px 1.5px at 30px 30px,
              rgba(255, 255, 255, 0.5) 50%,
              transparent 50%
            ),
            radial-gradient(
              2px 2px at 70px 100px,
              rgba(0, 212, 255, 0.4) 50%,
              transparent 50%
            ),
            radial-gradient(
              1px 1px at 120px 60px,
              rgba(30, 144, 255, 0.4) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.5px 1.5px at 160px 140px,
              rgba(255, 255, 255, 0.45) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.2px 1.2px at 200px 90px,
              rgba(0, 212, 255, 0.35) 50%,
              transparent 50%
            );
          --duration: 90s;
        }

        .star-layer-3 {
          background-image:
            radial-gradient(
              1px 1px at 40px 50px,
              rgba(255, 255, 255, 0.35) 50%,
              transparent 50%
            ),
            radial-gradient(
              2px 2px at 100px 20px,
              rgba(0, 212, 255, 0.35) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.5px 1.5px at 150px 90px,
              rgba(30, 144, 255, 0.3) 50%,
              transparent 50%
            ),
            radial-gradient(
              1px 1px at 210px 150px,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 50%
            ),
            radial-gradient(
              1.2px 1.2px at 60px 160px,
              rgba(0, 212, 255, 0.28) 50%,
              transparent 50%
            );
          --duration: 120s;
        }

        @keyframes starDrift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-25%, 25%, 0);
          }
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
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .portfolio-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem 2rem;
        }

        .projects-container-secondary {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          position: relative;
          background: #0a0e27;
          border-radius: 24px;
          overflow: hidden;
        }

        .projects-container-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(
              90deg,
              rgba(0, 212, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: circuitMove 20s linear infinite;
          z-index: 0;
          pointer-events: none;
        }

        .projects-container-secondary .projects-grid {
          position: relative;
          z-index: 1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          transform: translateY(30px);
          animation: cardReveal 0.8s ease forwards;
        }

        .project-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .project-card:nth-child(2) {
          animation-delay: 0.15s;
        }
        .project-card:nth-child(3) {
          animation-delay: 0.2s;
        }
        .project-card:nth-child(4) {
          animation-delay: 0.25s;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          animation: gradientRotate 4s linear infinite;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 212, 255, 0.3);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-image {
          height: 160px;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          position: relative;
          overflow: hidden;
        }

        .project-image::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .project-content {
          padding: 1.8rem;
          position: relative;
          z-index: 1;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.8rem;
          line-height: 1.3;
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
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 10px;
          padding: 0.8rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .project-metric:hover {
          background: rgba(0, 212, 255, 0.15);
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
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
          background: rgba(30, 144, 255, 0.15);
          border: 1px solid rgba(30, 144, 255, 0.4);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.25rem 0.6rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(30, 144, 255, 0.25);
          border-color: #1e90ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(30, 144, 255, 0.3);
        }

        .desktop-text {
          display: block;
        }

        .mobile-text {
          display: none;
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
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes circuitMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
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
            font-size: 3rem;
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
      `}</style>

      <div className="background-overlay">
        <div className="star-field star-layer-1" />
        <div className="star-field star-layer-2" />
        <div className="star-field star-layer-3" />
      </div>

      <div className="portfolio-header-section">
        <h2 className="portfolio-title">
          <span className="gradient-text">INNOVATION PORTFOLIO</span>
        </h2>
        <p className="portfolio-subtitle desktop-text">
          Strategic AI implementations delivering quantifiable business
          transformation across Fortune 500 technology ecosystems
        </p>
        <p className="portfolio-subtitle mobile-text">
          AI solutions driving Fortune 500 transformation
        </p>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {primaryProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <div className="project-image">
                <span>{project.emoji}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description desktop-text">
                  {project.description}
                </p>
                <p className="project-description mobile-text">
                  {project.mobileDescription}
                </p>

                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div
                      key={`${project.title}-${metric.label}`}
                      className="project-metric"
                    >
                      <span className="project-metric-number">
                        {metric.value}
                      </span>
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
          ))}
        </div>
      </div>

      <div className="projects-container-secondary">
        <div className="projects-grid">
          {secondaryProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              ref={(el) => {
                cardRefs.current[primaryProjects.length + index] = el;
              }}
            >
              <div className="project-image">
                <span>{project.emoji}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description desktop-text">
                  {project.description}
                </p>
                <p className="project-description mobile-text">
                  {project.mobileDescription}
                </p>

                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div
                      key={`${project.title}-${metric.label}`}
                      className="project-metric"
                    >
                      <span className="project-metric-number">
                        {metric.value}
                      </span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformationLeadership;
