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

function Privacy() {
  return (
    <div className=" sm:mt-36 ">
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:mt-20 bg-[#015657] text-offWhite text-center text-4xl sm:text-[70px] "
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
          Privacy Statement
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
      <div className="sm:px-20 px-3 text-center">
        <p className=" text-center sm:text-2xl  ">
          We are committed to protecting your privacy and developing technology that gives you the
          most powerful and safe online experience. This Statement of Privacy applies to our
          Practice’s Web site and governs data collection and usage. By using this website, you
          consent to the data practices described in this statement.
        </p>
        <p className=" font-bold text-xl mt-5">Collection of your Personal Information:</p>
        <p className=" mt-2 ">
          This Practice collects personally identifiable information, such as your e-mail address,
          name, or telephone number. There is also information about your computer hardware and
          software that is automatically collected by this website. This information can include:
          your IP address, browser type, domain names, access times and referring Web site
          addresses. This information is used for the operation of the service, to maintain quality
          of the service, and to provide general statistics regarding use of this Web site. Please
          keep in mind that if you directly disclose personally identifiable information or
          personally sensitive data through public message boards, this information may be collected
          and used by others. This Practice encourages you to review the privacy statements of Web
          sites you choose to link to from the website so that you can understand how those Web
          sites collect, use and share your information. This Practice is not responsible for the
          privacy statements or other content on any other Web sites.
        </p>
        <p className=" font-bold text-xl mt-5">Use of your Personal Information:</p>
        <p className=" mt-2 ">
          This Practice collects and uses your personal information to operate the Web site and
          deliver the services you have requested. This Practice also uses your personally
          identifiable information to inform you of other products or services available from this
          Practice and its affiliates. This Practice may also contact you via surveys to conduct
          research about your opinion of current services or of potential new services that may be
          offered. This Practice does not sell, rent or lease its customer lists to third parties.
          This Practice may share data with trusted partners to help us perform statistical
          analysis, send you email or postal mail, provide customer support, or arrange for
          deliveries. All such third parties are prohibited from using your personal information
          except to provide these services and they are required to maintain the confidentiality of
          your information. This Practice does not use or disclose sensitive personal information,
          such as race, religion, or political affiliations, without your explicit consent. This
          Practice will disclose your personal information, without notice, only if required to do
          so by law.
        </p>
        <p className=" font-bold text-xl mt-5">Use of Cookies:</p>
        <p className=" mt-2 ">
          The Web site uses “cookies” to help this Practice personalize your online experience. A
          cookie is a text file that is placed on your hard disk by a Web page server. Cookies
          cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely
          assigned to you, and can only be read by a web server in the domain that issued the cookie
          to you. Security of your Personal Information This Practice secures your personal
          information from unauthorized access, use or disclosure. This Practice secures the
          personally identifiable information you provide on computer servers in a controlled,
          secure environment, protected from unauthorized access, use or disclosure. When personal
          information (such as a credit card number) is transmitted to other Web sites, it is
          protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.
          Changes to this Statement This Practice will occasionally update this Statement of Privacy
          to reflect company and customer feedback. We encourage you to periodically review this
          Statement to be informed of how this Practice is protecting your information. Contact
          Information Please contact us by phone at 727-234-8543 or by mail at 6333 54th Ave North,
          St. Petersburg, FL 33709.
        </p>
      </div>
      <div className=" sm:absolute sm:w-screen sm:bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
