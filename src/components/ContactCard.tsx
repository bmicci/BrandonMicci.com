'use client';

import React from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';

const ContactCard: React.FC = () => {
  const linkedInUrl = 'https://linkedin.com/in/brandonmicci';
  const emailAddress = 'brandon@brandonmicci.com';
  const trackAction = (action: string) =>
    track('contact_card_action', { action });

  return (
    <>
      <style jsx>{`
        .contact-card {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(
            180deg,
            rgba(15, 23, 42, 0.98) 0%,
            rgba(10, 14, 30, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(56, 189, 220, 0.15);
          overflow: hidden;
          position: relative;
        }

        .card-content {
          padding: 2.5rem 2rem;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        /* Headshot - Centered */
        .headshot-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .headshot-container {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: visible;
          position: relative;
        }

        .headshot-ring {
          position: absolute;
          inset: -1.5px;
          border-radius: 50%;
          border: 1.5px solid transparent;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%)
            border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .headshot-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #0f172a;
        }

        /* Name & Title - Centered */
        .name {
          font-size: 2.125rem;
          font-weight: 800;
          color: white;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .subtitle {
          font-size: 1.125rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.25rem 0;
          font-weight: 600;
        }

        .company {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 1.5rem 0;
          font-weight: 400;
        }

        /* Tagline */
        .tagline {
          font-size: 1.125rem;
          color: white;
          margin: 0 0 1.375rem 0;
          line-height: 1.4;
          font-weight: 500;
        }

        /* Achievement Lines */
        .achievements {
          margin: 0 0 1.5rem 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .achievement-item {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
          font-weight: 500;
        }

        .achievement-item .highlight {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .achievement-sub {
          font-size: 0.85rem;
          color: rgba(180, 200, 220, 0.8);
          margin-top: 0.2rem;
          font-weight: 400;
        }

        /* Buttons */
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          color: #0a0e27;
        }

        .btn-primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: #00d4ff;
          border: 1.5px solid #00d4ff;
          position: relative;
        }

        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #1e90ff;
          transform: translateY(-1px);
        }

        .icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 1.75rem 1.5rem;
          }

          .headshot-container {
            width: 110px;
            height: 110px;
          }

          .name {
            font-size: 1.875rem;
          }

          .subtitle {
            font-size: 1.0625rem;
          }

          .company {
            font-size: 0.9375rem;
          }

          .tagline {
            font-size: 1.0625rem;
          }

          .achievement-item {
            font-size: 0.85rem;
          }

          .btn {
            padding: 0.9rem 1.25rem;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="contact-card">
        <div className="card-content">
          {/* Headshot - Centered */}
          <div className="headshot-wrapper">
            <div className="headshot-container">
              <div className="headshot-ring" />
              <div className="headshot-inner">
                <Image
                  src="/headshot.webp"
                  alt="Brandon Micci"
                  width={130}
                  height={130}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="name">Brandon Micci</h1>
          <p className="subtitle">
            Head of AI Strategy & Business Transformation
          </p>
          <p className="company">JPMorgan Chase</p>

          {/* Tagline */}
          <p className="tagline">
            Enterprise AI at scale. Strategy to execution.
          </p>

          {/* Achievements */}
          <ul className="achievements">
            <li className="achievement-item">
              Scaled enterprise LLM to{' '}
              <span className="highlight">27K+ users</span>
            </li>
            <li className="achievement-item">
              Delivered <span className="highlight">$400M+</span> ROI
            </li>
            <li className="achievement-item">
              <span className="highlight">17+ years</span> expertise across
              <div className="achievement-sub">
                Big 4, Fortune 500, Financial Services
              </div>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="action-buttons">
            <a
              href="https://brandonmicci.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAction('view_ai_portfolio')}
            >
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              View AI Portfolio
            </a>
            <a
              href={linkedInUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAction('linkedin')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="btn btn-secondary"
              onClick={() => trackAction('email')}
            >
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              Email
            </a>
            <a
              href="/brandon-micci.vcf"
              className="btn btn-secondary"
              download
              onClick={() => trackAction('save_contact')}
            >
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              Save Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
