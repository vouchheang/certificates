import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  type = "button",
}) => {
  return (
    <button
      className={`bg-[#00844C] py-3 px-6 rounded max-sm:py-4 max-sm:py-2 ${className}`}
      type={type}
    >
      <p className="text-md max-sm:text-sm text-white font-semibold">{label}</p>
    </button>
  );
};

export default Button;
