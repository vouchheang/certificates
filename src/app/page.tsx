import Image from "next/image";
import React from "react";
import Background from "../images/background.png";
import Footer from "@/components/Footer";
import folder from "../images/folders.png";
import Button from "@/components/Button";
import shieldcheck from "../images/shield-check.png";
import filereport from "../images/file-report.png";
import filecertificate from "../images/file-certificate.png";
import image4 from "../images/image 4.png";
import image5 from "../images/image 5.png";
import image7 from "../images/image 7.png";
import image9 from "../images/image 9.png";
import image16 from "../images/image 16.png";
import Info from "@/components/Info";
import Header2 from "@/components/Header2";
import Footers from "@/components/Footers";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header2/>

      <div
        className="bg-gray-50"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className="w-full max-w-screen-xl px-4 py-10 mx-auto flex flex-col items-center mt-[3.5rem]">
          <div className="text-center max-md:mb-7 lg:mb-7 ">
            <h2 className=" sm:text-3xl lg:text-2.5xl font-Quicksand text-gray-900 font-bold lg:space-y-4 max-md:text-2xl">
              Quick and easy way to generate certificates <br />
              <span className="block  sm:mt-0">
                by documents and templates
              </span>
            </h2>
          </div>
          <div className="flex justify-center w-full max-w-4xl bg-[#00844C] bg-opacity-10 rounded-md shadow-sm border-dashed border-green-500 border-2 p-6">
            <div className="flex flex-col items-center w-full max-w-lg">
              <Image src={folder} alt="Upload Icon" className="w-20 h-20" />
              <p className="text-[#00844C] font-bold text-sm text-center mt-4">
                Drag your document, photos, pdf here to start <br />
                <span className="block">uploading</span>
              </p>
              <div className="mt-4">
                <Button label="Upload" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F8F8F8] py-10">
          <div className="max-w-screen-xl px-4 mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Quicksand text-[#000000] font-bold mb-4">
              Key Value
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#000000] mb-8">
              Making Sala Kits different from other existing edu-tools solution
              and generate system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto w-full max-w-screen-lg p-4">
              <div className="flex flex-col items-center rounded-md p-4 max-w-xs">
                <Image
                  src={shieldcheck}
                  alt="Secure Icon"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-[#00844C] text-center">
                  Secure your data <br />
                  <span>after generate</span>
                </p>
              </div>

              <div className="flex flex-col items-center rounded-md p-4 max-w-xs">
                <Image
                  src={filereport}
                  alt="Save Time Icon"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-[#00844C] text-center">
                  Save time on <br />
                  <span>issue certifications</span>
                </p>
              </div>

              <div className="flex flex-col items-center rounded-md p-4 max-w-xs">
                <Image
                  src={filecertificate}
                  alt="Certification Icon"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-[#00844C] text-center">
                  Easily generate your <br />
                  <span>certification quickly</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-Quicksand text-[#222222] font-bold mb-4">
            Our Sponsors
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#222222] mb-8">
            Lorem ipsum dolor sit amet consectetur. Sapien faucibus suspendisse
            at nunc.
            <br /> Pretium augue sodales sed aliquam facilisis. Faucibus
            habitant aenean nuque leo donec gravida neque.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Image src={image9} alt="Sponsor 1" className="w-24 h-24" />
            <Image src={image4} alt="Sponsor 2" className="w-24 h-24" />
            <Image src={image16} alt="Sponsor 3" className="w-24 h-24" />
            <Image src={image5} alt="Sponsor 4" className="w-24 h-24" />
            <Image src={image7} alt="Sponsor 5" className="w-24 h-24" />
          </div>
        </div>
        <Footers/>
      </div>
      <Info />
      <Footer />
    </div>
  );
}
