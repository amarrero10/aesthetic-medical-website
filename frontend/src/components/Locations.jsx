import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { motion } from "framer-motion";
import "./locations.css";
import Footer from "./Footer";
import Form from "./Form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsTelephone } from "react-icons/bs";

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
      <div className=" sm:my-20">
        <motion.div
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" bg-navy text-offWhite text-center text-4xl "
        >
          <motion.h2
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" pt-5"
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
        <div className=" flex sm:flex-row flex-col items-center justify-between  sm:w-2/3 mx-auto">
          <div className=" text-navy h-full sm:w-1/2 mb-10 sm:mb-0">
            <p className=" text-4xl text-center sm:text-left">
              Start your journey to a better you today with Spring Health and Wellness!
            </p>
            <div className="flex sm:flex-row flex-col items-center sm:justify-between sm:w-[500px] mt-3 mx-auto sm:pb-14 mb-5 sm:mb-0">
              <a
                href="tel:(352) 340-5990"
                className="flex  items-center text-navy text-2xl mb-6 sm:mb-0 border border-navy p-3 rounded-md"
              >
                <BsTelephone className="mr-2" />
                (352) 340-5990
              </a>
              <Link to="/contact-us">
                <button className=" bg-white py-3 px-5 border text-xl  border-greenTeal rounded-md text-periwinkle font-semibold sm:hover:bg-periwinkle sm:hover:border-periwinkle  sm:hover:text-offWhite z-10">
                  Request Appointment
                </button>
              </Link>
            </div>

            <p className=" text-4xl mb-4 text-center sm:text-left ">
              Discover our convenient locations to help you achieve your health and wellness goals:
            </p>
            <ul>
              <li className=" list-disc ml-20 text-3xl italic">Spring Hill</li>
              <li className=" list-disc ml-20 text-3xl italic">Pasco</li>
              <li className=" list-disc ml-20 text-3xl italic">Pinellas</li>
              <li className=" list-disc ml-20 text-3xl italic">Tampa</li>
            </ul>
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
