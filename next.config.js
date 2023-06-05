/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Fix import image from outside project here!!
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
    unoptimized: true
  },
};

module.exports = nextConfig;
