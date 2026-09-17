'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ArticleContent() {
  return (
    <>
      <style jsx>{`
        .article-page {
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

        .article-container {
          max-width: 760px;
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
          margin-bottom: 2.5rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #00d4ff;
        }

        .article-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .article-meta {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.55);
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 212, 255, 0.15);
          margin-bottom: 2.5rem;
        }

        .article-body :global(p) {
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.5rem;
        }

        .article-body :global(h2) {
          font-size: 1.7rem;
          font-weight: 700;
          color: white;
          margin: 2.75rem 0 1.25rem;
          line-height: 1.3;
        }

        .article-body :global(strong) {
          color: white;
        }

        .article-body :global(a) {
          color: #00d4ff;
          text-decoration: none;
        }

        .article-bio {
          margin-top: 3rem;
          padding: 1.75rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 16px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }

        .article-bio :global(a) {
          color: #00d4ff;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .article-title {
            font-size: 1.85rem;
          }

          .article-subtitle {
            font-size: 1.05rem;
          }
        }
      `}</style>

      <div className="article-page">
        <div className="article-container">
          <Link href="/articles" className="back-link">
            <ArrowLeft size={16} />
            All Articles
          </Link>

          <h1 className="article-title">
            Your AI Pilot Didn&rsquo;t Fail. It Was Never Designed to Ship.
          </h1>
          <p className="article-subtitle">
            The missing discipline between the demo that wowed the steering
            committee and a system the business actually depends on.
          </p>
          <div className="article-meta">
            By Brandon Micci · September 2026 · 9 min read
          </div>

          <div className="article-body">
            <p>
              Walk into almost any large enterprise and you will find the same
              artifact: a pilot that impressed everyone eight months ago and is
              still, today, a pilot. The demo went well. The steering committee
              was energized. Budget was approved. And then the thing entered a
              strange limbo, too promising to kill, not trusted enough to ship,
              consuming just enough attention to block the next idea behind it.
            </p>
            <p>
              I have written before about why AI use case backlogs turn into
              graveyards. This piece is about the machinery that prevents it:
              the delivery lifecycle, the designed path from experiment to
              production to operations. Most organizations have this for
              ordinary software and assume it transfers to AI. It does not, for
              one structural reason worth stating plainly.
            </p>
            <p>
              A pilot is built to prove value. A production system has to prove
              trust. Those are different jobs, they produce different evidence,
              and the work that gets you the first almost never gets you the
              second. Traditional software crosses that gap on rails the
              industry spent decades building: testing practices, release gates,
              operational runbooks. AI systems, which behave probabilistically,
              degrade silently, and answer differently on Tuesday than they did
              on Friday, break most of those rails. When nobody designs
              replacements, every use case has to improvise its own path to
              production. Improvised paths are slow, inconsistent, and
              exhausting, so most use cases simply stop walking. That is the
              graveyard mechanism. Not bad technology. An undesigned road.
            </p>
            <p>
              Here is the lifecycle I have seen work, in the shape I would build
              it again: three phases, with real gates between them, and one
              non-negotiable thread running through all three.
            </p>

            <h2>Phase one: experiment like it might ship</h2>
            <p>
              The experimental phase should be cheap, fast, and mostly
              permissionless. That part everyone gets right. What gets missed is
              the small amount of discipline that makes an experiment worth
              anything later.
            </p>
            <p>
              Every experiment should start with three things on one page: a
              named business owner who wants the outcome, the metric that
              outcome will be measured by, and confirmation that the data the
              idea depends on actually exists and can actually be accessed. That
              last one sounds trivial and kills more use cases than model
              quality ever has. An experiment without these three is not an
              experiment. It is a hobby, and it will consume real capacity.
            </p>
            <p>
              The most valuable sentence in the whole lifecycle gets written
              here, at entry: what evidence would justify taking this to
              production, and what result means we stop? Deciding the kill
              criteria before anyone is emotionally invested is the only time it
              is easy. Organizations that skip this end up with the limbo
              pilots, because after the impressive demo, nobody has standing to
              say the words &ldquo;this is done, and the answer is no.&rdquo;
            </p>
            <p>
              And a stopped experiment with a clean write-up is a success of the
              lifecycle, not a failure of the team. If nothing ever dies in
              phase one, your gates are not gates.
            </p>

            <h2>Phase two: the production gate runs on evidence</h2>
            <p>
              Between experiment and production sits the gate that matters, and
              the question it asks is simple: can you show me, not tell me, that
              this system does its job within understood limits?
            </p>
            <p>
              The machinery that answers it is the evaluation harness, and it is
              the single highest-leverage investment in the entire lifecycle. A
              harness is a versioned set of test cases that represent the job:
              real examples, hard examples, adversarial examples, the failure
              modes the business fears most, each with a definition of
              acceptable output. Every candidate system runs the full set, every
              time anything changes: the prompt, the model version, the
              retrieval sources, the upstream data. The result is a score with a
              history rather than a vibe with a demo.
            </p>
            <p>
              Three things happen when the harness exists. Quality conversations
              become concrete, because &ldquo;it feels better&rdquo; is replaced
              by &ldquo;it moved from here to here on the cases that
              matter.&rdquo; Regressions become visible on the day they occur
              rather than the month a user complains. And the evidence your risk
              and control partners need stops being a document someone
              reconstructs at the end and becomes a byproduct the work produces
              continuously. I have made the argument elsewhere that controls
              should be design inputs, not late-stage reviews. The harness is
              where that argument becomes mechanical: the review at the gate
              confirms what the harness already recorded.
            </p>
            <p>
              The other work of phase two is deciding where humans sit.
              Human-in-the-loop is the most abused phrase in enterprise AI,
              usually meaning &ldquo;someone glances at some outputs
              sometimes,&rdquo; which is not a control, it is a mood. Designed
              properly, it specifies which outputs get human review before they
              take effect, chosen by risk rather than by convenience, what share
              of the rest gets sampled after the fact, and where the
              human&rsquo;s decision goes, because a review loop that does not
              feed corrections back into the harness is paying for judgment and
              then discarding it. Coverage should be a number someone owns. If
              you cannot state what fraction of consequential outputs a human
              sees, you do not have a human in the loop. You have a human near
              the loop.
            </p>

            <h2>Phase three: operations, where AI is least like software</h2>
            <p>
              Ordinary software mostly breaks loudly, with an error, a timeout,
              a page. AI systems break quietly. The model keeps returning
              confident answers while the world drifts out from under it: the
              product catalog changes, the customer language shifts, a knowledge
              source goes stale, an upstream team swaps a model version. Nothing
              pages. Quality just sags until a human notices, and by then the
              humans who notice are your customers.
            </p>
            <p>
              So operating AI means monitoring three layers, not one. The
              infrastructure layer, which you already know how to do. The
              behavior layer: the evaluation harness rerun on schedule against
              live traffic samples, drift measures on inputs and outputs, the
              rate at which human reviewers are overriding the system, which is
              the single most honest quality signal you own. And the outcome
              layer: the business metric from that original one-pager, because a
              system can be technically healthy and quietly useless.
            </p>
            <p>
              Operations also needs the same clarity ordinary production systems
              get and pilots never do. A named owner on call. A defined rollback
              that is actually rehearsed. Thresholds that trigger review,
              retraining, or retirement. Retirement deserves emphasis: an AI
              portfolio without a decommissioning path only ever grows, and
              every stale system in it is a liability wearing a success
              story&rsquo;s badge.
            </p>

            <h2>The thread through all three: evidence compounds</h2>
            <p>
              Notice what the lifecycle actually produces beyond shipped
              systems. The experiment phase produces one-pagers and kill
              decisions. The gate produces harnesses and documented limits.
              Operations produces behavioral history and override data. All of
              it is evidence, and evidence compounds in a way heroics never do.
            </p>
            <p>
              The second use case that resembles the first should not start from
              zero. It inherits the harness structure, the HITL pattern, the
              monitoring template, and most of the answers to the control
              questions, because those were captured as artifacts rather than
              trapped in the heads of whoever survived the first delivery. This
              is how organizations go from shipping one AI system in a year to
              shipping one a month without the governance function becoming the
              bottleneck, and it is the point where the delivery lifecycle and{' '}
              <Link href="/articles/ai-operating-model">
                the operating model I have written about previously
              </Link>{' '}
              turn out to be the same subject viewed from two altitudes. The
              operating model says who decides. The lifecycle says what they
              decide with.
            </p>

            <h2>Where to start</h2>
            <p>
              If your portfolio is heavy on pilots and light on production,
              three moves will locate the blockage quickly.
            </p>
            <p>
              First, take your three most promising pilots and ask each team to
              produce the one-pager: owner, metric, data confirmation, and the
              evidence that would justify production. The teams that cannot
              produce it in a day have told you why their pilot is stuck, and it
              is not the model.
            </p>
            <p>
              Second, fund one evaluation harness for your single most important
              use case and make it the template. Do not boil the portfolio. One
              well-built harness teaches the organization what evidence-based
              gating feels like, and every harness after it is cheaper than the
              last.
            </p>
            <p>
              Third, ask who is on call for the AI systems already in production
              and what number would trigger a rollback. Silence in response to
              that question is your operations phase asking to be designed,
              preferably before it designs itself during an incident.
            </p>
            <p>
              The models will keep getting better, and better models will make
              more pilots look promising, which means the graveyard grows
              faster, not slower, for organizations without a road out of it.
              Building the road is unglamorous work. It is also the difference
              between an AI program that produces demos and one that produces a
              business.
            </p>
          </div>

          <div className="article-bio">
            Brandon Micci is a Dallas-based AI strategy and business
            transformation executive with 17+ years across financial services,
            consulting, and aviation. Most recently he led AI strategy and
            transformation for a business unit of a Fortune-50 financial
            institution, where he designed the AI operating model, established
            the AI Center of Excellence and model risk framework, and directed
            the platform that scaled an enterprise LLM assistant to 27,000+
            employees. He serves on the board of the Dallas CTO Club.{' '}
            <Link href="/contact">Get in touch</Link>.
          </div>
        </div>
      </div>
    </>
  );
}
