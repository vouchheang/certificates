"use client";
import { useState, useEffect } from "react";

interface FooterData {
  attributes: {
    text: string;
    link: {
      label: string;
      path: string;
    }[];
  };
}

export default function Footer() {
  const [footerData, setfooterData] = useState<FooterData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch("http://178.128.19.249/api/footers?populate=*"),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setfooterData(data.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (!footerData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-max-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className=" p-5 bg-[#00844C]">
      <p className="text-xs sm:text-sm md:te text-white">
        {footerData[0]?.attributes.text}|{" "}
        <a
          href={` ${footerData[0]?.attributes.link[0].path}`}
          className="underline"
        >
          {footerData[0]?.attributes.link[0].label}
        </a>{" "}
        |{" "}
        <a
          href={` ${footerData[0]?.attributes.link[1].path}`}
          className="underline"
        >
          {footerData[0]?.attributes.link[1].label}
        </a>
      </p>
    </div>
  );
}
