import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { motion } from "framer-motion";
import "./locations.css";

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
    <div className=" sm:mt-20">
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
      <p>Locations</p>
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
  );
}

export default Locations;
