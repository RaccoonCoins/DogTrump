import React from "react";
import TeamImg from "../../assets/img/team.png";
import LeftDog from "../../assets/img/left-dog.png";
import RightDog from "../../assets/img/right-dog.png";
function Tokenomics() {
  return (
    <>
      <div className="tokenomics-bg  w-full relative z-20 -mt-[390px] sm:-mt-[520px] lg:-mt-[600px]  2xl:-mt-[730px] sm:min-h-[1200px] lg:min-h-[1400px]">
        <div className="hidden sm:block absolute left-0 -bottom-8 lg:-bottom-16  xl:-bottom-24 max-w-[100px] lg:max-w-[200px] xl:max-w-[300px]">
          <img src={LeftDog} alt="left" className="w-full h-auto" />
        </div>
        <div className="hidden sm:block absolute right-0 -bottom-8 lg:-bottom-16 xl:-bottom-24 max-w-[100px] lg:max-w-[200px] xl:max-w-[300px]">
          <img src={RightDog} alt="left" className="w-full h-auto" />
        </div>
        <div className="max-w-[630px] px-4 mx-auto flex flex-col gap-y-4 md:gap-y-6 h-[250px] pt-[390px] sm:pt-[650px] lg:pt-[750px] 2xl:pt-[950px]">
          <h1 className="text-center font-babyFat  text-white text-3xl sm:text-4xl lg:text-[62px] tokenomics_text !leading-normal uppercase">
            TOKENOMICS
          </h1>
          <p className="max-w-[442px] mt-6 uppercase !leading-6 mx-auto font-babyFat text-black text-sm font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>
        <div className="2xl:max-w-[1126px] max-w-[1050px] mx-auto mt-32 sm:mt-[10rem] sm:mb-12 lg:mb-6 ">
          <img src={TeamImg} alt="team" className="w-full h-auto" />
        </div>
        <div className="relative z-10 w-full flex flex-col justify-center items-center  translate-y-10 sm:translate-y-0">
          <div className="supply-bg text-black text-[14px] lg:text-[20px] py-7 md:py-14 sm:px-10 md:px-20 lg:px-0 lg:py-0 sm:mx-auto lg:w-[580px] lg:h-[137px] w-full sm:w-[500px] h-[120px] flex flex-col justify-center items-center sm:absolute font-babyFat uppercase mx-2">
            Total Supply: 99,999,999,999
          </div>
        </div>
      </div>
    </>
  );
}

export default Tokenomics;
