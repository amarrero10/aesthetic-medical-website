import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Form from "./Form";
import weight from "../assets/weight-loss.jpg";
import virtual from "../assets/virtual.jpg";
import vial from "../assets/vial.jpg";
import scale from "../assets/scale.jpg";
import { motion } from "framer-motion";
import { ReactComponent as Leaves } from "../assets/leaves.svg";

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

function Services() {
  return (
    <>
      <div className="sm:mt-36 ">
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" bg-[#015657] text-offWhite text-center text-[70px] "
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
            Our Services
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
        {/* MOBILE SERVICES */}
        <div className="sm:hidden">
          <div className="grid gap-5 px-3">
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2">
                <img
                  src={scale}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Medical Weight Loss</h2>
                <p className=" mt-3 px-1">
                  Embark on your journey to a healthier, happier you with our expert weight loss
                  services. Our dedicated team is committed to helping you reach your weight loss
                  goals and improve your overall well-being. At our clinic, we cater to the
                  individual.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/medical-weight-loss">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2 w-full">
                <img
                  src={vial}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full w-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Vitamin Injections</h2>
                <p className=" mt-3 px-1">
                  At our clinic, we understand that vitality and well-being are essential to living
                  your best life. Our specialized vitamin injections are designed to give you that
                  extra boost of energy and support your overall weight loss and health goals.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/vitamin-injections">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2">
                <img
                  src={virtual}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Telehealth</h2>
                <p className=" mt-3 px-1">
                  At Spring Health and Wellness, we understand that your health and well-being are a
                  top priority. That's why we offer telehealth services, providing you with a
                  convenient and secure way to access healthcare from the comfort of your home or
                  office.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/telehealth">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* END MOBILE SERVICES */}
        {/* DESKTOP SERVICES */}
        <div className="hidden sm:block sm:visible pt-10 text-navy">
          <Leaves className=" absolute -z-10" />
          <Leaves className=" absolute -z-10 top-[1640px] 2xl:hidden" />
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex w-2/3 min-[2000px]:w-1/2 mx-auto h-[500px] shadow-2xl rounded-md bg-white"
          >
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" w-1/2 flex flex-col items-center justify-between py-[50px] bg-white"
            >
              <motion.h2
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" text-6xl font-semibold text-center"
              >
                Medical Weight Loss
              </motion.h2>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" px-5 text-center text-2xl"
              >
                <motion.p
                  variants={fadeInAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  Embark on your journey to a healthier, happier you with our expert weight loss
                  services. Our dedicated team is committed to helping you reach your weight loss
                  goals and improve your overall well-being. At our clinic, we cater to the
                  individual.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" flex flex-col items-center justify-between w-full px-2 bg-white"
              >
                <Link to="/services/medical-weight-loss">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
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
              className=" w-1/2 rounded-tr-md rounded-br-md"
            >
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md"
                src={scale}
                alt="a cardboard sign to promote wight loss"
              ></img>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex w-2/3 min-[2000px]:w-1/2 mx-auto h-[500px] shadow-2xl rounded-md my-16"
          >
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" w-1/2 rounded-tr-md rounded-br-md"
            >
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md w-full"
                src={vial}
                alt="Doctor Inserting Syringe "
              ></img>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" w-1/2 flex flex-col items-center justify-between py-[50px] bg-white"
            >
              <motion.h2
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" text-6xl font-semibold"
              >
                Vitamin Injections
              </motion.h2>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" px-5 text-center text-2xl"
              >
                <motion.p
                  variants={fadeInAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  At our clinic, we understand that vitality and well-being are essential to living
                  your best life. Our specialized vitamin injections are designed to give you that
                  extra boost of energy and support your overall weight loss and health goals.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" flex flex-col items-center justify-between w-full px-2 bg-white"
              >
                <Link to="/services/vitamin-injections">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex w-2/3 min-[2000px]:w-1/2 mx-auto h-[500px] shadow-2xl rounded-md"
          >
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" w-1/2 flex flex-col items-center justify-between py-[50px] bg-white"
            >
              <motion.h2
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" text-6xl font-semibold"
              >
                Telehealth
              </motion.h2>
              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" px-5 text-center text-2xl"
              >
                <motion.p
                  variants={fadeInAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  At Spring Health and Wellness, we understand that your health and well-being are a
                  top priority. That's why we offer telehealth services, providing you with a
                  convenient and secure way to access healthcare from the comfort of your home or
                  office.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" flex flex-col items-center justify-between w-full px-2 bg-white"
              >
                <Link to="/services/telehealth">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Contact Us Today
                  </button>
                </Link>
              </motion.div>
            </motion.div>
            <div className=" w-1/2 rounded-tr-md rounded-br-md">
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md"
                src={virtual}
                alt="a cardboard sign to promote wight loss"
              ></img>
            </div>
          </motion.div>
        </div>
        {/* END DESKTOP SERVICES */}
        <div className="sm:w-2/3 mx-auto mb-10">
          <motion.h2
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-center mt-20 sm:text-4xl text-2xl"
          >
            Ready to get started? Fill out the form below and we will be happy to connect with you!
          </motion.h2>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="sm:mt-10"
          >
            <Form />
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
