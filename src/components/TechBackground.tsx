'use client';

import React, { useEffect, useRef } from 'react';

const TechBackground: React.FC = () => {
  const neuralNetworkRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create neural network connections
    const neuralNetworkBg = neuralNetworkRef.current;
    const particleContainerBg = particleContainerRef.current;

    if (!neuralNetworkBg || !particleContainerBg) return;

    const numNodesBg = 15;
    const nodesBg: HTMLDivElement[] = [];

    // Create nodes
    for (let i = 0; i < numNodesBg; i++) {
      const dot = document.createElement('div');
      dot.className = 'neural-dot';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 3 + 's';
      neuralNetworkBg.appendChild(dot);
      nodesBg.push(dot);
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodesBg.length; i++) {
      for (let j = i + 1; j < nodesBg.length; j++) {
        if (Math.random() > 0.7) {
          const line = document.createElement('div');
          line.className = 'neural-line';

          const x1 = parseFloat(nodesBg[i].style.left);
          const y1 = parseFloat(nodesBg[i].style.top);
          const x2 = parseFloat(nodesBg[j].style.left);
          const y2 = parseFloat(nodesBg[j].style.top);

          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
          );

          if (distance < 30) {
            const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

            line.style.width = distance + '%';
            line.style.left = x1 + '%';
            line.style.top = y1 + '%';
            line.style.transform = `rotate(${angle}deg)`;
            line.style.animationDelay = Math.random() * 4 + 's';

            neuralNetworkBg.appendChild(line);
          }
        }
      }
    }

    // Create floating AI particles
    const numParticlesBg = 30;

    for (let i = 0; i < numParticlesBg; i++) {
      const particle = document.createElement('div');
      particle.className = 'ai-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = 15 + Math.random() * 10 + 's';
      particleContainerBg.appendChild(particle);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        /* Main Background Container */
        .tech-background-layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: #0a0e27;
        }

        /* Circuit board pattern */
        .circuit-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(
              90deg,
              rgba(0, 212, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: circuitMove 20s linear infinite;
        }

        @keyframes circuitMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }

        /* Neural network */
        .neural-network {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .neural-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
          animation: pulse 3s ease-in-out infinite;
        }

        .neural-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.3),
            transparent
          );
          transform-origin: left center;
          animation: dataFlow 4s linear infinite;
        }

        @keyframes dataFlow {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Floating AI particles */
        .ai-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(30, 144, 255, 0.8);
          border-radius: 50%;
          animation: floatParticle 15s infinite linear;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) scale(0);
            opacity: 0;
          }
        }

        /* Gradient overlay for depth */
        .gradient-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(0, 212, 255, 0.05) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(30, 144, 255, 0.05) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        /* Mobile optimization - reduce particles */
        @media (max-width: 768px) {
          .neural-dot,
          .neural-line {
            opacity: 0.5;
          }

          .ai-particle:nth-child(n + 20) {
            display: none;
          }
        }
      `}</style>

      <div className="tech-background-layer">
        {/* Circuit pattern */}
        <div className="circuit-pattern"></div>

        {/* Gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Neural network dots and connections */}
        <div className="neural-network" ref={neuralNetworkRef}></div>

        {/* Floating AI particles */}
        <div ref={particleContainerRef}></div>
      </div>
    </>
  );
};

export default TechBackground;
