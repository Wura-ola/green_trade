import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Hero2 from "../component/marketplace/Hero2";
import Sec1 from "../component/marketplace/sec1";
import { motion } from "framer-motion";

function Marketplace() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exist={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Nav />
      <Hero2 />
      <Sec1 />
      <Footer />
    </motion.div>
  );
}

export default Marketplace;
