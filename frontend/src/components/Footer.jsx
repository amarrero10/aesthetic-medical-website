import React from "react";
import { BsTelephone, BsInboxFill } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div className=" bg-[#5C7463] text-[#F0E9B0] text-2xl">
      <div className="flex flex-col items-center my-4">
        <div className="flex items-center mt-3 ">
          <a href="tel:813-755-4461" className="flex items-center text-2xl mb-6">
            <BsTelephone className="mr-2" />
            813-755-4461
          </a>
        </div>
        <div className="flex items-center mt-3 ">
          <a
            href="mailto:ask@theaurawellness.com?subject=Inquiry"
            className="flex items-center text-2xl mb-6"
          >
            <BsInboxFill className="mr-2" />
            ask@theaurawellness.com
          </a>
        </div>
        <div className=" flex sm:flex-row flex-col sm:w-[650px] justify-between items-center h-[150px] sm:h-fit mx-auto text-2xl sm:mt-0 -mt-5">
          <Link to="/privacy">
            <p>Privacy</p>
          </Link>
          <Link to="/accessibility">
            <p>Accessibility</p>
          </Link>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
          <Link to="/terms-and-conditions">
            <p>Terms & Conditions</p>
          </Link>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p>&copy; {new Date().getFullYear()} Aura Wellness. All Rights Reserved.</p>
      </div>
      <div className="sm: text-center pb-2">
        <p>
          Developed by{" "}
          <span className=" underline ">
            <a href="https://albert-dev.com/" target="_blank" rel="noopener noreferrer">
              Albert Marrero
            </a>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
