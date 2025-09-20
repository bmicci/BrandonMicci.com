'use client';

import React from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const UnifiedBackground: React.FC = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <style jsx>{`
        /* Unified Background for entire page */
        .unified-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          z-index: -10;
          overflow: hidden;
        }

        /* Animated grid overlay */
        .animated-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: ${reduced ? 'none' : 'gridSlide 20s linear infinite'};
          pointer-events: none;
          opacity: 0.6;
        }

        @keyframes gridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Floating particles */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          box-shadow:
            0 0 4px #00d4ff,
            0 0 8px rgba(0, 212, 255, 0.3);
          opacity: 0.7;
        }

        .particle.small {
          width: 2px;
          height: 2px;
          opacity: 0.5;
        }

        .particle.large {
          width: 4px;
          height: 4px;
          opacity: 0.8;
          box-shadow:
            0 0 6px #00d4ff,
            0 0 12px rgba(0, 212, 255, 0.4);
        }

        /* Floating animation paths */
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(100px, -100px);
            opacity: 0.7;
          }
          50% {
            transform: translate(200px, 50px);
            opacity: 0.5;
          }
          75% {
            transform: translate(50px, 100px);
            opacity: 0.6;
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          33% {
            transform: translate(-150px, 100px);
            opacity: 0.6;
          }
          66% {
            transform: translate(150px, 200px);
            opacity: 0.4;
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          20% {
            transform: translate(80px, -80px);
            opacity: 0.8;
          }
          40% {
            transform: translate(-100px, -150px);
            opacity: 0.3;
          }
          60% {
            transform: translate(-50px, 100px);
            opacity: 0.6;
          }
          80% {
            transform: translate(120px, 50px);
            opacity: 0.5;
          }
        }

        /* Apply animations to particles */
        .particle:nth-child(1) {
          animation: ${reduced ? 'none' : 'float1 20s infinite ease-in-out'};
        }
        .particle:nth-child(2) {
          animation: ${reduced ? 'none' : 'float2 25s infinite ease-in-out 2s'};
        }
        .particle:nth-child(3) {
          animation: ${reduced ? 'none' : 'float3 30s infinite ease-in-out 4s'};
        }
        .particle:nth-child(4) {
          animation: ${reduced ? 'none' : 'float1 22s infinite ease-in-out 1s'};
        }
        .particle:nth-child(5) {
          animation: ${reduced ? 'none' : 'float2 28s infinite ease-in-out 3s'};
        }
        .particle:nth-child(6) {
          animation: ${reduced ? 'none' : 'float3 24s infinite ease-in-out 5s'};
        }
        .particle:nth-child(7) {
          animation: ${reduced ? 'none' : 'float1 26s infinite ease-in-out 2s'};
        }
        .particle:nth-child(8) {
          animation: ${reduced ? 'none' : 'float2 32s infinite ease-in-out 4s'};
        }
        .particle:nth-child(9) {
          animation: ${reduced ? 'none' : 'float3 27s infinite ease-in-out 6s'};
        }
        .particle:nth-child(10) {
          animation: ${reduced ? 'none' : 'float1 23s infinite ease-in-out 1s'};
        }

        /* Subtle gradient overlays for depth */
        .gradient-overlay-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: radial-gradient(
            circle at 20% 30%,
            rgba(0, 212, 255, 0.03) 0%,
            transparent 40%
          );
          pointer-events: none;
        }

        .gradient-overlay-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 40%;
          background: radial-gradient(
            circle at 80% 70%,
            rgba(30, 144, 255, 0.03) 0%,
            transparent 40%
          );
          pointer-events: none;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animated-grid {
            background-size: 80px 80px;
            opacity: 0.4;
          }

          .particle {
            opacity: 0.5;
          }

          /* Reduce particles on mobile */
          .particle:nth-child(n + 8) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .animated-grid {
            background-size: 100px 100px;
            opacity: 0.3;
          }

          .particle:nth-child(n + 6) {
            display: none;
          }
        }
      `}</style>
      
      <div className="unified-background">
        <div className="animated-grid"></div>
        
        {/* Floating particles */}
        <div className="particle small" style={{ top: '10%', left: '10%' }}></div>
        <div className="particle" style={{ top: '20%', right: '15%' }}></div>
        <div className="particle large" style={{ top: '30%', left: '20%' }}></div>
        <div className="particle small" style={{ top: '40%', right: '25%' }}></div>
        <div className="particle" style={{ top: '50%', left: '30%' }}></div>
        <div className="particle large" style={{ top: '60%', right: '20%' }}></div>
        <div className="particle small" style={{ top: '70%', left: '15%' }}></div>
        <div className="particle" style={{ top: '80%', right: '30%' }}></div>
        <div className="particle large" style={{ top: '90%', left: '25%' }}></div>
        <div className="particle small" style={{ top: '15%', right: '40%' }}></div>
        
        {/* Gradient overlays */}
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
      </div>
    </>
  );
};

export default UnifiedBackground;
