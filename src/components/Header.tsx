import Image from "next/image";
import Logo from "../images/ logoh.png";
function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white justify-between text-gray-600 p-2 header-container">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl">
          <div className="mr-auto">
            <Image src={Logo} alt="#" />
          </div>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <button
              typeof="submit"
              className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium login-button"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
