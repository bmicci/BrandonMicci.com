/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// Edge is a bit faster and consistent for og routes
export const runtime = 'edge';

// Tweak these if you want to iterate on copy
const NAME = 'Brandon Micci';
const TITLE = 'VP, Head of AI Products';
const SUBTITLE = 'Enterprise AI Transformation • 27K+ LLM users • $400M+ impact';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Layered background: subtle cyan glow + dark gradient + vignette
          background:
            'radial-gradient(600px 300px at 25% 30%, rgba(0, 212, 255, 0.25), transparent 60%), linear-gradient(135deg, #061021 0%, #0a0f1f 60%, #0e1b33 100%)',
          color: '#ffffff',
          fontFamily:
            'system-ui, -apple-system, Segoe UI, Roboto, Inter, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 140px rgba(0,0,0,0.35)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 28,
              opacity: 0.9,
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            {NAME}
          </div>

          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {TITLE}
          </div>

          <div
            style={{
              fontSize: 30,
              opacity: 0.95,
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {SUBTITLE}
          </div>
        </div>

        {/* BM watermark (bottom-right) */}
        <div
          style={{
            position: 'absolute',
            right: 36,
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            opacity: 0.35,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background:
                'linear-gradient(135deg, rgba(0,212,255,0.35) 0%, rgba(0,122,204,0.35) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {/* Simple monogram as inline SVG for crisp scaling */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h4.8c2.2 0 3.2 1 3.2 2.6 0 1.2-.7 2.1-1.9 2.4V11c1.4.3 2.3 1.3 2.3 2.8 0 1.9-1.3 3.2-3.9 3.2H4V6zm2.2 4.2h2.2c1 0 1.6-.4 1.6-1.2S9.4 8 8.4 8H6.2v2.2zm0 5h2.6c1.2 0 1.8-.5 1.8-1.4s-.6-1.4-1.8-1.4H6.2V15.2zM14.5 6h2.1l4.9 12h-2.3l-1.1-2.9H13l-1.1 2.9h-2.2L14.5 6zm3 7.3-2.1-5.4-2.1 5.4h4.2z"
                fill="white"
              />
            </svg>
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>Brandon Micci</div>
        </div>

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            left: 28,
            top: 28,
            width: 160,
            height: 6,
            borderRadius: 999,
            background: 'linear-gradient(90deg, rgba(0,212,255,0.7), rgba(255,255,255,0))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 28,
            top: 46,
            width: 110,
            height: 4,
            borderRadius: 999,
            background: 'linear-gradient(90deg, rgba(0,212,255,0.35), rgba(255,255,255,0))',
          }}
        />
      </div>
    ),
    size
  );
}
