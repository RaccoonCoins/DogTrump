import React, { useRef } from "react";
import belladog from "../../assets/img/Bella-BannerImage.png";
import { FileCopyIcon } from "../common/Icons";

const Trump = () => {
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
  };

  return (
    <div className="amarican-flag-bg overflow-hidden">
      <div className="max-w-[1450px] w-full mx-auto pt-[34px] px-4 justify-between flex max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col pt-12 sm:pt-20 lg:pt-[181px] lg:pb-16 gap-6 md:gap-10 max-lg:items-center">
          <div className="flex flex-col gap-4 md:gap-8 max-w-[684px] w-full">
            <h2 className="font-milkKids trump_hero_dog text-[36px] sm:text-[40px] md:text-[60px] xl:text-[86px] max-lg:text-center text-white leading-[86%] uppercase font-normal">
              Trump Dog!
            </h2>
            <p className="font-babyFat leading-[240%] font-normal text-[12px] sm:text-[14px] md:text-[16px] max-lg:text-center tracking-[1px] text-white">
             Welcome to the Trump Dog family! We are here to do our mission: Make America great again on Ton summer!
            </p>
          </div>
          <div className="flex max-sm:flex-col gap-4 max-sm:items-center sm:gap-8 max-lg:justify-center">
            <button
              type="submit"
              className="w-[156px] h-[55px] rounded-[8px] border-2 border-white bg-[#B80404] shadow-[1px_1px_0px_0px_#FFF] font-milkKids text-white font-normal text-[22px] uppercase hover:shadow-[1px_1px_10px_3px_#fff] transition duration-300 ease-in-out"
            >
              
              <a target="blank" rel="noopener" href="https://dedust.io/swap/TON/EQD4XTXWJewuNtnhKGTkZaP0wsLvQyNgkVXcPLW5zPTQdykb">BUY NOW</a>
            </button>
            <button
              type="submit"
              className="w-[188px] h-[55px] rounded-[8px] border-2 border-white bg-[#C6B9FF] shadow-[1px_1px_0px_0px_#FFF] font-milkKids text-[#0F0E0E] font-normal text-[22px] uppercase hover:shadow-[1px_1px_10px_3px_#fff] transition duration-300 ease-in-out"
            >
              <a target="blank" rel="noopener" href="https://www.geckoterminal.com/ton/pools/EQAiEvzjV4ZxycTIV3plilxETQcdvrnOR7mFDvAEe-njQnRt">Chart</a>
            </button>
          </div>
          <div className="max-w-[519px] max-lg:justify-center w-full py-[10px] px-[7px] border-[1.59px] border-[#E9E9E9] rounded-[12px] bg-[#284977]">
            <div className="flex gap-2 justify-between p-[15px] border-[1.59px] border-[#E9E9E9] w-full bg-[#C4C8CE] rounded-[10px]">
              <input
                ref={inputRef}
                className=" font-outfit font-bold text-[14px] tracking-[0.28px] bg-transparent w-full border-none outline-none uppercase text-[#504D4E]"
                type="text"
                value="Soon!!!!"
                readOnly
              />
              <button onClick={copyToClipboard}>
                <FileCopyIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-end 2xl:-mr-28">
          <img src={belladog} alt="bella dog" width={743} height={743} />
        </div>
      </div>
    </div>
  );
};

export default Trump;
