import type { Metadata } from 'next';
import Link from 'next/link';
import BmShell, { BmContact, SITE_NAV } from '@/components/bm/BmShell';

// Eight programs in depth. Figures follow the résumé; results that only the
// earlier site claimed, and the résumé does not support, were left out.

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Eight enterprise programs in depth: LLM platforms, IoT, fraud analytics, analytics communities and infrastructure transformation, by Brandon Micci.',
  keywords: [
    'enterprise AI case studies',
    'LLM deployment case study',
    'IoT operations case study',
    'fraud analytics transformation',
    'analytics community of practice',
    'DevOps transformation',
    'Brandon Micci case studies',
  ],
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Brandon Micci',
    description:
      'Eight enterprise programs in depth: LLM platforms, IoT, fraud analytics, analytics communities and infrastructure transformation.',
    url: 'https://brandonmicci.com/case-studies',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci, enterprise AI and transformation executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Brandon Micci',
    description:
      'Eight enterprise programs in depth: LLM platforms, IoT, fraud analytics, analytics communities and infrastructure transformation.',
    images: ['/opengraph-image'],
  },
};

type Case = {
  id: string;
  title: string;
  where: string;
  metrics: { n: string; d: string }[];
  challenge: string;
  approach: string;
  results: string[];
  tech: string[];
};

const CASES: Case[] = [
  {
    id: 'knowledge-assistant',
    title: 'Enterprise knowledge assistant',
    where: 'JPMorgan Chase Payments · 2024–2026',
    metrics: [
      { n: '27,000+', d: 'employees using it' },
      { n: '12+', d: 'knowledge sources' },
    ],
    challenge:
      'Payments teams needed fast, reliable access to institutional knowledge spread across 7,500+ policy and procedure documents, under the governance, security and compliance standards of a regulated bank.',
    approach:
      'Led a guardrailed, multi-tenant LLM platform that grew from a policy search tool into the enterprise knowledge assistant for JPMorgan Payments, covering merchant services, client servicing, client onboarding and global call centers. Built it on reusable parts: shared APIs and services, agent patterns, evaluation harnesses and prompt playbooks, with a multi-repository RAG system underneath.',
    results: [
      'Scaled to 27,000+ employees, from 7,500 policy documents to 12+ knowledge sources.',
      'Designed human-in-the-loop review for high-stakes interactions in regulated payments workflows.',
      'Established LLM evaluation harnesses and an AIOps practice across the delivery lifecycle.',
      'Set up the governance model, later replicated in other divisions.',
    ],
    tech: ['LLM', 'RAG', 'Evaluation', 'AIOps', 'Responsible AI'],
  },
  {
    id: 'iot-operations',
    title: 'IoT operations platform',
    where: 'Southwest Airlines · 2019–2020',
    metrics: [
      { n: '250%', d: 'ROI in six months' },
      { n: '$20M+', d: 'annual savings' },
    ],
    challenge:
      'Fuel management, baggage handling and de-icing ran with little real-time visibility, and all three drive on-time performance and cost.',
    approach:
      'Pioneered the IoT Fuel Savings initiative, then extended IoT, edge computing and AI analytics across fuel farms, baggage handling systems and de-icing stations, bringing separate data streams into one view for operations teams.',
    results: [
      'Delivered 250% ROI in 6 months on the fuel savings pilot.',
      'Scaled to 20 stations generating $20M+ in annual savings.',
      'Gave operations real-time visibility across fuel, baggage and de-icing.',
    ],
    tech: ['IoT', 'AWS', 'Edge computing', 'AI analytics'],
  },
  {
    id: 'fraud-analytics',
    title: 'Fraud analytics transformation',
    where: 'EY · Top-5 national health insurer · 2021–2022',
    metrics: [{ n: '$400M', d: 'ten-year engagement' }],
    challenge:
      'A Top-5 national health insurer needed real-time fraud detection that could keep up with millions of transactions, on top of legacy platforms that were not built for it.',
    approach:
      'Designed the phased roadmap from legacy platform modernization through an enterprise data platform buildout to AI/ML-powered fraud analytics, and the real-time fraud analytics engine at its center.',
    results: [
      'Helped win a $400MM, 10-year digital transformation engagement.',
      'Designed the phased modernization roadmap and the real-time AI fraud analytics engine.',
    ],
    tech: ['Machine learning', 'Fraud analytics', 'Real-time', 'Data platform'],
  },
  {
    id: 'analytics-community',
    title: 'Enterprise analytics community of practice',
    where: 'Capital One · 2015–2016',
    metrics: [
      { n: '30,000+', d: 'users' },
      { n: '$8M', d: 'annual savings' },
    ],
    challenge:
      'A large, distributed bank wanted analytics in the hands of business teams without losing governance, and needed a culture of data-driven decisions to go with it.',
    approach:
      'Established the Tableau & Big Data Center of Excellence and built an enterprise community of practice around it, with training, governance frameworks and self-service tools.',
    results: [
      'Scaled enterprise adoption past 30,000 users.',
      'Decommissioned 2,000+ legacy dashboards and reports, delivering $8M in annual savings.',
      'Created a COE model later replicated for other analytics platforms.',
    ],
    tech: ['Tableau', 'Data governance', 'COE', 'Analytics'],
  },
  {
    id: 'industry-4',
    title: 'Industry 4.0 IoT platform',
    where: 'Capgemini · 2022',
    metrics: [
      { n: '1,000+', d: 'connected devices' },
      { n: '$9.8M', d: 'qualified pipeline' },
    ],
    challenge:
      'Insurance and industrial clients wanted to use connected-device data, from telematics, smart buildings and wearables, for risk assessment and loss prevention.',
    approach:
      'Extended the Industry 4.0 IoT platform with unified AI analytics, and architected a telematics and AI-driven risk analytics POC for Fortune 50 insurance pursuits.',
    results: [
      'Connected 1,000+ devices across telematics, smart buildings, wearables and industrial equipment.',
      'Demonstrated real-time predictive analytics for loss mitigation in the insurance POC.',
      'Contributed to $9.8M in qualified pipeline for the new practice.',
    ],
    tech: ['Industry 4.0', 'Telematics', 'IoT', 'AI analytics'],
  },
  {
    id: 'infrastructure',
    title: 'Global infrastructure transformation',
    where: 'Citi · 2017–2019',
    metrics: [{ n: '200%', d: 'faster cloud adoption' }],
    challenge:
      'Weekly Sev1 outages were disrupting global operations and the customer experience across mission-critical banking systems.',
    approach:
      'Led the infrastructure modernization across LATAM, NAM, EMEA and APAC: a new global telemetry platform, a service improvement program, and a DevOps transformation across 500+ engineers.',
    results: [
      'Eliminated weekly Sev1 outages worldwide.',
      'Accelerated cloud adoption by 200%.',
      'Standardized telemetry across global infrastructure.',
      'Established enterprise-standard CI/CD practices.',
    ],
    tech: ['DevOps', 'Cloud', 'Telemetry', 'CI/CD'],
  },
  {
    id: 'marketing-engine',
    title: 'Event-based marketing engine',
    where: 'Citi · 2017–2019',
    metrics: [{ n: '10M+', d: 'customers reached' }],
    challenge:
      'Marketing needed personalized, timely campaigns at scale, triggered by what customers actually did.',
    approach:
      'Built an event-based marketing engine on Hadoop and Cloudera that turned customer behavior and events into targeted campaigns.',
    results: [
      'Reached 10M+ customers with data-driven targeted campaigns.',
      'Enabled real-time, event-based campaign triggers.',
    ],
    tech: ['Hadoop', 'Cloudera', 'Big data', 'Real-time'],
  },
  {
    id: 'analytics-as-a-service',
    title: 'Analytics-as-a-Service platform',
    where: 'EY · 2021–2022',
    metrics: [{ n: '$25M+', d: 'annual recurring revenue' }],
    challenge:
      'The firm wanted to turn its risk, compliance and fraud analytics into a repeatable offering with recurring revenue.',
    approach:
      'Championed platform enhancements and the go-to-market strategy for a repeatable Analytics-as-a-Service framework for risk, compliance and fraud detection, deployed across multiple Fortune 100 client engagements.',
    results: [
      'Contributed to $25MM+ in annual recurring revenue.',
      'Standardized analytics patterns for risk, compliance and fraud detection.',
      'Shortened client implementations through reusable platform components.',
    ],
    tech: ['Analytics platform', 'Risk & compliance', 'Fraud', 'SaaS'],
  },
];

export default function CaseStudiesPage() {
  const total = String(CASES.length).padStart(2, '0');
  return (
    <BmShell nav={SITE_NAV} current="/case-studies">
      <section className="page-hero">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">Case studies</div>
            <h1>Eight programs, from the problem to the result.</h1>
            <p className="lead">
              Enterprise LLM platforms, IoT in airline operations, fraud
              analytics, analytics communities and global infrastructure. What
              each one set out to fix, how it was done, and what it delivered.
            </p>
          </div>
        </div>
      </section>

      <nav className="cs-index" aria-label="Case studies">
        <div className="wrap">
          <ol>
            {CASES.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>
                  <small>{String(i + 1).padStart(2, '0')}</small>
                  <span>{c.title}</span>
                  <b>{c.metrics[0].n}</b>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className="cs" aria-label="Case studies in detail">
        <div className="wrap">
          {CASES.map((c, i) => (
            <article className="cs-item" id={c.id} key={c.id}>
              <div className="cs-side">
                <div className="idx">
                  {String(i + 1).padStart(2, '0')} / {total}
                </div>
                {c.metrics.map((m) => (
                  <div className="cs-met" key={m.d}>
                    <div className="n">{m.n}</div>
                    <div className="u">{m.d}</div>
                  </div>
                ))}
              </div>
              <div className="cs-main">
                <h2>{c.title}</h2>
                <div className="w">{c.where}</div>
                <div className="cs-part">
                  <h3>The challenge</h3>
                  <p>{c.challenge}</p>
                </div>
                <div className="cs-part">
                  <h3>The approach</h3>
                  <p>{c.approach}</p>
                </div>
                <div className="cs-part">
                  <h3>Results</h3>
                  <ul>
                    {c.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="tags">
                  {c.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="next-page">
        <div className="wrap">
          <Link className="link arrow" href="/experience">
            See the full career history{' '}
          </Link>
        </div>
      </section>

      <BmContact intro="Working on a program like one of these? I’m glad to compare notes on what worked, what didn’t, and what I’d do differently." />
    </BmShell>
  );
}
