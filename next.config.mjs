/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "instagram.fdel11-2.fna.fbcdn.net",
       "assets.aceternity.com",
       "scontent.cdninstagram.com",
       "images.unsplash.com",
      'scontent.cdninstagram.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
