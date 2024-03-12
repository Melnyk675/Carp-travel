'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SelectedPage } from "../../types/index";
import useMediaQuery from "./MediaQuery";
import { useToggle } from "./Toggle";
import Links from "./Links";
import logo from '/public/images/logo.png';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  const { isOpen, toggle, close } = useToggle(false);

  const handleKeyPress = (event: KeyboardEvent) => {

    if (event.key === "Escape" && isOpen) {
      close();
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

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

  return (
    <nav className='w-full pt-9 pb-9 md:pt-[25px] md:pb-[66px] xl:pt-6 xl:pb-[50px] absolute'>
      <div className='container'>
        <div className='flex items-center justify-between w-full gap-16'>
        <Link href='/' className='flex flex-col text-white text-sm font-normal tracking-wide font-[Karantina] cursor-pointer'>
          <Image 
             src={logo}
             height={22}
             width={61}
             alt="Logo CarpTravel"
             priority={true}
            />
            C a r p T r a v e l
        </Link>

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-between">
              <div className='flex items-center justify-center gap-6 xl:gap-[56px] text-white tracking-normal'>
                <Links
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Links
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Links
                  page="Career"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Links
                  page="Gallery"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Links
                  page="Contacts"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
              </div>
            </div>
          ) : (
            <button
              aria-label="toggle menu button open"
              className="text-white font-normal text-sm cursor-pointer block uppercase"
              onClick={toggle}>
              Menu
            </button>
          )}
        </div>
      </div>

      {!isAboveMediumScreens && isOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full backdrop-blur-xl">
          <div className="flex justify-end pt-[42px] pr-[20px]">
            <button
              aria-label="toggle menu button close"
              className="text-white cursor-pointer block uppercase"
              onClick={toggle}>
              Close
            </button>
          </div>

          <div className="mx-auto flex flex-col text-white items-center justify-center gap-12 text-lg h-full">
            <Links
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Links
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Links
              page="Career"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Links
              page="Gallery"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Links
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
