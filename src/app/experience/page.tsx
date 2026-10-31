import type { Metadata } from 'next';
import Link from 'next/link';
import BmShell, { BmContact, SITE_NAV } from '@/components/bm/BmShell';

// Full career history. Wording follows the résumé; details that appear only on
// the earlier site, and that the résumé does not contradict, are kept.

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Brandon Micci’s career in enterprise AI, data and transformation leadership: JPMorgan Chase, Capgemini, EY, Southwest Airlines, Citi, Capital One, Booz Allen Hamilton and PwC.',
  keywords: [
    'enterprise AI leadership',
    'AI strategy and business transformation',
    'LLM and RAG deployment',
    'AI operating model',
    'analytics center of excellence',
    'Responsible AI governance',
    'Dallas AI executive',
  ],
  openGraph: {
    title: 'Experience | Brandon Micci',
    description:
      'Seventeen years leading AI, data and transformation programs in financial services, aviation and consulting.',
    url: 'https://brandonmicci.com/experience',
    type: 'profile',
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
    title: 'Experience | Brandon Micci',
    description:
      'Seventeen years leading AI, data and transformation programs in financial services, aviation and consulting.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: '/experience' },
};

type Role = {
  title: string;
  dates: string;
  note?: string;
  summary?: string;
  points: string[];
};

type Employer = {
  company: string;
  place: string;
  years: string;
  metric?: { n: string; d: string };
  roles: Role[];
  tags: string[];
};

const CAREER: Employer[] = [
  {
    company: 'JPMorgan Chase',
    place: 'Plano, TX',
    years: '2024–2026',
    metric: { n: '$22M+', d: 'annualized savings' },
    tags: ['AI strategy', 'LLM / RAG', 'Responsible AI', 'Operating model'],
    roles: [
      {
        title: 'Head of AI Strategy & Business Transformation',
        dates: 'Feb 2024 – Mar 2026',
        summary:
          'Led AI strategy and business transformation across JPMorgan Payments, spanning merchant services, client servicing, client onboarding, and global call centers. Owned end-to-end AI product delivery, the $15M+ annual AI portfolio, governance, and enterprise scaling.',
        points: [
          'Delivered $22M+ in annualized savings through LLM-powered workflow automation, intelligent routing, and accelerated knowledge retrieval, cutting handle time ~40% in the highest-volume servicing workflow.',
          'Directed the reusable AI platform strategy spanning shared APIs, services, agent patterns, evaluation harnesses, and prompt playbooks, scaling the enterprise LLM Assistant to 27,000+ employees through a multi-repository RAG system across 12+ knowledge sources.',
          'Deployed 30+ AI/ML use cases into production spanning LLM/RAG assistants, call transcription and sentiment analysis, automated analytics, and end-to-end workflow automation.',
          'Established the Payments AI Center of Excellence and model risk management framework, ensuring regulatory compliance across 30+ AI/ML use cases; presented the multi-year transformation roadmap to the Executive Committee and senior stakeholders.',
          'Designed the future-state AI operating model for JPMorgan Payments: a multi-year transformation program spanning people, process, technology, data, and controls, defining role decomposition, decision rights, handoffs, and control points with Responsible AI embedded.',
          'Designed human-in-the-loop review workflows for high-stakes AI-assisted decisions, and established LLM evaluation harnesses and an AIOps practice across the delivery lifecycle, from experiment to production to operations.',
          'Drove enterprise AI adoption through executive storytelling, KPI dashboards, manager enablement, and analyst communities of practice, turning technical work into board-level outcomes.',
        ],
      },
    ],
  },
  {
    company: 'Capgemini',
    place: 'Dallas, TX',
    years: '2022',
    metric: { n: '$9.8M', d: 'qualified pipeline' },
    tags: ['Practice build', 'AI / IoT', 'Go-to-market', 'Insurance'],
    roles: [
      {
        title: 'Senior Director, Head of AI/IoT & Emerging Technology Practice',
        dates: 'Jan 2022 – Jun 2022',
        summary:
          'Recruited from EY to build and commercialize a new AI/IoT practice within the Intelligent Industry portfolio. Owned solution development, platform buildout, and go-to-market strategy for Fortune 50 pursuits; the role was eliminated in a mid-2022 practice restructuring after the build phase completed.',
        points: [
          'Built the practice’s go-to-market strategy and business plan targeting $30M in revenue, defining service offerings, pricing, and positioning across insurance and industrial verticals.',
          'Generated $9.8M in qualified pipeline through solution commercialization and pursuit leadership with matrixed delivery teams.',
          'Architected a telematics and AI-driven risk analytics POC for Fortune 50 insurance pursuits, demonstrating real-time predictive analytics for loss mitigation.',
          'Extended the Industry 4.0 IoT platform connecting 1,000+ devices across telematics, smart buildings, wearables, and industrial equipment with unified AI analytics.',
        ],
      },
    ],
  },
  {
    company: 'EY',
    place: 'Dallas, TX',
    years: '2021–2022',
    metric: { n: '$400M', d: 'ten-year engagement' },
    tags: ['Fraud analytics', 'AI / ML', 'Data science', 'ESG'],
    roles: [
      {
        title: 'Senior Manager, AI/ML Forensic Analytics & Technology',
        dates: 'Feb 2021 – Jan 2022',
        summary:
          'Scaled AI/ML and data science strategy within the Forensics practice. Regional leader and subject-matter expert advising engagements across financial services, life sciences, and energy.',
        points: [
          'Helped win a $400MM, 10-year digital transformation engagement with a Top-5 national health insurer, designing the phased roadmap from legacy platform modernization through enterprise data platform buildout to AI/ML-powered fraud analytics.',
          'Championed Analytics-as-a-Service platform enhancements and go-to-market strategy, contributing to $25MM+ in annual recurring revenue.',
          'Pioneered an ESG analytics prototype for the Fortune 50 oil and gas sector, driving $6M+ in new revenue; led DOJ/FCPA compliance monitoring for a healthcare client.',
        ],
      },
    ],
  },
  {
    company: 'Southwest Airlines',
    place: 'Dallas, TX',
    years: '2019–2020',
    metric: { n: '250%', d: 'ROI in six months' },
    tags: ['IoT', 'Digital innovation', 'Analytics COE', 'Edge computing'],
    roles: [
      {
        title: 'Head of Digital Innovation & IoT',
        dates: 'Aug 2019 – Dec 2020',
        note: 'Promoted',
        summary:
          'Promoted to a newly created role reporting directly to the CIO. Built and led the Innovation team driving digital transformation with IoT, AI, and edge computing. Managed a $25M technology budget and a cross-functional team of 20+.',
        points: [
          'Pioneered the IoT Fuel Savings initiative, delivering 250% ROI in 6 months; scaled to 20 stations generating $20M+ in annual savings.',
          'Implemented IoT capabilities across fuel farms, baggage handling systems, and de-icing stations, giving operations real-time visibility.',
          'Developed the multi-year technology roadmap for IoT and digital innovation, aligning emerging technologies with operational needs and CIO priorities.',
        ],
      },
      {
        title: 'Manager, Data Enablement & Analytics COE',
        dates: 'Feb 2019 – Aug 2019',
        points: [
          'Built Southwest’s first Data Enablement & Analytics COE, driving a 40% adoption increase in Tableau and Alteryx across 2,500+ users.',
          'Architected a Tier 1 production data environment meeting Tier-1 availability and disaster-recovery targets for critical real-time operations, with secure data isolation and access controls.',
          'Retired underused legacy dashboards across Business Objects, Quickbase, Cognos, and Crystal Reports, and grew a data analyst community across the airline.',
        ],
      },
    ],
  },
  {
    company: 'Citi',
    place: 'Irving, TX',
    years: '2017–2019',
    metric: { n: '200%', d: 'faster cloud adoption' },
    tags: ['Infrastructure', 'DevOps', 'Cloud', 'CI/CD'],
    roles: [
      {
        title: 'Vice President, Global Infrastructure Transformation',
        dates: 'Nov 2017 – Feb 2019',
        summary:
          'Led global infrastructure transformation and service quality programs across LATAM, NAM, EMEA, and APAC, matrixed across global CTOs while indirectly managing 500+ engineers worldwide. Drove platform modernization, cloud acceleration, and DevOps transformation across mission-critical banking systems.',
        points: [
          'Architected a global telemetry platform and service improvement program, eliminating weekly Sev1 outages worldwide and accelerating cloud adoption by 200%.',
          'Led organizational change management for the DevOps transformation across 500+ engineers, establishing enterprise-standard CI/CD practices.',
          'Built an event-based marketing engine on Hadoop and Cloudera, reaching 10M+ customers with data-driven targeted campaigns.',
        ],
      },
    ],
  },
  {
    company: 'Capital One',
    place: 'Plano, TX · Richmond and McLean, VA',
    years: '2015–2017',
    metric: { n: '30,000+', d: 'analytics community' },
    tags: ['Analytics COE', 'Risk analytics', 'Tableau', 'NLP / OCR'],
    roles: [
      {
        title: 'Enterprise Risk Analytics Leader',
        dates: 'Jul 2016 – Nov 2017',
        note: 'Promoted to manager',
        summary:
          'Built and led the first Risk & Analytics Reporting organization for Auto Finance and Home Loans.',
        points: [
          'Pioneered NLP/OCR automation scanning official regulatory changes from government sources, auto-generating compliance testing scripts and increasing control coverage by 80%.',
          'Built a team of 10 data engineers and analysts and stood up the division’s first dedicated Tableau environment within two months.',
          'Delivered executive risk dashboards and real-time monitoring across Auto Finance and Home Loans.',
        ],
      },
      {
        title: 'Enterprise Analytics Leader, Compliance',
        dates: 'Jan 2016 – Jul 2016',
        points: [
          'Led enterprise-wide dashboard development as an internal strategic consultant across Risk and Compliance, managing a cross-functional team of 10.',
          'Set the enterprise standard for data quality: governance frameworks, automated lineage, and validation gates.',
        ],
      },
      {
        title: 'Big Data, Analytics & Platforms COE Leader',
        dates: 'Jan 2015 – Jan 2016',
        points: [
          'Established and led Capital One’s Tableau & Big Data Center of Excellence, defining the enterprise data strategy and analytics operating model adopted across multiple business lines.',
          'Built an enterprise analytics community of practice, scaling enterprise adoption past 30,000 users.',
          'Led enterprise-wide platform rationalization, decommissioning 2,000+ legacy dashboards and reports and delivering $8M in annual savings.',
          'Architected executive mobile dashboards for CEO Rich Fairbank.',
        ],
      },
    ],
  },
  {
    company: 'Booz Allen Hamilton',
    place: 'McLean, VA',
    years: '2013–2015',
    tags: ['Predictive analytics', 'Fraud', 'Governance'],
    roles: [
      {
        title: 'Senior Consultant, Lead Data Analyst',
        dates: 'Oct 2013 – Jan 2015',
        points: [
          'Architected a predictive analytics platform using ML, increasing anomaly detection rates 150% over manual review across federal client engagements.',
          'Led Tableau Enterprise deployments for fraud detection, compliance, and C-suite reporting, and set up the steering committee that governed them.',
        ],
      },
    ],
  },
  {
    company: 'PwC',
    place: 'McLean, VA',
    years: '2009–2013',
    tags: ['Strategy', 'Operations', 'Executive reporting'],
    roles: [
      {
        title: 'Global Operations & Strategy Associate',
        dates: 'Aug 2009 – Oct 2013',
        points: [
          'Delivered strategic insights to the CFO and COO of Advisory, preparing Quarterly Operations Reviews for the Chairman and CFO.',
          'Led the firm’s first Tableau deployment for executive dashboard automation.',
        ],
      },
    ],
  },
];

const COMPETENCIES = [
  'AI/ML & LLM strategy',
  'Generative AI & RAG',
  'AI governance & ethics',
  'AI portfolio ownership ($15M+)',
  'Operating model design',
  'Center of Excellence',
  'Digital transformation',
  'Business transformation',
  'Data strategy & analytics',
  'C-suite advisory',
  'Change management',
  'Team building (50+ FTEs)',
];

const QUOTES = [
  {
    q: 'With Brandon, you get a rare combination of business background, process expertise, technical aptitude and leadership. He’s a Leader with an agenda to accelerate change and drive innovation. His positive impact on Citigroup’s culture and drive for digital and data transformation cannot be overstated.',
    who: 'Dawn E. Kosinski',
    role: 'Global Account Director, Tableau',
  },
  {
    q: 'Brandon has an unwavering desire for his team to be the absolute best! He is the epitome of a servant leader that leads by example. One of Brandon’s best qualities is his ability to always push the needle. He does not settle for mediocrity and has the propensity to always go above and beyond.',
    who: 'Devin Carter, MBA',
    role: 'Technology Analyst, former direct report',
  },
  {
    q: 'Brandon LIVES and embodies ‘Get it done in IT.’ A no-nonsense, go get it, problem solver is who Brandon is. He is the guy who can get the room to both understand and act.',
    who: 'John Jensen',
    role: 'Global Account Director, Alteryx',
  },
  {
    q: 'Brandon not only excels at managing a technology team and portfolio, but also pioneers key IoT initiatives, mentors younger professionals, and drives innovative technology change. This rare mix of productivity, leadership, vision, and ambition sets a great example.',
    who: 'Barrett Drew',
    role: 'Sales Director, Snowflake',
  },
  {
    q: 'Brandon is a highly motivated and passionate IT professional who brings serious game to the Data & Analytics arena. Whether architecting an IoT solution or developing Tableau visualizations, he focuses on what the Customer needs.',
    who: 'Ed Haas',
    role: 'Technology Category Manager, Southwest Airlines',
  },
  {
    q: 'Brandon is an analytic, responsive and intelligent risk-taking manager. He is innovative, creative and ambitious. His willingness to learn and take on new responsibilities is something to be desired in any tech leader.',
    who: 'Juzer Kanchwala',
    role: 'Supply Chain Integration Lead, SAP Ariba',
  },
];

export default function ExperiencePage() {
  return (
    <BmShell nav={SITE_NAV} current="/experience">
      <section className="page-hero">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">Experience</div>
            <h1>
              Seventeen years building AI, data and transformation programs.
            </h1>
            <p className="lead">
              From analytics centers of excellence and global infrastructure to
              enterprise LLM platforms, across financial services, aviation and
              consulting. Most recently Head of AI Strategy &amp; Business
              Transformation for JPMorgan Payments.
            </p>
            <div className="actions">
              <a
                className="dl"
                href="/BrandonMicciResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <small>PDF</small>
              </a>
              <a
                className="dl"
                href="/executive-brief.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Executive brief <small>PDF</small>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="figures" aria-label="Scope of responsibility">
        <div className="wrap">
          <div className="row">
            <div className="fig">
              <div className="n">$15M+</div>
              <div className="d">Annual AI portfolio owned</div>
              <div className="s">JPMorgan Chase</div>
            </div>
            <div className="fig">
              <div className="n">30+</div>
              <div className="d">AI/ML use cases in production</div>
              <div className="s">JPMorgan Chase</div>
            </div>
            <div className="fig">
              <div className="n">500+</div>
              <div className="d">Engineers led through a matrix</div>
              <div className="s">Citi</div>
            </div>
            <div className="fig">
              <div className="n">$25M</div>
              <div className="d">Technology budget, team of 20+</div>
              <div className="s">Southwest Airlines</div>
            </div>
          </div>
        </div>
      </section>

      <section className="xp" id="career" aria-label="Career history">
        <div className="wrap">
          {CAREER.map((e) => (
            <article className="emp" key={e.company}>
              <header className="emp-head">
                <div>
                  <div className="yrs">{e.years}</div>
                  <h2>{e.company}</h2>
                  <div className="place">{e.place}</div>
                </div>
                {e.metric ? (
                  <div className="met">
                    <b>{e.metric.n}</b>
                    {e.metric.d}
                  </div>
                ) : null}
              </header>
              <div className="emp-body">
                {e.roles.map((r) => (
                  <div className="xrole" key={r.title}>
                    <h3>{r.title}</h3>
                    <div className="dates">
                      {r.dates}
                      {r.note ? <span> · {r.note}</span> : null}
                    </div>
                    {r.summary ? <p className="sum">{r.summary}</p> : null}
                    <ul>
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="tags">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills" id="competencies">
        <div className="wrap grid">
          <div className="sec-head">
            <div className="label">Competencies</div>
            <h2>What I bring</h2>
          </div>
          <div className="sec-body">
            <ul className="comp">
              {COMPETENCIES.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="stack-line">
              <span className="k">Platforms</span>
              AWS · Azure · Snowflake · Databricks · Spark · Kafka · Kubernetes
              · Tableau · Power BI · Alteryx
            </p>
            <div className="edu">
              <div className="label">Education</div>
              <h3>Bachelor of Arts, Business Administration</h3>
              <p>
                The George Washington University School of Business, Washington,
                D.C.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recs" id="recommendations">
        <div className="wrap grid">
          <div className="sec-head">
            <div className="label">Recommendations</div>
            <h2>From colleagues</h2>
          </div>
          <div className="quotes all">
            {QUOTES.map((x) => (
              <figure key={x.who}>
                <blockquote>“{x.q}”</blockquote>
                <figcaption>
                  <b>{x.who}</b>
                  {x.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="more">
            <a
              className="link arrow"
              href="https://www.linkedin.com/in/brandonmicci/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              All recommendations on LinkedIn{' '}
            </a>
          </p>
        </div>
      </section>

      <section className="next-page">
        <div className="wrap">
          <Link className="link arrow" href="/case-studies">
            Read the case studies{' '}
          </Link>
        </div>
      </section>

      <BmContact />
    </BmShell>
  );
}
