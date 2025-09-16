'use client';

import { useEffect, useRef } from 'react';

const MetricsGrid = () => {
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animateCountUp = () => {
      const metricNumbers = metricRefs.current.filter(Boolean);
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLSpanElement;
            const target = parseInt(element.getAttribute('data-target') || '0');
            const suffix = element.getAttribute('data-suffix') || '';
            const format = element.getAttribute('data-format') || '';
            
            let current = 0;
            const increment = target / 100; // 100 steps
            const duration = 2000; // 2 seconds
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
              current += increment;
              
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              let displayValue = Math.floor(current);
              
              // Format thousands
              if (format === 'thousands') {
                if (displayValue >= 1000) {
                  displayValue = parseFloat((displayValue / 1000).toFixed(1));
                  element.textContent = displayValue + 'K' + suffix;
                } else {
                  element.textContent = displayValue + suffix;
                }
              } else {
                element.textContent = displayValue + suffix;
              }
            }, stepTime);
            
            // Stop observing after animation starts
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.5 // Trigger when 50% visible
      });
      
      metricNumbers.forEach(number => {
        if (number) observer.observe(number);
      });
    };

    animateCountUp();
  }, []);

  return (
    <>
      <style jsx>{`
        /* Transparent Metrics Grid */
        .metrics-content-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 40px 2rem;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 5; /* Default desktop order - KPIs last */
        }

        .metrics-container {
            max-width: 1000px;
            margin: 0 auto;
            width: 100%;
            position: relative;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            animation: fadeInUp 1s ease-out;
        }

        .metric-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        /* Desktop hover effects */
        @media (min-width: 769px) {
            .metric-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
                transition: left 0.6s ease;
            }

            .metric-card:hover::before {
                left: 100%;
            }

            .metric-card:hover {
                transform: translateY(-8px);
                border-color: rgba(0, 212, 255, 0.4);
                box-shadow: 0 15px 30px rgba(0, 212, 255, 0.2);
            }
        }

        /* Mobile-specific effects */
        @media (max-width: 768px) {
            .metric-card {
                animation: mobileCountUp 2s ease-out;
                animation-fill-mode: both;
            }
            
            .metric-card:nth-child(1) { animation-delay: 0.2s; }
            .metric-card:nth-child(2) { animation-delay: 0.4s; }
            .metric-card:nth-child(3) { animation-delay: 0.6s; }
            .metric-card:nth-child(4) { animation-delay: 0.8s; }
            
            .metric-card::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #00d4ff, #1e90ff);
                animation: loadingBar 2s ease-in-out infinite;
                animation-delay: calc(var(--card-delay, 0) * 0.5s);
            }
            
            .metric-card:nth-child(1)::after { --card-delay: 0; }
            .metric-card:nth-child(2)::after { --card-delay: 1; }
            .metric-card:nth-child(3)::after { --card-delay: 2; }
            .metric-card:nth-child(4)::after { --card-delay: 3; }
        }

        .metric-number {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            display: block;
            position: relative;
        }

        /* Mobile number animation effect */
        @media (max-width: 768px) {
            .metric-number::before {
                content: '🔥';
                position: absolute;
                top: -15px;
                right: -20px;
                font-size: 1rem;
                animation: flame 1.5s ease-in-out infinite;
                opacity: 0;
                animation-delay: 2s;
                animation-fill-mode: both;
            }
            
            .metric-card:nth-child(1) .metric-number::before { content: '💰'; }
            .metric-card:nth-child(2) .metric-number::before { content: '👥'; }
            .metric-card:nth-child(3) .metric-number::before { content: '📈'; }
            .metric-card:nth-child(4) .metric-number::before { content: '⭐'; }
        }

        .metric-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            position: relative;
        }

        /* Mobile label enhancement */
        @media (max-width: 768px) {
            .metric-label {
                animation: typewriter 1s ease-out;
                animation-delay: 1.5s;
                animation-fill-mode: both;
            }
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile-specific animations */
        @keyframes mobileCountUp {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(30px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes loadingBar {
            0% { 
                width: 0%; 
                opacity: 0.8;
            }
            50% { 
                width: 100%; 
                opacity: 1;
            }
            100% { 
                width: 100%; 
                opacity: 0.6;
            }
        }

        @keyframes flame {
            0%, 100% { 
                opacity: 0; 
                transform: scale(0.8) rotate(-10deg);
            }
            50% { 
                opacity: 1; 
                transform: scale(1.2) rotate(10deg);
            }
        }

        @keyframes typewriter {
            from {
                width: 0;
                opacity: 0;
            }
            to {
                width: 100%;
                opacity: 1;
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
            .metrics-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.25rem;
            }
        }

        @media (max-width: 768px) {
            .metrics-content-wrapper {
                padding: 15px 1rem; /* Much tighter mobile spacing */
                order: 5; /* Keep KPIs last on mobile */
            }

            .metrics-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
                max-width: 350px;
                margin: 0 auto;
            }

            .metric-card {
                padding: 1.5rem 1rem;
            }

            .metric-number {
                font-size: 2rem;
            }
        }

        @media (max-width: 480px) {
            .metrics-content-wrapper {
                padding: 20px 0.75rem;
            }

            .metric-card {
                padding: 1.25rem 0.75rem;
            }

            .metric-number {
                font-size: 1.8rem;
            }

            .metric-label {
                font-size: 0.8rem;
            }
        }
      `}</style>

      <div className="metrics-content-wrapper">
        <div className="metrics-container">
          <div className="metrics-grid">
            <div className="metric-card">
              <span 
                className="metric-number" 
                data-target="400" 
                data-suffix="M+"
                ref={(el) => { metricRefs.current[0] = el; }}
              >
                0M+
              </span>
              <div className="metric-label">Revenue Generated</div>
            </div>
            <div className="metric-card">
              <span 
                className="metric-number" 
                data-target="27000" 
                data-suffix="+" 
                data-format="thousands"
                ref={(el) => { metricRefs.current[1] = el; }}
              >
                0+
              </span>
              <div className="metric-label">Enterprise Users</div>
            </div>
            <div className="metric-card">
              <span 
                className="metric-number" 
                data-target="250" 
                data-suffix="%"
                ref={(el) => { metricRefs.current[2] = el; }}
              >
                0%
              </span>
              <div className="metric-label">ROI Achieved</div>
            </div>
            <div className="metric-card">
              <span 
                className="metric-number" 
                data-target="16" 
                data-suffix="+"
                ref={(el) => { metricRefs.current[3] = el; }}
              >
                0+
              </span>
              <div className="metric-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsGrid;
