import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Button } from "./ui/button";

const AntiAging = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12 text-[#F0E9B0] mt-28">
      <Helmet>
        <title>Anti-Aging &amp; Regenerative Peptide Therapy in Tampa, FL | Aura Wellness</title>
        <meta
          name="description"
          content="Reverse aging and enhance vitality with NAD+, Sermorelin, BPC-157, and peptide therapy at Aura Wellness in Tampa. Look and feel younger, naturally."
        />
      </Helmet>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#F0E9B0]">
          Feel Energized. Age Gracefully. Live Longer.
        </h1>
        <p className="text-xl text-[#D2B86C]">
          Restore vitality with advanced anti-aging therapies at Aura Wellness.
        </p>
      </section>

      <div className="bg-[#5C7463] text-[#F0E9B0] p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Therapies Offered:</h2>
        <ul className="space-y-3">
          <li>NAD+ Injections – Boost energy, brain function, and cellular longevity</li>
          <li>Sermorelin & Ipamorelin – Stimulate natural growth hormone production</li>
          <li>BPC-157 – Accelerate healing of joints, muscles, gut, and soft tissue</li>
          <li>Thymosin Alpha-1 & Beta-4 – Strengthen immune function and reduce inflammation</li>
          <li>PT-141 (Bremelanotide) – Enhance sexual desire and arousal</li>
          <li>CJC-1295/Ipamorelin Combo – Improve sleep, metabolism, and muscle tone</li>
        </ul>
      </div>

      <div className="text-center mt-8">
        <Link to="/contact-us">
          <Button className="bg-[#D2B86C] text-[#5C7566] hover:bg-[#c5a754] mt-4">
            Ready to recharge and restore? Schedule your anti-aging consultation today.
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AntiAging;
