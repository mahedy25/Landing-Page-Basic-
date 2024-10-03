import React from 'react';

const Header = () => {
  return (
      <div className='w-full flex items-center justify-between  py-5 font-medium text-black bg-teal-300 '>
        <h1 className='flex text-sm sm:text-4xl px-3 font-bold cursor-pointer '>Your Health, Our Priority</h1>

      <ul className='w-full sm:w-fit justify-center items-center text-center  text-xs sm:text-lg flex gap-5   sm:px-4'>

    
       
      <a href="#services" className='flex flex-col items-center gap-1 cursor-pointer '>Services</a>

      <a href="#about" className='flex flex-col items-center gap-1 cursor-pointer '>About Us</a>

      <a href="#contact" className='flex flex-col items-center gap-1 cursor-pointer '>Contact</a>

    
      
  
     

     </ul>
  
      </div>
  );
};

export default Header;


