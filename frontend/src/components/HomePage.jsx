import React from "react";
import Typewriter from "typewriter-effect";
import portrait from "../assets/portrait.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import TestimonialSlider from "./Testimonials/TestimonialSlider";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="sm:mt-12">
      <div className=" absolute w-full -z-10 sm:top-52 top-[550px] ">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 99.55980861244021,357.11961722488036 199.11961722488041,414.2392344497608 306,387 C 412.8803827751196,359.7607655502392 527.0813397129187,248.1626794258373 622,225 C 716.9186602870813,201.8373205741627 792.5550239234449,267.11004784689 887,287 C 981.4449760765551,306.88995215311 1094.6985645933014,281.3971291866029 1190,276 C 1285.3014354066986,270.6028708133971 1362.6507177033493,285.30143540669854 1440,300 C 1440,300 1440,0 1440,0 L 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#7dd1c1"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
      <div>
        <div className="sm:flex grid gap-5 sm:gap-0 w-screen sm:w-full p-2 justify-center items-center sm:h-[800px]">
          <div className=" h-[300px] w-full mb-10 grid sm:mr-2 mt-5">
            <div className=" flex justify-center">
              <p className=" text-2xl font-bold sm:text-4xl">Embark on a journey of </p>
            </div>
            <div className=" text-2xl font-bold pl-1 sm:text-4xl text-periwinkle text-center">
              <Typewriter
                options={{
                  strings: [" Wellness!", " Transformation!", " Confidence!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className=" text-center">
              We prioritize your unique needs to enhance your quality of life. Experience a
              transformative approach to weight loss and well-being today!
            </p>
            <p className=" text-darkpurple font-semibold text-center text-3xl sm:mb-20">
              This is FMPM Weight Loss
            </p>
            <div className=" flex justify-center sm:-mt-[80px]">
              <Link to="/contact-us" className="  mx-auto s">
                <button className=" bg-white py-3 px-5 border border-greenTeal rounded-md text-periwinkle font-semibold sm:bg-periwinkle sm:text-offWhite sm:border-none mx-auto  ">
                  Request Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className=" h-[320px] sm:h-[690px]  -mt-8 w-full px-4">
            <img
              src={portrait}
              alt="portrait of ALgery Al-Hafi"
              className=" h-full rounded-full shadow-2xl shadow-navy mx-auto object-cover w-full"
            ></img>
          </div>
        </div>
        <div className="  flex flex-col items-center bg-darkpurple py-5 sm:h-[500px] sm:-mt-[108px] -mt-12">
          <p className=" text-center sm:text-5xl text-2xl font-bold text-offWhite pb-2 tracking-wider mt-9">
            A Little About Us
          </p>
          <p className=" text-center sm:text-xl sm:w-[550px] text-lg px-3 text-offWhite mt-9">
            At FMPM Weight Loss, we are your partners in the pursuit of health and beauty. Meet our
            dedicated Nurse Practitioner, Algery Al-Hafi, and learn more about our mission to
            empower your journey towards total body health and wellness with medical weight-loss
            management.
          </p>
          <Link to="/about">
            <button className=" text-lg text-offWhite bg-periwinkle px-9 py-4 rounded-md mt-10">
              More Information
            </button>
          </Link>
        </div>
        <div>
          <h2 className=" text-center mt-10 mb-8 text-2xl sm:text-6xl font-bold">Services</h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10 px-2">
            <div className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite">
              <FaWeightScale className=" mx-auto text-6xl mt-5 " />
              <p className="text-2xl my-3">Medical Weight Loss</p>
              <p className=" text-center px-3 mb-5">
                We harness the power of medications like semaglutides and tirzepatide in our
                personalized approach to help every client achieve their ideal weight.
              </p>
              <Link to="/services/medical-weight-loss">
                <button className=" text-lg bg-periwinkle px-4 py-3 rounded-md mt-2 border-offWhite border ">
                  Learn More
                </button>
              </Link>
            </div>
            <div className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite">
              <BiSolidInjection className=" mx-auto text-6xl mt-5 " />
              <p className="text-2xl my-3">Vitamin Injections</p>
              <p className=" text-center px-3 mb-5">
                We utilize B12 injections to boost metabolism and incorporate Fat Burners to support
                effective weight management, helping you achieve your health and wellness goals.
              </p>
              <Link to="/services/vitamin-injections">
                <button className=" text-lg bg-periwinkle px-4 py-3 rounded-md mt-2 border-offWhite border ">
                  Learn More
                </button>
              </Link>
            </div>
            <div className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite">
              <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
              <p className="text-2xl my-3">Telehealth</p>
              <p className=" text-center px-3 mb-5">
                we are proud to offer the convenience of telehealth services, allowing you to access
                expert guidance and support from the comfort of your own home.
              </p>
              <Link to="/services/telehealth">
                <button className=" text-lg bg-periwinkle border-offWhite border px-4 py-3 rounded-md mt-2">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <TestimonialSlider />
        </div>
        <p className=" text-center text-3xl sm:text-5xl font-bold mb-3 text-periwinkle">
          Contact Us
        </p>
        <p className="sm:text-center px-2 text-xl sm:w-[700px] mx-auto text-justify">
          Ready to start your journey to a healthier you? Reach out to us today! We're here to help
          you achieve your weight loss goals. Contact us now and take the first step toward a better
          you!
        </p>
        <div className=" flex sm:flex-row sm:w-[33%] mx-auto sm:justify-between justify-around mt-3 sm:mt-7 py-4">
          <div className="flex sm:flex-row flex-col items-center sm:justify-between sm:w-[500px] mt-3 relative">
            <a
              href="tel:(352) 340-5990"
              className="flex  items-center text-greenTeal text-xl mb-6 sm:mb-0"
            >
              <BsTelephone className="mr-2" />
              (352) 340-5990
            </a>
            <Link to="/contact-us">
              <button className=" bg-white py-3 px-5 border  border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:border-periwinkle  sm:hover:text-offWhite z-10">
                Request Appointment
              </button>
            </Link>
          </div>

          {/* <img
            src={wellness}
            alt="some portrait"
            className=" absolute h-[400px] opacity-30 rounded-full top-[2200px]  ml-[530px]"
          ></img> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
