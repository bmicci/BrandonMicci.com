/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

// Text pulled from your live hero
const HEADLINE = 'AI & Digital Transformation Executive';
const SUBLINE =
  'Enterprise AI Transformation • 27K+ LLM users • $400M+ impact';
const NAME = 'Brandon Micci';

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
          color: '#EAF2FF',
          background:
            // site-like: subtle cyan glow + deep navy gradient
            'radial-gradient(600px 300px at 20% 28%, rgba(0,212,255,0.18), transparent 60%), linear-gradient(135deg, #060E1B 0%, #0a0f1f 60%, #0E1B33 100%)',
          fontFamily:
            'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {/* grid backdrop lines (very subtle, like the site) */}
        <svg
          width="1200"
          height="630"
          style={{ position: 'absolute', inset: 0, opacity: 0.12 }}
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#8fb3ff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* vignette for depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 140px rgba(0,0,0,0.35)',
          }}
        />

        {/* left content block to mirror hero */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 960,
            paddingLeft: 88,
          }}
        >
          {/* Name (small, like the site's preheader) */}
          <div
            style={{
              fontSize: 28,
              opacity: 0.9,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#CFE3FF',
            }}
          >
            {NAME}
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 86, // tuned to match on-site scale
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#F6FAFF',
            }}
          >
            {HEADLINE}
          </div>

          {/* Subline */}
          <div
            style={{
              fontSize: 32,
              opacity: 0.95,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#DDE9FF',
            }}
          >
            {SUBLINE}
          </div>
        </div>

        {/* BM badge (bottom-right), same feel as site's navbar mark */}
        <div
          style={{
            position: 'absolute',
            right: 36,
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            opacity: 0.40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.18)',
              background:
                'linear-gradient(135deg, rgba(0,212,255,0.35) 0%, rgba(0,122,204,0.35) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.02em' }}>BM</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>
            {NAME}
          </div>
        </div>

        {/* corner accent bars (mirroring your hero's cyan accents) */}
        <div
          style={{
            position: 'absolute',
            left: 32,
            top: 32,
            width: 170,
            height: 6,
            borderRadius: 999,
            background:
              'linear-gradient(90deg, rgba(0,212,255,0.7), rgba(255,255,255,0))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 32,
            top: 50,
            width: 120,
            height: 4,
            borderRadius: 999,
            background:
              'linear-gradient(90deg, rgba(0,212,255,0.35), rgba(255,255,255,0))',
          }}
        />
      </div>
    ),
    size
  );
}