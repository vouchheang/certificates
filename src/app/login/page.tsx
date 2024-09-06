"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import picture from "../../images/picture.png";
import Header from "@/components/Header";
import Background from "../../images/background.png";
import Footer from "@/components/Footer";
import ButtonContinue from "@/components/ButtonContinue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import eye from "../../images/eye.png";
import eyes from "../../images/eyes.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [email, setEmail] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const EmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const email = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(email);
    setEmailValid(emailPattern.test(email));
  };

  const PasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };
  const ClickPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const passwordData = {
      password: passwordValue,
      emailValid: emailValid,
      checkbox: isChecked,
    };
    console.log("Password Data:", passwordData);
  };
  const isButtonEnabled = emailValid && passwordValue.length > 0 && isChecked;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-50 mt-[5rem]">
        <div
          className="w-[1370px] h-[951px] p-[90px_40px] gap-[80px] lg:w-2/3 flex flex-col max-md:hidden"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Quick and easy way to generate certificates <br />
              by documents and templates
            </h2>
            <p className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur. Ornare ac at urna amet
              scelerisque quam. Dolor vulputate consequat eu tortor ullamcorper
              sit vestibulum diam elit. Eget vivamus consequat nisl ut commodo
              sem. Aliquam ultrices aenean vestibulum aliquam consequat.
            </p>
            <div className="flex justify-center">
              <Image
                src={picture}
                alt="picture"
                className="w-full max-w-[800px] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full bg-[#FFFFFF] items-center font-Quicksand shadow-lg h-auto flex flex-col justify-between p-10">
          <div className="w-full max-sm:h-[610px]">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center mt-1 w-full pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm h-[50px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={EmailChange}
                    className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                    placeholder="example@gmail.com"
                  />
                  {emailValid !== null && (
                    <FontAwesomeIcon
                      icon={emailValid ? faCheckCircle : faXmarkCircle}
                      className={`mr-[1rem] ${
                        emailValid ? "text-green-500" : "text-red-500"
                      }`}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center mt-1 w-full pl-5 border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={passwordValue}
                    required
                    onChange={PasswordChange}
                    className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                    placeholder="Enter your password"
                  />
                  <Image
                    src={showPassword ? eyes : eye}
                    alt="eye image"
                    className="mr-[1rem] text-gray-500 cursor-pointer w-5 font-bold"
                    onClick={ClickPassword}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0 sm:flex-row sm:justify-between">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="agree"
                    className="ml-2 text-sm text-gray-900"
                  >
                    I agree with <span className="text-red-600"><a href="#">privacy </a></span>
                    and <span className="text-red-600"><a href="#">policy</a></span>
                  </label>
                </div>
                <a
                  href="/forgotpassword"
                  className="text-sm text-[#000000] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full h-[52px] flex justify-center py-4 px-4 rounded-md shadow-sm text-sm font-Quicksand mt-7 ${
                    isButtonEnabled
                      ? "bg-[#00844C] text-white"
                      : "bg-gray-400 text-gray-200"
                  }`}
                  disabled={!isButtonEnabled}
                >
                  Login
                </button>
              </div>

              <div className="h-[98px]">
                <div className="flex items-center mt-[26rem] justify-center w-full mb-5 max-sm:mt-[5rem]">
                  <div className="w-20 border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="w-20 border-t border-gray-300"></div>
                </div>

                <ButtonContinue />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
