"use client";
import { Accordion } from "flowbite-react";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import weightloss from "../assets/weightloss.jpg";

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
    <div className="bg-[#fff3e4] ">
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:mt-36 bg-[#015657] text-offWhite text-center text-4xl sm:text-[70px] "
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
          className=" w-1/3 mx-auto my-4 pb-5"
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
        At Spring Health and Wellness, we are here to support you on your journey to better health
        and well-being.
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
            <h2 className=" text-5xl font-semibold">Semaglutide</h2>
            <p className=" text-2xl py-8 px-3 italic">
              When it comes to managing your weight, discovering an effective solution can be quite
              a journey. If you're on the lookout for a safe and proven method to reach your weight
              loss goals, consider semaglutide. This injectable medication, taken once a week,
              offers a viable approach for addressing obesity and has garnered support from multiple
              research studies.
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
            <h2 className=" text-5xl font-semibold">Tirzepatide</h2>
            <p className=" text-2xl py-8 px-3 italic">
              As a part of our comprehensive approach to supporting your journey toward achieving
              your healthy weight loss goals, we offer a range of medical tools and interventions.
              These recognized medical aids encompass appetite suppressants and vitamin injections,
              such as Tirzepatide, which effectively reduces food intake by lowering appetite,
              slowing the digestion of food in the stomach, and helping decrease body fat
              percentage.
            </p>
            <Link to="/contact-us">
              <button className=" text-2xl text-offWhite bg-periwinkle px-4 py-3 rounded-md ">
                Contact Us!
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
        className=" sm:text-[70px] text-4xl sm:text-center font-bold sm:w-full mx-auto mb-1 px-3 sm:px-0 italic text-offWhite bg-darkpurple py-10 "
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
          className=" text-4xl pt-4"
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
          className=" text-4xl pt-4"
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
        className=" flex flex-col sm:flex-row sm:h-[900px] justify-around mx-auto 2xl:w-2/3 px-3 sm:px-0"
      >
        <Accordion
          collapseAll
          className=" text-3xl 2xl:w-[800px] sm:w-[600px] w-full px-2 sm:px-0 shadow-2xl mt-10 text-navy h-fit bg-white"
        >
          <Accordion.Panel>
            <Accordion.Title>What is Semaglutide?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Semaglutide belongs to a class of medications known as glucagon-like peptide-1
                receptor agonists, or GLP-1 RAs. It mimics the GLP-1 hormone, released in the gut in
                response to eating.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How does Semaglutide work?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Semaglutide works by mimicking the GLP-1 hormone. GLP-1 in higher amounts interacts
                with the parts of the brain that suppress your appetite and signal you to feel full.
                When used in conjunction with diet and exercise, it can cause significant weight
                loss.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How is Semaglutide administered?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Semaglutide is a prescription medication prescribed for weight loss in adults who
                are dealing with obesity or being overweight while also having at least one
                weight-related health concern. This medication is administered via a weekly
                injection.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Where is Semaglutide injected?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Semaglutide is an injectable medication designed for weight management, typically
                administered in the abdominal area or 'love handles.' At Spring Health and Wellness,
                we offer Semaglutide injections as an integral part of our comprehensive weight loss
                program. Semaglutide operates by emulating the effects of a hormone known as GLP-1,
                which plays a role in regulating blood sugar and controlling appetite. Through its
                appetite-reducing properties and the promotion of a sense of fullness, Semaglutide
                can be a valuable tool in your weight loss journey. At Spring Health and Wellness,
                our team of healthcare professionals administers Semaglutide injections and closely
                monitors your progress, adjusting your dosage as necessary to help you attain your
                weight loss objectives.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>When will I see results?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Upon commencing semaglutide treatment, it's important to note that significant
                weight loss may not become noticeable for a few weeks, and it is advisable to
                maintain this treatment for a minimum of 16 weeks to assess its effectiveness. The
                duration of semaglutide's effects can vary from person to person, influenced by
                factors such as individual metabolism, dietary choices, and exercise routines.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Why is Semaglutide taken once a week?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Opting for a once-weekly Semaglutide dosage is preferred over daily regimens due to
                its proven effectiveness and enhanced convenience for patients. With a longer
                half-life, Semaglutide remains in the body for an extended period, ensuring a
                continuous supply of weight loss benefits. Moreover, the simplicity of the
                once-weekly Semaglutide injection makes it a convenient and user-friendly choice for
                individuals committed to realizing their weight loss objectives.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Why is Semaglutide so costly?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Semaglutide is a medication utilized for the treatment of obesity, and its cost can
                be relatively high for several reasons. Firstly, the drug is relatively new to the
                market, and limited availability often results in elevated prices. Additionally, as
                an injectable medication, it involves additional manufacturing processes, further
                contributing to its cost. Lastly, the relatively high price of Semaglutide reflects
                its remarkable effectiveness, offering the potential for substantial weight loss
                results for patients. Nevertheless, at Spring Health and Wellness, we provide
                cost-effective pricing options and tailor-made treatment plans, making Semaglutide
                more accessible to individuals in need of this beneficial treatment.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* <Accordion.Panel>
            <Accordion.Title>
              What is the difference between Tirzepatide and Semaglutide?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Tirzepatide and Semaglutide are both medications used in the treatment of weight
                loss and they belong to the same class of drugs known as glucagon-like peptide-1
                (GLP-1) receptor agonists. However, there are several differences between these two
                medications:
              </p>
              <ul>
                <li className=" list-disc ml-10 mb-2">
                  Tirzepatide is a dual GIP and GLP-1 receptor agonist. It activates both the GLP-1
                  receptor and the glucose-dependent insulinotropic polypeptide (GIP) receptor,
                  resulting in improved blood sugar control and appetite regulation.
                </li>
                <li className=" list-disc ml-10 mb-2">
                  Semaglutide is a GLP-1 receptor agonist that primarily targets the GLP-1 receptor.
                  It helps regulate blood sugar levels and control appetite.
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
        <Accordion
          collapseAll
          className="2xl:w-[800px] sm:w-[600px] w-full px-2 sm:px-0 shadow-2xl mt-10 text-navy h-fit text-3xl bg-white"
        >
          <Accordion.Panel>
            <Accordion.Title>What is Tirzepatide?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Tirzepatide is a single molecule that activates the body's receptors for GIP and
                GLP-1, which are natural incretin hormones. Both GIP and GLP-1 receptors are found
                in areas of the human brain important for appetite regulation. Tirzepatide has been
                shown to decrease food intake and modulate fat utilization.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How Does Tirzepatide Work? </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Tirzepatide works by activating both the GLP-1 and GIP receptors, which can lead to
                increased feelings of fullness (satiety) and reduced food intake. This helps
                patients manage their weight.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How is Tirzepatide administered?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Tirzepatide is administered by injection and the dosing schedule can vary. Contact
                us to set up a personalized plan!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title> Who is a good candidate for Tirzepatide?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Tirzepatide is typically prescribed for adults diagnosed with type 2 diabetes.
                However, in some cases, healthcare providers may prescribe it off-label for weight
                management purposes, in combination with dietary modifications and regular exercise.
                This extended usage is considered for adults classified as obese (with a BMI of 30
                or higher) or overweight (with a BMI between 27 and 29), provided they have at least
                one weight-related medical condition, such as high blood pressure or high
                cholesterol.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* <Accordion.Panel>
            <Accordion.Title>What is Phentermine?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Phentermine is a prescription medication that is commonly used as an appetite
                suppressant. It is primarily prescribed to help individuals with obesity or those
                who are significantly overweight as part of a comprehensive weight loss program.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How does Phentermine work?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Phentermine works by stimulating the hypothalamus gland in return affecting certain
                neurotransmitters to decrease appetite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How often and when should I take phentermine?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Many patients typically begin their Phentermine regimen by taking a half of a 37.5mg
                tablet once a day for the initial two weeks. After this initial period, the dosage
                is often increased to a full 37.5mg tablet taken daily. For optimal hunger control
                throughout the day and to ensure the medication's effects wear off before bedtime,
                it is generally recommended to take the pill in the morning.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Who is Phentermine typically prescribed to?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl">
                Phentermine is one of several medications that are FDA-approved to help treat
                obesity. Usually, phentermine can be prescribed if your body mass index (BMI) is
                higher than 30 kg/m2 or higher than 27 kg/m2 with other health conditions. It’s
                important to know that the medication should be used in addition to a healthy diet
              </p>
            </Accordion.Content>
          </Accordion.Panel> */}
        </Accordion>
      </motion.div>

      <Footer />
    </div>
  );
}

export default WeightLoss;
