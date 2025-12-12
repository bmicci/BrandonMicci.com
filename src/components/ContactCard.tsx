'use client';

import React from 'react';
import Image from 'next/image';

// TODO: implement /api/contact/vcard to generate a .vcf file with Brandon's details
// TODO: Replace sms: link with a future Twilio/Plivo-powered SMS flow
// TODO: Add ?src= tracking params for analytics (e.g., ?src=nfc&ref=v1ce for NFC, ?src=email_sig for email signature)

const ContactCard: React.FC = () => {
  const linkedInUrl = 'https://linkedin.com/in/brandonmicci';
  const emailAddress = 'brandon@brandonmicci.com';
  const phoneNumber = '+1XXXXXXXXXX'; // TODO: Replace with actual phone number
  
  return (
    <>
      <style jsx>{`
        .contact-card {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(
            135deg,
            rgba(10, 14, 39, 0.95) 0%,
            rgba(15, 23, 42, 0.95) 50%,
            rgba(10, 14, 39, 0.95) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          box-shadow:
            0 0 40px rgba(0, 212, 255, 0.15),
            0 0 80px rgba(30, 144, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
          position: relative;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(0, 212, 255, 0.4) 0%,
            rgba(30, 144, 255, 0.2) 50%,
            rgba(0, 212, 255, 0.4) 100%
          );
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .card-content {
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .header-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .headshot-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          box-shadow: 
            0 0 0 3px rgba(0, 212, 255, 0.4),
            0 4px 25px rgba(0, 212, 255, 0.35);
        }

        .headshot-glow {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 50%, #00d4ff 100%);
          background-size: 200% 200%;
          animation: rotate-glow 4s linear infinite;
          z-index: -1;
        }

        @keyframes rotate-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .text-stack {
          flex: 1;
          min-width: 0;
        }

        .name {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 0.875rem;
          color: #00d4ff;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
          line-height: 1.3;
        }

        .description {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.4;
        }

        .kpi-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          padding: 1rem;
          background: rgba(0, 212, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 212, 255, 0.1);
        }

        .kpi-item {
          text-align: center;
        }

        .kpi-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: #00d4ff;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .kpi-label {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          color: #0a0e27;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #00d4ff;
          border: 1.5px solid rgba(0, 212, 255, 0.5);
        }

        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00d4ff;
          transform: translateY(-1px);
        }

        .btn-tertiary {
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
        }

        .btn-tertiary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
        }

        .contact-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 0.5rem;
        }

        .contact-link:hover {
          color: #00d4ff;
        }

        .contact-group {
          display: flex;
          gap: 0.5rem;
        }

        .emoji {
          font-size: 1rem;
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 1.5rem 1.25rem;
          }

          .headshot-container {
            width: 85px;
            height: 85px;
          }

          .name {
            font-size: 1.35rem;
          }

          .subtitle {
            font-size: 0.8rem;
          }

          .kpi-value {
            font-size: 1.1rem;
          }

          .kpi-label {
            font-size: 0.6rem;
          }
        }
      `}</style>

      <div className="contact-card">
        <div className="card-content">
          {/* Header with headshot and text */}
          <div className="header-row">
            <div className="headshot-container">
              <div className="headshot-glow" />
              <Image
                src="/headshot.webp"
                alt="Brandon Micci"
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                priority
              />
            </div>
            <div className="text-stack">
              <h1 className="name">Brandon Micci</h1>
              <p className="subtitle">Enterprise AI & Digital Transformation Executive</p>
              <p className="description">
                Connecting you to AI strategy, scale, and real-world impact.
              </p>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="kpi-strip">
            <div className="kpi-item">
              <div className="kpi-value">27K+</div>
              <div className="kpi-label">LLM Users</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">$400M+</div>
              <div className="kpi-label">Revenue Impact</div>
            </div>
            <div className="kpi-item">
              <div className="kpi-value">16+ yrs</div>
              <div className="kpi-label">AI & Digital</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="section-label">Quick Actions</div>
          <div className="action-buttons">
            <a 
              href="https://brandonmicci.com" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emoji">🌐</span>
              View AI Portfolio
            </a>
            <a 
              href={linkedInUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emoji">🔗</span>
              Connect on LinkedIn
            </a>
            <a 
              href="/brandon-micci.vcf"
              className="btn btn-tertiary"
              download
            >
              <span className="emoji">💾</span>
              Save Contact (vCard)
            </a>
          </div>

          {/* Bottom contact row */}
          <div className="contact-row">
            <a href={`mailto:${emailAddress}`} className="contact-link">
              <span className="emoji">📧</span>
              Email Brandon
            </a>
            <div className="contact-group">
              <a href={`tel:${phoneNumber}`} className="contact-link">
                <span className="emoji">📞</span>
                Call
              </a>
              <a href={`sms:${phoneNumber}`} className="contact-link">
                <span className="emoji">💬</span>
                Text
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

