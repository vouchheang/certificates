function Footer() {
  return (
    <div className="bg-[#00844C] h-[59px] flex items-center justify-between px-10 text-white text-sm footer-container">
      <div className="flex space-x-2 footer-text sm:text-[12px] lg:ml-0 ">
        <span className=""> ©2023 Sala, Co.</span>
        <span>|</span>
        <a href="#" className="underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="underline">
          Release Notes
        </a>
      </div>
    </div>
  );
}

export default Footer;
