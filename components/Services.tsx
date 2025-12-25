'use client'

import { useState } from 'react'
import LeadForm from './LeadForm'

export default function Services() {
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setShowForm(true)
  }

  const services = [
    {
      title: "Complete Solar Quote",
      description: "Get a clear plan before you invest.",
      bullets: [
        "Detailed system design",
        "Transparent costs and savings analysis", 
        "Financing options available"
      ],
      image: "/quote.jpg"
    },
    {
      title: "Installation Only",
      description: "Already purchased your solar kit? We handle the setup.",
      bullets: [
        "Professional assembly and wiring",
        "System testing and activation"
      ],
      image: "/installations.jpg"
    },
    {
      title: "Maintenance & Upgrades",
      description: "Keep your system safe, reliable, and up to date.",
      bullets: [
        "Fault detection and quick repairs",
        "Part replacement and performance monitoring",
        "Battery storage solutions (energy anytime)",
        "Smart home integration (real-time apps & automation)"
      ],
      image: "/repair.jpg"
    },
    {
      title: "Solar Panel Cleaning",
      description: "Maximize efficiency with professional cleaning.",
      bullets: [
        "Removal of dust and debris",
        "Improved energy output",
        "Scheduled maintenance available"
      ],
      image: "/cleaning.jpg"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Our Solar Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-gray-600 text-sm">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Form Modal */}
      {showForm && (
        <LeadForm 
          onClose={() => setShowForm(false)} 
          preSelectedService={selectedService}
        />
      )}
    </section>
  )
}