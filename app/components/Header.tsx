'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <div>
        <Link href="./">
          <Image 
           src={logo}
           height={22}
           width={61}
           alt="Logo CarpTravel"
           priority={true}
          />
          <p className="font-['Karantina'] text-[14px] font-normal leading-[1.2]">C a r p T r a v e l</p>
        </Link>
   
        <button
          type="button"
          className="md:hidden uppercase text-[14px] font-normal tracking-[1.4px] hover:font-bold focus:font-bold"

        >
          Menu
        </button>


     

    </div>
    
  )
}

export default Header;