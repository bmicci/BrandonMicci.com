'use client';

import React from 'react';

const TransformationLeadership: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .leadership-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          padding: 60px 2rem;
          position: relative;
          z-index: 10;
        }

        .leadership-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .leadership-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 1s ease-out;
        }

        .leadership-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .leadership-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .leadership-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          animation: cardFadeIn 0.8s ease forwards;
        }

        .leadership-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          animation: gradientRotate 3s linear infinite;
          transition: opacity 0.3s ease;
        }

        .leadership-card:hover::before {
          opacity: 0.6;
        }

        .leadership-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 212, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .leadership-card:nth-child(1) { animation-delay: 0.1s; }
        .leadership-card:nth-child(2) { animation-delay: 0.2s; }
        .leadership-card:nth-child(3) { animation-delay: 0.3s; }
        .leadership-card:nth-child(4) { animation-delay: 0.4s; }

        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
        }

        .leadership-card:hover .card-icon {
          transform: rotate(5deg) scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 212, 255, 0.4);
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .metric {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #00d4ff;
          font-weight: 600;
        }

        .case-study-section {
          margin-top: 4rem;
          text-align: center;
        }

        .case-study-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .case-study-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid rgba(0, 212, 255, 0.2);
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .case-study-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
          animation: gradientRotate 4s linear infinite;
        }

        .case-study-header {
          margin-bottom: 2rem;
        }

        .case-study-company {
          font-size: 1.1rem;
          color: #00d4ff;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .case-study-challenge {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .case-study-solution {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .case-study-results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .result-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(0, 212, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .result-number {
          font-size: 2rem;
          font-weight: 800;
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .result-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
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

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .leadership-section {
            padding: 40px 1rem;
          }

          .leadership-title {
            font-size: 2rem;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .leadership-card {
            padding: 2rem;
          }

          .case-study-card {
            padding: 2rem;
          }

          .case-study-results {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .leadership-title {
            font-size: 1.8rem;
          }

          .leadership-card {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-header">
            <h2 className="leadership-title">Transformation Leadership</h2>
            <p className="leadership-subtitle">
              Driving innovation through cutting-edge AI solutions and digital strategies that deliver measurable business impact
            </p>
          </div>

          <div className="leadership-grid">
            <div className="leadership-card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">AI Strategy & Implementation</h3>
              <p className="card-description">
                Architecting enterprise-wide AI strategies that bridge the gap between cutting-edge innovation and practical business implementation.
              </p>
              <div className="card-metrics">
                <span className="metric">27,000+ Users</span>
                <span className="metric">$400M+ Impact</span>
                <span className="metric">250%+ ROI</span>
              </div>
            </div>

            <div className="leadership-card">
              <div className="card-icon">👥</div>
              <h3 className="card-title">Team Building & Leadership</h3>
              <p className="card-description">
                Building and leading high-performing data science teams of 50+ professionals with $45M+ technology portfolios.
              </p>
              <div className="card-metrics">
                <span className="metric">50+ Team Members</span>
                <span className="metric">$45M+ Portfolio</span>
                <span className="metric">Global Teams</span>
              </div>
            </div>

            <div className="leadership-card">
              <div className="card-icon">🔄</div>
              <h3 className="card-title">Digital Transformation</h3>
              <p className="card-description">
                Modernizing legacy systems while building evangelical communities that drive adoption at scale across organizations.
              </p>
              <div className="card-metrics">
                <span className="metric">30,000+ Community</span>
                <span className="metric">5+ Industries</span>
                <span className="metric">Legacy Modernization</span>
              </div>
            </div>

            <div className="leadership-card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Innovation Catalyst</h3>
              <p className="card-description">
                Creating clarity from chaos and actionable roadmaps from ambiguity in high-stakes emerging technology environments.
              </p>
              <div className="card-metrics">
                <span className="metric">Ambiguous Environments</span>
                <span className="metric">Strategic Roadmaps</span>
                <span className="metric">Innovation Focus</span>
              </div>
            </div>
          </div>

          <div className="case-study-section">
            <h3 className="case-study-title">Featured Case Study</h3>
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-company">Capital One</div>
                <h4 className="case-study-challenge">Largest LLM Deployment in Payments Industry</h4>
              </div>
              <p className="case-study-solution">
                Led the strategic implementation of Large Language Models across payment processing systems, 
                creating an AI-powered platform that enhanced customer experience while maintaining security 
                and compliance standards. The solution integrated seamlessly with existing infrastructure 
                and provided real-time insights for decision-making.
              </p>
              <div className="case-study-results">
                <div className="result-item">
                  <div className="result-number">27,000+</div>
                  <div className="result-label">Enterprise Users</div>
                </div>
                <div className="result-item">
                  <div className="result-number">$400M+</div>
                  <div className="result-label">Business Impact</div>
                </div>
                <div className="result-item">
                  <div className="result-number">250%</div>
                  <div className="result-label">ROI Achieved</div>
                </div>
                <div className="result-item">
                  <div className="result-number">99.9%</div>
                  <div className="result-label">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransformationLeadership;
