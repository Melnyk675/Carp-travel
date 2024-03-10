'use client';

import Image from 'next/image';
import { animateScroll } from "react-scroll"
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import desktopLeft from '/public/icons/LeftDesktop.svg';
import desktopRight from '/public/icons/RightDesktop.svg';
import tabletLeft from '/public/icons/LeftTablet.svg';
import tabletRight from '/public/icons/RightTablet.svg';
import mobileLeft from '/public/icons/LeftMobile.svg';
import mobileRight from '/public/icons/RightMobile.svg';

type ImageType = string | { default: string; url: string };

const JoinButton = () => {
  const [leftImage, setLeftImage] = useState<ImageType>(desktopLeft);
  const [rightImage, setRightImage] = useState<ImageType>(desktopRight);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });

  useEffect(() => {
    let imageSize;

    if (isMobile) {
      imageSize = 'mobile';
      setLeftImage(mobileLeft);
      setRightImage(mobileRight);

    } else if (isTablet) {
      imageSize = 'tablet';
      setLeftImage(tabletLeft);
      setRightImage(tabletRight);

    } else {
      imageSize = 'desktop';
      setLeftImage(desktopLeft);
      setRightImage(desktopRight);
    }
  }, [isMobile, isTablet]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLDivElement;

    if (section) {
      const sectionTop = section.offsetTop;
      animateScroll.scrollTo(sectionTop, {
        duration: 1500,
        smooth: "easeOutCubic",
      })
    }
  }

  const handleButtonClick = () => {
    scrollToSection('contacts');
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`w-full uppercase text-white text-lg xl:text-[32px] font-bold h-[52px] xl:h-[71px] leading-[48px] md:leading-none xl:leading-none px-[64px] bg-white/20 relative hover:bg-white/30 py-[18px] md:py-[14px] xl:py-[16px] transition duration-300 ease-in-out outline-none focus:outline-none`}
    >
      <Image
        src={(typeof leftImage === 'object' && (leftImage as { default: string; url: string }).url) || (leftImage as string)}
        alt={`left part`}
        width={100}
        height={100}
        className="absolute top-0 left-0 h-[52px] md:w-[34px] xl:w-[44px] w-[42px] md:h-[50px] xl:h-[70px]"
      />
      Join Now
      <Image
        src={(typeof rightImage === 'object' && (rightImage as { default: string; url: string }).url) || (rightImage as string)}
        alt={`right part`}
        width={100}
        height={100}
        className="absolute top-0 right-0 h-[52px] md:w-[34px] xl:w-[44px] w-[42px] md:h-[50px] xl:h-[70px]"
      />
    </button>
  );
};

export default JoinButton;