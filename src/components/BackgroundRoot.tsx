'use client';

import dynamic from 'next/dynamic';

// UniversalBackground already handles its own positioning/styling
const UniversalBackground = dynamic(() => import('@/components/UniversalBackground'), {
  ssr: false,
});

export default function BackgroundRoot() {
  return <UniversalBackground />;
}
