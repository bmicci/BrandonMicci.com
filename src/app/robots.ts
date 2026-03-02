import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
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
