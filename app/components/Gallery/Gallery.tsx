'use client';

import Image from 'next/image';
import { Navigation, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import gallery from '../../data/gallery.json';

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

const Gallery = () => {

  return (
    <section
      id="gallery"
      className="text-white w-full gallery-bg px-5 pt-[56px] pb-[56px] md:px-8 md:pt-[64px] md:pb-[64px] xl:p-20"
    >
      <div className="max-w-[1440px] xl:mx-auto">
        <h2 className="mb-6 md:mb-[72px] text-center xl:text-left xl:m-6">
          <span className="text-[40px] md:text-[67px] xl:text-[98px] font-thin uppercase tracking-[-1.6px] md:tracking-[-2.68px] md:leading-[1.2] xl:tracking-[-3.92px] leading-[56px]">
            Our{' '}
          </span>
          <span className="text-[40px] md:text-[66px] xl:text-[98px] font-medium uppercase tracking-[-1.6px] md:tracking-[-2.68px] md:leading-[1.2] xl:tracking-[-3.92px] leading-[56px]">
            gallery
          </span>
        </h2>
        <ul className="flex flex-col gap-6 md:hidden">
          {gallery.map((image, i) => (
            <li key={i}>
              <Image
                className="w-[280px] h-[184px] mx-auto"
                src={image.src}
                alt={image.alt}
                width={280}
                height={184}
              />
            </li>
          ))}
        </ul>
        
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            initialSlide={initialSlideIndex}
            autoplay={true}
            loop={true}
            centeredSlides={true}
            effect={'coverflow'}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              scale: 0.5,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-full mx-[-24px] max-md:hidden"
          >
            {swiperGallery.map((image, i) => (
              <SwiperSlide
                key={i}
                className="md:w-[414px] md:h-[294px] xl:w-[606px] xl:h-[428px] mx-auto"
              >
                <Image 
                src={image.src} 
                alt={image.alt} 
                width={606} 
                height={294} 
                />
              </SwiperSlide>
            ))}
            <button
              type="button"
              
              className="text-[32px] font-thin hover:font-medium focus:font-medium uppercase leading-[1.2]"
            >
              <p className="">Back</p>
            </button>
            <button
              type="button"
              className="absolute right-0 bottom-0 text-[32px] font-thin hover:font-medium focus:font-medium uppercase leading-[1.2]"
              
            >
              <p className="">Next</p>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Gallery;