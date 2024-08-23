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
    <div className="w-full h-auto pt-16 pb-5 pl-10 gap-8 flex justify-between">
      <div className="w-full h-auto">
        <Image src={Logo} alt="#" className="mb-8" />
        <p className="font-Quicksand text-base text-left mb-3 text-black">
          Sala is an edtech startup based in Cambodia with a simple vision to
          enrich students' journeys. As a two-sided marketplace, Sala helps high
          school students to make better college majors & career choices and for
          institutions to connect and engage with our student community and
          enable them to manage their academic operations through our school
          management suite.
        </p>
        <div className="flex gap-4">
          <Image src={Facebook} alt="#"/>
          <Image src={Instagram} alt="#"/>
          <Image src={Telegram} alt="#"/>
        </div>
      </div>
      <div>
        <h2 className="font-quicksand text-black opacity-40 text-xl font-bold">
          Find Us
        </h2>
        <div className="w-[361px] h-[130px] mt-4">
          <ul>
            <li className="flex gap-2">
              <Image
                src={Map}
                alt="#"
                className="opacity-50 w-[22px] h-[22px]"/>
              <a href="#" className="text-black font-[15px]">
                House #5 St 550, Phnom Penh 12151, Cambodia
              </a>
            </li>
            <li className="flex gap-2 w-full mt-2">
              <Image
                src={Add}
                alt="#"
                className="opacity-40 w-[18px] h-[18px] mt-1"/>
              <a href="#" className="text-black font-[15px]">
                Contact@sala.co
              </a>
            </li>
            <li className="flex gap-2 w-full mt-2">
              <Image
                src={Call}
                alt="#"
                className="opacity-50 w-[22px] h-[22px]"/>
              <a href="#" className="text-black font-[15px]">
                +855 10 240 042 <br/>
                +855 12 240 042
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
