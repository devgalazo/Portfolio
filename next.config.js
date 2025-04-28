/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'standalone',  // ⚡ ESSENCIAL para Cloudflare Pages Functions
};

module.exports = nextConfig;

