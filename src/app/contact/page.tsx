"use client";

import React, { useState, useEffect } from "react";
import Left from "../../images/Left.png";
import Right from "../../images/Right.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  useEffect(() => {
    const storedName = localStorage.getItem("contactName") || "";
    const storedEmail = localStorage.getItem("contactEmail") || "";
    const storedMessage = localStorage.getItem("contactMessage") || "";

    setName(storedName);
    setEmail(storedEmail);
    setMessage(storedMessage);
  }, []);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setter(value);
      localStorage.setItem(key, value);
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", email: "", message: "" };

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      hasError = true;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required";
      hasError = true;
    }

    if (message.trim() === "") {
      newErrors.message = "Message is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    console.log("Form Data:", formData);

    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });

    localStorage.removeItem("contactName");
    localStorage.removeItem("contactEmail");
    localStorage.removeItem("contactMessage");
  };

  return (
  
    <div
      className=" bg-[#FBFBFB] flex justify-center items-center mt-[50px] W-full h-auto pb-[5%]  "
      style={{
        backgroundImage: `url(${Left.src}), url(${Right.src})`,
      }}
    >
      <div className="w-full max-w-[906px]  flex flex-col gap-[30px] mt-[8%]">
        <h1 className="font-semibold text-[24px] md:text-[34px] leading-[30px] md:leading-[57.8px] text-center">
          Contact Us
        </h1>
        <form
          className="flex flex-col gap-[20px] md:gap-[30px] pl-[50px] pr-[50px] "
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col gap-[10px]">
            <label
              className="font-semibold text-[14px] leading-[17.5px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full h-[50px] font-medium text-[12px] leading-[17.5px] rounded-[6px] border-[1px] p-[18px_20px] ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleInputChange(setName, "contactName")}
            />
            {errors.name && (
              <p className="text-red-500 text-[12px]">{errors.name}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <label
              className="font-semibold text-[14px] leading-[17.5px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`w-full h-[50px] font-medium text-[12px] leading-[17.5px] rounded-[6px] border-[1px] p-[18px_20px] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange(setEmail, "contactEmail")}
              pattern="[a-z0-9.]+@[a-z0-9.]+.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <label
              className="font-semibold text-[14px] leading-[17.5px]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`w-full min-h-[185px] h-auto font-medium text-[12px] leading-[17.5px] rounded-[6px] border-[1px] p-[18px_20px] resize-y ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              id="message"
              placeholder="Write your message here......."
              value={message}
              onChange={handleInputChange(setMessage, "contactMessage")}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-[12px]">{errors.message}</p>
            )}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="
                bg-[#00844C] 
                font-semibold 
                text-[12px] sm:text-[14px] md:text-[16px] 
                w-full max-w-[150px] sm:max-w-[180px] md:max-w-[234px] 
                h-[40px] sm:h-[46px] md:h-[52px] 
                rounded-[6px] 
                text-[#FFFFFF] 
                leading-[14px] sm:leading-[16px] md:leading-[17.5px]
              "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  
  );
}

export default Contact;
