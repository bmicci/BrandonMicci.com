'use client';

import { useEffect, useRef } from 'react';

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    // Target ~30fps to reduce CPU/GPU load
    const targetFrameTime = 1000 / 30;
    let lastTime = 0;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const viewportHeight = window.innerHeight;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(viewportHeight * dpr);
      canvas.style.width = '100%';
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const viewportHeight = window.innerHeight;

    // Subtle drifting nodes (not a dense starfield)
    const nodes = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * viewportHeight,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.06, // very slow drift
      vy: (Math.random() - 0.5) * 0.06,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.7,
    }));

    const draw = (now: number) => {
      if (now - lastTime < targetFrameTime) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastTime = now;
      frame += 1;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = '#0b0f1a';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // drifting nodes
      for (const n of nodes) {
        // update position
        n.x += n.vx * n.speed;
        n.y += n.vy * n.speed;
        // bounce on edges
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > window.innerWidth) { n.x = window.innerWidth; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > window.innerHeight) { n.y = window.innerHeight; n.vy *= -1; }

        const twinkle = 0.25 + 0.35 * Math.abs(Math.sin(n.phase + frame * 0.005));
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = '#bfeaff';
        ctx.fill();

        // very soft glow
        ctx.globalAlpha = twinkle * 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#00c6ed';
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      // Recalculate nodes for new viewport height
      const newViewportHeight = window.innerHeight;
      nodes.forEach(n => {
        n.y = Math.random() * newViewportHeight;
        n.x = Math.min(n.x, window.innerWidth);
      });

      resize();
      // redraw next frame with new size
    };

    resize();
    raf = requestAnimationFrame(draw);
    // Keep canvas in sync with viewport changes
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#0b0f1a' }}>
      <style jsx>{`
        .animated-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridSlide 90s linear infinite;
          opacity: 0.10;
          mix-blend-mode: screen;
        }
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="animated-grid" />
    </div>
  );
}
