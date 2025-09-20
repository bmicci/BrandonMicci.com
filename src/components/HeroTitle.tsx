const HeroTitle = () => {
  return (
    <>
      <style jsx>{`
        /* Minimal Spacing Hero Title */
        .title-section {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          padding: 20px 2rem 15px; /* Increased top padding for better spacing */
          text-align: center;
          position: relative;
          background: transparent;
          z-index: 10;
          order: 1; /* Default order for desktop */
        }

        .title-content {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .main-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          color: white;
          animation: titleSlideUp 1s ease-out;
        }

        .main-title .text-highlight {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        /* Mobile sparkle effect */
        @media (max-width: 768px) {
          .main-title .text-highlight::after {
            content: '✨';
            position: absolute;
            right: -25px;
            top: -8px;
            font-size: 1rem;
            animation: sparkleEffect 2s ease-in-out infinite;
          }
        }

        .main-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          animation: subtitleFade 1s ease-out 0.3s both;
        }

        /* Animations */
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

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .main-title {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .title-section {
            padding: 15px 1rem 10px; /* Better mobile spacing */
            order: 1; /* Keep title in first position on mobile */
          }

          .main-title {
            font-size: 2rem;
            margin-bottom: 0.75rem;
          }

          .main-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.7rem;
            line-height: 1.3;
          }

          .main-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="title-section">
        <div className="title-content">
          <h1 className="main-title">
            Senior{' '}
            <span className="text-highlight">AI & Digital Transformation</span>{' '}
            Executive
          </h1>
          <p className="main-subtitle">
            Driving Fortune 500 digital transformation through AI, Data
            Strategy, and client-centric products
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
