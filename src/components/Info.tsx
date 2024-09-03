import Image from "next/image";
import Logo from "../images/logo.png";
import Facebook from "../images/fb.png";
import Instagram from "../images/ig.png";
import Telegram from "../images/tele.png";
import Map from "../images/map.png";
import Add from "../images/@.png";
import Call from "../images/call.png";

function Info() {
  return (
    <div className="w-full bg-[#f9f9f9] flex flex-col lg:flex-row justify-between items-start py-10 px-8">
      <div className="flex flex-col lg:w-2/3">
        <div className="mb-6">
          <Image src={Logo} alt="Logo" className="w-[100px] h-auto" />
        </div>
        <p className="text-base text-gray-800 mb-4">
          Sala is an edtech startup based in Cambodia with a simple vision to
          enrich students' journeys. As a two-sided marketplace, Sala helps high
          school students to make better college majors & career choices and for
          institutions to connect and engage with our student community and
          enable them to manage their academic operations through our school
          management suite.
        </p>
        <div className="flex space-x-4">
          <Image src={Facebook} alt="Facebook" className="w-[24px] h-[24px]" />
          <Image
            src={Instagram}
            alt="Instagram"
            className="w-[24px] h-[24px]"
          />
          <Image src={Telegram} alt="Telegram" className="w-[24px] h-[24px]" />
        </div>
      </div>

      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 opacity-80 mb-4">
          Find Us
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <Image
              src={Map}
              alt="Map"
              className="w-[20px] h-[20px] opacity-50"
            />
            <span className="ml-3">
              House #5 St 550, Phnom Penh 12151, Cambodia
            </span>
          </li>
          <li className="flex items-center text-gray-600">
            <Image
              src={Add}
              alt="Email"
              className="w-[18px] h-[18px] opacity-50"
            />
            <span className="ml-3">Contact@sala.co</span>
          </li>
          <li className="flex items-center text-gray-600">
            <Image
              src={Call}
              alt="Phone"
              className="w-[20px] h-[20px] opacity-50"
            />
            <span className="ml-3">
              +855 10 240 042 <br />
              +855 12 240 042
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
