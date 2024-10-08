import React from "react";
import naira from "../../assets/naira2.svg";

import heart from "../../assets/heart.png";
import img4 from "../../assets/schoolbag.png";
import next from "../../assets/next.png";

function Trading() {
  return (
    <div>
      <div className="px-20 pb-10">
        <h1 className="text-center py-8 font-bold text-xl">
          What others are trading
        </h1>
        <div className="grid grid-cols-5 gap-7 bg-[#f6fff6] p-14">
          <div className="flex flex-col text-start">
            <img src={img4} alt="schoolbag" />
            <p>Bag</p>
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
            <p>Ugo.c.Ugo</p>
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
            <p>Bag</p>
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
        <div className="flex justify-end items-center text-[16px] py-3">
          <a href="" className="flex">
            View Listing
            <img src={next} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trading;
