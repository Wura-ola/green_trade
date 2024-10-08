import React from "react";
import woman from "../../assets/woman3.png";
import arrow_right from "../../assets/arrow-right.png";
import arrow_left from "../../assets/arrow-left.png";

function Sec5() {
  return (
    <div className="p-20">
      <div>
        <div className="flex flex-col text-start mb-12 ">
          {" "}
          <h2 className="font-bold text-xl">How GreenTrade Works</h2>
          <p className="font-bold text-[#424242]">
            It's easy to make a differnce.Follow the steps to start trading
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="">
            <div className="flex items-start mt-6 gap-4">
              <button
                disabled="disabled"
                className=" rounded-full bg-[#008300] px-4 py-2 text-[#fff]"
              >
                1
              </button>
              <div className="border border-[#b8b8b8]  p-7 text-start rounded-lg">
                <h3 className="text-[#636363] font-semibold">Sign Up</h3>
                <p className="text-[#636363] pt-2">
                  Create your free accout in seconds
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-end ml-32 gap-4">
              <button
                disabled="disabled"
                className=" rounded-full bg-[#008300] px-4 py-2 text-[#fff] "
              >
                2
              </button>

              <div className="flex gap-4 ">
                <img src={arrow_right} alt="" />
                <div className="border border-[#b8b8b8]  p-7 text-start rounded-md">
                  <h3 className="text-[#636363] font-semibold">List items</h3>
                  <p className="text-[#636363] pt-2">
                    Post recyclables or educational materials you want to trade.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  items-start rounded mt-10 gap-4">
              <button
                disabled="disabled"
                className=" rounded-full bg-[#008300] px-4 py-2 text-[#fff]"
              >
                3
              </button>
              <div className="flex  flex-row-reverse gap-4">
                <img src={arrow_left} alt="" />
                <div className="border border-[#b8b8b8] p-7 text-start rounded-md">
                  <h3 className="text-[#636363] font-semibold">Connect</h3>
                  <p className="text-[#636363]">
                    Find and connect with buyers or traders.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 ">
              <button
                disabled="disabled"
                className=" rounded-full bg-[#008300] px-4 py-2 text-[#fff]"
              >
                4
              </button>
              <div className="flex ml-32 gap-4">
                <img src={arrow_right} alt="arrow-right" />
                <div className="border border-[#b8b8b8]  p-7 text-start">
                  <h3 className="text-[#636363] font-semibold">
                    Trade and Save
                  </h3>
                  <p className="text-[#636363]">
                    Complete transactions and contribute to sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={woman} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
