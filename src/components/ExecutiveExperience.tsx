'use client';

import React, { useState } from 'react';

type Achievement = {
  title: string;
  text: string; // single source of truth for both desktop & mobile
};

type Role = {
  dates: string;
  role: string;
  company: string;
  icon: string;          // emoji for node
  skills: string[];
  achievements: Achievement[];
};

const ROLES: Role[] = [
  {
    dates: '2024 - PRESENT',
    role: 'VP, Head of NextGen AI/ML Solutions',
    company: 'JPMorgan Chase',
    icon: '🤖',
    skills: ['AI Strategy', 'LLM Deployment', 'Enterprise Architecture', 'Team Leadership'],
    achievements: [
      { title: 'Industry-Leading AI Deployment', text: 'Pioneered first-of-its-kind AI Assistant scaling to 27,000+ users across Payments—the largest LLM deployment in the payments industry.' },
      { title: 'Operational Excellence', text: 'Architected comprehensive AI strategy delivering 30% efficiency gains and 20% workforce optimization across operations.' },
      { title: 'Customer Impact', text: 'Deployed intelligent automation handling 40% of customer inquiries while reducing handle time by 300%.' },
    ],
  },
  {
    dates: '2022',
    role: 'Senior Director, Intelligent Industry GTM & Solution Leader',
    company: 'Capgemini',
    icon: '💡',
    skills: ['Go-to-Market Strategy', 'IoT Solutions', 'Product Management'],
    achievements: [
      { title: 'Market Dominance', text: 'Orchestrated go-to-market strategy achieving 34% market share increase in NextGen insurance solutions.' },
      { title: 'Fortune 50 Impact', text: 'Architected telematics solutions for Fortune 50 insurance providers, delivering 60% improvement in loss mitigation.' },
      { title: 'Platform Innovation', text: 'Launched Industry 4.0 IoT Platform integrating telematics, smart building monitoring, and wearables under a unified ecosystem.' },
    ],
  },
  {
    dates: '2021 - 2022',
    role: 'Senior Manager, Forensic Analytics & Data Science',
    company: 'Ernst & Young',
    icon: '📊',
    skills: ['Fraud Analytics', 'AI/ML', 'Business Development', 'Data Science'],
    achievements: [
      { title: 'Mega-Deal Success', text: 'Secured $400MM, 10-year strategic engagement with a global insurance leader, delivering real-time AI-powered fraud analytics.' },
      { title: 'Revenue Generation', text: 'Developed an Analytics-as-a-Service platform generating $30MM in new continuous annual revenue.' },
      { title: 'Capability Building', text: 'Led regional AI/ML talent development and established a forensic analytics Center of Excellence.' },
    ],
  },
  {
    dates: '2019 - 2021',
    role: 'IoT & Digital Innovation Leader',
    company: 'Southwest Airlines',
    icon: '🔌',
    skills: ['IoT Architecture', 'Cloud Migration', 'Digital Transformation'],
    achievements: [
      { title: 'Breakthrough ROI', text: 'Pioneered an IoT Fuel Savings pilot delivering 250% ROI within six months, generating $5.8M annual savings.' },
      { title: 'Cloud Transformation', text: 'Migrated 10+ legacy applications to the cloud in 6 months, reducing annual technology spend by $3.2M.' },
      { title: 'Infrastructure Modernization', text: 'Implemented IoT capabilities across 3 Fuel Farms, 7 Baggage Handling Systems, and 8 De-Icing Stations.' },
    ],
  },
  {
    dates: '2019',
    role: 'Data Enablement & Analytics COE Lead',
    company: 'Southwest Airlines',
    icon: '📈',
    skills: ['Data Analytics', 'COE Leadership', 'Platform Architecture'],
    achievements: [
      { title: 'Cost Optimization', text: 'Decommissioned hundreds of legacy dashboards across 5 platforms, reducing annual support costs by $5M.' },
      { title: 'Community Building', text: 'Built an evangelical Data Analyst Community scaling to 2,500+ users with 40% adoption increase.' },
      { title: 'Operational Excellence', text: 'Architected a Tier 1 production data environment achieving 100% availability for critical real-time operations.' },
    ],
  },
  {
    dates: '2017 - 2019',
    role: 'VP, Global Digital and Cloud Transformation Leader',
    company: 'Citigroup',
    icon: '🌐',
    skills: ['Cloud Architecture', 'DevOps', 'Global Programs', 'CI/CD'],
    achievements: [
      { title: 'Global Platform', text: 'Architected a global telemetry platform increasing environment stability to 98% across worldwide operations.' },
      { title: 'DevOps Acceleration', text: 'Evangelized DevOps transformation accelerating cloud enablement by 200% through CI/CD pipeline implementation.' },
      { title: 'Legacy Modernization', text: 'Drove modernization across legacy infrastructure stacks, establishing world-class performance standards.' },
    ],
  },
  {
    dates: '2016 - 2017',
    role: 'Risk Analytics Leader, Auto Finance & Home Loans',
    company: 'Capital One',
    icon: '⚡',
    skills: ['Risk Analytics', 'Compliance Tech', 'NLP/OCR'],
    achievements: [
      { title: 'Team Building', text: 'Built and led the first Risk & Analytics Reporting Team (7 analysts/engineers) with a dedicated Tableau environment.' },
      { title: 'Compliance Innovation', text: 'Implemented automated compliance testing with advanced NLP and real-time OCR scanning for regulatory requirements.' },
      { title: 'Risk Management', text: 'Created automated controls to detect emerging high-risk blind spots in real time.' },
    ],
  },
  {
    dates: '2016',
    role: 'Enterprise Analytics Leader, Risk & Compliance',
    company: 'Capital One',
    icon: '🎯',
    skills: ['Enterprise Analytics', 'Data Governance', 'Tableau'],
    achievements: [
      { title: 'Performance Optimization', text: 'Achieved 200% team output increase with 10 Data Engineers/Analysts, delivering 15+ enterprise risk dashboards.' },
      { title: 'Data Governance', text: 'Established an enterprise gold standard for Data Quality, enhancing organizational capability by 80%.' },
      { title: 'Cross-Functional Leadership', text: 'Led large-scale Tableau dashboard efforts as an internal consultant across enterprise functions.' },
    ],
  },
  {
    dates: '2015 - 2016',
    role: 'Center of Excellence Leader, Tableau & Big Data',
    company: 'Capital One',
    icon: '🚀',
    skills: ['Tableau COE', 'Big Data', 'Community Building', 'Executive Dashboards'],
    achievements: [
      { title: 'World Record Achievement', text: 'Established an enterprise Tableau COE driving adoption to 30,000+ users—one of the largest evangelical Tableau communities worldwide.' },
      { title: 'Executive Engagement', text: 'Appointed to develop top-of-house mobile dashboards for Capital One&apos;s CEO, Rich Fairbanks.' },
      { title: 'Platform Transformation', text: 'Led comprehensive big data platform transformation and legacy system modernization.' },
    ],
  },
  {
    dates: '2013 - 2014',
    role: 'Senior Consultant, Lead Data Analyst',
    company: 'Booz Allen Hamilton',
    icon: '🔍',
    skills: ['Data Analytics', 'Fraud Detection', 'Business Intelligence'],
    achievements: [
      { title: 'Department Creation', text: 'Built and led the firm&apos;s first Tableau Enterprise Data & Analytics department dedicated to fraud and compliance.' },
      { title: 'Solution Development', text: 'Led development of data analytics and BI solutions for government and commercial clients.' },
    ],
  },
  {
    dates: '2009 - 2013',
    role: 'Global Operations and Strategy Associate',
    company: 'PricewaterhouseCoopers',
    icon: '📋',
    skills: ['Strategy', 'Operations', 'Executive Analytics'],
    achievements: [
      { title: 'Executive Support', text: 'Served as Lead Analyst to the COO of Global Delivery, sole provider of performance metrics and dashboards.' },
      { title: 'Innovation Pioneer', text: 'Spearheaded the firm&apos;s first Tableau deployment for optimized dashboard automation.' },
    ],
  },
];

const ExecutiveExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <>
      <style jsx>{`
        /* ========= Base / Typography ========= */
        .timeline-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: transparent;
          color: #ffffff;
          position: relative;
          z-index: 10;
        }

        /* show same text everywhere; we no longer need mobile-short copy */
        .desktop-text { display: block; }
        .mobile-text { display: none; }

        .timeline-header { text-align: center; padding: 3rem 2rem 2rem; animation: fadeInDown 1s ease-out; }
        .timeline-title { font-size: 2.8rem; font-weight: 800; letter-spacing: -0.01em; margin-bottom: 1rem; }
        .timeline-title .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .timeline-subtitle { font-size: 1.2rem; color: rgba(255,255,255,0.8); max-width: 800px; margin: 0 auto; }

        .timeline-container { max-width: 1200px; margin: 0 auto; padding: 2rem; position: relative; z-index: 1; }

        /* ========= Timeline Line ========= */
        .timeline-line {
          position: absolute; left: 50px; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, transparent 0%, #00d4ff 10%, #1e90ff 50%, #00d4ff 90%, transparent 100%);
          z-index: 0;
          pointer-events: none; /* do not block taps */
        }
        .timeline-line::before {
          content: ''; position: absolute; top: -100%; left: 0; width: 100%; height: 100%;
          background: linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.8) 50%, transparent 100%);
          animation: scanLine 12s linear infinite;
        }
        @keyframes scanLine { 0% { top: -100%; } 100% { top: 100%; } }

        /* ========= Items ========= */
        .timeline-item { position: relative; padding-left: 100px; margin-bottom: 3rem; opacity: 0; transform: translateX(-30px); animation: slideInLeft .8s ease forwards; }
        .timeline-item:nth-child(1) { animation-delay: .1s; }
        .timeline-item:nth-child(2) { animation-delay: .2s; }
        .timeline-item:nth-child(3) { animation-delay: .3s; }
        .timeline-item:nth-child(4) { animation-delay: .4s; }
        .timeline-item:nth-child(5) { animation-delay: .5s; }
        .timeline-item:nth-child(6) { animation-delay: .6s; }
        .timeline-item:nth-child(7) { animation-delay: .7s; }
        .timeline-item:nth-child(8) { animation-delay: .8s; }
        .timeline-item:nth-child(9) { animation-delay: .9s; }
        .timeline-item:nth-child(10) { animation-delay: 1.0s; }
        .timeline-item:nth-child(11) { animation-delay: 1.1s; }

        .timeline-node {
          position: absolute; left: 30px; top: 20px; width: 40px; height: 40px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; z-index: 2;
          box-shadow: 0 0 20px rgba(0,212,255,0.6), inset 0 0 10px rgba(255,255,255,0.2);
          animation: pulse 2s ease-in-out infinite;
        }
        .timeline-node::before { content: ''; position: absolute; width: 60px; height: 60px; border: 2px solid rgba(0,212,255,0.3); border-radius: 50%; animation: ripple 2s ease-out infinite; }
        @keyframes pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.1);} }
        @keyframes ripple { 0%{ width:40px; height:40px; opacity:1;} 100%{ width:80px; height:80px; opacity:0;} }
          "Established enterprise Tableau COE driving adoption to 30,000+ users—the largest evangelical Tableau community worldwide.",
        mobileText: "30K+ users—world's largest Tableau community.",
          "Appointed to develop top-of-house mobile dashboards for Capital One's CEO, Rich Fairbanks.",
          background: rgba(255,255,255,0.025);           /* Option A: Tighter Glass */
          backdrop-filter: blur(14px);                    /* Option A */
          -webkit-backdrop-filter: blur(14px);            /* Option A */
          border-radius: 20px; padding: 2rem; position: relative; overflow: hidden; z-index: 2;
          transition: all .4s cubic-bezier(.175,.885,.32,1.275);
        }
        .timeline-content::before {
          content:''; position:absolute; inset:0; border-radius:20px; padding:1px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff); background-size:200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; opacity:.5; animation: gradientShift 4s ease infinite;
        }
        /* Option B: Sheen Overlay */
        .timeline-content::after{
          content:'';
          position:absolute; inset:0;
          background: linear-gradient(120deg, rgba(255,255,255,0.06), transparent 35% 65%, rgba(255,255,255,0.04));
          pointer-events:none;
          mix-blend-mode:screen;
        }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .timeline-content:hover { transform: translateX(10px) scale(1.02); background: rgba(255,255,255,0.045); box-shadow: 0 20px 40px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1); }
        .timeline-content:hover::before { opacity: 1; }

        .timeline-date { display:inline-block; background: linear-gradient(135deg,#00d4ff,#1e90ff); color:white; padding:.4rem 1rem; border-radius:20px; font-size:.85rem; font-weight:600; margin-bottom:1rem; text-transform:uppercase; letter-spacing:1px; }
        .timeline-role { font-size:1.6rem; font-weight:700; margin-bottom:.5rem; color:#fff; line-height:1.3; }
        .timeline-company { font-size:1.1rem; color:#00d4ff; margin-bottom:1rem; }

        .skill-pills { display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1.5rem; }
        .skill-pill { background: rgba(30,144,255,0.15); border:1px solid rgba(30,144,255,0.4); color:rgba(255,255,255,0.9); padding:.3rem .8rem; border-radius:15px; font-size:.75rem; font-weight:500; text-transform:uppercase; letter-spacing:.5px; transition:all .3s; }
        .skill-pill:hover { background: rgba(30,144,255,0.25); border-color:#1e90ff; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(30,144,255,0.3); }

        .achievement-list { display:flex; flex-direction:column; gap:1rem; }
        .achievement-card { background: rgba(0,212,255,0.08); border-left:3px solid #00d4ff; border-radius:10px; padding:1.2rem; position:relative; transition:all .3s; }
        .achievement-card:hover { background: rgba(0,212,255,0.12); transform: translateX(5px); box-shadow: 0 5px 20px rgba(0,212,255,0.2); }
        .achievement-title { display:flex; align-items:center; gap:.5rem; font-weight:600; color:#00d4ff; margin-bottom:.5rem; }
        .achievement-arrow { font-size:1.2rem; }
        .achievement-text { color: rgba(255,255,255,0.9); line-height:1.5; }

        /* ========= Mobile Toggle ========= */
        .mobile-achievement-toggle {
          display: none; /* shown on mobile via media query */
          background: rgba(0, 212, 255, 0.15);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
          padding: 0.6rem 1rem;      /* tighter */
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0.8rem 0;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          width: 100%;
          min-height: 40px;          /* tighter */
          user-select: none;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-achievement-toggle::after { content:' ▼'; transition: transform .3s; }
        .mobile-achievement-toggle[aria-expanded="true"]::after { transform: rotate(180deg); }
        .mobile-achievement-toggle:focus-visible { outline: 2px solid #00d4ff; outline-offset: 2px; }
        .mobile-achievement-toggle:hover { background: rgba(0, 212, 255, 0.25); transform: translateY(-1px); }
        .mobile-achievement-toggle:active { background: rgba(0, 212, 255, 0.35); transform: translateY(0); box-shadow: 0 0 20px rgba(0,212,255,0.4); }

        /* ========= Smooth Expand/Collapse (CSS-only) ========= */
        .mobile-achievement-content {
          display: grid;
          grid-template-rows: 1fr;                 /* expanded */
          transition: grid-template-rows .35s ease, opacity .25s ease;
    <section id="executive-experience" className="experience-section">
      <style jsx>{`
        .experience-section {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
          color: #f8fafc;
          background: radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.2), transparent 55%),
            radial-gradient(circle at 85% 120%, rgba(59, 130, 246, 0.18), transparent 60%), #050816;
        }
        .experience-section::before,
        .experience-section::after {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.45;
          pointer-events: none;
          transform: translate3d(0, 0, 0);
        }
        .experience-section::before {
          top: -160px;
          right: -80px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.32), transparent 70%);
        }
        .experience-section::after {
          bottom: -180px;
          left: -120px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.28), transparent 70%);
        }
        .section-content {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-subtitle {
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.75rem;
          color: rgba(165, 243, 252, 0.8);
          font-weight: 600;
        }
        .section-title {
          margin-top: 1rem;
          font-size: 2.75rem;
          line-height: 1.1;
          font-weight: 800;
          color: #e0f2fe;
          background: linear-gradient(120deg, #22d3ee 0%, #3b82f6 50%, #2563eb 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-description {
          margin: 1.25rem auto 0;
          max-width: 680px;
          color: rgba(203, 213, 225, 0.85);
          font-size: 1rem;
          line-height: 1.7;
        }
        .timeline {
          position: relative;
          padding-left: 1rem;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          left: 1.4rem;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.6) 35%, rgba(59, 130, 246, 0.55) 65%, transparent 100%);
          box-shadow: 0 0 22px rgba(14, 165, 233, 0.35);
          pointer-events: none;
        }
        .timeline-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .timeline-item {
          position: relative;
          padding-left: 3.5rem;
        }
        .timeline-icon {
          position: absolute;
          left: 0.1rem;
          top: 0.75rem;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(59, 130, 246, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 12px 32px rgba(14, 165, 233, 0.35);
          border: 1px solid rgba(125, 211, 252, 0.5);
        }
        .role-card {
          position: relative;
          background: rgba(7, 18, 41, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 28px;
          padding: 2rem;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(26px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .role-card::after {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 22px;
          border: 1px solid rgba(14, 165, 233, 0.08);
          pointer-events: none;
        }
        .role-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 70px rgba(14, 165, 233, 0.18);
          border-color: rgba(56, 189, 248, 0.35);
        }
        .role-meta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .role-dates {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(165, 243, 252, 0.7);
        }
        .role-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e2e8f0;
          margin: 0;
          line-height: 1.2;
        }
        .role-company {
          margin: 0;
          font-size: 1rem;
          color: rgba(203, 213, 225, 0.75);
        }
        .role-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .role-tag {
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: rgba(14, 165, 233, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: rgba(224, 242, 254, 0.85);
          text-transform: uppercase;
        }
        .desktop-only {
          display: none;
        }
        .achievement-card {
          border-radius: 18px;
          padding: 1rem;
          background: rgba(8, 23, 45, 0.88);
          border: 1px solid rgba(148, 163, 184, 0.15);
          box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.05);
        }
        .achievement-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: rgba(165, 243, 252, 0.92);
          margin-bottom: 0.35rem;
        }
        .achievement-title span {
          font-size: 1.2rem;
          color: rgba(56, 189, 248, 0.85);
        }
        .achievement-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(226, 232, 240, 0.85);
        }
        .mobile-only {
          margin-top: 1.5rem;
        }
        .accordion-toggle {
          width: 100%;
          border-radius: 14px;
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: rgba(15, 23, 42, 0.7);
          color: rgba(226, 232, 240, 0.9);
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .accordion-toggle:hover {
          border-color: rgba(56, 189, 248, 0.45);
          color: #f8fafc;
          transform: translateY(-2px);
        }
        .accordion-toggle .chevron {
          font-size: 1.3rem;
          line-height: 1;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .accordion-toggle[aria-expanded='true'] .chevron {
          transform: rotate(90deg);
          color: rgba(56, 189, 248, 0.8);
        }
        .accordion-panel {
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .accordion-panel.open {
          margin-top: 1rem;
        }
        .mobile-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .mobile-achievements .achievement-text {
          font-size: 0.9rem;
        }
        @media (min-width: 640px) {
          .section-title {
            font-size: 3.2rem;
          }
        }
        @media (min-width: 768px) {
          .experience-section {
            padding: 7rem 0;
          }
          .timeline {
            padding-left: 2rem;
          }
          .timeline-line {
            left: 2.3rem;
          }
          .timeline-item {
            padding-left: 5rem;
          }
          .timeline-icon {
            width: 3.75rem;
            height: 3.75rem;
            top: 1.6rem;
            left: 0.9rem;
            font-size: 1.7rem;
          }
          .role-card {
            padding: 2.25rem 2.5rem;
          }
          .role-title {
            font-size: 2rem;
          }
          .role-achievements {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1.25rem;
          }
          .desktop-only {
            display: grid;
          }
          .mobile-only {
            display: none;
          }
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 3.4rem;
          }
          .section-description {
            font-size: 1.05rem;
          }
          .role-card {
            padding: 2.5rem 2.75rem;
          }
        }
        @media (max-width: 600px) {
          .experience-section {
            padding: 5rem 0 4rem;
          }
          .timeline-item {
            padding-left: 3rem;
          }
          .timeline-icon {
            width: 2.9rem;
            height: 2.9rem;
            top: 0.9rem;
          }
          .role-card {
            padding: 1.75rem 1.5rem;
          }
          .role-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
      <div className="section-content">
        <header className="section-header">
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Executive Experience</h2>
          <p className="section-description">
            Strategic leadership roles spanning AI, analytics, and large-scale transformation across global enterprises.
        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          <ul className="timeline-list">
                <li key={role.id} className="timeline-item">
                  <div className="timeline-icon" aria-hidden="true">
                    <span>{role.icon ?? '💼'}</span>
                  <article className="role-card">
                    <div className="role-meta">
                      <span className="role-dates">{role.dates}</span>
                      <h3 className="role-title">{role.title}</h3>
                      <p className="role-company">{role.company}</p>
                      <div className="role-tags">
                        {role.skills.map((skill) => (
                          <span key={skill} className="role-tag">
                            {skill}
                          </span>
                        ))}
                    </div>
                    <div className="role-achievements desktop-only">
                      {role.achievements.map((achievement) => (
                        <div key={achievement.title} className="achievement-card">
                          <div className="achievement-title">
                            <span>→</span>
                            {achievement.title}
                          </div>
                          <p className="achievement-text">{achievement.desktopText}</p>
                      ))}
                    <div className="mobile-only">
                        className="accordion-toggle"
                        <span className="chevron">›</span>
                        className={`accordion-panel ${isOpen ? 'open' : ''}`}
                        style={{ maxHeight: isOpen ? `${role.achievements.length * 160}px` : '0px' }}
                        <div className="mobile-achievements">
                            <div key={achievement.title} className="achievement-card">
                              <div className="achievement-title">
                                <span>→</span>
                              <p className="achievement-text">{achievement.mobileText}</p>

        /* ========= Reduced Motion ========= */
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="timeline-wrapper">
        {/* Header */}
        <div className="timeline-header">
          <h2 className="timeline-title"><span className="gradient-text">Career Timeline</span></h2>
          <p className="timeline-subtitle desktop-text">
            15+ years of architecting enterprise AI solutions and driving digital transformation across Fortune 500 organizations
          </p>
          {/* Keep structure if you need it for later; hidden by CSS */}
          <p className="timeline-subtitle mobile-text">Same as desktop</p>
        </div>

        {/* Body */}
        <div className="timeline-container">
          <div className="timeline-line" />
          {ROLES.map((r, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-node"><span style={{ fontSize: '1.2rem' }}>{r.icon}</span></div>
              <div className="timeline-content">
                <span className="timeline-date">{r.dates}</span>
                <h3 className="timeline-role">{r.role}</h3>
                <div className="timeline-company">{r.company}</div>

                <div className="skill-pills">
                  {r.skills.map((s, k) => (
                    <span className="skill-pill" key={k}>{s}</span>
                  ))}
                </div>

                {/* Mobile toggle */}
                <button
                  className="mobile-achievement-toggle"
                  onClick={() => toggle(i)}
                  aria-expanded={expanded.has(i)}
                  aria-controls={`achievements-${i}`}
                >
                  {expanded.has(i) ? 'Hide Achievements' : 'View Achievements'}
                </button>

                {/* Collapsible content */}
                <div
                  id={`achievements-${i}`}
                  className={`mobile-achievement-content ${expanded.has(i) ? '' : 'collapsed'}`}
                >
                  <div className="achievement-list">
                    {r.achievements.map((a, j) => (
                      <div className="achievement-card" key={j}>
                        <div className="achievement-title">
                          <span className="achievement-arrow">→</span>
                          {a.title}
                        </div>
                        <div className="achievement-text">{a.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExecutiveExperience;