import type { Metadata } from 'next';
import ContactCard from '@/components/ContactCard';

export const metadata: Metadata = {
  title: { absolute: 'Connect with Brandon Micci | Digital Business Card' },
  description: 'Enterprise AI & Digital Transformation Executive. Connect instantly via LinkedIn, email, or save my contact info.',
  alternates: { canonical: '/contactcard' },
  openGraph: {
    title: 'Connect with Brandon Micci',
    description: 'Enterprise AI & Digital Transformation Executive. 27K+ LLM users deployed, $400M+ enterprise value.',
    type: 'profile',
  },
};

export default function ContactCardPage() {
  return (
    <>
      <style>{`
        .contactcard-page {
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          padding-top: 0;
          margin-top: -2rem;
          position: relative;
          overflow: hidden;
          background: #0a0e27;
        }

        @media (max-width: 768px) {
          .contactcard-page {
            margin-top: -1rem;
            padding-bottom: 2rem;
          }
        }

        .contactcard-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(30, 144, 255, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(0, 100, 200, 0.08) 0%, transparent 70%),
            linear-gradient(180deg, #0a0e27 0%, #0f172a 50%, #0a0e27 100%);
          pointer-events: none;
        }

        .contactcard-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(0, 212, 255, 0.08) 0%,
            rgba(30, 144, 255, 0.04) 40%,
            transparent 70%
          );
          pointer-events: none;
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        .contactcard-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
        }

        /* Subtle floating particles effect */
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 212, 255, 0.6);
          border-radius: 50%;
          animation: float-particle 8s ease-in-out infinite;
        }

        .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 20%; right: 15%; animation-delay: 1s; }
        .particle:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 2s; }
        .particle:nth-child(4) { bottom: 15%; right: 25%; animation-delay: 3s; }
        .particle:nth-child(5) { top: 40%; left: 5%; animation-delay: 4s; }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
      `}</style>

      <main className="contactcard-page">
        {/* Background layers */}
        <div className="contactcard-bg" />
        <div className="contactcard-glow" />
        
        {/* Floating particles */}
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />

        {/* Card content */}
        <div className="contactcard-content">
          <ContactCard />
        </div>
      </main>
    </>
  );
}
