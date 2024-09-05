import React from "react";
import Sec1 from "./sec1";
import Sec2 from "./sec2";
import Sec3 from "./Sec3";
import Marquee from "react-fast-marquee";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";

function Sections() {
  return (
    <div>
      <Marquee
        behavior=""
        direction=""
        pauseOnHover="true"
        onmouseout="this.start();"
      >
        <Sec1 />
      </Marquee>
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
    </div>
  );
}

export default Sections;
