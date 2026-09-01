'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronRight, Layers } from 'lucide-react';

type Article = {
  slug: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  date: string;
  readTime: string;
  excerpt: string;
  topics: string[];
};

const articles: Article[] = [
  {
    slug: 'ai-operating-model',
    title: "Your AI Strategy Isn't the Problem. Your Operating Model Is.",
    icon: Layers,
    date: 'September 2026',
    readTime: '10 min read',
    excerpt:
      'What it actually takes to run AI at enterprise scale: the five components you have to design on purpose, the three mechanics that make them real, and why building inside model risk management turned out to be an advantage.',
    topics: [
      'AI Operating Model',
      'Governance',
      'Decision Rights',
      'Model Risk',
    ],
  },
];

export default function ArticlesContent() {
  return (
    <>
      <style jsx>{`
        .articles-page {
          font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
          color: white;
          padding: 6rem 0 4rem;
          min-height: 100vh;
        }

        .page-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #00d4ff;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .articles-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .article-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 255, 0.15);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .article-card:hover {
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
        }

        .card-inner {
          display: block;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          width: 56px;
          height: 56px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          line-height: 1.35;
          margin-bottom: 0.4rem;
        }

        .card-meta {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-excerpt {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .topic-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .topic-tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          color: rgba(255, 255, 255, 0.85);
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #00d4ff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .page-title {
            font-size: 2rem;
          }

          .card-inner {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="articles-page">
        <div className="page-container">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <header className="page-header">
            <h1 className="page-title">Articles &amp; Frameworks</h1>
            <p className="page-subtitle">
              Practical frameworks on AI operating models, governance, delivery,
              and adoption — written from experience running enterprise AI
              inside Fortune 500 financial services, not from the sidelines.
            </p>
          </header>

          <div className="articles-grid">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <article key={article.slug} className="article-card">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="card-inner"
                  >
                    <div className="card-top">
                      <div className="card-icon">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h2 className="card-title">{article.title}</h2>
                        <div className="card-meta">
                          {article.date} · {article.readTime}
                        </div>
                      </div>
                    </div>
                    <p className="card-excerpt">{article.excerpt}</p>
                    <div className="card-footer">
                      <div className="topic-tags">
                        {article.topics.map((topic) => (
                          <span key={topic} className="topic-tag">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <span className="read-more">
                        Read article
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
