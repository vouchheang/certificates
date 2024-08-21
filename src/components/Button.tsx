import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="w-[36rem] h-[52px] px-[30px] py-[14px] rounded-[6px] bg-[rgba(0,132,76,1)]">
      <p className="text-sm text-white font-semibold">{label}</p>
     
    </button>
  );
};

export default Button;
