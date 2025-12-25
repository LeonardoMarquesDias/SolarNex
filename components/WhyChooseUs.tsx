import { Shield, Award, Users } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: "Certified Experts",
      description: "Our team consists of licensed professionals with years of experience in solar energy solutions."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-400" />,
      title: "Quality Guarantee",
      description: "We use only premium materials and provide comprehensive warranties on all installations."
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Customer First",
      description: "Dedicated support team ensures your satisfaction throughout the entire solar journey."
    }
  ]

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}