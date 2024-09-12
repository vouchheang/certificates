import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface RadioButtonProps {
  value: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  name,
  register,
  errors,
}) => {
  return (
    <div className="flex items-center gap-2">
  <label className="flex items-center gap-2 text-base max-sm:text-sm font-medium text-[14px]">
    <input
      type="radio"
      value={value}
      {...register(name, { required: true })}
      className="min-h-8 border-2 rounded-lg"
    />
    {label}
  </label>
 </div>

  );
};

export default RadioButton;
