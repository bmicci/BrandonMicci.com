'use client';

import React from 'react';
import Image from 'next/image';

// TODO: Add ?src= tracking params for analytics (e.g., ?src=nfc&ref=v1ce for NFC, ?src=email_sig for email signature)

const ContactCard: React.FC = () => {
  const linkedInUrl = 'https://linkedin.com/in/brandonmicci';
  const emailAddress = 'brandon@brandonmicci.com';
  
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
          margin-bottom: 1.75rem;
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
          margin: 0 0 0.15rem 0;
          font-weight: 600;
          line-height: 1.3;
        }

        .company {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .description {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.4;
          font-style: italic;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
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

        .secondary-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .btn-secondary {
          background: transparent;
          color: #00d4ff;
          border: 1.5px solid rgba(0, 212, 255, 0.5);
          padding: 0.75rem 0.5rem;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00d4ff;
          transform: translateY(-1px);
        }

        .emoji {
          font-size: 1rem;
        }

        .emoji-small {
          font-size: 0.9rem;
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

          .company {
            font-size: 0.75rem;
          }

          .btn-secondary {
            padding: 0.7rem 0.25rem;
            font-size: 0.75rem;
          }

          .emoji-small {
            font-size: 0.8rem;
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
              <p className="subtitle">Head of AI Strategy, Payments</p>
              <p className="company">JPMorgan Chase</p>
              <p className="description">
                Transforming enterprises through AI.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            {/* Primary CTA */}
            <a 
              href="https://brandonmicci.com" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emoji">🌐</span>
              View AI Portfolio
            </a>

            {/* Secondary row: LinkedIn | Email | Save Contact */}
            <div className="secondary-row">
              <a 
                href={linkedInUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="emoji-small">🔗</span>
                LinkedIn
              </a>
              <a 
                href={`mailto:${emailAddress}`}
                className="btn btn-secondary"
              >
                <span className="emoji-small">📧</span>
                Email
              </a>
              <a 
                href="/brandon-micci.vcf"
                className="btn btn-secondary"
                download
              >
                <span className="emoji-small">💾</span>
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

