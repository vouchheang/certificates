"use client";
import Image from "next/image";
import img from "@/images/Groupimg.png";
import Button from "@/components/ButtonCreate";
import bglt from "@/images/BACKGROUNDLEFTT.png";
import bglb from "@/images/BACKGROUNDLEFTB.png";
import bgrt from "@/images/BACKGROUNDRIGHTT.png";
import bgrb from "@/images/BACKGROUNDRIGHTB.png";
import ButtonGoogle from "@/components/ButtonGoogle";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import eyeslash from "@/images/eyehide.webp";
import eyes from "@/images/eye.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import Header from "../../components/Header2";

interface UserFormInput {
  first_name: string;
  last_name: string;
  email: string;
  create_password: number;
  confirm_password: number;
  gender: string[];
  agree: boolean;
}

function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [createPasswordView, setCreatePasswordView] = useState<boolean>(false);
  const [confirmPasswordView, setConfirmPasswordView] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<UserFormInput>({
    mode: "onChange",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const createPasswordViewVisible = () => {
    setCreatePasswordView(!createPasswordView);
  };
  const confirmPasswordViewVisible = () => {
    setConfirmPasswordView(!confirmPasswordView);
  };

  const watchField = watch();
  useEffect(() => {
  const isAnyFieldInvalid = Object.values(watchField).some(
      (value) => value === "" || value === false
    );
    setIsButtonDisabled(isAnyFieldInvalid);
  }, [watchField]);

  const onSubmit: SubmitHandler<UserFormInput> = async (data) => {
    console.log(data);
    if (createPassword === confirmPassword) {
      toast.success("You have successfully Create Account.");
    } else {
      toast.error("Passwords do not match.");
    }
    reset();
    setFirstName("");
    setLastName("");
    setEmail("");
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Form submitted successfully:", responseData);
        return responseData;
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <>
      <Header btnPath="/login" label="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex box-border">
          <div
            className="flex-1 max-md:hidden justify-center flex items-center w-full h-[1000px] object-cover"
            style={{
              backgroundImage: `url(${bglt.src}), url(${bglb.src}), url(${bgrt.src}), url(${bgrb.src})`,
            }}
          >
            <Image
              src={img}
              alt="image"
              className="max-w-[40%] max-h-[60%] ml-[40px] max-lg:hidden max-xl:hidden "
            />
          </div>
          <div className="flex flex-col flex-2 justify-center items-center w-[550px] h-[1000px] max-md:w-[755px] bg-white shadow-2xl max-lg:w-[1000px] max-xl:w-[1300px]">
            <div className="flex-col flex justify-center items-center mt-[3rem]">
              <h1 className="text-[24px] max-sm:text-[20px] font-semibold">Create Account</h1>
              <p className="font-medium mt-5 text-[13px] max-sm:text-[12px] max-lg:text-[18px] max-xl:text-[20px]">
                Let’s get a start Create account with Name for using{" "}
              </p> 
            </div> 
            <div className="flex flex-col justify-center items-center">
              <Input
                label="First Name"
                register={register}
                errors={errors}
                name="first_name"
                value={firstName}
                setValue={setFirstName}
                placeholder=""
              />

              <Input
                label="Last Name"
                register={register}
                errors={errors}
                name="last_name"
                value={lastName}
                setValue={setLastName}
                placeholder=""
              />

              <div className="flex flex-col text-[13px]">
                <label className="mt-3 text-base max-sm:text-sm font-medium">
                  Email
                  <span className="text-gray-800">*</span>
                </label>
                <div
                  className={`flex items-center border-2 rounded-lg h-[50px] w-[470px] max-sm:w-[360px] max-sm:h-[42px] max-md:w-[600px] max-lg:w-[700px] max-xl:w-[1000px] ${
                    errors.email && " border-red-400"
                  }`}
                >
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                      onChange: (e) => setEmail(e.target.value),
                    })}
                    className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                    placeholder=""
                  />
                  {errors.email ? (
                    <FontAwesomeIcon
                      icon={faXmarkCircle}
                      className=" text-red-600 mr-5 size-4"
                    />
                  ) : (
                    email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-[#60E354] mr-5 size-4"
                      />
                    )
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-600 text-[13px] font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col text-[13px]">
                <label className="mt-3 text-base max-sm:text-sm font-medium">
                  Create Password
                  <span className="text-gray-800">*</span>
                </label>
                <div
                  className={`flex items-center border-2 rounded-lg h-[50px] w-[470px] max-sm:w-[360px] max-sm:h-[42px] max-md:w-[600px] max-lg:w-[700px] max-xl:w-[1000px] ${
                    errors.create_password && " border-red-400"
                  }`}
                >
                  <input
                    type={createPasswordView ? "text" : "password"}
                    {...register("create_password", {
                      required: true,
                      onChange: (e) => setCreatePassword(e.target.value),
                      minLength: { value: 6, message: "At least 6 characters" },
                    })}
                    className="flex-grow pl-3 pr-3 rounded-lg outline-none "
                    placeholder="Enter your password"
                  />
                  <Image
                    src={createPasswordView ? eyeslash : eyes}
                    alt="Toggle Password Visibility"
                    className="text-[#717171] mr-5 cursor-pointer"
                    onClick={createPasswordViewVisible}
                    width={20}
                    height={15}
                  />
                </div>
                {errors.create_password && (
                  <p className="text-red-600 text-[13px] font-medium">
                    {errors.create_password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col text-[13px]">
                <label className="mt-3 text-base max-sm:text-sm font-medium">
                  Confirm Password
                  <span className="text-gray-800">*</span>
                </label>
                <div
                  className={`flex items-center border-2 rounded-lg h-[50px] w-[470px] max-sm:w-[360px] max-sm:h-[42px] max-md:w-[600px] max-lg:w-[700px] max-xl:w-[1000px] ${
                    errors.create_password && " border-red-400"
                  }`}
                >
                  <input
                    type={confirmPasswordView ? "text" : "password"}
                    {...register("confirm_password", {
                      required: true,
                      onChange: (e) => setConfirmPassword(e.target.value),
                      minLength: { value: 6, message: "At least 6 characters" },
                    })}
                    className="flex-grow pl-3 pr-3 rounded-lg outline-none"
                    placeholder="Enter your password"
                  />
                  <Image
                    src={confirmPasswordView ? eyeslash : eyes}
                    alt="Toggle Password Visibility"
                    className="text-[#717171] mr-5 cursor-pointer"
                    onClick={confirmPasswordViewVisible}
                    width={20}
                    height={15}
                  />
                </div>
                {errors.confirm_password && (
                  <p className="text-red-600 text-[13px] font-medium">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-row gap-[30px] max-sm:mr-[4.1rem] max-sm:gap-4 text-gray-500 items-center mt-5 mr-[7.5rem] max-md:mr-[15rem] max-lg:mr-[21rem] max-xl:mr-[40rem] ">
                <h1 className="text-[16px] font-semibold max-sm:text-sm text-gray-800">
                  Gender
                  <span className="text-gray-800">*</span>
                </h1>
                <RadioButton
                  value="Male"
                  label="Male"
                  name="gender"
                  register={register}
                  errors={errors}
                />
                <RadioButton
                  value="Female"
                  label="Female"
                  name="gender"
                  register={register}
                  errors={errors}
                />
                <RadioButton
                  value="Other"
                  label="Other"
                  name="gender"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="flex max-sm:mr-[5.5rem] flex-row font-medium text-gray-500 gap-[10px] items-center mt-2 mr-[11rem] max-md:mr-[18.5rem]  max-lg:mr-[24.5rem] max-xl:mr-[43rem] ">
                <input
                  type="checkbox"
                  {...register("agree", { required: true })}
                  className="min-h-10 w-5 border-2"
                />
                <p className="text-[16px] max-sm:text-sm">
                  I am agree with
                 <a href="/privacy"> <span className="text-red-600 ml-2">privacy</span></a> and{" "}
                 <a href="/#"> <span className="text-red-600">policy</span></a>
                </p>
              </div>
              <div className="flex justify-center mt-5">
                <Button
                  type="submit"
                  label="Create New Account"
                  className={`w-[470px] h-[52px] max-sm:w-[360px] max-md:w-[600px] px-[30px] py-[14px] rounded-[6px] max-lg:w-[700px] max-xl:w-[1000px] ${
                    isButtonDisabled ? "bg-[#A6A6A6]" : "bg-green-600"
                  } text-white`}
                />
              </div>
              <div className="flex items-center justify-center w-full my-4">
                <div className="w-20 border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">Or</span>
                <div className="w-20 border-t border-gray-300"></div>
              </div>
              <ButtonGoogle />
            </div>
            <ToastContainer position="top-right" autoClose={5000} />
          </div>
        </div>
      </form>
    </>
  );
}
export default Register;
