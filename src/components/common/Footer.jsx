import React from "react";
import dogImg from "../../assets/img/footer-dog-img.png";
import { footerLogo } from "./Helper";
import CommonSlider from "./CommonSlider";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="footer-bg  relative z-10 -mt-16">
        <div className="max-w-[719px] pt-28 w-full mx-auto max-md:px-4">
          <div className="flex items-center justify-center gap-[17px] xl:pt-12">
            <img
              src={dogImg}
              className="w-16 h-16 sm:w-fit sm:h-fit"
              alt="footer dog img"
            />
            <div className="trump-dog text-[36px] sm:text-[46px] font-normal font-milkKids">
              TRUMP DOG
            </div>
          </div>
          <p className="text-[#D7D2D2] mt-5 max-w-[560px] mx-auto font-babyFat text-center text-sm font-normal leading-[230%]">
            Recently, a lot of Ton memecoins have been playing in the
            crypto backyard. These memes need a ruler; they need a BELLA is here
            for that.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-8 mt-8">
            {footerLogo.map((item, index) => (
              <a
                href="#"
                target="_blank"
                key={index}
                className="shadow-[4.342px_4.342px_0px_0px_#000] flex items-center justify-center bg-white rounded-[12px] border-[1.689px] border-black h-[72px] w-[75px] hover:shadow-[1px_1px_10px_3px_#000] transition-all duration-300 ease-in-out"
              >
                <div className="w-[57px] flex items-center justify-center h-[58px] border border-black rounded-[12px]">
                  <img src={item.img} alt="footer logo" />
                </div>
              </a>
            ))}
          </div> */}
          <p className="text-[#909090] mt-4 lg:mt-[113px]  text-center text-[24px] font-normal leading-[150%] font-pangolin">
            © Trump Dog {year} - All Rights Reserved
          </p>
        </div>
        <div className="mt-10 sm:mt-20">
          <CommonSlider
            blur=""
            bg="#A0353E"
            textColor="white"
            svgColor="fill-[#E9DDDD]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
