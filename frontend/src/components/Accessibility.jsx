import React from "react";
import { motion } from "framer-motion";
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

function Accessibility() {
  return (
    <div className=" sm:mt-20">
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:mt-20 bg-navy text-offWhite text-center text-4xl sm:text-[70px] "
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
          Privacy Statement
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
      <p className=" sm:px-20 px-3 text-center sm:text-2xl ">
        Accessibility Notice FMPM strives to make our website accessible. FMPM is committed to
        diversity, inclusion, and meeting the needs of all of our customers, including those with
        disabilities. We are continually improving our website to comply with the accessibility
        guidelines in WCAG 2.0 AA. Further accessibility efforts are under way and we continue to
        update our website to improve accessibility. In the meantime, if the format of any material
        on our web pages interferes with your ability to access the information, please contact us
        to request assistance or if you have questions or comments about our web site’s
        accessibility. Please call (727) 234-8543 or submit an inquiry at info@fmpm.com.
      </p>
      <div className=" sm:absolute sm:w-screen sm:bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Accessibility;
