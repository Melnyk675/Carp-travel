
import data from "@/data/about.json";

const About = () => {

  return (
    <section
      id="about"
      className='w-full h-full about-bg md:bg-left py-[55px] md:py-[64px] xl:py-[104px]'
      >
      <div className='container'>
          <div className='flex flex-col max-w-full md:items-start md:flex-row mb-10 xl:mb-[72px] relative'>
            <div className='flex flex-col h-full justify-between'>
              <h2 className='title md:leading-none leading-[56px] mb-2 md:mb-auto md:mr-[76px] xl:mr-6'>{data.title1} <span className='text-white font-medium'>{data.title2}</span></h2>
              <div className='hidden xl:hidden md:flex w-full md:w-[180px] xl:w-[296px] justify-end xl:justify-start'>
                <div className='flex flex-col w-[218px] absolute bottom-0 left-0'>
                  <p className='text-white text-base font-normal leading-5 uppercase text-start'>{data.text1}</p>
                  <p className='text-white text-base font-normal leading-5 uppercase text-end'>{data.text2}</p>
                  <p className='text-white text-base font-extralight leading-6 text-start tracking-[-0.14px] xl:tracking-[2.2px]'>{data.text3}</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between max-w-[180px] md:max-w-[220px] xl:max-w-[292px] gap-6'>
              <p className='text'><b>{data.descBold1}</b>{data.desc1}</p>
              <p className='text'><b>{data.descBold2}</b>{data.desc2}</p>
            </div>
          </div>

          <div className='flex flex-col-reverse xl:flex-row md:flex-row xl:justify-between justify-start md:justify-end'>
            <p className='text md:max-w-[462px] xl:max-w-[605px]'><b>{data.descBold3}</b>{data.desc3}</p>
            <div className='md:hidden xl:flex flex w-full md:w-[180px] xl:w-[296px] justify-end xl:justify-start mb-10 xl:mb-0'>
              <div className='flex flex-col w-[180px] lg:w-[296px]'>
                <p className='text-white text-sm xl:text-lg font-normal leading-5 uppercase text-start'>{data.text1}</p>
                <p className='text-white text-sm xl:text-lg font-normal leading-5 uppercase text-end'>{data.text2}</p>
                <p className='text-white text-sm xl:text-lg font-extralight leading-6 text-start tracking-[-0.14px] xl:tracking-[2.1px]'>{data.text3}</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About;