import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  title: 'Leak Detection Ballantyne NC | Slab Leak & Water Line Detection | 24/7 Emergency',
  description:
    'Professional leak detection in Ballantyne, NC. Non-invasive slab leak detection, water line locating, sewer camera inspection & 24/7 emergency leak repair. Licensed NC & SC. Call 980-405-4186.',
  keywords: [
    'leak detection ballantyne',
    'leak detection ballantyne nc',
    'slab leak detection charlotte',
    'water line leak detection',
    'sewer camera inspection ballantyne',
    'emergency leak repair',
    'plumber ballantyne nc',
    'leak detection near me',
    'pool leak detection charlotte',
    'pipe leak detection',
  ],
  authors: [{ name: 'Leak Detection Ballantyne' }],
  creator: 'Leak Detection Ballantyne',
  publisher: 'Leak Detection Ballantyne',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://leakdetectionballantyne.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Leak Detection Ballantyne NC | Slab Leak & Water Line Detection | 24/7 Emergency',
    description:
      'Professional non-invasive leak detection in Ballantyne, NC. Acoustic, thermal, and video pipe inspection. Licensed NC & SC. Call 980-405-4186.',
    url: 'https://leakdetectionballantyne.com',
    siteName: 'Leak Detection Ballantyne',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leak Detection Ballantyne NC | 24/7 Emergency Service',
    description: 'Professional non-invasive leak detection in Ballantyne, NC. Call 980-405-4186.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import StructuredData from '@/components/common/StructuredData';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-brand-dark focus:font-bold"
        >
          Skip to main content
        </a>
        {children}
        <StructuredData />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
