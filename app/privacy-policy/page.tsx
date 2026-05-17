import type { Metadata } from 'next'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SolarNex Privacy Policy - Learn how we collect, use, and protect your personal information when you use our solar energy services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://solarnex.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
