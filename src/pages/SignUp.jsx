import React from "react";
import Logo from "../assets/Logo.png";
import Button from "../component/Button";
import face from "../assets/face.png";
import google from "../assets/google.png";
import app from "../assets/app.png";
function SignUp() {
  return (
    <div className="bg-[#C8FFC8] py-12 ">
      <div className="flex justify-center  m-auto max-w-[600px] bg-[#ffffff]  rounded-md p-9">
        <div className="">
          <a href="http://localhost:5173/">
            <img
              src={Logo}
              alt=""
              className="flex justify-center items-center m-auto"
            />
          </a>
          <h1 className="text-[#005A00] text-center font-bold mb-4">
            Sign Up with GreenTrade today and start making a difference!
          </h1>
          <form className="flex flex-col  text-start">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your full name here"
              id="name"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              id="phone"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="py-3 px-3  w-full border rounded-md border-[#D7D7D7] outline-0 mb-7 mt-3"
            />
            <Button
              text="Sign"
              className="bg-[#005A00] py-3 rounded-md text-white"
            />
          </form>
          <div className="font-bold mt-6">--OR--</div>
          <div className="font-bold mt-4">Sign Up with</div>
          <div className="flex items-center gap-2 justify-center mt-4">
            <img src={face} alt="" className="w-6" />
            <img src={google} alt="" className="w-6" />
            <img src={app} alt="" className="w-6" />
          </div>
          <hr className="bg-[#A9A9A9] text-lg my-3" />
          <p className="text-[#A9A9A9]">
            Already have an account?{" "}
            <span className="font-bold text-[#000000]">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
