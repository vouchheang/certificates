// pages/index.js
import Image from "next/image";
import React from "react";
import logo from "../image/logo.png";
import logo1 from "../image/logo1.png";
import google1 from "../image/google1.png";
import background from "../image/background.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Frame"
          className="h-8 w-auto"
        />
      </div>
      <div>
        <button className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
          Sign Up
        </button>
      </div>
    </header>
      <div className="flex flex-1 bg-gray-50">
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center p-8">
        {/* <Image
          src={background}
          alt="background"
          className=""
        /> */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 h-38.4">
              Quick and easy way to generate certificates by documents and templates
            </h2>
            <p className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur. Ornare et at urna amet
              scelerisque quam. Dolor vulputate consequat tortor...
            </p>
            <Image
              src={logo1}
              alt="picture"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/3 bg-white p-8 flex items-center justify-center shadow-lg">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agree"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree with privacy and policy
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Google Login Button */}
            <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200">
              <Image
                src={google1}
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      {/* <footer className="w-full bg-green-600 p-4 text-white text-center">
        <p>&copy; 2023 Sala Co. | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Release Notes</a></p>
      </footer> */}
    </div>
  );
}
