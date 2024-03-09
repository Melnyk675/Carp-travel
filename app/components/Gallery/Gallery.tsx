'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { SelectedPage } from '../../types/index';
import Slider from './Slider';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Gallery: React.FC<Props> = () => {

  return (
    <section id="gallery"
      className='w-full relative z-10 h-full bg-left gallery-bg py-[55px] md:py-[64px] xl:py-[104px]'>
      <div className="container">
        <h2 className='text-7xl font-thin uppercase z-10 text-white relative md:leading-none leading-[56px] mb-[22px] xl:mb-[15px] md:mb-[65px] text-start md:text-center xl:text-start'>Our <span className='font-medium'>Gallery</span></h2>
      </div>
      <Slider />
    </section>
  )
}

export default Gallery;