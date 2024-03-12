"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "./Gallery.module.css";
import { SelectedPage } from '../../types/index';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="gallery"
    className="md:text-center xl:text-left relative py-[55px] md:py-[64px] xl:py-[104px] gallery-bg">
      <div className="container">
      <h2 className="title z-10 relative md:leading-none leading-[56px] mb-[22px] xl:mb-[15px] md:mb-[65px] text-start md:text-center xl:text-start">
        Our <span className="font-medium uppercase">Gallery</span>
      </h2>
      </div>
      {windowWidth >= 768 ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: 0,
            depth: 100,
            slideShadows: false,
            scale: 0.5,
            stretch: 5,
          }}
          pagination={{
            clickable: false,
            el: ".pagination-el",
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          className="mySwiper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: windowWidth >= 1280 ? "428px" : "294px",
          }}
        >
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "428px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery1.jpg"
              alt="Mountain"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery2.jpg"
              alt="Lake in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery3.jpg"
              alt="Forest in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "428px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery1.jpg"
              alt="Mountain"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "428px" : "294px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery2.jpg"
              alt="Lake in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: windowWidth >= 1280 ? "606px" : "415px",
              height: "100%",
            }}
          >
            <Image
              src="/images/gallery3.jpg"
              alt="Forest in mountains"
              style={{ width: windowWidth >= 1280 ? "606px" : "415px" }}
              width={606}
              height={429}
              priority
            ></Image>
          </SwiperSlide>
        </Swiper>
      ) : (
        <ul className="mt-[24px] flex flex-col gap-[24px]">
          <li>
            <Image
              src="/images/gallery1.jpg"
              alt="Mountain"
              className="md:w-[462px] md:h-[370px] xl:w-[606px] xl:h-[428px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
          <li>
            <Image
              src="/images/gallery2.jpg"
              alt="Lake in mountains"
              className="md:w-[462px] md:h-[370px] xl:w-[606px] xl:h-[428px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
          <li>
            <Image
              src="/images/gallery3.jpg"
              alt="Forest in mountains"
              className="md:w-[462px] md:h-[370px] xl:w-[606px] xl:h-[428px]"
              width={607}
              height={429}
              priority
            ></Image>
          </li>
        </ul>
      )}
      {windowWidth >= 768 && (
        <div className="flex gap-[448px] w-full justify-center h-100% absolute bottom-8 z-10 xl:gap-[650px]">
          <button className="prevBtn text-[32px] leading-[56px] font-thin text-white uppercase tracking-tighter">
            Back
          </button>
          <button className="nextBtn text-[32px] leading-[56px] font-thin text-white uppercase tracking-normal">
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;