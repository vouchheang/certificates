"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [emailValue, setEmailValue] = useState<boolean | null>(null);
  const router = useRouter();
  

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValue(handleEmail(emailValue));
    localStorage.setItem("email", emailValue);
  };

  const handleEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const Submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const passwordData = {
      email: email,
    };
    console.log("Password-Data", passwordData);
    if (emailValue) {
      router.push("/verify-OTP");
    }
   else  {
      console.log("Invalid email address");
    }
  };

  const handleClose = (): void => {
    router.push("/login"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white w-full sm:w-[450px] md:w-[550px] lg:w-[674px] h-auto p-8 sm:p-[50px] lg:p-[100px] gap-[30px] rounded-tl-[6px] shadow-lg">
        <h2 className="text-center text-2xl leading-[30px] font-Quicksand font-bold mb-8">
          Forgot Password
        </h2>
        <form onSubmit={Submit} className="space-y-[3.5rem]">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center mt-1 w-full sm:w-[300px] md:w-[400px] lg:w-[474px] pl-5 border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleEmailChange}
                className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                placeholder="example@gmail.com"
              />
              {emailValue !== null && (
                <FontAwesomeIcon
                  icon={emailValue ? faCheckCircle : faXmarkCircle}
                  className={`mr-[1rem] ${
                    emailValue ? "text-green-500" : "text-red-500"
                  }`}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[91px]">
            <button
              type="submit"
              className={`w-full h-[52px] text-white font-Quicksand font-bold rounded-[6px] flex justify-center items-center ${
                emailValue ? "bg-green-600" : "bg-gray-400"
              }`}
              disabled={!emailValue}
            >
              Send OTP
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 text-sm text-black font-semibold hover:underline focus:outline-none"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
