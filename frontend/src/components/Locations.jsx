import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { motion } from "framer-motion";
import "./locations.css";
import Footer from "./Footer";
import Form from "./Form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";

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

function Locations() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1fuzpWQiwVrOnNHqOqnvPsfiNvqZp8Io",
  });

  const markers = [
    {
      lat: 28.454063870873934,
      lng: -82.6284413736912,
      name: "Spring Hill Location",
      address: "5270 Applegate Dr, Spring Hill, FL 34606",
    },
    {
      lat: 28.208274068627233,
      lng: -82.67745381602516,
      name: "Spring Hill Location",
      address: "5270 Applegate Dr, Spring Hill, FL 34606",
    },
    {
      lat: 27.821497726533536,
      lng: -82.72277368719645,
      name: "Spring Hill Location",
      address: "5270 Applegate Dr, Spring Hill, FL 34606",
    },
    {
      lat: 27.948626126461225,
      lng: -82.78777134671049,
      name: "Spring Hill Location",
      address: "5270 Applegate Dr, Spring Hill, FL 34606",
    },
  ];

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <>
      <div className=" sm:my-36 ">
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" bg-[#015657] text-offWhite text-center text-4xl py-2 mb-4 sm:mb-0 "
        >
          <motion.h2
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" pt-12 pb-4 text-[70px]"
          >
            Locations
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
        <div className=" flex sm:flex-row flex-col items-center justify-between  sm:w-2/3 mx-auto sm:mt-20 px-3 sm:px-0">
          <div className=" text-navy h-full sm:w-1/2 mb-10 sm:mb-0 sm:mr-10 border border-navy py-24 sm:pl-9">
            <p className=" text-5xl font-semibold text-center sm:text-center mb-10">
              Start your journey to a better you today with Spring Health and Wellness!
            </p>
            <PiPlantFill className=" text-6xl mx-auto mb-10" />
            <p className=" text-4xl mb-4 text-center sm:text-left ">
              *Discover our convenient locations to help you achieve your health and wellness goals:
            </p>
            <ul>
              <li className=" list-disc ml-20 text-3xl italic">Tampa Bay</li>
              <li className=" list-disc ml-20 text-3xl italic">Spring Hill</li>
              <li className=" list-disc ml-20 text-3xl italic">New Port Richey</li>
              <li className=" list-disc ml-20 text-3xl italic">Trinity</li>
              <li className=" list-disc ml-20 text-3xl italic">Clearwater</li>
              <li className=" list-disc ml-20 text-3xl italic">St. Petersburg</li>
            </ul>
            <div className="flex sm:flex-row flex-col items-center sm:justify-between sm:w-[500px] mx-auto mb-5 sm:mt-14">
              <a
                href="tel:727-548-6100p208"
                className="flex  items-center text-navy text-2xl mb-6 sm:mb-0 border border-navy p-3 rounded-md"
              >
                <BsTelephone className="mr-2" />
                (727) 548-6100 ext. 208
              </a>
              <Link to="/contact-us">
                <button className=" bg-white py-3 px-5 border text-xl  border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:border-periwinkle  sm:hover:text-offWhite z-10">
                  Request Appointment
                </button>
              </Link>
            </div>
            <p className=" text-xl">*Telehealth services available for all locations.</p>
          </div>

          <div className="app">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap mapContainerClassName="map-container" onLoad={onLoad} zoom={12}>
                {markers?.map((marker) => (
                  <Marker
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => handleMarkerClick(marker)}
                  >
                    {selectedMarker &&
                      selectedMarker.lat === marker.lat &&
                      selectedMarker.lng === marker.lng && (
                        <InfoWindow position={{ lat: marker.lat, lng: marker.lng }}>
                          <div>
                            <h3>{marker.name}</h3>
                            <p>{marker.address}</p>
                          </div>
                        </InfoWindow>
                      )}
                  </Marker>
                ))}
              </GoogleMap>
            )}
          </div>
        </div>
        <p className=" text-center text-4xl w-2/3 mx-auto mt-20">
          Ready to embark on your path to a healthier, happier you? Simply complete the form below
          and we will reach out to you to schedule a complimentary consultation with our team at
          Spring Health and Wellness!
        </p>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Locations;
