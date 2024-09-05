"use client";
import { useState, useEffect } from "react";

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
          <img
            src={`http://178.128.19.249${infoData[0]?.attributes.logo.data.attributes.url}`}
            alt="Logo"
            width={infoData[0]?.attributes.logo.data.attributes.width}
            height={infoData[0]?.attributes.logo.data.attributes.height}
            className="w-[100px] h-auto"
          />
        </div>
        <p className="text-base text-gray-800 mb-4">
          {infoData[0]?.attributes.descriptions}
        </p>
        <div className="flex space-x-4">
          <a href={infoData[0]?.attributes.social[0].text}>
            {" "}
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.social[0].icon.data.attributes.url}`}
              alt="Facebook"
              width={
                infoData[0]?.attributes.social[0].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[0].icon.data.attributes.height
              }
              className="w-[24px] h-[24px]"
            />
          </a>
          <a href={infoData[0]?.attributes.social[1].text}>
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.social[1].icon.data.attributes.url}`}
              alt="Instagram"
              width={
                infoData[0]?.attributes.social[1].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[1].icon.data.attributes.height
              }
              className="w-[24px] h-[24px]"
            />
          </a>
          <a href={infoData[0]?.attributes.social[2].text}>
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.social[2].icon.data.attributes.url}`}
              alt="Telegram"
              width={
                infoData[0]?.attributes.social[2].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[2].icon.data.attributes.height
              }
              className="w-[24px] h-[24px]"
            />
          </a>
        </div>
      </div>

      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 opacity-65 mb-4">
          {infoData[0]?.attributes.title}
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.contact[0].icon.data.attributes.url}`}
              alt="Map"
              width={
                infoData[0]?.attributes.social[2].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[2].icon.data.attributes.height
              }
              className="w-[20px] h-[20px] opacity-70"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[0].text}
            </span>
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.contact[1].icon.data.attributes.url}`}
              alt="Email"
              width={
                infoData[0]?.attributes.social[1].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[1].icon.data.attributes.height
              }
              className="w-[16px] h-[16px] opacity-50"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[1].text}
            </span>
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src={`http://178.128.19.249${infoData[0]?.attributes.contact[2].icon.data.attributes.url}`}
              alt="Call"
              width={
                infoData[0]?.attributes.social[2].icon.data.attributes.width
              }
              height={
                infoData[0]?.attributes.social[2].icon.data.attributes.height
              }
              className="w-[23px] h-[20px] opacity-70 mb-6"
            />
            <span className="ml-3">
              {infoData[0]?.attributes.contact[2].text} <br />
              {infoData[0]?.attributes.contact[3].text}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
