'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import MenuMob from './MenuMob';
import logo from '/public/images/logo.png';

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <header className="bg-transparent absolute w-full py-8 md:py-6 ">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image 
           src={logo}
           height={22}
           width={61}
           alt="Logo CarpTravel"
           priority={true}
          />
          <p className="font-['Karantina'] text-white text-[14px] font-normal leading-[1.2]">C a r p T r a v e l</p>
        </Link>
   
        <button
          type="button"
          className="block md:hidden uppercase text-white text-[14px] font-normal tracking-[1.4px] hover:font-bold focus:font-bold"
          onClick={openMobileMenu}
      >
          Menu
        </button>
        <Navbar />
     </div>
    </header>

    <MenuMob isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}

export default Header;