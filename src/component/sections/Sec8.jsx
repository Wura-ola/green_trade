import React from "react";
import lawma from "../../assets/lawma.png";
import water from "../../assets/water.png";
import lasepa from "../../assets/lasepa.png";
import resway from "../../assets/resway.png";
import pneebies from "../../assets/pneebies.png";
import rush from "../../assets/rush.png";
import Marquee from "react-fast-marquee";

function Sec8() {
  return (
    <div>
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

export default Sec8;
