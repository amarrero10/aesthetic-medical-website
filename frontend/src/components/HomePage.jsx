import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import portrait from "../assets/portrait.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import TestimonialSlider from "./Testimonials/TestimonialSlider";

function HomePage() {
  return (
    <>
      <div>
        <div className="sm:flex grid w-screen sm:w-full p-2 justify-center items-center sm:h-[800px]">
          <div className=" h-[300px] w-full mb-10 grid sm:mr-2 mt-5">
            <div className=" flex justify-center">
              <p className=" text-xl font-bold sm:text-3xl">Embark on a journey of </p>
              <div className=" text-xl font-bold pl-1 sm:text-3xl text-periwinkle">
                <Typewriter
                  options={{
                    strings: [" Wellness", " Transformation", " Confidence"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <p className=" text-center">
              We prioritize your unique needs to enhance your quality of life. Experience a
              transformative approach to weight loss and well-being today!
            </p>
            <p className=" text-sage font-semibold text-center text-3xl">
              This is FMPM Weight Loss
            </p>
            <div className=" flex justify-center">
              <Link to="/contact-us" className="  mx-auto">
                <button className=" bg-white py-3 px-5 border border-sage rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite mx-auto">
                  Request Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className=" h-[300px] sm:h-[600px] sm:w-[2200px] -mt-8">
            <img
              src={portrait}
              alt="portrait of ALgery Al-Hafi"
              className=" max-h-full rounded-lg w-3/4 mx-auto object-cover"
            ></img>
          </div>
        </div>
        <div className="  flex flex-col items-center bg-sage py-5 mt-5 sm:h-[500px]">
          <p className=" text-center sm:text-5xl text-2xl font-bold text-offWhite pb-2 tracking-wider mt-9">
            A Little About Us
          </p>
          <p className=" text-center sm:text-xl sm:w-[550px] text-lg px-3 text-offWhite mt-8">
            At FMPM Weight Loss, we're your partners in the pursuit of health and beauty. Meet our
            dedicated Nurse Practitioner, Algery Al-Hafi, and learn more about our mission to
            empower your journey towards wellness.
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
              <Link>
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
              <Link>
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
              <Link>
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
          <div className="flex items-center mt-3">
            <a
              href="tel:(727) 484-6999"
              className="flex items-center text-sage text-xl mb-6 sm:mb-0"
            >
              <BsTelephone className="mr-2" />
              (727) 484-6999
            </a>
          </div>
          <Link to="/contact-us">
            <button className=" bg-white py-3 px-5 border border-sage rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite">
              Request Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
