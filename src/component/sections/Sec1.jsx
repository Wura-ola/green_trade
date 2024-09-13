import React from "react";
import bag from "../../assets/bag.png";
import can from "../../assets/can.png";
import nylon from "../../assets/nylon.png";
import carton from "../../assets/carton.png";
import shampoo from "../../assets/shampoo.png";
import essay from "../../assets/Essay.png";
import Items from "../items";

function Sec1() {
  return (
    <div className="grid grid-cols-6  mt-10 gap-4">
      <Items text="Shopping bag" src={bag} className=" bg-[#f0fff0]" />
      <Items text="Shopping bag" src={can} className=" bg-[#f0fff0]" />
      <Items text="Shopping bag" src={nylon} className=" bg-[#f0fff0]" />
      <Items text="Shopping bag" src={carton} className=" bg-[#f0fff0]" />
      <Items text="Shopping bag" src={shampoo} className=" bg-[#f0fff0]" />
      <Items text="Shopping bag" src={essay} className=" bg-[#f0fff0]" />
    </div>
  );
}

export default Sec1;
