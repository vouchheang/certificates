import Header from "@/components/Header1";
import Image from 'next/image';
import logo from '@/images/under-maintenance.png'
import Button from "@/components/Button";
import bglt from '@/images/BACKGROUNDLEFTT.png'
import bglb from '@/images/BACKGROUNDLEFTB.png'
import bgrt from '@/images/BACKGROUNDRIGHTT.png'
import bgrb from '@/images/BACKGROUNDRIGHTB.png'
import Footer from "@/components/Footer";
import ButtonGoogle from "@/components/Buttonicon";
import Input from "@/components/Input";

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
              <h1 className="text-2xl font-semibold">Create Account</h1>
              <p className="font-medium mt-5">Let’s get a start Create account with Name for using </p>
          </div>
            <Input type="text" label="First Name" icon="" placeholder="" />
            <Input type="text" label="Last Name" icon="" placeholder="" />
            <Input type="email" label="Email" icon="*" placeholder="" />
            <Input type="password" label="Password" icon="*" placeholder="Enter your password" />
            <Input type="password" label="Confirm Password" icon="*" placeholder="Enter your password" />
          <div className="flex flex-row gap-8 text-gray-500 items-center mt-5 mr-[13.5rem]">
             <h1 className="text-lg font-semibold text-gray-800">Gender</h1>
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
            <ButtonGoogle />
          </div>
          </div>
        </form>
        < Footer />
    </>
}
export default Register;