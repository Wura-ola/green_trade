import React from "react";
import Button from "./Button";
import hero_img from "../assets/basket_img.png";

function Hero() {
  return (
    <div className="flex items-center">
      <div className="p-24 flex flex-col items-start">
        <h2 className="font-bold text-xl flex items-start ">
          Empower Your Green Lifestyle with GreenTrade
        </h2>
        <p>Buy, Sell and Trade Sustainable Goods Effortlesly</p>
        <div className="flex items-center gap-4 mt-7">
          <Button
            className="bg-green-600 py-3 px-7  text-white rounded-3xl"
            text="Join the Green Movement"
          />
          <a href="http://localhost:5173/MarketPlace">
            <Button
              className="bg-green-600 py-3 px-7 rounded-3xl text-white"
              text="Explore Our Marketplace"
            />
          </a>
        </div>
        <div className="">
          <input
            type="text"
            className="border border-green-500 mt-7 rounded-3xl py-4 px-8 pr-64"
            placeholder="Search for what to buy or exchange"
          />
          <Button
            className=" bg-green-600 px-7 py-3 text-white m-[-30px] -ml-28 rounded-3xl"
            text="Search"
          />
        </div>
      </div>
      <div>
        <img src={hero_img} alt="hero_img" />
      </div>
    </div>
  );
}

export default Hero;
