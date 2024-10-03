import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactForm from './contactform';


const App = () => {
  return (
    <div className='bg-gradient-to-tl from-teal-300  to-lime-200'>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App
