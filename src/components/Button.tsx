import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, className ='',type = 'button'}) => {
  return (
    <button className={className} type={type}>
      <p className="text-sm text-white font-semibold">{label}</p>
    </button>
  );
};

export default Button;


