<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo.png';
import flag from '../images/KH-flag.png';
function Header() {
  return (
    <header className="bg-white text-gray-600 font-Quicksand border-b-2">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl p-5">
         <div className="mr-auto">
         <Image src={Logo} alt="#"/>
         </div>
          <div className=''>
            <Image src={flag} alt='#'/>
          </div>
          <li>
          <button className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium">
            Login
=======
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderData {
  attributes: {
    logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    navbar: {
      label: string;
      path: string;
    }[];
    button: {
      label: string;
      type: string;
      color: string;
    };
  };
}

export default function Header() {
  const [headerData, setheaderData] = useState<HeaderData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          fetch("http://178.128.19.249/api/headers?populate=*"),
        ]);

        if (!response.ok) {
          throw new Error("One or more network responses were not ok");
        }

        const [data] = await Promise.all([response.json()]);

        setheaderData(data.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };
    fetchData();

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
  if (!headerData) {
    return (
      <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-max-sm">
        Loading...
      </div>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] py-6 max-sm:py-4 shadow-sm z-50 max-sm:h-[4rem]">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="w-[140px] h-[25px]">
          <img
            src={`http://178.128.19.249${headerData[0]?.attributes.logo.data.attributes.url}`}
            alt="Logo"
            width={headerData[0]?.attributes.logo.data.attributes.width}
            height={headerData[0]?.attributes.logo.data.attributes.height}
            className="w-full h-auto"
          />
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
            href={headerData[0]?.attributes.navbar[0].path}
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            {headerData[0]?.attributes.navbar[0].label}
          </a>
          <a
            href={headerData[0]?.attributes.navbar[1].path}
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            {headerData[0]?.attributes.navbar[1].label}
          </a>
          <a
            href={headerData[0]?.attributes.navbar[2].path}
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            {headerData[0]?.attributes.navbar[2].label}
          </a>
          <button
            typeof={headerData[0]?.attributes.button.type}
            className={`bg-[${headerData[0]?.attributes.button.color}] text-white rounded-[6px] w-full sm:w-[73px] h-[46px] px-2 py-1 sm:px-0 sm:py-0 mt-4 sm:mt-0 mx-auto sm:mx-0`}
            onClick={handleLinkClick}
          >
            {headerData[0]?.attributes.button.label}
>>>>>>> vouchheang-mom
          </button>
        </nav>
      </div>
    </header>
  );
}
