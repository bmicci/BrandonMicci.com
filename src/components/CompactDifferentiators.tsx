'use client';

const CompactDifferentiators = () => {
  return (
    <>
      <style jsx>{`
        /* Compact Differentiators - Rebuilt */
        .compact-differentiators {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          padding: 15px 2rem 20px;
          position: relative;
          background: transparent;
          z-index: 10;
          order: 4; /* Default desktop order - differentiators before KPIs */
        }

        .compact-container {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .compact-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          animation: slideUp 1s ease-out;
        }

        .compact-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .rocket-icon {
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.5rem;
          animation: rocketBounce 2s ease-in-out infinite;
        }

        .header-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          margin: 0;
        }

        /* Desktop: 2x2 grid for compact layout */
        .items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .compact-item {
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        /* Desktop hover effects */
        @media (min-width: 769px) {
          .compact-item:hover {
            background: rgba(0, 212, 255, 0.08);
            transform: translateY(-2px);
            border-left: 3px solid #00d4ff;
          }
        }

        .item-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #00d4ff;
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .item-emoji {
          font-size: 1rem;
          animation: emojiTwinkle 1.5s ease-in-out infinite;
        }

        .item-text {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
          margin: 0;
        }

        /* Background shimmer */
        .compact-box::before {
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
          animation: shimmerEffect 3s ease-in-out infinite;
        }

        /* Animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rocketBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes emojiTwinkle {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes shimmerEffect {
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

        /* Tablet responsiveness */
        @media (max-width: 1024px) and (min-width: 769px) {
          .compact-container {
            max-width: 750px;
          }

          .items-grid {
            gap: 1rem;
          }

          .compact-item {
            padding: 0.875rem;
          }
        }

        /* Mobile: single column */
        @media (max-width: 768px) {
          .compact-differentiators {
            padding: 10px 1rem 15px;
            order: 4; /* Keep differentiators in position 4 on mobile */
          }

          .compact-box {
            padding: 1.25rem;
          }

          .items-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .compact-item {
            padding: 0.875rem;
            background: rgba(255, 255, 255, 0.03);
            border-left: 3px solid transparent;
            animation: mobileSlide 0.6s ease-out;
          }

          .compact-item:nth-child(1) {
            animation-delay: 0.1s;
          }
          .compact-item:nth-child(2) {
            animation-delay: 0.2s;
          }
          .compact-item:nth-child(3) {
            animation-delay: 0.3s;
          }
          .compact-item:nth-child(4) {
            animation-delay: 0.4s;
          }

          .compact-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(180deg, #00d4ff, #1e90ff);
            animation: progressBar 2s ease-in-out infinite;
            animation-delay: calc(var(--delay, 0) * 0.5s);
          }

          .compact-item:nth-child(1)::before {
            --delay: 1;
          }
          .compact-item:nth-child(2)::before {
            --delay: 2;
          }
          .compact-item:nth-child(3)::before {
            --delay: 3;
          }
          .compact-item:nth-child(4)::before {
            --delay: 4;
          }
        }

        @keyframes mobileSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes progressBar {
          0% {
            height: 0%;
            opacity: 0.5;
          }
          50% {
            height: 100%;
            opacity: 1;
          }
          100% {
            height: 100%;
            opacity: 0.7;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .compact-differentiators {
            padding: 12px 0.75rem;
          }

          .compact-box {
            padding: 1rem;
          }

          .compact-item {
            padding: 0.75rem;
          }

          .item-title {
            font-size: 1rem;
          }

          .item-text {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="compact-differentiators">
        <div className="compact-container">
          <div className="compact-box">
            <div className="compact-header">
              <span className="rocket-icon">🚀</span>
              <h2 className="header-text">What Makes Me Different</h2>
            </div>

            <div className="items-grid">
              <div className="compact-item">
                <h3 className="item-title">
                  <span className="item-emoji">🚀</span>
                  Visionary Leadership:
                </h3>
                <p className="item-text">
                  Leading cutting-edge AI initiatives that reshape industries—from 
                  pioneering LLM deployments to building next-gen analytics platforms.
                </p>
              </div>

              <div className="compact-item">
                <h3 className="item-title">
                  <span className="item-emoji">⚡</span>
                  Execution Excellence:
                </h3>
                <p className="item-text">
                  Proven track record of turning ambitious visions into measurable 
                  results—consistently delivering on time, on budget, at scale.
                </p>
              </div>

              <div className="compact-item">
                <h3 className="item-title">
                  <span className="item-emoji">🎯</span>
                  Strategic Thinking:
                </h3>
                <p className="item-text">
                  C-suite advisory capabilities that translate complex AI strategies 
                  into clear business roadmaps and competitive advantages.
                </p>
              </div>

              <div className="compact-item">
                <h3 className="item-title">
                  <span className="item-emoji">💡</span>
                  Innovation Catalyst:
                </h3>
                <p className="item-text">
                  Building transformative solutions that don&apos;t just solve today&apos;s 
                  problems—they anticipate tomorrow&apos;s opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompactDifferentiators;
