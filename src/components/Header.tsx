import Link from "next/link";
import Image from "next/image";
import Logo from "../images/sala.png";

function Header() {
  return (
    <div className="pb-1">
  

    <header className="bg-white text-gray-600 font-Quicksand">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl ">
          <div className="mr-auto">
            <Image src={Logo} alt="#" />
          </div>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <button className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
