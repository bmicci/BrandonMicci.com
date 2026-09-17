import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt =
  "Your AI Pilot Didn't Fail. It Was Never Designed to Ship. — Brandon Micci";

// Social share card for the AI delivery lifecycle article. Same brand system
// as the root opengraph-image: dark navy gradient, cyan headline, Inter stack.
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
          gap: 22,
          maxWidth: 1030,
          paddingLeft: 88,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#EAF2FF',
            letterSpacing: '0.01em',
          }}
        >
          Brandon Micci · Articles &amp; Frameworks
        </div>

        {/* Article title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#00D4FF',
          }}
        >
          Your AI Pilot Didn&rsquo;t Fail. It Was Never Designed to Ship.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: '#F6FAFF',
            textShadow: '0 0 12px rgba(0, 212, 255, 0.35)',
          }}
        >
          A delivery lifecycle designed for AI, from experiment to operations
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: 'rgba(234, 242, 255, 0.6)',
            marginTop: 10,
          }}
        >
          brandonmicci.com/articles
        </div>
      </div>
    </div>,
    size
  );
}
