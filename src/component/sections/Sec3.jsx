import React from "react";
import arrow from "../../assets/arrow2.png";
import { motion } from "framer-motion";

function Sec3() {
  return (
    <div
      // data-aos="zoom-in"
      // data-aos-anchor-placement="top-center"
      // data-aos-easing="ease-out"
      // data-aos-duration="1000"
      className=" sec3 bg-[#005700] flex items-center justify-between px-10 py-14 gap-7"
    >
      {/* <div className="flex items-center justify-between px-10 py-12 gap-7"> */}
      <div className="font-bold text-white">Who we Serve</div>
      <div className="flex gap-4">
        <motion.div
          // animate={{ x: 100, scale: 1 }}
          // initial={{ scale: 0 }}
          className=""
        >
          <div className="bg-[#DCFCE7] py-8 px-5 text-start rounded-xl">
            <h3 className="font-bold mb-3">
              Environmental conscious consumers
            </h3>
            <p className=" w-72">
              Individuals who are passionate about sustainability and are
              looking for eco-friendly products and services to reduce their
              environmental impact
            </p>
          </div>
          <div className=" py-1 px-3 w-40 mt-5 text-white bg-[#002800] rounded-lg flex gap-3 items-center">
            <p>Learn more</p>
            <img src={arrow} alt="" />
          </div>
        </motion.div>

        <motion.div
        // animate={{ x: 100, scale: 0 }} initial={{ scale: 1 }}
        >
          <div className="bg-[#fdf1dc] py-5 px-5 text-start rounded-xl">
            <h3 className="font-bold mb-3">Business and vendors</h3>
            <p className="w-72">
              Small and large businesses that offer sustainable products or
              services, seeking a platform to reach eco-conscious customers and
              trade recyclable materials.
            </p>
          </div>
          <div className=" py-1 px-3 w-40 mt-5 text-white bg-[#002800] rounded-lg flex gap-3 items-center">
            <p>Learn more</p>
            <img src={arrow} alt="" />
          </div>
        </motion.div>
        <motion.div
        // animate={{ x: 100, scale: 1 }} initial={{ scale: 0 }}
        >
          <div className="bg-[#FFEEF7] py-5 px-5 text-start rounded-xl">
            <h3 className="font-bold mb-3">
              Students and Educational Institutions
            </h3>
            <p className=" w-72">
              Students and schools looking to trade or exchange used textbooks,
              school supplies, and other educational materials at a lower cost
              while promoting sustainability
            </p>
          </div>
          <div className=" py-1 px-3 w-40 mt-5 text-white bg-[#002800] rounded-lg flex gap-3 items-center">
            <p>Learn more</p>
            <img src={arrow} alt="" />
          </div>
        </motion.div>
        {/* </div> */}
      </div>
      <div></div>
    </div>
  );
}

export default Sec3;
