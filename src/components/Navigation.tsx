'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Handle smooth scroll for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
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
  };

  return (
    <>
      <style jsx>{`
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
          min-height: 58px;
          transition:
            padding 0.3s ease,
            min-height 0.3s ease;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: white;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-icon {
          width: 52px;
          height: 52px;
          background-image: url('/logo.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .logo:hover .logo-icon {
          transform: scale(1.05);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #00d4ff;
          white-space: nowrap;
          text-decoration: none;
          transition: font-size 0.3s ease;
        }

        .logo-title {
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          letter-spacing: 0.3px;
          white-space: nowrap;
          transition:
            font-size 0.3s ease,
            opacity 0.3s ease;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0;
          margin: 0;
        }

        @media (min-width: 769px) {
          .wix-header.scrolled .nav-container {
            padding: 0.35rem 2rem;
            min-height: 50px;
          }

          .wix-header.scrolled .logo-icon {
            width: 46px;
            height: 46px;
          }

          .wix-header.scrolled .logo-name {
            font-size: 0.88rem;
          }

          .wix-header.scrolled .logo-title {
            font-size: 0.55rem;
            opacity: 0.85;
          }
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
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

        .nav-link::before {
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

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-1px);
        }

        .nav-link.active {
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

        .cta-button {
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

        .cta-button::before {
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

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
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

          .nav-link {
            padding: 0.75rem 1.4rem;
            margin: 0;
            border-radius: 8px;
          }

          .cta-button {
            margin: 0.6rem 1rem;
            justify-content: center;
          }

          .logo-icon {
            width: 48px;
            height: 48px;
          }

          .logo-name {
            font-size: 1.2rem;
          }

          .nav-container {
            padding: 0.6rem 1rem;
            min-height: 56px;
          }
        }

        @media (max-width: 640px) {
          .logo {
            gap: 0.5rem;
          }

          .logo-name {
            font-size: 1.05rem;
          }

          .logo-title {
            display: none;
          }

          .logo-text {
            display: flex;
          }
        }
      `}</style>

      <header className={`wix-header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="logo" onClick={() => handleLinkClick('home')}>
            <div className="logo-icon"></div>
            <div className="logo-text">
              <div className="logo-name">Brandon Micci</div>
              <div className="logo-title">AI & Digital Transformation</div>
            </div>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#strategic-vision"
                className={`nav-link ${activeLink === 'strategic-vision' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'strategic-vision')}
              >
                Strategic Advantage
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#executive-experience"
                className={`nav-link ${activeLink === 'executive-experience' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'executive-experience')}
              >
                Executive Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#transformation-leadership"
                className={`nav-link ${activeLink === 'transformation-leadership' ? 'active' : ''}`}
                onClick={(e) =>
                  handleSmoothScroll(e, 'transformation-leadership')
                }
              >
                Transformation Leadership
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#professional-impact"
                className={`nav-link ${activeLink === 'professional-impact' ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, 'professional-impact')}
              >
                Professional Impact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#connectwithme"
                className="cta-button"
                onClick={(e) => handleSmoothScroll(e, 'connectwithme')}
              >
                <span>Connect With Me</span>
                <span style={{ fontSize: '0.8rem' }}>→</span>
              </a>
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
