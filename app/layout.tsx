import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const resumeUrl =
  'https://drive.google.com/file/d/14a7gYKHHGo5i5fm-hZ6WzCMz3fpB0oUn/view'

const themeInitScript = `
(() => {
  const storageKey = 'portfolio-theme';
  const lightColor = '#f5f7ef';
  const darkColor = '#0e1411';

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const storedTheme = (() => {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  })();

  const theme = storedTheme || getSystemTheme();
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? darkColor : lightColor);
  }
})();
`

export const metadata: Metadata = {
  metadataBase: new URL('https://devkmaan.vercel.app'),
  title: 'Dev Kumar Maan | Software Engineer',
  description:
    'Backend systems software engineer building reliable fintech platforms, telemetry services, and AI/ML product systems for global engineering roles.',
  authors: [{ name: 'Dev Kumar Maan' }],
  openGraph: {
    title: 'Dev Kumar Maan | Software Engineer',
    description:
      'Portfolio of Dev Kumar Maan, Software Engineer at Pine Labs with backend systems, Go, Spring Boot, distributed fintech, and AI/ML product projects.',
    type: 'website',
    images: ['/images/me.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/',
    types: {
      'application/pdf': resumeUrl
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f7ef' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1411' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
