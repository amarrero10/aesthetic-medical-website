"use client";
import { Accordion } from "flowbite-react";
import Footer from "./Footer";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function WeightLoss() {
  return (
    <>
      <h2 className=" sm:mt-20 py-10 text-center text-3xl font-semibold bg-navy text-offWhite">
        Medical Weight Loss
      </h2>
      <p className=" text-center px-3 sm:px-[300px] mt-10 sm:text-xl mb-10">
        At FMPM Weight Loss, we are here to support you on your journey to better health and
        well-being. We understand that embarking on a weight loss journey can be a significant step,
        and we're here to make it a positive and empowering experience for you. Our dedicated team
        at FMPM Weight Loss is proud to offer you the latest advancements in weight loss
        medications, including Semaglutide and Tirzepatide. These cutting-edge treatments are
        designed to help you achieve your weight loss goals safely and effectively.
      </p>

      <p className=" text-4xl font-bold sm:w-2/3 mx-auto mb-1 px-3 sm:px-0">FAQs.</p>
      <Accordion collapseAll className="sm:w-2/3 w-full px-2 sm:px-0 shadow-lg mx-auto text-navy">
        <Accordion.Panel>
          <Accordion.Title>What is Tirzepatide?</Accordion.Title>
          <Accordion.Content>
            <p>
              Tirzepatide is a single molecule that activates the body's receptors for GIP and
              GLP-1, which are natural incretin hormones. Both GIP and GLP-1 receptors are found in
              areas of the human brain important for appetite regulation. Tirzepatide has been shown
              to decrease food intake and modulate fat utilization.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How Does Tirzepatide Work? </Accordion.Title>
          <Accordion.Content>
            <p>
              Tirzepatide works by activating both the GLP-1 and GIP receptors, which can lead to
              increased feelings of fullness (satiety) and reduced food intake. This helps patients
              manage their weight.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How is Tirzepatide administered?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Tirzepatide is administered by injection and the dosing schedule can vary. Contact us
              to set up a personalized plan!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is Semaglutide?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Semaglutide belongs to a class of medications known as glucagon-like peptide-1
              receptor agonists, or GLP-1 RAs. It mimics the GLP-1 hormone, released in the gut in
              response to eating.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does Semaglutide work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Semaglutide works by mimicing the GLP-1 hormone. GLP-1 in higher amounts interacts
              with the parts of the brain that suppress your appetite and signal you to feel full.
              When used in conjunction with diet and exercise, it can cause significant weight loss.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How is Semaglutide administered?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Semaglutide is administered by injection and the dosing is weekly.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between Tirzepatide and Semaglutide?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Tirzepatide and Semaglutide are both medications used in the treatment of weight loss
              and they belong to the same class of drugs known as glucagon-like peptide-1 (GLP-1)
              receptor agonists. However, there are several differences between these two
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
                While both Semaglutide and Tirzepatide have led to significant weight loss in study
                overweight and obese participants (when combined with lifestyle changes),
                Tirzepatide seems to offer more impressive weight loss results when taken at the
                highest available dose.
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <div className=" text-center my-10">
        <p>Ready to Start your journey? Contact us today! </p>
      </div>
      <div className=" flex sm:flex-row flex-col md:w-[60%] mx-auto justify-between  items-center mt-3 py-4">
        <div className="flex items-center ">
          <a
            href="tel:(352) 340-5990"
            className="flex items-center text-greenTeal text-xl mb-6 sm:mb-0"
          >
            <BsTelephone className="mr-2" />
            (352) 340-5990
          </a>
        </div>
        <Link to="/contact-us">
          <button className="  py-3 px-5 border border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:text-offWhite">
            Request Appointment
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default WeightLoss;
