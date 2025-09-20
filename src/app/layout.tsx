import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import GlobalBackground from '@/components/GlobalBackground';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brandon Micci - AI & Digital Transformation',
  description:
    'Portfolio showcasing AI expertise and digital transformation solutions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon_16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://static.wixstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="//static.wixstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Mount ONE background for the entire app */}
        <GlobalBackground />
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Brandon Micci',
              jobTitle: 'VP, Head of NextGen AI/ML Solutions',
              url: 'https://www.brandonmicci.com',
              sameAs: ['https://www.linkedin.com/in/brandonmicci'],
              description:
                'AI & Digital Transformation Executive driving Fortune 500 digital transformation through AI, Data Strategy, and client-centric products',
              knowsAbout: [
                'Artificial Intelligence',
                'Digital Transformation',
                'Data Strategy',
                'Machine Learning',
                'Product Management',
              ],
            }),
          }}
        />
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
