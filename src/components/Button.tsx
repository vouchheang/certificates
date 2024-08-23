import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="w-[470px] h-[52px] px-[30px] py-[14px] rounded-[6px] bg-[#A6A6A6]">
      <p className="text-sm text-white font-semibold">{label}</p>
     
    </button>
  );
};

export default Button;
