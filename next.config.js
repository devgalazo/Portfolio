/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,  // Garante que as URLs tenham a barra no final
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Se tiver mais páginas, adicione aqui:
      // '/sobre': { page: '/sobre' },
      // '/contato': { page: '/contato' },
    };
  },
};

module.exports = nextConfig;

