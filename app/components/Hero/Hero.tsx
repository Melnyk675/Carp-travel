
import JoinButton from "../Button/JoinButton";

const Hero = () => {

  return (
    <section className="hero-bg">
      <div className="xl:container">
       <div className='md:flex-row flex flex-col justify-between pb-[55px] pt-[104px] md:pb-[64px] md:pt-[122px] xl:pb-[104px] xl:pt-[130px]'>
        <div className='md:hidden flex flex-col text-end pb-6'>
          <p className='text-[36px] font-thin text-white uppercase tracking-[1.665px]'><span className='text-[36px] font-medium'>7</span>days</p>
          <p className='text-xs font-light text-white tracking-[9px] mt-[-15px] uppercase'>journey</p>
        </div>

        <div className='flex flex-col justify-between max-w-full md:max-w-[426px] xl:max-w-[646px]'>
          <h1 className='text-7xl font-thin text-white uppercase pb-6 md:pb-[148px]'><span className='font-medium'>Uncover</span> Carpathian’s Secrets</h1>
          <p className='text-white text-sm xl:text-base font-extralight leading-4 xl:leading-6 tracking-[1.26px] xl:tracking-[1.44px] max-w-full md:max-w-[262px] xl:max-w-full pb-6 md:p-0'>Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        </div>

        <div className='max-w-full md:max-w-[230px] xl:max-w-[305px]'>
          <div className='hidden md:flex md:flex-col'>
            <p className='text-[66px] text-white xl:text-[98px] font-thin text-mainWhite uppercase tracking-[3.9px] xl:tracking-[0.9px]'><span className='text-[66px] xl:text-[98px] font-medium'>7</span>days</p>
            <p className='text-base font-300 text-white tracking-[21.9px] xl:tracking-[32.9px] mt-[-25px] uppercase'>journey</p>
          </div>

          <div>
            <p className='text-white mb-6 md:mb-7'>We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
            </p>
            <JoinButton />
            
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;