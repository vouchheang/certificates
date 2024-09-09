import React from "react";
import Image from "next/image";
import google from "../images/google.png";

function ButtonLogin() {
  return (
    <div className="text-center">
      <button className="flex items-center justify-center w-full sm:w-[325px] xl:w-[476px] h-[52px] gap-2 border bg-[#00844C] bg-opacity-10 rounded-md shadow-sm focus:outline-none hover:bg-[#00844C] hover:bg-opacity-20">
        <Image src={google} alt="Google Logo" className="w-[24px] h-[24px]" />
        <span className="text-gray-700 font-semibold text-sm sm:text-base">
          Login with Google
        </span>
      </button>
    </div>
  );
}

export default ButtonLogin;
