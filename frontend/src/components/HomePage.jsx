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
        className="hidden sm:block bg-periwinkle fixed top-20 left-0 right-0 h-2 origin-[0%]"
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
          <div>
            <motion.h2
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center mt-10 mb-8 text-4xl sm:text-6xl font-bold"
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
