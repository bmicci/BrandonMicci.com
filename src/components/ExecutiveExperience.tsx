'use client';

import React, { useEffect, useState } from 'react';

const ExecutiveExperience: React.FC = () => {
  // State to track which achievements are expanded
  const [expandedAchievements, setExpandedAchievements] = useState<Set<number>>(new Set());

  // Toggle function for achievements
  const toggleAchievement = (index: number) => {
    console.log('Toggle clicked for index:', index); // Debug log
    setExpandedAchievements(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
        console.log('Collapsing index:', index); // Debug log
      } else {
        newSet.add(index);
        console.log('Expanding index:', index); // Debug log
      }
      console.log('New expanded set:', Array.from(newSet)); // Debug log
      return newSet;
    });
  };

  // No need for useEffect since we're using React state now

  return (
    <>
      <style jsx>{`
        /* Global styles for all timeline components */
        .timeline-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: transparent;
          color: #ffffff;
          position: relative;
          z-index: 10;
        }

        /* Timeline Header */
        .timeline-header {
          text-align: center;
          padding: 3rem 2rem 2rem;
          animation: fadeInDown 1s ease-out;
        }

        .timeline-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }

        .timeline-title .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto;
        }

        /* Timeline Container */
        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
        }

        /* Animated timeline line */
        .timeline-line {
          position: absolute;
          left: 50px;
          top: 0;
          bottom: 0; /* Ends at container bottom */
          width: 2px;
          background: linear-gradient(180deg, 
              transparent 0%, 
              #00d4ff 10%, 
              #1e90ff 50%, 
              #00d4ff 90%,
              transparent 100%); /* Fades at bottom for final section */
          z-index: 0;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(0, 212, 255, 0.8) 50%, 
            transparent 100%);
          animation: scanLine 12s linear infinite;
        }

        @keyframes scanLine {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* Timeline items */
        .timeline-item {
          position: relative;
          padding-left: 100px;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }
        .timeline-item:nth-child(7) { animation-delay: 0.7s; }
        .timeline-item:nth-child(8) { animation-delay: 0.8s; }
        .timeline-item:nth-child(9) { animation-delay: 0.9s; }
        .timeline-item:nth-child(10) { animation-delay: 1.0s; }
        .timeline-item:nth-child(11) { animation-delay: 1.1s; }

        /* Timeline node/orb */
        .timeline-node {
          position: absolute;
          left: 30px;
          top: 20px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 
            0 0 20px rgba(0, 212, 255, 0.6),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          animation: pulse 2s ease-in-out infinite;
        }

        .timeline-node::before {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          animation: ripple 2s ease-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes ripple {
          0% {
            width: 40px;
            height: 40px;
            opacity: 1;
          }
          100% {
            width: 80px;
            height: 80px;
            opacity: 0;
          }
        }

        /* Custom icon styles for PNG images */
        .custom-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Makes dark icons white */
          z-index: 1;
        }

        /* Timeline content card */
        .timeline-content {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Gradient border */
        .timeline-content::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          animation: gradientShift 4s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .timeline-content:hover {
          transform: translateX(10px) scale(1.02);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 20px 40px rgba(0, 212, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .timeline-content:hover::before {
          opacity: 1;
        }

        /* Date badge */
        .timeline-date {
          display: inline-block;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Job title and company */
        .timeline-role {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
          line-height: 1.3;
        }

        .timeline-company {
          font-size: 1.1rem;
          color: #00d4ff;
          margin-bottom: 1rem;
        }

        /* Skill pills */
        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .skill-pill {
          background: rgba(30, 144, 255, 0.15);
          border: 1px solid rgba(30, 144, 255, 0.4);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .skill-pill:hover {
          background: rgba(30, 144, 255, 0.25);
          border-color: #1e90ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(30, 144, 255, 0.3);
        }

        /* Achievement cards */
        .achievement-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .achievement-card {
          background: rgba(0, 212, 255, 0.08);
          border-left: 3px solid #00d4ff;
          border-radius: 10px;
          padding: 1.2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          background: rgba(0, 212, 255, 0.12);
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0, 212, 255, 0.2);
        }

        .achievement-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .achievement-arrow {
          font-size: 1.2rem;
        }

        .achievement-text {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        /* Mobile collapsible achievements */
        .mobile-achievement-toggle {
          display: none;
          background: rgba(0, 212, 255, 0.15);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          width: 100%;
        }

        .mobile-achievement-toggle:hover {
          background: rgba(0, 212, 255, 0.25);
          transform: translateY(-1px);
        }

        .mobile-achievement-toggle::after {
          content: ' ▼';
          transition: transform 0.3s ease;
        }

        .mobile-achievement-toggle.expanded::after {
          transform: rotate(180deg);
        }

        .mobile-achievement-content {
          display: block;
        }

        .mobile-achievement-content.collapsed {
          display: none;
        }

        /* Mobile text - hidden by default */
        .mobile-text {
          display: none;
        }

        /* Desktop text - shown by default */
        .desktop-text {
          display: block;
        }

        /* Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          /* Hide desktop text, show mobile text */
          .desktop-text {
            display: none;
          }
          .mobile-text {
            display: block;
          }
          .timeline-header {
            padding: 1.5rem 1rem 1rem;
          }
          .timeline-title {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          .timeline-subtitle {
            font-size: 0.9rem;
            line-height: 1.4;
          }
          .timeline-container {
            padding: 0.5rem;
          }
          .timeline-line {
            left: 15px;
          }
          .timeline-node {
            left: -5px;
            width: 30px;
            height: 30px;
          }
          .timeline-node::before {
            width: 45px;
            height: 45px;
          }
          .custom-icon {
            width: 16px;
            height: 16px;
          }
          .timeline-item {
            padding-left: 45px;
            margin-bottom: 1.5rem;
          }
          .timeline-role {
            font-size: 1.1rem;
            line-height: 1.2;
            margin-bottom: 0.3rem;
          }
          .timeline-company {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
          .timeline-date {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
            margin-bottom: 0.5rem;
          }
          .timeline-content {
            padding: 1rem;
            border-radius: 15px;
          }
          .skill-pills {
            margin-bottom: 0.8rem;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 0.2rem;
            -webkit-overflow-scrolling: touch;
          }
          .skill-pills::-webkit-scrollbar {
            height: 3px;
          }
          .skill-pills::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }
          .skill-pills::-webkit-scrollbar-thumb {
            background: rgba(0, 212, 255, 0.5);
            border-radius: 3px;
          }
          .skill-pill {
            font-size: 0.65rem;
            padding: 0.2rem 0.5rem;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .achievement-list {
            gap: 0.6rem;
          }
          .achievement-card {
            padding: 0.8rem;
            border-radius: 8px;
          }
          .achievement-title {
            font-size: 0.85rem;
            margin-bottom: 0.3rem;
          }
          .achievement-arrow {
            font-size: 1rem;
          }
          .achievement-text {
            font-size: 0.8rem;
            line-height: 1.3;
          }
          .mobile-achievement-toggle {
            display: block;
          }
          .mobile-achievement-content {
            display: block;
          }
          .mobile-achievement-content.collapsed {
            display: none;
          }
        }

        /* Extra small mobile devices */
        @media (max-width: 480px) {
          .timeline-header {
            padding: 1rem 0.5rem 0.5rem;
          }
          .timeline-title {
            font-size: 1.5rem;
          }
          .timeline-subtitle {
            font-size: 0.8rem;
          }
          .timeline-container {
            padding: 0.25rem;
          }
          .timeline-item {
            padding-left: 40px;
            margin-bottom: 1.2rem;
          }
          .timeline-node {
            width: 25px;
            height: 25px;
            left: -2px;
          }
          .timeline-node::before {
            width: 35px;
            height: 35px;
          }
          .timeline-content {
            padding: 0.8rem;
          }
          .timeline-role {
            font-size: 1rem;
          }
          .timeline-company {
            font-size: 0.8rem;
          }
          .achievement-card {
            padding: 0.6rem;
          }
          .achievement-title {
            font-size: 0.8rem;
          }
          .achievement-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
      
      <div className="timeline-wrapper">
        {/* Timeline Header */}
        <div className="timeline-header">
          <h2 className="timeline-title">
            <span className="gradient-text">Career Timeline</span>
          </h2>
          <p className="timeline-subtitle desktop-text">
            15+ years of architecting enterprise AI solutions and driving digital transformation across Fortune 500 organizations
          </p>
          <p className="timeline-subtitle mobile-text">
            15+ years in enterprise AI & digital transformation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Animated timeline line */}
          <div className="timeline-line"></div>

          {/* Position 1: JPMorgan Chase */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem'}}>🤖</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2024 - PRESENT</span>
              <h3 className="timeline-role">VP, Head of NextGen AI/ML Solutions</h3>
              <div className="timeline-company">JPMorgan Chase</div>
              <div className="skill-pills">
                <span className="skill-pill">AI Strategy</span>
                <span className="skill-pill">LLM Deployment</span>
                <span className="skill-pill">Enterprise Architecture</span>
                <span className="skill-pill">Team Leadership</span>
              </div>
              <button 
                className="mobile-achievement-toggle" 
                onClick={() => toggleAchievement(0)}
                style={{ 
                  backgroundColor: 'red', 
                  color: 'white', 
                  padding: '10px',
                  border: '2px solid yellow',
                  fontSize: '16px'
                }}
              >
                {expandedAchievements.has(0) ? 'Hide Achievements' : 'View Achievements'} (DEBUG)
              </button>
              <div className={`mobile-achievement-content ${expandedAchievements.has(0) ? '' : 'collapsed'}`}>
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Industry-Leading AI Deployment
                  </div>
                  <div className="achievement-text desktop-text">
                    Pioneered first-of-its-kind AI Assistant scaling to 27,000+ users across Payments—the largest LLM deployment in the payments industry
                  </div>
                  <div className="achievement-text mobile-text">
                    AI to 27K+ users—largest LLM in payments
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Operational Excellence
                  </div>
                  <div className="achievement-text desktop-text">
                    Architected comprehensive AI strategy delivering 30% efficiency gains and 20% workforce optimization across operations
                  </div>
                  <div className="achievement-text mobile-text">
                    30% efficiency, 20% workforce optimization
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Customer Impact
                  </div>
                  <div className="achievement-text desktop-text">
                    Deployed intelligent automation handling 40% of customer inquiries while reducing handle time by 300%
                  </div>
                  <div className="achievement-text mobile-text">
                    40% automated, 300% faster responses
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 2: Capgemini */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem'}}>💡</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2022</span>
              <h3 className="timeline-role">Senior Director, Intelligent Industry GTM & Solution Leader</h3>
              <div className="timeline-company">Capgemini</div>
              <div className="skill-pills">
                <span className="skill-pill">Go-to-Market Strategy</span>
                <span className="skill-pill">IoT Solutions</span>
                <span className="skill-pill">Product Management</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Market Dominance
                  </div>
                  <div className="achievement-text desktop-text">
                    Orchestrated go-to-market strategy achieving 34% market share increase in NextGen insurance solutions
                  </div>
                  <div className="achievement-text mobile-text">
                    34% market share increase in insurance
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Fortune 50 Impact
                  </div>
                  <div className="achievement-text desktop-text">
                    Architected telematics solutions for Fortune 50 insurance providers, delivering 60% improvement in loss mitigation
                  </div>
                  <div className="achievement-text mobile-text">
                    60% loss mitigation for Fortune 50
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Platform Innovation
                  </div>
                  <div className="achievement-text desktop-text">
                    Launched Industry 4.0 IoT Platform integrating telematics, smart building monitoring, wearables under unified ecosystem
                  </div>
                  <div className="achievement-text mobile-text">
                    Industry 4.0 IoT Platform launch
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 3: Ernst & Young */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem'}}>📊</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2021 - 2022</span>
              <h3 className="timeline-role">Senior Manager, Forensic Analytics & Data Science</h3>
              <div className="timeline-company">Ernst & Young</div>
              <div className="skill-pills">
                <span className="skill-pill">Fraud Analytics</span>
                <span className="skill-pill">AI/ML</span>
                <span className="skill-pill">Business Development</span>
                <span className="skill-pill">Data Science</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Mega-Deal Success
                  </div>
                  <div className="achievement-text desktop-text">
                    Secured $400MM, 10-year strategic engagement with global insurance leader, delivering real-time AI-powered fraud analytics
                  </div>
                  <div className="achievement-text mobile-text">
                    $400MM deal for AI fraud analytics
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Revenue Generation
                  </div>
                  <div className="achievement-text desktop-text">
                    Developed Analytics-as-a-Service platform generating $30MM in new continuous annual revenue
                  </div>
                  <div className="achievement-text mobile-text">
                    $30MM annual revenue from AaaS platform
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Capability Building
                  </div>
                  <div className="achievement-text desktop-text">
                    Led regional AI/ML talent development and established forensic analytics Center of Excellence
                  </div>
                  <div className="achievement-text mobile-text">
                    Built regional AI/ML Center of Excellence
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 4: Southwest Airlines IoT */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem'}}>🔌</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2019 - 2021</span>
              <h3 className="timeline-role">IoT & Digital Innovation Leader</h3>
              <div className="timeline-company">Southwest Airlines</div>
              <div className="skill-pills">
                <span className="skill-pill">IoT Architecture</span>
                <span className="skill-pill">Cloud Migration</span>
                <span className="skill-pill">Digital Transformation</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Breakthrough ROI
                  </div>
                  <div className="achievement-text desktop-text">
                    Pioneered IoT Fuel Savings pilot delivering 250% ROI within six months, generating $5.8M annual savings
                  </div>
                  <div className="achievement-text mobile-text">
                    250% ROI, $5.8M annual savings
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Cloud Transformation
                  </div>
                  <div className="achievement-text desktop-text">
                    Migrated 10+ legacy applications to cloud in 6 months, reducing annual technology spend by $3.2M
                  </div>
                  <div className="achievement-text mobile-text">
                    10+ apps migrated, $3.2M saved
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Infrastructure Modernization
                  </div>
                  <div className="achievement-text desktop-text">
                    Implemented IoT capabilities across 3 Fuel Farms, 7 Baggage Handling Systems, and 8 De-Icing Stations
                  </div>
                  <div className="achievement-text mobile-text">
                    IoT across 18 operational systems
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 5: Southwest Airlines Analytics */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>📈</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2019</span>
              <h3 className="timeline-role">Data Enablement & Analytics COE Lead</h3>
              <div className="timeline-company">Southwest Airlines</div>
              <div className="skill-pills">
                <span className="skill-pill">Data Analytics</span>
                <span className="skill-pill">COE Leadership</span>
                <span className="skill-pill">Platform Architecture</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Cost Optimization
                  </div>
                  <div className="achievement-text desktop-text">
                    Decommissioned hundreds of legacy dashboards across 5 platforms, reducing annual support costs by $5M
                  </div>
                  <div className="achievement-text mobile-text">
                    $5M cost reduction via platform consolidation
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Community Building
                  </div>
                  <div className="achievement-text desktop-text">
                    Built evangelical Data Analyst Community scaling to 2,500+ users with 40% adoption increase
                  </div>
                  <div className="achievement-text mobile-text">
                    2,500+ user community, 40% adoption
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Operational Excellence
                  </div>
                  <div className="achievement-text desktop-text">
                    Architected Tier 1 Production Data Environment achieving 100% availability for critical real-time operations
                  </div>
                  <div className="achievement-text mobile-text">
                    100% uptime for critical operations
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 6: Citigroup */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>🌐</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2017 - 2019</span>
              <h3 className="timeline-role">VP, Global Digital and Cloud Transformation Leader</h3>
              <div className="timeline-company">Citigroup</div>
              <div className="skill-pills">
                <span className="skill-pill">Cloud Architecture</span>
                <span className="skill-pill">DevOps</span>
                <span className="skill-pill">Global Programs</span>
                <span className="skill-pill">CI/CD</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Global Platform
                  </div>
                  <div className="achievement-text desktop-text">
                    Architected global telemetry platform increasing environment stability to 98% across worldwide operations
                  </div>
                  <div className="achievement-text mobile-text">
                    98% global platform stability achieved
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    DevOps Acceleration
                  </div>
                  <div className="achievement-text desktop-text">
                    Evangelized DevOps transformation accelerating cloud enablement by 200% through CI/CD pipeline implementation
                  </div>
                  <div className="achievement-text mobile-text">
                    200% faster cloud deployment via DevOps
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Legacy Modernization
                  </div>
                  <div className="achievement-text desktop-text">
                    Drove modernization across legacy infrastructure stacks, establishing world-class performance standards
                  </div>
                  <div className="achievement-text mobile-text">
                    Modernized legacy infrastructure globally
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 7: Capital One Risk Analytics */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>⚡</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2016 - 2017</span>
              <h3 className="timeline-role">Risk Analytics Leader, Auto Finance & Home Loans</h3>
              <div className="timeline-company">Capital One</div>
              <div className="skill-pills">
                <span className="skill-pill">Risk Analytics</span>
                <span className="skill-pill">Compliance Tech</span>
                <span className="skill-pill">NLP/OCR</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Team Building
                  </div>
                  <div className="achievement-text desktop-text">
                    Built and led first Risk & Analytics Reporting Team (7 analysts/engineers) with dedicated Tableau environment
                  </div>
                  <div className="achievement-text mobile-text">
                    Built 7-person analytics team from scratch
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Compliance Innovation
                  </div>
                  <div className="achievement-text desktop-text">
                    Implemented automated compliance testing with advanced NLP and real-time OCR scanning for regulatory requirements
                  </div>
                  <div className="achievement-text mobile-text">
                    Automated compliance via NLP/OCR tech
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Risk Management
                  </div>
                  <div className="achievement-text desktop-text">
                    Created automated controls to detect emerging high-risk blind spots in real-time
                  </div>
                  <div className="achievement-text mobile-text">
                    Real-time risk detection system built
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 8: Capital One Enterprise Analytics */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>🎯</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2016</span>
              <h3 className="timeline-role">Enterprise Analytics Leader, Risk & Compliance</h3>
              <div className="timeline-company">Capital One</div>
              <div className="skill-pills">
                <span className="skill-pill">Enterprise Analytics</span>
                <span className="skill-pill">Data Governance</span>
                <span className="skill-pill">Tableau</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Performance Optimization
                  </div>
                  <div className="achievement-text desktop-text">
                    Achieved 200% team output increase with 10 Data Engineers/Analysts, delivering 15+ enterprise risk dashboards
                  </div>
                  <div className="achievement-text mobile-text">
                    200% productivity, 15+ dashboards delivered
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Data Governance
                  </div>
                  <div className="achievement-text desktop-text">
                    Established enterprise gold standard for Data Quality, enhancing organizational capability by 80%
                  </div>
                  <div className="achievement-text mobile-text">
                    80% capability increase via data standards
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Cross-Functional Leadership
                  </div>
                  <div className="achievement-text desktop-text">
                    Led large-scale Tableau Dashboard efforts as internal consultant across enterprise functions
                  </div>
                  <div className="achievement-text mobile-text">
                    Enterprise-wide dashboard consulting
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 9: Capital One COE Leader */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>🚀</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2015 - 2016</span>
              <h3 className="timeline-role">Center of Excellence Leader, Tableau & Big Data</h3>
              <div className="timeline-company">Capital One</div>
              <div className="skill-pills">
                <span className="skill-pill">Tableau COE</span>
                <span className="skill-pill">Big Data</span>
                <span className="skill-pill">Community Building</span>
                <span className="skill-pill">Executive Dashboards</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    World Record Achievement
                  </div>
                  <div className="achievement-text desktop-text">
                    Established enterprise Tableau COE driving adoption to 30,000+ users—largest evangelical Tableau community worldwide
                  </div>
                  <div className="achievement-text mobile-text">
                    30K+ users—world&apos;s largest Tableau community
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Executive Engagement
                  </div>
                  <div className="achievement-text desktop-text">
                    Appointed to develop top-of-house mobile dashboards for Capital One&apos;s CEO, Rich Fairbanks
                  </div>
                  <div className="achievement-text mobile-text">
                    Built CEO dashboards for Rich Fairbanks
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Platform Transformation
                  </div>
                  <div className="achievement-text desktop-text">
                    Led comprehensive big data platform transformation and legacy system modernization
                  </div>
                  <div className="achievement-text mobile-text">
                    Big data platform transformation lead
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 10: Booz Allen Hamilton */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>🔍</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2013 - 2014</span>
              <h3 className="timeline-role">Senior Consultant, Lead Data Analyst</h3>
              <div className="timeline-company">Booz Allen Hamilton</div>
              <div className="skill-pills">
                <span className="skill-pill">Data Analytics</span>
                <span className="skill-pill">Fraud Detection</span>
                <span className="skill-pill">Business Intelligence</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Department Creation
                  </div>
                  <div className="achievement-text desktop-text">
                    Built and led the firm&apos;s first Tableau Enterprise Data & Analytics department dedicated to fraud and compliance
                  </div>
                  <div className="achievement-text mobile-text">
                    Created first enterprise analytics department
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Solution Development
                  </div>
                  <div className="achievement-text desktop-text">
                    Led development of data analytics and BI solutions for government and commercial clients
                  </div>
                  <div className="achievement-text mobile-text">
                    Built analytics for gov/commercial clients
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Position 11: PricewaterhouseCoopers */}
          <div className="timeline-item">
            <div className="timeline-node">
              <span style={{fontSize: '1.2rem', color: 'white'}}>📋</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2009 - 2013</span>
              <h3 className="timeline-role">Global Operations and Strategy Associate</h3>
              <div className="timeline-company">PricewaterhouseCoopers</div>
              <div className="skill-pills">
                <span className="skill-pill">Strategy</span>
                <span className="skill-pill">Operations</span>
                <span className="skill-pill">Executive Analytics</span>
              </div>
              <div className="mobile-achievement-toggle">View Achievements</div>
              <div className="mobile-achievement-content collapsed">
              <div className="achievement-list">
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Executive Support
                  </div>
                  <div className="achievement-text desktop-text">
                    Served as Lead Analyst to COO of Global Delivery, sole provider of performance metrics and dashboards
                  </div>
                  <div className="achievement-text mobile-text">
                    Lead analyst to COO, performance metrics
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-title">
                    <span className="achievement-arrow">→</span>
                    Innovation Pioneer
                  </div>
                  <div className="achievement-text desktop-text">
                    Spearheaded firm&apos;s first Tableau deployment for optimized dashboard automation
                  </div>
                  <div className="achievement-text mobile-text">
                    First Tableau deployment at firm
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveExperience;