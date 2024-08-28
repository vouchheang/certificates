"use client";
import React, { useState, useEffect } from "react";

interface HeaderData {
  attributes: {
    NavBar: {
      label: string;
      path: string;
    }[];
    Button: {
      label: string;
      Buttontype: string;
    };
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      }[]
    };
  };
}

export default function Header() {
  const [headerData, setHeaderData] = useState<HeaderData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch(
            "http://localhost:1337/api/about-us-pages?populate=NavBar,Button,logo"
          ),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setHeaderData(data.data);

      } catch (error) {
        setError("error");
      }
    };

    fetchData();
  }, []);

  if (!headerData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm">
        Loading...
      </div>
    );
  }
  return (
    <div className="pb-1 ">
      <header className=" fixed top-0 left-0 w-full bg-white text-gray-600 font-Quicksand p-2">
        <nav>
          <ul className="flex justify-end items-center space-x-6 text-xl">
            <div className="mr-auto">
             <img src={`http://localhost:1337${headerData[0]?.attributes.logo.data[1].attributes.url}`}
                alt="#"
                width={headerData[0]?.attributes.logo.data[1].attributes.width}
                height={headerData[0]?.attributes.logo.data[1].attributes.height} /> 
              
            </div>
            <li>
              <a href={headerData[0]?.attributes.NavBar[0]?.path}>
                {headerData[0]?.attributes.NavBar[0]?.label}
              </a>
            </li>
            <li>
              <a href={headerData[0]?.attributes.NavBar[1]?.path}>
                {headerData[0]?.attributes.NavBar[1]?.label}
              </a>
            </li>
            <li>
              <a href={headerData[0]?.attributes.NavBar[2]?.path}>
                {headerData[0]?.attributes.NavBar[2]?.label}
              </a>
            </li>
            <li>
              <button
                typeof={headerData[0]?.attributes.Button.Buttontype}
                className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium"
              >
                {headerData[0]?.attributes.Button.label}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
