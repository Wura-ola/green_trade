import React from "react";
import Logo from "../assets/Logo.png";
import Button from "../component/Button";
import face from "../assets/face.png";
import google from "../assets/google.png";
import app from "../assets/app.png";
import { motion } from "framer-motion";

function Login() {
  return (
    <motion.div
      className="bg-[#C8FFC8] py-12"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exist={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="  m-auto max-w-[600px] bg-[#ffffff]  rounded-md p-8 ">
        <div className="flex justify-center flex-col">
          <a href="http://localhost:5173/">
            <img
              src={Logo}
              alt=""
              className="flex justify-center items-center m-auto"
            />
          </a>
          <h1 className="text-[#005A00] text-center font-bold mb-4">
            Welcome Back!
          </h1>
          <form className="flex flex-col  text-start">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              id="email"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <label htmlFor="phone">Password</label>
            <input
              type="text"
              placeholder="Enter password"
              id="phone"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <Button
              text="Login "
              className="bg-[#005A00] py-3 rounded-md text-white"
            />
          </form>
          <div className="font-bold mt-6">--OR--</div>
          <div className="font-bold mt-4">Login with</div>
          <div className="flex items-center gap-2 justify-center mt-4">
            <img src={face} alt="" className="w-6" />
            <img src={google} alt="" className="w-6" />
            <img src={app} alt="" className="w-6" />
          </div>
          <hr className="bg-[#A9A9A9] text-lg my-3" />
          <p className="text-[#A9A9A9]">
            Don't Have An Account{" "}
            <a href="http://localhost:5173/SignUp">
              <span className="font-bold text-[#000000]">Sign Up</span>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
