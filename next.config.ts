import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // domains: ['images.ctfassets.net', '...'] // add if you load remote images
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
