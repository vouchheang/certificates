import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '',type = 'button'}) => {
  return (
    <button className={`w-[470px] h-[52px] max-sm:w-[390px] px-[30px] py-[14px] rounded-[6px] bg-[#A6A6A6] ${disabled ? 'bg-gray-400' : 'bg-green-600'} text-white`}
    type={type} disabled={disabled}  onClick={onClick}>
      <p className="text-sm text-white font-semibold">{label}</p>
    </button>
  );
};

export default Button;


