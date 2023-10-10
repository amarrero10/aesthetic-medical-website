import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Accordion } from "flowbite-react";
import b12 from "../assets/b12.jpg";
import fatBurner from "../assets/fat-burner.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";

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

function Vitamins() {
  return (
    <>
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
            Vitamin Injections
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

        <motion.h2
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-center  text-3xl font-bold mb-3"
        >
          Vitamin B12 Injections
        </motion.h2>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-xl text-center sm:w-1/2 sm:px-0 px-3 mx-auto pb-10"
        >
          Experience the benefits of our personalized vitamin injections, including B12 injections,
          and supercharge your energy levels without the hassle of daily pills. If you often find
          yourself feeling fatigued or in need of an energy boost, we offer tailored vitamin
          infusions designed to help you maintain the ideal micronutrient balance.
        </motion.p>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" min-[2000px]:w-1/2 flex sm:flex-row flex-col sm:w-2/3 px-3 sm:px-0 mx-auto shadow-2xl mb-10 sm:h-[380px] rounded-md"
        >
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" sm:w-1/2 "
          >
            <motion.img
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-full w-full object-cover rounded-tl-md rounded-bl-md"
              src={b12}
              alt="Energetic and carefree woman."
            ></motion.img>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" flex flex-col justify-between py-10  sm:w-1/2 px-3 text-navy "
          >
            <motion.p
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center"
            >
              Spring Health and Wellness offers vitamin B12 injections because they provide numerous
              benefits, including boosting energy levels, enhancing brain function, promoting weight
              loss, and more. Vitamin B12 injections also play a critical role in brain function,
              DNA production, and red blood cell formation. They can be particularly beneficial for
              individuals following vegan or vegetarian diets that may be deficient in vitamin B12.
            </motion.p>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex items-center justify-center"
            >
              <Link to="/contact-us">
                <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2 ">
                  Request Appointment
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.h2
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-center  text-4xl font-bold mb-3 sm:mt-32 mt-12"
        >
          Fat Burners
        </motion.h2>
        <motion.p
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-xl text-center sm:w-1/2 px-3 sm:px-0 mx-auto pb-10"
        >
          if you're looking to expedite your weight loss journey, consider our range of highly
          effective fat burners. We can provide you with the perfect combination of nutrients and
          compounds to support your fitness goals. Achieve your health and wellness aspirations with
          our comprehensive vitamin and fat burner solutions.
        </motion.p>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" flex sm:flex-row flex-col px-3 sm:px-0 min-[2000px]:w-1/2 sm:w-2/3 mx-auto shadow-2xl mb-10 sm:h-[380px] rounded-md"
        >
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" sm:w-1/2 "
          >
            <motion.img
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" h-full w-full object-cover rounded-tl-md rounded-bl-md"
              src={fatBurner}
              alt="Energetic and carefree woman."
            ></motion.img>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="  flex flex-col justify-between py-5  sm:w-1/2 px-3 text-navy "
          >
            <motion.p
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-center"
            >
              At Spring Health and Wellness, we provide specialized fat-burning injections designed
              to support your weight loss journey. Our injections contain a unique blend of
              lipotropic compounds, vitamins, minerals, and amino acids. These powerful ingredients
              work together to boost your metabolism, enhance the breakdown of fat in the liver, and
              aid in the removal of stored fat from your body. Our fat-burning injections can be a
              valuable addition to your weight management plan, helping you achieve your goals for a
              healthier, more vibrant you.
            </motion.p>
            <motion.div
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex items-center justify-center"
            >
              <Link to="/contact-us">
                <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2 ">
                  Request Appointment
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
          className=" text-4xl sm:text-center font-bold sm:w-full mx-auto mb-1 px-3 sm:px-0 italic text-offWhite bg-darkpurple py-10 "
        >
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            FAQs.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-2xl pt-4"
          >
            Can't find the answer you're looking for?
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-2xl pt-4"
          >
            We've shared some of the most frequently asked questions to help you out!
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Accordion
            collapseAll
            className="sm:w-2/3 w-full px-2 sm:px-0 shadow-2xl mx-auto mt-10 text-navy"
          >
            <Accordion.Panel>
              <Accordion.Title>What are the symptoms of B12 deficiency?</Accordion.Title>
              <Accordion.Content>
                <p className=" text-gray-500 dark:text-gray-400">
                  Vitamin B12 deficiency can develop slowly, causing symptoms to emerge gradually
                  and intensify over time. It can lead to various symptoms, sometimes making it
                  difficult to distinguish from other health issues. Common symptoms of vitamin B12
                  deficiency include:
                </p>
                <ul className=" list-disc ml-10 text-sm italic">
                  <li className=" pt-3">Numbness or tingling in the hands, legs, or feet.</li>
                  <li className=" pt-3">Difficulty walking, stumbling, or balance problems.</li>
                  <li className=" pt-3">
                    Anemia, characterized by a shortage of healthy red blood cells.
                  </li>
                  <li className=" pt-3">An inflamed or swollen tongue.</li>
                  <li className=" pt-3">Challenges in clear thinking and reasoning.</li>
                  <li className=" pt-3">Memory lapses and forgetfulness.</li>
                  <li className=" pt-3">General weakness and persistent fatigue.</li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How long does a B12 shot last? </Accordion.Title>
              <Accordion.Content>
                <p className=" text-gray-500 dark:text-gray-400">
                  Typically, vitamin B12 injections provide benefits for approximately one month
                  when there is no existing deficiency. However, if your blood test results indicate
                  a B12 deficiency, our healthcare providers will create a personalized treatment
                  plan designed to address your unique needs and objectives.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How often should B12 injections be given?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  While each individual’s deficiency might be different, it is recommended that
                  vitamin B12 injections be done at 100 mcg daily for the first week, then every
                  other day for the second week, and every three to four days for the next month.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Once your vitamin B12 deficiency is under control, you only need a recommended
                  dose of 100 mcg once a month to maintain the results. As previously stated, it
                  will depend on the severity of the deficiency in each individual — we can
                  customize a plan that will work best for you.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How Do Fat Burning Injections Work?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Fat-burning injections comprise a combination of vitamins, minerals, and amino
                  acids designed to assist the body during the weight loss process. These compounds,
                  referred to as lipotropics, facilitate the breakdown of fat within the liver. In
                  the absence of lipotropics, fats and bile can accumulate in the liver, resulting
                  in a sluggish fat metabolism and potential weight gain.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What is in a Fat Burning Injection?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                  Discover the key components of fat-burning injections and their roles in your
                  body:
                </p>
                <ul className=" list-disc ml-10 text-sm italic">
                  <li className=" pt-3">
                    Vitamin B12: Often referred to as the body's energy vitamin, Vitamin B12 is
                    believed by some weight loss experts to have appetite-suppressing qualities. It
                    also encourages the utilization of fat and carbohydrate stores.
                  </li>
                  <li className=" pt-3">
                    Inositol: This essential vitamin plays a pivotal role in regulating fat and
                    cholesterol metabolism within the body. Inositol also contributes to the
                    prevention of arterial hardening.
                  </li>
                  <li className=" pt-3">
                    Choline: Choline plays a vital role in reducing excess fat in the liver and
                    supporting the body's natural hormone production.
                  </li>
                  <li className=" pt-3">
                    Methionine: As an amino acid, Methionine aids in the removal of free radical
                    cells, supports fat breakdown, aids digestion, and facilitates the removal of
                    heavy metals from the body. It also boosts energy levels and promotes the
                    development of lean muscle mass.
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
            {/* <Accordion.Panel>
              <Accordion.Title>How is Semaglutide administered?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Semaglutide is administered by injection and the dosing is weekly.
                </p>
              </Accordion.Content>
            </Accordion.Panel> */}
            {/* <Accordion.Panel>
              <Accordion.Title>
                What is the difference between Tirzepatide and Semaglutide?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Tirzepatide and Semaglutide are both medications used in the treatment of weight
                  loss and they belong to the same class of drugs known as glucagon-like peptide-1
                  (GLP-1) receptor agonists. However, there are several differences between these
                  two medications:
                </p>
                <ul>
                  <li className=" list-disc ml-10 mb-2">
                    Tirzepatide is a dual GIP and GLP-1 receptor agonist. It activates both the
                    GLP-1 receptor and the glucose-dependent insulinotropic polypeptide (GIP)
                    receptor, resulting in improved blood sugar control and appetite regulation.
                  </li>
                  <li className=" list-disc ml-10 mb-2">
                    Semaglutide is a GLP-1 receptor agonist that primarily targets the GLP-1
                    receptor. It helps regulate blood sugar levels and control appetite.
                  </li>
                  <li className=" list-disc ml-10 mb-2">
                    While both Semaglutide and Tirzepatide have led to significant weight loss in
                    study overweight and obese participants (when combined with lifestyle changes),
                    Tirzepatide seems to offer more impressive weight loss results when taken at the
                    highest available dose.
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel> */}
          </Accordion>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" text-center my-10"
        >
          <motion.p
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-3xl font-semibold italic"
          >
            Have more questions or excited to begin? Reach out to us today!{" "}
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" flex sm:flex-row flex-col md:w-[60%] mx-auto justify-between  items-center mt-3 py-4"
        >
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex items-center "
          >
            <a
              href="tel:(352) 340-5990"
              className="flex items-center text-navy text-xl mb-6 sm:mb-0"
            >
              <BsTelephone className="mr-2" />
              (352) 340-5990
            </a>
          </motion.div>
          <Link to="/contact-us">
            <button className="  py-3 px-5 border border-navy rounded-md text-navy font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite">
              Request Appointment
            </button>
          </Link>
        </motion.div>
      </div>
      ;
      <Footer />
    </>
  );
}

export default Vitamins;
