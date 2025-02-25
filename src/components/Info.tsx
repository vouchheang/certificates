"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Facebook from "../images/fb.png";
import Instagram from "../images/ig.png";
import Telegram from "../images/tele.png";
import Map from "../images/map.png";
import Add from "../images/@.png";
import Call from "../images/call.png";
interface InfoData {
  attributes: {
    descriptions: string;
    title: string;
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    social: {
      text: string;
      icon: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    }[];
    contact: {
      text: string;
      icon: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    }[];
  };
}

export default function Info() {
  const [infoData, setinfoData] = useState<InfoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch(
            "http://178.128.19.249/api/infomations?populate[social][populate]=*&populate[contact][populate]=*&populate[logo][populate]=*"
          ),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setinfoData(data.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (!infoData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-max-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f9f9f9] flex flex-col lg:flex-row justify-between items-start py-10 px-8">
      <div className="flex flex-col lg:w-2/3">
        <div className="mb-6">
          <Image src={Logo} alt="Logo" className="w-[100px] h-auto" />
        </div>
        <p className="text-base text-gray-800 mb-4">
          Sala is an edtech startup based in Cambodia with a simple vision to
          enrich students' journeys. As a two-sided marketplace, Sala helps high
          school students to make better college majors & career choices and for
          institutions to connect and engage with our student community and
          enable them to manage their academic operations through our school
          management suite.
        </p>
        <div className="flex gap-4">
          <Image src={Facebook} alt="#" />
          <Image src={Instagram} alt="#" />
          <Image src={Telegram} alt="#" />
        </div>
      </div>
      <div className="w-full md:w-auto">
        <div className="w-full md:w-[525px] h-auto ml-0 md:ml-5">
          <h2 className="font-Quicksand text-black opacity-40 text-xl font-bold mb-4 md:mb-0">
            Find Us
          </h2>
          <div className="w-full md:w-[380px] h-auto mt-4">
            <ul>
              <li className="flex gap-2 mb-4">
                <Image
                  src={Map}
                  alt="#"
                  className="opacity-50 w-[22px] h-[22px]"
                />
                <a href="#" className="text-black font-[15px]">
                  House #5 St 550, Phnom Penh 12151, Cambodia
                </a>
              </li>
              <li className="flex gap-2 mb-4">
                <Image
                  src={Add}
                  alt="#"
                  className="opacity-40 w-[18px] h-[18px] mt-1"
                />
                <a href="#" className="text-black font-[15px]">
                  Contact@sala.co
                </a>
              </li>
              <li className="flex gap-2">
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


