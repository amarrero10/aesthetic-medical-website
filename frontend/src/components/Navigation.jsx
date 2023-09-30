import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Hamburger from "hamburger-react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [openMenuTwo, setOpenMenuTwo] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleMenuTwo = () => {
    setOpenMenuTwo(!openMenuTwo);
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(false);
    setOpenMenuTwo(false);
  };
  return (
    <>
      {/* Mobile Menu */}
      <div className="flex justify-between items-center sm:hidden relative border-b-[1px] border-b-periwinkle py-3">
        <Link to="/" className="">
          <h1 className="pl-2">FMPM Weight Loss</h1>
        </Link>
        <div className=" flex items-center">
          <Link to="/contact-us" className=" h-10">
            <button className="mr-4 h-full bg-periwinkle text-offWhite px-3 rounded-md">
              Get in touch
            </button>
          </Link>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {isOpen && (
        <div className="bg-sage text-offWhite py-4 px-2 sm:hidden absolute w-screen text-2xl z-10">
          {/* Main Navigation Links */}
          <ul className="space-y-2">
            <Link to="/" onClick={closeMenu}>
              <li className="pb-1">Home</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li>About</li>
            </Link>
            {/* First Link with Inner Menu */}
            <li>
              <button className="flex justify-between items-center w-full" onClick={toggleMenu}>
                Services
                {openMenu ? (
                  <FaChevronUp className="w-6 h-6" />
                ) : (
                  <FaChevronDown className="w-6 h-6" />
                )}
              </button>
              {openMenu && (
                <ul className="pl-4 space-y-2">
                  <Link to="/service1" onClick={closeMenu}>
                    <li>Medical Weight Loss</li>
                  </Link>
                  <li>
                    <Link to="/service2">Vitamin Injections</Link>
                  </li>
                  <li>
                    <Link to="/service3">Telehealth</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* End First Link with Inner Menu */}
            <li onClick={closeMenu}>
              <Link to="/contact-us">Contact</Link>
            </li>
            {/* Second Link with Inner Menu */}
            {/* <li>
              <button className="flex justify-between items-center w-full" onClick={toggleMenuTwo}>
                Testing
                {openMenuTwo ? (
                  <FaChevronUp className="w-6 h-6" />
                ) : (
                  <FaChevronDown className="w-6 h-6" />
                )}
              </button>
              {openMenuTwo && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link to="/service1">Service 1</Link>
                  </li>
                  <li>
                    <Link to="/service2">Service 2</Link>
                  </li>
                  <li>
                    <Link to="/service3">Service 3</Link>
                  </li>
                </ul>
              )}
            </li> */}
            {/* End Second Link with Inner Menu */}
            <li>
              <Link to="/somepath">Locations</Link>
            </li>
            <li>
              <Link to="/somepath">Pricing</Link>
            </li>
          </ul>
        </div>
      )}
      {/* End Mobile Menu */}

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:px-2 h-20 ">
        <div>
          <Link to="/">
            <h1>FMPM Weight Loss</h1>
          </Link>
        </div>
        <div className="flex w-1/2 justify-between text-sage">
          <Link to="/about">
            <p>About</p>
          </Link>
          <p>Weight Loss</p>
          <p>Aesthetics</p>
          <p>Wellness</p>
          <p>Testimonials</p>
          <p>Our Team</p>
        </div>
        <div>
          <Link to="/contact-us">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* END DESKTOP MENU */}
    </>
  );
}

export default Navigation;
