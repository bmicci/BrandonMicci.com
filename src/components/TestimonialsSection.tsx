'use client';

import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <style jsx>{`
        /* SECTION HEADER */
        .testimonials-header {
          text-align: center;
          padding: 3rem 2rem 2rem;
          animation: fadeInDown 1s ease-out;
        }

        .testimonials-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .testimonials-title .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .testimonials-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* TESTIMONIALS CONTAINER */
        .testimonials-container {
          position: relative;
          padding: 2rem 0;
          overflow: hidden;
          background: transparent;
        }

        /* Circuit grid background - subtle overlay on universal background */
        .testimonials-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: gridSlide 25s linear infinite;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }

        /* SCROLLING BANNER */
        .testimonials-banner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          height: 330px;
          width: 100%;
          overflow: hidden;
        }

        .testimonials-track {
          display: flex;
          gap: 2rem;
          align-items: center;
          animation: scroll 80s linear infinite;
          width: calc(450px * 12 + 2rem * 11);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-450px * 6 - 2rem * 5));
          }
        }

        /* TESTIMONIAL CARD */
        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          min-width: 450px;
          max-width: 450px;
          height: 280px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        /* Gradient border */
        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1.5px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff, #00d4ff);
          background-size: 200% 200%;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          animation: borderShift 4s ease infinite;
        }

        @keyframes borderShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 20px 40px rgba(0, 212, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        /* Quote icon */
        .quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 3rem;
          color: rgba(0, 212, 255, 0.2);
          font-family: Georgia, serif;
          line-height: 1;
          z-index: 0;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Testimonial content */
        .testimonial-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          font-style: italic;
        }

        /* Author section */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 212, 255, 0.2);
          flex-shrink: 0;
        }

        .author-avatar {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #00d4ff, #1e90ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .author-title {
          font-size: 0.85rem;
          color: #00d4ff;
          margin-bottom: 0.1rem;
        }

        .author-company {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* LinkedIn icon */
        .linkedin-link {
          width: 28px;
          height: 28px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #00d4ff;
          transition: all 0.3s ease;
          flex-shrink: 0;
          font-size: 0.8rem;
        }

        .linkedin-link:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
        }

        /* Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pause animation on hover */
        .testimonials-banner:hover .testimonials-track {
          animation-play-state: paused;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .testimonials-header {
            padding: 2rem 1rem;
          }
          .testimonials-title {
            font-size: 2rem;
          }
          .testimonials-subtitle {
            font-size: 1rem;
          }
          .testimonials-banner {
            height: 460px;
          }
          .testimonial-card {
            min-width: 320px;
            max-width: 320px;
            height: 420px;
            padding: 1.5rem 1.5rem 2.5rem 1.5rem;
          }
          .testimonials-track {
            width: calc(320px * 12 + 2rem * 11);
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 6 - 2rem * 5));
            }
          }
          .testimonial-text {
            font-size: 0.9rem;
          }
          .quote-icon {
            font-size: 2rem;
            top: 1rem;
            right: 1rem;
          }
        }
      `}</style>

      {/* SECTION HEADER */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          <span className="gradient-text">PROFESSIONAL IMPACT</span>
        </h2>
        <p className="testimonials-subtitle">
          What technology leaders say about working with me and the impact I&apos;ve delivered
        </p>
      </div>

      {/* TESTIMONIALS BANNER */}
      <div className="testimonials-container">
        <div className="testimonials-banner">
          <div className="testimonials-track">
            
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon has an unwavering desire for his team to be the absolute best! He is the epitome of a servant leader that leads by example. One of Brandon&apos;s best qualities is his ability to always push the needle. He does not settle for mediocrity and has the propensity to always go above and beyond.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">DC</div>
                  <div className="author-info">
                    <div className="author-name">Devin Carter, MBA</div>
                    <div className="author-title">Technology Analyst</div>
                    <div className="author-company">Direct Report</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;With Brandon, you get a rare combination of business background, process expertise, technical aptitude and leadership. He&apos;s a Leader with an agenda to accelerate change and drive innovation. His positive impact on Citigroup&apos;s culture and drive for digital and data transformation cannot be overstated.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">DK</div>
                  <div className="author-info">
                    <div className="author-name">Dawn E Kosinski</div>
                    <div className="author-title">Global Account Director</div>
                    <div className="author-company">Tableau, a Salesforce Company</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            {/* Continue with rest of testimonials... */}
            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon LIVES and embodies &apos;Get it done in IT.&apos; A no-nonsense, go get it, problem solver is who Brandon is. He is the guy who can get the room to both understand and act. One of my favorite folks I have worked with for this very reason.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JJ</div>
                  <div className="author-info">
                    <div className="author-name">John Jensen</div>
                    <div className="author-title">Global Account Director</div>
                    <div className="author-company">Alteryx</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon not only excels at managing a technology team and portfolio, but also pioneers key IoT initiatives, mentors younger professionals, and drives innovative technology change. This rare mix of productivity, leadership, vision, and ambition sets a great example.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">BD</div>
                  <div className="author-info">
                    <div className="author-name">Barrett Drew</div>
                    <div className="author-title">Sales Director</div>
                    <div className="author-company">Snowflake</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon is an analytic, responsive and intelligent risk-taking manager. He is innovative, creative and ambitious. His willingness to learn and take on new responsibilities is something to be desired in any tech leader.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JK</div>
                  <div className="author-info">
                    <div className="author-name">Juzer Kanchwala</div>
                    <div className="author-title">SupplyChain Integration Lead</div>
                    <div className="author-company">SAP Ariba Cloud Integration</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon is a highly motivated and passionate IT professional who brings serious game to the Data & Analytics arena. Whether architecting an IoT solution or developing Tableau visualizations, he focuses on what the Customer needs.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">EH</div>
                  <div className="author-info">
                    <div className="author-name">Ed Haas</div>
                    <div className="author-title">Technology Category Manager</div>
                    <div className="author-company">Southwest Airlines</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon has an unwavering desire for his team to be the absolute best! He is the epitome of a servant leader that leads by example. One of Brandon&apos;s best qualities is his ability to always push the needle.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">DC</div>
                  <div className="author-info">
                    <div className="author-name">Devin Carter, MBA</div>
                    <div className="author-title">Technology Analyst</div>
                    <div className="author-company">Direct Report</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;With Brandon, you get a rare combination of business background, process expertise, technical aptitude and leadership. He&apos;s a Leader with an agenda to accelerate change and drive innovation.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">DK</div>
                  <div className="author-info">
                    <div className="author-name">Dawn E Kosinski</div>
                    <div className="author-title">Global Account Director</div>
                    <div className="author-company">Tableau, a Salesforce Company</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon LIVES and embodies &apos;Get it done in IT.&apos; A no-nonsense, go get it, problem solver is who Brandon is. He is the guy who can get the room to both understand and act.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JJ</div>
                  <div className="author-info">
                    <div className="author-name">John Jensen</div>
                    <div className="author-title">Analytics Specialist</div>
                    <div className="author-company">Tableau, a Salesforce Company</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon not only excels at managing a technology team and portfolio, but also pioneers key IoT initiatives, mentors younger professionals, and drives innovative technology change.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">BD</div>
                  <div className="author-info">
                    <div className="author-name">Barrett Drew</div>
                    <div className="author-title">Sales Director</div>
                    <div className="author-company">Snowflake</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon is an analytic, responsive and intelligent risk-taking manager. He is innovative, creative and ambitious. His willingness to learn and take on new responsibilities is something to be desired.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">JK</div>
                  <div className="author-info">
                    <div className="author-name">Juzer Kanchwala</div>
                    <div className="author-title">SupplyChain Integration Lead</div>
                    <div className="author-company">SAP Ariba Cloud Integration</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;Brandon is a highly motivated and passionate IT professional who brings serious game to the Data & Analytics arena. Whether architecting an IoT solution or developing Tableau visualizations.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">EH</div>
                  <div className="author-info">
                    <div className="author-name">Ed Haas</div>
                    <div className="author-title">Technology Category Manager</div>
                    <div className="author-company">Southwest Airlines</div>
                  </div>
                  <a href="#" className="linkedin-link">in</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
