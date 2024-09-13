import React from "react";
import Sec1 from "./Sec1";
import Sec2 from "./sec2";
import Sec3 from "./Sec3";
import Marquee from "react-fast-marquee";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "./Sec8";
import Trading from "./Trading";

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
      <Sec7 />
      <Sec5 />
      <Trading />
      <Sec3 />
      <Sec6 />

      <Sec2 />

      <Sec8 />
    </div>
  );
}

export default Sections;
