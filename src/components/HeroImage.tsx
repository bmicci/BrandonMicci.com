'use client';

import Image from 'next/image';

const HeroImage = () => {
  return (
    <>
      <style jsx>{`
        /* Professional Image Component */
        .image-section {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          padding: 15px 2rem; /* Reduced spacing */
          text-align: center;
          position: relative;
          background: transparent;
          z-index: 10;
          order: 3; /* Default order for desktop */
        }

        .image-content {
          max-width: 320px; /* Smaller container for better proportions */
          margin: 0 auto;
          width: 100%;
          position: relative;
          animation: imageReveal 1s ease-out 0.5s both;
        }

        .professional-image {
          width: 100%;
          max-width: 300px; /* Reduced from 350px */
          height: 350px; /* Reduced from 400px */
          border-radius: 16px;
          object-fit: cover;
          margin: 0 auto;
          display: block;
          position: relative;

          /* Clean professional styling */
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow:
            0 0 0 1px rgba(0, 212, 255, 0.2),
            0 0 20px rgba(0, 212, 255, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.4);

          transition: all 0.4s ease;
          animation: professionalPulse 3s ease-in-out infinite;
        }

        /* Desktop hover effect - clean and professional */
        @media (min-width: 769px) {
          .professional-image:hover {
            transform: translateY(-8px);
            box-shadow:
              0 0 0 2px rgba(0, 212, 255, 0.4),
              0 0 30px rgba(0, 212, 255, 0.25),
              0 12px 40px rgba(0, 0, 0, 0.5);
            animation: professionalHeartbeat 1.5s ease-in-out infinite;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .image-section {
            padding: 20px 1rem;
            order: 2; /* Move image to second position on mobile (after header) */
          }

          .professional-image {
            max-width: 280px;
            height: 320px;
            animation: professionalPulse 4s ease-in-out infinite;
          }
        }

        @media (max-width: 480px) {
          .image-section {
            padding: 15px 0.75rem;
          }

          .professional-image {
            max-width: 240px;
            height: 280px;
            border-radius: 12px;
          }
        }

        /* Professional Animations */
        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes professionalPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow:
              0 0 0 1px rgba(0, 212, 255, 0.2),
              0 0 20px rgba(0, 212, 255, 0.15),
              0 8px 32px rgba(0, 0, 0, 0.4);
          }
          50% {
            transform: scale(1.015);
            box-shadow:
              0 0 0 2px rgba(0, 212, 255, 0.3),
              0 0 25px rgba(0, 212, 255, 0.2),
              0 10px 35px rgba(0, 0, 0, 0.45);
          }
        }

        @keyframes professionalHeartbeat {
          0%,
          100% {
            transform: translateY(-8px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
      `}</style>

      <div className="image-section">
        <div className="image-content">
          <Image
            src="/headshot.jpg"
            alt="Brandon Micci - AI & Digital Transformation Executive"
            className="professional-image"
            fill
            sizes="(max-width: 480px) 240px, (max-width: 768px) 280px, 320px"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
