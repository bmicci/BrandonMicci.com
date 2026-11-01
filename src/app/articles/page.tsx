import type { Metadata } from 'next';
import Link from 'next/link';
import BmShell, { BmContact, SITE_NAV } from '@/components/bm/BmShell';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    "Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale, from Brandon Micci's work inside Fortune 500 banks.",
  keywords: [
    'AI operating model',
    'AI governance framework',
    'enterprise AI adoption',
    'AI transformation articles',
    'model risk management GenAI',
    'AI delivery lifecycle',
    'Brandon Micci articles',
  ],
  alternates: { canonical: '/articles' },
  openGraph: {
    title: 'Writing | Brandon Micci',
    description:
      'Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale.',
    url: 'https://brandonmicci.com/articles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing | Brandon Micci',
    description:
      'Practical frameworks on AI operating models, governance, delivery, and adoption at enterprise scale.',
  },
};

const ARTICLES = [
  {
    slug: 'ai-delivery-lifecycle',
    title: 'Your AI Pilot Didn’t Fail. It Was Never Designed to Ship.',
    date: 'September 2026',
    read: '9 min read',
    excerpt:
      'A pilot is built to prove value. A production system has to prove trust. The delivery lifecycle is the designed path between them: experiments with kill criteria, a production gate that runs on evidence, and operations built for systems that break quietly.',
    topics: ['Delivery lifecycle', 'Evaluation', 'AIOps', 'Human review'],
  },
  {
    slug: 'ai-operating-model',
    title: 'Your AI Strategy Isn’t the Problem. Your Operating Model Is.',
    date: 'September 2026',
    read: '10 min read',
    excerpt:
      'What it actually takes to run AI at enterprise scale: the five components you have to design on purpose, the three mechanics that make them real, and why building inside model risk management turned out to be an advantage.',
    topics: ['Operating model', 'Governance', 'Decision rights', 'Model risk'],
  },
];

export default function ArticlesPage() {
  return (
    <BmShell nav={SITE_NAV} current="/articles">
      <section className="page-hero">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">Writing</div>
            <h1>Notes on running AI inside large, regulated companies.</h1>
            <p className="lead">
              Frameworks from the work itself: operating models, governance,
              delivery and adoption at enterprise scale.
            </p>
          </div>
        </div>
      </section>

      <section className="persp list">
        <div className="wrap grid">
          <div className="sec-head">
            <div className="label">Articles</div>
            <p className="sh">{ARTICLES.length} published</p>
          </div>
          <div className="arts">
            {ARTICLES.map((a) => (
              <Link
                className="art feat"
                href={`/articles/${a.slug}`}
                key={a.slug}
              >
                <div>
                  <div className="tags">
                    {a.topics.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
                <div className="meta">
                  <span>{a.date}</span>
                  <span>{a.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BmContact />
    </BmShell>
  );
}
