import React from 'react';
import Navbar from '@/components/Header/Navbar';
import Hero from '@/components/Header/Hero';

const Header = () => {
    return (
      <header className='w-full h-full hero-bg'>
        <Navbar />
        <Hero />
      </header>
    )
  }
  
  export default Header;