import React from "react";
import Image from 'next/image';
import google1 from "../image/google1.png";

function Google(){
    return(
        <div className="text-center">
      <button className="flex items-center justify-center w-[470px] h-[52px] px-[30px] py-[14px] gap-[10px] border bg-[#00844C] bg-opacity-10 rounded-[6px] shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-100">
        <Image
          src={google1}
          alt="Google Logo"
          className="w-[24px] h-[24px]"
        />
        <span className="text-gray-500 font-semibold text-sm leading-4 font-quicksand">Login with Google</span>
      </button>
    </div>
    );
}
export default Google;