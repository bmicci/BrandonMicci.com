'use client';

const HeroBackground = () => {
  return (
    <>
      <style jsx>{`
        /* Animated Background Component */
        .hero-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          overflow: hidden;
          z-index: 1;
        }

        .floating-elements-master {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Hero Section Floating Elements */
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff20 0%, #1e90ff20 100%);
          animation: float 6s ease-in-out infinite;
        }

        .hero-circle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .hero-circle-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          left: 5%;
          animation-delay: 2s;
        }

        .hero-circle-3 {
          width: 80px;
          height: 80px;
          top: 35%;
          left: 20%;
          animation-delay: 4s;
        }

        /* Differentiators Section Floating Elements */
        .diff-circle-1 {
          width: 150px;
          height: 150px;
          top: 45%;
          right: 8%;
          animation-delay: 1s;
          background: linear-gradient(135deg, #00d4ff15 0%, #1e90ff15 100%);
        }

        .diff-circle-2 {
          width: 100px;
          height: 100px;
          top: 65%;
          left: 12%;
          animation-delay: 3s;
          background: linear-gradient(135deg, #00d4ff18 0%, #1e90ff18 100%);
        }

        /* Metrics Section Floating Elements */
        .metrics-number-1 {
          position: absolute;
          top: 75%;
          left: 5%;
          font-size: 8rem;
          font-weight: 900;
          color: rgba(0, 212, 255, 0.03);
          animation: floatNumber 8s ease-in-out infinite;
          animation-delay: 0s;
          font-family: 'Inter', sans-serif;
        }

        .metrics-number-2 {
          position: absolute;
          top: 85%;
          right: 10%;
          font-size: 6rem;
          font-weight: 900;
          color: rgba(0, 212, 255, 0.04);
          animation: floatNumber 8s ease-in-out infinite;
          animation-delay: 2s;
          font-family: 'Inter', sans-serif;
        }

        .metrics-number-3 {
          position: absolute;
          bottom: 10%;
          left: 15%;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(0, 212, 255, 0.03);
          animation: floatNumber 8s ease-in-out infinite;
          animation-delay: 4s;
          font-family: 'Inter', sans-serif;
        }

        /* Subtle gradient overlays for depth */
        .gradient-overlay-1 {
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
          animation: shimmer 4s ease-in-out infinite;
        }

        .gradient-overlay-2 {
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
          animation: shimmer 5s ease-in-out infinite reverse;
        }

        /* Animations */
        @keyframes float {
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

        @keyframes floatNumber {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.02;
          }
          50% {
            transform: translateY(-40px) rotate(5deg);
            opacity: 0.06;
          }
        }

        @keyframes shimmer {
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
          .hero-background-wrapper {
            min-height: 100vh; /* Full viewport height on mobile */
          }

          .floating-circle {
            transform: scale(0.7);
          }

          .metrics-number-1,
          .metrics-number-2,
          .metrics-number-3 {
            font-size: 4rem;
          }

          .hero-circle-1 {
            width: 140px;
            height: 140px;
          }

          .hero-circle-2 {
            width: 90px;
            height: 90px;
          }

          .hero-circle-3 {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .metrics-number-1,
          .metrics-number-2,
          .metrics-number-3 {
            font-size: 3rem;
          }

          .floating-circle {
            transform: scale(0.5);
          }
        }
      `}</style>

      <div className="hero-background-wrapper">
        <div className="floating-elements-master">
          {/* Hero Section Elements */}
          <div className="floating-circle hero-circle-1"></div>
          <div className="floating-circle hero-circle-2"></div>
          <div className="floating-circle hero-circle-3"></div>

          {/* Differentiators Section Elements */}
          <div className="floating-circle diff-circle-1"></div>
          <div className="floating-circle diff-circle-2"></div>

          {/* Metrics Section Elements */}
          <div className="metrics-number-1">$</div>
          <div className="metrics-number-2">%</div>
          <div className="metrics-number-3">+</div>

          {/* Gradient Overlays */}
          <div className="gradient-overlay-1"></div>
          <div className="gradient-overlay-2"></div>
        </div>
      </div>
    </>
  );
};

export default HeroBackground;
