import React from "react";
import Form from "./Form";
import Footer from "./Footer";
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

function Contact() {
  return (
    <div>
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:mt-32 text-offWhite text-center text-4xl sm:text-[70px] "
      >
        <motion.h1
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" p-8"
        >
          Contact Us
        </motion.h1>
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
      <div className="sm:mt-14  mt-5 mb-20 text-offWhite">
        <p className=" text-center font-bold text-5xl mb-5 ">Send Us A Message.</p>
        <h2 className=" font-bold text-2xl text-center">
          Fill out the form below to schedule your consultation and start your journey to a better
          you!
        </h2>
        <Form />
      </div>
      <div className=" sm:w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
