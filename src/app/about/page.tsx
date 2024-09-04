"use client";
import { useState, useEffect } from "react";
import Left from "../../images/bg-l.png";
import Right from "../../images/bg-r.png";

interface AboutUsData {
  attributes: {
    title: string;
    span: string;
    paragraph: {
      heading: string;
      text: string;
    }[];
  };
}

export default function AboutUs() {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch("http://178.128.19.249/api/abouts?populate=*"),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setAboutUsData(data.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (!aboutUsData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-max-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col `}>
      <div
        className="w-full bg-[#FBFBFB] pl-8"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
        }}
      >
        <h1
          className={`font-Quicksand text-[34px] font-bold text-center max-sm:pt-[15%] sm:pt-[15%] md:pt-[10%] lg:pt-[8%] xl:pt-[6%]`}
        >
          {aboutUsData[0]?.attributes.title}
        </h1>

        <h3 className="font-Quicksand text-[32px] font-bold text-left max-sm:pl-2 lg:p-2">
          {aboutUsData[0]?.attributes.paragraph[0].heading}
        </h3>
        <div className="flex-1 mt-8 pl-2.5 max-sm:pr-8 sm:pr-8 md:pr-8">
          <p className="mb-3 text-justify">
            <span className="text-[36px] leading-[45px]">
              {aboutUsData[0]?.attributes.span}
            </span>{" "}
            {""}
            {aboutUsData[0]?.attributes.paragraph[0].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[1].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[2].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[3].text}
          </p>
        </div>
      </div>
      <div className="flex-1 mt-8 pl-8 max-sm:pr-8 sm:pr-8 md:pr-8">
        <h3 className="font-Quicksand text-[32px] font-bold leading-[40px] max-sm:pl-2 lg:p-2">
          {aboutUsData[0]?.attributes.paragraph[4].heading}
        </h3>
        <div className="font-Quicksand text-[16px] leading-[20px] pt-2 max-sm:p-2 max-sm:text-[15px] lg:p-2">
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[4].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[5].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[6].text}
          </p>
          <p className="mb-3 text-justify">
            {aboutUsData[0]?.attributes.paragraph[7].text}
          </p>
        </div>
      </div>
    </div>
  );
}
