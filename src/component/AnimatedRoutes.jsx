import React from "react";
// import Home from "./pages/Home";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import TradingPlace from "../pages/TradingPlace";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tradingplace" element={<TradingPlace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
