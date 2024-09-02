"use client";

import Header from "@/components/Header";
import Image from 'next/image';
import img from '@/images/Groupimg.png'
import Button from "@/components/Button";
import bglt from '@/images/BACKGROUNDLEFTT.png'
import bglb from '@/images/BACKGROUNDLEFTB.png'
import bgrt from '@/images/BACKGROUNDRIGHTT.png'
import bgrb from '@/images/BACKGROUNDRIGHTB.png'
import Footer from "@/components/Footer";
import ButtonGoogle from "@/components/Buttonicon";
import React ,{useState, useEffect} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle,faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";


interface UserFormInput {
  first_name: string;
  last_name: string;
  email: string;
  create_password: number;
  confirm_password: number;
  gender: string[];
  agree: boolean;


}

   function Register(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [createPassword, setCreatePassword] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState(0);
    const [createPasswordView, setCreatePasswordView] = useState(false);
    const [confirmPasswordView, setConfirmPasswordView] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<UserFormInput>({
      mode: "onChange"
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

    const createPasswordViewVisible = () =>{
      setCreatePasswordView(!createPasswordView);
    };
    const confirmPasswordViewVisible = () =>{
      setConfirmPasswordView(!confirmPasswordView);
    };

    const watchField = watch();
     useEffect (() => {
      const isAnyFieldInvalid = Object.values(watchField).some(value => value === '' || value === false);
      setIsButtonDisabled(isAnyFieldInvalid);
     },[watchField]);
    
    
    const onSubmit: SubmitHandler<UserFormInput> = async (data) => {
      console.log(data);
      reset();
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('Form submitted successfully:', responseData);
          return responseData;
        } else {
          console.error('Form submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      }
      };
    

    
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex box-border">
          < Header />
          <div className="flex-1 max-md:hidden justify-center flex items-center" style={{backgroundImage: `url(${bglt.src}), url(${bglb.src}), url(${bgrt.src}), url(${bgrb.src})`}}>
             <Image src={img} alt="image" className="w-[45%] min-h-[45%] ml-[40px]" />
          </div>
          <div className="flex flex-col flex-2 justify-center items-center w-[550px] h-[1000px] max-md:w-[755px] bg-white shadow-2xl">
           <div className="flex-col flex justify-center items-center mt-[3rem]">
              <h1 className="text-[24px] font-semibold">Create Account</h1>
              <p className="font-medium mt-5 text-[13px]">Let’s get a start Create account with Name for using </p>
           </div>
         <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium">First Name</label>
              <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors.first_name && " border-red-400"}`}>
              <input type="text" 
              {...register("first_name", {required: "This field is required.",
               onChange: (e) => setFirstName(e.target.value), })}
               className="flex-grow pl-3 pr-3 rounded-lg outline-none" placeholder=""/>
             {errors.first_name ? (
              <FontAwesomeIcon icon={faXmarkCircle} className="text-red-600 mr-5 size-4" />
            ) : firstName && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#60E354] mr-5 size-4" />
            )}
            </div>
            {errors.first_name && <p className="text-red-600 text-[13px] font-medium mt-1">{errors.first_name.message}</p>}
          </div>

          <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium">Last Name</label>
              <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors.last_name && " border-red-400"}`}>
              <input 
              type="text" 
              {...register("last_name",
               { required: true, onChange: (e) => setLastName(e.target.value), })}
               className="flex-grow pl-3 pr-3 rounded-lg outline-none" placeholder=""/>
              {errors.last_name ? ( 
                 <FontAwesomeIcon icon={faXmarkCircle} className=" text-red-600 mr-5 size-4" />
              ) : lastName && (
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#60E354] mr-5 size-4" />
              )}
              </div>
              {errors.last_name && <p className="text-red-600 text-[13px] font-medium">This field is required.</p>}
          </div>
          <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium">Email 
              <span className="text-gray-800">*</span></label>
              <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors.email && " border-red-400"}`}>
              <input 
              type="email" 
              {...register("email", 
              { required: true, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Invalid email address"}, 
              onChange: (e) => setEmail(e.target.value)})}
              className="flex-grow pl-3 pr-3 rounded-lg outline-none" placeholder=""/>
              {errors.email ?  ( 
              <FontAwesomeIcon icon={faXmarkCircle} className=" text-red-600 mr-5 size-4" />
              ) : email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#60E354] mr-5 size-4" />
              )}
              </div>
              {errors.email && <p className="text-red-600 text-[13px] font-medium">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium">Create Password 
              <span className="text-gray-800">*</span></label>
              <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors.create_password && " border-red-400"}`}>
               <input 
               type={createPasswordView ? "text" : "password"}
               {...register("create_password",{ 
                 required: true,
                 minLength: {value: 6, message:"At least 6 characters"}, 
                 onChange: (e) => setCreatePassword(e.target.value)})}
                className="flex-grow pl-3 pr-3 rounded-lg outline-none " 
                placeholder="Enter your password"/>
               <FontAwesomeIcon icon={createPasswordView ? faEyeSlash :faEye} 
               className=" text-[#717171] mr-5" onClick={createPasswordViewVisible} />
              </div>
              {errors.create_password && <p className="text-red-600 text-[13px] font-medium">{errors.create_password.message}</p>}           
          </div>
          <div className="flex flex-col text-[13px]">
              <label className="mt-3 text-base font-medium">Confirm Password 
              <span className="text-gray-800">*</span></label>
              <div className={`flex items-center border-2 rounded-lg min-h-[50px] w-[470px] max-sm:max-w-[395px] ${errors.create_password && " border-red-400"}`}>
              <input
              type={confirmPasswordView ? "text" : "password"}
              {...register("confirm_password", {
                required: true,
                minLength: { value: 6, message: "At least 6 characters" },
                onChange: (e) => setConfirmPassword(e.target.value),
              })}
              className="flex-grow pl-3 pr-3 rounded-lg outline-none"
              placeholder="Enter your password"
            />

               <FontAwesomeIcon icon={ confirmPasswordView ? faEyeSlash :faEye} className=" text-[#717171] mr-5" onClick={confirmPasswordViewVisible}  />
              </div>
              {errors.confirm_password && <p className="text-red-600 text-[13px] font-medium">{errors.confirm_password.message}</p>}
          </div>
          <div className="flex flex-row gap-[30px] max-sm:mr-auto text-gray-500 items-center mt-5 mr-[7.5rem]">
             <h1 className="text-[16px] font-semibold text-gray-800">Gender 
             <span className="text-gray-800">*</span></h1>
          <div className="flex items-center gap-2">
              <input type="radio" value="Femal" 
              {...register('gender', { required: true })} 
              className="min-h-8 border-2 rounded-lg" />
              <label className="text-base font-medium text-[14px]">Female</label>
          </div>
          <div className="flex items-center gap-2">
              <input type="radio" value="Male" 
              {...register('gender', { required: true })} 
              className="min-h-8 border-2 rounded-lg" />
              <label className="text-base font-medium text-[14px]">Male</label>
          </div>
          <div className="flex items-center gap-2">
              <input type="radio" value="Other" 
              {...register('gender', { required: true })} 
              className="min-h-8 border-2 rounded-lg" />
              <label className="text-base font-medium text-[14px]">Other</label>
            </div>
          </div>
          <div className="flex max-sm:mr-auto flex-row font-medium text-gray-500 gap-[10px] items-center mt-2 mr-[11rem]">
              <input type="checkbox" 
              {...register('agree', { required: true })} 
              className="min-h-10 w-5 border-2" />
              <p className="text-[16px]">I am agree with 
              <span className="text-red-600">privacy</span> and <span className="text-red-600">policy</span></p>
          </div>
          <div className="flex justify-center mt-5">
              <Button type="submit" label="Create New Account" 
              className={`w-[470px] h-[52px] max-sm:w-[390px] px-[30px] py-[14px] rounded-[6px]  ${isButtonDisabled ? 'bg-[#A6A6A6]' : 'bg-green-600'} text-white`}/>
          </div>
          <div className="flex items-center justify-center w-full my-4">
          <div className="w-20 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or</span>
              <div className="w-20 border-t border-gray-300"></div>
          </div>
              <ButtonGoogle />
          </div>
          </div>
          </div>
        </form>
        < Footer />
    </>
}
export default Register;