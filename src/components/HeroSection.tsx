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
          min-height: 100dvh;
          padding: max(env(safe-area-inset-top), 4.5rem) 0 2rem 0;
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
        .btn :global(svg), .btn :global(.icon) { width: 18px; height: 18px; opacity: 0.95; }
        .btn.primary {
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: #07101d;
          box-shadow: 0 10px 30px -10px rgba(30,144,255,0.55);
        }
        .btn.primary:hover { transform: translateY(-1px); }
        .btn.outline {
          color: #9be8ff; /* cyan tint to match theme */
          border-color: rgba(0,212,255,0.45);
          background: linear-gradient(180deg, rgba(0,212,255,0.10), rgba(30,144,255,0.06));
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px -12px rgba(0,212,255,0.40);
        }
        .btn.outline:hover {
          background: linear-gradient(180deg, rgba(0,212,255,0.16), rgba(30,144,255,0.10));
          border-color: rgba(0,212,255,0.70);
          transform: translateY(-1px);
          box-shadow: 0 10px 30px -12px rgba(30,144,255,0.55);
        }

        /* ===== CTA LAYOUTS ===== */
        /* default: 2 buttons, left-aligned, compact */
        @media (min-width: 1024px) {
          .cta-row {
            grid-template-columns: repeat(2, max-content) !important;
            justify-content: start !important;
            gap: 1rem 1.25rem !important;
          }
        }

        /* 3rd button shows ONLY on wide desktop (soaks up whitespace nicely) */
        .show-xl { display: none; }
        @media (min-width: 1280px) {
          .show-xl { display: inline-flex; } /* makes the 3rd button appear */
          .cta-row.cta-3up-xl {
            grid-template-columns: repeat(3, max-content) !important;
            justify-content: start !important;
            gap: 1rem 1.25rem !important;
          }
        }

        /* === KPI grid: fixed columns per breakpoint, equal heights, no overflow === */
        .kpi-grid {
          display: grid;
          gap: clamp(0.8rem, 1.6vw, 1rem);
          width: 100%;
          align-items: stretch;
          box-sizing: border-box;
          margin-top: 0.25rem;
        }

        /* Force 4 across on wide desktop — never wraps */
        @media (min-width: 1280px) {
          .kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        /* Mid desktop (keeps cards readable) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1023px) {
          .kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        /* Mobile (explicit, though tablet rule already handles it) */
        @media (max-width: 768px) {
          .kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .kpi-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;                     /* centers number + label */
          min-height: clamp(120px, 12vw, 150px);      /* equal heights per row */
          padding: clamp(1rem, 1.6vw, 1.25rem);
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,212,255,0.22);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
        }

        /* Micro-typography keeps vertical rhythm tight */
        .stat-number {
          display: block;
          font-size: clamp(1.6rem, 3.8vw, 2.35rem);
          font-weight: 800;
          color: #00d4ff;
          line-height: 1; margin-bottom: 0.35rem;
          letter-spacing: -0.01em;
        }
        .stat-label {
          display: block;
          font-size: clamp(0.78rem, 1.6vw, 0.9rem);
          color: rgba(255,255,255,0.72);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Optional: avoid "jump" on hover so row baseline stays flat */
        .kpi-box:hover {
          transform: none; /* was translateY(-3px) */
          background: rgba(255,255,255,0.075);
          border-color: rgba(0,212,255,0.38);
          box-shadow: 0 10px 28px -12px rgba(0,212,255,0.35);
        }

        /* Differentiators block */
        .diff-wrap { 
          margin: 2rem 0 1.5rem; 
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

        /* Hide the 2nd KPI set on desktop */
        .kpi-mobile-only { display: none; }

        @media (max-width: 768px) {
          .hero-container { padding: 0 0.9rem; }
          .hero-top { display: none; }
          .mobile-layout { display: block; }

          /* More top padding to clear the fixed header nicely */
          .hero-section { padding-top: max(env(safe-area-inset-top), 5.25rem) !important; }

          /* Constrain measure so lines don't feel wall-to-wall */
          .mobile-intro { 
            max-width: 38ch; 
            margin-inline: auto; 
            text-align: center;
            padding: 0 0.25rem;
          }

          /* Slightly more space below the H1 */
          .mobile-intro h1 {
            margin: 0;
            margin-bottom: clamp(0.5rem, 2.5vw, 0.9rem) !important;
            font-weight: 800;
            line-height: 1.12;
            letter-spacing: -0.02em;
            font-size: clamp(1.45rem, 7.6vw, 2rem);
            text-shadow: 0 1px 6px rgba(0,0,0,0.25);
          }

          /* Guaranteed spacing for the photo wrapper */
          .hero-image { 
            margin-block: clamp(1.1rem, 6.5vw, 2.2rem) !important; 
          }

          /* A touch more space above tagline + comfy line-height */
          .mobile-dek { 
            margin-top: clamp(0.9rem, 4vw, 1.3rem) !important; 
            line-height: 1.58 !important; 
            font-size: clamp(0.95rem, 4.2vw, 1.05rem);
            color: rgba(255,255,255,0.9);
            font-weight: 700;
          }

          .cta-row { grid-template-columns: 1fr; gap: 0.7rem; margin-top: 1.4rem; }
          .stat-number { font-size: clamp(1.4rem, 8vw, 2rem); }
          .diff-grid { grid-template-columns: 1fr; justify-items: center; }
          .diff-wrap { padding: 0 1rem; }
          .diff-glass { margin: 0 auto; }

          /* Mobile: center the header perfectly */
          .diff-header {
            display: grid !important;          /* swap flex → grid on mobile */
            grid-auto-flow: row !important;
            place-items: center !important;    /* centers each child (icon + title) */
            justify-items: center !important;
            text-align: center !important;
            gap: 0.6rem !important;
            width: 100% !important;
          }

          .diff-header :global(svg),
          .diff-header :global(.icon) {
            display: block !important;
            margin: 0 auto !important;         /* make sure the icon itself is centered */
          }

          .diff-title {
            display: block !important;
            margin-inline: auto !important;    /* ensure the text node centers, independent of icon width */
            text-align: center !important;
          }

          /* Tighter card paddings & nicer rhythm */
          .diff-wrap { 
            padding-inline: clamp(0.75rem, 4vw, 1rem) !important; 
          }

          .diff-glass {
            padding: clamp(1rem, 4.5vw, 1.75rem) !important;   /* slightly tighter than desktop */
          }

          /* One column grid already set; tighten vertical gaps a bit */
          .diff-grid { 
            row-gap: clamp(0.9rem, 3.8vw, 1.25rem) !important;
          }

          /* Card interior spacing */
          .diff-item { 
            padding: clamp(0.85rem, 3.8vw, 1.05rem) clamp(0.9rem, 4.2vw, 1.25rem) !important;
            border-radius: 14px !important;                    /* a hair rounder reads cleaner on small screens */
            text-align: center !important; 
            width: 100% !important; 
            display: flex !important;
            justify-content: center !important;
          }

          /* Icon size up by ~1–2px and guaranteed centering */
          .diff-item .diff-item-content svg,
          .diff-item .diff-item-content :global(.icon) {
            width: clamp(30px, 9vw, 36px) !important;          /* ~32→34/36px at phone sizes */
            height: clamp(30px, 9vw, 36px) !important;
            display: block !important;
            margin: 0 auto !important;        /* ensure the icon is perfectly centered */
          }

          /* Tighter content gap inside each card */
          .diff-item .diff-item-content {
            display: grid !important;
            place-items: center !important;   /* centers both horizontally + vertically */
            text-align: center !important;
            gap: clamp(0.5rem, 3.2vw, 0.75rem) !important;
            width: 100% !important;
          }

          /* Micro-typography: maintain legibility without looking crowded */
          .diff-item h4 {
            font-size: clamp(1.05rem, 4.3vw, 1.2rem) !important;
            margin: 0.05rem 0 0.15rem 0 !important;
            line-height: 1.22 !important;
            text-align: center !important;
            width: 100% !important;
          }
          .diff-item p {
            font-size: clamp(0.93rem, 3.9vw, 1.05rem) !important;
            line-height: 1.55 !important;
            text-align: center !important;
            width: 100% !important;
          }

          /* Slightly more breathing room below the section header */
          .diff-header { 
            margin-bottom: clamp(1rem, 5vw, 1.25rem) !important; 
          }

          /* Show the 2nd KPI set ONLY on mobile */
          .kpi-mobile-only { display: grid; }
        }

        @media (max-width: 380px) {
          .mobile-intro h1 { font-size: clamp(1.35rem, 7vw, 1.9rem) !important; }
        }

        @media (max-width: 360px) {
          .hero-section { padding-top: max(env(safe-area-inset-top), 4.1rem); }
          .mobile-intro p { line-height: 1.42; }
        }

        /* === DESKTOP HERO ALIGNMENT v2 (non-destructive) === */
        @media (min-width: 1024px) {
          /* Solid two-column split that prevents the left stack from ever crossing the image */
          .hero-top {
            grid-template-columns: minmax(560px, 1fr) min(520px, 34vw) !important;
            gap: clamp(2.75rem, 3.5vw, 4rem) !important;
            align-items: center !important;             /* centers the image vertically vs the text stack */
          }

          /* Keep the copy column readable and aligned */
          .hero-content {
            display: flex !important;
            flex-direction: column !important;
            max-width: 62ch !important;                 /* keeps paragraph and CTAs inside the column */
            align-items: flex-start !important;
            text-align: left !important;
            overflow: hidden !important;                /* prevent content from spilling out */
            position: relative; z-index: 1;             /* ensure left column stays above image */
          }

          /* Reorder: KPI grid ABOVE the CTAs (H1 → dek → KPI → CTAs) */
          .dek { order: 10 !important; }
          .kpi-grid { order: 20 !important; margin-top: 1rem !important; margin-bottom: 1.1rem !important; }
          .cta-row { order: 30 !important; margin-top: 0.4rem !important; }

          /* CTAs: intrinsic width, left-aligned; they won't stretch past the image */
          .cta-row {
            grid-template-columns: repeat(2, max-content) !important;
            justify-content: start !important;
            gap: 1rem 1.25rem !important;
            max-width: 100% !important;
          }
          .cta-row .btn { white-space: nowrap; }

          /* KPI row: stay snug in the left column (auto-fit handles responsive columns) */
          .kpi-grid {
            width: 100% !important;
            max-width: 100% !important;                 /* prevent overflow */
            align-self: stretch !important;             /* uses the left column width exactly */
          }

          /* Image column: right-locked and vertically centered with whitespace above/below */
          .hero-top > *:last-child {
            width: min(520px, 34vw) !important;
            justify-self: end !important;               /* aligns to container's right edge */
            align-self: center !important;              /* sits midline vs the text stack */
          }
          .hero-top > *:last-child img,
          .hero-top > *:last-child svg,
          .hero-top > *:last-child canvas,
          .hero-top > *:last-child video {
            display: block !important;
            width: 100% !important;
            height: auto !important;
          }
        }

        /* Very wide desktops: keep proportions steady */
        @media (min-width: 1440px) {
          .hero-top {
            grid-template-columns: minmax(620px, 1fr) min(560px, 32vw) !important;
            gap: clamp(3rem, 4vw, 5rem) !important;
          }
        }

        /* Desktop: cap photo width a bit so it stays crisp on retina */
        @media (min-width: 1024px) {
          .hero-top {
            grid-template-columns: minmax(560px, 1fr) min(460px, 32vw) !important;
          }
          .hero-top > *:last-child {
            width: min(460px, 32vw) !important;
            justify-self: end !important;
            align-self: center !important;
          }
        }

        /* === START Desktop Hero Patch === */
        @media (min-width: 1024px) {
          /* 2-col layout: left copy gets room, right column (image) is capped */
          .hero-top {
            grid-template-columns: minmax(560px, 1fr) min(460px, 32vw) !important;
            gap: clamp(2.75rem, 3.5vw, 4rem) !important;
            align-items: center !important; /* centers image vertically vs text stack */
          }

          /* Keep the text stack strictly inside the left column */
          .hero-content {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            max-width: 62ch !important;     /* readable measure */
            text-align: left !important;
          }

          /* Order: H1 → paragraph (.dek) → KPI grid → CTA row */
          .dek { order: 10 !important; }
          .kpi-grid { order: 20 !important; margin-top: 1rem !important; margin-bottom: 1.1rem !important; }
          .cta-row { order: 30 !important; margin-top: 0.4rem !important; }

          /* CTAs: intrinsic width, don't stretch past image column */
          .cta-row {
            grid-template-columns: repeat(2, max-content) !important;
            justify-content: start !important;
            gap: 1rem 1.25rem !important;
            max-width: 100% !important;
          }
          .cta-row .btn { white-space: nowrap; }

          /* Image column: fixed cap + right aligned + vertically centered */
          .hero-top > *:last-child {
            width: min(460px, 32vw) !important;
            justify-self: end !important;
            align-self: center !important;
          }
          .hero-top > *:last-child img,
          .hero-top > *:last-child svg,
          .hero-top > *:last-child canvas,
          .hero-top > *:last-child video {
            display: block !important;
            width: 100% !important;
            height: auto !important;
          }
        }

        /* XL screens: keep proportions steady */
        @media (min-width: 1440px) {
          .hero-top {
            grid-template-columns: minmax(620px, 1fr) min(560px, 32vw) !important;
            gap: clamp(3rem, 4vw, 5rem) !important;
          }
        }
        /* === END Desktop Hero Patch === */

        /* === START Wide-Desktop 3rd CTA === */
        .show-xl { display: none; }
        @media (min-width: 1280px) {
          .show-xl { display: inline-flex; }
          .cta-row.cta-3up-xl {
            grid-template-columns: repeat(3, max-content) !important;
          }
        }
        /* === END Wide-Desktop 3rd CTA === */
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

              <div className="cta-row cta-3up-xl">
                <a href="#connectwithme" className="btn primary">
                  <Icon name="mail" size="md" className="icon text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  Let&apos;s Connect
                </a>
                <a href="/BrandonMicciSeniorAIExecutive.pdf" target="_blank" rel="noopener noreferrer" className="btn outline">
                  <Icon name="file" size="md" className="icon text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.4)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                  Download Resume
                </a>
                {/* Wide-desktop only: appears at ≥1280px via .show-xl */}
                <a href="/executive-brief.pdf" target="_blank" rel="noopener noreferrer" className="btn outline show-xl">
                  <Icon name="briefcase" size="md" className="icon text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.4)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                  Executive Brief
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

              {/* Wrap to ensure spacing hooks apply */}
              <div className="hero-image">
                <HeroImage />
              </div>

              <p className="mobile-dek">
                Over <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>16+ years</span> delivering
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> $400M+ value</span>, scaling to
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> 27K+ users</span>, driving ROI across
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}> Fortune 500</span>.
              </p>
            </div>

            <div className="cta-row">
              <a href="#connectwithme" className="btn primary">
                <Icon name="mail" size="md" className="icon text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                Let&apos;s Connect
              </a>
              <a href="/BrandonMicciSeniorAIExecutive.pdf" target="_blank" rel="noopener noreferrer" className="btn outline">
                <Icon name="file" size="md" className="icon text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.4)] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* ——— DIFFERENTIATORS ——— */}
        <div className="diff-wrap">
          <div className="diff-glass">
            <div className="diff-header">
              <span className="diff-title">What Makes Me Different</span>
            </div>

            <div className="diff-grid">
              {/* Card 1 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="linechart"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scale Expertise</h4>
                    <p>Led the largest LLM deployment in payments (27,000+ users) and built global teams of 50+.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="barchart"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Financial Impact</h4>
                    <p>Consistent 250%+ ROI, delivering $30M in new continuous revenue streams.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="globe"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cross-Industry Innovation</h4>
                    <p>Depth across Financial Services, Insurance, Airlines, Energy, and Life Sciences.</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="sparkle"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transformation Catalyst</h4>
                    <p>Builds adoption communities that drive organizational change at scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile KPI Grid (mobile-only) */}
          <div className="kpi-grid kpi-mobile-only" style={{ marginTop: '1.25rem' }}>
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