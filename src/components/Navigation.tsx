'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Empty initial to avoid hydration mismatch

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active link with hash on mount and hash changes
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveLink(hash);
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle link click
  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
  };

  // Handle smooth scroll for section links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // Only prevent default and smooth scroll if we're already on the homepage
    const isOnHomepage = window.location.pathname === '/';

    if (isOnHomepage) {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 60; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
      handleLinkClick(targetId);
    } else {
      // Let Next.js Link navigate to /#section, HashScrollOnLoad will handle scrolling
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style jsx>{`
        /* Skip to content link */
        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 0;
          background: #00d4ff;
          color: #0a0a0a;
          padding: 8px 16px;
          text-decoration: none;
          font-weight: 600;
          z-index: 999999;
          border-radius: 0 0 4px 0;
          transition: top 0.3s ease;
        }

        .skip-to-content:focus {
          top: 0;
        }

        /* Reset for Wix compatibility */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .wix-header {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 999999 !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(10, 10, 10, 0.85) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .wix-header.scrolled {
          background: rgba(10, 10, 10, 0.95) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 2rem;
          position: relative;
          min-height: 72px;
          height: 72px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: white;
          transition: transform 0.3s ease;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-bm {
          width: 52px;
          height: 52px;
          transition: all 0.3s ease;
          display: block;
          border-radius: 8px;
          overflow: hidden;
        }

        .logo:hover .logo-bm {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.3s ease;
          margin: 0;
        }

        .logo-title {
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          letter-spacing: 0.3px;
          white-space: nowrap;
          transition: all 0.3s ease;
          margin: 0;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0;
          margin: 0;
        }

        /* Removed scroll-based size changes to prevent CLS */

        @media (min-width: 769px) and (max-width: 1023px) {
          .nav-container {
            padding: 0.5rem 1.25rem;
            min-height: 68px;
            height: 68px;
          }
          .logo-bm {
            width: 46px;
            height: 46px;
          }
          .logo-name {
            font-size: 0.9rem;
          }
          .logo-title {
            font-size: 0.55rem;
          }
          .nav-item :global(a.nav-link) {
            padding: 0.35rem 0.7rem;
            font-size: 0.82rem;
          }
          .nav-item :global(a.cta-button) {
            padding: 0.38rem 0.7rem;
            font-size: 0.78rem;
          }
        }

        .nav-item {
          position: relative;
        }

        .nav-item :global(a.nav-link) {
          display: block;
          padding: 0.4rem 0.8rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          font-size: 0.85rem;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          position: relative;
          border-radius: 8px;
          margin: 0 0.1rem;
          cursor: pointer;
        }

        .nav-item :global(a.nav-link)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #00d4ff20 0%, #1e90ff20 100%);
          border-radius: 8px;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: -1;
        }

        .nav-item :global(a.nav-link):hover::before {
          opacity: 1;
        }

        .nav-item :global(a.nav-link):hover {
          color: white;
          transform: translateY(-1px);
        }

        .nav-item :global(a.nav-link.active) {
          color: white;
          background: linear-gradient(135deg, #00d4ff30 0%, #1e90ff30 100%);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 0.5rem;
          gap: 4px;
          transition: transform 0.3s ease;
          background: none;
          border: none;
        }

        .mobile-toggle:hover {
          transform: scale(1.1);
        }

        .toggle-line {
          width: 24px;
          height: 2px;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-toggle.active .toggle-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-toggle.active .toggle-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active .toggle-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .nav-item :global(a.cta-button) {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          color: white !important;
          padding: 0.4rem 0.8rem;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
        }

        .nav-item :global(a.cta-button)::before {
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

        .nav-item :global(a.cta-button):hover::before {
          left: 100%;
        }

        .nav-item :global(a.cta-button):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        /* Mobile Responsiveness - Extended to include all iPads */
        @media (max-width: 1279px) {
          .mobile-toggle {
            display: flex;
          }

          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 0.4rem 0 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-item {
            margin: 0 1rem;
          }

          .nav-item :global(a.nav-link) {
            padding: 0.75rem 1.4rem;
            margin: 0;
            border-radius: 8px;
          }

          .nav-item :global(a.cta-button) {
            margin: 0.6rem 1rem;
            justify-content: center;
          }

          .logo-bm {
            width: 42px;
            height: 42px;
          }

          .logo-name {
            font-size: 1.2rem;
          }

          .logo-title {
            font-size: 0.7rem;
          }

          .nav-container {
            padding: 0.6rem 1rem;
            min-height: 64px;
            height: 64px;
          }
        }

        @media (max-width: 640px) {
          .logo {
            gap: 0.5rem;
          }

          .logo-bm {
            width: 38px;
            height: 38px;
          }

          .logo-name {
            font-size: 1.05rem;
          }

          .logo-title {
            display: none;
          }
        }
      `}</style>

      <a href="#main" className="skip-to-content">
        Skip to content
      </a>

      <header className={`wix-header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container" aria-label="Primary">
          <div className="logo" onClick={() => handleLinkClick('home')}>
            <div className="logo-bm">
              <Image
                src="/logo-bm-tight.webp"
                alt="Brandon Micci Logo"
                width={52}
                height={52}
                priority
              />
            </div>
            <div className="logo-text">
              <div className="logo-name">Brandon Micci</div>
              <div className="logo-title">AI & Digital Transformation</div>
            </div>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link
                href="/#home"
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'home')}
                scroll={false}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#strategic-vision"
                className={`nav-link ${activeLink === 'strategic-vision' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'strategic-vision')}
                scroll={false}
              >
                Strategic Advantage
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#executive-experience"
                className={`nav-link ${activeLink === 'executive-experience' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'executive-experience')}
                scroll={false}
              >
                Executive Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#transformation-leadership"
                className={`nav-link ${activeLink === 'transformation-leadership' ? 'active' : ''}`}
                onClick={(e) =>
                  handleSmoothScroll(e, 'transformation-leadership')
                }
                scroll={false}
              >
                Transformation Leadership
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#professional-impact"
                className={`nav-link ${activeLink === 'professional-impact' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'professional-impact')}
                scroll={false}
              >
                Professional Impact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#connectwithme"
                className="cta-button"
                onClick={(e) => handleSmoothScroll(e, 'connectwithme')}
                scroll={false}
              >
                <span>Connect With Me</span>
                <span style={{ fontSize: '0.8rem' }}>→</span>
              </Link>
            </li>
          </ul>

          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="toggle-line"></div>
            <div className="toggle-line"></div>
            <div className="toggle-line"></div>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
