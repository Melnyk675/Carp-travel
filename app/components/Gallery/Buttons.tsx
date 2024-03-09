'use client';

import { ButtonProps } from "../../types/index";

const Buttons = ({ className = '', onClick, label, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-anim block uppercase leading-[1.20] ${className}`}>
      {label}
    </button>
  );
};

export default Buttons;