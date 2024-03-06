
import React from 'react';
import text from '../../data/hero.json';
import Week from './Week';

const Hero = () => {
  const { week, titleAccent, title, cities, description } = text;

  return (
    <section className="hero-bg pt-[106px] md:pt-[124px] xl:pt-[130px]">
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-[426px_230px] md:gap-y-0 md:grid-rows-[88px_56px_120px_28px_64px] xl:grid-cols-[646px_294px] xl:grid-rows-[123px_181px_120px_28px_64px] justify-between">
      <Week week={week} />
      <h1 className="uppercase font-thin text-white md:col-start-1 md:row-start-1 md:row-end-4">
          <span className="font-medium">{titleAccent}</span>
          {title}
        </h1>
        <p className="md:self-end md:tracking-[1.26px] font-extralight text-white md:col-start-1 md:row-start-5 w-[70%] md:w-2/3 xl:w-full">
          {cities}
        </p>
        <p className="font-extralight text-white text-justify md:col-start-2 md:row-start-3">
          {description}
        </p>
      </div>
    </section>
  )
}

export default Hero;