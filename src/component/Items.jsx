import React from "react";

function Items(props) {
  return (
    <div>
      <div className="flex bg-[#f0fff0] items-center rounded-xl px-3">
        <p>{props.text}</p>
        <img src={props.src} alt={props.alt} className="" />
      </div>
    </div>
  );
}

export default Items;
