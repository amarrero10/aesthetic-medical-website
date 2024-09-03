import React from "react";
import Typewriter from "typewriter-effect";
import portrait from "../assets/algery-green5.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { FaWeightScale, FaCheck } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
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
  const handleReviewClick = () => {
    window.open("https://g.page/r/CcjdLYrPwk6GEAI/review", "_blank");
  };
  return (
    <>
      <motion.div
        className="hidden sm:block bg-[#D2B86C] fixed top-[146px] sm:top-[130px] left-0 right-0 h-2 origin-[0%]"
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
          <Vortex className=" sm:-mt-[300px] mt-[60px] h-[600px] sm:h-full w-full mix-blend-color-dodge opacity-30" />
          {/* 2xl:w-[1120px] -mt-[262px] */}
        </motion.div>
        <div>
          <div className="w-screen sm:w-full p-4 text-center sm:h-[1000px] h-auto sm:flex sm:flex-col sm:justify-center">
            <img className=" sm:hidden w-[400px] h-auto mx-auto" src={logo}></img>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-10 grid gap-4"
            >
              <div className="flex justify-center">
                <p className="text-2xl sm:text-4xl font-extrabold text-center text-periwinkle uppercase mt-36">
                  Start on Your Wellness Journey with Aura today!
                </p>
              </div>
              <p className="text-xl sm:text-2xl sm:mb-4 text-darkpurple">
                Optimize your overall health and wellness with weight management treatments
                including Semaglutide and Tirzepatide. These revolutionary medications can help
                transform your life while improving:
              </p>
              <ul className="list-none text-left mx-auto text-darkpurple sm:text-lg">
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Fatigue
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Irritability
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Inflammation
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Joint pain
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Low energy
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Low libido
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Anxiety
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Mood swings
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Cravings
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Overeating
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  Abdominal fat
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-greenTeal mr-2" />
                  PMS
                </li>
              </ul>
              <p className="text-xl sm:text-2xl sm:mb-4 text-darkpurple">
                Our expert providers are here to guide you in achieving your weight loss goals. Take
                your health to the next level and transform your life.
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-darkpurple">
                Get back to <span className="text-periwinkle">YOU</span>.
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-darkpurple sm:mb-24">
                This is Aura Wellness
              </p>
              <div className="flex justify-center sm:mt-8">
                <Link to="/contact-us" className="mx-auto">
                  <button className="bg-periwinkle py-3 px-5 border border-transparent rounded-md text-white font-semibold sm:text-xl transition duration-300 ease-in-out hover:bg-offWhite hover:text-periwinkle hover:border-periwinkle">
                    Request Appointment
                  </button>
                </Link>
              </div>
              <div className="flex justify-center sm:mt-4">
                <a
                  href="tel:813-252-0265"
                  className="flex items-center text-navy border border-navy p-3 bg-white rounded-md text-xl mb-6 sm:mb-0 transition duration-300 ease-in-out hover:bg-navy hover:text-white"
                >
                  <BsTelephone className="mr-2" />
                  813-252-0265
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="sm:h-[800px] px-4 sm:w-[650px] w-[350px] mx-auto rounded-xl"
            ></motion.div>
          </div>

          <div className="  flex flex-col items-center bg-darkpurple py-5 sm:h-[1000px] mt-20">
            <div className=" flex sm:flex-row flex-col justify-around items-center w-full">
              <div className=" flex flex-col items-center justify-center">
                <motion.p
                  variants={fadeInAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  className=" text-center sm:text-6xl text-4xl font-bold text-[#5C7463] pb-2 tracking-wider mt-9"
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
                  className=" text-center sm:text-2xl sm:w-[550px] px-3 text-[#5C7463] mt-9 text-xl"
                >
                  At Aura Wellness, we are your partners in the pursuit of health and beauty. Meet
                  our dedicated Nurse Practitioner Algery Al-Hafi and learn more about our mission
                  to empower your journey towards total body health and wellness with medical
                  weight-loss management.
                </motion.p>
                <Link to="/about">
                  <button className=" text-xl text-offWhite bg-periwinkle px-9 py-4 rounded-md mt-10">
                    More Information
                  </button>
                </Link>
              </div>
              <img
                src={portrait}
                alt="portrait of Algery Al-Hafi"
                className=" shadow-2xl shadow-navy  sm:h-[800px] sm:w-[650px] w-[350px]  bg-navy mt-16 sm:mt-10 rounded-xl"
              ></img>
            </div>
          </div>
          <div className=" bg-darkpurple sm:h-[600px] text-[#5C7463] -mt-10">
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
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10 px-2 ">
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center "
              >
                <FaWeightScale className=" mx-auto text-6xl mt-5 " />
                <p className="text-3xl my-3">Medical Weight Loss</p>
                <p className=" text-center text-xl px-3 mb-5">
                  We harness the power of weight-loss medications like Semaglutide and Tirzepatide
                  in our personalized approach to help every client achieve their ideal weight and
                  health goals.
                </p>
                <Link to="/services/medical-weight-loss">
                  <button className=" text-xl bg-periwinkle px-4 py-3 rounded-md mt-2 border-navy border ">
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
                className=" bg-periwinkle rounded-md shadow-xl h-[400px] text-center"
              >
                <BsPersonVideo3 className=" mx-auto text-6xl mt-5" />
                <p className="text-3xl my-3">Telehealth</p>
                <p className=" text-center px-3 mb-5 text-xl">
                  We are proud to offer the convenience of telehealth services, allowing you to
                  access expert guidance and support for your weight-loss needs from anywhere.
                </p>
                <Link to="/services/telehealth">
                  <button className=" text-xl bg-periwinkle border-navy border px-4 py-3 rounded-md mt-8">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-periwinkle rounded-md shadow-xl h-[400px] text-center flex flex-col justify-center items-center p-6"
              >
                <FaHeartbeat className="mx-auto text-6xl mb-4" />
                <p className="text-3xl my-3">Coming Soon</p>
                <p className=" text-center text-xl px-3 mb-5">
                  Our comprehensive services in Hormone Replacement Therapy will be launching soon.
                  Stay tuned for more updates!
                </p>
                <Link to="/services/coming-soon">
                  <button className=" text-xl bg-periwinkle px-4 py-3 rounded-md mt-2 border-navy border ">
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
            href="tel:813-252-0265"
            className="flex  items-center justify-center mx-auto text-[#F0E9B0] text-xl mb-6 sm:mb-3 border border-[#F0E9B0] p-3 w-fit"
          >
            <BsTelephone className="mr-2" />
            813-252-0265
          </motion.a>
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="sm:text-center px-2 text-xl sm:text-2xl sm:w-[700px] mx-auto text-justify text-[#F0E9B0]"
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
      <div className="bg-[#F0E9B0] p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-[#5C7463] mb-4">We Value Your Feedback!</h2>
        <p className="text-[#5C7463] mb-6">
          Let us know how we're doing by leaving a review. Your feedback helps us improve and serve
          you better.
        </p>
        <button
          onClick={handleReviewClick}
          className="bg-periwinkle text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Leave a Google Review
        </button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
