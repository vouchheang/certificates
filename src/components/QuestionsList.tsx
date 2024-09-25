"use client";
import { useState } from "react";
import Image from "next/image";
import path from "../images/Path.png";
import chevronup from "../images/chevron-down.png";

interface FaqItem {
  heading: string;
  text: string;
}

interface QuestionsListProps {
  questions: FaqItem[];
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column (Questions 1-3) */}
      <div className="flex-1">
        {questions.slice(0, 3).map((question, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="font-semibold">{question.heading}</h3>

              <div className="w-[24px] h-[24px]">
                <Image
                  src={selectedQuestion === index ? path : chevronup}
                  alt="Toggle Icon"
                  className={`${
                    selectedQuestion === index
                      ? "w-3.5 h-2 mt-1.5 ml-1.5"
                      : "w-6 h-6"
                  } text-[#717171]`}
                />
              </div>
            </div>
            {selectedQuestion === index && (
              <p className="text-sm sm:text-base mt-4">{question.text}</p>
            )}
          </div>
        ))}
      </div>

      {/* Right Column (Questions 4-6) */}
      <div className="flex-1">
        {questions.slice(3, 6).map((question, index) => (
          <div
            key={index + 3}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index + 3)}
            >
              <h3 className="font-semibold">{question.heading}</h3>

              <div className="w-[24px] h-[24px]">
                <Image
                  src={selectedQuestion === index + 3 ? path : chevronup}
                  alt="Toggle Icon"
                  className={`${
                    selectedQuestion === index + 3
                      ? "w-3.5 h-2 mt-1.5 ml-1.5"
                      : "w-6 h-6"
                  } text-[#717171]`}
                />
              </div>
            </div>
            {selectedQuestion === index + 3 && (
              <p className="text-sm sm:text-base mt-4">{question.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
