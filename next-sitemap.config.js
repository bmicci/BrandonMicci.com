/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://brandonmicci.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/test/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://brandonmicci.com/sitemap.xml',
    ],
  },
};
