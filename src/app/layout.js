import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// app/layout.js
export const metadata = {
  metadataBase: new URL('https://matheusgalazo.com.br'),
  title: 'Matheus | Portfólio de Desenvolvimento Web',
  description: 'Conheça os projetos de Matheus: desenvolvimento web com HTML, CSS, JavaScript, Node.js, MySQL e muito mais.',
  keywords: 'portfólio, desenvolvedor web, HTML, CSS, JavaScript, Node.js, MySQL, Tailwind, React, projetos de TI',
  author: 'Matheus',
  themeColor: '#60a5fa',
  icons: {
    icon: '/favicon.ico', // <-- Agora está no lugar certo
  },
  openGraph: {
    title: 'Matheus | Portfólio de Desenvolvimento Web',
    description: 'Projetos de desenvolvimento web criativos e modernos, utilizando as melhores tecnologias do mercado.',
    url: 'https://matheusgalazo.com.br',
    siteName: 'Galazo Dev',
    images: [
      {
        url: '/images/tecnology-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Galazo - Portfólio de Desenvolvimento Web',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* O Next.js irá injetar os metadados automaticamente */}
      </head>
      <body>{children}</body>
    </html>
  );
}

