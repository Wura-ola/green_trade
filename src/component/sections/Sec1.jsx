import React from "react";
import bag from "../../assets/bag.png";
import can from "../../assets/Can.png";
import nylon from "../../assets/Nylon.png";
import carton from "../../assets/Carton.png";
import shampoo from "../../assets/Shampoo.png";
import essay from "../../assets/Essay.png";
import Items from "../Items";

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
