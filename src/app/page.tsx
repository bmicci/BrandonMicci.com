import Image from 'next/image';
import BmShell, { BmContact, HOME_NAV } from '@/components/bm/BmShell';

// Homepage: the executive portfolio. BmShell draws the header, menu and
// footer; layout.tsx skips the site-wide chrome on the portfolio pages.

export default function Home() {
  return (
    <BmShell nav={HOME_NAV} home>
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
            <figcaption>Dallas, Texas · Board member, DFW CTO Club</figcaption>
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
                ten-year digital transformation and AI fraud analytics
                engagement, helped win
              </div>
              <div className="s">EY, Top-5 national health insurer</div>
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
                    Helped win a ten-year digital transformation engagement for
                    a Top-5 national health insurer, from legacy platform
                    modernization to AI/ML-powered fraud analytics.
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
                    Scaled an IoT pilot to 20 stations and $20M+ in annual
                    savings across fuel, baggage and de-icing operations.
                  </p>
                </div>
                <span className="met">
                  <b>250%</b>ROI in six months
                </span>
              </li>
              <li>
                <span className="y">2017–2019</span>
                <div>
                  <h3>Vice President, Global Infrastructure Transformation</h3>
                  <div className="co">Citi</div>
                  <p>
                    Led DevOps transformation across global infrastructure and
                    eliminated weekly Sev1 outages.
                  </p>
                </div>
                <span className="met">
                  <b>200%</b>faster cloud adoption
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
                <div className="u">active users · 12+ knowledge sources</div>
              </div>
              <div>
                <h3>Enterprise knowledge assistant</h3>
                <div className="w">JPMorgan Chase Payments · 2024–2026</div>
                <p>
                  An enterprise LLM platform that grew from 7,500 policy
                  documents to 12+ knowledge sources, with human review on
                  high-stakes decisions and an evaluation harness behind every
                  release.
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
                <h3>Fraud analytics transformation</h3>
                <div className="w">
                  EY · Top-5 national health insurer · 2021–2022
                </div>
                <p>
                  Helped win the engagement and designed the phased roadmap,
                  from legacy platform modernization through an enterprise data
                  platform to AI/ML-powered fraud analytics.
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
                  de-icing operations, scaled to 20 stations.
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
                <div className="w">Capital One · 2015–2016</div>
                <p>
                  Founded the Tableau and Big Data center of excellence and grew
                  a 30,000+ user community of practice, retiring 2,000+ legacy
                  dashboards and reports for $8M in annual savings.
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
                <div className="u">faster cloud adoption</div>
              </div>
              <div>
                <h3>Global DevOps transformation</h3>
                <div className="w">Citi · 2017–2019</div>
                <p>
                  CI/CD, microservices and telemetry across global
                  infrastructure, eliminating weekly Sev1 outages.
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
                “A no-nonsense, go get it, problem solver. He is the guy who can
                get the room to both understand and act.”
              </blockquote>
              <figcaption>
                <b>John Jensen</b>Global Account Director, Alteryx
              </figcaption>
            </figure>
            <figure>
              <blockquote>
                “The epitome of a servant leader that leads by example. He does
                not settle for mediocrity.”
              </blockquote>
              <figcaption>
                <b>Devin Carter, MBA</b>Technology Analyst, former direct report
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
                  The five components you have to design on purpose to run AI at
                  enterprise scale, and why building inside model risk
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
                    Decision rights, funding, evaluation and the teams that keep
                    AI reliable after launch.
                  </p>
                </div>
              </li>
              <li>
                <span className="k">02</span>
                <div>
                  <h3>From pilot to production in a regulated company</h3>
                  <p>
                    Why most pilots stall, and the delivery lifecycle that gets
                    AI into the hands of 27,000 users.
                  </p>
                </div>
              </li>
              <li>
                <span className="k">03</span>
                <div>
                  <h3>Governance as an accelerator</h3>
                  <p>
                    Building inside model risk management and human review so AI
                    ships faster, not slower.
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
      <BmContact />
    </BmShell>
  );
}
