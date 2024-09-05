import React from "react";
import Logo2 from "../assets/Logo2.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
function Footer() {
  return (
    <div className="bg-[#005700] p-12 flex gap-10 items-start mt-12 text-[#ffffff] text-start">
      <div>
        <img src={Logo2} alt="" />
        <p className="text-[16px] font-medium">
          Empowering Communities, Reducing Waste, Building a Sustainable Future
        </p>
        <div className="flex gap-3 mt-5">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={linkdin} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[16px] font-bold">Join Hands with GreenTrade</p>
        <p className="text-[16px] font-medium">Sign Up as Recycler</p>
        <p className="text-[16px] font-medium">Sign Up as Collector</p>
        <p className="text-[16px] font-medium">Sign Up as Student/Parent</p>
        <p className="text-[16px] font-medium">Logistics</p>
      </div>
      <div>
        <p className="text-[16px] font-bold">Company</p>
        <p className="text-[16px] font-medium">Marketplace</p>
        <p className="text-[16px] font-medium">About Us</p>
        <p className="text-[16px] font-medium">FAQs</p>
        <p className="text-[16px] font-medium">Reviews</p>
      </div>
      <div>
        <p className="text-[16px] font-bold">Contact Us</p>
        <p className="text-[16px] font-medium">
          6, Brilla FM Road,Bola Amed Tunibu Street, Lagos State.
        </p>
        <p className="text-[16px] font-medium">+234-908-568-5069</p>
        <p className="text-[16px] font-medium">info@greentrade.ng</p>
      </div>
    </div>
  );
}

export default Footer;
