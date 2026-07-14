import type { MetadataRoute } from 'next';

// lastModified dates are hardcoded to the date each route's content was last
// meaningfully changed. Update the relevant date when you next edit a page —
// stamping every route with "now" on every build trains Google to distrust
// (and ignore) the freshness signal entirely.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://brandonmicci.com';
  return [
    {
      url: `${base}/`,
      lastModified: '2026-07-14',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${base}/experience`,
      lastModified: '2026-07-14',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/case-studies`,
      lastModified: '2026-05-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: '2026-05-12',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/contactcard`,
      lastModified: '2026-07-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/privacy`,
      lastModified: '2026-05-10',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
