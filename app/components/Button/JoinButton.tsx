'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import desktopLeft from '/public/icons/buttonHeroLeftDesktop.svg';
import desktopRight from '/public/icons/buttonHeroRightDesktop.svg';
import tabletLeft from '/public/icons/buttonHeroLeftTablet.svg';
import tabletRight from '/public/icons/buttonHeroRightTablet.svg';
import mobileLeft from '/public/icons/buttonHeroLeftMobile.svg';
import mobileRight from '/public/icons/buttonHeroRightMobile.svg';

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

  return (
    <Link
      id="buttonJoinUs"
      href="/"
      className={`uppercase text-white text-lg xl:text-[32px] font-bold h-[52px] xl:h-[70px] leading-[48px] md:leading-none xl:leading-none px-[64px] flexCenter bg-light1 relative hover:bg-light2 py-[18px] md:py-[14px] xl:py-[16px] transition duration-300 ease-in-out`}
    >
      <Image
        src={(typeof leftImage === 'object' && (leftImage as { default: string; url: string }).url) || (leftImage as string)}
        alt={`left part of border`}
        width={100}
        height={100}
        className="absolute top-0 left-0 h-[52px] md:w-[34px] xl:w-[44px] w-[42px] md:h-[50px] xl:h-[70px]"
      />
      Join Now
      <Image
        src={(typeof rightImage === 'object' && (rightImage as { default: string; url: string }).url) || (rightImage as string)}
        alt={`right part of border`}
        width={100}
        height={100}
        className="absolute top-0 right-0 h-[52px] md:w-[34px] xl:w-[44px] w-[42px] md:h-[50px] xl:h-[70px]"
      />
    </Link>
  );
};

export default JoinButton;