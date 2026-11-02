import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import './globals.css';
import EnhancedStructuredData from '@/components/EnhancedStructuredData';
import DevLayoutShiftLogger from '@/components/DevLayoutShiftLogger';
import Footer from '@/components/Footer';
import SiteFrame from '@/components/SiteFrame';
import StyledJsxRegistry from '@/components/StyledJsxRegistry';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { isPortfolioPath } from '@/components/bm/routes';

// Only the production deployment of the brandonmicci.com project is indexed.
// Test and preview deployments (e.g. the redesign test project) are noindex.
const INDEXABLE =
  process.env.VERCEL_ENV === 'production' &&
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? '').includes(
    'brandonmicci.com'
  );

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0f1f',
};

export const metadata: Metadata = {
  title: {
    default:
      'Brandon Micci | Enterprise AI & Business Transformation Executive',
    template: '%s | Brandon Micci',
  },
  description:
    'Brandon Micci leads enterprise AI, data and transformation programs: 17+ years at JPMorgan Chase, Citi, Southwest Airlines and EY, with $50M+ in documented savings.',
  keywords: [
    'Brandon Micci',
    'enterprise AI strategy',
    'AI operating model',
    'AI governance',
    'Responsible AI',
    'LLM deployment',
    'generative AI in financial services',
    'AI delivery lifecycle',
    'business transformation',
    'data strategy',
    'analytics center of excellence',
    'digital transformation',
    'Dallas',
  ],
  authors: [{ name: 'Brandon Micci', url: 'https://brandonmicci.com' }],
  creator: 'Brandon Micci',
  publisher: 'Brandon Micci',
  metadataBase: new URL('https://brandonmicci.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: INDEXABLE,
    follow: INDEXABLE,
    googleBot: {
      index: INDEXABLE,
      follow: INDEXABLE,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9YsMxiPFUlcYZSIiOKJHFLThjWQ0h8eqGIKDOIQ3GX0',
    other: {
      'msvalidate.01': '4F5964509C3753D3CF3DD1FC42172AE9',
      'probely-verification': 'a79223fa-0c9b-4949-b08d-edddb9694b0e',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://brandonmicci.com',
    locale: 'en_US',
    title: 'Brandon Micci | Enterprise AI & Business Transformation Executive',
    description:
      'Seventeen years leading enterprise AI, data and transformation programs in regulated companies. Case studies, career history and writing.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci, enterprise AI and business transformation executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Micci | Enterprise AI & Business Transformation Executive',
    description:
      'Seventeen years leading enterprise AI, data and transformation programs in regulated companies. Case studies, career history and writing.',
    images: ['/opengraph-image'],
    creator: '@brandonmicci',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      {
        url: '/android-chrome-192x192.png?v=2',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png?v=2',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Read nonce and current path from the proxy
  const headersList = await headers();
  const nonce = headersList.get('x-csp-nonce') || undefined;
  const pathname = headersList.get('x-pathname') || '/';
  const isPortfolio = isPortfolioPath(pathname);

  // Only load analytics on Vercel (production deployment), not local builds
  const isVercel = process.env.VERCEL === '1';
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // set in Vercel env

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Portfolio pages theme: apply the saved or system choice before first paint */}
        {isPortfolio && (
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `try{var t=localStorage.getItem('bm-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
            }}
          />
        )}
        {/* Note: do not manually preload logo-bm-tight.webp or headshot.webp here.
            Next.js <Image priority /> already preloads the optimized variant.
            A manual preload of the source file fetches the full-size image
            in parallel — wasted bandwidth and a small LCP regression. */}

        {/* Performance: DNS prefetch and preconnect for external resources actually used in production */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {/* Structured Data with nonce */}
        <EnhancedStructuredData nonce={nonce} pathname={pathname} />

        {process.env.NODE_ENV === 'development' && <DevLayoutShiftLogger />}
        <StyledJsxRegistry>
          <SiteFrame footer={<Footer />}>{children}</SiteFrame>
        </StyledJsxRegistry>

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
