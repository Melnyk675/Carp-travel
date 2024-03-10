'use client';

import React, { useState, useEffect } from 'react';
import { SelectedPage } from '../../types/index';
import CareerText from './CareerText';
import CareerForm from './CareerForm';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Career: React.FC<Props> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth >= 768) {
      setIsMobile(false);
    }

    if (windowWidth && windowWidth < 768) {
      setIsMobile(true);
    }
  }, [windowWidth]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
     <section 
      id="career" 
      className="career-bg w-full md:py-[64px] xl:py-[104px] py-[55px]">
       <div className='container'>
         <div className='flex flex-col'>
           <div className='flex flex-col items-end md:flex-row md:justify-between mb-8 md:mb-3 xl:mb-6'>
             <h2 className='text-7xl font-thin uppercase w-full md:w-auto text-white md:leading-none leading-[56px] mb-6 md:mb-0 md:items-center self-center'>Choose  <span className='font-medium'>Us</span></h2>
              <p className='w-[176px] text-start text-white font-extralight text-sm md:text-[12px] xl:text-lg md:w-[220px] md:text-justify ml-auto md:ml-0 xl:w-[292px]'>
                Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.
              </p>
            </div>
           <h3 className='flex text-white text-3xl font-extralight uppercase leading-none ml-[100px] md:ml-[80px] mb-9 md:mb-14 xl:hidden'>Why Us ?</h3>
          </div>

          <div className='flex flex-col md:flex-row'>
           <CareerText />

            {!isMobile && (
            <CareerForm />
             
         )}   
          </div>
        </div>
      </section>

      {isMobile && (
        <section
          id="career"
          className="career bg-top relative py-[55px] "
        >
          <div className="container">
            <CareerForm />
       </div>
      </section>
      )}
    </>
  )
}

export default Career;