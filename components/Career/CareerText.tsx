import React from 'react';
import contentData from '../../data/career.json';
import data from '@/data/common.json';

const CareerText = () => {
  return (
    <div className='flex flex-col md:mr-6 xl:mr-6'>
      <h2 className='text-white hidden font-extralight xl:flex xl:text-4xl xl:leading-10 uppercase xl:ml-[142px] xl:mb-[44px]'>{data.title}</h2>
      <ul className='flex flex-col gap-6 gap-y-4 mr-[90px] text-right md:w-[230px] md:gap-y-8 md:float-left xl:w-full md:mr-0 md:mb-0'>
        {contentData.map((item, index) => (
          <li key={index} className='xl:grid xl:grid-cols-2 xl:gap-y-6 xl:gap-x-6'>
            <h2 className='text-white text-sm md:text-base xl:text-lg leading-5 xl:leading-6 font-medium text-end md:mb-2 xl:mb-0 gap-2'>{item.title}</h2>
            <p className='text-white text-xs font-extralight leading-5 xl:leading-6 text-end xl:text-start'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CareerText;