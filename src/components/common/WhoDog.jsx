import React from "react";
import DogThink from "../../assets/img/dog-think.png";
import DogText from "../../assets/img/dog-text.png";
function WhoDog() {
  return (
    <>
      <div className="w-full pt-80 sm:pt-28 xl:pt-48 who-is-dog-bg-img relative z-10 -mt-1 ">
        <div className="relative max-w-[400px] lg:max-w-[650px] xl:max-w-[900px] ">
          <img src={DogThink} alt="dog" className="w-full h-auto" />
          <div className="absolute 2xl:-right-[500px] -right-0 sm:-right-60 lg:-right-[300px] -top-48 sm:top-0 ">
            <img
              src={DogText}
              alt="dog text"
              className="w-full 2xl:max-w-[716px] max-w-[300px] sm:max-w-[350px] lg:max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoDog;
