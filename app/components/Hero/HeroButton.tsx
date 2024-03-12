
import { Link } from 'react-scroll';
import styles from './HeroButton.module.css';

const HeroButton = () => {
  return (
    <div className={`md:col-start-2 md:row-start-5 ${styles.button}`}>
      <div
        className={`text-lg xl:text-[32px] font-bold h-[52px] xl:h-[70px] leading-[48px] px-[64px] opacity-100 transition-all ease-in-out hover:backdrop-opacity-20 duration-300 ${styles.buttonReverse}`}
      >
        <Link
          className="w-full"
          to="contacts"
          spy={true}
          smooth={true}
          duration={1500}
          href="/"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default HeroButton;