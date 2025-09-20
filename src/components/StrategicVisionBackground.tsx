'use client';

import React from 'react';

const StrategicVisionBackground: React.FC = () => {
  return (
    <>
      <style jsx>{`
        /* Expertise Section Animated Background */
        .expertise-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 120vh;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          overflow: hidden;
          z-index: 1;
        }

        .expertise-floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Corporate-style floating elements */
        .corporate-shape {
          position: absolute;
          background: linear-gradient(135deg, #00d4ff15 0%, #1e90ff15 100%);
          animation: corporateFloat 8s ease-in-out infinite;
          border-radius: 8px;
        }

        .shape-1 {
          width: 180px;
          height: 60px;
          top: 15%;
          right: 8%;
          animation-delay: 0s;
          transform: rotate(15deg);
        }

        .shape-2 {
          width: 120px;
          height: 40px;
          top: 60%;
          left: 5%;
          animation-delay: 2s;
          transform: rotate(-20deg);
        }

        .shape-3 {
          width: 200px;
          height: 50px;
          bottom: 20%;
          right: 15%;
          animation-delay: 4s;
          transform: rotate(10deg);
        }

        .shape-4 {
          width: 140px;
          height: 35px;
          top: 35%;
          left: 15%;
          animation-delay: 6s;
          transform: rotate(-15deg);
        }

        /* Floating corporate icons */
        .floating-icon {
          position: absolute;
          font-size: 3rem;
          color: rgba(0, 212, 255, 0.08);
          animation: iconFloat 10s ease-in-out infinite;
        }

        .icon-1 {
          top: 25%;
          right: 20%;
          animation-delay: 1s;
        }

        .icon-2 {
          bottom: 30%;
          left: 10%;
          animation-delay: 3s;
        }

        .icon-3 {
          top: 70%;
          right: 5%;
          animation-delay: 5s;
        }

        /* Subtle grid pattern */
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.3;
          animation: gridShift 20s linear infinite;
        }

        /* Gradient overlays for depth */
        .gradient-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 10, 0.4) 0%,
            transparent 100%
          );
          animation: topShimmer 6s ease-in-out infinite;
        }

        .gradient-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background: linear-gradient(
            0deg,
            rgba(22, 33, 62, 0.3) 0%,
            transparent 100%
          );
          animation: bottomShimmer 8s ease-in-out infinite reverse;
        }

        /* Animations */
        @keyframes corporateFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
            opacity: 0.3;
          }
          50% {
            transform: translateY(-25px)
              rotate(calc(var(--rotate, 0deg) + 5deg));
            opacity: 0.6;
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.08;
          }
          33% {
            transform: translateY(-15px) scale(1.1);
            opacity: 0.12;
          }
          66% {
            transform: translateY(-30px) scale(0.9);
            opacity: 0.06;
          }
        }

        @keyframes gridShift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes topShimmer {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bottomShimmer {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .expertise-background-wrapper {
            min-height: 140vh;
          }

          .corporate-shape {
            transform: scale(0.7);
          }

          .floating-icon {
            font-size: 2rem;
          }

          .grid-overlay {
            background-size: 40px 40px;
          }
        }

        @media (max-width: 480px) {
          .corporate-shape {
            transform: scale(0.5);
          }

          .floating-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="expertise-background-wrapper">
        <div className="expertise-floating-elements">
          {/* Corporate shapes */}
          <div
            className="corporate-shape shape-1"
            style={{ '--rotate': '15deg' } as React.CSSProperties}
          ></div>
          <div
            className="corporate-shape shape-2"
            style={{ '--rotate': '-20deg' } as React.CSSProperties}
          ></div>
          <div
            className="corporate-shape shape-3"
            style={{ '--rotate': '10deg' } as React.CSSProperties}
          ></div>
          <div
            className="corporate-shape shape-4"
            style={{ '--rotate': '-15deg' } as React.CSSProperties}
          ></div>

          {/* Floating corporate icons */}
          <div className="floating-icon icon-1">🏢</div>
          <div className="floating-icon icon-2">💼</div>
          <div className="floating-icon icon-3">📊</div>

          {/* Grid overlay */}
          <div className="grid-overlay"></div>

          {/* Gradient overlays */}
          <div className="gradient-overlay-top"></div>
          <div className="gradient-overlay-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default StrategicVisionBackground;
