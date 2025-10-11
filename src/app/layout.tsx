import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import BackgroundRoot from '@/components/BackgroundRoot';
import EnhancedStructuredData from '@/components/EnhancedStructuredData';
import DevLayoutShiftLogger from '@/components/DevLayoutShiftLogger';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Consolas',
    'monospace',
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0f1f',
};

export const metadata: Metadata = {
  title: {
    default:
      'Brandon Micci - VP Head of AI Products | Enterprise AI Transformation Leader',
    template: '%s | Brandon Micci',
  },
  description:
    'VP Head of AI Products at JPMorgan Chase. 27K+ LLM users deployed, $400M+ revenue generated. Expert in enterprise AI strategy, digital transformation, and Fortune 500 innovation leadership.',
  keywords: [
    'VP Head of AI Products',
    'Enterprise AI Strategy Executive',
    'Fortune 500 AI Transformation Leader',
    'LLM Deployment Expert',
    'Digital Transformation VP',
    'AI Executive JPMorgan Chase',
    'Enterprise AI Implementation',
    'Generative AI Scale Deployment',
    'Chief AI Officer',
    'AI Strategy Consultant',
    'Next.js Portfolio',
    'TypeScript',
  ],
  authors: [{ name: 'Brandon Micci', url: 'https://brandonmicci.com' }],
  creator: 'Brandon Micci',
  publisher: 'Brandon Micci',
  metadataBase: new URL('https://brandonmicci.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'probely-verification': 'a79223fa-0c9b-4949-b08d-edddb9694b0e',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.brandonmicci.com',
    title: 'Brandon Micci — Enterprise AI Transformation Leader',
    description:
      'VP Head of AI Products at JPMorgan Chase. 27K+ LLM users deployed, $400M+ revenue generated. Expert in enterprise AI strategy, digital transformation, and Fortune 500 innovation leadership.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci - VP Head of AI Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Brandon Micci - VP Head of AI Products | Enterprise AI Transformation Leader',
    description:
      'VP Head of AI Products at JPMorgan Chase. 27K+ LLM users deployed, $400M+ revenue generated. Expert in enterprise AI strategy, digital transformation.',
    images: ['/opengraph-image'],
    creator: '@brandonmicci',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Only load analytics on Vercel (production deployment), not local builds
  const isVercel = process.env.VERCEL === '1';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EnhancedStructuredData />
        {process.env.NODE_ENV === 'development' && <DevLayoutShiftLogger />}
        <Navigation />
        <BackgroundRoot />
        <main id="main" className="mt-12 md:mt-14">
          {children}
        </main>
        {isVercel && <SpeedInsights />}
        {isVercel && <Analytics />}
      </body>
    </html>
  );
}
