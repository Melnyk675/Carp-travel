'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SlideList from './SlideList';
import SlideInfo from './SlideInfo';
import services from '../../data/services.json';

const Services = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = (slideIndex: number)  => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };

  return (
    <>
    <section
      className="bg-opacity-75 relative"
      data-section-id="services"
      id="services"
    >
      <SlideList
        activeSlide={activeSlide}
        onMenuButtonClick={handleMenuButtonClick}
      />
      <Swiper
        effect={'fade'}
        onSwiper={(s) => setSwiper(s)}
        modules={[EffectFade]}
        slidesPerView={1}
      >
        {services.map(item => {
          const { id, bg } = item;

          return (
            <div key={id} className="bg-black">
              <SwiperSlide
                key={id}
                className="bg-cover bg-center bg-opacity-75 py-[54px] md:py-[64px] xl:py-[104px]"
                style={{
                  background: `url(${bg}) center / cover no-repeat`,
                }}
              >
                <SlideInfo item={item} index={swiper ? swiper.activeIndex : 0} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  </>
  )
}

export default Services;