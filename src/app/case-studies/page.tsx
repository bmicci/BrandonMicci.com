'use client';

import Link from 'next/link';
import {
  Bot,
  Zap,
  ShieldAlert,
  Users,
  Factory,
  Network,
  Target,
  LineChart,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';

type CaseStudy = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  technologies: string[];
  timeline?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 'enterprise-llm',
    title: 'Enterprise Knowledge Assistant',
    icon: Bot,
    company: 'Global Payments Leader',
    industry: 'Financial Services',
    challenge:
      'A global payments organization needed to democratize access to institutional knowledge across 7,500+ policy and procedure documents while maintaining strict governance, security, and compliance standards required in financial services.',
    solution:
      'Led the industry-first deployment of a multi-tenant, guardrailed Large Language Model platform that evolved from a policy search tool into a comprehensive enterprise knowledge assistant. Expanded from initial policy documents to 10+ integrated data sources across the Payments division.',
    results: [
      'Scaled from 7,500 policy documents to 10+ integrated data sources',
      'Deployed the largest enterprise LLM implementation in financial services',
      'Onboarded 27,000+ active users across the Payments organization',
      'Established governance model now replicated across other divisions',
    ],
    metrics: [
      { value: '27,000+', label: 'Active Users' },
      { value: '10+', label: 'Data Sources' },
    ],
    technologies: ['LLM', 'NLP', 'Enterprise AI', 'Governance Frameworks'],
  },
  {
    id: 'iot-innovation',
    title: 'IoT Innovation Platform',
    icon: Zap,
    company: 'Major U.S. Airline',
    industry: 'Aviation',
    challenge:
      'A major U.S. airline faced significant operational inefficiencies across fuel management, baggage handling, and de-icing operations—all critical to on-time performance and cost control.',
    solution:
      'Architected and deployed a breakthrough IoT ecosystem implementing edge computing and AI-powered analytics across multiple operational domains. Unified disparate data streams into actionable insights for operations teams.',
    results: [
      'Delivered $20M+ in annual operational savings',
      'Achieved 250% ROI within the first year of deployment',
      'Reduced fuel waste through predictive analytics',
      'Improved baggage handling efficiency and de-icing response times',
    ],
    metrics: [
      { value: '250%', label: 'ROI Achievement' },
      { value: '$20M+', label: 'Annual Savings' },
    ],
    technologies: ['IoT', 'AWS', 'Edge Computing', 'AI Analytics'],
  },
  {
    id: 'fraud-detection',
    title: 'AI Fraud Detection Engine',
    icon: ShieldAlert,
    company: 'Fortune 50 Insurer',
    industry: 'Insurance',
    challenge:
      'A global insurance leader needed real-time fraud detection capabilities that could process millions of transactions while maintaining accuracy rates that exceed industry standards.',
    solution:
      'Designed and implemented a real-time fraud analytics platform leveraging advanced machine learning algorithms. Built scalable infrastructure to handle massive transaction volumes with sub-second response times.',
    results: [
      'Secured $400M contract value based on platform capabilities',
      'Achieved 99.9% accuracy rate in fraud detection',
      'Processing millions of transactions in real-time',
      'Reduced false positives by 60% compared to legacy systems',
    ],
    metrics: [
      { value: '$400M', label: 'Contract Value' },
      { value: '99.9%', label: 'Accuracy Rate' },
    ],
    technologies: ['ML', 'Fraud Detection', 'Real-time Processing', 'Python'],
  },
  {
    id: 'analytics-community',
    title: "World's Largest Analytics Community",
    icon: Users,
    company: 'Top 10 U.S. Bank',
    industry: 'Financial Services',
    challenge:
      'A top 10 U.S. bank needed to democratize data analytics across a large, distributed organization while maintaining governance and driving a culture of data-driven decision making.',
    solution:
      "Established the enterprise Tableau Center of Excellence, building the world's largest evangelical analytics community. Created training programs, governance frameworks, and self-service capabilities that empowered business users.",
    results: [
      'Built the largest Tableau analytics community worldwide',
      'Onboarded 30,000+ platform users',
      'Achieved 80% improvement in analytics capability across the organization',
      'Created a replicable COE model for other analytics platforms',
    ],
    metrics: [
      { value: '30,000+', label: 'Platform Users' },
      { value: '80%', label: 'Capability Boost' },
    ],
    technologies: ['Tableau', 'Data Governance', 'COE', 'Analytics'],
  },
  {
    id: 'industry-4-iot',
    title: 'Industry 4.0 IoT Ecosystem',
    icon: Factory,
    company: 'Fortune 50 Insurer',
    industry: 'Insurance',
    challenge:
      'A major insurer sought to modernize their risk assessment and loss prevention capabilities through connected device data from telematics, smart buildings, and wearables.',
    solution:
      'Built a comprehensive Industry 4.0 platform integrating 1000+ IoT devices across multiple data streams. Unified telematics, smart building sensors, and wearable data into a single AI-powered analytics platform.',
    results: [
      'Integrated 1000+ IoT devices into unified platform',
      'Achieved 60% reduction in preventable losses',
      'Enabled real-time risk monitoring and alerting',
      'Created new data-driven insurance product offerings',
    ],
    metrics: [
      { value: '1000+', label: 'Connected Devices' },
      { value: '60%', label: 'Loss Reduction' },
    ],
    technologies: ['Industry 4.0', 'Telematics', 'AI Analytics', 'IoT'],
  },
  {
    id: 'infrastructure-transformation',
    title: 'Global Infrastructure Transformation',
    icon: Network,
    company: 'Global Financial Institution',
    industry: 'Financial Services',
    challenge:
      'A global financial institution faced critical infrastructure stability issues with weekly Sev1 outages impacting global operations and customer experience.',
    solution:
      'Led worldwide infrastructure modernization initiative, architecting new telemetry platforms and implementing DevOps practices that transformed the reliability and scalability of critical systems.',
    results: [
      'Eliminated weekly Sev1 outages, achieving 98% uptime',
      'Accelerated cloud migration by 200%',
      'Standardized telemetry across global infrastructure',
      'Reduced mean time to recovery (MTTR) by 70%',
    ],
    metrics: [
      { value: '98%', label: 'Uptime' },
      { value: '200%', label: 'Cloud Acceleration' },
    ],
    technologies: ['DevOps', 'Cloud', 'Global Scale', 'Telemetry'],
  },
  {
    id: 'marketing-engine',
    title: 'Event-Based Marketing Engine',
    icon: Target,
    company: 'Global Financial Institution',
    industry: 'Financial Services',
    challenge:
      'A global financial institution needed to modernize their marketing capabilities to deliver personalized, real-time campaigns at scale while improving conversion rates.',
    solution:
      'Built a real-time Hadoop-powered marketing engine capable of processing millions of customer interactions and delivering personalized campaigns based on behavioral triggers and events.',
    results: [
      'Reached 10M+ customers with personalized campaigns',
      'Achieved 300% improvement in conversion rates',
      'Enabled real-time event-based marketing triggers',
      'Reduced campaign deployment time from weeks to hours',
    ],
    metrics: [
      { value: '10M+', label: 'Customers Reached' },
      { value: '300%', label: 'Conversion Uplift' },
    ],
    technologies: ['Hadoop', 'Real-time', 'Big Data', 'Marketing Tech'],
  },
  {
    id: 'analytics-saas',
    title: 'Analytics-as-a-Service Platform',
    icon: LineChart,
    company: 'Big 4 Consulting Firm',
    industry: 'Consulting',
    challenge:
      'A Big 4 consulting firm needed to productize their analytics capabilities to create scalable, recurring revenue streams while automating complex Risk, Compliance, and Fraud detection processes.',
    solution:
      'Developed and launched a comprehensive Analytics-as-a-Service platform automating Risk, Compliance, and Fraud detection workflows. Created a self-service model that could be deployed across multiple client engagements.',
    results: [
      'Generated $25MM+ in annual recurring revenue',
      'Achieved 85% process automation',
      'Scaled platform across multiple Fortune 500 clients',
      'Reduced client implementation time by 60%',
    ],
    metrics: [
      { value: '$25MM+', label: 'Annual Revenue' },
      { value: '85%', label: 'Process Automation' },
    ],
    technologies: ['SaaS', 'Analytics', 'Platform', 'Risk & Compliance'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <style jsx>{`
        .case-studies-page {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          padding: 6rem 0 4rem;
          min-height: 100vh;
        }

        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #00d4ff;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .case-studies-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .case-study-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 255, 0.15);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .case-study-card:hover {
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(0, 212, 255, 0.05);
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }

        .card-icon {
          width: 70px;
          height: 70px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          flex-shrink: 0;
        }

        .card-title-section {
          flex: 1;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .card-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .meta-value {
          color: #00d4ff;
          font-weight: 500;
        }

        .card-metrics {
          display: flex;
          gap: 1rem;
          margin-left: auto;
        }

        .metric-box {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          padding: 0.75rem 1.25rem;
          text-align: center;
          min-width: 100px;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00d4ff;
          display: block;
        }

        .metric-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-body {
          padding: 2rem;
        }

        .section {
          margin-bottom: 1.5rem;
        }

        .section:last-child {
          margin-bottom: 0;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #00d4ff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .section-content {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .results-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .results-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .results-list li:last-child {
          margin-bottom: 0;
        }

        .check-icon {
          color: #00d4ff;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(0, 212, 255, 0.15);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .cta-section {
          text-align: center;
          margin-top: 4rem;
          padding: 3rem;
          background: rgba(0, 212, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 255, 0.1);
        }

        .cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .cta-text {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 212, 255, 0.4);
        }

        @media (max-width: 768px) {
          .case-studies-page {
            padding: 5rem 0 3rem;
          }

          .page-container {
            padding: 0 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
          }

          .card-metrics {
            margin-left: 0;
            width: 100%;
          }

          .metric-box {
            flex: 1;
          }

          .card-body {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className="case-studies-page">
        <div className="page-container">
          <Link href="/#transformation-leadership" className="back-link">
            <ArrowLeft size={18} />
            Back to Overview
          </Link>

          <header className="page-header">
            <h1 className="page-title">Case Studies</h1>
            <p className="page-subtitle">
              Deep dives into transformative AI and digital initiatives that
              delivered measurable business outcomes across Fortune 500
              enterprises.
            </p>
          </header>

          <div className="case-studies-grid">
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
                <article key={study.id} className="case-study-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <IconComponent size={36} />
                    </div>
                    <div className="card-title-section">
                      <h2 className="card-title">{study.title}</h2>
                      <div className="card-meta">
                        <span className="meta-item">
                          <span className="meta-value">{study.company}</span>
                        </span>
                        <span className="meta-item">|</span>
                        <span className="meta-item">{study.industry}</span>
                      </div>
                    </div>
                    <div className="card-metrics">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="metric-box">
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="section">
                      <div className="section-label">The Challenge</div>
                      <p className="section-content">{study.challenge}</p>
                    </div>

                    <div className="section">
                      <div className="section-label">The Solution</div>
                      <p className="section-content">{study.solution}</p>
                    </div>

                    <div className="section">
                      <div className="section-label">Key Results</div>
                      <ul className="results-list">
                        {study.results.map((result, idx) => (
                          <li key={idx}>
                            <ChevronRight size={16} className="check-icon" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="section">
                      <div className="section-label">Technologies</div>
                      <div className="tech-tags">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cta-section">
            <h2 className="cta-title">Ready to discuss your transformation?</h2>
            <p className="cta-text">
              Let&apos;s explore how these proven approaches can drive results
              for your organization.
            </p>
            <Link href="/#connectwithme" className="cta-button">
              <span>Connect With Me</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
