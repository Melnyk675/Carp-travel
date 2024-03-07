'use client';

import { Link } from 'react-scroll';
import menu from '../../data/menu.json';

const duration = 300;

const Navbar = () => {

  return (
    <ul className="flex md:gap-6 xl:gap-14 max-md:hidden">
      {menu.map(({ id, src, text }, index) => (
        <li key={id}>
          <Link
            className="text-[14px] text-white tracking-[1.4px] no-underline hover:cursor-pointer"
            to={src}
            spy={true}
            smooth={true}
            duration={duration * (index + 1)}
            href="/"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;