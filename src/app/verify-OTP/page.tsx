"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyOTP() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const router = useRouter();

  const handleChange = (
    element: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isNaN(Number(element.target.value))) return;
    setOtp(otp.map((d, idx) => (idx === index ? element.target.value : d)));
    if (
      element.target.nextSibling &&
      (element.target.nextSibling as HTMLInputElement).focus
    ) {
      (element.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const isOtpValid = otp.every(
    (digit) => digit !== "" && !isNaN(Number(digit))
  );

  const handleClose = () => {
    setOtp(new Array(6).fill(""));
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    console.log("OTP resent");
    alert("OTP has been resent!");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const passwordData = {
      otp: otp,
    };
    console.log(passwordData);
    if (isOtpValid) {
      router.push("/update-password");
    } else {
      toast.error(
        "You have inputted a wrong OTP. Please recheck the code sent to your email."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8">
      <div className="bg-white p-6 sm:p-8 shadow-lg lg:w-[674px] max-w-[650px] lg:h-[601px] max-md:w-[720px]">
        <h1 className="text-2xl sm:text-3xl font-Quicksand text-center mt-4 sm:mt-6 leading-tight sm:leading-[30px]">
          Verify OTP
        </h1>
        <p className="text-center text-[#717171] mt-4 sm:mt-7">
          Input the
          <span className="text-[#00844C] font-semibold"> 6 digits OTP </span>
          that was sent to
          <span className="text-[#00844C] font-semibold">{" "} test@gmail.com</span>
        </p>

        <div className="flex justify-between mt-8 sm:mt-[3rem] space-x-2 w-full max-w-[500px] h-[50px] mx-auto">
          {otp.map((data, index) => (
            <input
              className="w-12 h-12 sm:h-15 text-center border border-gray-300 rounded-lg"
              type="text"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        <div className="text-center text-gray-600 mt-6 sm:mt-[3rem]">
          0s <br />
          Didn't receive the code?{" "}
          <a
            href="#"
            onClick={handleResend}
            className="text-[#00844C] font-Quicksand"
          >
            Resend
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 sm:space-y-5 mt-6 sm:mt-[3rem]">
          <button
            className={`w-full max-w-[500px] max-sm:p-2 h-12 sm:h-[52px] font-bold py-4 rounded-[6px] ${
              isOtpValid
                ? "bg-[#00844C] text-[#FFFFFF]"
                : "bg-gray-400 text-gray-200"
            }`}
            disabled={!isOtpValid}
            onClick={handleSubmit}
          >
            Verify
          </button>
          <a href="/forgot-password"><button
            className="text-[#222222] font-Quicksand font-bold"
            onClick={handleClose}
          >
            Close
          </button></a> 
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
