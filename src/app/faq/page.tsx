"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import background from "../../images/background.png";
import Header2 from "@/components/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import path from "../../images/Path.png";
import chevronup from "../../images/chevron-down.png";

interface FaqData {
  attributes: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    picture: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    questionsList: {
      heading: string;
      text: string;
    }[];
    faqCard: {
      text: string;
    }[];
    form: {
      label: string;
      type: string;
      placeholder: string;
    }[];
    button: {
      label: string;
      type: string;
      color: string;
    }[];
  };
}
interface Faqicon {
  attributes: {
    faqCard: {
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
    button: {
      image: {
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
export default function FAQPage() {
  const [faqData, setFaqData] = useState<FaqData[]>([]);
  const [otherFaqData, setOtherFaqData] = useState<Faqicon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [emailinput, setEmail] = useState<string>("");
  const [Question, setQuestion] = useState<number | null>(null);
  const [description, setDescription] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const toggleQuestion = (index: number) => {
    setQuestion((prevQuestion) => (prevQuestion === index ? null : index));
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailinput);
    const formData = {
      emailinput,
      description,
    };

    console.log("Form Data:", formData);

    
    setEmail("");
    setDescription("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(`http://178.128.19.249/api/faqs?populate=*`),
          fetch(
            `http://178.128.19.249/api/faqs?populate[faqCard][populate]=*&populate[button][populate]=*`
          ),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data1, data2] = await Promise.all([
          response1.json(),
          response2.json(),
        ]);

        setFaqData(data1.data);
        setOtherFaqData(data2.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (!faqData || !otherFaqData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-max-sm">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="bg-gray-50 lg:mt-[4rem]"
      style={{ backgroundImage: `url(${background.src})` }}
    >

      <div className="py-12 max-md:mt-[3.5rem] flex justify-center">
        <div className="container text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-9 font-Quicksand text-[#000000]">
            {faqData[0]?.attributes.heading1}
          </h1>
          <div className="relative inline-block lg:right-[22rem] max-md:right-[11rem]">
            <input
              typeof={`${faqData[0]?.attributes.button[1].type}`}
              placeholder={`${faqData[0]?.attributes.button[1].label}`}
              value={emailinput}
              onChange={handleEmailChange}
              className={`max-md:w-[350px] absolute lg:w-[696px] xl:w-[800px]  h-[57px] border border-[${faqData[0]?.attributes.button[1].color}] rounded-[6px] p-4 pl-10`}
            />
            <div className="w-[18px] h-[18px] ">
              <img
                src={`http://178.128.19.249${otherFaqData[0]?.attributes.button[1].image.data.attributes.url}`}
                width={
                  otherFaqData[0]?.attributes.button[1].image.data.attributes
                    .width
                }
                height={
                  otherFaqData[0]?.attributes.button[1].image.data.attributes
                    .height
                }
                className="text-[#717171] absolute ml-6 mt-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 w-full px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-center">
            {faqData[0]?.attributes.heading2}
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4"
                >
                  <div
                    className="flex justify-between items-center "
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="font-semibold">
                      {faqData[0]?.attributes.questionsList[0].heading}
                    </h3>

                    <div className="w-[24px] h-[24px]">
                      <Image
                        src={Question === index ? path : chevronup}
                        alt="FAQ Image"
                        className={`${
                          Question === index
                            ? "w-3.5 h-2 mt-1.5 ml-1.5 "
                            : "w-6 h-6"
                        } text-[#717171]`}
                      />
                    </div>
                  </div>
                  {Question === index && (
                    <p className="text-sm sm:text-base mt-4">
                      {index === 1
                        ? `${faqData[0]?.attributes.questionsList[0].text}`
                        : `${faqData[0]?.attributes.questionsList[0].heading}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {[4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="font-semibold">
                      {index === 1
                        ? `${faqData[0]?.attributes.questionsList[0].text}`
                        : `${faqData[0]?.attributes.questionsList[0].heading}`}
                    </h3>
                    <div className="w-[24px] h-[24px]">
                      <Image
                        src={Question === index ? path : chevronup}
                        alt="FAQ Image"
                        className={`${
                          Question === index
                            ? "w-3.5 h-2 mt-3 ml-1.5"
                            : "w-6 h-6"
                        } text-[#717171]`}
                      />
                    </div>
                  </div>
                  {Question === index && (
                    <p className="text-sm  mt-4">
                      {index === 1
                        ? `${faqData[0]?.attributes.questionsList[0].text}`
                        : `${faqData[0]?.attributes.questionsList[0].heading}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 flex justify-center items-center">
        <div className="container mx-auto">
          <h2 className="sm:text-3xl font-Quicksand mb-8 text-center font-bold">
            {faqData[0]?.attributes.heading3}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-[6px] shadow-sm text-center p-6"
                >
                  <img
                    src={`http://178.128.19.249${otherFaqData[0]?.attributes.faqCard[0].icon.data.attributes.url}`}
                    width={
                      otherFaqData[0]?.attributes.faqCard[0].icon.data
                        .attributes.width
                    }
                    height={
                      otherFaqData[0]?.attributes.faqCard[0].icon.data
                        .attributes.height
                    }
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h4 className="font-Quicksand font-bold">
                    {faqData[0]?.attributes.faqCard[0].text}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-Quicksand font-bold text-center ">
            {faqData[0]?.attributes.heading4}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:w-[550px] lg:h-[437px] md:ml-[3rem] mt-[5rem]">
              <img
                src={`http://178.128.19.249${faqData[0]?.attributes.picture.data.attributes.url}`}
                width={faqData[0]?.attributes.picture.data.attributes.width}
                height={faqData[0]?.attributes.picture.data.attributes.height}
                alt="picture"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-6 lg:p-9 rounded-lg">
              <form onSubmit={handleSubmit}>
                <label
                  typeof={`${faqData[0]?.attributes.form[0].type}`}
                  htmlFor="email"
                  className="block text-lg font-Quicksand mb-2"
                >
                  {faqData[0]?.attributes.form[0].label}
                </label>
                <div className="mb-6 flex items-center mt-1 w-full pl-5 bg-[#FFFFFF] border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={emailinput}
                    onChange={handleEmailChange}
                    className="flex-grow pl-1 pr-3 rounded-lg outline-none "
                    placeholder={`${faqData[0]?.attributes.form[0].placeholder}`}
                  />
                  {emailinput !== "" && (
                    <FontAwesomeIcon
                      icon={emailinput ? faCircleCheck : faXmarkCircle}
                      className={`mr-[1rem] ${
                        emailinput ? "text-green-500" : "text-red-500"
                      }`}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    typeof={`${faqData[0]?.attributes.form[1].type}`}
                    htmlFor="description"
                    className="font-Quicksand"
                  >
                    {faqData[0]?.attributes.form[1].label}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    className="
                    w-full border border-[#EDEDED] rounded-[6px] p-4 
                    h-40 text-sm 
                    md:text-base 
                    lg:h-48 
                    xl:h-56"
                    placeholder={`${faqData[0]?.attributes.form[1].placeholder}`}
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>

                  <div className="flex justify-end">
                    <button
                      typeof={`${faqData[0]?.attributes.button[0].type}`}
                      onClick={handleSubmit}
                      className={`bg-[${faqData[0]?.attributes.button[0].color}] text-white font-Quicksand font-bold py-4 px-6 w-full rounded-md sm:w-auto sm:px-8 sm:py-5 md:w-auto md:px-10 md:py-6 lg:w-auto lg:px-[30px] xl:w-auto xl:px-[30px]`}
                    >
                      {faqData[0]?.attributes.button[0].label}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <Info /> */}
      {/* <Footer /> */}
    </div>
  );
}