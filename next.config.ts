import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // domains: ['images.ctfassets.net', '...'] // add if you load remote images
  },
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'], // example if you use icon libs
  },
};

export default nextConfig;
