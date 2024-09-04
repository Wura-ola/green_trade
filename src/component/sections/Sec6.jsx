import React from "react";
import Comment from "../../assets/Comments.png";
// import { comment } from "postcss";

function Sec6() {
  return (
    <div className="p-10 ">
      <div className="flex flex-col text-start">
        <h2 className="font-bold text-2xl ml-10">What our Users say</h2>
        <p className="font-bold text-lg">
          Hear from our community on how GreenTrade has transformed
          <p>their shopping experience.</p>
        </p>
      </div>
      <div className="flex items-center mt-9">
        <div className="w-[30%]">
          <img src={Comment} alt="" />
        </div>
        <div className=" w-[70%] ">
          <div className="flex items-start gap-3">
            <div className="flex items-start flex-col gap-4">
              <div className=" bg-[#DCFCE7] border border-[#b8b8b8]  p-7 text-start shadow-lg shadow-[#b8b8b8] rounded-md">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti soluta quisquam alias sint aspernatur dolores id
                  provident est, reprehenderit assumenda fugiat veniam aut,
                  ipsam, odio ipsum. Quasi rem minima qui!
                </p>
                <p className="text-[#636363]">--Sahara M., Comumnity Leader</p>
              </div>
              <div className=" bg-[#DCFCE7] border border-[#b8b8b8] p-7 ml-10 text-start shadow-lg shadow-[#b8b8b8] rounded-md">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti soluta quisquam alias sint aspernatur dolores id
                  provident est, reprehenderit assumenda fugiat veniam aut,
                  ipsam, odio ipsum. Quasi rem minima qui!
                </p>
                <p className="text-[#636363]">--Sahara M., Comumnity Leader</p>
              </div>
            </div>

            <div className=" bg-[#DCFCE7] border border-[#b8b8b8]  p-5 text-start shadow-lg shadow-[#b8b8b8] rounded-md w-[100%]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti soluta quisquam alias sint aspernatur dolores id
                provident est, reprehenderit assumenda fugiat veniam aut, ipsam,
                odio ipsum. Quasi rem minima qui!
              </p>
              <p className="text-[#636363]">--Sahara M., Comumnity Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec6;
