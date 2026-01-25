'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const PreferredBackground = dynamic(
  () => import('@/components/UniversalBackground'),
  {
    ssr: false,
  }
);

export default function BackgroundRoot() {
  const [enableAnim, setEnableAnim] = useState(false);

  useEffect(() => {
    // Start after LCP or fallback to idle
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      setEnableAnim(true);
    };

    try {
      // Prefer LCP observer
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          start();
          po.disconnect();
        }
      });
      po.observe({ type: 'largest-contentful-paint', buffered: true });
      // Fallback: idle or 2s timeout
      const win = window as Window & {
        requestIdleCallback?: (cb: () => void) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      const id = win.requestIdleCallback?.(start) ?? setTimeout(start, 2000);
      return () => {
        win.cancelIdleCallback?.(id);
        clearTimeout(id);
        po.disconnect();
      };
    } catch {
      const id = setTimeout(start, 2000);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ contain: 'layout paint style', overflow: 'hidden' }}
    >
      {/* Non-shifting fallback gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 300px at 25% 30%, rgba(0,212,255,0.22), transparent 60%), linear-gradient(135deg, #061021 0%, #0a0f1f 60%, #0e1b33 100%)',
        }}
      />
      {/* Start heavy animation only after LCP */}
      {enableAnim && (
        <div className="absolute inset-0 will-change-transform will-change-opacity">
          <PreferredBackground />
        </div>
      )}
    </div>
  );
}
