import React from "react";

function Sec7() {
  return (
    <div className="bg-[#005700] text-white pt-16 px-16 pb-7 text-start ">
      <div className="flex items-center gap-6 mb-14">
        <div className="w-full">
          <h2>Value Your Reclyables</h2>
          <p>
            You can get an estimate of your worth Recyclables by selecting
            materials and the number of KG{" "}
          </p>
        </div>
        <form action="" className="flex flex-col gap-10 w-full">
          <input
            type="text"
            name="Items"
            id=""
            className=" py-4 px-4 outline-none border-none bg-white rounded-md"
            placeholder="select your recyclables materials"
          />
          <input
            type="text"
            name="Items"
            id=""
            className="  py-4 px-4 bg-white rounded-md"
            placeholder="select your recyclables materials"
          />
          <button className=" py-4 px-4 bg-white rounded-md text-[#005700]">
            Calculate
          </button>
        </form>
      </div>
      <p>
        Every calculation is an estimate till the collector pick your mateirlas
        and weight them
      </p>
    </div>
  );
}

export default Sec7;
