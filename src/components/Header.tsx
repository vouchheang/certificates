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
          </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
