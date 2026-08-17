import './globals.css'

export const metadata = {
  title: 'intelli-SOA | Intelligence Artificielle Moderne',
  description: 'intelli-SOA dia sehatra Intelligence Artificielle mahery vaika sy maoderina ampiasan-tsaina manampy amin’ny fanontaniana sy fikarohana rehetra.',
  keywords: ['intelli-SOA', 'intelli-soa', 'Intelligence Artificielle', 'AI Assistant', 'AI Madagascar', 'Gemini AI Chat'],
  authors: [{ name: 'intelli-SOA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'intelli-SOA | Intelligence Artificielle',
    description: 'Sehatra Intelligence Artificielle mahery vaika sy maoderina.',
    type: 'website',
    url: 'https://intelli-soa.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="mg">
      <head>
        <link rel="canonical" href="https://intelli-soa.vercel.app" />
      </head>
      <body className="antialiased bg-[#0b0f19] text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}