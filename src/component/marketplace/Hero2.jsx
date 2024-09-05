import React from "react";

import Button from "../Button";

import hero_img from "../../assets/basket_img.png";

function Hero2() {
  return (
    <div className="flex items-center justify-between">
      <div className="p-24 flex flex-col items-start">
        <h2 className="font-bold text-[24px] flex items-start leading-9">
          Connect You with the
        </h2>
        <p className="font-bold text-[24px] leading-9">
          Future of <span className="text-[#008300]">Recycling</span>
        </p>

        <form className=" ">
          <input
            type="text"
            className="border  rounded-3xl py-4 w-[30rem]  mt-5 px-4 border-[#008300] outline-0  "
            placeholder="Search for recyclables or materials..."
          />
          <Button
            className=" bg-green-600 px-7 py-3 text-white m-[-30px] -ml-28 rounded-3xl"
            text="Search"
          />
        </form>
      </div>
      <div>
        <img src={hero_img} alt="hero_img" />
      </div>
    </div>
  );
}

export default Hero2;
