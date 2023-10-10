import React, { useEffect, useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";

function Form() {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const [csrfToken, setCsrfToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Start submitting
    setIsSubmitting(true);

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
    } finally {
      // Set a short delay to visually indicate submission completion
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000); // Adjust the duration as needed

      setFormState(""); // Clear the form
    }
  };

  return (
    <div className="mt-10">
      <form
        className="flex flex-col sm:w-2/3  w-11/12 mx-auto sm:bg-navy sm:text-offWhite sm:p-10 sm:rounded-lg sm:shadow-lg"
        onSubmit={submitHandler}
      >
        <label htmlFor="name" className="text-xl ml-2">
          Name
        </label>
        <div className="flex items-center w-full p-2 relative">
          <FiUser className="h-6 w-6 ml-1 absolute text-navy" />
          <input
            required
            id="name"
            type="text"
            name="name"
            value={formState.name || ""}
            onChange={changeHandler}
            placeholder="Enter your name"
            className="w-full p-3 pl-9 text-lg text-navy focus:outline-none focus:ring-greenTeal focus:ring-1"
          ></input>
        </div>
        <label className="text-xl ml-2" htmlFor="email">
          Email
        </label>
        <div className="flex items-center w-full p-2 relative">
          <FiMail className="h-6 w-6 ml-1 absolute text-navy" />
          <input
            required
            id="email"
            type="email"
            name="email"
            value={formState.email || ""}
            placeholder="john@email.com"
            onChange={changeHandler}
            className="w-full p-3 pl-9 text-lg text-navy focus:outline-none focus:ring-greenTeal focus:ring-1"
          ></input>
        </div>
        <label className="text-xl ml-2" htmlFor="message">
          Message
        </label>
        <div className="flex items-center w-full p-2 relative">
          <FiMessageCircle className="h-6 w-6 ml-1 absolute text-navy" />
          <textarea
            required
            style={{ resize: "none" }}
            rows={3}
            id="message"
            placeholder="I am intested in your vitamin injections services."
            name="message"
            value={formState.message || ""}
            onChange={changeHandler}
            className="w-full p-3 text-lg text-navy focus:outline-none focus:ring-greenTeal focus:ring-1 pl-9"
          ></textarea>
        </div>
        <label className="text-xl ml-2" htmlFor="phone">
          Phone Number
        </label>
        <div className="flex items-center w-full p-2 relative">
          <FiPhone className="h-6 w-6 ml-1 absolute text-navy" />
          <input
            id="phone"
            name="phone"
            value={formState.phone || ""}
            onChange={changeHandler}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            type="tel"
            placeholder="3523405990"
            className="w-full p-3 text-lg text-navy focus:outline-none focus:ring-greenTeal focus:ring-1 pl-9"
          />
        </div>
        <button
          type="submit"
          class="hidden relative sm:inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-offwhite rounded-md hover:text-offWhite group hover:bg-navy w-[200px] mx-auto mt-10"
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-periwinkle opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative text-offWhite"> {isSubmitting ? "Submitting..." : "Submit"}</span>
        </button>
        <button
          type="submit"
          className="border border-periwinkle w-1/2 mx-auto mt-5 rounded-lg py-4 text-xl text-navy sm:hidden "
          disabled={isSubmitting} // Disable the button when submitting
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
