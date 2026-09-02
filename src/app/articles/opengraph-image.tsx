import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Articles & Frameworks — Brandon Micci';

// Social share card for the articles index. Same brand system as the root
// opengraph-image: dark navy gradient, cyan headline, Inter stack.
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
          gap: 20,
          maxWidth: 1000,
          paddingLeft: 88,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: '#EAF2FF',
            letterSpacing: '-0.02em',
          }}
        >
          Brandon Micci
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#00D4FF',
          }}
        >
          Articles &amp; Frameworks
        </div>

        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: '#F6FAFF',
            textShadow: '0 0 12px rgba(0, 212, 255, 0.35)',
          }}
        >
          AI operating models, governance, delivery, and adoption at enterprise
          scale
        </div>
      </div>
    </div>,
    size
  );
}
