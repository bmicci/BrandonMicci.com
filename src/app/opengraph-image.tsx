import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAME = 'Brandon Micci';
const HEADLINE = 'AI & Digital Transformation Executive';
const SUBLINE =
  'Enterprise AI Transformation • 27K+ LLM users • $50M+ documented savings';

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background:
          'linear-gradient(135deg, #060E1B 0%, #0A0F1F 50%, #0E1B33 100%)',
        fontFamily:
          'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif',
      }}
    >
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
            color: '#EAF2FF',
            letterSpacing: '-0.02em',
          }}
        >
          {NAME}
        </div>

        {/* Headline - solid cyan color (no SVG) */}
        <div
          style={{
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#00D4FF', // solid cyan
          }}
        >
          {HEADLINE}
        </div>

        {/* Subline - bright white with cyan glow effect */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: '#F6FAFF',
            textShadow: '0 0 12px rgba(0, 212, 255, 0.35)',
          }}
        >
          {SUBLINE}
        </div>
      </div>
    </div>,
    size
  );
}
