
import { ButtonProps } from "../../types/index";

const Buttons = ({ className = '', onClick, label, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`transition-colors hover:text-white/60 block uppercase leading-[1.20] ${className}`}>
      {label}
    </button>
  );
};

export default Buttons;