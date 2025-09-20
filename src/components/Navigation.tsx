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
      const offsetTop = target.offsetTop - 90; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    handleLinkClick(targetId);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10 transition-colors`}
    >
      <nav className="mx-auto max-w-[1400px] flex items-center justify-between px-4 py-2 md:px-8 md:py-2.5">
        {/* Logo */}
        <div className="logo flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
          <div 
            className="w-12 h-12 bg-cover bg-center rounded-md"
            style={{ backgroundImage: "url('/logo.png')" }}
          />
          <div className="flex flex-col">
            <div className="text-sm font-bold text-cyan-400">Brandon Micci</div>
            <div className="text-xs text-white/70">AI & Digital Transformation</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <a
              href="#home"
              className={`px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'home' ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#strategic-vision"
              className={`px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'strategic-vision' ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'strategic-vision')}
            >
              Strategic Advantage
            </a>
          </li>
          <li>
            <a
              href="#executive-experience"
              className={`px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'executive-experience' ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'executive-experience')}
            >
              Executive Experience
            </a>
          </li>
          <li>
            <a
              href="#transformation-leadership"
              className={`px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'transformation-leadership' ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'transformation-leadership')}
            >
              Transformation Leadership
            </a>
          </li>
          <li>
            <a
              href="#professional-impact"
              className={`px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'professional-impact' ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'professional-impact')}
            >
              Professional Impact
            </a>
          </li>
          <li>
            <a
              href="#connect-with-me"
              className="px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all rounded-lg flex items-center gap-1"
              onClick={(e) => handleSmoothScroll(e, 'connect-with-me')}
            >
              <span>Connect With Me</span>
              <span>→</span>
            </a>
          </li>
        </ul>

        {/* Mobile toggle button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-black/80 backdrop-blur border-t border-white/10`}
      >
        <ul className="flex flex-col p-2">
          <li>
            <a
              href="#home"
              className={`block px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'home' ? 'bg-cyan-500/20 text-white' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#strategic-vision"
              className={`block px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'strategic-vision' ? 'bg-cyan-500/20 text-white' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'strategic-vision')}
            >
              Strategic Advantage
            </a>
          </li>
          <li>
            <a
              href="#executive-experience"
              className={`block px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'executive-experience' ? 'bg-cyan-500/20 text-white' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'executive-experience')}
            >
              Executive Experience
            </a>
          </li>
          <li>
            <a
              href="#transformation-leadership"
              className={`block px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'transformation-leadership' ? 'bg-cyan-500/20 text-white' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'transformation-leadership')}
            >
              Transformation Leadership
            </a>
          </li>
          <li>
            <a
              href="#professional-impact"
              className={`block px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg ${
                activeLink === 'professional-impact' ? 'bg-cyan-500/20 text-white' : ''
              }`}
              onClick={(e) => handleSmoothScroll(e, 'professional-impact')}
            >
              Professional Impact
            </a>
          </li>
          <li>
            <a
              href="#connect-with-me"
              className="block px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all rounded-lg flex items-center gap-2 justify-center"
              onClick={(e) => handleSmoothScroll(e, 'connect-with-me')}
            >
              <span>Connect With Me</span>
              <span>→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;