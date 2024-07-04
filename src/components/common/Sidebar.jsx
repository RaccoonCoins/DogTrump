import React from "react";
import telegram from "../../assets/img/telegram.png";
import twitter from "../../assets/img/twitter.png";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <aside
        className={`w-full bg-[#1A365E] h-screen fixed top-0 transition-all duration-200 ease-in z-20 lg:hidden ${
          isSidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <span
          className="absolute right-3 top-5 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="flex items-center justify-center flex-col gap-5 h-full">
          <ul className="flex flex-col items-center justify-center space-y-6 ">
            <li>
              
            </li>
            <li>
              
            </li>
          </ul>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <div className="shadow-[4.342px_4.342px_0px_0px_#000] flex items-center justify-center bg-[#C6B9FF] rounded-[12px] border-[1.689px] border-black h-[54px] w-[56px]">
                <div className="w-[45px] flex items-center justify-center h-[47px] border border-black rounded-[12px]">
                  <img src={telegram} alt="footer logo" />
                </div>
              </div>
              <div className="shadow-[4.342px_4.342px_0px_0px_#000] flex items-center justify-center bg-[#F9DF94] rounded-[12px] border-[1.689px] border-black h-[54px] w-[56px]">
                <div className="w-[45px] flex items-center justify-center h-[47px] border border-black rounded-[12px]">
                  <img src={twitter} alt="footer logo" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-[156px] h-[55px] rounded-[8px] border-2 border-white bg-[#B80404] shadow-[1px_1px_0px_0px_#FFF] font-milkKids text-white font-normal text-[22px] uppercase hover:border-[#B80404] hover:text-[#B80404] hover:bg-white transition duration-300 ease-in-out"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
