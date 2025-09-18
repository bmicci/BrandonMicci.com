'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [counts, setCounts] = useState({
    value: 0,
    users: 0,
    roi: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // 2 seconds
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

    // Start animation after a short delay
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="hero-section">
        {/* Animated Background */}
        <div className="neural-background"></div>
        <div className="neural-grid"></div>
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

      <div className="hero-container">
        {/* Top Section */}
        <div className="hero-top">
          <div className="hero-column">
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
                  <span className="cta-icon">💼</span>
                  Connect on LinkedIn
                </a>
                <a href="mailto:contact@brandonmicci.com" className="cta-button secondary">
                  <span className="cta-icon">📧</span>
                  Let&apos;s Connect
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                  <span className="cta-icon">📄</span>
                  View Resume
                </a>
                <a href="/executive-brief.pdf" target="_blank" rel="noopener noreferrer" className="cta-button outline">
                  <span className="cta-icon">📋</span>
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

          {/* Photo Side */}
          <div className="photo-container">
            <div className="photo-glassmorphism">
              <div className="photo-frame">
                <Image
                  src="/headshot.jpg"
                  alt="Brandon Micci - AI & Digital Transformation Executive"
                  className="professional-photo"
                  fill
                  sizes="(max-width: 480px) 240px, (max-width: 768px) 280px, 320px"
                  priority
                />
                <div className="photo-overlay">
                  <div className="photo-title">Brandon Micci</div>
                  <div className="photo-role">VP, Head of NextGen AI/ML Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* What Makes Me Different Section */}
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

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0a0a0a;
          color: white;
          overflow-x: hidden;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          padding: 7rem 0 2.5rem;
          scroll-margin-top: 6rem;
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
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
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

        .particle:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 8s;
        }
        .particle:nth-child(2) {
          top: 60%;
          left: 20%;
          animation-delay: 2s;
          animation-duration: 12s;
        }
        .particle:nth-child(3) {
          top: 30%;
          left: 80%;
          animation-delay: 4s;
          animation-duration: 10s;
        }
        .particle:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 1s;
          animation-duration: 14s;
        }
        .particle:nth-child(5) {
          top: 40%;
          left: 50%;
          animation-delay: 3s;
          animation-duration: 9s;
        }
        .particle:nth-child(6) {
          top: 70%;
          left: 30%;
          animation-delay: 5s;
          animation-duration: 11s;
        }
        .particle:nth-child(7) {
          top: 15%;
          left: 65%;
          animation-delay: 6s;
          animation-duration: 13s;
        }
        .particle:nth-child(8) {
          top: 85%;
          left: 25%;
          animation-delay: 1.5s;
          animation-duration: 15s;
        }
        .particle:nth-child(9) {
          top: 25%;
          left: 45%;
          animation-delay: 3.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(10) {
          top: 55%;
          left: 85%;
          animation-delay: 2.5s;
          animation-duration: 16s;
        }
        .particle:nth-child(11) {
          top: 10%;
          left: 35%;
          animation-delay: 4.5s;
          animation-duration: 9s;
        }
        .particle:nth-child(12) {
          top: 90%;
          left: 55%;
          animation-delay: 0.5s;
          animation-duration: 11s;
        }
        .particle:nth-child(13) {
          top: 35%;
          left: 15%;
          animation-delay: 5.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(14) {
          top: 65%;
          left: 75%;
          animation-delay: 2.8s;
          animation-duration: 12s;
        }
        .particle:nth-child(15) {
          top: 45%;
          left: 5%;
          animation-delay: 1.2s;
          animation-duration: 14s;
        }
        .particle:nth-child(16) {
          top: 75%;
          left: 60%;
          animation-delay: 3.8s;
          animation-duration: 10s;
        }
        .particle:nth-child(17) {
          top: 5%;
          left: 75%;
          animation-delay: 6.2s;
          animation-duration: 13s;
        }
        .particle:nth-child(18) {
          top: 50%;
          left: 40%;
          animation-delay: 4.2s;
          animation-duration: 9s;
        }
        .particle:nth-child(19) {
          top: 95%;
          left: 15%;
          animation-delay: 1.8s;
          animation-duration: 15s;
        }
        .particle:nth-child(20) {
          top: 25%;
          left: 90%;
          animation-delay: 5.2s;
          animation-duration: 11s;
        }
        .particle:nth-child(21) {
          top: 12%;
          left: 22%;
          animation-delay: 0.8s;
          animation-duration: 17s;
        }
        .particle:nth-child(22) {
          top: 68%;
          left: 8%;
          animation-delay: 3.2s;
          animation-duration: 13s;
        }
        .particle:nth-child(23) {
          top: 42%;
          left: 88%;
          animation-delay: 5.8s;
          animation-duration: 9s;
        }
        .particle:nth-child(24) {
          top: 78%;
          left: 42%;
          animation-delay: 2.2s;
          animation-duration: 16s;
        }
        .particle:nth-child(25) {
          top: 18%;
          left: 58%;
          animation-delay: 4.8s;
          animation-duration: 11s;
        }
        .particle:nth-child(26) {
          top: 88%;
          left: 78%;
          animation-delay: 1.2s;
          animation-duration: 14s;
        }
        .particle:nth-child(27) {
          top: 32%;
          left: 12%;
          animation-delay: 6.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(28) {
          top: 58%;
          left: 68%;
          animation-delay: 0.2s;
          animation-duration: 18s;
        }
        .particle:nth-child(29) {
          top: 8%;
          left: 48%;
          animation-delay: 3.8s;
          animation-duration: 10s;
        }
        .particle:nth-child(30) {
          top: 92%;
          left: 28%;
          animation-delay: 5.5s;
          animation-duration: 15s;
        }
        .particle:nth-child(31) {
          top: 28%;
          left: 78%;
          animation-delay: 2.5s;
          animation-duration: 12s;
        }
        .particle:nth-child(32) {
          top: 72%;
          left: 18%;
          animation-delay: 4.5s;
          animation-duration: 9s;
        }
        .particle:nth-child(33) {
          top: 38%;
          left: 38%;
          animation-delay: 1.5s;
          animation-duration: 17s;
        }
        .particle:nth-child(34) {
          top: 82%;
          left: 58%;
          animation-delay: 6.2s;
          animation-duration: 13s;
        }
        .particle:nth-child(35) {
          top: 22%;
          left: 82%;
          animation-delay: 0.8s;
          animation-duration: 11s;
        }
        .particle:nth-child(36) {
          top: 62%;
          left: 52%;
          animation-delay: 3.5s;
          animation-duration: 16s;
        }
        .particle:nth-child(37) {
          top: 48%;
          left: 2%;
          animation-delay: 5.8s;
          animation-duration: 8s;
        }
        .particle:nth-child(38) {
          top: 98%;
          left: 72%;
          animation-delay: 2.8s;
          animation-duration: 14s;
        }
        .particle:nth-child(39) {
          top: 2%;
          left: 92%;
          animation-delay: 4.2s;
          animation-duration: 10s;
        }
        .particle:nth-child(40) {
          top: 52%;
          left: 32%;
          animation-delay: 1.8s;
          animation-duration: 18s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.8;
          }
        }

        .neural-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.12) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridFlow 20s linear infinite;
          z-index: 1;
          opacity: 0.7;
        }

        @keyframes gridFlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Main Content Container */
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        /* Top Section - Photo and Title */
        .hero-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 420px;
          column-gap: 4rem;
          align-items: stretch;
          grid-auto-rows: auto;
          margin-bottom: 3rem;
        }

        .hero-column {
          grid-column: 1;
          grid-row: 1 / span 4;
          max-width: 640px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-intro {
          animation: slideInLeft 1s ease-out;
        }

        .hero-summary {
          animation: fadeInUp 1s ease-out 0.15s both;
        }

        .executive-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 255, 136, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 255, 136, 0);
          }
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
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 2rem;
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

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Call-to-Action Section */
        .hero-cta-section {
          width: 100%;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .cta-buttons {
          display: grid;
          grid-template-columns: repeat(4, minmax(160px, 1fr));
          gap: 0.75rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
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

        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-color: rgba(0, 212, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-button.secondary:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
          transform: translateY(-2px);
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

        .cta-icon {
          font-size: 1.1rem;
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Hero Stats */
        .hero-stats {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(140px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0 0;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .stat-item:hover {
          transform: translateY(-3px);
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.2);
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Photo Side - Glassmorphism */
        .photo-container {
          position: relative;
          animation: slideInRight 1s ease-out;
          grid-column: 2;
          grid-row: 1 / span 4;
          align-self: stretch;
          justify-self: end;
        }

        .photo-glassmorphism::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(30, 144, 255, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-glassmorphism:hover::before {
          opacity: 1;
        }

        .photo-glassmorphism:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .photo-frame {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/5;
        }

        .professional-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .photo-glassmorphism:hover .professional-photo {
          transform: scale(1.05);
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 1.5rem;
          color: white;
        }

        .photo-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .photo-role {
          font-size: 0.9rem;
          color: #00d4ff;
        }

        /* AI-themed decorative elements */
        .photo-glassmorphism {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
        }

        /* What Makes Me Different Section - Glassmorphism */
        .differentiators-section {
          margin: 4rem 0;
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .differentiators-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .differentiators-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.05), transparent);
          animation: shimmer 4s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        .differentiators-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .rocket-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 1rem;
          animation: rocketBounce 2s ease-in-out infinite;
        }

        @keyframes rocketBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .header-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .differentiators-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .differentiator-item {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .differentiator-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #1e90ff);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .differentiator-item:hover::before {
          transform: scaleX(1);
        }

        .differentiator-item:hover {
          transform: translateY(-5px);
          background: rgba(0, 212, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 15px 30px rgba(0, 212, 255, 0.15);
        }

        .item-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #00d4ff;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .item-emoji {
          font-size: 1.2rem;
          animation: emojiTwinkle 2s ease-in-out infinite;
        }

        @keyframes emojiTwinkle {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .item-text {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0;
        }


        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
          }

          .hero-top {
            order: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            text-align: center;
          }

          .hero-column {
            order: 1;
            width: 100%;
            max-width: 640px;
            display: contents;
          }

          .hero-intro {
            order: 1;
            max-width: 640px;
            width: 100%;
            margin: 0 auto;
          }

          .photo-container {
            order: 2;
            width: 100%;
            max-width: 360px;
          }

          .photo-glassmorphism {
            margin: 0 auto;
          }

          .hero-summary {
            order: 3;
            max-width: 640px;
            text-align: left;
            width: 100%;
            margin: 0 auto;
          }

          .hero-cta-section {
            order: 4;
            width: 100%;
            max-width: 640px;
            align-items: stretch;
            margin: 0 auto;
          }

          .cta-buttons {
            grid-template-columns: repeat(2, minmax(160px, 1fr));
          }

          .differentiators-section {
            order: 5;
          }

          .hero-stats {
            order: 6;
            max-width: 640px;
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            margin: 0 auto;
          }

          .hero-title {
            font-size: 3rem;
          }

          .differentiators-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 6.5rem 0 2.5rem;
          }

          .hero-container {
            padding: 0 1rem;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .photo-container {
            max-width: 280px;
            margin: 0 auto;
          }

          .cta-buttons {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .cta-button {
            justify-content: center;
            padding: 0.875rem 1.25rem;
          }

          .hero-stats {
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 0.75rem;
          }

          .stat-item {
            padding: 0.75rem;
          }

          .stat-number {
            font-size: 1.25rem;
          }

          .differentiators-glass {
            padding: 2rem;
          }

          .differentiator-item {
            padding: 1.5rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

        }
      `}</style>
    </>
  );
};

export default HeroSection;
