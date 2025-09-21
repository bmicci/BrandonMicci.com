'use client';

import Image from 'next/image';

const HeroImage = () => {
  return (
    <>
      <style jsx>{`
        /* OUTER CARD (the only frame) */
        .card {
          width: clamp(220px, 42vw, 360px);
          margin: 0 auto;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.12) inset,
            0 24px 48px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.10);
          overflow: hidden;              /* ensures image corners match frame */
          position: relative;
          isolation: isolate;
        }

        /* SOFT CYAN EDGE (very subtle) */
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: 0 0 0 1px rgba(0, 212, 255, 0.14) inset;
        }

        /* IMAGE WRAPPER keeps fixed aspect and no inner borders */
        .imgwrap {
          aspect-ratio: 4 / 5;           /* consistent portrait proportion */
          position: relative;
        }

        .img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 40%;      /* lift a bit so chin isn't cropped */
          transform: translateZ(0);
        }

        /* TEXT AREA lives OUTSIDE the rounded image to avoid cropping */
        .caption {
          padding: 12px 14px 14px;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.00) 0%,
            rgba(0,0,0,0.10) 20%,
            rgba(0,0,0,0.18) 100%
          );
        }
        .name {
          font-weight: 700;
          color: #fff;
          font-size: 1rem;
          line-height: 1.2;
          margin: 0 0 4px 0;
        }
        .title {
          color: rgb(34 211 238); /* cyan-400 */
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.25;
          margin: 0;
        }

        /* MOBILE TUNING */
        @media (max-width: 768px) {
          .card { width: clamp(210px, 70vw, 320px); border-radius: 18px; }
        }
        @media (max-width: 360px) {
          .card { width: clamp(200px, 82vw, 300px); border-radius: 16px; }
          .name { font-size: 0.95rem; }
          .title { font-size: 0.85rem; }
        }

        /* Prefer smoothness on desktop only */
        @media (min-width: 769px) {
          .card { transition: transform 200ms ease, box-shadow 200ms ease; }
          .card:hover {
            transform: translateY(-6px);
            box-shadow:
              0 1px 0 rgba(255,255,255,0.12) inset,
              0 32px 64px rgba(0,0,0,0.50);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .card, .card:hover { transition: none !important; transform: none !important; }
        }
      `}</style>

      <div className="card">
        <div className="imgwrap">
          <Image
            src="/headshot.jpg"
            alt="Brandon Micci — AI & Digital Transformation Executive"
            className="img"
            fill
            sizes="(max-width: 360px) 300px, (max-width: 768px) 320px, 360px"
            priority
          />
        </div>

        {/* Caption OUTSIDE the rounded image area */}
        <div className="caption">
          <p className="name">Brandon Micci</p>
          <p className="title">VP, Head of NextGen AI/ML Solutions</p>
        </div>
      </div>
    </>
  );
};

export default HeroImage;