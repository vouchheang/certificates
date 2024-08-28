"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Left from "../../images/bg-l.png";
import Right from "../../images/bg-r.png";
import "../../style/about.css";

interface AboutUsData {
  attributes: {
    Title: string;
  };
}

interface BodyData {
  attributes: {
    Body: {
      Heading: string;
      span: string;
      Paragraph: {
        paragraph: string;
      }[];
    }[];
  };
}

export default function AboutUs() {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData[]>([]);
  const [bodyData, setBodyData] = useState<BodyData[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch("http://localhost:1337/api/about-us-pages?populate=*"),
          fetch(
            "http://localhost:1337/api/about-us-pages?populate[Body][populate]=*"
          ),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data1, data2] = await Promise.all([
          response1.json(),
          response2.json(),
        ]);

        setAboutUsData(data1.data);
        setBodyData(data2.data);

      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (!aboutUsData || !bodyData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className={`w-full overflow-y-hidden container min-h-screen`}>
      <div className="w-full h-[70px] header">
        <Header />
      </div>
      <div
        className="w-full pl-8 bg-[#FBFBFB] body"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
        }}>
        <h1 className={`font-Quicksand text-[34px] font-bold leading-[57.8px] text-center title`}>
          {aboutUsData[0]?.attributes.Title}
        </h1>
        <div className="w-full h-[364px] pt-[10px] px-0 body-history">
          <h3 className="font-Quicksand text-[32px] font-bold leading-[40px] text-left text">
            {bodyData[0]?.attributes.Body[0]?.Heading}
          </h3>
          <div className={`font-Quicksand text-[16px] leading-[20px]`}>
            <p className="mb-3">
              <span className="text-[36px] leading-[45px]">
                {bodyData[0]?.attributes.Body[0]?.span}
              </span>
               {bodyData[0]?.attributes.Body[0]?.Paragraph[0]?.paragraph}
            </p>
            <p className="mb-3">
              {bodyData[0]?.attributes.Body[0]?.Paragraph[1]?.paragraph}
            </p>
            <p className="mb-3">
              {bodyData[0]?.attributes.Body[0]?.Paragraph[2]?.paragraph}
            </p>
            <p className="mb-3">
              {bodyData[0]?.attributes.Body[0]?.Paragraph[3]?.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-8 body-mission">
        <h3 className="font-Quicksand text-[32px] font-bold leading-[40px] text">
          {bodyData[0]?.attributes.Body[1]?.Heading}
        </h3>
        <div className="font-Quicksand text-[16px] leading-[20px] pt-2">
          <p className="mb-3">
            {bodyData[0]?.attributes.Body[1]?.Paragraph[0]?.paragraph}
          </p>
          <p className="mb-3">
            {bodyData[0]?.attributes.Body[1]?.Paragraph[1]?.paragraph}
          </p>
          <p className="mb-3">
            {bodyData[0]?.attributes.Body[1]?.Paragraph[2]?.paragraph}
          </p>
          <p className="mb-3">
            {bodyData[0]?.attributes.Body[1]?.Paragraph[3]?.paragraph}
          </p>
        </div>
      </div>

      <div className="w-full footer">
        <Info />
        <Footer />
      </div>
    </div>
  );
}
