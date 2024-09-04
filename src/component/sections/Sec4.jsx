import React from "react";
// import naira from "../assets/naira2.svg";
import naira from "../../assets/naira2.svg";
import heart from "../../assets/heart.png";
import img1 from "../../assets/cosmetic.png";
import img2 from "../../assets/collective.png";
import img3 from "../../assets/robot.png";
import img4 from "../../assets/schoolbag.png";
import Marquee from "react-fast-marquee";

function Sec4() {
  return (
    <div className=" mt-20 p-10">
      <div className="grid grid-cols-3">
        {" "}
        <div className="flex items-center flex-col">
          <img src={img1} alt="Cosmetics" />
          <p className=" text-center p-12">
            Shop a wide range of sustainable goods
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={img2} alt="collectives" />
          <p className="text-center p-12">
            Easily trade and sell with like minded individuals
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={img3} alt="robot" />
          <p className="p-12">
            Support environmental initiatives with every purchase
          </p>
        </div>
      </div>
      {/* <Marquee> */}
      <div className="grid grid-cols-5 gap-7 bg-[#f6fff6] p-14">
        <div className="flex flex-col text-start">
          <img src={img4} alt="schoolbag" />
          <p>Ugo.C.Ugo</p>
          <p className="flex items-center">
            {" "}
            <img src={naira} alt="" className="w-3" />
            5000
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              {" "}
              <img src={naira} alt="" className="w-3" />
              <small className="line-through">10000</small>
            </p>
            <img src={heart} alt="" />
          </div>
        </div>
        <div className="flex flex-col text-start">
          <img src={img4} alt="schoolbag" />
          <p>Ugo.C.Ugo</p>
          <p className="flex items-center">
            {" "}
            <img src={naira} alt="" className="w-3" />
            5000
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              {" "}
              <img src={naira} alt="" className="w-3" />
              <small className="line-through">10000</small>
            </p>
            <img src={heart} alt="" />
          </div>
        </div>
        <div className="flex flex-col text-start">
          <img src={img4} alt="schoolbag" />
          <p>Ugo.C.Ugo</p>
          <p className="flex items-center">
            {" "}
            <img src={naira} alt="" className="w-3" />
            5000
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              {" "}
              <img src={naira} alt="" className="w-3" />
              <small className="line-through">10000</small>
            </p>
            <img src={heart} alt="" />
          </div>
        </div>
        <div className="flex flex-col text-start">
          <img src={img4} alt="schoolbag" />
          <p>Ugo.C.Ugo</p>
          <p className="flex items-center">
            {" "}
            <img src={naira} alt="" className="w-3" />
            5000
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              {" "}
              <img src={naira} alt="" className="w-3" />
              <small className="line-through">10000</small>
            </p>
            <img src={heart} alt="" />
          </div>
        </div>
        <div className="flex flex-col text-start">
          <img src={img4} alt="schoolbag" />
          <p>Ugo.C.Ugo</p>
          <p className="flex items-center">
            {" "}
            <img src={naira} alt="" className="w-3" />
            5000
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              {" "}
              <img src={naira} alt="" className="w-3" />
              <small className="line-through">10000</small>
            </p>
            <img src={heart} alt="" />
          </div>
        </div>
      </div>
      {/* </Marquee> */}
    </div>
  );
}

export default Sec4;
