import React, { FC } from 'react';
import { TbDiamondsFilled } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/effect-fade';

const menuSlider: string[] = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

interface SlideListProps {
  activeSlide: number;
  onMenuButtonClick: (id: number) => void;
}

const SlideList: React.FC<SlideListProps> = ({ activeSlide, onMenuButtonClick }) => {
  
  return (
    <ul className="w-full flex flex-col list-none p-0 gap-4 z-[100] xl:gap-6 mb-[25px] xl:mb-0">
      {menuSlider.map((item, index) => (
        <li
          key={item + index}
          className={`flex items-center uppercase text-white font-extralight cursor-pointer ${
            index === activeSlide
              ? 'opacity-100 font-medium'
              : 'opacity-50 hover:pl-1 hover:opacity-100 transition-all duration-500 easy-in-out'}`}
        >
          <button type="button"
            className="flex items-center uppercase text-left"
            onClick={() => onMenuButtonClick(index)}>
          <TbDiamondsFilled
             size={10}
             className={`mr-2 ${index === activeSlide ? 'block opacity-100' : 'hidden'}`}
          />
            {item}
          </button>
        </li>
      ))}
    </ul>  
  );
};

export default SlideList;