'use client';

import Image from 'next/image';

const HeroImage = () => {
  return (
    <>
      <style jsx>{`
        .hi-card {
          width: clamp(200px, 20vw, 280px);
          max-width: 280px;
          margin: 0 auto;
          max-height: 420px; /* Constrain height to match left content */
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 212, 255, 0.36);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.32),
            0 0 24px rgba(0, 212, 255, 0.22),
            0 0 48px rgba(0, 212, 255, 0.1);
          overflow: hidden; /* ensures corners/overflow stay perfect */
          position: relative; /* required for ::before and containment */
          isolation: isolate; /* prevents glow bleed */
          display: flex;
          flex-direction: column;
        }
        /* Tablet sizing */
        @media (min-width: 769px) and (max-width: 1023px) {
          .hi-card {
            width: clamp(220px, 24vw, 280px);
            max-width: 280px;
            max-height: 380px; /* Smaller height for tablet */
          }
        }
        /* Desktop: even smaller height to match left content */
        @media (min-width: 1024px) {
          .hi-card {
            max-height: 340px; /* Slightly tighter height constraint for desktop */
          }
        }
        .hi-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: 0 0 0 1px rgba(0, 212, 255, 0.5) inset;
        }

        /* UNTOUCHABLE IMAGE WRAPPER - no text inside this div */
        .hi-imgwrap {
          flex: 1; /* takes remaining space after caption */
          position: relative; /* required by next image fill */
          display: block;
          min-height: 0; /* allow flex item to shrink below content size */
          aspect-ratio: 640 / 853; /* match source image ratio to prevent warnings */
        }
        .hi-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 40%;
          border-radius: 0; /* corners come from the card */
          transform: translateZ(0);
        }

        /* Caption lives OUTSIDE the image wrapper */
        .hi-caption {
          padding: 10px 12px 12px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.14) 100%
          );
          text-align: center; /* center caption text on desktop */
          flex-shrink: 0; /* fixed height, doesn't shrink */
        }
        .hi-name {
          margin: 0 0 3px 0;
          font-weight: 700;
          color: #fff;
          font-size: 0.98rem;
          line-height: 1.2;
        }
        .hi-title {
          margin: 0;
          color: rgb(34 211 238);
          font-weight: 600;
          font-size: 0.88rem;
          line-height: 1.25;
        }

        /* iPad Air/Mini specific sizing */
        @media (min-width: 768px) and (max-width: 820px) {
          .hi-card {
            width: clamp(200px, 22vw, 240px);
            border-radius: 20px;
          }
        }

        @media (max-width: 768px) {
          .hi-card {
            width: clamp(180px, 60vw, 280px);
            border-radius: 18px;
          }
          .hi-imgwrap {
            aspect-ratio: 640 / 853;
          }
        }
        @media (max-width: 360px) {
          .hi-card {
            width: clamp(160px, 70vw, 220px);
            border-radius: 16px;
          }
          .hi-imgwrap {
            aspect-ratio: 640 / 853;
          }
          .hi-name {
            font-size: 0.95rem;
          }
          .hi-title {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="hi-card">
        {/* Do not place any text inside hi-imgwrap. Only the Image. */}
        <div className="hi-imgwrap">
          <Image
            src="/headshot.webp"
            alt="Brandon Micci VP Head of AI Products - Enterprise AI Transformation Leader at JPMorgan Chase"
            className="hi-img"
            fill
            sizes="(min-width:1280px) 460px, (min-width:1024px) 34vw, (min-width:769px) 32vw, 70vw"
            priority
            fetchPriority="high"
            quality={92}
          />
        </div>

        <div className="hi-caption">
          <p className="hi-name">Brandon Micci</p>
          <p className="hi-title">VP, Head of AI Products</p>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
