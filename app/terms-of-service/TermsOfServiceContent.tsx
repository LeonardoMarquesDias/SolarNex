'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function TermsOfServiceContent() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-3xl font-bold text-blue-900">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using SolarNex&apos;s website and services, you accept and agree
              to be bound by the terms and provision of this agreement. If you do not agree to abide
              by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Services Description</h2>
            <div className="space-y-4 text-gray-700">
              <p>SolarNex provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solar energy consultation and system design</li>
                <li>Solar panel installation services</li>
                <li>Solar system maintenance and repair</li>
                <li>Solar panel cleaning services</li>
                <li>Battery storage solutions</li>
                <li>Smart home integration services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Quotes and Estimates</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                All quotes and estimates provided are preliminary and subject to change based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Site inspection and technical assessment</li>
                <li>Local regulations and permit requirements</li>
                <li>Equipment availability and pricing</li>
                <li>Utility interconnection requirements</li>
              </ul>
              <p>
                Final pricing will be confirmed in writing before any work begins.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Installation Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our installation services are subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proper permits and approvals</li>
                <li>Suitable site conditions</li>
                <li>Weather conditions</li>
                <li>Equipment availability</li>
              </ul>
              <p>
                We reserve the right to modify installation timelines based on these factors.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Warranties</h2>
            <div className="space-y-4 text-gray-700">
              <p>We provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manufacturer warranties on all equipment</li>
                <li>Workmanship warranty on installation</li>
                <li>Performance guarantees as specified in contracts</li>
              </ul>
              <p>
                Warranty terms vary by product and service. Specific warranty information
                will be provided with each contract.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              SolarNex&apos;s liability is limited to the value of services provided.
              We are not liable for indirect, incidental, or consequential damages. Our maximum
              liability shall not exceed the total amount paid for our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Customer Responsibilities</h2>
            <div className="space-y-4 text-gray-700">
              <p>Customers are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate information about their property</li>
                <li>Obtaining necessary approvals from HOAs or local authorities</li>
                <li>Ensuring safe access to installation areas</li>
                <li>Regular system maintenance as recommended</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Cancellation Policy</h2>
            <p className="text-gray-700">
              Cancellation terms vary by service and will be specified in individual contracts.
              Generally, customers may cancel within a specified period after contract signing,
              subject to any work already completed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by and construed in accordance with the laws of
              the United Kingdom, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us through our
              website contact form or the information provided on our main page.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
