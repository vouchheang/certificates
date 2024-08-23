import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/ logoh.png'


function Header() {
  return (
    
    <header className="bg-white text-gray-600 font-Quicksand pl-[40px] px-[40px] p-[10px]">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl ">
         <div className="mr-auto">
           <Image src={logo} alt="Logo" />
         </div>
          <li>
            <Link href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/about">
              About us
            </Link>
          </li>
          <li>
          <button className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium">
            Login
          </button>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;
