import React from "react";
import Form from "./Form";
function Contact() {
  return (
    <div className="sm:mt-36">
      <p className="sm:hidden text-center">CONTACT US</p>
      <h2 className="sm:hidden font-bold text-2xl text-center">We've been waiting for you.</h2>
      <p className="sm:hidden text-center text-lg">
        We want to hear from you. Let us know how we can help.
      </p>
      <p className=" text-center font-bold text-2xl">Send Us A Message.</p>
      <Form />
    </div>
  );
}

export default Contact;
