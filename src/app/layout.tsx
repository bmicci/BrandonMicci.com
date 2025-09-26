import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import StructuredData from '@/components/StructuredData';
import SeoJsonLd from '@/components/SeoJsonLd';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brandon Micci - VP Head of AI Products | Enterprise AI Transformation Leader',
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
    'AI Strategy Consultant'
  ],
  authors: [{ name: 'Brandon Micci' }],
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
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://brandonmicci.com',
    siteName: 'Brandon Micci - AI Executive Portfolio',
    title: 'Brandon Micci - VP Head of AI Products | Enterprise AI Transformation Leader',
    description:
      'VP Head of AI Products at JPMorgan Chase. 27K+ LLM users deployed, $400M+ revenue generated. Expert in enterprise AI strategy, digital transformation, and Fortune 500 innovation leadership.',
    images: [
      {
        url: '/headshot.webp',
        width: 1200,
        height: 630,
        alt: 'Brandon Micci - VP Head of AI Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Micci - VP Head of AI Products | Enterprise AI Transformation Leader',
    description:
      'VP Head of AI Products at JPMorgan Chase. 27K+ LLM users deployed, $400M+ revenue generated. Expert in enterprise AI strategy, digital transformation.',
    images: ['/headshot.webp'],
    creator: '@brandonmicci',
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <SeoJsonLd />
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
