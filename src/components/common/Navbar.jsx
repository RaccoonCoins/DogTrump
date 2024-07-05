/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logoImage from "../../assets/img/navbaar-logo.png";
import telegram from "../../assets/img/telegram.png";
import twitter from "../../assets/img/twitter.png";
import Sidebar from "./Sidebar"; // Import Sidebar component


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="navbaar-bg">
        <div className="max-w-[1450px] w-full mx-auto px-4  flex gap-2 justify-between py-3 sm:py-[23px]">
          <a href="#" className="flex gap-2 lg:gap-3 items-center">
            <img src={logoImage} alt="logo" width={59} height={59} />
            <p className="trump_logo_dog font-milkKids text-[26px] uppercase text-white">
              trump dog
            </p>
          </a>
          <ul className="hidden lg:flex p-[10px] gap-3 lg:gap-4 items-center">
            <li className="font-milkKids font-normal uppercase text-[18px] text-[#D7D7D7] transition-all duration-300 ease-in-out hover:text-[#B80404]">
              
            </li>
            <li className="font-milkKids font-normal uppercase text-[18px] text-[#D7D7D7] transition-all duration-300 ease-in-out hover:text-[#B80404]">
              
            </li>
          </ul>
          <div className="flex gap-4 lg:gap-[23px] items-center">
            <a
              href="#"
              target="_blank"
              className="shadow-[4.342px_4.342px_0px_0px_#000] max-md:hidden flex items-center justify-center bg-[#C6B9FF] rounded-[12px] border-[1.689px] border-black h-[54px] w-[56px] hover:shadow-[1px_1px_10px_3px_#000] transition-all duration-300 ease-in-out"
            >
              <div className="w-[45px] flex items-center justify-center h-[47px] border border-black rounded-[12px]">
              <a target="blank" rel="noopener" href="https://t.me/trumpdogonton"><img src={telegram} alt="footer logo"/></a> 
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              className="shadow-[4.342px_4.342px_0px_0px_#000] max-md:hidden flex items-center justify-center bg-[#F9DF94] rounded-[12px] border-[1.689px] border-black h-[54px] w-[56px] hover:shadow-[1px_1px_10px_3px_#000] transition-all duration-300 ease-in-out"
            >
              <div className="w-[45px] flex items-center justify-center h-[47px] border border-black rounded-[12px]">
              <a target="blank" rel="noopener" href="https://x.com/TrumpDogonTon"><img src={twitter} alt="footer logo" /> </a>
              </div>
            </a>
            <button
              type="submit"
              className="w-[156px] max-md:hidden h-[55px] rounded-[8px] border-2 border-white bg-[#B80404] shadow-[1px_1px_0px_0px_#FFF] font-milkKids text-white font-normal text-[22px] uppercase hover:shadow-[1px_1px_10px_3px_#FFF]  transition duration-300 ease-in-out"
            >
              <a target="blank" rel="noopener" href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NzI1Nzc4MTk3OCwidG9rZW5fYWRkcmVzcyI6IkVRQW5mT0h5U29pY212MmhYMEN4Wm5maFZsSllYYnNLY0dGTVE1SEl1Qjd3NGUzcCJ9">BUY NOW</a>
            </button>
            <button
              className="lg:hidden text-white"
              onClick={() => setSidebarOpen(true)} // Toggle sidebar visibility
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Navbar;
