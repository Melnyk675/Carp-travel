'use client';

import { ButtonProps } from "@/types/types";

const Button = ({ className = '', onClick, label, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`transition-colors hover:text-white/60 focus:text-white/60 block uppercase leading-[1.21] ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;