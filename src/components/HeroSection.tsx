'use client';

import React, { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { Icon } from '@/components/ui/Icon';
import HeroImage from './HeroImage';

const HeroSection = () => {
  const [counts, setCounts] = useState({ value: 0, users: 0, roi: 0, years: 0 });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const duration = reduced ? 0 : 1800;
    const steps = reduced ? 1 : 60;
    const stepDuration = duration / steps;
    const targets = { value: 400, users: 27, roi: 250, years: 16 };
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const p = currentStep / steps;
      setCounts({
        value: Math.floor(targets.value * p),
        users: Math.floor(targets.users * p),
        roi: Math.floor(targets.roi * p),
        years: Math.floor(targets.years * p),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <>
      {/* ——— GLOBAL (light-touch) ——— */}
      <style jsx global>{`
        /* Keep global light to avoid bleeding into other sections */
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0a0e27;
          color: white;
          margin: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ——— HERO ——— */}
      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100dvh; /* modern mobile safe height */
          padding: max(env(safe-area-inset-top), 4.5rem) 0 2rem 0; /* clear fixed header */
          overflow: hidden;
          background: transparent;
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 10;
        }

        /* Desktop top grid */
        .hero-top {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 3.5rem;
          align-items: start;
          margin-bottom: 1.5rem;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Headline & copy (desktop base) */
        .headline {
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 0.25rem 0;
          font-size: clamp(2rem, 4.6vw, 3.5rem);
          text-shadow: 0 1px 6px rgba(0,0,0,0.25);
        }
        .gradient {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 55%, #00d4ff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease-in-out infinite;
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .dek {
          margin-top: 0.5rem;
          color: rgba(255,255,255,0.92);
          line-height: 1.6;
          font-weight: 600;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }

        /* CTA group */
        .cta-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
          margin: 1.25rem 0 1.75rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border: 1.5px solid transparent;
          font-size: clamp(0.95rem, 2.4vw, 1rem);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          will-change: transform;
        }
        .btn svg { width: 18px; height: 18px; opacity: 0.95; }
        .btn.primary {
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: #07101d;
          box-shadow: 0 10px 30px -10px rgba(30,144,255,0.55);
        }
        .btn.primary:hover { transform: translateY(-1px); }
        .btn.outline {
          background: rgba(255,255,255,0.06);
          color: #d7f7ff;
          border-color: rgba(0,212,255,0.35);
          backdrop-filter: blur(6px);
        }
        .btn.outline:hover {
          background: rgba(255,255,255,0.09);
          border-color: #00d4ff;
          transform: translateY(-1px);
        }

        /* KPI boxes */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.9rem;
          margin-top: 0.25rem;
        }
        .kpi-box {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,212,255,0.22);
          border-radius: 16px;
          padding: 1.25rem 0.9rem;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .kpi-box:hover { transform: translateY(-3px); background: rgba(255,255,255,0.075); border-color: rgba(0,212,255,0.38); }
        .stat-number {
          display: block;
          font-size: clamp(1.6rem, 3.8vw, 2.35rem);
          font-weight: 800;
          color: #00d4ff;
          margin-bottom: 0.35rem;
          letter-spacing: -0.01em;
        }
        .stat-label {
          display: block;
          font-size: clamp(0.78rem, 1.6vw, 0.9rem);
          color: rgba(255,255,255,0.72);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Differentiators block */
        .diff-wrap { 
          margin: 3rem 0 1.5rem; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          width: 100%; 
        }
        .diff-glass {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(0,212,255,0.22);
          border-radius: 20px;
          padding: clamp(1.25rem, 3vw, 2.25rem);
          backdrop-filter: blur(10px);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .diff-header {
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 0.8rem; 
          margin-bottom: 1.5rem;
          padding: 1rem 0;
          position: relative;
        }
        .diff-title {
          font-size: clamp(1.5rem, 4.2vw, 2.4rem);
          font-weight: 900;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 50%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
          letter-spacing: -0.02em;
          position: relative;
          text-align: center;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.9rem, 2.5vw, 1.5rem);
        }
        .diff-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: clamp(0.9rem, 2.8vw, 1.25rem);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .diff-item:hover { transform: translateY(-2px); background: rgba(255,255,255,0.08); border-color: rgba(0,212,255,0.35); }
        .diff-item h4 {
          margin: 0; font-weight: 700; font-size: clamp(1rem, 2.4vw, 1.15rem);
        }
        .diff-item p {
          margin: 0.4rem 0 0; color: #cbd5e1; line-height: 1.55; font-size: clamp(0.9rem, 2.2vw, 1rem);
        }

        /* Mobile overrides */
        .mobile-layout { display: none; }

        @media (max-width: 768px) {
          .hero-container { padding: 0 0.9rem; }
          .hero-top { display: none; }         /* hide desktop grid on mobile */
          .mobile-layout { display: block; }
          .mobile-intro {
            max-width: 680px;
            margin: 0 auto;
            text-align: center;
            padding: 0 0.25rem;
          }
          .mobile-intro h1 {
            margin: 0;
            font-weight: 800;
            line-height: 1.12;
            letter-spacing: -0.02em;
            /* Fluid headline specifically for small screens */
            font-size: clamp(1.45rem, 7.6vw, 2rem);
            text-shadow: 0 1px 6px rgba(0,0,0,0.25);
          }
          .mobile-intro p {
            margin-top: 0.65rem;
            line-height: 1.5;
            font-size: clamp(0.95rem, 4.2vw, 1.05rem);
            color: rgba(255,255,255,0.9);
            font-weight: 700;
          }
          .cta-row { grid-template-columns: 1fr; gap: 0.7rem; margin-top: 1.4rem; }
          .kpi-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .stat-number { font-size: clamp(1.4rem, 8vw, 2rem); }
          .diff-grid { grid-template-columns: 1fr; }
          .diff-wrap { padding: 0 1rem; }
          .diff-glass { margin: 0 auto; }
        }

        /* Very small phones (SE) */
        @media (max-width: 360px) {
          .hero-section { padding-top: max(env(safe-area-inset-top), 4.1rem); }
          .mobile-intro p { line-height: 1.42; }
        }
      `}</style>

      <div className="hero-section">
        {/* SVG for gradient fills (icons) */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#1e90ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>

        <div className="hero-container">
          {/* ——— DESKTOP ——— */}
          <div className="hero-top">
            <div className="hero-content">
              <h1 className="headline">
                Senior <span className="gradient">AI & Digital</span>{' '}
                <span className="gradient">Transformation</span> Executive
              </h1>

              <p className="dek">
                Over <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>16+ years</span> as a proven
                leader delivering <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>$400M+ in enterprise value</span>,
                scaling solutions to <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>27K+ users</span>, and achieving breakthrough ROI across
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> Fortune 500 organizations</span>. I translate complex AI strategies into measurable outcomes for
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> C-suite stakeholders</span>.
              </p>

              <div className="cta-row">
                <a href="mailto:contact@brandonmicci.com" className="btn primary">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  Let&apos;s Connect
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>
                  Download Resume
                </a>
              </div>

              <div className="kpi-grid">
                <div className="kpi-box"><span className="stat-number">${counts.value}M+</span><span className="stat-label">Value Delivered</span></div>
                <div className="kpi-box"><span className="stat-number">{counts.users}K+</span><span className="stat-label">AI Users</span></div>
                <div className="kpi-box"><span className="stat-number">{counts.roi}%</span><span className="stat-label">Typical ROI</span></div>
                <div className="kpi-box"><span className="stat-number">{counts.years}+</span><span className="stat-label">Years Leading</span></div>
              </div>
            </div>

            <HeroImage />
          </div>

          {/* ——— MOBILE ——— */}
          <div className="mobile-layout">
            <div className="mobile-intro">
              <h1>
                Senior <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>AI & Digital</span><br />
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>Transformation</span> Executive
              </h1>
              <p>
                Over <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>16+ years</span> delivering
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> $400M+ value</span>, scaling to
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> 27K+ users</span>, driving ROI across
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> Fortune 500</span>.
              </p>
            </div>

            <HeroImage />

            <div className="cta-row">
              <a href="mailto:contact@brandonmicci.com" className="btn primary">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Let&apos;s Connect
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* ——— DIFFERENTIATORS ——— */}
        <div className="diff-wrap">
          <div className="diff-glass">
            <div className="diff-header">
              <Icon name="sparkle" size="lg" className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
              <span className="diff-title">What Makes Me Different</span>
            </div>

            <div className="diff-grid">
              <div className="diff-item">
                <div className="flex items-start gap-4">
                  <Icon name="linechart" size="lg" className="w-8 h-8 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] flex-shrink-0 text-cyan-400" />
                  <div>
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scale Expertise</h4>
                    <p>Led the largest LLM deployment in payments (27,000+ users) and built global teams of 50+.</p>
                  </div>
                </div>
              </div>

              <div className="diff-item">
                <div className="flex items-start gap-4">
                  <Icon name="barchart" size="lg" className="w-8 h-8 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] flex-shrink-0 text-cyan-400" />
                  <div>
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Financial Impact</h4>
                    <p>Consistent 250%+ ROI, delivering $30M in new continuous revenue streams.</p>
                  </div>
                </div>
              </div>

              <div className="diff-item">
                <div className="flex items-start gap-4">
                  <Icon name="globe" size="lg" className="w-8 h-8 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] flex-shrink-0 text-cyan-400" />
                  <div>
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cross-Industry Innovation</h4>
                    <p>Depth across Financial Services, Insurance, Airlines, Energy, and Life Sciences.</p>
                  </div>
                </div>
              </div>

              <div className="diff-item">
                <div className="flex items-start gap-4">
                  <Icon name="sparkle" size="lg" className="w-8 h-8 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] flex-shrink-0 text-cyan-400" />
                  <div>
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transformation Catalyst</h4>
                    <p>Builds adoption communities that drive organizational change at scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile KPI Grid (kept after differentiators for short-scroll punch) */}
          <div className="kpi-grid" style={{ marginTop: '1.25rem' }}>
            <div className="kpi-box"><span className="stat-number">${counts.value}M+</span><span className="stat-label">Value Delivered</span></div>
            <div className="kpi-box"><span className="stat-number">{counts.users}K+</span><span className="stat-label">AI Users</span></div>
            <div className="kpi-box"><span className="stat-number">{counts.roi}%</span><span className="stat-label">Typical ROI</span></div>
            <div className="kpi-box"><span className="stat-number">{counts.years}+</span><span className="stat-label">Years Leading</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;