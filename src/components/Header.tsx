import Image from 'next/image';
import Logo from '@/images/mainlog.png'
import flat from '@/images/KH-flag.png'

function Header() {
  return (
    <header className="fixed left-0 right-0 bg-white text-gray-600 font-Quicksand border-b-2">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl h-[70px] p-10">
         <div className="mr-auto">
         <Image src={Logo} alt="logo" />
         </div>
          <div>
          <Image src={flat} alt="flat" />
          </div>
          <button className="rounded-xl border-2 bg-green-800 text-white px-6 py-2 text-lg font-medium">
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
