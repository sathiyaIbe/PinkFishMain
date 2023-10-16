/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/countdown',
        destination: '/index.html',
      },
    ]
  },
};
 
module.exports = nextConfig;
