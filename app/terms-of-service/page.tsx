import type { Metadata } from 'next'
import TermsOfServiceContent from './TermsOfServiceContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'SolarNex Terms of Service - Read our terms and conditions for solar panel installation, maintenance, and other solar energy services in the United Kingdom.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://solarnex.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />
}
