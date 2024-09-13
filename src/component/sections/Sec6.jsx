import React from "react";
import Comment from "../../assets/Comments.png";

function Sec6() {
  return (
    <div className="p-10 ">
      <div className="flex flex-col text-start">
        <h2 className="font-bold text-2xl ml-10">What our Users say</h2>
        <div className="text-lg">
          <p className="">
            Hear from our community on how GreenTrade has transformed
          </p>
          <p>their shopping experience.</p>
        </div>
      </div>
      <div className="flex items-center mt-9">
        <div className="w-[30%]">
          <img src={Comment} alt="" />
        </div>
        <div className=" w-[70%] ">
          <div className="flex items-start gap-3">
            <div className="flex items-start flex-col gap-4 w-[60%]">
              <div className=" bg-[#DCFCE7] border border-[#b8b8b8]  p-7 text-start shadow-lg shadow-[#b8b8b8] rounded-md ">
                <p className="text-[#1E1E1E]">
                  GreenTrade has transformed the way our community approaches
                  recycling. The platform's student exchange system has been a
                  game-changer for local families, making educational resources
                  more accessible while reducing waste. The sustainability
                  challenges have also brought us together, creating a stronger
                  sense of community and shared responsibility for our
                  environment.
                </p>
                <p className="text-[#888888] text-[16.65px]">
                  --Sahara M., Comumnity Leader
                </p>
              </div>
              <div className=" bg-[#FAF2DE] border border-[#b8b8b8] p-7 ml-10 text-start shadow-lg shadow-[#b8b8b8] rounded-md">
                <p className="text-[#1E1E1E]">
                  GreenTrade has made a huge difference in my college life.
                  Through the student trade system, I've been able to exchange
                  textbooks and supplies, saving money and helping the
                  environment. The educational resources have also taught me a
                  lot about sustainability, and I feel like I'm part of
                  something bigger—making the world a better place.
                </p>
                <p className="text-[#888888]">
                  --— Emily T., University Student
                </p>
              </div>
            </div>

            <div className=" bg-[#FAF2DE] border border-[#b8b8b8]  p-5 text-start shadow-lg shadow-[#b8b8b8] rounded-md w-[40%]">
              <p className="text-[#1E1E1E]">
                As a small business owner, managing waste used to be a
                challenge. GreenTrade's comprehensive waste management features
                have made it easy for us to schedule pickups, track our
                recycling efforts, and even engage our employees in
                sustainability initiatives. It's more than just a platform—it's
                a partner in helping us achieve our environmental goals.
              </p>
              <p className="text-[#888888]">
                -— David L., Small Business Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec6;
