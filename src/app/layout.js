import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://matheusgalazo.com.br'),
  title: 'Matheus | Portfólio de Desenvolvimento Web',
  description: 'Conheça os projetos de Matheus: desenvolvimento web com HTML, CSS, JavaScript, Node.js, MySQL e muito mais.',
  keywords: 'portfólio, desenvolvedor web, HTML, CSS, JavaScript, Node.js, MySQL, Tailwind, React, projetos de TI',
  author: 'Matheus',
  themeColor: '#60a5fa', // Um roxo bonito (você pode trocar para outra cor se quiser)
  openGraph: {
    title: 'Matheus | Portfólio de Desenvolvimento Web',
    description: 'Projetos de desenvolvimento web criativos e modernos, utilizando as melhores tecnologias do mercado.',
    url: 'https://matheusgalazo.com.br', // Troque pelo seu domínio real
    siteName: 'Galazo Dev',
    images: [
      {
        url: '/images/tecnology-background.jpg', // Uma imagem de capa (pode criar no Figma ou usar uma imagem de fundo bonita)
        width: 1200,
        height: 630,
        alt: 'Matheus Galazo - Portfólio de Desenvolvimento Web',
      },
    ],
    icons: {
      icon: 'public/favicon.ico',
    },
    locale: 'pt_BR',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
