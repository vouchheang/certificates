"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/sala.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] py-6 max-sm:py-4 shadow-sm z-50 max-sm:h-[4rem]">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="w-[140px] h-[25px]">
          <Image src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        <button
          className="sm:hidden text-[#717171] "
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            size="xl"
            className="max-md:ml-[1rem]"
          />
        </button>
        <nav
          id="primary-navigation"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row sm:space-x-6 font-Quicksand text-[16px] leading-[20px] font-bold 
            w-full sm:w-auto max-sm:mb-6 sm:mt-0 sm:justify-between sm:items-center
            absolute top-0 left-0 bg-white sm:static sm:bg-transparent z-40 sm:z-auto
            p-4 sm:p-0 sm:shadow-none shadow-lg transition-transform transform sm:translate-y-0
            ${
              isMenuOpen
                ? "h-screen translate-y-[4rem] overflow-hidden"
                : "-translate-y-full h-0"
            }`}
        >
          <a
            href="/"
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="/faq"
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            FAQ
          </a>
          <a
            href="/about"
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            About Us
          </a>
          <button
            className="bg-[#00844C] text-white rounded-[6px] w-full sm:w-[73px] h-[46px] px-2 py-1 sm:px-0 sm:py-0 mt-4 sm:mt-0 mx-auto sm:mx-0"
            onClick={handleLinkClick}
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
