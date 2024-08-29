"use client";
import React, { useState, useEffect } from "react";
import "../style/about.css";

interface FooterData {
  attributes: {
    Title: string;
    footer: {
      text: string;
      link: {
        label: string;
        path: string;
      }[];
    };
  };
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch(
            "http://localhost:1337/api/about-us-pages?populate[footer][populate]=*"
          ),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setFooterData(data.data);
      } catch (error) {
        setError("error");
      }
    };

    fetchData();
  }, []);

  if (!footerData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm footer-container">
      <div className="flex space-x-2 footer-text sm:text-[12px] lg:ml-0 ">
        <span className="">{footerData[0]?.attributes.footer.text}</span>
        <span>|</span>
        <a
          href={footerData[0]?.attributes.footer.link[0]?.path}
          className="underline"
        >
          {footerData[0]?.attributes.footer.link[0]?.label}
        </a>
        <span>|</span>
        <a
          href={footerData[0]?.attributes.footer.link[1]?.path}
          className="underline"
        >
          {footerData[0]?.attributes.footer.link[1]?.label}
        </a>
      </div>
    </div>
  );
}
