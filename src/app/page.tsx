import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Source_Serif_4, Young_Serif } from 'next/font/google';
import s from './home.module.css';

// Direction B ("The executive brief"). The homepage renders its own top bar
// and footer; the site-wide navigation and footer are skipped on "/" in
// layout.tsx.

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-young-serif',
});

const sourceSerif = Source_Serif_4({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
});

const EMAIL = 'brandon@brandonmicci.com';
const LINKEDIN = 'https://www.linkedin.com/in/brandonmicci';

const EMPLOYERS = [
  'JPMorgan Chase',
  'Citigroup',
  'Capital One',
  'Southwest Airlines',
  'Ernst & Young',
  'Capgemini',
  'Booz Allen Hamilton',
  'PwC',
];

const RESULTS = [
  {
    tab: 'AI Assistant',
    where: 'Head of AI Strategy & Business Transformation · JPMorgan Chase',
    note: 'Active users',
    fig: '27,000+',
    unit: 'on one enterprise LLM assistant',
    desc: 'Led the AI portfolio for JPMorgan Chase Payments. Scaled an enterprise AI assistant from 7,500 policy documents to ten integrated data sources, with human review on high-stakes decisions and an evaluation harness behind every release.',
  },
  {
    tab: 'Fraud Engine',
    where: 'Senior Manager, AI/ML Forensic Analytics · EY',
    note: 'Program value',
    fig: '$400MM',
    unit: 'ten-year AI fraud analytics program',
    desc: 'Helped win and then led delivery of a real-time fraud detection and analytics platform for a Fortune 50 insurer, processing millions of transactions.',
  },
  {
    tab: 'IoT Platform',
    where: 'Head of Digital Innovation & IoT · Southwest Airlines',
    note: 'Peak program ROI',
    fig: '250%',
    unit: 'within six months · $20M+ saved a year',
    desc: 'Built and led the airline’s IoT program: edge computing and AI analytics across fuel, baggage and de-icing operations at airports nationwide.',
  },
  {
    tab: 'Cloud & DevOps',
    where: 'VP, Global Infrastructure Transformation · Citigroup',
    note: 'Cloud enablement',
    fig: '200%',
    unit: 'faster, with recurring Sev1 outages removed',
    desc: 'Led DevOps transformation across global infrastructure: CI/CD pipelines, microservices and telemetry.',
  },
];

const RECOMMENDATIONS = [
  {
    who: 'Dawn E. Kosinski',
    role: 'Global Account Director',
    quote:
      'With Brandon, you get a rare combination of business background, process expertise, technical aptitude and leadership. His positive impact on Citigroup’s culture and drive for digital and data transformation cannot be overstated.',
  },
  {
    who: 'John Jensen',
    role: 'Global Account Director, Alteryx',
    quote:
      'A no-nonsense, go get it, problem solver is who Brandon is. He is the guy who can get the room to both understand and act.',
  },
  {
    who: 'Devin Carter, MBA',
    role: 'Technology Analyst · Former direct report',
    quote:
      'He is the epitome of a servant leader that leads by example. He does not settle for mediocrity and has the propensity to always go above and beyond.',
  },
];

export default function Home() {
  return (
    <div className={`${s.page} ${youngSerif.variable} ${sourceSerif.variable}`}>
      <header className={s.hero}>
        <div className={s.topbar}>
          <Link className={s.mark} href="/" aria-label="Brandon Micci, home">
            B&#8202;·&#8202;M
          </Link>
          <nav className={s.toplinks} aria-label="Site">
            <Link href="/experience">Experience</Link>
            <Link href="/articles">Articles</Link>
            <a
              href="/BrandonMicciResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </nav>
        </div>
        <h1>Brandon Micci</h1>
        <p className={s.sub}>
          Enterprise AI and transformation executive. Seventeen years leading
          AI, data and digital transformation inside Fortune 500 companies, most
          recently at JPMorgan Chase.
        </p>
        <nav className={s.stack} aria-label="Sections">
          <a className={`${s.folder} ${s.f1}`} href="#career">
            <span className={s.tab}>Career</span>
          </a>
          <a className={`${s.folder} ${s.f2}`} href="#results">
            <span className={s.tab}>Results</span>
          </a>
          <a className={`${s.folder} ${s.f3}`} href="#about">
            <span className={s.tab}>Letter</span>
          </a>
          <a className={`${s.folder} ${s.f4}`} href="#recommendations">
            <span className={s.tab}>Recommendations</span>
          </a>
          <div className={`${s.folder} ${s.f5}`}>
            <span className={s.tab}>Contact</span>
            <div className={s.open}>
              <a className={s.btn} href="#connectwithme">
                Discuss a role
              </a>
              <p>
                Open to VP and C‑suite roles leading enterprise AI, data and
                digital transformation. Based in Dallas; open to hybrid, remote
                or relocation.
              </p>
            </div>
          </div>
        </nav>
      </header>

      <section className={s.proof} id="career" aria-labelledby="h-career">
        <div className={s.card}>
          <h2 id="h-career">Career record</h2>
          <p className={s.lede}>Roles held at</p>
          <p className={s.names}>
            {EMPLOYERS.map((n, i) => (
              <Fragment key={n}>
                <span>
                  {n}
                  {i < EMPLOYERS.length - 1 ? '\u00a0·' : ''}
                </span>{' '}
              </Fragment>
            ))}
          </p>
          <p className={s.ledeAfter}>Board member, DFW CTO Club</p>
        </div>
      </section>

      <section className={s.work} id="results" aria-labelledby="h-results">
        <h2 id="h-results" className={s.workHead}>
          Selected results
        </h2>
        {RESULTS.map((r) => (
          <article className={s.band} key={r.tab}>
            <div className={s.strip}>
              <h3 className={s.bandTab}>{r.tab}</h3>
              <span className={s.cat}>{r.where}</span>
            </div>
            <div className={s.inner}>
              <div className={s.plate}>
                <span className={s.note}>{r.note}</span>
                <span className={s.fig}>{r.fig}</span>
                <span className={s.unit}>{r.unit}</span>
              </div>
              <div className={s.desc}>
                <p>{r.desc}</p>
                <Link href="/case-studies">Read the case study</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section
        className={s.about}
        id="about"
        aria-label="A letter from Brandon"
      >
        <div className={s.sheet}>
          <Image
            className={s.portrait}
            src="/headshot.webp"
            alt="Brandon Micci"
            width={88}
            height={88}
          />
          <p>Thank you for taking the time to look.</p>
          <p>
            For seventeen years I have led one kind of work from inside large,
            regulated companies: taking a technology everyone is excited about
            and making it <mark>deliver measurable results</mark>.
          </p>
          <p>
            Most recently I was Head of AI Strategy &amp; Business
            Transformation for JPMorgan Chase Payments, where I owned the AI
            portfolio from strategy through delivery. Before that I led AI and
            IoT work at Capgemini, EY and Southwest Airlines, cloud
            transformation at Citi and analytics platforms at Capital One.
          </p>
          <p>
            I am looking for my next executive role leading AI, data and
            transformation. If you are hiring for one, I would welcome a
            conversation.
          </p>
          <p className={s.sign}>Brandon Micci</p>
          <p className={s.role}>
            Enterprise AI &amp; Digital Transformation Executive · Dallas
          </p>
        </div>
        <div className={s.tear}>
          <span>{EMAIL}</span>
          <a className={s.btn} href={`mailto:${EMAIL}`}>
            Email me
          </a>
        </div>
      </section>

      <section className={s.slips} id="recommendations" aria-labelledby="h-rec">
        <h2 id="h-rec">Recommendations</h2>
        <a
          className={s.recLink}
          href={`${LINKEDIN}/details/recommendations/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          All recommendations on LinkedIn
        </a>
        <div className={s.fan}>
          {RECOMMENDATIONS.map((r, i) => (
            <figure
              className={`${s.slip} ${[s.s1, s.s2, s.s3][i]}`}
              key={r.who}
            >
              <p className={s.who}>{r.who}</p>
              <p className={s.whoRole}>{r.role}</p>
              <blockquote>“{r.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </section>

      <section
        className={s.contact}
        id="connectwithme"
        aria-labelledby="h-contact"
      >
        <div className={s.coupon}>
          <div className={s.couponL}>
            <h2 id="h-contact">
              Discuss an
              <br />
              executive role
            </h2>
            <p>Recruiters and hiring leaders can reach me directly.</p>
          </div>
          <div className={s.couponR}>
            <a className={s.primary} href={`mailto:${EMAIL}`}>
              Email {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn <small>linkedin.com/in/brandonmicci</small>
            </a>
            <a
              href="/BrandonMicciResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé <small>PDF</small>
            </a>
            <a
              href="/executive-brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Executive brief <small>PDF, two pages</small>
            </a>
          </div>
        </div>
      </section>

      <footer className={s.foot}>
        <div className={s.back}>
          <div>
            <h2>With thanks,</h2>
            <p>
              My full career history is on the experience page, and my thinking
              on running AI inside large companies is in the articles.
            </p>
          </div>
          <ul>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <div className={s.stampbox}>
            <Image src="/headshot.webp" alt="" width={176} height={235} />
          </div>
          <p className={s.imprint}>
            © {new Date().getFullYear()} Brandon Micci · Dallas, Texas ·{' '}
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
