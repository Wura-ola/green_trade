import "./App.css";
import {} from "framer-motion";
import Header from "./component/Header";
import Sec1 from "./component/sections/sec1";
import Sec2 from "./component/sections/sec2";
import Sec3 from "./component/sections/sec3";
import Sec4 from "./component/sections/Sec4";
import Sec5 from "./component/sections/Sec5";
import Marquee from "react-fast-marquee";
import Sec6 from "./component/sections/Sec6";
import Sec7 from "./component/sections/Sec7";
function App() {
  return (
    <div className="h-screen">
      <Header />
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

export default App;
