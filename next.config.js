/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'standalone',  // ⚡ ESSENCIAL para Cloudflare Pages Functions
  experimental: {
    outputStandalone: true,  // Garante que o Next.js funcione bem em ambientes serverless
  },
};

module.exports = nextConfig;
