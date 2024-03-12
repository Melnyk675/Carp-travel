'use client';

import { useState, useEffect } from 'react';
import { SelectedPage } from './types/index';
import About from './components/About/About';
import Career from './components/Career/Career';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

const HomePage = () => {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.About
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.About);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


 return(
  <>
    <Navbar isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}/>
    <Hero />
    <About setSelectedPage={setSelectedPage} />
    <Services setSelectedPage={setSelectedPage} />
    <Career setSelectedPage={setSelectedPage} />
    <Gallery  />
    <Contacts setSelectedPage={setSelectedPage} />
    </>
  )
 }

 export default HomePage;
