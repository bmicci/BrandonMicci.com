'use client';

const ProfessionalImpact = () => {
  return (
    <section id="professional-impact">
      <style jsx>{`
        /* ===== Scoped to #professional-impact ===== */
        #professional-impact, #professional-impact * { 
          box-sizing: border-box; 
          font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif; 
        }

        /* TRANSPARENT section; no borders or extra bg */
        #professional-impact {
          position: relative; 
          color: #fff; 
          background: transparent; 
          border: none;
          padding: 80px 0; 
          min-height: 100vh; 
          overflow: hidden; 
          isolation: isolate;
          /* Card tuning (toggle these) */
          --card-bg: rgba(9,14,24,0.42);         /* set to 'transparent' for pure float */
          --card-blur: blur(16px);               /* set to 'none' for outline mode */
          --card-stroke: rgba(0,212,255,0.22);   /* set to 'transparent' for pure float */
          --scrim: radial-gradient(70% 120% at 50% 45%, rgba(0,0,0,.32), rgba(0,0,0,.20) 40%, transparent 75%);
        }

        .impact-wrap { 
          max-width: 1400px; 
          margin: 0 auto; 
          padding: 0 24px; 
          position: relative; 
          z-index: 1; 
        }

        .impact-head { 
          text-align: center; 
          margin-bottom: 60px; 
          animation: fadeInDown .8s ease-out; 
        }
        .impact-eyebrow { 
          display:inline-block; 
          color:rgba(255,255,255,.7); 
          letter-spacing:.12em; 
          text-transform:uppercase; 
          font-size:14px; 
          margin-bottom:15px; 
          font-weight:600; 
        }
        .impact-title{
          font-weight:800; 
          line-height:1.15; 
          margin:0 0 20px; 
          font-size:clamp(32px,4vw,48px);
          background: linear-gradient(135deg,#00d4ff 0%,#1e90ff 50%,#00d4ff 100%); 
          background-size:200% 200%;
          -webkit-background-clip:text; 
          background-clip:text; 
          -webkit-text-fill-color:transparent; 
          animation: gradientShift 3s ease-in-out infinite;
        }
        .impact-sub { 
          color:rgba(255,255,255,.9); 
          max-width:800px; 
          margin:0 auto; 
          font-size:18px; 
          line-height:1.6; 
        }

        /* Scroller + center scrim (lets your bg show, but calms grid/particles just under text) */
        .testimonials-container { 
          position:relative; 
          overflow:hidden; 
          width:100%; 
          margin-top:40px; 
          animation: fadeInUp .8s ease-out .2s both; 
        }
        .testimonials-container .scrim { 
          position:absolute; 
          inset:0; 
          pointer-events:none; 
          z-index:0; 
          background: var(--scrim); 
        }
        .testimonials-track { 
          position:relative; 
          z-index:1; 
          display:flex; 
          gap:30px; 
          animation: scroll 60s linear infinite; 
          width:max-content; 
          will-change: transform; 
        }
        .testimonials-container:hover .testimonials-track { 
          animation-play-state: paused; 
        }
        @keyframes scroll { 
          0%{transform:translate3d(0,0,0)} 
          100%{transform:translate3d(-50%,0,0)} 
        }

        /* Cards = glass tuned for moving grid */
        .testimonial-card{
          background: var(--card-bg);
          backdrop-filter: var(--card-blur);
          -webkit-backdrop-filter: var(--card-blur);
          border: 1px solid var(--card-stroke);
          border-radius: 20px;
          padding: 30px;
          width: 400px; 
          min-height: 280px; 
          flex-shrink:0;
          display:flex; 
          flex-direction:column; 
          position:relative; 
          overflow:hidden; 
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          box-shadow: 0 10px 30px -12px rgba(0,0,0,.45);
        }
        .testimonial-card::before{
          content:""; 
          position:absolute; 
          inset:0; 
          left:-100%;
          background: linear-gradient(90deg,transparent, rgba(0,212,255,.05), transparent);
          animation: shimmer 4s ease-in-out infinite;
        }
        @keyframes shimmer { 
          0%{left:-100%} 
          50%{left:100%} 
          100%{left:100%} 
        }
        .testimonial-card:hover{ 
          transform: translateY(-6px); 
          border-color: rgba(0,212,255,.36); 
          box-shadow: 0 18px 44px -12px rgba(0,212,255,.18); 
        }

        .quote-icon{ 
          width:32px; 
          height:32px; 
          margin-bottom:20px; 
          opacity:.85 
        }
        .testimonial-text{ 
          color:rgba(255,255,255,.92); 
          font-size:16px; 
          line-height:1.6; 
          margin-bottom:20px; 
          flex-grow:1; 
          text-shadow: 0 1px 3px rgba(0,0,0,.35); 
        }
        .testimonial-author{ 
          display:flex; 
          align-items:center; 
          gap:15px; 
          margin-top:auto; 
        }
        .author-avatar{ 
          width:50px; 
          height:50px; 
          border-radius:50%; 
          background:linear-gradient(135deg,#00d4ff,#1e90ff); 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          color:#fff; 
          font-weight:700; 
          font-size:18px; 
          flex-shrink:0; 
        }
        .author-name{ 
          font-weight:700; 
          font-size:16px; 
          color:#00d4ff; 
          margin-bottom:4px; 
        }
        .author-title{ 
          font-size:14px; 
          color:rgba(255,255,255,.7); 
          line-height:1.4; 
        }
        .linkedin-icon{ 
          width:24px; 
          height:24px; 
          opacity:.6; 
          transition:opacity .25s ease; 
        }
        .testimonial-card:hover .linkedin-icon{ 
          opacity:1; 
        }

        /* Optional: edge masks OFF so your site bg shows edge-to-edge */
        .testimonials-container::before,
        .testimonials-container::after { 
          display:none; 
        }

        /* Animations & motion prefs */
        @keyframes fadeInDown { 
          from{opacity:0; transform:translateY(-20px)} 
          to{opacity:1; transform:translateY(0)} 
        }
        @keyframes fadeInUp   { 
          from{opacity:0; transform:translateY(20px)}  
          to{opacity:1; transform:translateY(0)} 
        }
        @keyframes gradientShift { 
          0%{background-position:0% 50%} 
          50%{background-position:100% 50%} 
          100%{background-position:0% 50%} 
        }
        @media (prefers-reduced-motion: reduce){
          .testimonials-track, .impact-title{ 
            animation: none !important; 
          }
        }

        /* Mobile tuning (lighter blur for perf) */
        @media (max-width: 768px){
          #professional-impact{ 
            padding: 60px 0; 
            --card-blur: blur(10px); 
          }
          .impact-wrap{ 
            padding: 0 16px; 
          }
          .testimonial-card{ 
            width: 350px; 
            padding: 24px; 
            min-height: 250px; 
          }
          .testimonials-track{ 
            gap: 20px; 
          }
        }
        @media (max-width: 480px){
          .testimonial-card{ 
            width: 300px; 
            padding: 20px; 
          }
          .testimonials-track{ 
            animation-duration: 80s; 
          }
        }
      `}</style>

      <div className="impact-wrap">
        <header className="impact-head">
          <span className="impact-eyebrow">Client Success Stories</span>
          <h2 className="impact-title">Professional Impact</h2>
          <p className="impact-sub">What industry leaders say about working with me on AI transformation initiatives</p>
        </header>

        <div className="testimonials-container">
          <div className="scrim"></div> {/* soft center scrim for readability */}
          <div className="testimonials-track">
            {/* Testimonial (repeat as needed) */}
            <div className="testimonial-card">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor" style={{color:'#00d4ff'}}>
                <path d="M14,17h3l2-4V7h-6v6h3M6,17h3l2-4V7H5v6h3"/>
              </svg>
              <p className="testimonial-text">&ldquo;Brandon&apos;s leadership in AI implementation transformed our operations completely. The ROI exceeded all expectations.&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <div className="author-name">John Director</div>
                  <div className="author-title">VP of Technology, Fortune 500 Financial Services</div>
                </div>
                <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor" style={{color:'#0077b5'}}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414V24"/>
                </svg>
              </div>
            </div>

            {/* Add more testimonial cards here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalImpact;
