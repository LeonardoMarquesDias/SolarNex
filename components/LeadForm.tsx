'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, CircleCheck as CheckCircle } from 'lucide-react'

interface LeadFormProps {
  onClose: () => void
  preSelectedService?: string
}

export default function LeadForm({ onClose, preSelectedService }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preSelectedService || ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const services = [
    'Complete Solar Quote',
    'Solar Installations',
    'Solar Panel Repair',
    'Solar Painel Clean',
    'Solar Battery Storages',
    'Smart Home Integration',
    'Not sure - I want to be contacted'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Lead submitted:', formData)
    setIsSubmitted(true)
    setIsLoading(false)

    // Auto close after 3 seconds
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-end p-6 border-b">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-600 text-center">
            We'll contact you within 24 hours to schedule your consultation and provide a detailed quote.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                Thank You!
              </h4>
              <p className="text-gray-600">
                Your request has been submitted successfully. You'll receive your personalized solar quote within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="mt-1"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-1"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-1"
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service Interested In *
                </Label>
                <Select 
                  onValueChange={(value) => handleChange('service', value)} 
                  value={formData.service}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70"
              >
                {isLoading ? 'Submitting...' : 'Get Your Solar Quote'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}