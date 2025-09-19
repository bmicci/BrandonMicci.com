'use client';

import React from 'react';

const CompanyExpertise: React.FC = () => {
  return (
    <>
      <style jsx>{`
        /* Company Expertise Section */
        .expertise-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          padding: 60px 2rem;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 10;
          text-align: center;
          margin: 2rem auto;
          max-width: 1200px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .expertise-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.15);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.3);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .expertise-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .expertise-header {
          margin-bottom: 3rem;
          animation: headerSlide 1s ease-out 0.5s both;
        }

        .expertise-title {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.4;
          position: relative;
        }

        /* Removed decorative elements that were causing stuck dots */

        .expertise-subtitle {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          animation: titleGlow 3s ease-in-out infinite;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          animation: gridFadeIn 1s ease-out 0.8s both;
        }

        .company-card {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          border-radius: 12px;
          padding: 1.25rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: cardFloat 0.8s ease-out;
        }

        .company-card:nth-child(1) { animation-delay: 0.1s; }
        .company-card:nth-child(2) { animation-delay: 0.2s; }
        .company-card:nth-child(3) { animation-delay: 0.3s; }
        .company-card:nth-child(4) { animation-delay: 0.4s; }
        .company-card:nth-child(5) { animation-delay: 0.5s; }
        .company-card:nth-child(6) { animation-delay: 0.6s; }
        .company-card:nth-child(7) { animation-delay: 0.7s; }
        .company-card:nth-child(8) { animation-delay: 0.8s; }

        .company-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .company-card:hover::before {
          left: 100%;
        }

        .company-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.2);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.4);
        }

        .company-name {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }

        /* Subtle background pattern for cards */
        .company-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
          opacity: 0.3;
          z-index: 1;
        }

        /* Animations */
        @keyframes headerSlide {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleGlow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
          }
        }

        @keyframes gridFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .companies-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
          
          .expertise-subtitle {
            font-size: 1.9rem;
          }
        }

        @media (max-width: 768px) {
          .expertise-section {
            padding: 40px 1rem;
          }
          
          .expertise-header {
            margin-bottom: 2rem;
          }
          
          .expertise-title {
            font-size: 0.95rem;
            letter-spacing: 2px;
          }
          
          .expertise-subtitle {
            font-size: 1.6rem;
          }
          
          .companies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .company-card {
            padding: 1rem 0.75rem;
          }
          
          .company-name {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .expertise-section {
            padding: 30px 0.75rem;
          }
          
          .expertise-title {
            font-size: 0.85rem;
            letter-spacing: 1.5px;
          }
          
          .expertise-subtitle {
            font-size: 1.4rem;
            line-height: 1.3;
          }
          
          .companies-grid {
            grid-template-columns: 1fr;
            gap: 0.875rem;
            max-width: 300px;
          }
          
          .company-card {
            padding: 1.125rem 1rem;
          }
          
          .company-name {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <div className="expertise-section">
        <div className="expertise-container">
          <div className="expertise-header">
            <h2 className="expertise-title">Proven Track Record Across</h2>
            <h3 className="expertise-subtitle">Big Four & Fortune 500 Organizations</h3>
          </div>
          
          <div className="companies-grid">
            <div className="company-card">
              <h4 className="company-name">JPMorgan Chase</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">Capital One</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">Citi</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">Southwest Airlines</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">PwC</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">Booz Allen Hamilton</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">EY</h4>
            </div>
            <div className="company-card">
              <h4 className="company-name">Capgemini</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyExpertise;
