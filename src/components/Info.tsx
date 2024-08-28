"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../images/map.png";
import Add from "../images/@.png";
import Call from "../images/call.png";
import "../style/info.css"

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
    <div className="w-full h-auto pt-10 pb-5 pl-10 gap-2 flex justify-between info-container">
      <div className="w-full h-auto company-info">
        <img
          className="mb-8"
          src={`http://localhost:1337${information[0]?.attributes.logo.data[0].attributes.url}`}
          alt="#"
          width={information[0]?.attributes.logo.data[0].attributes.width}
          height={information[0]?.attributes.logo.data[0].attributes.height}
        />

        <p className="font-Quicksand text-base text-left mb-3 text-black">
          {information[0]?.attributes.companyInfo.descriptions}
        </p>
        <div className="flex gap-4">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="infomation">
        <div className="w-[525px] h-[185px] contact-info">
          <h2 className="font-Quicksand text-black opacity-40 text-xl font-bold">
            Find Us
          </h2>
          <div className="w-[380px] h-[130px] mt-4">
            <ul>
              <li className="flex gap-2">
                <Image
                  src={Map}
                  alt="#"
                  className="opacity-50 w-[22px] h-[22px]"
                />
                <a href="#" className="text-black font-[15px]">
                  House #5 St 550, Phnom Penh 12151, Cambodia
                </a>
              </li>
              <li className="flex gap-2 w-full mt-2">
                <Image
                  src={Add}
                  alt="#"
                  className="opacity-40 w-[18px] h-[18px] mt-1"
                />
                <a href="#" className="text-black font-[15px]">
                  Contact@sala.co
                </a>
              </li>
              <li className="flex gap-2 w-full mt-2">
                <Image
                  src={Call}
                  alt="#"
                  className="opacity-50 w-[22px] h-[22px]"
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
    </div>
  );
}
