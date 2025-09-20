'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const HeroSection = () => {
  const [counts, setCounts] = useState({
    value: 0,
    users: 0,
    roi: 0,
    years: 0,
  });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const animateCounts = () => {
      const duration = reduced ? 0 : 2000;
      const steps = reduced ? 1 : 60;
      const stepDuration = duration / steps;

      const targets = { value: 400, users: 27, roi: 250, years: 16 };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          value: Math.floor(targets.value * progress),
          users: Math.floor(targets.users * progress),
          roi: Math.floor(targets.roi * progress),
          years: Math.floor(targets.years * progress),
        });

        if (currentStep >= steps) clearInterval(interval);
      }, stepDuration);
    };

    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <>
      <style jsx global>{`
        body {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          background: #0a0e27;
          color: white;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          padding: 5rem 0 2rem 0; /* Add top padding to account for fixed navigation */
          overflow: hidden;
          background: transparent; /* Let universal background show through */
        }

        /* Floating particles removed - using universal background */

        /* Random positioning for more natural feel */
        .particle:nth-child(1) {
          top: 12%;
          left: 8%;
          animation-delay: 0s;
          animation-duration: 6s;
        }
        .particle:nth-child(2) {
          top: 28%;
          left: 18%;
          animation-delay: 0.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(3) {
          top: 45%;
          left: 32%;
          animation-delay: 1s;
          animation-duration: 10s;
        }
        .particle:nth-child(4) {
          top: 62%;
          left: 48%;
          animation-delay: 1.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(5) {
          top: 78%;
          left: 65%;
          animation-delay: 2s;
          animation-duration: 9s;
        }
        .particle:nth-child(6) {
          top: 88%;
          left: 82%;
          animation-delay: 2.5s;
          animation-duration: 11s;
        }
        .particle:nth-child(7) {
          top: 22%;
          left: 92%;
          animation-delay: 3s;
          animation-duration: 6s;
        }
        .particle:nth-child(8) {
          top: 38%;
          left: 78%;
          animation-delay: 3.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(9) {
          top: 55%;
          left: 62%;
          animation-delay: 4s;
          animation-duration: 10s;
        }
        .particle:nth-child(10) {
          top: 72%;
          left: 42%;
          animation-delay: 4.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(11) {
          top: 85%;
          left: 22%;
          animation-delay: 5s;
          animation-duration: 9s;
        }
        .particle:nth-child(12) {
          top: 95%;
          left: 5%;
          animation-delay: 5.5s;
          animation-duration: 11s;
        }
        .particle:nth-child(13) {
          top: 8%;
          left: 25%;
          animation-delay: 6s;
          animation-duration: 6s;
        }
        .particle:nth-child(14) {
          top: 18%;
          left: 45%;
          animation-delay: 6.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(15) {
          top: 35%;
          left: 58%;
          animation-delay: 7s;
          animation-duration: 10s;
        }
        .particle:nth-child(16) {
          top: 52%;
          left: 72%;
          animation-delay: 7.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(17) {
          top: 68%;
          left: 88%;
          animation-delay: 8s;
          animation-duration: 9s;
        }
        .particle:nth-child(18) {
          top: 82%;
          left: 95%;
          animation-delay: 8.5s;
          animation-duration: 11s;
        }
        .particle:nth-child(19) {
          top: 5%;
          left: 68%;
          animation-delay: 9s;
          animation-duration: 6s;
        }
        .particle:nth-child(20) {
          top: 15%;
          left: 85%;
          animation-delay: 9.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(21) {
          top: 42%;
          left: 12%;
          animation-delay: 10s;
          animation-duration: 10s;
        }
        .particle:nth-child(22) {
          top: 58%;
          left: 28%;
          animation-delay: 10.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(23) {
          top: 75%;
          left: 38%;
          animation-delay: 11s;
          animation-duration: 9s;
        }
        .particle:nth-child(24) {
          top: 92%;
          left: 52%;
          animation-delay: 11.5s;
          animation-duration: 11s;
        }
        .particle:nth-child(25) {
          top: 25%;
          left: 35%;
          animation-delay: 12s;
          animation-duration: 6s;
        }
        .particle:nth-child(26) {
          top: 48%;
          left: 55%;
          animation-delay: 12.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(27) {
          top: 65%;
          left: 75%;
          animation-delay: 13s;
          animation-duration: 10s;
        }
        .particle:nth-child(28) {
          top: 82%;
          left: 88%;
          animation-delay: 13.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(29) {
          top: 95%;
          left: 15%;
          animation-delay: 14s;
          animation-duration: 9s;
        }
        .particle:nth-child(30) {
          top: 8%;
          left: 38%;
          animation-delay: 14.5s;
          animation-duration: 11s;
        }

        @keyframes sparkleFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translate(-15px, -25px) scale(1.3) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translate(20px, -40px) scale(0.8) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translate(8px, -20px) scale(1.1) rotate(270deg);
            opacity: 0.9;
          }
        }

        /* Enhanced twinkling effect */
        .particle::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 212, 255, 0.4) 0%,
            transparent 60%
          );
          animation: twinkle 1.5s infinite ease-in-out;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        /* Neural grid removed - using universal background */
        @keyframes gridFlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
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
          gap: 1.2rem;
          animation: slideInLeft 1s ease-out;
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

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 15;
          /* Add subtle background to improve readability */
          padding: 0.5rem 1rem;
          border-radius: 12px;
          background-color: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(3px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .gradient-text {
          background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #1e90ff 50%,
            #00d4ff 100%
          );
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

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .floating-particles {
            animation: none !important;
          }
          .particle {
            animation: none !important;
          }
          .kpi-stat {
            animation: none !important;
          }
          .differentiator-item {
            animation: none !important;
          }
          .cta-button {
            animation: none !important;
          }
          .gradient-text {
            animation: none !important;
          }
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
          font-weight: 500;
          white-space: nowrap;
          position: relative;
          z-index: 15;
          /* Add subtle background to improve readability */
          padding: 0.3rem 0.8rem;
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          position: relative;
          z-index: 15;
          /* Add subtle background to improve readability */
          padding: 0.8rem 1rem;
          border-radius: 10px;
          background-color: rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(2px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .gradient-highlight {
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
          font-weight: 600;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: 0.3s;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          flex: 1;
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
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s;
        }
        .cta-button:hover::before {
          left: 100%;
        }
        .cta-button.primary {
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: #fff;
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

        .photo-container {
          position: relative;
          animation: slideInRight 1s ease-out;
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
          width: 320px;
          height: 500px;
        }
        .professional-photo {
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
          color: #fff;
        }
        .photo-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .photo-role {
          font-size: 1rem;
          color: #00d4ff;
          font-weight: 600;
        }

        /* ===== Individual KPI Glass Boxes ===== */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .kpi-box {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .kpi-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }
        .kpi-box:hover::before {
          left: 100%;
        }
        .kpi-box:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
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

        /* Differentiators */
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
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .rocket-icon {
          font-size: 2rem;
          animation: rocketTakeoff 3s ease-in-out infinite;
        }
        @keyframes rocketTakeoff {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(-5deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
        .header-text {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
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
          transition: 0.3s;
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
          color: #fff;
          margin-bottom: 1rem;
        }
        .item-icon {
          width: 24px;
          height: 24px;
          fill: url(#blueGradient);
        }
        .item-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        /* Hide mobile layout by default (this was the bug) */
        .mobile-layout {
          display: none;
        }

        /* Hide mobile KPI grid on desktop */
        .mobile-kpi-grid {
          display: none;
        }

        /* Mobile tweaks */
        .mobile-description {
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 0 1rem;
          }
          /* Hide desktop on mobile */
          .hero-top {
            display: none;
          }
          /* Show mobile layout */
          .mobile-layout {
            display: block;
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
            margin: 0 auto 2rem;
          }
          .mobile-photo .photo-frame {
            width: 280px;
            height: 350px;
          }

          .mobile-kpi-grid {
            display: grid;
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
        {/* SVG Gradient Definition */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#1e90ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Background elements removed - using universal background */}

        <div className="hero-container">
          {/* Desktop Layout */}
          <div className="hero-top">
            <div className="hero-content">
              <div className="hero-intro">
                <h1 className="hero-title">
                  Senior{' '}
                  <span className="gradient-text">
                    AI & Digital Transformation
                  </span>{' '}
                  Executive
                </h1>
                <p className="hero-subtitle">
                  Driving Fortune 500 digital transformation through AI, Data
                  Strategy, and client-centric products
                </p>
              </div>

              <div className="hero-summary">
                <p className="hero-description">
                  With{' '}
                  <span className="gradient-highlight">
                    16+ years of experience
                  </span>{' '}
                  <span className="gradient-highlight">
                    architecting enterprise-wide AI solutions
                  </span>
                  , I&apos;ve transformed complex technological challenges into
                  over{' '}
                  <span className="gradient-highlight">
                    $400M in measurable business outcomes
                  </span>
                  . From leading one of our organization&apos;s largest LLM
                  deployments in the payments space to building{' '}
                  <span className="gradient-highlight">
                    evangelical data communities of 30K+ users
                  </span>
                  , I bridge the gap between cutting-edge innovation and
                  practical enterprise implementation.
                </p>
              </div>

              {/* Desktop KPI Grid */}
              <div className="kpi-grid">
                <div className="kpi-box">
                  <span className="stat-number">${counts.value}M+</span>
                  <span className="stat-label">Value Delivered</span>
                </div>
                <div className="kpi-box">
                  <span className="stat-number">{counts.users}K+</span>
                  <span className="stat-label">AI Users</span>
                </div>
                <div className="kpi-box">
                  <span className="stat-number">{counts.roi}%</span>
                  <span className="stat-label">Typical ROI</span>
                </div>
                <div className="kpi-box">
                  <span className="stat-number">{counts.years}+</span>
                  <span className="stat-label">Years Leading</span>
                </div>
              </div>

              <div className="hero-cta-section">
                <div className="cta-buttons">
                  <a
                    href="mailto:contact@brandonmicci.com"
                    className="cta-button primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Let&apos;s Connect
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button outline"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>

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
                    <div className="photo-role">
                      VP, Head of NextGen AI/ML Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="mobile-layout">
            <div className="mobile-intro">
              <h1 className="mobile-title">
                Senior{' '}
                <span className="gradient-text">
                  AI & Digital Transformation
                </span>{' '}
                Executive
              </h1>
              <p className="mobile-subtitle">
                Driving Fortune 500 digital transformation through AI, Data
                Strategy, and client-centric products
              </p>
            </div>

            <div className="photo-container mobile-photo">
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
                    <div className="photo-role">
                      VP, Head of NextGen AI/ML Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-summary">
              <p className="hero-description mobile-description">
                With{' '}
                <span className="gradient-highlight">
                  16+ years of experience
                </span>{' '}
                <span className="gradient-highlight">
                  architecting enterprise-wide AI solutions
                </span>
                , I&apos;ve transformed complex technological challenges into
                over{' '}
                <span className="gradient-highlight">
                  $400M in measurable business outcomes
                </span>
                . From leading one of our organization&apos;s largest LLM
                deployments in the payments space to building{' '}
                <span className="gradient-highlight">
                  evangelical data communities of 30K+ users
                </span>
                , I bridge the gap between cutting-edge innovation and practical
                enterprise implementation.
              </p>
            </div>

            <div className="hero-cta-section" style={{ marginTop: '2rem' }}>
              <div className="cta-buttons">
                <a
                  href="mailto:contact@brandonmicci.com"
                  className="cta-button primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Let&apos;s Connect
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button outline"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  View Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* What Makes Me Different */}
          <div className="differentiators-section">
            <div className="differentiators-glass">
              <div className="differentiators-header">
                <span className="rocket-icon">🚀</span>
                <h2 className="header-text">What Makes Me Different</h2>
              </div>
              <div className="differentiators-grid">
                <div className="differentiator-item">
                  <h3 className="item-title">
                    <svg className="item-icon" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                    Scale Expertise
                  </h3>
                  <p className="item-text">
                    Led the largest LLM deployment in payments (27,000+ users)
                    and built global teams of 50+ professionals.
                  </p>
                </div>
                <div className="differentiator-item">
                  <h3 className="item-title">
                    <svg className="item-icon" viewBox="0 0 24 24">
                      <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z"/>
                    </svg>
                    Financial Impact
                  </h3>
                  <p className="item-text">
                    Consistent, outsized ROI—250%+ returns delivering $30M in
                    new revenue streams.
                  </p>
                </div>
                <div className="differentiator-item">
                  <h3 className="item-title">
                    <svg className="item-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Cross-Industry Innovation
                  </h3>
                  <p className="item-text">
                    Deep expertise across Financial Services, Insurance,
                    Airlines, Energy, and Life Sciences.
                  </p>
                </div>
                <div className="differentiator-item">
                  <h3 className="item-title">
                    <svg className="item-icon" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    Transformation Catalyst
                  </h3>
                  <p className="item-text">
                    AI evangelist who builds adoption communities that drive
                    organizational change at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile KPI Grid */}
          <div className="mobile-kpi-grid">
            <div className="kpi-box">
              <span className="stat-number">${counts.value}M+</span>
              <span className="stat-label">Value Delivered</span>
            </div>
            <div className="kpi-box">
              <span className="stat-number">{counts.users}K+</span>
              <span className="stat-label">AI Users</span>
            </div>
            <div className="kpi-box">
              <span className="stat-number">{counts.roi}%</span>
              <span className="stat-label">Typical ROI</span>
            </div>
            <div className="kpi-box">
              <span className="stat-number">{counts.years}+</span>
              <span className="stat-label">Years Leading</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
