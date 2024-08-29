"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../images/map.png";
import Add from "../images/@.png";
import Call from "../images/call.png";
import "../style/about.css";
import facebook from "../images/fb.png";
import instagram from "../images/ig.png";
import telegram from "../images/tele.png";

interface Information {
  attributes: {
    companyInfo: {
      descriptions: string;
    };
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      }[];
    };
    social: {
      facebook: string;
      instagram: string;
      telegram: string;
    }[];
  };
}

export default function Info() {
  const [information, setInformation] = useState<Information[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch("http://localhost:1337/api/about-us-pages?populate=*"),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setInformation(data.data);
      } catch (error) {
        setError("error");
      }
    };

    fetchData();
  }, []);

  if (!information) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-full h-auto p-4 flex justify-between info-container box-border sm:text-sm md:text-[15px]">
      <div className="flex-1 company-info ">
        {/* <Image
          className="mb-4"
          src={`http://localhost:1337${information[0]?.attributes.logo.data[0].attributes.url}`}
          alt="#"
          width={information[0]?.attributes.logo.data[0].attributes.width}
          height={information[0]?.attributes.logo.data[0].attributes.height}
        /> */}

        <p>{information[0]?.attributes.companyInfo.descriptions}</p>
        <div className=" flex gap-4 mt-4 sm:w-[18px] sm:h-[18px] sm:gap-2 md:w-[20px] sm:h-[20px] md:gap-2">
          <Image src={facebook} alt="#" className="h-[22px]" />
          <Image src={instagram} alt="#" className="h-[22px]" />
          <Image src={telegram} alt="#" className="h-[22px]" />
        </div>
      </div>

      <div className="basis-1/3 contact-info md:ml-5 lg:w-full">
        <h2 className="text-black opacity-40 text-xl font-bold md:opacity-50 find-us">
          Find Us
        </h2>
        <div className="w-full h-[110px] mt-1 lg:w-96">
          <ul>
            <li className="flex gap-2">
              <Image
                src={Map}
                alt="#"
                className="opacity-50 w-[22px] h-[22px] sm:w-[17px] sm:h-[17px] md:w-[20px] md:h-[20px]"
              />
              <a href="#" className="text-black font-[15px] ">
                House #5 St 550, Phnom Penh 12151, Cambodia
              </a>
            </li>
            <li className="flex gap-2 w-full mt-2">
              <Image
                src={Add}
                alt="#"
                className="opacity-40 w-[18px] h-[18px] mt-1 sm:w-[13px] sm:h-[13px] md:w-[16px] md:h-[16px]"
              />
              <a href="#" className="text-black font-[15px]">
                Contact@sala.co
              </a>
            </li>
            <li className="flex gap-2 w-full mt-2">
              <Image
                src={Call}
                alt="#"
                className="opacity-50 w-[22px] h-[22px] sm:w-[17px] sm:h-[17px] md:w-[20px] md:h-[20px]"
              />
              <a href="#" className="text-black font-[15px]">
                +855 10 240 042 <br />
                +855 12 240 042
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
