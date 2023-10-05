import React from "react";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Contact";
import Footer from "./Footer";
import Form from "./Form";

function Services() {
  return (
    <div className="sm:mt-20 ">
      <h2 className=" py-10 bg-navy text-offWhite text-center text-2xl">Our Services</h2>
      <div className=" pt-10">
        <div>DIV 1</div>
        <div>DIV 2</div>
        <div>DIV 3</div>
      </div>
      <div>
        <h2>
          Ready to get started? Feel free to call us or fill out the form below and we will be happy
          to connect with you!
        </h2>
        <div className="mt-10">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
