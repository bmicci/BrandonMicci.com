import type { CSSProperties } from 'react';
import Image from 'next/image';
import {
  IBM_Plex_Mono,
  Inter,
  Inter_Tight,
  Source_Serif_4,
} from 'next/font/google';
import HomeEnhancements from './HomeEnhancements';
import './home.css';

// Homepage: the executive portfolio. It draws its own header, menu and footer;
// layout.tsx skips the site-wide navigation and footer on "/".

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter-tight',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
  variable: '--font-source-serif',
});

export default function Home() {
  return (
    <div
      className={`bm ${inter.variable} ${interTight.variable} ${plexMono.variable} ${sourceSerif.variable}`}
    >
      <header className="top">
        <div className="wrap">
          <a className="wordmark" href="#main">
            Brandon Micci
          </a>
          <div className="right">
            <nav aria-label="Primary">
              <a href="#career">Career</a>
              <a href="#results">Results</a>
              <a href="#writing">Writing</a>
              <a href="#speaking">Speaking</a>
              <a href="#contact">Contact</a>
            </nav>
            <button
              className="icon-btn theme"
              type="button"
              aria-label="Switch to dark mode"
            >
              <svg
                className="moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
              </svg>
              <svg
                className="sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>
            <button
              className="icon-btn burger"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className="menu"
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <ol>
          <li style={{ '--i': 0 } as CSSProperties}>
            <a href="#career">
              <small>01</small>Career
            </a>
          </li>
          <li style={{ '--i': 1 } as CSSProperties}>
            <a href="#results">
              <small>02</small>Results
            </a>
          </li>
          <li style={{ '--i': 2 } as CSSProperties}>
            <a href="#writing">
              <small>03</small>Writing
            </a>
          </li>
          <li style={{ '--i': 3 } as CSSProperties}>
            <a href="#speaking">
              <small>04</small>Speaking
            </a>
          </li>
          <li style={{ '--i': 4 } as CSSProperties}>
            <a href="#contact">
              <small>05</small>Contact
            </a>
          </li>
        </ol>
        <div className="foot">
          <a className="btn" href="#contact">
            Get in touch <span className="arrow"></span>
          </a>
          <span>brandon@brandonmicci.com · Dallas, Texas</span>
        </div>
      </div>

      <main id="main">
        <section className="hero">
          <div className="wrap grid">
            <div className="copy">
              <div className="label">Enterprise AI &amp; Data Leader</div>
              <h1>Making enterprise AI deliver measurable results.</h1>
              <p className="lead">
                Seventeen years leading AI, data and transformation inside
                regulated companies, from JPMorgan Chase and Citi to Southwest
                Airlines and EY. I write and speak about what it takes to run AI
                at enterprise scale.
              </p>
              <div className="actions">
                <a className="btn" href="#contact">
                  Let’s connect <span className="arrow"></span>
                </a>
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
            <figure>
              <Image
                src="/headshot.webp"
                alt="Brandon Micci"
                width={400}
                height={500}
                priority
                sizes="(max-width: 900px) 320px, 360px"
              />
              <figcaption>
                Dallas, Texas · Board member, DFW CTO Club
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="figures" aria-label="Results in figures">
          <div className="wrap">
            <div className="row">
              <div className="fig">
                <div className="n">27,000+</div>
                <div className="d">users on an enterprise LLM assistant</div>
                <div className="s">JPMorgan Chase Payments</div>
              </div>
              <div className="fig">
                <div className="n">$400M</div>
                <div className="d">
                  ten-year AI fraud analytics program, helped win and led
                  delivery
                </div>
                <div className="s">EY, major U.S. insurer</div>
              </div>
              <div className="fig">
                <div className="n">250%</div>
                <div className="d">
                  IoT program ROI within six months; $20M+ saved a year
                </div>
                <div className="s">Southwest Airlines</div>
              </div>
              <div className="fig">
                <div className="n">$50M+</div>
                <div className="d">
                  documented savings across transformation programs
                </div>
                <div className="s">2009–2026</div>
              </div>
            </div>
          </div>
        </section>

        <section className="firms" aria-label="Organizations">
          <div className="wrap">
            <div className="label">Where I’ve delivered</div>
            <ul>
              <li>JPMorgan Chase</li>
              <li>Citi</li>
              <li>Capital One</li>
              <li>Southwest Airlines</li>
              <li>EY</li>
              <li>PwC</li>
              <li>Capgemini</li>
              <li>Booz Allen Hamilton</li>
            </ul>
          </div>
        </section>

        <section className="caps" id="capabilities">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Capabilities</div>
              <h2>What I lead</h2>
            </div>
            <div className="sec-body">
              <div className="quad">
                <div>
                  <span className="k">01</span>
                  <h3>AI strategy and investment</h3>
                  <p>
                    Enterprise AI strategy tied to C‑suite priorities, with
                    investment roadmaps measured in P&amp;L impact.
                  </p>
                </div>
                <div>
                  <span className="k">02</span>
                  <h3>Scale and delivery</h3>
                  <p>
                    Taking AI from pilot to enterprise capability, built for
                    Fortune 500 reliability and adoption in regulated
                    environments.
                  </p>
                </div>
                <div>
                  <span className="k">03</span>
                  <h3>Board-level decisions</h3>
                  <p>
                    Turning complex AI into decisions boards can make: business
                    cases, ROI and the narrative that moves investment.
                  </p>
                </div>
                <div>
                  <span className="k">04</span>
                  <h3>Responsible AI and governance</h3>
                  <p>
                    Risk frameworks, evaluation and AIOps from day one, where
                    compliance is not optional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career" id="career">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Career</div>
              <h2>Executive experience</h2>
              <p className="sh">
                Seventeen years across Fortune 500 companies and Big Four
                advisory.
              </p>
            </div>
            <div className="sec-body">
              <div className="rail" aria-hidden="true">
                <i></i>
              </div>
              <ol className="roles">
                <li className="now">
                  <span className="y">2026–</span>
                  <div>
                    <h3>
                      <span className="todo">[Your title]</span>
                    </h3>
                    <div className="co">Charles Schwab</div>
                  </div>
                  <span className="met"></span>
                </li>
                <li>
                  <span className="y">2024–2026</span>
                  <div>
                    <h3>Head of AI Strategy &amp; Business Transformation</h3>
                    <div className="co">JPMorgan Chase · Payments</div>
                    <p>
                      Scaled the Payments LLM assistant to 27,000+ users and set
                      up the firm’s AI delivery lifecycle: evaluation, AIOps and
                      production governance.
                    </p>
                  </div>
                  <span className="met">
                    <b>$22M+</b>annualized savings
                  </span>
                </li>
                <li>
                  <span className="y">2022</span>
                  <div>
                    <h3>
                      Senior Director, Head of AI/IoT &amp; Emerging Technology
                    </h3>
                    <div className="co">Capgemini</div>
                    <p>
                      Built the AI/IoT and emerging technology practice from
                      inception and generated $9.8M in qualified pipeline.
                    </p>
                  </div>
                  <span className="met">
                    <b>$30M</b>revenue target
                  </span>
                </li>
                <li>
                  <span className="y">2021–2022</span>
                  <div>
                    <h3>
                      Senior Manager, AI/ML Forensic Analytics &amp; Technology
                    </h3>
                    <div className="co">EY</div>
                    <p>
                      Won and led a real-time, AI-powered fraud analytics engine
                      for a major U.S. health insurer.
                    </p>
                  </div>
                  <span className="met">
                    <b>$400M</b>ten-year engagement
                  </span>
                </li>
                <li>
                  <span className="y">2019–2020</span>
                  <div>
                    <h3>Head of Digital Innovation &amp; IoT</h3>
                    <div className="co">Southwest Airlines</div>
                    <p>
                      Took an IoT pilot to $20M+ in annual value across fuel,
                      baggage and de-icing operations.
                    </p>
                  </div>
                  <span className="met">
                    <b>250%</b>ROI in six months
                  </span>
                </li>
                <li>
                  <span className="y">2017–2019</span>
                  <div>
                    <h3>
                      Vice President, Global Infrastructure Transformation
                    </h3>
                    <div className="co">Citi</div>
                    <p>
                      Led DevOps transformation across global infrastructure and
                      removed recurring Sev1 outages.
                    </p>
                  </div>
                  <span className="met">
                    <b>200%</b>faster cloud enablement
                  </span>
                </li>
                <li className="sm">
                  <span className="y">2009–2017</span>
                  <div>
                    <h3>Analytics and risk leadership; consulting</h3>
                    <div className="co">
                      Capital One · Booz Allen Hamilton · PwC
                    </div>
                  </div>
                  <span className="met"></span>
                </li>
              </ol>
              <p className="more">
                <a className="link arrow" href="/experience">
                  Full timeline, 11 roles{' '}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="results" id="results">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Results</div>
              <h2>Transformation programs</h2>
            </div>
            <div className="cases stack">
              <article className="case">
                <div>
                  <div className="idx">01 / 05</div>
                  <div className="n">27,000+</div>
                  <div className="u">active users · 10+ data sources</div>
                </div>
                <div>
                  <h3>Enterprise knowledge assistant</h3>
                  <div className="w">JPMorgan Chase Payments · 2024–2026</div>
                  <p>
                    An enterprise LLM platform that grew from 7,500 policy
                    documents to ten integrated data sources, with human review
                    on high-stakes decisions and an evaluation harness behind
                    every release.
                  </p>
                  <div className="tags">
                    <span>LLM</span>
                    <span>Evaluation</span>
                    <span>Governance</span>
                  </div>
                </div>
              </article>
              <article className="case">
                <div>
                  <div className="idx">02 / 05</div>
                  <div className="n">$400M</div>
                  <div className="u">ten-year engagement</div>
                </div>
                <div>
                  <h3>Real-time fraud analytics</h3>
                  <div className="w">
                    EY · Major U.S. health insurer · 2021–2022
                  </div>
                  <p>
                    A machine learning fraud detection platform processing
                    millions of transactions in real time.
                  </p>
                  <div className="tags">
                    <span>Machine learning</span>
                    <span>Real-time</span>
                    <span>Fraud</span>
                  </div>
                </div>
              </article>
              <article className="case">
                <div>
                  <div className="idx">03 / 05</div>
                  <div className="n">250%</div>
                  <div className="u">ROI · $20M+ a year</div>
                </div>
                <div>
                  <h3>Airline IoT platform</h3>
                  <div className="w">Southwest Airlines · 2019–2020</div>
                  <p>
                    Edge computing and AI analytics across fuel, baggage and
                    de-icing operations at airports nationwide.
                  </p>
                  <div className="tags">
                    <span>IoT</span>
                    <span>Edge computing</span>
                    <span>AWS</span>
                  </div>
                </div>
              </article>
              <article className="case">
                <div>
                  <div className="idx">04 / 05</div>
                  <div className="n">30,000+</div>
                  <div className="u">platform users</div>
                </div>
                <div>
                  <h3>Enterprise analytics community</h3>
                  <div className="w">Top-10 U.S. bank · 2015–2019</div>
                  <p>
                    An enterprise analytics platform and community of practice
                    that put self-service data in the hands of 30,000 employees.
                  </p>
                  <div className="tags">
                    <span>Analytics</span>
                    <span>Tableau</span>
                    <span>Adoption</span>
                  </div>
                </div>
              </article>
              <article className="case">
                <div>
                  <div className="idx">05 / 05</div>
                  <div className="n">200%</div>
                  <div className="u">faster cloud enablement</div>
                </div>
                <div>
                  <h3>Global DevOps transformation</h3>
                  <div className="w">Citi · 2017–2019</div>
                  <p>
                    CI/CD, microservices and telemetry across global
                    infrastructure, removing recurring Sev1 outages.
                  </p>
                  <div className="tags">
                    <span>DevOps</span>
                    <span>Cloud</span>
                    <span>Reliability</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Approach</div>
              <h2>What sets the work apart</h2>
            </div>
            <div className="sec-body">
              <p className="thesis">
                I build AI strategies that become business strategies: operating
                models where AI informs real decisions, with the governance
                discipline that regulated companies require. The test is simple.
                The business can see the result.
              </p>
              <div className="quad">
                <div>
                  <span className="k">01</span>
                  <h3>Regulated-industry native</h3>
                  <p>
                    AI delivered in payments, financial services, insurance and
                    aviation. Production systems that pass compliance, audit and
                    risk review, not lab demos.
                  </p>
                </div>
                <div>
                  <span className="k">02</span>
                  <h3>Strategy through delivery</h3>
                  <p>
                    The full lifecycle: strategy, executive buy-in, investment,
                    delivery and operations. Roadmaps that ship.
                  </p>
                </div>
                <div>
                  <span className="k">03</span>
                  <h3>Operator and advisor</h3>
                  <p>
                    Seventeen years across Fortune 500 operating roles and Big
                    Four advisory, on both sides of the table.
                  </p>
                </div>
                <div>
                  <span className="k">04</span>
                  <h3>Adoption at scale</h3>
                  <p>
                    Adoption driven by change leadership, not mandates: a
                    27,000-user LLM platform and a 30,000-person analytics
                    community.
                  </p>
                </div>
              </div>
              <div className="sig">
                <Image src="/headshot.webp" alt="" width={56} height={56} />
                <div>
                  <b>Brandon Micci</b>
                  <span>Dallas, Texas · Board member, DFW CTO Club</span>
                </div>
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
            <div className="quotes">
              <figure>
                <blockquote>
                  “With Brandon, you get a rare combination of business
                  background, process expertise, technical aptitude and
                  leadership.”
                </blockquote>
                <figcaption>
                  <b>Dawn E. Kosinski</b>Global Account Director, on his work at
                  Citigroup
                </figcaption>
              </figure>
              <figure>
                <blockquote>
                  “A no-nonsense, go get it, problem solver. He is the guy who
                  can get the room to both understand and act.”
                </blockquote>
                <figcaption>
                  <b>John Jensen</b>Global Account Director, Alteryx
                </figcaption>
              </figure>
              <figure>
                <blockquote>
                  “The epitome of a servant leader that leads by example. He
                  does not settle for mediocrity.”
                </blockquote>
                <figcaption>
                  <b>Devin Carter, MBA</b>Technology Analyst, former direct
                  report
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="persp" id="writing">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Writing</div>
              <h2>Articles and frameworks</h2>
              <p className="sh">
                Practical writing for leaders taking AI from pilot to production
                in regulated industries.
              </p>
              <p className="sh">
                <a className="link arrow" href="/articles">
                  All writing{' '}
                </a>
              </p>
            </div>
            <div className="arts">
              <a className="art feat" href="/articles/ai-delivery-lifecycle">
                <div>
                  <div className="tags">
                    <span>Latest</span>
                    <span>Delivery</span>
                  </div>
                  <h3>
                    Your AI pilot didn’t fail. It was never designed to ship.
                  </h3>
                  <p>
                    A pilot is built to prove value. A production system has to
                    prove trust. The delivery lifecycle is the designed path
                    between them.
                  </p>
                </div>
                <span className="meta">September 2026 · 9 min</span>
              </a>
              <a className="art" href="/articles/ai-operating-model">
                <div>
                  <div className="tags">
                    <span>Operating model</span>
                  </div>
                  <h3>
                    Your AI strategy isn’t the problem. Your operating model is.
                  </h3>
                  <p>
                    The five components you have to design on purpose to run AI
                    at enterprise scale, and why building inside model risk
                    management turned out to be an advantage.
                  </p>
                </div>
                <span className="meta">September 2026 · 10 min</span>
              </a>
              <div className="art next">
                <div>
                  <div className="tags">
                    <span>Next</span>
                  </div>
                  <h3>New articles appear here as they publish</h3>
                  <p>Follow on LinkedIn to get them first.</p>
                </div>
                <span className="meta"></span>
              </div>
            </div>
          </div>
        </section>
        <section className="speak" id="speaking">
          <div className="wrap grid">
            <div className="sec-head">
              <div className="label">Speaking</div>
              <h2>Talks and collaboration</h2>
              <p className="sh">
                Keynotes, panels, fireside chats, podcasts and leadership
                roundtables.
              </p>
            </div>
            <div className="sec-body">
              <ol className="topics">
                <li>
                  <span className="k">01</span>
                  <div>
                    <h3>Running AI as an operating model, not a project</h3>
                    <p>
                      Decision rights, funding, evaluation and the teams that
                      keep AI reliable after launch.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="k">02</span>
                  <div>
                    <h3>From pilot to production in a regulated company</h3>
                    <p>
                      Why most pilots stall, and the delivery lifecycle that
                      gets AI into the hands of 27,000 users.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="k">03</span>
                  <div>
                    <h3>Governance as an accelerator</h3>
                    <p>
                      Building inside model risk management and human review so
                      AI ships faster, not slower.
                    </p>
                  </div>
                </li>
              </ol>
              <div className="formats">
                <span>Keynote</span>
                <span>Panel</span>
                <span>Fireside chat</span>
                <span>Podcast</span>
                <span>Roundtable</span>
                <span>Guest lecture</span>
              </div>
              <p className="more">
                <a className="btn" href="#contact">
                  Invite me to speak <span className="arrow"></span>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap grid">
            <div className="l">
              <div className="label onNavy">Contact</div>
              <h2>Let’s compare notes.</h2>
              <p>
                For speaking invitations, podcasts, panels, and conversations
                with other leaders working on enterprise AI.
              </p>
            </div>
            <div className="r">
              <a href="mailto:brandon@brandonmicci.com">
                brandon@brandonmicci.com <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/brandonmicci"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/brandonmicci <span>LinkedIn</span>
              </a>
              <a
                href="/BrandonMicciResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <span>PDF</span>
              </a>
              <a
                href="/executive-brief.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Executive brief <span>PDF, two pages</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} Brandon Micci · Dallas, Texas
          </span>
          <nav>
            <a href="/experience">Experience</a>
            <a href="/case-studies">Case studies</a>
            <a href="/articles">Writing</a>
            <a href="/privacy">Privacy</a>
          </nav>
          <p className="disc">
            Views expressed on this site are my own and do not represent those
            of Charles Schwab.
          </p>
        </div>
      </footer>
      <HomeEnhancements />
    </div>
  );
}
