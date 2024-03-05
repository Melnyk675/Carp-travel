import PropTypes from 'prop-types';

const Week = ({ week }: any) => {
  return (
    <div className="flex justify-end md:col-start-2">
      <div className="relative self-start right-[-9.48px] md:right-[-25.9px] lg:right-[-6.48px]">
        <p className="relative text-justify font-thin uppercase text-white leading-[normal] text-[36px] md:text-[66px] xl:text-[98px] tracking-[1.665px] md:tracking-[8.70px] lg:tracking-[2px]">
          <span className="font-medium tracking-normal">{week[0]}</span>
          {week[1]}
        </p>
        <p className="uppercase font-light text-white relative bottom-2 text-justify">
          {week[2]}
        </p>
      </div>
    </div>
  );
};

Week.propTypes = {
  week: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Week;