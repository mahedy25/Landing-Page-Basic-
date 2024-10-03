import React from 'react'

const Testimonials = () => {
  return (
    <div className="py-16">
       <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">What Our Patients Say-</h3>
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center  gap-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md ">
              <p className="text-xs sm:text-lg italic">"The doctors and staff are caring, compassionate, and professional. I felt safe and well-cared for."</p>
              <h4 className="mt-4 font-bold">- Jane Doe</h4>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-xs sm:text-lg  italic">"Excellent service! I received timely care and the staff made me feel at ease during my visit."</p>
              <h4 className="mt-4 font-bold">- John Smith</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
