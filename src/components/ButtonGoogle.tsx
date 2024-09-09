import React from "react";
import Image from "next/image";
import google from "../images/google.png";

function ButtonGoogle() {
  return (
    <div className="text-center">
      <button className="flex items-center justify-center w-[470px] max-sm:w-[390px] h-[52px] max-lg:w-[700px] max-xl:w-[1000px]  px-[30px] py-[14px] gap-[10px] border bg-[#00844C] bg-opacity-10 rounded-[6px] shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-100">
        <Image src={google} alt="Google Logo" className="w-[24px] h-[24px]" />
        <span className="leading-4.5 size-3.5 text-gray-500 font-semibold text-sm leading-4 font-Quicksand w-[150px] h-[18px]">
          Login with Google
        </span>
      </button>
    </div>
  );
}
export default ButtonGoogle;
