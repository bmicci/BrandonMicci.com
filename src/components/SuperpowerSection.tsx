'use client';

import React from 'react';

const SuperpowerSection: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .superpower-section {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 900px;
            margin: 4rem auto;
            padding: 0 2rem;
        }

        .superpower-card {
            background: rgba(10, 10, 30, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 3.5rem;
            text-align: center;
            position: relative;
            animation: fadeInUp 1s ease-out 0.8s both;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            overflow: hidden;
        }

        .superpower-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 24px;
            padding: 2px;
            background: linear-gradient(90deg, #00d4ff, #1e90ff, #00d4ff, #1e90ff);
            background-size: 300% 100%;
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }

        .superpower-card::after {
            content: '';
            position: absolute;
            inset: 30%;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
            filter: blur(40px);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        .superpower-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 
                0 30px 60px rgba(0, 212, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .superpower-content {
            position: relative;
            z-index: 1;
        }

        .superpower-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: #ffffff;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .superpower-highlight {
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 8px rgba(0, 212, 255, 0.4));
        }

        .superpower-description {
            font-size: 1.15rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.7;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .superpower-card {
                padding: 2rem 1.5rem;
            }
            .superpower-title {
                font-size: 1.8rem;
            }
        }

        @media (max-width: 480px) {
            .superpower-title {
                font-size: 1.5rem;
            }
            .superpower-description {
                font-size: 1rem;
            }
        }
      `}</style>

      <div className="superpower-section">
        <div className="superpower-card">
          <div className="superpower-content">
            <h3 className="superpower-title">
              <span className="superpower-highlight">Strategic Superpower</span>
            </h3>
            <p className="superpower-description">
              Translating AI strategy into actionable roadmaps that executives can confidently execute, turning technological possibility into measurable business transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperpowerSection;

