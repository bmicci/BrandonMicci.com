'use client';

import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';

// Compact homepage strip surfacing the most recent article. Content is
// duplicated from src/app/articles/ArticlesContent.tsx by design — update
// both when a new article ships (the articles index is the source of truth).
const LatestInsights = () => {
  return (
    <>
      <style jsx>{`
        .insights-section {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3.5rem 2rem;
        }

        .insights-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .insights-title {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .insights-subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.75);
          max-width: 640px;
          margin: 0 auto;
        }

        .insight-card {
          display: block;
          max-width: 860px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 20px;
          padding: 1.75rem 2rem;
          text-decoration: none;
          color: inherit;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .insight-card:hover {
          border-color: rgba(0, 212, 255, 0.35);
          box-shadow: 0 16px 36px rgba(0, 212, 255, 0.12);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          margin-bottom: 0.85rem;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          line-height: 1.35;
          margin: 0 0 0.3rem;
        }

        .card-meta {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-excerpt {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.65;
          margin: 0 0 1rem;
        }

        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #00d4ff;
          font-size: 0.92rem;
          font-weight: 600;
        }

        .insights-all {
          text-align: center;
          margin-top: 1.5rem;
        }

        .insights-all :global(a) {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.92rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .insights-all :global(a:hover) {
          color: #00d4ff;
        }

        @media (max-width: 640px) {
          .insights-section {
            padding: 2.5rem 1.5rem;
          }

          .insights-title {
            font-size: 1.7rem;
          }

          .insight-card {
            padding: 1.4rem 1.4rem;
          }
        }
      `}</style>

      <div className="insights-section">
        <div className="insights-header">
          <h2 className="insights-title">Latest Thinking</h2>
          <p className="insights-subtitle">
            Frameworks on AI operating models, governance, and adoption at
            enterprise scale
          </p>
        </div>

        <Link href="/articles/ai-operating-model" className="insight-card">
          <div className="card-top">
            <div className="card-icon">
              <Layers size={26} />
            </div>
            <div>
              <h3 className="card-title">
                Your AI Strategy Isn&rsquo;t the Problem. Your Operating Model
                Is.
              </h3>
              <div className="card-meta">September 2026 · 10 min read</div>
            </div>
          </div>
          <p className="card-excerpt">
            What it actually takes to run AI at enterprise scale: the five
            components you have to design on purpose, the three mechanics that
            make them real, and why building inside model risk management turned
            out to be an advantage.
          </p>
          <span className="card-cta">
            Read the article
            <ArrowRight size={16} />
          </span>
        </Link>

        <div className="insights-all">
          <Link href="/articles">View all articles &amp; frameworks</Link>
        </div>
      </div>
    </>
  );
};

export default LatestInsights;
