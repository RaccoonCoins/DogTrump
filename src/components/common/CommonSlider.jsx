import React from "react";
import { StarIcon } from "./Icons";
import { trumpDogMarquee } from "./Helper";

const CommonSlider = ({ bg, textColor, svgColor, blur }) => {
  return (
    <div
      className={`max-w-[1920px] py-3 lg:py-5 overflow-x-hidden w-full mx-auto ${blur}`}
      style={{ backgroundColor: bg }}
    >
      <marquee behavior="" direction="left">
        <div className="flex gap-4 sm:gap-8 items-center">
          {trumpDogMarquee.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-8">
              <h2
                className=" font-normal font-babyFat leading-normal uppercase text-lg sm:text-[23px]"
                style={{ color: textColor }}
              >
                {item.title}
              </h2>
              <StarIcon svgColor={svgColor} />
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default CommonSlider;
