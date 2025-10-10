'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import HeroImage from './HeroImage';
import AnimatedCounter from '@/components/AnimatedCounter';
import { METRICS } from '@/lib/metrics';

const HeroSection = () => {

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
        /* iPad Pro: ensure hero section doesn't enforce screen-height causing gap */
        @media (min-width:1024px) and (max-width:1279px){
          .hero-section{ min-height:auto; padding-bottom: 0.5rem; }
        }
        /* Desktop: reduce top padding and bottom spacing */
        @media (min-width:1280px){
          .hero-section{ padding-top: max(env(safe-area-inset-top), 4.5rem) !important; padding-bottom: 0.5rem !important; }
          .kpi-grid { margin-bottom: 0 !important; }
        }
        /* iPad Pro: avoid oversized blank space on the next section */
      `}</style>

      {/* ——— HERO ——— */}
      <style jsx>{`
        .hero-section {
          position: relative;
          /* Stable viewport height avoids URL bar reflow jump */
          min-height: 100svh;
          padding: max(env(safe-area-inset-top), 4.5rem) 0 2rem 0;
          overflow: hidden;
          background: transparent;
          /* Prevent descendant layout/paint from bubbling reflow up to sections */
          contain: layout paint;
          /* Disable scroll anchoring in case the browser tries to “help” mid-paint */
          overflow-anchor: none;
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-inline: clamp(1rem, 3vw, 2rem);
          position: relative;
          z-index: 10;
        }

        /* Full-width header at top */
        .hero-header {
          width: 100%;
          text-align: left;
          margin-bottom: 1.1rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Content box below header */
        .hero-content-box {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 2.25rem;
          align-items: start;
          margin-bottom: 0.75rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Ensure desktop layout is visible on larger screens */
        @media (min-width: 769px) {
          .hero-content-box { display: grid !important; }
          .mobile-layout { display: none !important; }
          .hero-header { display: block !important; }
        }
        /* Reduce excessive bottom whitespace on iPad Pro by relaxing section height */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hero-section { min-height: auto; }
        }
        /* Tablet (iPad) layout tuning */
        @media (min-width: 769px) and (max-width: 1023px) {
          .hero-content-box {
            grid-template-columns: 1fr 280px;
            gap: 2rem;
            align-items: start;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        /* iPad Air/Mini specific optimizations */
        @media (min-width: 768px) and (max-width: 820px) {
          .hero-header {
            margin-bottom: 2rem;
          }
          .hero-content-box {
            grid-template-columns: 1fr 240px;
            gap: 2rem;
            max-width: 100%;
            padding: 0 1rem;
          }
          .headline {
            font-size: clamp(1.4rem, 4vw, 2.2rem);
            margin-bottom: 0.75rem;
          }
          .dek {
            font-size: clamp(0.95rem, 1.8vw, 1.15rem);
            line-height: 1.5;
            margin-bottom: 1rem;
          }
          .cta-row {
            gap: 0.75rem 1rem;
            margin-bottom: 1rem;
          }
          .kpi-grid {
            gap: clamp(0.5rem, 1vw, 0.7rem);
            margin-top: 0.75rem;
          }
          .kpi-box {
            min-height: clamp(90px, 8vw, 110px);
            padding: clamp(0.8rem, 1.4vw, 1rem) clamp(1rem, 1.8vw, 1.2rem);
          }
          .stat-number {
            font-size: clamp(1.1rem, 10cqw, 1.4rem);
          }
          .stat-label {
            font-size: clamp(0.65rem, 1.2vw, 0.75rem);
          }
        }

        /* iPad Air portrait only: use mobile layout; avoid mini and pro */
        /* Robust match for iPad Air portrait (allow minor rounding) */
        @media (min-width: 810px) and (max-width: 830px) and (orientation: portrait) {
          .hero-section { min-height: auto; padding-bottom: 1rem; }
          .hero-header { display: none !important; }
          .hero-content-box { display: none !important; }
          .mobile-layout { display: block !important; }
          /* Title: single line, centered; size tuned to fit */
          .mobile-intro { max-width: 100% !important; text-align: center !important; padding-inline: clamp(0.75rem, 3vw, 1rem) !important; }
          .mobile-intro h1 { 
            font-size: clamp(2.3rem, 5vw, 2.8rem) !important; 
            white-space: nowrap !important; 
            margin-bottom: 0.9rem !important; 
            text-align: center !important; 
            letter-spacing: -0.02em !important;
            line-height: 1.12 !important;
            font-weight: 800 !important;
          }
          /* Larger hero image, but not overpowering */
          .mobile-layout :global(.hi-card) { width: clamp(300px, 54vw, 360px) !important; height: clamp(330px, 56vw, 420px) !important; }
          /* Add spacing around the image wrapper */
          .hero-image { margin-block: clamp(1rem, 4vw, 1.8rem) !important; }
          /* Larger subtitle/paragraph */
          .mobile-dek { font-size: clamp(1.18rem, 2.6vw, 1.35rem) !important; line-height: 1.64 !important; max-width: 62ch !important; margin-inline: auto !important; text-align: center !important; font-weight: 700 !important; }
          /* Stack CTAs on Air portrait and center width */
          .cta-row { grid-template-columns: 1fr !important; max-width: 560px !important; margin-inline: auto !important; row-gap: 0.7rem !important; }
        }
          .headline { 
            font-size: clamp(1.2rem, 3.5vw, 2.5rem);
            white-space: normal; /* allow wrapping on tighter tablet widths */
            overflow-wrap: anywhere;
            width: 100%;
            text-align: left;
          }
          .dek { font-size: clamp(0.95rem, 1.4vw, 1.05rem); }
          .cta-row { grid-template-columns: repeat(2, max-content); justify-content: start; gap: 0.85rem 1rem; }
          .kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; }
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .headline {
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 0.4rem 0;
          font-size: clamp(1.6rem, 3.8vw, 2.8rem);
          text-shadow: 0 1px 6px rgba(0,0,0,0.25);
          white-space: normal !important; /* default to wrapping; desktop handled below */
          overflow-wrap: anywhere !important;
          width: 100% !important;
          text-align: left !important;
          overflow: visible !important;
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
          margin-top: 0.25rem;
          color: rgba(255,255,255,0.92);
          line-height: 1.4;
          font-weight: 600;
          font-size: clamp(1.1rem, 1.9vw, 1.35rem);
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }
        

        /* CTA group */
        .cta-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
          margin: 1rem 0 1.25rem;
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
        .btn.primary{
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color:#07101d; /* dark text on bright cyan */
        }
        .btn.primary:hover{ transform: translateY(-1px); }

        .btn.outline{
          color:#9be8ff; 
          border-color: rgba(0,212,255,0.45);
          background: linear-gradient(180deg, rgba(0,212,255,0.10), rgba(30,144,255,0.06));
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px -12px rgba(0,212,255,0.40);
        }
        .btn.outline:hover{
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
            gap: 0.9rem 1.1rem !important;
          }
          /* Desktop readability tweaks */
          .hero-content .dek { max-width: 62ch; }
          .headline { white-space: normal !important; text-wrap: balance; }
          .btn { padding: 1rem 1.2rem; font-size: 1.05rem; }
          .kpi-grid { margin-top: 0.6rem !important; }
          .stat-label { letter-spacing: 0.04em; }
        }

        /* 3rd CTA visibility: show for iPad Pro and up */
        .show-xl { display: none; }
        @media (min-width: 1024px) {
          .show-xl { display: inline-flex; }
          .cta-row.cta-3up-xl {
            grid-template-columns: repeat(3, max-content) !important;
            justify-content: start !important;
            gap: 1rem 1.25rem !important;
          }
        }

        /* === KPI grid: fixed columns, equal heights, no overflow === */
        .kpi-grid {
          display: grid;
          gap: clamp(0.6rem, 1.2vw, 0.8rem);
          width: 100%;
          align-items: stretch;
          box-sizing: border-box;
          margin-top: 0.35rem;
        }

        /* Wide desktop: 4-up */
        @media (min-width: 1280px) {
          .kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        /* iPad Pro / small desktop: keep KPIs 4-up so they stay on one line */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        /* Tablet/Mobile: 2-up */
        @media (max-width: 1023px) {
          .kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .kpi-box {
          /* container units let the number scale with CARD width */
          container-type: inline-size;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;             /* centers the whole stack */
          gap: clamp(0.25rem, 0.8vw, 0.5rem);    /* consistent gap between number/label */

          min-height: clamp(100px, 10vw, 130px);
          padding: clamp(1rem, 1.6vw, 1.25rem) clamp(1.2rem, 2.2vw, 1.5rem);
          border-radius: 16px;

          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,212,255,0.22);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
          overflow: hidden;                     /* belt & suspenders */
        }

        /* === KPI number: single centered element (robust, no grid quirks) === */
        .stat-number{
          display:block;
          width:100%;
          text-align:center;
          line-height:1;
          white-space:nowrap;
          font-weight:800;
          color:#00d4ff;
          font-feature-settings:"tnum" 1, "lnum" 1;
          letter-spacing:0;
          font-size:clamp(1.4rem, 14cqw, 1.9rem);
        }
        /* 4-up desktop sizing */
        @media (min-width:1280px){ .stat-number{ font-size:clamp(1.3rem, 12cqw, 1.7rem); } }
        @media (min-width:1440px){ .stat-number{ font-size:clamp(1.4rem, 13cqw, 1.8rem); } }

        /* Label centering and equal height */
        .stat-label{
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          font-size:clamp(0.7rem, 1.4vw, 0.8rem);
          color:rgba(255,255,255,0.72);
          text-transform:uppercase;
          letter-spacing:0.06em;
          line-height:1.3;
          min-height:calc(2 * 1.3em);
        }

        /* Safety: padding counts toward width everywhere */
        .kpi-box, .kpi-box *{ box-sizing:border-box; }

        /* Optional: avoid hover "jump" so row baseline stays flat */
        .kpi-box:hover {
          transform: none;
          background: rgba(255,255,255,0.075);
          border-color: rgba(0,212,255,0.38);
          box-shadow: 0 10px 28px -12px rgba(0,212,255,0.35);
        }


        /* Differentiators block */
        .diff-wrap { 
          margin: 2rem 0 0.75rem;  /* slightly tighter to reduce the fold gap on desktop */
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          width: 100%; 
          padding-inline: 1rem;               /* align with hero side gutters on desktop */
        }
        /* iPad Pro: add safe side padding so the glass box doesn't hug edges */
        @media (min-width:1024px) and (max-width:1279px){
          .diff-wrap{ 
            padding-inline: clamp(1rem, 3vw, 1.5rem);
            margin: 1rem 0 0.75rem;
          }
          .diff-glass{ margin-inline:auto; }
        }
        /* Desktop: keep glass slightly narrower than hero container so it never feels too wide */
        @media (min-width:1280px){
          .diff-glass{ max-width: 1100px; }
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
          margin-bottom: 0.5rem; /* minimal spacing between title and cards */
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
          margin-top: 2rem; /* add top margin to create space from header */
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
          .hero-content-box { display: none !important; }
          .mobile-layout { display: block !important; }
          .hero-header { display: none !important; } /* Hide desktop header on mobile */
          .headline {
            font-size: clamp(1.1rem, 2.8vw, 1.8rem);
            white-space: nowrap;
            width: 100%;
            text-align: center;
          }

          /* Reduced top padding to clear the fixed header nicely */
          .hero-section { padding-top: max(env(safe-area-inset-top), 4.5rem) !important; }

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
            margin-top: 2.5rem !important; /* add top margin for mobile */
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

          /* Minimal spacing below the section header on mobile */
          .diff-header { 
            margin-bottom: 0.5rem !important; 
          }
          /* Tighten spacing after KPI grid on desktop */
          @media (min-width:1024px){
            .kpi-grid { margin-bottom: 0 !important; }
            .hero-content-box { margin-bottom: 0 !important; }
          }

          /* Show the 2nd KPI set ONLY on mobile */
          .kpi-mobile-only { display: grid; }
        }

        /* iPad Mini portrait: upscale mobile stack */
        @media (min-width: 740px) and (max-width: 770px) and (orientation: portrait) {
          .mobile-intro { max-width: 100% !important; text-align: center !important; padding-inline: clamp(0.75rem, 3vw, 1rem) !important; }
          .mobile-intro h1 { 
            font-size: clamp(2.2rem, 5.2vw, 2.7rem) !important; 
            white-space: nowrap !important; 
            margin-bottom: 0.9rem !important; 
            text-align: center !important; 
            letter-spacing: -0.02em !important;
            line-height: 1.12 !important;
            font-weight: 800 !important;
          }
          .mobile-layout :global(.hi-card) { width: clamp(280px, 58vw, 350px) !important; height: clamp(320px, 60vw, 410px) !important; }
          .hero-image { margin-block: clamp(1rem, 4vw, 1.8rem) !important; }
          .mobile-dek { font-size: clamp(1.16rem, 2.6vw, 1.32rem) !important; line-height: 1.62 !important; max-width: 62ch !important; margin-inline: auto !important; text-align: center !important; font-weight: 700 !important; }
          .cta-row { grid-template-columns: 1fr !important; max-width: 540px !important; margin-inline: auto !important; row-gap: 0.7rem !important; }
        }

        @media (max-width: 380px) {
          .mobile-intro h1 { font-size: clamp(1.35rem, 7vw, 1.9rem) !important; }
        }

        @media (max-width: 360px) {
          .hero-section { padding-top: max(env(safe-area-inset-top), 4.1rem); }
          .mobile-intro p { line-height: 1.42; }
        }

        /* Desktop photo column: smaller, and caption centered */
        @media (min-width:1024px){
          .hero-content-box{
            grid-template-columns: 1fr 280px !important; /* Reduced: text gets more space, image smaller */
            gap: 2.1rem !important;
            align-items: start !important;
            max-width: 1200px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-content-box > *:last-child{
            width: min(280px, 22vw) !important; /* Smaller image to align with KPI bottom */
            justify-self: end !important;
            align-self: center !important;

            display:flex;
            flex-direction:column;
            align-items:center;        /* centers inner content (including caption) */
          }
        }
        /* Large desktop: even tighter spacing */
        @media (min-width:1440px){
          .hero-content-box{
            grid-template-columns: 1fr 260px !important; /* Even smaller on large screens */
            gap: 2.5rem !important;
          }
          .hero-content-box > *:last-child{
            width: min(260px, 18vw) !important;
          }
        }

          /* Center common caption/overlay elements inside the image card */
          .hero-content-box > *:last-child figcaption,
          .hero-content-box > *:last-child .caption,
          .hero-content-box > *:last-child .overlay,
          .hero-content-box > *:last-child .overlay-card{
            width:100%;
            max-width:100%;
            margin:0.5rem auto 0;
            text-align:center;
          }

          /* If the caption/overlay is absolutely positioned, force true center */
          .hero-content-box > *:last-child .overlay,
          .hero-content-box > *:last-child .overlay-card{
            left:50% !important;
            transform:translateX(-50%) !important;
          }
        }
        @media (min-width:1440px){
          .hero-content-box{
            grid-template-columns: minmax(700px, 1fr) minmax(300px, 380px) !important; /* scales nicely on big screens */
            max-width: 1400px !important;
          }
          .headline {
            font-size: clamp(2.2rem, 3.2vw, 2.8rem) !important;
            white-space: nowrap !important; /* single-line on large desktop only */
            max-width: 100%;
          }
          .btn { padding: 1.05rem 1.3rem; font-size: 1.06rem; }
        }

        /* === START iPad Pro + Desktop 3rd CTA === */
        .show-xl { display: none; }
        @media (min-width: 1024px) {
          .show-xl { display: inline-flex; }
          .cta-row.cta-3up-xl {
            grid-template-columns: repeat(3, max-content) !important;
          }
        }
        /* === END iPad Pro + Desktop 3rd CTA === */


      `}</style>

      <div className="hero-section hero-stable">
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
          {/* Full-width header at top */}
          <div className="hero-header">
            <h1 className="headline">
              <span className="gradient">AI & Digital Transformation Executive</span>
            </h1>
          </div>

          {/* Content box below header */}
          <div className="hero-content-box">
            <div className="hero-content">
              <p className="dek">
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>Senior technology executive</span> with <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>16+ years</span> of experience delivering <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>$400M+ in enterprise value</span> through <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>AI & Digital Transformation</span> efforts, scaling <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>LLM deployments</span> to <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>27K+ users</span> across <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>Fortune 500 companies</span>.
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
                {/* Value Delivered */}
                <div className="kpi-box">
                  <span className="sr-only">${METRICS.valueDeliveredM}M+ Value Delivered</span>
                  <span className="stat-number">
                    <AnimatedCounter value={METRICS.valueDeliveredM} suffix="M+" format={(n) => `$${n}`} />
                  </span>
                  <span className="stat-label">Value Delivered</span>
                </div>

                {/* AI Users */}
                <div className="kpi-box">
                  <span className="sr-only">{METRICS.aiUsersK}K+ AI Users</span>
                  <span className="stat-number">
                    <AnimatedCounter value={METRICS.aiUsersK} suffix="K+" />
                  </span>
                  <span className="stat-label">AI Users</span>
                </div>

                {/* Typical ROI */}
                <div className="kpi-box">
                  <span className="sr-only">{METRICS.typicalROI}% Typical ROI</span>
                  <span className="stat-number">
                    <AnimatedCounter value={METRICS.typicalROI} suffix="%" />
                  </span>
                  <span className="stat-label">Typical ROI</span>
                </div>

                {/* Years Leading */}
                <div className="kpi-box">
                  <span className="sr-only">{METRICS.yearsLeading}+ Years Leading</span>
                  <span className="stat-number">
                    <AnimatedCounter value={METRICS.yearsLeading} suffix="+" />
                  </span>
                  <span className="stat-label">Years Leading</span>
                </div>
              </div>
            </div>

            <HeroImage />
          </div>

          {/* ——— MOBILE ——— */}
          <div className="mobile-layout">
            <div className="mobile-intro">
              <h1>
                <span className="gradient" style={{ WebkitTextFillColor: 'transparent' }}>AI & Digital Transformation Executive</span>
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
              <span className="diff-title">Leadership Differentiators</span>
            </div>

            <div className="diff-grid">
              {/* Card 1 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="rocket"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <div className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Visionary Leadership</div>
                    <p>Leading cutting-edge AI initiatives that reshape industries—from pioneering LLM deployments to building next-gen analytics platforms.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="zap"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <div className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Execution Excellence</div>
                    <p>Proven track record of turning ambitious visions into measurable results—consistently delivering on time, on budget, at scale.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="diff-item">
                <div className="diff-item-content grid place-items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:gap-4">
                  <Icon
                    name="target"
                    size="lg"
                    className="block w-8 h-8 flex-shrink-0 mx-auto md:mx-0 transition drop-shadow-none hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)] text-cyan-400"
                  />
                  <div className="w-full md:w-auto">
                    <div className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Strategic Thinking</div>
                    <p>C-suite advisory capabilities that translate complex AI strategies into clear business roadmaps and competitive advantages.</p>
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
                    <div className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovation Catalyst</div>
                    <p>Building transformative solutions that don&apos;t just solve today&apos;s problems—they anticipate tomorrow&apos;s opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer between Leadership Differentiators and next section */}
          {/* Spacer between Leadership Differentiators and next section - reduced for tighter layout */}
          <div style={{ height: '0.75rem' }}></div>

          {/* Mobile KPI Grid (mobile-only) */}
          <div className="kpi-grid kpi-mobile-only" style={{ marginTop: '1.25rem' }}>
            {/* Value Delivered */}
            <div className="kpi-box">
              <span className="sr-only">${METRICS.valueDeliveredM}M+ Value Delivered</span>
              <span className="stat-number">
                <AnimatedCounter value={METRICS.valueDeliveredM} suffix="M+" format={(n) => `$${n}`} />
              </span>
              <span className="stat-label">Value Delivered</span>
            </div>

            {/* AI Users */}
            <div className="kpi-box">
              <span className="sr-only">{METRICS.aiUsersK}K+ AI Users</span>
              <span className="stat-number">
                <AnimatedCounter value={METRICS.aiUsersK} suffix="K+" />
              </span>
              <span className="stat-label">AI Users</span>
            </div>

            {/* Typical ROI */}
            <div className="kpi-box">
              <span className="sr-only">{METRICS.typicalROI}% Typical ROI</span>
              <span className="stat-number">
                <AnimatedCounter value={METRICS.typicalROI} suffix="%" />
              </span>
              <span className="stat-label">Typical ROI</span>
            </div>

            {/* Years Leading */}
            <div className="kpi-box">
              <span className="sr-only">{METRICS.yearsLeading}+ Years Leading</span>
              <span className="stat-number">
                <AnimatedCounter value={METRICS.yearsLeading} suffix="+" />
              </span>
              <span className="stat-label">Years Leading</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
