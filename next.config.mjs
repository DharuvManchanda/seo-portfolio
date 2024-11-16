/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.unsplash.com",
      "aceternity.com",
    ],
  },
};

export default nextConfig;
