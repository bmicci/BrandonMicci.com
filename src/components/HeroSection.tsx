'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [counts, setCounts] = useState({
    value: 0,
    users: 0,
    roi: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = {
        value: 400,
        users: 27,
        roi: 250,
        years: 16
      };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          value: Math.floor(targets.value * progress),
          users: Math.floor(targets.users * progress),
          roi: Math.floor(targets.roi * progress),
          years: Math.floor(targets.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0a0a0a;
          color: white;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          padding: 2rem 0;
          overflow: hidden;
        }

        /* Animated Background */
        .neural-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(30, 144, 255, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
          z-index: 1;
          animation: backgroundPulse 8s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #00d4ff;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 8s infinite ease-in-out;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.7);
        }

        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 8s; }
        .particle:nth-child(2) { top: 60%; left: 20%; animation-delay: 2s; animation-duration: 12s; }
        .particle:nth-child(3) { top: 30%; left: 80%; animation-delay: 4s; animation-duration: 10s; }
        .particle:nth-child(4) { top: 80%; left: 70%; animation-delay: 1s; animation-duration: 14s; }
        .particle:nth-child(5) { top: 40%; left: 50%; animation-delay: 3s; animation-duration: 9s; }
        .particle:nth-child(6) { top: 70%; left: 30%; animation-delay: 5s; animation-duration: 11s; }
        .particle:nth-child(7) { top: 15%; left: 65%; animation-delay: 6s; animation-duration: 13s; }
        .particle:nth-child(8) { top: 85%; left: 25%; animation-delay: 1.5s; animation-duration: 15s; }
        .particle:nth-child(9) { top: 25%; left: 45%; animation-delay: 3.5s; animation-duration: 7s; }
        .particle:nth-child(10) { top: 55%; left: 85%; animation-delay: 2.5s; animation-duration: 16s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.6; }
          75% { transform: translateY(-20px) translateX(-10px); opacity: 0.8; }
        }

        .neural-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.12) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridFlow 20s linear infinite;
          z-index: 1;
          opacity: 0.7;
        }

        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        /* Desktop Layout */
        .hero-top {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: start;
          margin-bottom: 2rem;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 50%, #00d4ff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }

        .gradient-highlight {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 50%, #00d4ff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
          font-weight: 600;
        }

        .cta-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .cta-button svg {
          width: 16px;
          height: 16px;
          opacity: 0.9;
          flex-shrink: 0;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .cta-button.outline {
          background: transparent;
          color: #00d4ff;
          border-color: rgba(0, 212, 255, 0.5);
        }

        .cta-button.outline:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00d4ff;
          transform: translateY(-2px);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.4);
          transform: translateY(-2px);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .photo-container {
          position: relative;
          animation: slideInRight 1s ease-out;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .photo-glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .photo-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
        }

        .professional-photo {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 16px;
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem 1.5rem 1.5rem;
          color: white;
        }

        .photo-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .photo-role {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .differentiators-section {
          margin: 4rem 0;
        }

        .differentiators-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .differentiators-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .rocket-icon {
          font-size: 2rem;
        }

        .header-text {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .differentiators-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .differentiator-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(0, 212, 255, 0.1);
          transition: all 0.3s ease;
        }

        .differentiator-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-4px);
        }

        .item-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .item-emoji {
          font-size: 1.5rem;
        }

        .item-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile-specific text alignment */
        .mobile-description {
          text-align: center;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-container {
            padding: 0 1rem;
          }

          /* Hide desktop layout on mobile */
          .hero-top {
            display: none;
          }

          .mobile-title {
            font-size: 2rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            text-align: center;
          }

          .mobile-subtitle {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
            font-weight: 500;
            text-align: center;
            margin-bottom: 2rem;
          }

          .mobile-photo {
            max-width: 300px;
            margin: 0 auto 2rem auto;
          }

          .mobile-photo .professional-photo {
            height: 350px;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .cta-buttons {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }

          .differentiators-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
      
      <div className="hero-section">
        <div className="neural-background"></div>
        <div className="neural-grid"></div>
        <div className="floating-particles">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        <div className="hero-container">
          {/* Desktop Layout */}
          <div className="hero-top">
            <div className="hero-content">
              <div className="hero-intro">
                <h1 className="hero-title">
                  Senior <span className="gradient-text">AI & Digital Transformation</span> Executive
                </h1>
                <p className="hero-subtitle">
                  Driving Fortune 500 digital transformation through AI, Data Strategy, and client-centric products
                </p>
              </div>

              <div className="hero-summary">
                <p className="hero-description">
                  With <span className="gradient-highlight">16+ years of experience</span> <span className="gradient-highlight">architecting enterprise-wide AI solutions</span>, I&apos;ve transformed complex technological
                  challenges into over <span className="gradient-highlight">$400M in measurable business outcomes</span>. From leading one of our organization&apos;s largest LLM deployments in the payments
                  space to building <span className="gradient-highlight">evangelical data communities of 30K+ users</span>, I bridge the gap between cutting-edge innovation and
                  practical enterprise implementation.
                </p>
              </div>

              <div className="hero-cta-section">
                <div className="cta-buttons">
                  <a href="https://linkedin.com/in/brandonmicci" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="mailto:contact@brandonmicci.com" className="cta-button outline">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Let&apos;s Connect
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    Resume
                  </a>
                  <a href="/executive-brief.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
                    </svg>
                    Executive Brief
                  </a>
                </div>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">${counts.value}M+</span>
                  <span className="stat-label">Value Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{counts.users}K+</span>
                  <span className="stat-label">AI Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{counts.roi}%</span>
                  <span className="stat-label">Typical ROI</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{counts.years}+</span>
                  <span className="stat-label">Years Leading</span>
                </div>
              </div>
            </div>

            <div className="photo-container">
              <div className="photo-glassmorphism">
                <div className="photo-frame">
                  <img
                    src="/headshot.jpg"
                    alt="Brandon Micci - AI & Digital Transformation Executive"
                    className="professional-photo"
                  />
                  <div className="photo-overlay">
                    <div className="photo-title">Brandon Micci</div>
                    <div className="photo-role">VP, Head of NextGen AI/ML Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="mobile-layout">
            <div className="mobile-intro">
              <h1 className="mobile-title">
                Senior <span className="gradient-text">AI & Digital Transformation</span> Executive
              </h1>
              <p className="mobile-subtitle">
                Driving Fortune 500 digital transformation through AI, Data Strategy, and client-centric products
              </p>
            </div>

            <div className="photo-container mobile-photo">
              <div className="photo-glassmorphism">
                <div className="photo-frame">
                  <img
                    src="/headshot.jpg"
                    alt="Brandon Micci - AI & Digital Transformation Executive"
                    className="professional-photo"
                  />
                  <div className="photo-overlay">
                    <div className="photo-title">Brandon Micci</div>
                    <div className="photo-role">VP, Head of NextGen AI/ML Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-summary">
              <p className="hero-description mobile-description">
                With <span className="gradient-highlight">16+ years of experience</span> <span className="gradient-highlight">architecting enterprise-wide AI solutions</span>, I&apos;ve transformed complex technological
                challenges into over <span className="gradient-highlight">$400M in measurable business outcomes</span>. From leading one of our organization&apos;s largest LLM deployments in the payments
                space to building <span className="gradient-highlight">evangelical data communities of 30K+ users</span>, I bridge the gap between cutting-edge innovation and
                practical enterprise implementation.
              </p>
            </div>

            <div className="hero-cta-section" style={{ marginTop: '2rem' }}>
              <div className="cta-buttons">
                <a href="https://linkedin.com/in/brandonmicci" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:contact@brandonmicci.com" className="cta-button outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Let&apos;s Connect
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  Resume
                </a>
                <a href="/executive-brief.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
                  </svg>
                  Executive Brief
                </a>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">${counts.value}M+</span>
                <span className="stat-label">Value Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.users}K+</span>
                <span className="stat-label">AI Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.roi}%</span>
                <span className="stat-label">Typical ROI</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counts.years}+</span>
                <span className="stat-label">Years Leading</span>
              </div>
            </div>
          </div>

          <div className="differentiators-section">
            <div className="differentiators-glass">
              <div className="differentiators-header">
                <span className="rocket-icon">🚀</span>
                <h2 className="header-text">What Makes Me Different</h2>
              </div>

              <div className="differentiators-grid">
                <div className="differentiator-item">
                  <h3 className="item-title">
                    <span className="item-emoji">⭐</span>
                    Scale Expertise
                  </h3>
                  <p className="item-text">
                    Led the largest LLM deployment in payments (27,000+ users) and built global teams of 50+ professionals.
                  </p>
                </div>

                <div className="differentiator-item">
                  <h3 className="item-title">
                    <span className="item-emoji">💡</span>
                    Financial Impact
                  </h3>
                  <p className="item-text">
                    Consistent, outsized ROI—250%+ returns delivering $30M in new revenue streams.
                  </p>
                </div>

                <div className="differentiator-item">
                  <h3 className="item-title">
                    <span className="item-emoji">🎯</span>
                    Cross-Industry Innovation
                  </h3>
                  <p className="item-text">
                    Deep expertise across Financial Services, Insurance, Airlines, Energy, and Life Sciences.
                  </p>
                </div>

                <div className="differentiator-item">
                  <h3 className="item-title">
                    <span className="item-emoji">⚡</span>
                    Transformation Catalyst
                  </h3>
                  <p className="item-text">
                    AI evangelist who builds adoption communities that drive organizational change at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
