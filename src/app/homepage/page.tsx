import Image from "next/image";
import React from "react";
import picture from "../../images/picture.png";
import Header from "@/components/Header";
import google from "../../images/google.png";
import Background from "../../images/background.png";
import Footer from "@/components/Footer";
import Background1 from "../../images/bg1.png";
import folder from "../../images/folders.png";
import Button from "@/components/Button";
import shieldcheck from "../../images/shield-check.png";
import filereport from "../../images/file-report.png";
import filecertificate from "../../images/file-certificate.png";
import image4 from "../../images/image 4.png";
import image5 from "../../images/image 5.png";
import image7 from "../../images/image 7.png";
import image9 from "../../images/image 9.png";
import image16 from "../../images/image 16.png";
import Info from "@/components/Info";
import logo from "../../images/Frame 42.png"



export default function HomePage() {
  return (
    <div className="flex flex-col">
      <header className=" fixed top-0 left-0 w-full bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl w-[143.37px] h-[29.79px]">
            <Image
            src={logo}
            alt="#"
            />
          </div>
          <nav className="flex space-x-6 font-Quicksand Size-[16px] leading-20px font-bold">
            <a href="#" className="text-[#717171] mt-2">
              Home
            </a>
            <a href="#" className="text-[#717171] mt-2">
              FAQ
            </a>
            <a href="#" className="text-[#717171] mt-2">
              About Us
            </a>
            <button className="bg-[#00844C] text-white rounded-[6px] font-Quicksand w-[73px] h-[46px] p-[8px_15px]">
              Login
            </button>
          </nav>
        </div>
      </header>
      <div className="bg-gray-50" style={{ backgroundImage: `url(${Background.src})` }}>
        <div
          className="w-[1920px] h-[624px] px-[60px] py-[10px] gap-1 lg:w-2/3 flex flex-col"
          
        >
          <div className="w-[100rem] flex justify-center mt-[6rem] ">
            <h2 className="text-3xl font-Quicksand text-gray-900 mb-4 Size-34px font-bold">
              Quick and easy way to generate certificates <br />
              <span className="ml-[6rem]"> by documents and templates</span>
            </h2>
          </div>
          <div className="flex justify-center w-[1600px] h-[624px] mt-7 px-0 ">
            <div className="container flex justify-center items-center flex-col w-[969px] h-[328px] rounded-[6px]  bg-[#00844C] bg-opacity-10 shadow-sm border-dashed border-green-500 border-2 ">
              <Image
                src={folder}
                alt="picture"
                className="w-[80px] h-[80px] flex justify-center "
              />
              <p className="font-Quicksand text-[#00844C] font-bold w-600 Size-14px leading-17.5px align-center">
                Drag your document, photos, pdf here to start <br />
                <span className="flex justify-center">uploding </span>
              </p>
              <div className="mt-[2rem]">
                <Button label="Uplaod" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[432px] py-[10px] lg:w-2/3 flex flex-col mt-6">
          <div className="w-[1668px] h-[432px] px-[60px_10px] flex justify-center items-center flex-col bg-[#F8F8F8]">
            <h2 className="text-3xl font-Quicksand text-gray-900 mb-4 Size-34px">
              Key Value
            </h2>
            <p className="font-Quicksand w-500 Size-16px leading-20 align-center">
              Making Sala Kits different from other existing edu-tools solution
              and generate system.
            </p>

            <div className="flex justify-center w-[1127px] h-[154px] flex-row ">
              <div className="container flex justify-center items-center flex-col h-[154px] rounded-[6px] px-0">
                <Image
                  src={shieldcheck}
                  alt="picture"
                  className="w-[80px] h-[80px] flex justify-center"
                />
                <div className="w-[369px] h-[154px">
                  <p className="font-Quicksand text-gray-900 ml-[7rem]">
                    Secure your data <br />{" "}
                    <span className="flex ml-3">after generate </span>
                  </p>
                </div>
              </div>

              <div className="container flex justify-center items-center flex-col w-[369px] h-[154px] px-0 ml-[1rem] ">
                <Image
                  src={filereport}
                  alt="picture"
                  className="w-[80px] h-[80px] flex justify-center mt-3"
                />
                <div className="w-[369px] h-[154px]">
                  <p className="font-Quicksand flex justify-center text-gray-900 mr-[1rem]">
                    Save time your time on <br />
                  </p>{" "}
                  <span className="flex justify-center">
                    issue certifcations
                  </span>
                </div>
              </div>

              <div className="container flex justify-center items-center flex-col w-[369px] h-[154px] px-0 ml-[1rem]  ">
                <Image
                  src={filecertificate}
                  alt="picture"
                  className="w-[80px] h-[80px] flex justify-center mt-3"
                />
                <div className="w-[369px] h-[154px]">
                  <p className="font-Quicksand flex justify-center text-gray-900">
                    Easily generate your{" "}
                  </p>{" "}
                  <span className="flex justify-center">
                    {" "}
                    certification quickly
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        
        </div>

        <div className="h-[420px] p-[60px_40px] mt-[-8] mx-auto text-center bg-[#FFFFFF]">
        <h2 className="text-3xl font-Quicksand mb-4 Size-36px w-700">Our Sponsors</h2>
        <p className="text-gray-600 mb-8 font-Quicksand Size-16px w-600 align-center leading-30px">
          Lorem ipsum dolor sit amet consectetur. Sapien faucibus suspendisse at  nunc. Pretium augue sodales <br/>
          sed aliquam facilisis. Faucibus habitant aenean nuque leo donec gravida neque.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-12">
          <Image
          src={image9}
          alt="#"
          className=""
          />
           <Image
          src={image4}
          alt="#"
          className=""
          />
           <Image
          src={image16}
          alt="#"
          className=""
          />
           <Image
          src={image5}
          alt="#"
          className=""
          />
           <Image
          src={image7}
          alt="#"
          className=""
          />
        </div>
        </div>
        <div className="border-t border-[#E7E7E7] flex justify-between h-[296px] p-[60px_40px] w-1920px bg-[#FFFFFF]">
          <div className="text-left space-y-2">
            <h4 className="font-Quicksand w-700 Size-20px leading-25px  text-black opacity-40 text-xl font-bold">Site Map</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">FAQ</a></li>
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">Help Center</a></li>
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">Schools</a></li>
            </ul>
          </div>
          <div className="text-left mr-[17rem] space-y-2">
            <h4 className="font-Quicksand w-700 Size-20px leading-25px text-black opacity-40 text-xl font-bold">Company</h4>
            <ul className="space-y-2 font-Quicksand w-400 Size-15px leading-18.75px ">
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">About us</a></li>
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">Term of use</a></li>
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">Contact us</a></li>
              <li><a href="#" className="text-[#00844C] hover:text-[#00844C]">Join us</a></li>
            </ul>

          </div>
            
        </div>
        <div className="border-t"></div>
   
      </div>
      <Info/>
      <Footer/>
    </div>
  );
}
