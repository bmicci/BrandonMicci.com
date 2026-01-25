'use client';

import React from 'react';
import Link from 'next/link';

const StrategicIntroCard: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .intro-card {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          max-width: 1000px;
          margin: 0 auto 1.5rem;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          position: relative;
          animation: fadeInUp 1s ease-out 0.3s both;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* iPad Pro spacing tighten */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .intro-card {
            margin: 0 auto 1.25rem;
            padding: 2.25rem;
          }
        }

        .intro-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .intro-card:hover::before {
          opacity: 1;
        }

        .intro-card:hover {
          transform: translateY(-5px) scale(1.01);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
        }

        .intro-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .intro-text strong {
          background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #1e90ff 50%,
            #00d4ff 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          filter: drop-shadow(0 2px 4px rgba(0, 212, 255, 0.3));
          animation: gradientShift 3s ease-in-out infinite;
        }

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

        .internal-link {
          color: rgba(0, 212, 255, 0.9);
          text-decoration: none;
          border-bottom: 1px solid rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
          font-weight: 700;
        }

        .internal-link:hover {
          color: rgba(0, 212, 255, 1);
          border-bottom-color: rgba(0, 212, 255, 0.8);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .intro-card {
            padding: 2rem 1.5rem;
            margin: 0 1rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .intro-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="intro-card">
        <p className="intro-text">
          My track record demonstrates consistent delivery across the
          world&apos;s most demanding{' '}
          <Link href="/#transformation-leadership" className="internal-link">
            <strong>enterprise environments</strong>
          </Link>
          —transforming{' '}
          <Link href="/#executive-experience" className="internal-link">
            <strong>AI strategy</strong>
          </Link>{' '}
          into measurable business impact where{' '}
          <strong>complexity, regulation, and stakeholder expectations</strong>{' '}
          are highest.
        </p>
      </div>
    </>
  );
};

export default StrategicIntroCard;
