import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              SolarNex
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for clean, renewable solar energy solutions. 
              We help homeowners and businesses transition to sustainable energy 
              with professional installation and ongoing support.
            </p>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
              <span className="text-gray-300">Serving all of United Kingdom</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Reviews</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} SolarNex. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}