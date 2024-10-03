import React from 'react';
import ContactForm from './contactform';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-400 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold">Book an Appointment !</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
