'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Most homeowners save 70-90% on their electricity bills. The exact savings depend on your energy usage, roof size, and local utility rates. Our experts provide detailed savings calculations during consultation."
    },
    {
      question: "What's the installation timeline?",
      answer: "Typical installation takes 1-3 days for residential systems. The entire process from consultation to activation usually takes 6-12 weeks, including permits and utility interconnection."
    },
    {
      question: "Do solar panels work in cloudy weather?",
      answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced capacity. Modern panels are efficient even in diffused sunlight and can produce 10-25% of their peak output on overcast days."
    },
    {
      question: "What warranties do you provide?",
      answer: "We offer comprehensive warranties: 25-year manufacturer warranty on panels, 10-year warranty on inverters, and 10-year workmanship warranty on installation. Extended warranties are also available."
    },
    {
      question: "How do I maintain my solar system?",
      answer: "Solar systems require minimal maintenance. Regular cleaning and annual inspections are recommended. Our maintenance packages include cleaning, performance monitoring, and preventive maintenance services."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-blue-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}