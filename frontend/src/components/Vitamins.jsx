import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Accordion } from "flowbite-react";

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
        <div className=" bg-navy text-offWhite text-center text-4xl ">
          <p className=" pt-5">About Vitamin Injections</p>
          <hr className=" w-1/3 mx-auto my-4 pb-5" />
        </div>
        <p className=" text-xl text-center w-1/2 mx-auto pb-10">
          Are you showing signs of a vitamin deficiency? Are you looking for a way to get adequate
          vitamins in your system without relying on an assortment of vitamin pills every day? Do
          you feel drained, exhausted, or simply lacking in energy? If so, you might be the ideal
          candidate for our personalized vitamin injections and B12 injections. Our clinicians and
          master injectors deliver highly personalized vitamin infusions into your system to help
          you maintain the optimal micronutrient balance.
        </p>
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
                <ul class="list-disc ml-20 mt-5 text-sm text-gray-500 dark:text-gray-400">
                  <li>Numbness or tingling in the hands, legs, or feet.</li>
                  <li>Difficulty walking, stumbling, or balance problems.</li>
                  <li>Anemia, characterized by a shortage of healthy red blood cells.</li>
                  <li>An inflamed or swollen tongue.</li>
                  <li>Challenges in clear thinking and reasoning.</li>
                  <li>Memory lapses and forgetfulness.</li>
                  <li>General weakness and persistent fatigue.</li>
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
            {/* <Accordion.Panel>
              <Accordion.Title>What is Semaglutide?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Semaglutide belongs to a class of medications known as glucagon-like peptide-1
                  receptor agonists, or GLP-1 RAs. It mimics the GLP-1 hormone, released in the gut
                  in response to eating.
                </p>
              </Accordion.Content>
            </Accordion.Panel> */}
            {/* <Accordion.Panel>
              <Accordion.Title>How does Semaglutide work?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Semaglutide works by mimicing the GLP-1 hormone. GLP-1 in higher amounts interacts
                  with the parts of the brain that suppress your appetite and signal you to feel
                  full. When used in conjunction with diet and exercise, it can cause significant
                  weight loss.
                </p>
              </Accordion.Content>
            </Accordion.Panel> */}
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
      </div>
      ;
      <Footer />
    </>
  );
}

export default Vitamins;
