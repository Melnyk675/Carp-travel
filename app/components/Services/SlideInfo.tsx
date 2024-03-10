'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { ServicesSlideInfoProps } from '../../types/index';
import SlideList from './SlideList';

const SlideInfo: FC<ServicesSlideInfoProps> = ({ item, index, activeSlide = 0, handleMenuButtonClick = () => { }}) => {

  const { id, img, quote, title, description } = item;
  
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  const calculatePaddingTop = (index: number | undefined) => {

    if (index !== undefined) {
      return windowWidth >= 1280 ? (index <= 4 ? `${Number(index) * 48}px` : `${Number(index) * 40 + 26}px`) : '0px';
    }
    return '0px';
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className='container'>
      <div className='w-full flex flex-col md:flex-row mb-4 md:mb-10 xl:mb-5'>
        <h2 className='text-7xl font-thin uppercase text-white md:leading-none xl:leading-none leading-[56px] self-center w-full md:w-[482px] xl:w-[626px]'>We <span className='font-medium'>Offer</span></h2>
         <p className="my-0 h-full number text-end md:text-start leading-none">
          {id}
          <span className="opacity-20">/05</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row'>
        <Image
          alt={title}
          src={img}
          width={280}
          height={214}
          className="mb-3 row-start-3 w-full md:w-[462px] md:mb-0 md:h-[370px] xl:w-[606px] xl:h-[428px]"
        />

        <div className={`flex md:hidden xl:pt-0 text-white text-xs font-extralight leading-6 mb-6 text-end`}
          style={{
            paddingTop: calculatePaddingTop(index),
          }}>
          <p className='text-end text-white'>{quote}</p>
        </div>

        <div className='w-full flex flex-col xl:flex-row md:ml-5'>
          <SlideList
            activeSlide={activeSlide}
            onMenuButtonClick={handleMenuButtonClick}
          />
          <div className='flex flex-col w-full md:w-[220px] xl:w-[292px] h-full justify-between'>
            <div
              className={`hidden md:flex xl:pt-0 text-white text-xs font-extralight leading-6`}
              style={{
                paddingTop: calculatePaddingTop(index),
              }}>
              <p>{quote}</p>
            </div>
            <p className="text-white row-start-6 font-extralight text-sm md:text-[12px] xl:text-lg md:text-justify mt-auto md:self-end leading-5 xl:leading-6 w-full md:w-[220px] xl:w-[292px] ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideInfo;