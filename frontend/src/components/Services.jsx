import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Form from "./Form";
import weight from "../assets/weight-loss.jpg";
import injection from "../assets/injection.jpg";
import virtual from "../assets/virtual.jpg";

function Services() {
  return (
    <>
      <div className="sm:mt-20 ">
        <h2 className=" py-10 bg-navy text-offWhite text-center text-2xl mb-10">Our Services</h2>
        {/* MOBILE SERVICES */}
        <div className="sm:hidden">
          <div className="grid gap-5 px-3">
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2">
                <img
                  src={weight}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Medical Weight Loss</h2>
                <p className=" mt-3 px-1">
                  Embark on your journey to a healthier, happier you with our expert weight loss
                  services. Our dedicated team is committed to helping you reach your weight loss
                  goals and improve your overall well-being. At our clinic, we offer Semaglutide and
                  Tirzepatide.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/medical-weight-loss">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2 w-full">
                <img
                  src={injection}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full w-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Vitamin Injections</h2>
                <p className=" mt-3 px-1">
                  At our clinic, we understand that vitality and well-being are essential to living
                  your best life. Our specialized vitamin injections are designed to give you that
                  extra boost of energy and support your overall health goals.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/vitamin-injections">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between h-[800px] shadow-md bg-[#fefefe] rounded-md">
              <div className=" h-1/2">
                <img
                  src={virtual}
                  alt="a cardboard sign to promote wight loss"
                  className=" rounded-tl-md rounded-tr-md object-cover h-full"
                ></img>
              </div>
              <div className=" text-center">
                <h2 className=" text-3xl font-semibold mt-4">Telehealth</h2>
                <p className=" mt-3 px-1">
                  At FMPM Weight Loss, we understand that your health and well-being are a top
                  priority. That's why we offer telehealth services, providing you with a convenient
                  and secure way to access healthcare from the comfort of your home or office.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-between w-full px-2 pb-10">
                <Link to="/services/telehealth">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* END MOBILE SERVICES */}
        {/* DESKTOP SERVICES */}
        <div className="hidden sm:block sm:visible pt-10 text-navy">
          <div className=" flex w-2/3 mx-auto h-[500px] shadow-2xl rounded-md">
            <div className=" w-1/2 flex flex-col items-center justify-between py-[50px]">
              <h2 className=" text-3xl font-semibold">Medical Weight Loss</h2>
              <div className=" px-5 text-center text-lg">
                <p>
                  Embark on your journey to a healthier, happier you with our expert weight loss
                  services. Our dedicated team is committed to helping you reach your weight loss
                  goals and improve your overall well-being. At our clinic, we offer Semaglutide and
                  Tirzepatide.
                </p>
              </div>

              <div className=" flex flex-col items-center justify-between w-full px-2">
                <Link to="/services/medical-weight-loss">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-1/2 rounded-tr-md rounded-br-md">
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md"
                src={weight}
                alt="a cardboard sign to promote wight loss"
              ></img>
            </div>
          </div>
          <div className=" flex w-2/3 mx-auto h-[500px] shadow-2xl rounded-md my-16">
            <div className=" w-1/2 rounded-tr-md rounded-br-md">
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md w-full"
                src={injection}
                alt="injectable"
              ></img>
            </div>
            <div className=" w-1/2 flex flex-col items-center justify-between py-[50px]">
              <h2 className=" text-3xl font-semibold">Vitamin Injections</h2>
              <div className=" px-5 text-center text-lg">
                <p>
                  At our clinic, we understand that vitality and well-being are essential to living
                  your best life. Our specialized vitamin injections are designed to give you that
                  extra boost of energy and support your overall health goals.
                </p>
              </div>

              <div className=" flex flex-col items-center justify-between w-full px-2">
                <Link to="/services/vitamin-injections">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex w-2/3 mx-auto h-[500px] shadow-2xl rounded-md">
            <div className=" w-1/2 flex flex-col items-center justify-between py-[50px]">
              <h2 className=" text-3xl font-semibold">Telehealth</h2>
              <div className=" px-5 text-center text-lg">
                <p>
                  At FMPM Weight Loss, we understand that your health and well-being are a top
                  priority. That's why we offer telehealth services, providing you with a convenient
                  and secure way to access healthcare from the comfort of your home or office.
                </p>
              </div>

              <div className=" flex flex-col items-center justify-between w-full px-2">
                <Link to="/services/telehealth">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    More Information
                  </button>
                </Link>
                <Link to="/contact-us">
                  <button className=" text-lg text-offWhite bg-periwinkle px-4 py-3 rounded-md mt-2">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-1/2 rounded-tr-md rounded-br-md">
              <img
                className=" h-full object-cover rounded-tr-md rounded-br-md"
                src={virtual}
                alt="a cardboard sign to promote wight loss"
              ></img>
            </div>
          </div>
        </div>
        {/* END DESKTOP SERVICES */}
        <div className="sm:w-2/3 mx-auto mb-10">
          <h2 className=" text-center mt-20 sm:text-3xl text-2xl">
            Ready to get started? Fill out the form below and we will be happy to connect with you!
          </h2>
          <div className="sm:mt-10">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
