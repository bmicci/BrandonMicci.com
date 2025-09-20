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
            #050505 0%,
            #0a0a0a 50%,
            #0f0f0f 100%
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
            linear-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.12) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: universalGridSlide 20s linear infinite;
          pointer-events: none;
          opacity: 0.7;
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
          width: 3px;
          height: 3px;
          background: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          box-shadow:
            0 0 12px rgba(0, 212, 255, 1),
            0 0 24px rgba(0, 212, 255, 0.6);
          opacity: 0.9;
          animation: universalParticleFloat 6s infinite ease-in-out;
        }

        .universal-particle.small {
          width: 2px;
          height: 2px;
          opacity: 0.7;
        }

        .universal-particle.large {
          width: 5px;
          height: 5px;
          opacity: 0.8;
          box-shadow:
            0 0 20px rgba(0, 255, 255, 1),
            0 0 40px rgba(0, 255, 255, 0.8),
            0 0 60px rgba(0, 255, 255, 0.4);
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
          background: linear-gradient(135deg, #00d4ff08 0%, #1e90ff08 100%);
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
          background: linear-gradient(135deg, #00d4ff06 0%, #1e90ff06 100%);
        }

        .universal-circle-5 {
          width: 100px;
          height: 100px;
          top: 65%;
          left: 12%;
          animation-delay: 3s;
          background: linear-gradient(135deg, #00d4ff08 0%, #1e90ff08 100%);
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
              rgba(0, 212, 255, 0.02) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(30, 144, 255, 0.02) 0%,
              transparent 40%
            );
          pointer-events: none;
        }

        /* Animations */
        @keyframes universalFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.25;
          }
        }

        @keyframes universalParticleFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translate(-15px, -25px) scale(1.3) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translate(25px, -50px) scale(0.7) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(-10px, -35px) scale(1.1) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes universalShimmer {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
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

        {/* Particle system - enhanced like hero section */}
        <div className="universal-particles">
          {Array.from({ length: 30 }, (_, i) => {
            const isSmall = i % 3 === 0;
            const isLarge = i % 5 === 0;
            const isMedium = i % 2 === 0 && !isLarge;
            
            let className = 'universal-particle';
            if (isSmall) className += ' small';
            if (isLarge) className += ' large';
            
            // Random positioning
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            return (
              <div 
                key={i} 
                className={className}
                style={{ 
                  top: `${top}%`, 
                  left: `${left}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            );
          })}
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
