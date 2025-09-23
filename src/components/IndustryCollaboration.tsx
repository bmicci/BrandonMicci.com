'use client';

import React, { useEffect } from 'react';

const IndustryCollaboration: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to contact section with fixed-header offset
    const jumpers = document.querySelectorAll('a[href^="#connectwithme"]');
    jumpers.forEach((a) =>
      a.addEventListener('click', function (e: Event) {
        const t = document.getElementById('connectwithme');
        if (!t) return; // let browser handle if not found
        e.preventDefault();
        window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
      })
    );

    // Executive brief download (replace data-brief-url above)
    const brief = document.getElementById('bm-brief');
    if (brief) {
      const url = brief.getAttribute('data-brief-url');
      brief.addEventListener('click', (e: Event) => {
        if (!url || url.indexOf('YOUR-DOMAIN') !== -1) return; // ignore until set
        e.preventDefault();
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
    }

    // Executive resume download (replace data-resume-url above)
    const resume = document.getElementById('bm-resume');
    if (resume) {
      const url = resume.getAttribute('data-resume-url');
      resume.addEventListener('click', (e: Event) => {
        if (!url || url.indexOf('YOUR-DOMAIN') !== -1) return; // ignore until set
        e.preventDefault();
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
    }
  }, []);

  return (
    <>
      <style jsx>{`
        /* ===== AI Glassmorphism Theme (scoped to #industry-collab) ===== */
        #industry-collab,
        #industry-collab * {
          box-sizing: border-box;
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
        }

        #industry-collab {
          position: relative;
          color: white;
          padding: 80px 0;
          background: transparent;
          /* Border lines removed for clean Universal Background */
          overflow: hidden;
          min-height: auto;
        }

        /* Neural Background with Particles - removed to use universal background */

        @keyframes backgroundPulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Neural Grid */
        .neural-grid-contact {
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
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Floating Particles */
        .contact-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .contact-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #00d4ff;
          border-radius: 50%;
          opacity: 0.8;
          animation: contactFloat 8s infinite ease-in-out;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.7);
        }

        @keyframes contactFloat {
          0%,
          100% {
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

        /* Particle Positioning */
        .contact-particle:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 8s;
        }
        .contact-particle:nth-child(2) {
          top: 60%;
          left: 20%;
          animation-delay: 2s;
          animation-duration: 12s;
        }
        .contact-particle:nth-child(3) {
          top: 30%;
          left: 80%;
          animation-delay: 4s;
          animation-duration: 10s;
        }
        .contact-particle:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 1s;
          animation-duration: 14s;
        }
        .contact-particle:nth-child(5) {
          top: 40%;
          left: 50%;
          animation-delay: 3s;
          animation-duration: 9s;
        }
        .contact-particle:nth-child(6) {
          top: 70%;
          left: 30%;
          animation-delay: 5s;
          animation-duration: 11s;
        }
        .contact-particle:nth-child(7) {
          top: 15%;
          left: 65%;
          animation-delay: 6s;
          animation-duration: 13s;
        }
        .contact-particle:nth-child(8) {
          top: 85%;
          left: 25%;
          animation-delay: 1.5s;
          animation-duration: 15s;
        }
        .contact-particle:nth-child(9) {
          top: 25%;
          left: 45%;
          animation-delay: 3.5s;
          animation-duration: 7s;
        }
        .contact-particle:nth-child(10) {
          top: 55%;
          left: 85%;
          animation-delay: 2.5s;
          animation-duration: 16s;
        }
        .contact-particle:nth-child(11) {
          top: 10%;
          left: 35%;
          animation-delay: 4.5s;
          animation-duration: 9s;
        }
        .contact-particle:nth-child(12) {
          top: 90%;
          left: 55%;
          animation-delay: 0.5s;
          animation-duration: 11s;
        }
        .contact-particle:nth-child(13) {
          top: 35%;
          left: 15%;
          animation-delay: 5.5s;
          animation-duration: 8s;
        }
        .contact-particle:nth-child(14) {
          top: 65%;
          left: 75%;
          animation-delay: 2.8s;
          animation-duration: 12s;
        }
        .contact-particle:nth-child(15) {
          top: 45%;
          left: 5%;
          animation-delay: 1.2s;
          animation-duration: 14s;
        }

        .bm-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        /* Header with AI Gradient */
        .bm-head {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 10;
          animation: fadeInDown 1s ease-out;
        }

        .bm-eyebrow {
          display: inline-block;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .bm-title {
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 20px;
          font-size: clamp(32px, 4vw, 48px);
          background: linear-gradient(
            135deg,
            #00d4ff 0%,
            #1e90ff 50%,
            #00d4ff 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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

        .bm-sub {
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.6;
        }

        /* Grid Layout */
        .bm-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.9fr;
          gap: 40px;
          margin-top: 40px;
          position: relative;
          z-index: 10;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @media (max-width: 980px) {
          .bm-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* Glassmorphism Cards */
        .bm-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .bm-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.05),
            transparent
          );
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

        .bm-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.2);
        }

        .bm-card:hover::before {
          animation-duration: 2s;
        }

        .bm-card-pad {
          padding: 32px;
          position: relative;
          z-index: 1;
        }

        .bm-card + .bm-card {
          margin-top: 20px;
        }

        .bm-card-title {
          font-weight: 700;
          margin: 0 0 12px;
          font-size: 20px;
          letter-spacing: 0.3px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bm-card-sub {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        /* Enhanced CTA Buttons */
        .bm-inline-cta {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }

        .bm-secondary-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-start;
          width: 100%;
        }

        .bm-btn-compact {
          padding: 12px 20px;
          font-size: 15px;
          min-width: auto;
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .bm-btn-compact svg {
          width: 16px;
          height: 16px;
          opacity: 0.9;
          flex-shrink: 0;
        }

        .bm-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 14px 24px;
          font-weight: 600;
          font-size: 16px;
          line-height: 1;
          border-radius: 12px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .bm-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .bm-btn:hover::before {
          left: 100%;
        }

        .bm-btn-primary {
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          color: #fff;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
        }

        .bm-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.6);
        }

        .bm-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #00d4ff;
          border: 1px solid rgba(0, 212, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .bm-btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
        }

        .bm-cta-small {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .bm-cta-small a {
          color: #00d4ff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .bm-cta-small a:hover {
          color: #1e90ff;
        }

        /* Enhanced Topics Section */
        .bm-topics {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 16px;
          padding: 24px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }

        .bm-topics::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #1e90ff);
        }

        .bm-topics h4 {
          margin: 0 0 16px;
          font-size: 18px;
          color: #00d4ff;
          font-weight: 700;
        }

        .bm-topics ul {
          margin: 0;
          padding-left: 20px;
        }

        .bm-topics li {
          margin: 8px 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 15px;
        }

        /* Enhanced Note Section */
        .bm-note {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 12px;
          padding: 16px 20px;
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-style: italic;
          backdrop-filter: blur(10px);
        }

        .bm-note strong {
          color: #00d4ff;
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

        /* Scroll anchor adjustment */
        #connectwithme {
          scroll-margin-top: 90px;
        }

        /* Right side cards animation */
        .bm-card:nth-child(1) {
          animation: cardSlideIn 0.8s ease-out 0.5s both;
        }
        .bm-card:nth-child(2) {
          animation: cardSlideIn 0.8s ease-out 0.7s both;
        }
        .bm-card:nth-child(3) {
          animation: cardSlideIn 0.8s ease-out 0.9s both;
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          #industry-collab {
            padding: 60px 0;
          }

          .bm-wrap {
            padding: 0 16px;
          }

          .bm-card-pad {
            padding: 24px;
          }

          .bm-inline-cta {
            gap: 16px;
          }

          .bm-secondary-actions {
            flex-direction: column;
          }

          .bm-btn-compact {
            max-width: none;
            flex: none;
            justify-content: center;
          }
        }
      `}</style>

      <section id="industry-collab">
        {/* Background elements removed - using Universal Background */}

        <div className="bm-wrap">
          <header className="bm-head">
            <span className="bm-eyebrow">
              Industry Collaboration &amp; Speaking
            </span>
            <h2 className="bm-title">
              Exploring AI transformation strategies &amp; sharing insights
              across enterprise ecosystems
            </h2>
            <p className="bm-sub">
              Always open to discussing emerging AI trends, strategic
              implementations, and learnings from enterprise-scale
              transformations.
            </p>
          </header>

          <div className="bm-grid">
            {/* LEFT: CTA + topics */}
            <div className="bm-card bm-card-pad">
              <div className="bm-inline-cta">
                {/* Primary: scroll to your contact section */}
                <a
                  className="bm-btn bm-btn-primary"
                  href="#connectwithme"
                  id="bm-open-form"
                >
                  <span>Discuss Collaboration</span>
                  <span aria-hidden="true">→</span>
                </a>

                {/* Secondary Actions */}
                <div className="bm-secondary-actions">
                  <a
                    className="bm-btn bm-btn-secondary bm-btn-compact"
                    id="bm-resume"
                    data-resume-url="/BrandonMicciSeniorAIExecutive.pdf"
                    href="#"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    Resume
                  </a>
                  <a
                    className="bm-btn bm-btn-secondary bm-btn-compact"
                    id="bm-brief"
                    data-brief-url="/BrandonMicciSeniorAIExecutive.pdf"
                    href="#"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
                    </svg>
                    Executive Brief
                  </a>
                  <a
                    className="bm-btn bm-btn-secondary bm-btn-compact bm-btn-linkedin"
                    href="https://linkedin.com/in/brandonmicci"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>

                <span className="bm-cta-small">
                  or email directly:
                  <a href="mailto:brandon.micci@gmail.com">
                    brandon.micci@gmail.com
                  </a>
                </span>
              </div>

              <div className="bm-topics">
                <h4>Recent Speaking Topics</h4>
                <ul>
                  <li>Enterprise AI Strategy &amp; Implementation</li>
                  <li>Scaling LLM Deployments in Financial Services</li>
                  <li>ROI-Driven Digital Transformation</li>
                  <li>Building AI-First Organizations</li>
                </ul>
              </div>

              <div className="bm-note">
                <strong>Professional Discussions:</strong> All conversations are
                conducted with appropriate discretion and confidentiality.
              </div>
            </div>

            {/* RIGHT: three quick cards */}
            <div>
              <div className="bm-card bm-card-pad">
                <h3 className="bm-card-title">Strategic Discussions</h3>
                <p className="bm-card-sub">
                  AI transformation insights &amp; ideas
                </p>
              </div>
              <div className="bm-card bm-card-pad">
                <h3 className="bm-card-title">Professional Network</h3>
                <p className="bm-card-sub">
                  Industry connections &amp; thought leadership
                </p>
              </div>
              <div className="bm-card bm-card-pad">
                <h3 className="bm-card-title">Speaking Engagements</h3>
                <p className="bm-card-sub">
                  Conferences, panels &amp; executive forums
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryCollaboration;
