'use client';

import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .professional-impact-section {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          position: relative;
          color: white;
          padding: 80px 0;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .professional-impact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .professional-impact-header {
          margin-bottom: 4rem;
          animation: fadeInDown 1s ease-out;
        }

        .professional-impact-eyebrow {
          display: inline-block;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .professional-impact-title {
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 20px;
          font-size: clamp(32px, 4vw, 48px);
          background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #1e90ff 50%,
            #00d4ff 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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

        .professional-impact-subtitle {
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.6;
        }

        .placeholder-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .placeholder-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.05),
            transparent
          );
          animation: shimmer 4s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        .placeholder-content:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.2);
        }

        .placeholder-text {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        /* Animations */
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
          .professional-impact-section {
            padding: 60px 0;
          }

          .professional-impact-container {
            padding: 0 1rem;
          }

          .placeholder-content {
            padding: 2rem;
          }
        }
      `}</style>

      <section className="professional-impact-section">
        <div className="professional-impact-container">
          <header className="professional-impact-header">
            <span className="professional-impact-eyebrow">
              Professional Impact
            </span>
            <h2 className="professional-impact-title">What Leaders Say</h2>
            <p className="professional-impact-subtitle">
              Insights from executives and colleagues who&apos;ve worked with me
              on transformative AI initiatives
            </p>
          </header>

          <div className="placeholder-content">
            <p className="placeholder-text">
              Testimonials section placeholder - Ready for your LinkedIn
              testimonials content
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
