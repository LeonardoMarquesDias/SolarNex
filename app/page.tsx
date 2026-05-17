import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import FAQSchema from '@/components/FAQSchema'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SolarNex',
  url: 'https://solarnex.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah Johnson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Outstanding service from start to finish. The team was professional, knowledgeable, and completed the installation ahead of schedule. Our electricity bills have dropped by 80%!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michael Chen' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "Exceptional expertise and attention to detail. They designed a custom solution that perfectly fits our business needs. ROI has exceeded our expectations.",
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Emily Rodriguez' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "The maintenance team is incredibly responsive and thorough. Our system has been running flawlessly for two years thanks to their regular service visits.",
    },
  ],
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SolarNex Solar Services',
  description: 'Complete solar energy services across the United Kingdom',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Complete Solar Quote',
        description: 'Get a clear solar system design plan with detailed costs, savings analysis, and financing options before you invest.',
        provider: { '@type': 'Organization', name: 'SolarNex', url: 'https://solarnex.com' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Solar Panel Installation',
        description: 'Professional solar panel assembly, wiring, system testing and activation by certified installers.',
        provider: { '@type': 'Organization', name: 'SolarNex', url: 'https://solarnex.com' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Solar Maintenance & Upgrades',
        description: 'Fault detection, quick repairs, battery storage solutions and smart home integration for your solar system.',
        provider: { '@type': 'Organization', name: 'SolarNex', url: 'https://solarnex.com' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Solar Panel Cleaning',
        description: 'Professional solar panel cleaning service to remove dust and debris and maximize energy output.',
        provider: { '@type': 'Organization', name: 'SolarNex', url: 'https://solarnex.com' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <FAQSchema />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
