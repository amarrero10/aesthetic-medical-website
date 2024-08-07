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

function Terms() {
  return (
    <div className=" sm:mt-36">
      <motion.div
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:mt-20 bg-[#015657] text-offWhite text-center text-4xl sm:text-[70px] "
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
          Terms and Conditions
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
      <p className=" text-2xl font-semibold text-center">
        This Practice Web Site is offered to you conditioned on your acceptance without modification
        of the terms, conditions, and notices contained herein. Your use of this Practice Web Site
        constitutes your agreement to all such terms, conditions, and notices.
      </p>
      <p className=" text-xl text-center sm:text-left sm:text-2xl font-semibold sm:px-[86px] px-3 mt-5">
        MODIFICATION OF THESE TERMS OF USE:
      </p>
      <p className=" text-xl text-center sm:px-16 px-3 mt-2">
        This Practice reserves the right to change the terms, conditions, and notices under which
        this Practice Web Site is offered, including but not limited to the charges associated with
        the use of this Practice Web Site. LINKS TO THIRD PARTY SITES This Practice Web Site may
        contain links to other Web Sites (“Linked Sites”). The Linked Sites are not under the
        control of this Practice and this Practice is not responsible for the contents of any Linked
        Site, including without limitation any link contained in a Linked Site, or any changes or
        updates to a Linked Site. This Practice is not responsible for webcasting or any other form
        of transmission received from any Linked Site. This Practice is providing these links to you
        only as a convenience, and the inclusion of any link does not imply endorsement by this
        Practice of the site or any association with its operators.
      </p>
      <p className=" text-xl text-center sm:text-left sm:text-2xl font-semibold sm:px-[86px] px-3 mt-5">
        NO UNLAWFUL OR PROHIBITED USE:
      </p>
      <p className=" text-xl text-center sm:px-16 px-3 mt-2">
        As a condition of your use of this Practice Web Site, you warrant to this Practice that you
        will not use this Practice Web Site for any purpose that is unlawful or prohibited by these
        terms, conditions, and notices. You may not use this Practice Web Site in any manner which
        could damage, disable, overburden, or impair this Practice Web Site or interfere with any
        other party’s use and enjoyment of this Practice Web Site. You may not obtain or attempt to
        obtain any materials or information through any means not intentionally made available or
        provided for through this Practice Web Sites.
      </p>
      <p className=" text-xl text-center sm:text-left sm:text-2xl font-semibold sm:px-[86px] px-3 mt-5">
        USE OF COMMUNICATION SERVICES:
      </p>
      <p className=" text-xl text-center sm:px-16 px-3 mt-2">
        This Practice Web Site may contain bulletin board services, chat areas, news groups, forums,
        communities, personal web pages, calendars, and/or other message or communication facilities
        designed to enable you to communicate with the public at large or with a group
        (collectively, “Communication Services”), you agree to use the Communication Services only
        to post, send and receive messages and material that are proper and related to the
        particular Communication Service. By way of example, and not as a limitation, you agree that
        when using a Communication Service, you will not: Defame, abuse, harass, stalk, threaten or
        otherwise violate the legal rights (such as rights of privacy and publicity) of others.
        Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory,
        infringing, obscene, indecent or unlawful topic, name, material or information. Upload files
        that contain software or other material protected by intellectual property laws (or by
        rights of privacy of publicity) unless you own or control the rights thereto or have
        received all necessary consents. Upload files that contain viruses, corrupted files, or any
        other similar software or programs that may damage the operation of another’s computer.
        Advertise or offer to sell or buy any goods or services for any business purpose, unless
        such Communication Service specifically allows such messages. Conduct or forward surveys,
        contests, pyramid schemes or chain letters. Download any file posted by another user of a
        Communication Service that you know, or reasonably should know, cannot be legally
        distributed in such manner. Falsify or delete any author attributions, legal or other proper
        notices or proprietary designations or labels of the origin or source of software or other
        material contained in a file that is uploaded. Restrict or inhibit any other user from using
        and enjoying the Communication Services. Violate any code of conduct or other guidelines
        which may be applicable for any particular Communication Service. Harvest or otherwise
        collect information about others, including e-mail addresses, without their consent. Violate
        any applicable laws or regulations. This Practice has no obligation to monitor the
        Communication Services. However, this Practice reserves the right to review materials posted
        to a Communication Service and to remove any materials in its sole discretion. This Practice
        reserves the right to terminate your access to any or all of the Communication Services at
        any time without notice for any reason whatsoever. Materials uploaded to a Communication
        Service may be subject to posted limitations on usage, reproduction and/or dissemination.
        You are responsible for adhering to such limitations if you download the materials.
      </p>
      <p className=" text-xl text-center sm:px-16 px-3 mt-20">
        LIABILITY DISCLAIMER THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
        AVAILABLE THROUGH THIS PRACTICE WEB SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS.
        CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THIS PRACTICE AND/OR ITS SUPPLIERS
        MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS PRACTICE WEB SITE AT ANY TIME. ADVICE RECEIVED
        VIA THIS PRACTICE WEB SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR
        FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE
        TAILORED TO YOUR SITUATION. THIS PRACTICE AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT
        THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION,
        SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON This Practice WEB SITE FOR
        ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION,
        SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR
        CONDITION OF ANY KIND. THIS PRACTICE AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND
        CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
        GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY
        APPLICABLE LAW, IN NO EVENT SHALL THIS PRACTICE AND/OR ITS SUPPLIERS BE LIABLE FOR ANY
        DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES
        WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING
        OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS PRACTICE WEB SITE, WITH
        THE DELAY OR INABILITY TO USE THIS PRACTICE WEB SITE OR RELATED SERVICES, THE PROVISION OF
        OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
        RELATED GRAPHICS OBTAINED THROUGH THIS PRACTICE WEB SITE, OR OTHERWISE ARISING OUT OF THE
        USE OF THIS PRACTICE WEB SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY
        OR OTHERWISE, EVEN IF THIS PRACTICE OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE
        POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
        LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY
        NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS PRACTICE WEB SITE, OR
        WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS
        PRACTICE WEB SITE. COPYRIGHT AND TRADEMARK NOTICES: All contents of this website are
        COPYRIGHT &copy; {new Date().getFullYear()} Aura Wellness. All Rights Reserved. All logos
        are trademarks and service marks of Aura Wellness. All other trademarks, service marks and
        logos used in this website are the property of their respective owners. TRADEMARKS The names
        of actual companies and products mentioned herein may be the trademarks of their respective
        owners. The example companies, organizations, products, people and events depicted herein
        are fictitious. No association with any real company, organization, product, person, or
        event is intended or should be inferred. Any rights not expressly granted herein are
        reserved. NOTICES Please contact us by phone at 727-234-8543 or by mail at 6333 54th Ave
        North, St. Petersburg, FL 33709.
      </p>

      <Footer />
    </div>
  );
}

export default Terms;
