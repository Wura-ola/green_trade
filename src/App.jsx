import "./App.css";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./component/AnimatedRoutes";
function App() {
  return (
    <div className="h-screen App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
