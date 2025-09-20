'use client';

import React from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const UniversalBackground: React.FC = () => {
  const reduced = usePrefersReducedMotion();

  if (reduced) return null; // Respect reduced-motion users

  return (
    <>
      <style jsx>{`
        /* Universal Background Component - covers entire page */
        .universal-background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          overflow: hidden;
          z-index: -10; /* Behind all content */
          pointer-events: none;
        }

        /* Animated grid - continuous across entire page */
        .universal-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: universalGridSlide 20s linear infinite;
          pointer-events: none;
        }

        @keyframes universalGridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Universal particle system */
        .universal-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .universal-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          box-shadow:
            0 0 6px #00d4ff,
            0 0 12px rgba(0, 212, 255, 0.5);
          opacity: 0.6;
        }

        .universal-particle.small {
          width: 2px;
          height: 2px;
          opacity: 0.4;
        }

        .universal-particle.large {
          width: 6px;
          height: 6px;
          opacity: 0.5;
          box-shadow:
            0 0 10px #00d4ff,
            0 0 20px rgba(0, 212, 255, 0.4);
        }

        /* Floating elements for visual interest */
        .universal-floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .universal-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff20 0%, #1e90ff20 100%);
          animation: universalFloat 6s ease-in-out infinite;
        }

        .universal-circle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .universal-circle-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          left: 5%;
          animation-delay: 2s;
        }

        .universal-circle-3 {
          width: 80px;
          height: 80px;
          top: 35%;
          left: 20%;
          animation-delay: 4s;
        }

        .universal-circle-4 {
          width: 150px;
          height: 150px;
          top: 45%;
          right: 8%;
          animation-delay: 1s;
          background: linear-gradient(135deg, #00d4ff15 0%, #1e90ff15 100%);
        }

        .universal-circle-5 {
          width: 100px;
          height: 100px;
          top: 65%;
          left: 12%;
          animation-delay: 3s;
          background: linear-gradient(135deg, #00d4ff18 0%, #1e90ff18 100%);
        }

        /* Subtle gradient overlays for depth */
        .universal-gradient-overlay-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 10, 0.3) 0%,
            transparent 100%
          );
          animation: universalShimmer 4s ease-in-out infinite;
        }

        .universal-gradient-overlay-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background: linear-gradient(
            0deg,
            rgba(22, 33, 62, 0.2) 0%,
            transparent 100%
          );
          animation: universalShimmer 5s ease-in-out infinite reverse;
        }

        /* Universal gradient overlay for depth */
        .universal-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(0, 212, 255, 0.05) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(30, 144, 255, 0.05) 0%,
              transparent 40%
            );
          pointer-events: none;
        }

        /* Animations */
        @keyframes universalFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.7;
          }
        }

        @keyframes universalShimmer {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .universal-grid {
            background-size: 80px 80px;
            opacity: 0.8;
          }

          .universal-particle {
            opacity: 0.7;
          }

          .universal-circle {
            transform: scale(0.7);
          }

          /* Reduce particles on mobile */
          .universal-particle:nth-child(n + 10) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .universal-circle {
            transform: scale(0.5);
          }
        }
      `}</style>

      <div className="universal-background-wrapper">
        {/* Animated grid */}
        <div className="universal-grid"></div>

        {/* Floating elements */}
        <div className="universal-floating-elements">
          <div className="universal-circle universal-circle-1"></div>
          <div className="universal-circle universal-circle-2"></div>
          <div className="universal-circle universal-circle-3"></div>
          <div className="universal-circle universal-circle-4"></div>
          <div className="universal-circle universal-circle-5"></div>
        </div>

        {/* Particle system */}
        <div className="universal-particles">
          <div className="universal-particle" style={{ top: '10%', left: '15%' }}></div>
          <div className="universal-particle small" style={{ top: '20%', left: '75%' }}></div>
          <div className="universal-particle large" style={{ top: '35%', left: '45%' }}></div>
          <div className="universal-particle" style={{ top: '50%', left: '20%' }}></div>
          <div className="universal-particle small" style={{ top: '65%', left: '65%' }}></div>
          <div className="universal-particle large" style={{ top: '80%', left: '35%' }}></div>
          <div className="universal-particle" style={{ top: '15%', left: '50%' }}></div>
          <div className="universal-particle small" style={{ top: '70%', left: '85%' }}></div>
          <div className="universal-particle large" style={{ top: '45%', left: '80%' }}></div>
          <div className="universal-particle" style={{ top: '85%', left: '10%' }}></div>
          <div className="universal-particle small" style={{ top: '25%', left: '30%' }}></div>
          <div className="universal-particle" style={{ top: '55%', left: '70%' }}></div>
          <div className="universal-particle large" style={{ top: '75%', left: '25%' }}></div>
          <div className="universal-particle small" style={{ top: '40%', left: '5%' }}></div>
          <div className="universal-particle" style={{ top: '75%', left: '50%' }}></div>
        </div>

        {/* Gradient overlays */}
        <div className="universal-gradient-overlay-1"></div>
        <div className="universal-gradient-overlay-2"></div>
        <div className="universal-gradient-overlay"></div>
      </div>
    </>
  );
};

export default UniversalBackground;
