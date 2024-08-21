import Header from "@/components/Header";
import Image from 'next/image';
import logo from '@/images/under-maintenance.png'
import Button from "@/components/Button";
import bglt from '@/images/BACKGROUNDLEFTT.png'
import bglb from '@/images/BACKGROUNDLEFTB.png'
import bgrt from '@/images/BACKGROUNDRIGHTT.png'
import bgrb from '@/images/BACKGROUNDRIGHTB.png'
import Footer from "@/components/Footer";

function Register(){
    return <>
        < Header />
        <form action="#">
        <div className="flex">
            <div className="flex-1 justify-center flex items-center" style={{backgroundImage: `url(${bglt.src}), url(${bglb.src}), url(${bgrt.src}), url(${bgrb.src})`}}>
            <Image src={logo} alt="#" className="size-[30rem]" />
            </div>
            <div className="flex flex-col flex-2 justify-center items-center w-[42rem] h-screen bg-white shadow-2xl">
            <div className="flex-col flex justify-center items-center ">
              <h1 className="text-xl font-semibold">Create Account</h1>
              <p className="font-medium mt-5">Let’s get a start Create account with Name for using </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="mt-3 text-base font-medium">First Name</label>
              <input type="text" className="min-h-14 w-[36rem] pl-3  border-2  rounded-lg " placeholder='' />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mt-3 text-base font-medium">Last Name</label>
              <input type="text" className="min-h-14 w-[36rem] pl-3  border-2  rounded-lg " placeholder='' />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mt-3 text-base font-medium">Email</label>
              <input type="email" className="min-h-14 w-[36rem] pl-3  border-2  rounded-lg " placeholder='' />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mt-3 text-base font-medium">Create Password</label>
              <input type="password" className="min-h-14 w-[36rem] pl-3  border-2  rounded-lg " placeholder='Enter your password' />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mt-3 text-base font-medium">Confirm Password</label>
              <input type="password" className="min-h-14 w-[36rem] pl-3  border-2  rounded-lg " placeholder='Enter your password' />
            </div>
            <div className="flex flex-row gap-8 text-gray-500 items-center mt-5 mr-[13.5rem]">
            <h1 className="text-lg font-semibold text-black">Gender</h1>

            <div className="flex items-center gap-2">
                <input type="radio" name="gender" className="min-h-8 border-2 rounded-lg" />
                <label className="text-base font-medium">Female</label>
            </div>

            <div className="flex items-center gap-2">
                <input type="radio" name="gender" className="min-h-8 border-2 rounded-lg" />
                <label className="text-base font-medium">Male</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="radio" name="gender" className="min-h-8 border-2 rounded-lg" />
                <label className="text-base font-medium">Other</label>
            </div>
            </div>
            <div className="flex flex-row font-medium text-gray-500 gap-[30px] items-center mt-2 mr-[16.5rem]">
                <input type="checkbox" name="check" className="min-h-10 w-5 border-2" />
                <p>I am agree with <span className="text-red-600">privacy</span> and <span className="text-red-600">policy</span></p>
            </div>
            <div className="flex justify-center mt-5">
            <Button label="Create New Account" />
            </div>
            <div className="flex items-center justify-center w-full my-4">
            <div className="w-20 border-t border-gray-300"></div>
             <span className="mx-4 text-gray-500">Or</span>
            <div className="w-20 border-t border-gray-300"></div>
            </div>

            </div>
            </div>
        </form>
        < Footer />
        

    </>
}
export default Register;