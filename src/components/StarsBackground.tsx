'use client';

import React from 'react';

const StarsBackground: React.FC = () => {
  return (
    <>
      <style jsx>{`
        /* Stars/Particles Background */
        .stars-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0e27;
          overflow: hidden;
          z-index: 2;
        }

        /* Animated grid */
        .animated-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridSlide 20s linear infinite;
          pointer-events: none;
        }

        @keyframes gridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Particle system */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          pointer-events: none;
          box-shadow:
            0 0 6px #00d4ff,
            0 0 12px rgba(0, 212, 255, 0.5);
        }

        /* Different particle sizes and speeds */
        .particle.small {
          width: 2px;
          height: 2px;
          opacity: 0.6;
        }

        .particle.large {
          width: 6px;
          height: 6px;
          opacity: 0.8;
          box-shadow:
            0 0 10px #00d4ff,
            0 0 20px rgba(0, 212, 255, 0.6);
        }

        /* Floating animation paths */
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(100px, -100px);
          }
          50% {
            transform: translate(200px, 50px);
          }
          75% {
            transform: translate(50px, 100px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-150px, 100px);
          }
          66% {
            transform: translate(150px, 200px);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(80px, -80px);
          }
          40% {
            transform: translate(-100px, -150px);
          }
          60% {
            transform: translate(-50px, 100px);
          }
          80% {
            transform: translate(120px, 50px);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-200px, -100px);
          }
        }

        /* Apply animations to particles */
        .particle:nth-child(1) {
          animation: float1 20s infinite ease-in-out;
        }
        .particle:nth-child(2) {
          animation: float2 25s infinite ease-in-out 2s;
        }
        .particle:nth-child(3) {
          animation: float3 30s infinite ease-in-out 4s;
        }
        .particle:nth-child(4) {
          animation: float4 22s infinite ease-in-out 1s;
        }
        .particle:nth-child(5) {
          animation: float1 28s infinite ease-in-out 3s;
        }
        .particle:nth-child(6) {
          animation: float2 24s infinite ease-in-out 5s;
        }
        .particle:nth-child(7) {
          animation: float3 26s infinite ease-in-out 2s;
        }
        .particle:nth-child(8) {
          animation: float4 32s infinite ease-in-out 4s;
        }
        .particle:nth-child(9) {
          animation: float1 27s infinite ease-in-out 6s;
        }
        .particle:nth-child(10) {
          animation: float2 23s infinite ease-in-out 1s;
        }
        .particle:nth-child(11) {
          animation: float3 29s infinite ease-in-out 3s;
        }
        .particle:nth-child(12) {
          animation: float4 25s infinite ease-in-out 5s;
        }
        .particle:nth-child(13) {
          animation: float1 31s infinite ease-in-out 2s;
        }
        .particle:nth-child(14) {
          animation: float2 26s infinite ease-in-out 4s;
        }
        .particle:nth-child(15) {
          animation: float3 24s infinite ease-in-out 6s;
        }

        /* Subtle gradient overlay for depth */
        .gradient-overlay {
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

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animated-grid {
            background-size: 80px 80px;
            opacity: 0.8;
          }

          .particle {
            opacity: 0.7;
          }

          /* Reduce particles on mobile */
          .particle:nth-child(n + 10) {
            display: none;
          }
        }
      `}</style>

      <div className="stars-background">
        {/* Animated grid background */}
        <div className="animated-grid"></div>

        {/* Gradient overlay for depth */}
        <div className="gradient-overlay"></div>

        {/* Floating particles distributed across the viewport */}
        <div className="particle" style={{ top: '10%', left: '15%' }}></div>
        <div
          className="particle small"
          style={{ top: '20%', left: '75%' }}
        ></div>
        <div
          className="particle large"
          style={{ top: '35%', left: '45%' }}
        ></div>
        <div className="particle" style={{ top: '50%', left: '20%' }}></div>
        <div
          className="particle small"
          style={{ top: '65%', left: '65%' }}
        ></div>
        <div
          className="particle large"
          style={{ top: '80%', left: '35%' }}
        ></div>
        <div className="particle" style={{ top: '15%', left: '50%' }}></div>
        <div
          className="particle small"
          style={{ top: '70%', left: '85%' }}
        ></div>
        <div
          className="particle large"
          style={{ top: '45%', left: '80%' }}
        ></div>
        <div className="particle" style={{ top: '85%', left: '10%' }}></div>
        <div
          className="particle small"
          style={{ top: '25%', left: '30%' }}
        ></div>
        <div className="particle" style={{ top: '55%', left: '90%' }}></div>
        <div
          className="particle large"
          style={{ top: '90%', left: '60%' }}
        ></div>
        <div
          className="particle small"
          style={{ top: '40%', left: '5%' }}
        ></div>
        <div className="particle" style={{ top: '75%', left: '50%' }}></div>
      </div>
    </>
  );
};

export default StarsBackground;
