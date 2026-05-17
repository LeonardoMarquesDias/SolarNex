'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import LeadForm from './LeadForm'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section id="home" aria-label="Solar energy solutions" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero1.jpg")' }}
          role="img"
          aria-label="Solar panels installed on a rooftop"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Solar Energy Solutions
            <span className="block text-yellow-400">for Your Home &amp; Business</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with certified solar experts and start saving today.
          </p>

          <Button
            onClick={() => setShowForm(true)}
            aria-label="Get a free solar energy quote"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get a Quote
          </Button>
        </div>
      </section>

      {showForm && (
        <LeadForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}
