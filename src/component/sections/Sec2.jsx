import React from "react";
import rectangle from "../../assets/rectangle.png";
import arrow from "../../assets/arrow.png";

function Sec2() {
  return (
    <div className=" my-8 flex justify-between m-auto items-center text-start mx-20 py-7 px-16 g bg-[#f5fabf] rounded-lg ">
      <div className=" w-1/2">
        <h1 className=" font-bold text-lg pb-5">Who we are</h1>
        <p className="">
          At GreenTrade, we believe that sustainability starts with
          community-driven actions and innovative solutions. Our mission is to
          transform how waste is managed by creating a platform that not only
          facilitates recycling but also empowers individuals, businesses, and
          educational institutions to take part in a larger movement toward
          environmental stewardship.
        </p>
        <div className=" pt-6 flex gap-3 items-center">
          <p>Learn more</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="w-1/4">
        <img src={rectangle} alt="" className=" w-96" />
      </div>
    </div>
  );
}

export default Sec2;
