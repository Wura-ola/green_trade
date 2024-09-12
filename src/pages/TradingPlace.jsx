import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Hero3 from "../component/Tradingplace/Hero3";
import Sec1 from "../component/Tradingplace/Sec1";
import { motion } from "framer-motion";

export default function TradingPlace() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exist={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Nav />
      <Hero3 />
      <Sec1 />
      <Footer />
    </motion.div>
  );
}
