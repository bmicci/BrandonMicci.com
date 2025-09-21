'use client';

import Image from 'next/image';

const HeroImage = () => {
  return (
    <>
      <style jsx>{`
        .hi-card {
          width: clamp(220px, 42vw, 360px);
          margin: 0 auto;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
          overflow: hidden;              /* ensures corners/overflow stay perfect */
          position: relative;            /* required for ::before and containment */
          isolation: isolate;            /* prevents glow bleed */
        }
        .hi-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: 0 0 0 1px rgba(0, 212, 255, 0.14) inset;
        }

        /* UNTOUCHABLE IMAGE WRAPPER - no text inside this div */
        .hi-imgwrap {
          aspect-ratio: 4 / 5;           /* gives the fill image real space */
          position: relative;            /* required by next image fill */
          display: block;
        }
        .hi-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 40%;
          border-radius: 0;              /* corners come from the card */
          transform: translateZ(0);
        }

        /* Caption lives OUTSIDE the image wrapper */
        .hi-caption {
          padding: 12px 14px 14px;
          background: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.14) 100%);
        }
        .hi-name  { margin: 0 0 4px 0; font-weight: 700; color: #fff; font-size: 1rem; line-height: 1.2; }
        .hi-title { margin: 0; color: rgb(34 211 238); font-weight: 600; font-size: 0.9rem; line-height: 1.25; }

        @media (max-width: 768px) {
          .hi-card { width: clamp(210px, 70vw, 320px); border-radius: 18px; }
        }
        @media (max-width: 360px) {
          .hi-card { width: clamp(200px, 82vw, 300px); border-radius: 16px; }
          .hi-name { font-size: 0.95rem; }
          .hi-title { font-size: 0.85rem; }
        }
      `}</style>

      <div className="hi-card">
        {/* Do not place any text inside hi-imgwrap. Only the Image. */}
        <div className="hi-imgwrap">
          <Image
            src="/headshot.jpg"
            alt="Brandon Micci — AI & Digital Transformation Executive"
            className="hi-img"
            fill
            sizes="(min-width:1280px) 460px, (min-width:1024px) 32vw, 92vw"
            priority
            quality={92}
          />
        </div>

        <div className="hi-caption">
          <p className="hi-name">Brandon Micci</p>
          <p className="hi-title">VP, Head of NextGen AI/ML Solutions</p>
        </div>
      </div>
    </>
  );
};

export default HeroImage;