import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { spaceGrotesk, inter, barlow } from '@/lib/fonts';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CITYZINE — Street Culture / Print / Apparel',
    template: '%s — CITYZINE',
  },
  description:
    'CITYZINE is an independent street culture brand rooted in print, urban art, and creative community. Shop tees, stickers, and zines.',
  metadataBase: new URL('https://city-zine.eu'),
  openGraph: {
    title: 'CITYZINE — Street Culture / Print / Apparel',
    description:
      'Independent street culture brand. Print. Urban art. Creative community.',
    url: 'https://city-zine.eu',
    siteName: 'CITYZINE',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CITYZINE',
    description: 'Street Culture / Print / Apparel',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${barlow.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
