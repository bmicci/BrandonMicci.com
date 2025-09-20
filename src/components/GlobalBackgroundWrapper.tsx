'use client';

import dynamic from 'next/dynamic';

const GlobalBackground = dynamic(
  () => import('@/components/GlobalBackground'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10" style={{ background: '#0b0f1a' }} />
    ),
  }
);

export default function GlobalBackgroundWrapper() {
  return <GlobalBackground />;
}
