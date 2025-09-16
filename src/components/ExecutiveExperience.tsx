'use client';

import React from 'react';

const ExecutiveExperience: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .experience-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          padding: 60px 2rem;
          position: relative;
          z-index: 10;
        }

        .experience-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 1s ease-out;
        }

        .experience-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .experience-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #00d4ff, #1e90ff);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          animation: slideInFromSide 1s ease-out;
        }

        .timeline-item:nth-child(odd) {
          animation-delay: 0.2s;
        }

        .timeline-item:nth-child(even) {
          animation-delay: 0.4s;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 20px;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          width: 45%;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.4);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 0;
          margin-right: auto;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          margin-right: 0;
        }

        .timeline-date {
          font-size: 0.9rem;
          color: #00d4ff;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .timeline-role {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }

        .timeline-company {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .timeline-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-achievements {
          list-style: none;
          padding: 0;
        }

        .timeline-achievements li {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .timeline-achievements li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00d4ff;
          font-size: 0.8rem;
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

        @keyframes slideInFromSide {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-item::before {
            left: 20px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px !important;
            margin-right: 0 !important;
          }

          .experience-title {
            font-size: 2rem;
          }

          .timeline-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .experience-section {
            padding: 40px 1rem;
          }

          .experience-title {
            font-size: 1.8rem;
          }

          .timeline-content {
            padding: 1.25rem;
          }

          .timeline-role {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="experience-section">
        <div className="experience-container">
          <div className="experience-header">
            <h2 className="experience-title">Executive Experience</h2>
            <p className="experience-subtitle">
              A proven track record of leading digital transformation initiatives across Fortune 500 organizations
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2023 - Present</div>
                <h3 className="timeline-role">AI & Digital Transformation Specialist</h3>
                <p className="timeline-company">Independent Consulting</p>
                <p className="timeline-description">
                  Leading strategic AI implementations and digital transformation initiatives for Fortune 500 clients across multiple industries.
                </p>
                <ul className="timeline-achievements">
                  <li>Deployed largest LLM implementation in payments industry (27,000+ users)</li>
                  <li>Delivered $400M+ in measurable business outcomes</li>
                  <li>Built evangelical data communities of 30,000+ users</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2023</div>
                <h3 className="timeline-role">Senior Data Science Leader</h3>
                <p className="timeline-company">Capital One</p>
                <p className="timeline-description">
                  Led global data science organizations of 50+ professionals with $45M+ technology portfolios, driving AI innovation at scale.
                </p>
                <ul className="timeline-achievements">
                  <li>Managed $45M+ technology portfolio</li>
                  <li>Led team of 50+ data science professionals</li>
                  <li>Achieved 250%+ ROI on IoT initiatives</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2018 - 2020</div>
                <h3 className="timeline-role">Principal Data Scientist</h3>
                <p className="timeline-company">JPMorgan Chase</p>
                <p className="timeline-description">
                  Architected enterprise-wide AI solutions and led cross-functional teams in delivering transformative analytics platforms.
                </p>
                <ul className="timeline-achievements">
                  <li>Built Analytics-as-a-Service platforms</li>
                  <li>Generated $30M in new annual revenue streams</li>
                  <li>Modernized legacy systems across multiple business units</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2015 - 2018</div>
                <h3 className="timeline-role">Senior Analytics Consultant</h3>
                <p className="timeline-company">PwC</p>
                <p className="timeline-description">
                  Delivered strategic analytics solutions across Financial Services, Insurance, Airlines, Energy, and Life Sciences sectors.
                </p>
                <ul className="timeline-achievements">
                  <li>Led analytics transformations across 5+ industries</li>
                  <li>Built world&apos;s largest Tableau community (30,000+ users)</li>
                  <li>Delivered consistent 200%+ ROI on client engagements</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2012 - 2015</div>
                <h3 className="timeline-role">Data Science Manager</h3>
                <p className="timeline-company">Booz Allen Hamilton</p>
                <p className="timeline-description">
                  Managed data science teams and delivered advanced analytics solutions for government and commercial clients.
                </p>
                <ul className="timeline-achievements">
                  <li>Led data science teams of 15+ professionals</li>
                  <li>Delivered complex analytics solutions for government clients</li>
                  <li>Established best practices for AI/ML implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveExperience;
