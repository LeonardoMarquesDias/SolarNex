'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function PrivacyPolicy() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="mb-4 text-blue-900 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-blue-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We collect information you provide directly to us, such as when you fill out our contact forms, 
                request quotes, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Information about your property and energy needs</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide solar energy consultations and quotes</li>
                <li>Communicate with you about our services</li>
                <li>Schedule appointments and installations</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Certified solar installation partners to provide services</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700">
              Our website may use cookies to enhance your browsing experience. You can choose to 
              disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our website contact form or the information provided on our main page.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}