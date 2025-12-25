import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarnex.com'),
  title: 'SolarNex - Complete Solar Energy Solutions',
  description: 'Get complete solar solutions for your home and business. Connect with certified solar experts and start saving today with professional installation and ongoing support.',
  keywords: 'solar energy, solar panels, solar installation, renewable energy, solar maintenance, solar repair',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'SolarNex - Complete Solar Energy Solutions',
    description: 'Get complete solar solutions for your home and business. Connect with certified solar experts and start saving today.',
    url: 'https://solarnex.com',
    siteName: 'SolarNex',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'SolarNex - Complete Solar Solutions for Your Home & Business',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}