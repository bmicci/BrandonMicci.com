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
    <section
      id="executive-experience"
      className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
    >
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-500/30 via-slate-950/0 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-blue-500/25 via-slate-950/0 to-transparent"
        aria-hidden
      />
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" aria-hidden />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-semibold uppercase text-cyan-300/80"
            style={{ letterSpacing: '0.35em' }}
          >
            Career Journey
          </p>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Executive Experience
            </span>
          <p className="mt-4 text-base leading-relaxed text-slate-300/80 sm:text-lg">
            Strategic leadership roles spanning AI, analytics, and large-scale transformation across global enterprises.
        <div className="relative mt-16">
          <div
            className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent sm:left-8"
            aria-hidden
          />
          <ul className="space-y-12">

                <li key={role.id} className="relative pl-12 sm:pl-16">
                  <div className="absolute left-3 top-6 -translate-x-1/2 sm:left-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 text-xl text-white shadow-lg ring-2 ring-cyan-400/40">
                  <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur lg:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-4">
                        <div
                          className="text-xs font-semibold uppercase text-cyan-200/80"
                          style={{ letterSpacing: '0.25em' }}
                        >
                          <h3 className="text-2xl font-semibold text-white lg:text-3xl">{role.title}</h3>
                              className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100"
                      <div className="hidden w-full max-w-xl gap-4 lg:grid lg:grid-cols-2">
                        {role.achievements.map((achievement) => (
                          <div
                            key={achievement.title}
                            className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/40"
                          >
                            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                              <span className="text-base text-cyan-300">→</span>
                              {achievement.title}
                            <p className="mt-2 text-sm leading-relaxed text-slate-200">
                              {achievement.desktopText}
                            </p>
                          </div>
                        ))}
                    <div className="lg:hidden">
                        className="mt-6 flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-white"
                          className={`transform text-lg transition-transform ${
                            isOpen ? 'rotate-90 text-cyan-300' : 'text-slate-300/80'
                          }`}
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? `${role.achievements.length * 160}px` : '0px' }}
                                <span className="text-base text-cyan-300">→</span>
                              <p className="mt-2 text-sm text-slate-200">{achievement.mobileText}</p>
          .skill-pills::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 3px; }
          .skill-pills::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.5); border-radius: 3px; }
          .skill-pill { font-size: .65rem; padding: .2rem .5rem; white-space: nowrap; flex-shrink: 0; }
          .achievement-list { gap: .6rem; }
          .achievement-card { padding: .8rem; border-radius: 8px; }
          .achievement-title { font-size: .95rem; margin-bottom: .3rem; }
          .achievement-arrow { font-size: 1rem; }
          .achievement-text { font-size: .9rem; line-height: 1.4; }

          /* show the toggle on mobile */
          .mobile-achievement-toggle { display: block; }
        }

        /* ========= Extra Small ========= */
        @media (max-width: 480px) {
          .timeline-header { padding: 1rem .5rem .5rem; }
          .timeline-title { font-size: 1.5rem; }
          .timeline-subtitle { font-size: .9rem; }
          .timeline-container { padding: .25rem; }
          .timeline-item { padding-left: 40px; margin-bottom: 1.2rem; }
          .timeline-node { width: 35px; height: 35px; left: -2px; }
          .timeline-node::before { width: 50px; height: 50px; }
          .timeline-content { padding: .8rem; }
          .timeline-role { font-size: 1rem; }
          .timeline-company { font-size: .85rem; }
          .achievement-card { padding: .6rem; }
          .achievement-title { font-size: .9rem; }
          .achievement-text { font-size: .85rem; }
        }

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