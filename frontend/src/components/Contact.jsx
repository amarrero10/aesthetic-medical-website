import React, { useEffect, useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { motion as m } from "framer-motion";
import Form from "./Form";
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
