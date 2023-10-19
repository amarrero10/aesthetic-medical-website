import React from "react";
import Form from "./Form";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="h-screen">
      <div className="sm:mt-36 mb-36">
        <p className="sm:hidden text-center">CONTACT US</p>
        <h2 className="sm:hidden font-bold text-2xl text-center">We've been waiting for you.</h2>
        <p className="sm:hidden text-center text-lg">
          We want to hear from you. Let us know how we can help.
        </p>
        <p className=" text-center font-bold text-5xl">Send Us A Message.</p>
        <Form />
      </div>
      <div className="-bottom-40">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
