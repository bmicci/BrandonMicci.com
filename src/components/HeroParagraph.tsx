'use client';

const HeroParagraph = () => {
  return (
    <>
      <style jsx>{`
        /* Hero Paragraph Component */
        .hero-paragraph-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 20px 2rem; /* Tight spacing */
            text-align: center;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 2; /* Default order for desktop */
        }

        .hero-paragraph-container {
            max-width: 900px; /* Narrower for better readability */
            margin: 0 auto;
            width: 100%;
        }

        .hero-intro {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.6;
            margin: 0; /* No margins */
            font-weight: 400;
            animation: fadeIn 1s ease-out 0.3s both;
        }

        /* Animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .hero-paragraph-wrapper {
                padding: 8px 1rem; /* Tighter mobile spacing */
                order: 3; /* Move paragraph to third position on mobile */
            }

            .hero-intro {
                font-size: 1.1rem; /* Larger mobile font */
                line-height: 1.6;
            }
        }

        @media (max-width: 480px) {
            .hero-paragraph-wrapper {
                padding: 5px 0.75rem;
            }

            .hero-intro {
                font-size: 1.05rem; /* Still larger than before */
            }
        }
      `}</style>

      <div className="hero-paragraph-wrapper">
        <div className="hero-paragraph-container">
          <p className="hero-intro">
            With 16+ years of experience architecting enterprise-wide AI solutions, I&apos;ve transformed complex technological challenges into over $400M in measurable business outcomes. From leading the largest LLM deployment in the payments industry to building evangelical data communities of 30,000+ users, I bridge the gap between cutting-edge innovation and practical enterprise implementation.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroParagraph;
