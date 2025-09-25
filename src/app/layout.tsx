import type { Metadata } from 'next';
import './globals.css';
import NewNav from '@/components/NewNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brandonmicci.com'),
  title: 'Brandon Micci — VP, Head of AI Products | Enterprise AI',
  description:
    'Enterprise AI & digital transformation leader ($400M+ value, 27K+ users). VP, Head of AI Products. Strategy → shipping business impact.',
  alternates: { canonical: 'https://www.brandonmicci.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.brandonmicci.com',
    title: 'Brandon Micci — Enterprise AI Transformation Leader',
    description:
      'Enterprise AI & digital transformation leader ($400M+ value, 27K+ users).',
    images: [{ url: '/og/og-home.jpg', width: 1200, height: 630, alt: 'Brandon Micci' }],
    siteName: 'Brandon Micci',
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Brandon Micci',
              jobTitle: 'VP, Head of AI Products',
              url: 'https://www.brandonmicci.com',
              image: 'https://www.brandonmicci.com/images/hero-headshot.webp',
              sameAs: [
                'https://www.linkedin.com/in/brandonmicci',
                'https://github.com/bmicci',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased [font-variant-numeric:tabular-nums]">
        <NewNav />
        {children}
      </body>
    </html>
  );
}
