import React from "react";

import lawma from "../../assets/lawma.png";
import water from "../../assets/water.png";
import lasepa from "../../assets/lasepa.png";
import resway from "../../assets/resway.png";
import pneebies from "../../assets/pneebies.png";
import rush from "../../assets/rush.png";
import Marquee from "react-fast-marquee";

function Sec7() {
  return (
    <div>
      <div className="bg-[#005700] text-white pt-16 px-20 pb-7 text-start ">
        <div className="flex items-center gap-7 mb-14">
          <div className="w-full">
            <h2 className="text-xl font-bold mb-6 text-[26px]">
              Value Your Reclyables
            </h2>
            <p className="text-[15px] font-medium">
              You can get an estimate of your worth Recyclables by selecting
              materials and the number of KG{" "}
            </p>
          </div>
          <form action="" className="flex flex-col w-full">
            <label htmlFor="items">Items</label>
            <input
              type="text"
              name="items"
              id="items"
              className=" py-4 px-4 outline-none border-none mb-10 bg-white rounded-md text-[#000000]"
              placeholder="select your recyclables materials"
            />
            <label htmlFor="quantity">Quantity in KG</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              className="  py-4 px-4 bg-white rounded-md mb-10 text-[#000000]"
              placeholder="select your recyclables materials"
            />
            <button className=" py-4 px-4 text-[18px] font-bold bg-white rounded-md text-[#005700]">
              Calculate
            </button>
          </form>
        </div>
        <p className="text-[12px] font-normal">
          Every calculation is an estimate till the collector pick your
          materials and weight them
        </p>
      </div>
      <div className="">
        <h1 className="text-center text-[32px] my-10 font-bold">
          Who we partner with
        </h1>
        <Marquee
          behavior=""
          direction=""
          pauseOnHover="true"
          onmouseout="this.start();"
        >
          <div className="flex  gap-10 ">
            <img src={lawma} alt="" />
            <img src={water} alt="" />
            <img src={lasepa} alt="" />
            <img src={resway} alt="" />
            <img src={pneebies} alt="" />
            <img src={rush} alt="" />
            <img src="" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Sec7;
