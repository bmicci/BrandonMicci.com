/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

// Brand colors
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: 'linear-gradient(135deg, #060E1B 0%, #0A0F1F 50%, #0E1B33 100%)',
          fontFamily:
            'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* left content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 980,
            paddingLeft: 88,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#FFFFFF', // bright white
            }}
          >
            {NAME}
          </div>

          {/* Headline with gradient */}
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              background:
                'linear-gradient(90deg, #00D4FF 0%, #1E90FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {HEADLINE}
          </div>

          {/* Subline in solid cyan */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#00D4FF', // solid cyan
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