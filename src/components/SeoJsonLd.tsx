'use client';
import Script from 'next/script';

export default function SeoJsonLd() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandonmicci.com';
  return (
    <>
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Person",
          "name":"Brandon Micci",
          "url": site,
          "jobTitle":"AI & Product Leader",
          "image": `${site}/images/headshot.jpg`,
          "sameAs":[ "https://www.linkedin.com/in/brandonmicci", "https://github.com/bmicci" ]
        })}} />
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebSite",
          "name":"Brandon Micci",
          "url": site
        })}} />
    </>
  );
}
