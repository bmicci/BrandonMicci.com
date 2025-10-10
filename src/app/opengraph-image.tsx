/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

const NAME = 'Brandon Micci';
const HEADLINE = 'AI & Digital Transformation Executive';
const SUBLINE = 'Enterprise AI Transformation • 27K+ LLM users • $400M+ impact';

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
          justifyContent: 'flex-start',
          /* 🔵 Brand background:
             - base deep navy gradient (no grid)
             - very soft cyan wash behind text for depth (low opacity) */
          background:
            'radial-gradient(600px 320px at 22% 40%, rgba(0, 200, 255, 0.14), transparent 60%), linear-gradient(135deg, #060E1B 0%, #0A0F1F 58%, #0E1B33 100%)',
          color: '#EAF2FF',
          fontFamily:
            'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {/* subtle vignette only (no dots, no grid) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.28)',
          }}
        />

        {/* content block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 980,
            paddingLeft: 88,
          }}
        >
          {/* preheader */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#CFE3FF',
              opacity: 0.95,
            }}
          >
            {NAME}
          </div>

          {/* headline */}
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#F6FAFF',
            }}
          >
            {HEADLINE}
          </div>

          {/* subline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#DDE9FF',
              opacity: 0.98,
            }}
          >
            {SUBLINE}
          </div>
        </div>
      </div>
    ),
    size
  );
}