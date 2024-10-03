import React from 'react'
import heroImage from '../assets/hero_img.jpg';

const Hero = () => {
  return (
    <div  className="flex flex-col items-center justify-center text-center  h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      
       <h2 className="sm:text-7xl text-5xl font-bold text-gray-800">Double++ Medical Care</h2>
      <p className="text-lg  mt-4">Caring for your health, one patient at a time.</p>
      <a href="#contact" className="mt-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg ">Book Appointment</a>
    </div>
  )
}

export default Hero
