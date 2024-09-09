import React from "react";

export default function Footers() {
  return (
    <footer className="w-[18] bg-white border-t border-[#E7E7E7] py-10">
      <div className="max-w-screen-xl px-4 mx-auto flex flex-row sm:flex-row justify-between">
        <div className="text-left ml-[1rem] space-y-4 mt-[0.2rem]">
          <h4 className="text-lg sm:text-xl font-Quicksand text-gray-[#222222] lg:opacity-40 font-bold max-sm:text-gray-400">
            Site Map
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="text-[#00844C] hover:text-[#005a40]">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-[#00844C] hover:text-[#005a40]">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-[#00844C] hover:text-[#005a40]">
                Schools
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 mr-[2rem]  lg:mr-[13rem]">
          <h4 className="text-lg sm:text-xl font-Quicksand text-[#222222] font-bold lg:opacity-40 max-sm:text-gray-400">
            Company
          </h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/about" className="text-[#00844C] hover:text-[#005a40]">
                About us
              </a>
            </li>
            <li>
              <a href="/term" className="text-[#00844C] hover:text-[#005a40]">
                Term of use
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[#00844C] hover:text-[#005a40]"
              >
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#00844C] hover:text-[#005a40]">
                Join us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
