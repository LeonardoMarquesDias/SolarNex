import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Outstanding service from start to finish. The installation was seamless and our energy bills have dropped significantly.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      text: "Professional team, competitive pricing, and excellent after-sales support. Highly recommend for anyone considering solar.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      text: "The consultation was thorough and the installation exceeded our expectations. Great investment for our family's future.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                  style={{ backgroundImage: `url("${review.avatar}")` }}
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}