import Link from "next/link";
import Image from "next/image";
import Logo from "../images/Frame 42.png";
import flag from "../images/KH-flag.png";

interface HeaderProps {
  btnPath: string;
}

function Header({ btnPath }: HeaderProps) {
  return (
    <header className="bg-white fixed top-0 left-0 w-full font-Quicksand border-b-2">
      <nav>
        <ul className="flex justify-end items-center space-x-6 text-xl p-3">
          <div className="mr-auto">
            <a href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={50}
                className="max-sm:w-[80%]"
              />
            </a>
          </div>
          <div>
            <Image src={flag} alt="Flag" width={30} height={20} />
          </div>
          <li>
            <Link href={btnPath}>
              <button className="rounded-xl border-2 bg-green-800 text-white px-4 py-2.5 text-[17px] font-medium max-sm:text-sm">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
