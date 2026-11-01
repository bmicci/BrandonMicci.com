import { ImageResponse } from 'next/og';

// Social share card in the portfolio style: flat navy, white type, one thin
// accent rule. No gradients or glows.
export const ogSize = { width: 1200, height: 630 };

export function ogCard({
  eyebrow,
  title,
  sub,
  titleSize = 76,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  titleSize?: number;
}) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a1f33',
        padding: '72px 88px',
        fontFamily: 'Inter, system-ui, Helvetica, Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#8fa3b8',
        }}
      >
        {eyebrow}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ width: 64, height: 4, background: '#00d4ff' }} />
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            lineHeight: 1.35,
            color: '#e8eef4',
            maxWidth: 980,
          }}
        >
          {sub}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #2a4258',
          paddingTop: 24,
          fontSize: 24,
          color: '#8fa3b8',
        }}
      >
        <span style={{ color: '#ffffff', fontWeight: 600 }}>Brandon Micci</span>
        <span>brandonmicci.com</span>
      </div>
    </div>,
    ogSize
  );
}
