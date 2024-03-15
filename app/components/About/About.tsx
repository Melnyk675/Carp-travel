'use client';

import React from 'react';
import { SelectedPage } from '../../types/index';

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {

  return (
    <section
      id="about"
      className='w-full h-full about-bg md:bg-left py-[55px] md:py-[64px] xl:py-[104px]'
      >
      <div className='container'>
          <div className='flex flex-col max-w-full md:items-start md:flex-row mb-10 xl:mb-[72px] relative'>
            <div className='flex flex-col h-full justify-between'>
              <h2 className='title md:leading-none leading-[56px] mb-2 md:mb-auto md:mr-[76px] xl:mr-6'>Who <span className='text-white font-medium'>We Are</span></h2>
              <div className='hidden xl:hidden md:flex w-full md:w-[180px] xl:w-[296px] justify-end xl:justify-start'>
                <div className='flex flex-col w-[218px] absolute bottom-0 left-0'>
                  <p className='text-white text-base font-normal leading-5 uppercase text-start'>From vacationers</p>
                  <p className='text-white text-base font-normal leading-5 uppercase text-end'>to active travelers</p>
                  <p className='text-white text-base font-extralight leading-6 text-start tracking-[-0.14px] xl:tracking-[2.2px]'>we have a tour for everyone.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between max-w-[180px] md:max-w-[220px] xl:max-w-[292px] gap-6'>
              <p className='text'><b>a team of enthusiasts</b> who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>
              <p className='text'><b>We believe</b> that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
            </div>
          </div>

          <div className='flex flex-col-reverse xl:flex-row md:flex-row xl:justify-between justify-start md:justify-end'>
            <p className='text md:max-w-[462px] xl:max-w-[605px]'><b>We use methods</b> that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. </p>
            <div className='md:hidden xl:flex flex w-full md:w-[180px] xl:w-[296px] justify-end xl:justify-start mb-10 xl:mb-0'>
              <div className='flex flex-col  w-[180px] lg:w-[296px]'>
                <p className='text-white text-sm xl:text-lg font-normal leading-5 uppercase text-start'>From vacationers</p>
                <p className='text-white text-sm xl:text-lg font-normal leading-5 uppercase text-end'>to active travelers</p>
                <p className='text-white text-sm xl:text-lg font-extralight leading-6 text-start tracking-[-0.14px] xl:tracking-[2.1px]'>we have a tour for everyone.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About;