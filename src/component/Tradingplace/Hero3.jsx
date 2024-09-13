import React from "react";

import Button from "../Button";

import hero_img from "../../assets/Basket_img.png";

function Hero3() {
  return (
    <div className="flex items-center justify-between">
      <div className="p-24 flex flex-col items-start">
        <h2 className="font-bold text-[24px] flex items-start leading-9">
          Give a new life
        </h2>
        <p className="font-bold text-[24px] leading-9">
          To your old <span className="text-[#008300]">School materials!</span>
        </p>
        <p className="text-start w-96 py-3">
          Reduce waste, trade, and share textbooks, bags, and other educational
          resources at affordable prices.
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

export default Hero3;
