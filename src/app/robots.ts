import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Keep test and preview deployments out of search results
  const indexable =
    process.env.VERCEL_ENV === 'production' &&
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? '').includes(
      'brandonmicci.com'
    );
  if (!indexable) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: 'https://brandonmicci.com',
    sitemap: 'https://brandonmicci.com/sitemap.xml',
  };
}
