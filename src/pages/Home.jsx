import React from "react";
// import Header from "../component/Header";
import Header from "../component/Header";
import Sections from "../component/sections/Sections";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exist={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Header />
      <Sections />
      <Footer />
    </motion.div>
  );
}

export default Home;
