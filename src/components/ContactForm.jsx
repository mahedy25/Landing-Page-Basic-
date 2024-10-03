import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS


const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.message) {
      alert("Please fill in all fields.");
      return;
    };
    toast.success("Appointment Request Sent Successfully!");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <section id="contact" className="py-16 bg-blue-400 ">

        <div className="max-w-7xl mx-auto px-6 text-center">
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto text-black font-bold space-y-6">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    ></textarea>
    <button
      type="submit"
      className="bg-black shadow-md hover:shadow-lg hover:bg-gray-800 active:bg-gray-700 text-white py-3 px-6 rounded-md"
    >
      Submit
    </button>

    {/* Toastify Container */}
  <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
  </form>
        </div>
         
      </section>

     

  
  );
};

export default Contactform;

