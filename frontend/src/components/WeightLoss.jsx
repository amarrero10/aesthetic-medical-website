"use client";
import { Accordion } from "flowbite-react";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import weightloss from "../assets/weightloss.jpg";
import { Helmet } from "react-helmet-async";

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

function WeightLoss() {
  return (
    <>
      <Helmet>
        <title>
          Medical Weight Loss, Hormone Optimization, Hair Growth and Anti-Aging Medicine | Aura
          Wellness
        </title>
        <meta
          name="description"
          content="Achieve lasting weight loss at Aura Wellness with personalized treatments using Semaglutide and Tirzepatide. Boost energy, reduce cravings, and transform your health under expert care."
        />
      </Helmet>
      <div className="bg-[#fff3e4] ">
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" sm:mt-32 text-[#5C7566] text-center text-4xl sm:text-[70px] "
        >
          <motion.h2
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" p-8"
          >
            Medical Weight Loss
          </motion.h2>
          <motion.hr
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" w-1/3 mx-auto my-4 pb-5 text-[#5C7566]"
          />
        </motion.div>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-center px-3 sm:px-[300px] mt-10 sm:text-4xl text-2xl mb-10"
        >
          At Aura Wellness, we are here to support you on your journey to better health and
          well-being.
        </motion.p>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-center px-3 sm:px-[300px] sm:text-4xl text-2xl mb-10 -mt-3"
        >
          We understand that embarking on a weight loss journey can be a significant step, and we're
          here to make it a positive and empowering experience for you.
        </motion.p>

        <motion.img
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" object-cover h-[375px] sm:h-[650px] w-[1000px]  mx-auto shadow-2xl sm:px-0"
          src={weightloss}
          alt="couple running together"
        ></motion.img>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" grid sm:gap-14 gap-32 sm:grid-cols-2 sm:w-3/4 2xl:w-2/3 px-3 sm:px-0 sm:mx-auto my-20"
        >
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex shadow-xl sm:mt-0 items-center justify-center  rounded-md"
          >
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-full text-center py-5 bg-white"
            >
              <h2 className=" text-5xl font-semibold">Acheive Your WeightLoss Goals!</h2>
              <p className=" text-2xl py-8 px-3 italic">
                When it comes to managing your weight, discovering an effective solution can be
                quite a journey. If you're on the lookout for a safe and proven method to reach your
                weight loss goals, consider a tailored, exper-guided approach. Our treatments
                include a viable approach for addressing obesity and has garnered support from
                multiple research studies.
              </p>
              <Link to="/contact-us">
                <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md -mb-">
                  Contact Us!
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex shadow-xl sm:mt-0 items-center justify-center px-3 sm:px-0"
          >
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-full text-center py-5 bg-white"
            >
              <h2 className=" text-5xl font-semibold">
                Start Living Your Healthiest and Happiest Life!
              </h2>
              <p className=" text-2xl py-8 px-3 italic">
                As a part of our comprehensive approach to supporting your journey toward achieving
                your healthy weight loss goals, we offer a range of medical tools and interventions.
                These recognized medical aids encompass appetite suppressants and vitamin
                injections, hormone optimization, which effectively reduce food intake by lowering
                appetite, managing craving, and helping decrease body fat percentage and the number
                on the scale.
              </p>
              <Link to="/contact-us">
                <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md ">
                  Contact Us!
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}

export default WeightLoss;
