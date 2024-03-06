
import Image from 'next/image';
import Title from '../Title';

interface SlideInfoProps {
    item: {
      id: string;
      img: string;
      quote: string;
      title: string;
      description: string;
    };
    index: number;
  }

const SlideInfo = ({ item, index }: SlideInfoProps) => {
  const { id, img, quote, title, description } = item;

  return (
    <div className="container grid grid-rows-[68px_52px_214px_36px_166px_142px] gap-y-3 md:grid-cols-[463px_221px] md:grid-rows-[80px_167px_24px_120px] md:gap-x-5 md:gap-y-8 xl:grid-cols-[607px_292px_293px] xl:grid-rows-[137px_261px_168px] xl:gap-y-0">
      <Title
        title="We"
        accent="Offer"
        className="row-start-1 text-white md:col-start-1 md:row-start-1"
      />
      <p className="row-start-2 my-0 h-full text-white md:row-start-1 md:col-start-2 text-[42px] font-thin text-right md:text-left">
        {id}
        <span className="opacity-20">/05</span>
      </p>
      <Image
        alt={title}
        src={img}
        width={280}
        height={214}
        className="mb-3 row-start-3 md:row-start-2 md:row-end-[span_4] w-full md:mb-0 md:h-[370px] xl:row-end-[span_2] xl:h-[429px]"
      />
      <div
        className={`row-start-4 font-extralight text-white text-right mb-6 md:row-start-3 md:col-start-2 md:text-left xl:row-start-2 xl:col-start-3 mt-[-5px] quote`}
        style={{
          paddingTop: `${
            index <= 2 ? `${Number(index) * 40}px` : `${Number(index) * 40 + 24}px`
          }`,
        }}
      >
        <p>{quote}</p>
      </div>
      <p className="row-start-6 font-extralight text-white md:text-[12px] md:text-justify mt-auto md:row-start-4 md:col-start-2 md:self-end xl:row-start-3 xl:col-start-3">
        {description}
      </p>
    </div>
  );
};

export default SlideInfo;