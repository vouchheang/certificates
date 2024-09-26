import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

interface MenuProps {
  headerData: any;
}

export default function Menu({ headerData }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex items-center space-x-2 sm:hidden">
        <Image
          src={`https://strapi-dev.seksa.today${headerData[0]?.attributes.language.data.attributes.url}`}
          width={25}
          height={30}
          alt="Language"
          className="mr-2"
        />
        <button
          className="text-[#717171]"
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
      </div>

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
        {headerData[0]?.attributes.navbar.map((item: any, index: number) => (
          <a
            key={index}
            href={item.path}
            className="text-[#717171] px-4 py-2 sm:px-0 sm:py-0 text-center sm:text-left"
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
        <div className="w-[1.5px] h-[30px] bg-[#EDEDED] mr-[20px] max-sm:hidden"></div>
        <div className="hidden sm:flex">
          <Image
            src={`https://strapi-dev.seksa.today${headerData[0]?.attributes.language.data.attributes.url}`}
            width={36}
            height={60}
            alt="Language"
          />
        </div>
        <a href="/login">
          <button
            typeof={headerData[0]?.attributes.button.type}
            className={`bg-[${headerData[0]?.attributes.button.color}] text-white rounded-[6px] sm:w-[73px] h-[40px] px-2 py-1 sm:px-0 sm:py-0 mt-4 sm:mt-0 mx-auto sm:mx-0 max-sm:w-[50%] max-sm:ml-[25%]`}
            onClick={handleLinkClick}
          >
            {headerData[0]?.attributes.button.label}
          </button>
        </a>
      </nav>
    </>
  );
}
