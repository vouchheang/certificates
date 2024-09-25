"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

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

interface FaqFormProps {
  faqData: FaqData[];
}

export default function FaqForm({ faqData }: FaqFormProps) {
  const [emailInput, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailInput);

    if (isValidEmail) {
      const formData = {
        emailInput,
        description,
      };
      console.log("Form Data:", formData);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "a4443378-7e6b-4a8e-833a-4c1d0e92782d",
            email: emailInput,
            message: description,
          }),
        });

        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    }

    setEmail("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="block text-lg font-Quicksand mb-2">
        {faqData[0]?.attributes.form[0].label}
      </label>
      <div className="mb-6 flex items-center mt-1 w-full pl-5 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm h-[50px]">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={emailInput}
          onChange={handleEmailChange}
          className="flex-grow pl-1 pr-3 rounded-lg outline-none"
          placeholder={faqData[0]?.attributes.form[0].placeholder}
        />
        {emailInput && (
          <FontAwesomeIcon
            icon={emailInput ? faCircleCheck : faXmarkCircle}
            className={`mr-4 ${emailInput ? "text-green-500" : "text-red-500"}`}
          />
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="description" className="font-Quicksand">
          {faqData[0]?.attributes.form[1].label}
        </label>
        <textarea
          id="description"
          className="w-full border border-[#EDEDED] rounded-[6px] p-4 h-40 text-sm md:text-base lg:h-48 xl:h-56"
          placeholder={faqData[0]?.attributes.form[1].placeholder}
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>

        <div className="flex justify-end max-sm:w-[180px] max-sm:h-[50px]">
          <button
            type="submit"
            className={`bg-[${faqData[0]?.attributes.button[0].color}] text-white font-Quicksand font-bold w-full rounded-md sm:w-auto sm:px-8 sm:py-5 md:w-auto md:px-10 md:py-4 lg:w-auto lg:px-[30px] xl:w-auto xl:px-[30px]`}
          >
            {faqData[0]?.attributes.button[0].label}
          </button>
        </div>
      </div>
    </form>
  );
}
