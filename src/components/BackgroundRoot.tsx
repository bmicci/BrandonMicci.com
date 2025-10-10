'use client';
import { useHydrationReady } from '@/hooks/useHydrationReady';

export default function BackgroundRoot() {
  const ready = useHydrationReady();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Lightweight gradient that never changes layout */}
      <div
        className="absolute inset-0 [contain:layout_paint_style] will-change-transform will-change-opacity"
        style={{
          background:
            'radial-gradient(600px 300px at 25% 30%, rgba(0,212,255,0.22), transparent 60%), linear-gradient(135deg, #061021 0%, #0a0f1f 60%, #0e1b33 100%)',
        }}
      />
      {/* If you had heavier animated effects, mount only after hydration */}
      {ready && (
        <div className="absolute inset-0 opacity-60">
          {/* Optional: minimal, transform/opacity-only animation (no layout changes) */}
        </div>
      )}
    </div>
  );
}

