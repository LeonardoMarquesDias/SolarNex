'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun } from 'lucide-react'
import LeadForm from './LeadForm'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleNavClick = (item: { name: string; href: string }) => {
    if (item.name === 'Contact') {
      setShowForm(true)
    } else {
      // For other nav items, let the default anchor behavior work
      window.location.href = item.href
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Sun className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-xl font-bold text-blue-900">
                SolarNex
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-300 px-2 py-1 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    setShowForm(true)
                    setIsMenuOpen(false)
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 mt-4 w-full"
                >
                  Get a Quote
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Lead Form Modal */}
      {showForm && (
        <LeadForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}