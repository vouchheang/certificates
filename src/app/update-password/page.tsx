"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import eyes from "../../images/eyes.png";
import eye from "../../images/eye.png";

export default function UpdatePassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [eyeshowPassword, seteyeShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const clickeyesshowpassword = () => {
    seteyeShowPassword(!eyeshowPassword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const passwordData = {
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log("Password Data:", passwordData);
    if (password === confirmPassword) {
      toast.success("You have successfully updated your password.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      toast.error("Passwords do not match.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white w-full sm:w-[450px] md:w-[550px] lg:w-[674px] h-auto p-8 sm:p-[50px] lg:p-[100px] rounded-tl-[6px] shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-8">Update Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center mt-1 w-full pl-5 border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                onChange={handlePasswordChange}
                className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                placeholder="Enter your new password"
              />
              <Image
                src={showPassword ? eyes : eye}
                alt="eye image"
                className="mr-[1rem] cursor-pointer w-5"
                onClick={togglePassword}
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center mt-1 pl-5 border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
              <input
                type={eyeshowPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                required
                onChange={handleConfirmPasswordChange}
                className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                placeholder="Re-enter your new password"
              />
              <Image
                src={eyeshowPassword ? eyes : eye}
                alt="eye image"
                className="mr-[1rem] cursor-pointer w-5"
                onClick={clickeyesshowpassword}
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 sm:space-y-9">
            <button
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[474px] h-[52px] bg-[#00844C] text-white rounded-[6px] font-bold font-Quicksand mt-5"
              type="submit"
            >
              Update Password
            </button>
            <button
              type="reset"
              className="text-[#222222] font-bold hover:underline focus:outline-none"
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
