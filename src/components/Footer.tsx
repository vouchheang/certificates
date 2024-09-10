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
        const res = await fetch(
          "https://strapi-dev.seksa.today/api/footers?populate=*"
        );
        setfooterData((await res.json()).data);
      } catch {
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
        <a href={footerData[0]?.attributes.link[0].path} className="underline">
          {footerData[0]?.attributes.link[0].label}
        </a>{" "}
        |{" "}
        <a href={footerData[0]?.attributes.link[1].path} className="underline">
          {footerData[0]?.attributes.link[1].label}
        </a>
      </p>
    </div>
  );
}
