import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import portrait from "../assets/portrait.jpg";
import Footer from "./Footer";
import { IoLeafOutline } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";

import { motion } from "framer-motion";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function About() {
  return (
    <div className="sm:mt-44 absolute tracking-widest">
      <PiPlantFill className=" text-center rounded-full m-5 text-[60px] text-navy mx-auto -mt-10 mb-16 " />
      <div className="px-2 sm:w-3/4 mx-auto mt-6 rounded-md ">
        <motion.h1
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="  font-extrabold text-6xl mb-3 text-center sm:text-left"
        >
          ABOUT US<span className="text-periwinkle font-extrabold text-6xl">.</span>
        </motion.h1>
        <motion.p
          className="mb-3 sm:text-justify tracking-widest sm:text-2xl text-lg text-center"
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          At Spring Health and Wellness, our mission is to merge cutting-edge, evidence-based
          science with a comprehensive, holistic approach to deliver exceptional treatments that
          empower your journey towards improved health and wellness.
        </motion.p>

        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          animate="animate"
          // whileInView={}
          viewport={{
            once: true,
          }}
          className="font-extrabold text-3xl mb-3 sm:text-left text-center"
        >
          OUR PROMISE
        </motion.p>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          animate="animate"
          // whileInView={}
          viewport={{
            once: true,
          }}
          className="mb-3 sm:text-justify tracking-widest sm:text-2xl text-lg text-center"
        >
          Our dedicated team of professional, knowledgeable, and compassionate experts are here to
          support you in achieving your weight loss goals. We are devoted to helping you not only
          shed pounds but also enhance your overall well-being, both inside and out.
        </motion.p>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          animate="animate"
          // whileInView={}
          viewport={{
            once: true,
          }}
          className="font-extrabold text-3xl mb-3 sm:text-left text-center"
        >
          PATIENTS ARE AT THE HEART OF IT ALL
        </motion.p>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          animate="animate"
          // whileInView={}
          viewport={{
            once: true,
          }}
          className="mb-3 sm:text-justify tracking-widest sm:text-2xl text-lg text-center"
        >
          At Spring Health and Wellness, our unwavering commitment is to your well-being and
          satisfaction. We understand that every individual is unique, and so are their needs when
          it comes to medical weight loss and aesthetics. That's why we take pride in offering
          personalized treatment plans, thorough consultations, and dedicated follow-up services.
          Our approach isn't just about achieving results; it's about ensuring your comfort and
          confidence throughout your journey with us. Your health, happiness, and satisfaction are
          at the heart of everything we do, and we look forward to partnering with you on your path
          to a more vibrant and confident you.
        </motion.p>

        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          animate="animate"
          // whileInView={}
          viewport={{
            once: true,
          }}
          className="flex flex-col sm:flex-row mt-5 justify-between items-center"
        >
          <div className=" sm:w-1/2">
            <img
              src={portrait}
              alt="Nurse Practioner at Spring Health and Wellness"
              className="w-full  mx-auto h-[400px] object-cover rounded-md"
            ></img>
            <div className=" bg-periwinkle text-offWhite text-center text-3xl py-4">
              <p>Algery Al-Hafi</p>
              <p>APRN-BC | Board Certfied Practioner</p>
            </div>
          </div>

          <p className=" mt-1 text-center sm:w-1/2 sm:px-3 sm:text-2xl">
            Meet Algery Al-Hafi, APRN-BC, our Board-Certified Nurse Practitioner. With her extensive
            experience and expertise, Algery is dedicated to guiding you on your journey to a
            healthier and more beautiful you. She combines medical precision with a caring touch,
            ensuring you receive the highest level of care in your weight loss and aesthetic goals.
            Trust Algery Al-Hafi to lead you towards your wellness aspirations.
          </p>
        </motion.div>

        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-2xl sm:text-5xl uppercase font-bold mt-20 text-center sm:mb-14"
        >
          Our Services
        </motion.p>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10"
        >
          <div className=" rounded-md shadow-xl h-[400px] text-center text-navy border">
            <FaWeightScale className=" mx-auto text-6xl mt-5 " />
            <p className="text-3xl my-3">Medical Weight Loss</p>
            <p className=" text-center px-3 mb-5 text-xl">
              We harness the power of medications like semaglutides and tirzepatide in our
              personalized approach to help every client achieve their ideal weight.
            </p>
            <Link to="/services/medical-weight-loss">
              <button className=" text-xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" rounded-md shadow-xl h-[400px] text-center text-navy border">
            <BiSolidInjection className=" mx-auto text-6xl mt-5 " />
            <p className="text-3xl my-3">Vitamin Injections</p>
            <p className=" text-center px-3 mb-5 text-xl">
              We utilize B12 injections to boost metabolism and incorporate Fat Burners to support
              effective weight management, helping you achieve your health and wellness goals.
            </p>
            <Link to="/services/vitamin-injections">
              <button className=" text-xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" rounded-md shadow-xl h-[400px] text-center text-navy border">
            <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
            <p className="text-3xl my-3">Telehealth</p>
            <p className=" text-center px-3 mb-5 text-xl">
              we are proud to offer the convenience of telehealth services, allowing you to access
              expert guidance and support from the comfort of your own home.
            </p>
            <Link to="/services/telehealth">
              <button className=" text-xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-center text-2xl mt-20 "
        >
          Ready to start your journey to a healthier you? We're here to help you achieve your weight
          loss goals.
        </motion.p>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-center text-2xl "
        >
          Contact us now and take the first step toward a better you!
        </motion.p>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" flex sm:flex-row flex-col sm:w-[50%] mx-auto justify-between  items-center mt-3 py-4"
        >
          <div className="flex items-center ">
            <a
              href="tel:(352) 340-5990"
              className="flex items-center text-navy border border-navy p-3 rounded-md text-xl mb-6 sm:mb-0"
            >
              <BsTelephone className="mr-2" />
              (352) 340-5990
            </a>
          </div>
          <Link to="/contact-us">
            <button className=" bg-white py-3 px-5 border border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite text-xl">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
