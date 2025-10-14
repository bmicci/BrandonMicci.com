import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import Script from 'next/script';
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
    default: 'Brandon Micci | Enterprise AI & Digital Transformation Executive',
    template: '%s | Brandon Micci',
  },
  description:
    'Senior AI & Digital Transformation Executive delivering measurable ROI at Fortune 500 scale. $400M+ enterprise revenue created, 27K+ AI users enabled, 250% peak program ROI. Expert in AI strategy, LLM deployment, and data platform architecture.',
  keywords: [
    'Enterprise AI Executive',
    'Digital Transformation Executive',
    'AI Strategy Director',
    'Data Strategy Executive',
    'Senior Director AI',
    'VP AI Products',
    'Chief AI Officer',
    'LLM Deployment Expert',
    'Fortune 500 AI Transformation',
    'Enterprise Data Platform',
    'AI Governance Framework',
    'Digital Innovation Leader',
    'Enterprise ROI AI Strategy',
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
    title: 'Brandon Micci | Enterprise AI & Digital Transformation Executive',
    description:
      'Senior AI & Digital Transformation Executive delivering measurable ROI at Fortune 500 scale. $400M+ enterprise revenue, 27K+ AI users enabled, 250% peak ROI. Expert in AI strategy, LLM deployment, data platforms.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci - Enterprise AI & Digital Transformation Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Micci | Enterprise AI & Digital Transformation Executive',
    description:
      'Senior AI & Digital Transformation Executive. $400M+ enterprise revenue, 27K+ AI users, 250% peak ROI. Expert in AI strategy, LLM deployment, Fortune 500 transformation.',
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Read nonce from middleware
  const headersList = await headers();
  const nonce = headersList.get('x-csp-nonce') || undefined;

  // Only load analytics on Vercel (production deployment), not local builds
  const isVercel = process.env.VERCEL === '1';
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // set in Vercel env

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data with nonce */}
        <EnhancedStructuredData nonce={nonce} />

        {process.env.NODE_ENV === 'development' && <DevLayoutShiftLogger />}
        <Navigation />
        <BackgroundRoot />
        <main id="main" className="mt-12 md:mt-14">
          {children}
        </main>

        {/* Vercel Analytics */}
        {isVercel && <SpeedInsights />}
        {isVercel && <Analytics />}

        {/* Google Analytics (GA4) */}
        {GA_ID && (
          <>
            {/* Loader (external) */}
            <Script
              nonce={nonce}
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* Config (inline; must carry nonce) */}
            <Script id="ga4-init" nonce={nonce} strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { 
                  anonymize_ip: true, 
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
