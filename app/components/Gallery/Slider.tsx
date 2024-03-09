'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import Buttons from './Buttons';
import data from '../../data/gallery.json';

const Slider = () => {

  return (
    <div className="relative mx-auto px-5 md:w-[768px] md:px-8 xl:w-[1280px] xl:px-0 smOnly:max-w-[480px]">
      <Swiper
        className="w-full items-center h-[608px] md:h-[295px] xl:h-[430px]"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'vertical'}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        speed={800}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {data.slides.map(({ img, alt }, index) => (
          <SwiperSlide key={index} className="lg:opacity-0">
            {({ isActive }) => (
              <div
                className={`image-wrapper relative h-[186px] transition-all duration-700 ease-[cubic-bezier(.57,.21,.69,1.25)]
                ${isActive
                    ? 'before:hidden md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px] opacity-1'
                    : ' md:h-[86px] md:w-[120px] xl:h-[225px] xl:w-[312px] mdOnly:before:hidden opacity-0.5'
                  } `}>
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 280px, (max-width: 1278px) 462px, 606px"
                  quality={90}
                  priority
                  className="object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 z-10 md:left-[75px] md:flex md:gap-[458px] xl:left-[235px] xl:gap-[650px] mdOnly:hidden">
        <Buttons aria-label="Button previous"
          className="text-white button-prev text-[32px] font-thin" label="back" type="button" />

        <Buttons aria-label="Button next"
          className="text-white button-next text-[32px] font-thin" label="next" type="button" />
      </div>
    </div>
  );
};

export default Slider;