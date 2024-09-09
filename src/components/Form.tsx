import React from "react";
import Image from "next/image";
import google from "../images/google.png";

function Form() {
  return (
    <div className="w-full lg:w-1/3 bg-white p-8 flex items-center justify-center shadow-lg">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 flex justify-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full py-2 border border-gray-300 rounded-[6px] shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm w-470 h-[50px] border-1 px-[18px] px-[20px] px-[18px] px-[20px] flex gap-10"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1  w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm w-470 h-[50px] border-1 px-[18px] px-[20px] px-[18px] px-[20px] flex gap-10"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label
              htmlFor="agree"
              className=" w-[50%] mr-10 block text-sm text-gray-900"
            >
              I agree with <span className="text-red-600">privacy</span> and{" "}
              <span className="text-red-600">policy</span>
            </label>

            <a
              href="/forgot-password"
              className="text-sm  hover:underline flex justify-end"
            >
              Forgot Password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className=" w-full h-[52px]  flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        <div className="text-center">
          <button className="flex items-center justify-center w-[450px] h-[52px] px-[30px] py-[14px] gap-[10px] border bg-[#00844C] bg-opacity-10 rounded-[6px] shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-100">
            <Image
              src={google}
              alt="Google Logo"
              className="w-[24px] h-[24px]"
            />
            <span className=" size-3.5 text-gray-500 font-semibold  leading-4 font-Quicksand w-[150px] h-[18px]">
              Login with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
