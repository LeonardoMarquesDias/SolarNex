import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = 'https://solarnex.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'SolarNex | Solar Panel Installation & Services UK',
    template: '%s | SolarNex',
  },
  description: 'SolarNex provides expert solar panel installation, maintenance, repair and cleaning services across the United Kingdom. Get a free quote today and save up to 90% on electricity bills.',
  keywords: [
    'solar panels UK',
    'solar panel installation',
    'solar energy solutions',
    'residential solar panels',
    'commercial solar installation',
    'solar maintenance UK',
    'solar panel repair',
    'solar panel cleaning',
    'renewable energy UK',
    'battery storage solar',
    'solar quotes UK',
    'certified solar installers',
  ],
  authors: [{ name: 'SolarNex', url: BASE_URL }],
  creator: 'SolarNex',
  publisher: 'SolarNex',
  category: 'Solar Energy Services',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'SolarNex | Solar Panel Installation & Services UK',
    description: 'Expert solar panel installation, maintenance and cleaning across the UK. Save up to 90% on electricity bills with certified solar installers. Get your free quote today.',
    url: BASE_URL,
    siteName: 'SolarNex',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'SolarNex - Professional Solar Energy Solutions for UK Homes & Businesses',
        type: 'image/svg+xml',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarNex | Solar Panel Installation & Services UK',
    description: 'Expert solar panel installation, maintenance and cleaning across the UK. Save up to 90% on electricity. Get your free quote today.',
    images: ['/og-image.svg'],
    creator: '@solarnex',
    site: '@solarnex',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-site-verification-token',
  },
  other: {
    'theme-color': '#1e3a5f',
    'msapplication-TileColor': '#1e3a5f',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'SolarNex',
  description: 'Professional solar panel installation, maintenance, repair and cleaning services across the United Kingdom.',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon.svg`,
  },
  image: `${BASE_URL}/og-image.svg`,
  telephone: '',
  email: '',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'United Kingdom',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  priceRange: '££',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Energy Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complete Solar Quote',
          description: 'Detailed solar system design with transparent costs and savings analysis',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar Panel Installation',
          description: 'Professional solar panel installation with system testing and activation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar Maintenance & Upgrades',
          description: 'Fault detection, repairs, battery storage and smart home integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar Panel Cleaning',
          description: 'Professional solar panel cleaning to maximize energy output',
        },
      },
    ],
  },
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'SolarNex',
  description: 'Professional solar panel installation and services across the UK',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-GB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.country" content="United Kingdom" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
