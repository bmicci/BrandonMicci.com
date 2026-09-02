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

        .article-body :global(h3) {
          font-size: 1.25rem;
          font-weight: 700;
          color: #00d4ff;
          margin: 2.25rem 0 1rem;
        }

        .article-body :global(strong) {
          color: white;
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
            Your AI Strategy Isn&rsquo;t the Problem. Your Operating Model Is.
          </h1>
          <p className="article-subtitle">
            What it actually takes to run AI at enterprise scale, learned the
            hard way inside a Fortune-50 financial institution.
          </p>
          <div className="article-meta">
            By Brandon Micci · September 2026 · 10 min read
          </div>

          <div className="article-body">
            <p>
              Every large company I talk to has an AI strategy. Most of them
              have a deck, a steering committee, a budget line, and a backlog of
              use cases that keeps growing. What almost none of them have is a
              clear answer to a much simpler question: when a model produces a
              wrong answer in production on a Tuesday afternoon, who owns it?
            </p>
            <p>
              Not who gets blamed. Who owns it. Who decides whether it stays
              live, who has the authority to roll it back, who tells the
              business, who fixes the data, and who signs off that it is safe to
              turn back on.
            </p>
            <p>
              If you cannot answer that in one sentence, you do not have an AI
              operating model. You have an AI portfolio. And a portfolio without
              an operating model is why so many enterprises are stuck at the
              pilot stage, with dozens of promising experiments and very little
              that anyone would trust with a real customer or a real dollar.
            </p>
            <p>
              I spent the last two years working on this problem inside one of
              the largest financial institutions in the world, in a business
              unit where nothing could scale on heroics and nothing could ship
              without satisfying model risk. What follows is the framework I
              came away with. It is not theoretical. Every piece of it exists
              because something broke without it.
            </p>

            <h2>The layer nobody designs</h2>
            <p>
              Most organizations think about AI in two layers. At the top is
              strategy: what we want AI to do for the business, which domains
              matter, how much we will spend. At the bottom is technology: which
              models, which platform, which vendors, which guardrails.
            </p>
            <p>
              The operating model is the layer in between, and it is the one
              that determines whether the other two ever connect. It answers the
              questions strategy is too abstract to answer and technology is too
              narrow to answer. Who is allowed to build? Who is allowed to ship?
              What has to be true before something goes to production? Who is on
              the hook when it is there? How does a good idea in one business
              unit become a capability the whole company can use?
            </p>
            <p>
              In my experience, when AI programs stall, leaders look up at
              strategy (&ldquo;we need clearer priorities&rdquo;) or down at
              technology (&ldquo;we need a better platform&rdquo;). The problem
              is almost always in the middle.
            </p>

            <h2>Five things you have to design on purpose</h2>
            <p>
              I organize the operating model around five components. None of
              them is novel on its own. What matters is that they are designed
              together, because a decision in one constrains the others.
            </p>
            <p>
              <strong>People.</strong> This is not &ldquo;hire more AI
              talent.&rdquo; It is deciding which roles exist, what each one is
              accountable for, and how they relate to each other. In a regulated
              environment you need, at minimum, clear ownership for the business
              outcome, for the technical build, for the data, for model
              validation, and for ongoing operations. Those are five different
              accountabilities. In most companies today they are either
              collapsed into one overworked team or scattered across so many
              groups that no single person can say yes.
            </p>
            <p>
              <strong>Process.</strong> How does a use case move from an idea to
              a production system? Not in theory, in practice. What are the
              stage gates, what evidence does each gate require, and who holds
              the gate? The single most valuable thing we did was write this
              down as a lifecycle with explicit entry and exit criteria, so that
              a team in one line of business followed the same path as a team in
              another. Without that, every use case is a negotiation, and
              negotiations do not scale.
            </p>
            <p>
              <strong>Technology.</strong> The platform decisions matter, but
              they matter less than people think, and they matter for a
              different reason than people think. The point of a shared platform
              is not cost efficiency. It is that a shared platform is where your
              controls live. If every team can call any model from anywhere, you
              cannot govern it. If they all go through one door, you can
              instrument that door once and let thousands of people through it
              safely.
            </p>
            <p>
              <strong>Data.</strong> Every AI conversation eventually becomes a
              data conversation, and it usually happens later than it should.
              The operating model has to define who owns the data a use case
              depends on, what the quality and lineage expectations are, and how
              access is granted and revoked. If your data owners are not part of
              the operating model from the beginning, they will show up at the
              end as a blocker, and they will be right to.
            </p>
            <p>
              <strong>Controls.</strong> In financial services this means model
              risk management, information security, privacy, legal, and
              compliance. In every industry it means something. The mistake I
              see most often is treating controls as a review that happens after
              the work is done. The operating model has to embed them into the
              process so that the control requirements are known at the start,
              the evidence is generated as a byproduct of building, and the
              review at the end is a confirmation rather than a discovery.
            </p>

            <h2>The three mechanics that make it real</h2>
            <p>
              Five components on a slide are not an operating model. What turns
              them into one are three mechanics that force the abstractions into
              specific, testable commitments.
            </p>

            <h3>Role decomposition</h3>
            <p>
              Take every role that touches AI delivery and decompose it into the
              specific decisions and deliverables it owns. Not job titles,
              decisions. A &ldquo;product owner&rdquo; for an AI use case is
              responsible for defining the business outcome, accepting the
              measured result against that outcome, and owning the decision to
              keep the use case live. A &ldquo;model owner&rdquo; is responsible
              for the model&rsquo;s fitness for its intended use, its
              documentation, and its performance in production. A
              &ldquo;validator&rdquo; is independent of both, and owns the
              judgment that the model does what it claims and that the risks are
              understood.
            </p>
            <p>
              The reason this matters is that AI collapses roles that used to be
              distinct. The same person can now prompt, build, test, and deploy
              in an afternoon. That is the source of the productivity, and it is
              also the source of the risk. Role decomposition puts the
              separation of duties back without putting the bureaucracy back.
              You are not adding people. You are making explicit which hat
              someone is wearing when they make a given decision, and making
              sure nobody wears all of them at once for anything that matters.
            </p>

            <h3>Decision rights</h3>
            <p>
              For every gate in the lifecycle, name the person or body with the
              authority to say yes, and specify what they need to see in order
              to say it. Then, and this is the part most organizations skip,
              name what they cannot veto.
            </p>
            <p>
              Decision rights are where operating models either accelerate or
              strangle. If a central AI council has to approve every use case,
              you will have a central AI council with a six-month backlog. If
              nobody has to approve anything, you will have a model in front of
              customers that nobody validated. The answer is tiered: low-risk,
              internal-facing use cases on approved patterns get decided close
              to the team, with lightweight evidence; higher-risk or
              customer-facing use cases go through heavier review with
              independent validation. The tier is determined by explicit
              criteria, not by who argues loudest. And once a pattern has been
              approved once, the next use case on that pattern inherits the
              approval rather than restarting it.
            </p>
            <p>
              That last point is what lets a portfolio grow from a handful of
              use cases to dozens without the governance function becoming the
              constraint. You are not approving dozens of separate things. You
              are approving a much smaller set of patterns and letting the use
              cases flow through them.
            </p>

            <h3>Handoffs</h3>
            <p>
              Every operating model has seams: between the business and the
              build team, between the build team and validation, between
              validation and production operations, between the central platform
              and the federated teams using it. Handoffs are where work dies.
            </p>
            <p>
              Design each one. What is the artifact that crosses the seam? What
              state does it have to be in? Who confirms receipt? What happens if
              it is rejected? The most common failure I saw was not a bad
              handoff but an undefined one, where a team &ldquo;finished&rdquo;
              a use case and assumed someone else would take it to production,
              and that someone else did not know they had been assigned
              anything.
            </p>
            <p>
              The handoff into operations deserves special attention because it
              is the one that separates a pilot from a product. A pilot has a
              team watching it. A production system has monitoring, an owner on
              call, a defined process for human review of outputs, and a way to
              retrain or retire it. If the operating model does not define who
              runs the thing after launch, it is not designed for production, no
              matter what the roadmap says.
            </p>

            <h2>Designing inside model risk, not around it</h2>
            <p>
              Here is where I will part ways with most of what gets written
              about AI operating models.
            </p>
            <p>
              The conventional view is that regulated industries are at a
              disadvantage. Model risk management, the discipline banks
              formalized after 2008 to govern quantitative models, is seen as a
              drag on AI adoption. Too slow, too document-heavy, built for a
              world of credit scorecards rather than large language models.
            </p>
            <p>
              I ran an AI program inside those constraints, and I came to the
              opposite conclusion. Model risk management gave us something most
              enterprises are still trying to invent: a pre-existing,
              well-understood, institutionally respected answer to &ldquo;how do
              we know this thing is safe?&rdquo; The frameworks for inventory,
              tiering, independent validation, ongoing monitoring, and
              documented limitations already existed. We did not have to
              convince anyone that they mattered. We had to adapt them so they
              fit generative systems, and we had to design the operating model
              so that satisfying them was the natural output of the work rather
              than a separate project.
            </p>
            <p>
              That meant a few specific things. It meant building evaluation
              harnesses that produced validation evidence automatically, so a
              team never had to reconstruct what they had tested. It meant
              defining human-in-the-loop review as a control with measurable
              coverage rather than a vague comfort. It meant a Center of
              Excellence whose job was not to build everything but to own the
              patterns, the tooling, and the relationship with the risk
              functions, so that federated teams could build on a foundation
              that was already trusted.
            </p>
            <p>
              If you are in an unregulated industry, do not read this as
              irrelevant. You will end up building something like model risk
              management anyway, because your board, your customers, and
              eventually your regulators will ask the same questions. The
              organizations that treat controls as a design input rather than a
              late-stage review are the ones that will still be scaling when the
              rest are explaining why their flagship use case had to be pulled.
            </p>

            <h2>What it looks like when it works</h2>
            <p>
              An operating model is working when a few things become boring.
            </p>
            <p>
              New use cases stop requiring executive intervention to get to
              production. Teams know the path, know the gates, and know what
              evidence they need. Approvals become predictable.
            </p>
            <p>
              Adoption grows without proportional growth in the central team. A
              platform can go from a few thousand users to tens of thousands
              while the central function stays roughly the same size, because
              the operating model pushes capability outward through communities
              of practice rather than concentrating it in a bottleneck. I have
              watched this work more than once, and the community of practice is
              the most underrated instrument in the whole toolkit.
            </p>
            <p>
              Measurement becomes credible. When roles, gates, and handoffs are
              defined, so is the point at which you measure impact and who is
              accountable for the number. That is how you get to results that
              hold up under a CFO&rsquo;s questions, rather than the inflated
              aggregate claims that have made so many AI ROI figures
              unbelievable.
            </p>
            <p>
              And when something goes wrong, and it will, the response is a
              process rather than a panic. Somebody owns it. That person knows
              who to call. The system comes down, gets fixed, gets re-validated,
              and goes back up, and the organization learns rather than
              retreats.
            </p>

            <h2>Where to start</h2>
            <p>
              If you are a CTO, CDAO, or business leader looking at a portfolio
              of pilots and wondering why none of them are moving, three moves
              will tell you more in 90 days than another strategy refresh will.
            </p>
            <p>
              First, pick your three most important use cases and write down,
              for each one, the answer to the Tuesday afternoon question. Who
              owns it in production, who can roll it back, who validates it, who
              is accountable for the number. If the answers are different across
              the three, or if any of them takes more than a sentence, you have
              found your problem.
            </p>
            <p>
              Second, draw the lifecycle as it actually happens today, with
              every gate and every handoff. Not the intended process, the real
              one. Then identify which gates have no defined owner and which
              handoffs have no defined artifact. Those are the places your use
              cases are dying.
            </p>
            <p>
              Third, bring your risk and control partners into the design of the
              operating model before the next use case starts, not after it
              ends. Ask them what evidence they need to say yes, and then build
              the process so that evidence is produced automatically. This one
              conversation will do more to accelerate your program than any
              platform decision you make this year.
            </p>
            <p>
              The technology will keep changing. The models will get better,
              cheaper, and stranger. What will not change is that enterprises
              run on clear accountability, and AI does not exempt you from that.
              It makes it more urgent.
            </p>
            <p>
              Design the operating model. Then your strategy has somewhere to
              land.
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
            employees. He is a board member of the DFW CTO Club.{' '}
            <Link href="/contact">Get in touch</Link>.
          </div>
        </div>
      </div>
    </>
  );
}
