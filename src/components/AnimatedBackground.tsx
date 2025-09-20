'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(documentHeight * dpr);
      canvas.style.width = '100%';
      canvas.style.height = `${documentHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    const stars = Array.from({ length: 220 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * documentHeight,
      r: Math.random() * 1.6 + 0.2,
      s: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      frame += 1;

      const currentDocumentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // subtle radial gradient
      const g = ctx.createRadialGradient(
        window.innerWidth * 0.7,
        window.innerHeight * 0.1,
        0,
        window.innerWidth * 0.5,
        window.innerHeight * 0.5,
        Math.max(window.innerWidth, window.innerHeight)
      );
      g.addColorStop(0, 'rgba(0, 212, 255, 0.05)');
      g.addColorStop(1, 'rgba(10, 14, 22, 0.0)');

      ctx.clearRect(0, 0, window.innerWidth, currentDocumentHeight);
      ctx.fillStyle = '#0b0f1a';
      ctx.fillRect(0, 0, window.innerWidth, currentDocumentHeight);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, window.innerWidth, currentDocumentHeight);

      // stars / nodes
      for (const star of stars) {
        const twinkle =
          0.4 + 0.6 * Math.abs(Math.sin(star.phase + frame * 0.01 * star.s));
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#c8ecff';
        ctx.fill();

        // soft glow
        ctx.globalAlpha = twinkle * 0.35;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00d4ff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      // Recalculate stars for new document height
      const newDocumentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // Update star positions for new height
      stars.forEach((star) => {
        star.y = Math.random() * newDocumentHeight;
      });

      resize();
      // redraw next frame with new size
    };

    resize();
    draw();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        background: '#0b0f1a',
      }}
    >
      {/* soft radial overlay for depth under the canvas */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 700px at 70% 10%, rgba(0,212,255,0.06), rgba(0,0,0,0))',
          mixBlendMode: 'screen',
        }}
      />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
