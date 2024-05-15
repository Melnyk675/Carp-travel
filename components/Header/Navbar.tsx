'use client';

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import data from '@/data/common.json';
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";


const Navbar = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const links = data.links;
 

  return (
    <nav className='w-full pt-9 pb-9 md:pt-[25px] md:pb-[66px] xl:pt-6 xl:pb-[50px] absolute'>
      <div className='container'>
       <div className='flex items-center justify-between w-full gap-16'>
          <Logo />
          {isAboveMediumScreens ? (
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center gap-6 md:gap-[56px] text-white font-normal text-sm tracking-normal'>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    smooth={true}
                    href="#"
                    ignoreCancelEvents={true}
                    className="navLink footer-link"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
              <button
              type="button"
              aria-label="toggle menu button open"
              className="text-white font-normal text-sm cursor-pointer block uppercase"
              onClick={handleOpen}
            >
              {data.textMenu}
            </button>
          )}
        </div>
        </div>
        {!isAboveMediumScreens && isOpen && (
        <MobileMenu isOpen={isOpen} onClose={handleClose} />
      )}
    </nav>
  );
};

export default Navbar;
