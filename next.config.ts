import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
    // @ts-expect-error: `qualities` is introduced in Next.js 16; keep forward-compatible
    qualities: [60, 75, 85, 92],
  },
};

export default nextConfig;
