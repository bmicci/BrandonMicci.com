'use client';

import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const hologramRef = useRef<HTMLDivElement>(null);
  const dataStreamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create timeline nodes
    const timelineContainer = timelineRef.current;
    const hologramContainer = hologramRef.current;
    const dataStreamContainer = dataStreamRef.current;
    
    if (!timelineContainer || !hologramContainer || !dataStreamContainer) return;

    // Create timeline nodes with years
    const years = [2012, 2014, 2016, 2018, 2020, 2022, 2023];
    years.forEach((year, index) => {
      const node = document.createElement('div');
      node.className = 'timeline-node';
      node.style.left = (index * 15 + 10) + '%';
      node.style.top = (30 + Math.random() * 40) + '%';
      node.style.animationDelay = (index * 0.5) + 's';
      node.innerHTML = `<span class="year-label">${year}</span>`;
      timelineContainer.appendChild(node);
    });

    // Create holographic projections
    const hologramCount = 8;
    for (let i = 0; i < hologramCount; i++) {
      const hologram = document.createElement('div');
      hologram.className = 'hologram-projection';
      hologram.style.left = Math.random() * 100 + '%';
      hologram.style.top = Math.random() * 100 + '%';
      hologram.style.animationDelay = Math.random() * 3 + 's';
      hologram.style.animationDuration = (4 + Math.random() * 2) + 's';
      hologramContainer.appendChild(hologram);
    }

    // Create data streams
    const streamCount = 12;
    for (let i = 0; i < streamCount; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = Math.random() * 100 + '%';
      stream.style.top = Math.random() * 100 + '%';
      stream.style.animationDelay = Math.random() * 2 + 's';
      stream.style.animationDuration = (3 + Math.random() * 2) + 's';
      dataStreamContainer.appendChild(stream);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        /* Main Futuristic Background Container */
        .futuristic-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);
        }

        /* Grid pattern with futuristic styling */
        .futuristic-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridPulse 15s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        /* Timeline nodes with years */
        .timeline-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .timeline-node {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(0, 212, 255, 0.8),
            0 0 40px rgba(0, 212, 255, 0.4),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          animation: nodePulse 3s ease-in-out infinite;
        }

        .timeline-node::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          animation: nodeRing 2s ease-in-out infinite;
        }

        .year-label {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #00d4ff;
          font-size: 12px;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
          opacity: 0.8;
        }

        @keyframes nodePulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @keyframes nodeRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Holographic projections */
        .hologram-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .hologram-projection {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(0, 212, 255, 0.4);
          border-radius: 8px;
          background: linear-gradient(45deg, 
            rgba(0, 212, 255, 0.1) 0%, 
            transparent 50%, 
            rgba(30, 144, 255, 0.1) 100%);
          animation: hologramFlicker 4s ease-in-out infinite;
        }

        .hologram-projection::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 4px;
          animation: hologramInner 3s ease-in-out infinite;
        }

        @keyframes hologramFlicker {
          0%, 100% { 
            opacity: 0.3;
            transform: rotate(0deg) scale(1);
          }
          25% { 
            opacity: 0.8;
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            opacity: 0.4;
            transform: rotate(180deg) scale(0.9);
          }
          75% { 
            opacity: 0.7;
            transform: rotate(270deg) scale(1.05);
          }
        }

        @keyframes hologramInner {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }

        /* Data streams */
        .data-stream-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .data-stream {
          position: absolute;
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0, 212, 255, 0.8) 50%, 
            transparent 100%);
          animation: dataFlow 3s linear infinite;
        }

        .data-stream::before {
          content: '';
          position: absolute;
          top: 0;
          left: -1px;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
          animation: streamDot 3s linear infinite;
        }

        @keyframes dataFlow {
          0% {
            transform: translateY(-50px) scaleY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-40px) scaleY(1);
          }
          90% {
            opacity: 1;
            transform: translateY(50px) scaleY(1);
          }
          100% {
            transform: translateY(60px) scaleY(0);
            opacity: 0;
          }
        }

        @keyframes streamDot {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
            transform: translateY(40px);
          }
          100% {
            transform: translateY(50px);
            opacity: 0;
          }
        }

        /* Floating tech particles */
        .tech-particle {
          position: absolute;
          width: 1px;
          height: 1px;
          background: rgba(30, 144, 255, 0.6);
          border-radius: 50%;
          animation: techFloat 20s infinite linear;
        }

        @keyframes techFloat {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: scale(1);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(200px) scale(0);
            opacity: 0;
          }
        }

        /* Gradient overlays for depth */
        .depth-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, rgba(30, 144, 255, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .timeline-node {
            width: 6px;
            height: 6px;
          }
          
          .year-label {
            font-size: 10px;
            top: -25px;
          }
          
          .hologram-projection {
            width: 40px;
            height: 40px;
          }
          
          .data-stream {
            height: 30px;
          }
        }
      `}</style>
      
      <div className="futuristic-background">
        {/* Grid pattern */}
        <div className="futuristic-grid"></div>
        
        {/* Depth overlay */}
        <div className="depth-overlay"></div>
        
        {/* Timeline nodes with years */}
        <div className="timeline-container" ref={timelineRef}></div>
        
        {/* Holographic projections */}
        <div className="hologram-container" ref={hologramRef}></div>
        
        {/* Data streams */}
        <div className="data-stream-container" ref={dataStreamRef}></div>
        
        {/* Floating tech particles */}
        <div className="tech-particles">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="tech-particle"
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 20 + 's',
                animationDuration: (20 + Math.random() * 10) + 's'
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FuturisticBackground;
