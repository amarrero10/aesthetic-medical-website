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
        className=" bg-navy text-offWhite text-center text-[70px] "
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
        className=" px-3 mb-20"
      >
        <p className=" sm:w-2/3 text-center text-3xl sm:text-4xl sm:mt-24 font-semibold mx-auto">
          Embrace the convenience of telehealth services at Spring Health and Wellness. Through
          secure virtual consultations, we are readily accessible, ensuring you receive expert care
          and guidance from the comfort of your own space.
        </p>
        <div className="sm:w-2/3 mx-auto mt-14">
          <p className="  text-3xl sm:text-4xl font-bold text-navy ">EASY ACCESS TO OUR TEAM</p>
          <p className=" mt-10 text-xl sm:text-3xl ">
            Spring Health and Wellness offers telehealth services to enhance convenience for our
            patients. telehealth enables patients to receive medical consultations remotely when
            they are unable to be physically present with our team.
          </p>
          <p className=" my-10 text-xl sm:text-3xl">
            New and existing patients can utilize telehealth to consult with our Spring Health and
            Wellness team, ask questions, and discuss their care plan. Patients can easily connect
            with us, using video conferencing via a computer webcam or a mobile device.
          </p>
          <p className="  text-3xl sm:text-4xl font-bold text-navy">HOW IT WORKS</p>
          <ul className=" list-disc">
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5 mt-5">
              To schedule, call us at{" "}
              <a href="tel:(352) 340-5990" className=" underline">
                {" "}
                (352) 340-5990
              </a>{" "}
              and ask for a virtual telehealth appointment, and one will be scheduled for you. Or
              fill out the form below and we will reach out to you within 24 hours.
            </li>
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5">
              On that call, our team will determine if you qualify and are willing and able for a
              video visit.
            </li>
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5">
              We will set you up with a convenient time for a Zoom meeting.
            </li>
          </ul>
          <p className="  text-3xl sm:text-4xl font-bold text-navy">SOME HELPFUL TIPS</p>
          <ul className=" list-disc mt-5">
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5">
              Select an area with a strong internet connection, either with a direct connection or
              WiFi.
            </li>
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5">
              Pick a private area that is well lit and free from distractions and interruptions.
            </li>
            <li className=" italic ml-10 text-xl sm:text-3xl pb-5">
              Write down any questions or concerns you may have.
            </li>
          </ul>
        </div>
        <p className=" text-center -mb-5 text-3xl sm:text-4xl  italic mt-20">
          Ready to get started? Request an appointment with us today!
        </p>

        <Form />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Telehealth;
