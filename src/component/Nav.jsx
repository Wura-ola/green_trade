import React from "react";
import Logo from "../assets/Logo.png";
import Hamburger from "../assets/icons8-hamburger.svg";

import Button from "./Button";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className=" bg-gray-300 py-4 px-10 flex justify-between  ">
      <div className="lg:flex items-center  lg:justify-between lg:w-full">
        <div>
          <img src={Logo} alt="Logo" className="w-16 md:w-40" />
        </div>

        <li className={`mobile_menu list-none  ${isOpen ? "is-open" : ""}`}>
          <ul className="  flex  lg:items-center items-start lg: gap-6 ">
            <li className="md:mt-0 mt-10 ">
              <a
                href="#"
                className="  transition ease-in duration-300 hover:ease-out "
              >
                Company
              </a>
            </li>
            <li className="md:mt-0 mt-6 ">
              <a
                href="#about"
                className="transition ease-in duration-300 hover:ease-out "
              >
                Product
              </a>
            </li>

            <li className="md:mt-0 mt-6 ">
              <a href="#projects" className="">
                Resources
              </a>
            </li>
            <li className="md:mt-0 mt-6 ">
              <a href="#contact" className="">
                Help
              </a>
            </li>

            <Button
              className=" md:mt-0 mt-4 rounded border border-green-500 bg-white py-1 px-5"
              text="Contact Us"
            />
          </ul>
        </li>
      </div>

      <div className="toggle_bar lg:hidden ">
        <img src={Hamburger} alt="" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Nav;
