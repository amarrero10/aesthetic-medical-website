import React, { useEffect, useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { motion as m } from "framer-motion";
function Contact() {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch the CSRF token when the component mounts
    async function fetchCsrfToken() {
      try {
        const response = await fetch("/api/csrf/restore", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });

        if (response.ok) {
          // Extract the CSRF token from cookies
          const cookies = document.cookie.split("; ");
          const csrfCookie = cookies.find((cookie) => cookie.startsWith("XSRF-TOKEN="));
          if (csrfCookie) {
            const csrfToken = csrfCookie.split("=")[1];
            setCsrfToken(csrfToken);
          }
        } else {
          console.error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }

    fetchCsrfToken();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "csrf-token": csrfToken,
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // Add code to display a success message or redirect the user
      } else {
        console.error("Email sending failed");
        // Add code to display an error message
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setFormState("");
  };
  return (
    <>
      <p className="sm:hidden text-center">CONTACT US</p>
      <h2 className="sm:hidden font-bold text-2xl text-center">We've been waiting for you.</h2>
      <p className="sm:hidden text-center text-lg">
        We want to hear from you. Let us know how we can help.
      </p>
      <div className=" mt-20">
        <p className=" text-center font-bold text-2xl">Send Us A Message.</p>
        <form className="flex flex-col  w-11/12 mx-auto bg-red-300" onSubmit={submitHandler}>
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <div className="flex items-center w-full p-2">
            <FiUser className="h-6 w-6 mr-2" />
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name || ""}
              onChange={changeHandler}
              placeholder="Enter your name"
              className="w-full p-3 text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            ></input>
          </div>
          <label htmlFor="email">Email</label>
          <div className="flex items-center w-full p-2">
            <FiMail className="h-6 w-6 mr-2" />
            <input
              id="email"
              type="email"
              name="email"
              value={formState.email || ""}
              placeholder="john@email.com"
              onChange={changeHandler}
              className="w-full p-3 text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            ></input>
          </div>
          <label htmlFor="message">Message</label>
          <div className="flex items-center w-full p-2">
            <FiMessageCircle className="h-6 w-6 mr-2" />
            <textarea
              id="message"
              placeholder="Enter your message"
              name="message"
              value={formState.message || ""}
              onChange={changeHandler}
              className="w-full p-3 text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            ></textarea>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <div className="flex items-center w-full p-2">
            <FiPhone className="h-6 w-6 mr-2" />
            <input
              id="phone"
              name="phone"
              value={formState.phone || ""}
              onChange={changeHandler}
              type="numeric"
              placeholder="8131234567"
              className="w-full p-3 text-lg focus:outline-none focus:ring-sky-500 focus:ring-1"
            ></input>
          </div>
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="border border-blue-300 p-3 rounded-md w-1/2 mx-auto"
          >
            Submit
          </m.button>
        </form>
      </div>
    </>
  );
}

export default Contact;
