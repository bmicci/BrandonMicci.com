'use client';

import React from 'react';

const StrategicAdvantageHeader: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .strategic-header {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          padding: 0.5rem 2rem 2rem;
          text-align: center;
          position: relative;
          z-index: 10;
          animation: titleSlideUp 1s ease-out;
        }

        /* iPad Pro spacing tighten */
        @media (min-width:1024px) and (max-width:1279px){
          .strategic-header{ padding: 0.25rem 1.5rem 1.25rem; }
          .strategic-title{ font-size: 2.4rem; }
          .strategic-subtitle{ max-width: 850px; }
        }

        .strategic-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .strategic-title .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .strategic-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          font-weight: 400;
          max-width: 900px;
          margin: 0 auto;
          animation: subtitleFade 1s ease-out 0.3s both;
        }

        @keyframes titleSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .strategic-header {
            padding: 2rem 1rem 1.5rem;
          }
          .strategic-title {
            font-size: 2rem;
            margin-bottom: 0.75rem;
          }
          .strategic-title .gradient-text::after {
            content: '✨';
            position: absolute;
            right: -25px;
            top: -8px;
            font-size: 1rem;
            animation: sparkleEffect 2s ease-in-out infinite;
          }
          .strategic-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .strategic-title {
            font-size: 1.7rem;
            line-height: 1.3;
          }
          .strategic-subtitle {
            font-size: 1rem;
          }
        }

        @keyframes sparkleEffect {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="strategic-header">
        <h2 className="strategic-title">
          <span className="gradient-text">Strategic Advantage</span>
        </h2>
        <p className="strategic-subtitle">
          What sets me apart in the rapidly evolving AI and data strategy
          landscape
        </p>
      </div>
    </>
  );
};

export default StrategicAdvantageHeader;
