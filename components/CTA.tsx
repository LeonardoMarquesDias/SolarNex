'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import LeadForm from './LeadForm'

export default function CTA() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section className="py-16 lg:py-24 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get a personalized solar assessment and detailed quote for your property. 
            Fill out the form and receive your customized solar solution within 24 hours.
          </p>
          
          <Button
            onClick={() => setShowForm(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <LeadForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}