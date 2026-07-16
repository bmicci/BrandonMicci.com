'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearContact, setIsNearContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show after scrolling past ~400px (past the hero)
      const shouldShow = scrollY > 400;

      // Hide when near or past the #connectwithme section
      const contactSection = document.getElementById('connectwithme');
      let nearContact = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Hide when section is within viewport or above
        nearContact = rect.top < window.innerHeight;
      }

      setIsVisible(shouldShow);
      setIsNearContact(nearContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const target = document.getElementById('connectwithme');
      if (target) {
        // Use scrollIntoView so the section's CSS scroll-margin-top
        // (set via scroll-mt-[var(--header-h)]) does the offset math.
        // Previous offsetTop math was unreliable across positioned ancestors.
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const show = isVisible && !isNearContact;

  return (
    <>
      <style jsx>{`
        .floating-cta {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          pointer-events: none;
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
          opacity: 0;
          transform: translateY(1rem);
        }

        .floating-cta.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .floating-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          color: #07101d;
          padding: 0.75rem 1.25rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.875rem;
          text-decoration: none;
          box-shadow:
            0 8px 32px rgba(0, 212, 255, 0.45),
            0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
        }

        .floating-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .floating-btn:hover::before {
          left: 100%;
        }

        .floating-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow:
            0 16px 48px rgba(0, 212, 255, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.3);
        }

        .floating-btn .btn-icon {
          font-size: 1rem;
          line-height: 1;
        }

        .floating-email {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(10, 14, 39, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: rgba(255, 255, 255, 0.85);
          padding: 0.45rem 0.85rem;
          border-radius: 50px;
          font-size: 0.78rem;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .floating-email:hover {
          border-color: rgba(0, 212, 255, 0.6);
          color: #00d4ff;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .floating-cta {
            bottom: 1.25rem;
            right: 1rem;
          }

          .floating-btn {
            padding: 0.65rem 1rem;
            font-size: 0.8rem;
          }

          .floating-email {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-cta,
          .floating-btn,
          .floating-email {
            transition: none !important;
          }
        }
      `}</style>

      <div
        className={`floating-cta ${show ? 'visible' : ''}`}
        aria-hidden={!show}
      >
        <a
          href="mailto:brandon@brandonmicci.com?subject=Executive%20Opportunities%20%E2%80%93%20Brandon%20Micci"
          className="floating-email"
          tabIndex={show ? 0 : -1}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          brandon@brandonmicci.com
        </a>
        <Link
          href="/#connectwithme"
          className="floating-btn"
          onClick={handleClick}
          scroll={false}
          tabIndex={show ? 0 : -1}
        >
          <span className="btn-icon">✦</span>
          <span>Connect With Me</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingCTA;
