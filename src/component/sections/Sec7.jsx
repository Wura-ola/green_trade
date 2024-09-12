import React from "react";

function Sec7() {
  return (
    <div className="mt-9 px-20 rounded-lg">
      <div className="bg-[#005700] text-white pt-16 px-7 pb-7 text-start rounded-lg ">
        <div className="flex items-center gap-7 mb-14">
          <div className="w-full">
            <h2 className="text-xl font-bold mb-6 text-[26px]">
              Know the Value of Your Waste
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
    </div>
  );
}

export default Sec7;
