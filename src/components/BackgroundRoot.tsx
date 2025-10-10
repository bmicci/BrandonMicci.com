'use client';

import dynamic from 'next/dynamic';

// UniversalBackground already handles its own positioning/styling
const UniversalBackground = dynamic(() => import('@/components/UniversalBackground'), {
  ssr: false,
});

export default function BackgroundRoot() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ contain: 'layout paint style', overflow: 'hidden' }}
    >
      <UniversalBackground />
    </div>
  );
}
