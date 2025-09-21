'use client';

import React, { useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { IconCircle } from '@/components/ui/IconCircle';

const StrategicDifferentiators: React.FC = () => {
  useEffect(() => {
    // Mouse tracking for card glow effect
    const cards = document.querySelectorAll('.diff-card');
    cards.forEach((card) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
        const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', x + '%');
        (card as HTMLElement).style.setProperty('--mouse-y', y + '%');
      };

      card.addEventListener('mousemove', handleMouseMove);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, []);

  return (
    <>
      <style jsx>{`
        .differentiators-container {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: calc(100vw - 2rem);
          max-width: calc(100vw - 2rem);
        }

        .differentiators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .diff-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          transform: translateY(20px);
          animation: cardFadeIn 0.8s ease forwards;
          overflow: hidden;
        }

        .diff-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1.5px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          animation: gradientRotate 3s linear infinite;
          transition: opacity 0.3s ease;
        }

        @keyframes gradientRotate {
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

        .diff-card:hover::before {
          opacity: 1;
        }

        .diff-card::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 212, 255, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .diff-card:hover::after {
          opacity: 1;
        }

        .diff-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .diff-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .diff-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .diff-card:nth-child(4) {
          animation-delay: 0.4s;
        }
        .diff-card:nth-child(5) {
          animation-delay: 0.5s;
        }
        .diff-card:nth-child(6) {
          animation-delay: 0.6s;
        }

        .diff-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 20px 40px rgba(0, 212, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .diff-content {
          position: relative;
          z-index: 1;
        }

        .diff-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 16px rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
        }

        .diff-card:hover .diff-icon {
          transform: rotate(5deg) scale(1.1);
          box-shadow: 0 12px 24px rgba(0, 212, 255, 0.4);
        }

        .diff-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .diff-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .differentiators-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .differentiators-container {
            padding: 0 1rem;
            width: calc(100vw - 1rem);
            max-width: calc(100vw - 1rem);
          }
          .differentiators-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .diff-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .differentiators-container {
            width: calc(100vw - 0.75rem);
            max-width: calc(100vw - 0.75rem);
            padding: 0 0.75rem;
          }
          
          .diff-title {
            font-size: 1.1rem;
          }
          .diff-description {
            font-size: 0.95rem;
          }
        }

        /* iPhone SE micro-tune for extra safety */
        @media (max-width: 360px) {
          .differentiators-container {
            width: calc(100vw - 0.5rem);
            max-width: calc(100vw - 0.5rem);
            padding: 0 0.5rem;
          }
        }
      `}</style>

      <div className="differentiators-container mx-auto max-w-6xl px-4 md:px-8 overflow-x-clip">
        <div className="differentiators-grid">
          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="linechart" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Scale Expertise</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Successfully deployed the largest LLM implementation in the
                  payments industry (27,000+ users) and led global data science
                  organizations of 50+ professionals with $45M+ technology
                  portfolios.
                </p>
              </div>
            </div>
          </div>

          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="barchart" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Financial Impact</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Consistent track record of delivering massive ROI—from 250%
                  returns on IoT initiatives to $30M in new annual revenue streams
                  through Analytics-as-a-Service platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="globe" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Cross-Industry Innovation</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Deep expertise spanning Financial Services, Insurance, Airlines,
                  Energy, and Life Sciences with transferable solutions that adapt
                  to unique business contexts.
                </p>
              </div>
            </div>
          </div>

          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="target" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Technical + Strategic Leadership</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Rare combination of hands-on AI/ML architecture experience with
                  C-suite strategic advisory capabilities—translating complex
                  technology into business strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="sparkle" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Transformation Catalyst</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Proven ability to modernize legacy systems while building
                  evangelical communities that drive adoption at scale—like the
                  world&apos;s largest Tableau community (30,000+ users).
                </p>
              </div>
            </div>
          </div>

          <div className="diff-card rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-6 backdrop-blur-sm w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] md:w-auto md:max-w-none">
            <div className="diff-content flex items-start gap-4">
              <div className="shrink-0">
                <IconCircle><Icon name="brain" size="lg" /></IconCircle>
              </div>
              <div>
                <h4 className="diff-title text-base md:text-lg font-semibold text-white">Ambiguous Environment Expert</h4>
                <p className="diff-description mt-1 text-sm text-slate-300">
                  Thrive in high-stakes environments where emerging technologies
                  meet complex business challenges, creating clarity from chaos
                  and actionable roadmaps from ambiguity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategicDifferentiators;
