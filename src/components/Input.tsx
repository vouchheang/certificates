import React from "react";

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    icon: string;
}

const Input: React.FC<InputProps> = ({label, type, placeholder, icon}) =>{
    return <>
        <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium text-[14px]">{label} <span className="text-gray-800">{icon}</span></label>
              <input type={type} className="min-h-[50px] w-[470px] pl-3  border-2  rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300 " placeholder={placeholder}/>
        </div>
    </>
}
export default Input;