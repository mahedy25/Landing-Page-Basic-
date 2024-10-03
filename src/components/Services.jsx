import React from 'react'

const Services = () => {
  return (
    <div id="services" className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">We Provide-</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg p-6">
            <h4 className="text-2xl font-bold">Primary Care</h4>
            <p className="mt-4 text-gray-600">Comprehensive healthcare services for individuals and families.</p>
          </div>
          <div className="bg-white shadow-lg p-6">
            <h4 className="text-2xl font-bold">Pediatric Care</h4>
            <p className="mt-4 text-gray-600">Expert medical services for infants, children, and adolescents.</p>
          </div>
          <div className="bg-white shadow-lg p-6">
            <h4 className="text-2xl font-bold">Emergency Services</h4>
            <p className="mt-4 text-gray-600">24/7 emergency medical services to ensure immediate care.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
