import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import Hamburger from "hamburger-react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  // const [openMenuTwo, setOpenMenuTwo] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  // const [showList, setShowList] = useState(false);
  const history = useHistory();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top when the "Home" link is clicked
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // const toggleMenuTwo = () => {
  //   setOpenMenuTwo(!openMenuTwo);
  // };

  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(false);
    // setOpenMenuTwo(false);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleRedirect = () => {
    history.push("/services");
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="flex justify-between items-center sm:hidden relative border-b-[1px] bg-[#5C7566] border-b-periwinkle py-3">
        <Link to="/" className="" onClick={closeMenu}>
          <img className=" h-14 pl-2" src={logo} alt="logo for Aura Wellness"></img>
        </Link>
        <div className=" flex items-center h-10">
          <a href="tel:813-755-4461">
            <button className="mr-4   bg-periwinkle text-offWhite px-6 py-4 rounded-md text-lg font-extrabold">
              Get in touch
            </button>
          </a>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#F0E9B0" />
        </div>
      </div>

      {isOpen && (
        <div className="bg-[#5C7463] text-offWhite py-4 px-2 sm:hidden absolute w-screen text-2xl z-10">
          {/* Main Navigation Links */}
          <ul className="space-y-2">
            <Link to="/" onClick={closeMenu}>
              <li className="pb-1">Home</li>
            </Link>
            <hr className=" text-[#015657] py-3" />
            <Link to="/about" onClick={closeMenu}>
              <li>About</li>
            </Link>
            <hr className=" text-periwinkle py-3" />
            {/* First Link with Inner Menu */}
            <li>
              <button className="flex justify-between items-center w-full" onClick={handleRedirect}>
                Services
                {openMenu ? (
                  <FaChevronUp className="w-6 h-6" onClick={toggleMenu} />
                ) : (
                  <FaChevronDown className="w-6 h-6" onClick={toggleMenu} />
                )}
              </button>
              {openMenu && (
                <ul className="pl-4 space-y-2">
                  <Link to="/services/medical-weight-loss" onClick={closeMenu}>
                    <li>- Medical Weight Loss</li>
                  </Link>
                  <hr className=" text-periwinkle py-3" />
                  <li>
                    <Link to="/services/telehealth">- Telehealth</Link>
                  </li>
                  <hr className=" text-periwinkle py-3" />
                  <li>
                    <Link to="/services/coolsculpting">- Coolsculpting</Link>
                  </li>
                  <hr className=" text-periwinkle py-3" />
                  <li>
                    <Link to="/services/coming-soon">- Coming Soon</Link>
                  </li>
                </ul>
              )}
            </li>
            <hr className=" text-periwinkle py-3" />
            {/* End First Link with Inner Menu */}
            <li onClick={closeMenu}>
              <Link to="/contact-us">Contact</Link>
            </li>
            <hr className=" text-periwinkle py-3" />

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
            {/* <li onClick={closeMenu}>
              <Link to="/locations">Locations</Link>
            </li>
            <hr className=" text-periwinkle py-3" /> */}
            {/* <li onClick={closeMenu}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <hr className=" text-periwinkle py-3" /> */}
          </ul>
        </div>
      )}
      {/* End Mobile Menu */}

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-2 top-0 fixed w-screen z-30 border-[1px] bg-[#5C7566] border-b-[#D2B86C]">
        <div>
          <Link to="/">
            <img className="w-36" src={logo} alt="logo for Aura Wellness"></img>
          </Link>
        </div>
        <div className="flex w-1/2 justify-between text-[#D2B86C] text-4xl ">
          <Link to="/" onClick={handleScrollToTop}>
            <p className="hover:underline">Home</p>
          </Link>
          <Link to="/about" onClick={handleScrollToTop}>
            <p className="hover:underline">About Us</p>
          </Link>
          <div
            className=" relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={handleRedirect} className="hover:underline">
              Services
            </button>
            {/* <DropdownMenu /> */}
            {isDropdownVisible && (
              <ul className="absolute bg-offWhite w-[200px] mr-10">
                <Link to="/services/medical-weight-loss" onClick={handleScrollToTop}>
                  <li className=" text-center py-3 text-lg hover:bg-periwinkle hover:text-offWhite">
                    Medical Weight Loss
                  </li>
                </Link>
                <Link to="/services/telehealth" onClick={handleScrollToTop}>
                  <li className=" text-center py-3 text-lg hover:bg-periwinkle hover:text-offWhite">
                    Telehealth
                  </li>
                </Link>
                <Link to="/services/coolsculpting" onClick={handleScrollToTop}>
                  <li className=" text-center py-3 text-lg hover:bg-periwinkle hover:text-offWhite">
                    Coolsculpting
                  </li>
                </Link>
                <Link to="/services/coming-soon" onClick={handleScrollToTop}>
                  <li className=" text-center py-3 text-lg hover:bg-periwinkle hover:text-offWhite">
                    Coming Soon
                  </li>
                </Link>
              </ul>
            )}
          </div>
          {/* <Link to="/locations" onClick={handleScrollToTop}>
            <p className="hover:underline">Locations</p>
          </Link> */}
          <Link to="/contact-us" onClick={handleScrollToTop}>
            <p className="hover:underline">Contact Us</p>
          </Link>
          {/* <Link to="/pricing" onClick={handleScrollToTop}>
            <p className="hover:underline">Pricing</p>
          </Link> */}
        </div>
        <div>
          <a href="tel:813-755-4461">
            <button className="mr-4 h-full bg-periwinkle text-offWhite px-6 py-4 rounded-md text-lg font-extrabold">
              Limited time promotion now!
            </button>
          </a>
        </div>
      </div>

      {/* END DESKTOP MENU */}
    </>
  );
}

export default Navigation;
