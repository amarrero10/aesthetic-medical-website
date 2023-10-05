import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import portrait from "../assets/portrait.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div className="sm:mt-20 absolute">
      <div className="px-2 sm:w-3/4 mx-auto mt-6 rounded-md tracking-wider font-poppins">
        <h1 className="  font-extrabold text-3xl mb-3">
          ABOUT US<span className="text-periwinkle font-extrabold text-3xl">.</span>
        </h1>
        <p className="mb-3 text-justify tracking-widest">
          At FMPM Weight Loss, our mission is to merge cutting-edge, evidence-based science with a
          comprehensive, holistic approach to deliver exceptional treatments that empower your
          journey towards improved health and wellness.
        </p>

        <p className="font-extrabold text-3xl mb-3">OUR PROMISE</p>
        <p className="mb-3 text-justify tracking-widest">
          Our dedicated team of professional, knowledgeable, and compassionate experts are here to
          support you in achieving your weight loss goals. We are devoted to helping you not only
          shed pounds but also enhance your overall well-being, both inside and out.
        </p>
        <p className="font-extrabold text-3xl mb-3">PATIENT ARE AT THE HEART OF IT ALL</p>
        <p className="mb-3 text-justify tracking-widest">
          At FMPM Weight Loss, our unwavering commitment is to your well-being and satisfaction. We
          understand that every individual is unique, and so are their needs when it comes to
          medical weight loss and aesthetics. That's why we take pride in offering personalized
          treatment plans, thorough consultations, and dedicated follow-up services. Our approach
          isn't just about achieving results; it's about ensuring your comfort and confidence
          throughout your journey with us. Your health, happiness, and satisfaction are at the heart
          of everything we do, and we look forward to partnering with you on your path to a more
          vibrant and confident you.
        </p>
        <img
          src={portrait}
          alt="Nurse Practioner at FMPM Weight Loss"
          className="w-2/3 mx-auto h-[400px] object-contain rounded-md mt-16"
        ></img>
        <div className=" bg-periwinkle text-offWhite text-center text-xl">
          <p>Algery Al-Hafi</p>
          <p>APRN-BC | Board Certfied Practioner</p>
        </div>

        <p className=" mt-1 text-justify">
          Meet Algery Al-Hafi, APRN-BC, our Board-Certified Nurse Practitioner. With her extensive
          experience and expertise, Algery is dedicated to guiding you on your journey to a
          healthier and more beautiful you. She combines medical precision with a caring touch,
          ensuring you receive the highest level of care in your weight loss and aesthetic goals.
          Trust Algery Al-Hafi to lead you towards your wellness aspirations.
        </p>

        <p className="text-2xl uppercase font-semibold mt-10">What we offer:</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10">
          <div className=" bg-teal rounded-md shadow-xl h-[400px] text-center text-offWhite">
            <FaWeightScale className=" mx-auto text-6xl mt-5 " />
            <p className="text-2xl my-3">Medical Weight Loss</p>
            <p className=" text-center px-3 mb-5">
              We harness the power of medications like semaglutides and tirzepatide in our
              personalized approach to help every client achieve their ideal weight.
            </p>
            <Link to="/services/medical-weight-loss">
              <button className=" text-lg bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" bg-teal rounded-md shadow-xl h-[400px] text-center text-offWhite">
            <BiSolidInjection className=" mx-auto text-6xl mt-5 " />
            <p className="text-2xl my-3">Vitamin Injections</p>
            <p className=" text-center px-3 mb-5">
              We utilize B12 injections to boost metabolism and incorporate Fat Burners to support
              effective weight management, helping you achieve your health and wellness goals.
            </p>
            <Link to="/services/vitamin-injections">
              <button className=" text-lg bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" bg-teal rounded-md shadow-xl h-[400px] text-center text-offWhite">
            <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
            <p className="text-2xl my-3">Telehealth</p>
            <p className=" text-center px-3 mb-5">
              we are proud to offer the convenience of telehealth services, allowing you to access
              expert guidance and support from the comfort of your own home.
            </p>
            <Link to="/services/telehealth">
              <button className=" text-lg bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <p className="text-justify mt-20 ">
          Ready to start your journey to a healthier you? Reach out to us today! We're here to help
          you achieve your weight loss goals. Contact us now and take the first step toward a better
          you!
        </p>
        <div className=" flex sm:flex-row flex-col md:w-[60%] mx-auto justify-between  items-center mt-3 py-4">
          <div className="flex items-center ">
            <a
              href="tel:(352) 340-5990"
              className="flex items-center text-teal text-xl mb-6 sm:mb-0"
            >
              <BsTelephone className="mr-2" />
              (352) 340-5990
            </a>
          </div>
          <Link to="/contact-us">
            <button className=" bg-white py-3 px-5 border border-teal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
