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
import { motion, useScroll } from "framer-motion";
import { ReactComponent as Vortex } from "../assets/vortex.svg";

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

function HomePage() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="hidden sm:block bg-[#015657] fixed top-[146px] left-0 right-0 h-2 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="sm:mt-36 max-w-[2000px] mx-auto">
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" absolute w-full min-[2000px]:w-[78.55%] -z-10 sm:top-52 top-[610px] "
        >
          <Vortex className=" sm:-mt-[300px] -mt-[620px] h-[600px] sm:h-full w-full mix-blend-color-dodge opacity-30" />
          {/* 2xl:w-[1120px] -mt-[262px] */}
        </motion.div>
        <div>
          <div className="sm:flex grid gap-5 sm:gap-0 w-screen sm:w-full p-2 justify-center items-center sm:h-[800px]">
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-[300px] w-full mb-10 grid sm:mr-2 mt-5"
            >
              <div className=" flex justify-center">
                <p className=" text-2xl font-bold sm:text-6xl">Embark on a journey of </p>
              </div>
              <div className=" text-2xl font-bold pl-1 sm:text-6xl text-periwinkle text-center sm:my-4">
                <Typewriter
                  options={{
                    strings: [" Wellness!", " Transformation!", " Confidence!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className=" text-center text-2xl sm:mb-4">
                We prioritize your unique health and wellness goals to enhance your qualilty of
                life. Experience a transformative approach to weight loss and well-being today!
              </p>
              <p className=" text-darkpurple font-semibold text-center text-3xl sm:mb-24">
                This is Spring Health and Wellness
              </p>
              <div className=" flex justify-center sm:-mt-[80px]">
                <Link to="/contact-us" className="  mx-auto s">
                  <button className=" bg-white py-3 px-5 border border-greenTeal rounded-md text-periwinkle font-semibold sm:bg-periwinkle sm:text-offWhite sm:border-none mx-auto  ">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-[320px] sm:h-[690px] rounded-[50%]  -mt-8 w-full 2xl:w-[82%] px-4"
            >
              <img
                src={portrait}
                alt="portrait of Algery Al-Hafi"
                className=" h-full rounded-[50%] shadow-2xl shadow-navy mx-auto object-cover w-full mt-10 sm:mt-0"
              ></img>
            </motion.div>
          </div>
          <div className="  flex flex-col items-center bg-darkpurple py-5 sm:h-[500px] sm:-mt-[108px]">
            <motion.p
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center sm:text-6xl text-4xl font-bold text-offWhite pb-2 tracking-wider mt-9"
            >
              About Us
            </motion.p>
            <motion.p
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center sm:text-2xl sm:w-[550px] px-3 text-offWhite mt-9 text-xl"
            >
              At Spring Health and Wellness, we are your partners in the pursuit of health and
              beauty. Meet our dedicated Nurse Practitioner, Algery Al-Hafi, and learn more about
              our mission to empower your journey towards total body health and wellness with
              medical weight-loss management.
            </motion.p>
            <Link to="/about">
              <button className=" text-xl text-offWhite bg-periwinkle px-9 py-4 rounded-md mt-10">
                More Information
              </button>
            </Link>
          </div>
          <div className=" bg-[#fff] h-[600px] -mt-10">
            <motion.h2
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center mt-10 mb-8 text-4xl pt-10 sm:text-6xl font-bold"
            >
              Services
            </motion.h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10 px-2">
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite"
              >
                <FaWeightScale className=" mx-auto text-6xl mt-5 " />
                <p className="text-3xl my-3">Medical Weight Loss</p>
                <p className=" text-center text-xl px-3 mb-5">
                  We harness the power of medications like Semaglutides, Tirzepatide, and
                  Phentermine in our personalized approach to help every client achieve their ideal
                  weight.
                </p>
                <Link to="/services/medical-weight-loss">
                  <button className=" text-xl bg-periwinkle px-4 py-3 rounded-md mt-2 border-offWhite border ">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite"
              >
                <BiSolidInjection className=" mx-auto text-6xl mt-5 " />
                <p className="text-3xl my-3">Vitamin Injections</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  We utilize B12 injections to boost metabolism and incorporate Fat Burners to
                  support effective weight management, helping you achieve your health and wellness
                  goals.
                </p>
                <Link to="/services/vitamin-injections">
                  <button className=" text-xl bg-periwinkle px-4 py-3 rounded-md mt-2 border-offWhite border ">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center text-offWhite"
              >
                <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
                <p className="text-3xl my-3">Telehealth</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  We are proud to offer the convenience of telehealth services, allowing you to
                  access expert guidance and support for your healthcare needs from anywhere.
                </p>
                <Link to="/services/telehealth">
                  <button className=" text-xl bg-periwinkle border-offWhite border px-4 py-3 rounded-md mt-8">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <TestimonialSlider />
          </motion.div>
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-center text-3xl sm:text-6xl font-bold mb-3 text-periwinkle"
          >
            Contact Us
          </motion.p>
          <motion.a
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            href="tel:727-548-6100p208"
            className="flex  items-center justify-center mx-auto text-navy text-xl mb-6 sm:mb-3 border border-navy p-3 w-fit"
          >
            <BsTelephone className="mr-2" />
            (727) 548-6100 ext. 208
          </motion.a>
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="sm:text-center px-2 text-xl sm:text-2xl sm:w-[700px] mx-auto text-justify"
          >
            Ready to start your journey to a healthier you? Reach out to us today! We're here to
            help you achieve your weight loss goals. Contact us now and take the first step towards
            a better you!
          </motion.p>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex sm:flex-row sm:w-[33%] mx-auto sm:justify-between justify-around mt-3 sm:mt-7 py-4"
          >
            <div className=" mx-auto mt-3 text-xl">
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
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
