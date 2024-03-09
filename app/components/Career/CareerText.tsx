
import React from 'react';
import contentData from '../../data/career.json';

const CareerText = () => {
  return (
    <div className='flex flex-col md:mr-6 xl:mr-6'>
      <h2 className='text-white hidden font-extralight xl:flex xl:text-4xl xl:leading-10 uppercase xl:ml-[143px] xl:mb-[44px]'>Why Us ?</h2>
      <ul className='flex flex-col gap-6 gap-y-4 mr-[90px] text-right md:w-[230px] md:float-left md:gap-y-8 md:mr-0 md:mb-0 xl:w-full'>
        {contentData.map((item, index) => (
          <li key={index} className='xl:grid xl:grid-cols-2 xl:gap-y-6 xl:gap-x-6'>
            <h3 className='text-white text-end md:mb-2 xl:mb-0 gap-2'>{item.title}</h3>
            <p className='text-white text-end xl:text-start'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CareerText;