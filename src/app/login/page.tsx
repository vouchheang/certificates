import Image from "next/image";
import React from "react";
import picture from "../../images/picture.png";
import Header from "@/components/Header";
import google from "../../images/google.png";
import Background from "../../images/background.png";
import Footer from "@/components/Footer";
import Background1 from "../../images/bg1.png";
export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-50 mt-[5rem]">
        <div
          className="w-[1370px] h-[951px] p-[90px_40px] gap-[80px] lg:w-2/3 flex flex-col"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <div className="w-lg ">
            <h2 className="w-[1290px] h-[76px] text-3xl font-semibold text-gray-900 mb-4 h-38.4">
              Quick and easy way to generate certificates <br />
              by documents and templates
            </h2>
            <p className="text-gray-700 mb-8 w-[1005px] h-[54px]">
              Lorem ipsum dolor sit amet consectetur. Ornare ac at urna amet
              scelerisque quam. Dolor vulputate consequat eu tortor ullamcorper
              sit vestibulum diam elit. Eget vivamus consequat nisl ut commodo
              sem. Aliquam ultrices aenean vestibulum aliquam consequat.
            </p>
            <Image
              src={picture}
              alt="picture"
              className=" w-full flex justify-center"
            />
          </div>
        </div>
        <div className=" lg:w-1/3 bg-white items-center font-Quicksand shadow-lg w-[550px] h-[951px] flex flex-col justify-between p-[50px_40px]">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 flex justify-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-[6px] shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm w-470 h-[50px] border-1 flex gap-10"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1  w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm w-470 h-[50px] border-1 px-[18px_20px] px-3 flex gap-10"
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
                  className=" w-[50%] mr-20 block text-sm text-gray-900"
                >
                  I agree with <span className="text-red-600">privacy</span> and
                  <span className="text-red-600"> policy</span>
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
            <div className="my-[270px]">
            <div className="relative my-5 ">
              <div className="absolute inset-0 flex items-center  justify-center w-full">
                <div className="w-20 border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <div className="text-center">
              <button className="flex items-center justify-center w-[450px] h-[52px] px-[30px_14px] gap-[10px] border bg-[#00844C] bg-opacity-10 rounded-[6px] shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-100">
                <Image
                  src={google}
                  alt="Google Logo"
                  className="w-[24px] h-[24px]"
                />
                <span className="leading-4.5 size-3.5 text-gray-500 font-semibold text-sm leading-4 font-Quicksand w-[150px] h-[18px]">
                  Login with Google
                </span>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
