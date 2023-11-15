import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import portrait from "../assets/algery-green.jpg";
import Footer from "./Footer";
import { IoLeafOutline } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { ReactComponent as Leaves } from "../assets/leaves.svg";

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
    <div className="sm:mt-64 absolute tracking-widest font-bold">
      <Leaves className=" absolute -z-10 2xl:-top-32 -top-[210px] opacity-70" />

      <PiPlantFill className=" text-center rounded-full m-5 text-[60px] text-navy mx-auto sm:-mt-10 sm:mb-16 " />
      <div className=" sm:w-3/4 bg-[#F3E9DC] mx-auto rounded-md pt-10 mb-10">
        <div className="px-2  mx-auto mt-6 rounded-md ">
          <motion.h1
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="  font-extrabold text-6xl mb-3 text-center sm:text-left"
          >
            ABOUT US
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
            science with a comprehensive and holistic approach to deliver exceptional treatments to
            guide you in your weight-loss and wellness journey.
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
            support you and empower you in achieving your weight-loss goals. We are devoted to
            helping you not only shed pounds but also enhance your overall well-being, both inside
            and out.
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
            it comes to medical-weight loss and aesthetics. That's why we take pride in offering
            personalized treatment plans, thorough consultations, and dedicated follow-up services.
            Our approach isn't just about achieving results; it's about ensuring your comfort and
            confidence throughout your journey with us. Your health, happiness, and satisfaction are
            at the heart of everything we do, and we look forward to partnering with you on your
            path to a more vibrant and confident you.
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
                className="w-full  mx-auto h-[400px] 2xl:h-[630px] object-contain rounded-md"
              ></img>
              <div className="   text-center text-3xl py-4 border border-black  mx-auto   2xl:w-[789px] sm:w-[500px] 2xl:-mt-2 sm:mt-0 -mt-14">
                <p>Algery Al-Hafi</p>
                <p>APRN-BC | Board Certfied Practioner</p>
              </div>
            </div>

            <p className=" mt-1 text-center sm:w-1/2 sm:px-3 sm:text-2xl">
              Meet Algery Al-Hafi, APRN-BC, our Board-Certified Nurse Practitioner. With her
              extensive experience and expertise, Algery is dedicated to guiding you on your journey
              to a healthier and happier you. She combines medical precision with a caring touch,
              ensuring you receive the highest level of care in your weight-loss and aesthetic
              goals. Trust Algery Al-Hafi to lead you towards your wellness aspirations.
            </p>
          </motion.div>
          <div className="  py-16 mt-10 px-5">
            <motion.p
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-2xl sm:text-6xl uppercase font-bold text-center sm:mb-14 text-navy"
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
              <div className=" rounded-md shadow-xl h-[430px] text-center text-navy border bg-white">
                <FaWeightScale className=" mx-auto text-6xl mt-5 " />
                <p className="text-3xl my-3">Medical Weight Loss</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  We harness the power of medications like semaglutides and tirzepatide in our
                  personalized approach to help every client achieve their ideal weight.
                </p>
                <Link to="/services/medical-weight-loss">
                  <button className=" text-xl text-navy bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className=" rounded-md shadow-xl h-[430px] text-center text-navy border bg-white">
                <BiSolidInjection className=" mx-auto text-6xl mt-5 " />
                <p className="text-3xl my-3">Vitamin Injections</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  We utilize B12 injections to boost metabolism and incorporate Fat Burners to
                  support effective weight management, helping you achieve your health and wellness
                  goals.
                </p>
                <Link to="/services/vitamin-injections">
                  <button className=" text-xl text-navy bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className=" rounded-md shadow-xl h-[430px] text-center text-navy border bg-white">
                <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
                <p className="text-3xl my-3">Telehealth</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  we are proud to offer the convenience of telehealth services, allowing you to
                  access expert guidance and support from the comfort of your own home.
                </p>
                <Link to="/services/telehealth">
                  <button className=" text-xl text-navy bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-center text-2xl mt-20 "
          >
            Ready to start your journey to a healthier you? We're here to help you achieve your
            weight loss goals.
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
                href="tel:727-548-6100p208"
                className="flex items-center text-navy border border-navy p-3 bg-white rounded-md text-xl mb-6 sm:mb-0"
              >
                <BsTelephone className="mr-2" />
                (727) 548-6100 ext. 208
              </a>
            </div>
            <Link to="/contact-us">
              <button className=" bg-white py-3 px-5 border border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite text-xl">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
