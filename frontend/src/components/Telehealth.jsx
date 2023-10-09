import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import Footer from "./Footer";

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

function Telehealth() {
  return (
    <div className=" sm:mt-20">
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" bg-navy text-offWhite text-center text-4xl "
      >
        <motion.h2
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" pt-5"
        >
          Telehealth
        </motion.h2>
        <motion.hr
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" w-1/3 mx-auto my-4 pb-5"
        />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <p className=" sm:w-2/3 text-center text-3xl font-semibold mx-auto">
          Embrace the convenience of telehealth services at FMPM Weight Loss. Through secure virtual
          consultations, we are readily accessible, ensuring you receive expert care and guidance
          from the comfort of your own space.
        </p>
        <div className=" mx-auto bg-[#FEFEFE] sm:w-1/4 shadow-2xl h-64 mt-5 px-2">
          <p className=" text-center pt-2 text-lg">
            Currently we offer the following services through telehealth:
          </p>
          <ul className=" list-disc mt-5">
            <li className=" ml-10">Services go here</li>
            <li className=" ml-10">Services go here</li>
            <li className=" ml-10">Services go here</li>
            <li className=" ml-10">Services go here</li>
          </ul>
        </div>

        <p className=" text-center -mb-5 text-3xl  italic mt-20">
          Ready to get started? Request an appointment with us today!
        </p>
        <Form />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Telehealth;
