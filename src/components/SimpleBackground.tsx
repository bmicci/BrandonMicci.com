'use client';

export default function SimpleBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: '#0b0f1a',
      }}
    >
      {/* Static gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 700px at 70% 10%, rgba(0,212,255,0.06), rgba(0,0,0,0))',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
