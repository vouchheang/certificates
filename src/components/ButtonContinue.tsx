import React from "react";
import Image from "next/image";
import google from "../images/google.png";

function ButtonContinue() {
  return (
    <div className="text-center flex items-center justify-center">
      <button className="flex items-center justify-center w-full sm:w-[325px]  h-[52px] gap-2 border bg-[#00844C] bg-opacity-10 rounded-md shadow-sm focus:outline-none">
        <Image src={google} alt="Google Logo" className="w-[24px] h-[24px]" />
        <span className="text-gray-500 font-semibold text-sm">
          Continue with Google
        </span>
      </button>
    </div>
  );
}
export default ButtonContinue;