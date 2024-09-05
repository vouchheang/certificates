"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import background from "../../images/background.png";
import pdf from "../../images/Group.png";
import image19 from "../../images/image 19.png";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import logo from "../../images/Frame 42.png";
import Header2 from "@/components/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import path from "../../images/Path.png";
import chevronup from "../../images/chevron-down.png";
import search from "../../images/search.png";

export default function FAQPage() {
  // const [password, setPassword] = useState<boolean>(false);
  const [emailinput, setEmail] = useState<boolean | null>(null);
  const [Question, setQuestion] = useState<number | null>(null);
  const [description, setDescription] = useState<string>("");

  const handleEmailClick = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(emailPattern.test(email));
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
    const formData = {
      emailinput: emailinput,
      description: description,
    };

    console.log("Form Data:", formData);
  };

  return (
    <div
      className="bg-gray-50 lg:mt-[4rem]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <Header2 />

      <div className="py-12 max-md:mt-[3.5rem] flex justify-center">
        <div className="container text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-9 font-Quicksand text-[#000000]">
            How May We Help You?
          </h1>
          <div className="relative inline-block lg:right-[22rem] max-md:right-[11rem]">
            <input
              type="text"
              placeholder="Enter your question here"
              className="max-md:w-[350px] absolute lg:w-[696px] xl:w-[800px]  h-[57px] border border-[#C3C3C3] rounded-[6px] p-4 pl-10"
            />
            <div className="w-[18px] h-[18px] ">
              <Image
                src={search}
                alt="FAQ Image"
                className="w-12 h-6 text-[#717171] absolute ml-6 mt-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 w-full px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-center">
            Frequently Asked Questions
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
                    <h3 className="font-semibold">What are you doing?</h3>
                    {/* <FontAwesomeIcon
                      icon={Question === index ? faChevronUp : faChevronDown}
                    /> */}
                    <div className="w-[24px] h-[24px] ">
                      <Image
                        src={Question === index ? path : chevronup}
                        alt="FAQ Image"
                        className="w-12 h-6 text-[#717171]"
                      />
                    </div>
                  </div>
                  {Question === index && (
                    <p className="text-sm sm:text-base mt-4">
                      {index === 1
                        ? "What is a basic definition of text? Text is the exact, original words written by an author. Text is also a specific work as written by the original author. Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun. What is a basic definition of text? Text is the exact, original words written by an author. Text is also a specific work as written by the original author. Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun. What is a basic definition of text? Text is the exact, original words written by an author. Text is also a specific work as written by the original author. Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun"
                        : "what are you doing?"}
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
                    <h3 className="font-semibold">What are you doing?</h3>
                    <div className="w-[24px] h-[24px] ">
                      <Image
                        src={Question === index ? path : chevronup}
                        alt="FAQ Image"
                        className="w-12 h-6 text-[#717171]"
                      />
                    </div>
                  </div>
                  {Question === index && (
                    <p className="text-sm  mt-4">what are you doing?</p>
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
            The Popular FAQ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-[6px] shadow-sm text-center p-6"
                >
                  <Image
                    src={pdf}
                    alt="FAQ Image"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h4 className="font-Quicksand font-bold">
                    How to Use Tool Sola Kits?
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-Quicksand font-bold text-center ">
            Help Center
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:w-[550px] lg:h-[437px] md:ml-[3rem] mt-[5rem]">
              <Image
                src={image19}
                alt="#"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-6 lg:p-9 rounded-lg">
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="block text-lg font-Quicksand mb-2"
                >
                  Email *
                </label>
                <div className="mb-6 flex items-center mt-1 w-full pl-5 bg-[#FFFFFF] border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleEmailClick}
                    className="flex-grow pl-1 pr-3 rounded-lg outline-none "
                    placeholder="example@gmail.com"
                  />
                  {emailinput !== null && (
                    <FontAwesomeIcon
                      icon={emailinput ? faCircleCheck : faXmarkCircle}
                      className={`mr-[1rem] ${
                        emailinput ? "text-green-500" : "text-red-500"
                      }`}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="description" className="font-Quicksand">
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    className="
                    w-full border border-[#EDEDED] rounded-[6px] p-4 
                    h-40 text-sm 
                    md:text-base 
                    lg:h-48 
                    xl:h-56"
                    placeholder="Compose an epic.."
                    value={description}
                    onChange={handleDescriptionChange} // Use onChange to capture text input
                  ></textarea>

                  <div className="flex justify-end">
                    <button
                      type="button" // No form submission, so use type="button"
                      onClick={handleSubmit} // Handle click event to log formData
                      className="bg-[#00844C] text-white font-Quicksand font-bold py-4 px-6 w-full rounded-md sm:w-auto sm:px-8 sm:py-5 md:w-auto md:px-10 md:py-6 lg:w-auto lg:px-[30px] xl:w-auto xl:px-[30px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Info />
      <Footer />
    </div>
  );
}
