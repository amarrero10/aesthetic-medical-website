import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Footer from "./Footer";

const Coolsculpting = () => {
  return (
    <>
      <Helmet>
        <title>CoolSculpting® in Tampa Bay | Aura Wellness</title>
        <meta
          name="description"
          content="Discover non-invasive fat reduction with CoolSculpting® at Aura Wellness in Tampa. FDA-cleared, no downtime, and personalized to your goals."
        />
      </Helmet>

      <div>
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-12 text-[#F0E9B0] xl:mt-28">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#F0E9B0]">
              CoolSculpting® Fat-Freezing Treatment at Aura Wellness
            </h1>
            <p className="text-xl text-[#D2B86C]">Sculpt Your Body. No Surgery. No Downtime.</p>
            <p className="text-[#F0E9B0] max-w-2xl mx-auto">
              Tired of stubborn fat that refuses to budge—no matter how clean you eat or how often
              you work out? At Aura Wellness, we offer CoolSculpting®, the world’s #1 non-invasive
              fat-reduction treatment designed to freeze away unwanted fat cells for good.
            </p>
            <p className="text-[#F0E9B0] max-w-2xl mx-auto">
              We’re proud to serve Tampa Bay and surrounding areas, helping clients achieve lasting
              body contouring results—without surgery or downtime.
            </p>
          </section>

          <Card className="bg-[#2e4033] text-[#F0E9B0]">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">✅ What is CoolSculpting?</h2>
              <p>
                CoolSculpting® uses advanced cryolipolysis technology to target and freeze fat cells
                beneath the skin, safely and effectively. Once frozen, the treated fat cells are
                naturally eliminated by your body over time—leaving you with a smoother, more
                sculpted silhouette.
              </p>
              <p>
                This FDA-cleared treatment is perfect for those looking to reduce fat in areas that
                don’t respond to diet and exercise.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2e4033] text-[#F0E9B0]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">🎯 CoolSculpting Targets Areas Like:</h2>
              <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Lower abdomen (“belly fat”)</li>
                <li>Love handles (flanks)</li>
                <li>Inner & outer thighs</li>
                <li>Double chin</li>
                <li>Bra bulge & back fat</li>
                <li>Upper arms</li>
                <li>Banana roll (under the buttocks)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#2e4033] text-[#F0E9B0]">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">
                💡 Why Choose Aura Wellness for CoolSculpting in Tampa Bay?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="text-[#8A9A5B]" size={20} /> FDA-cleared technology & medically
                  supervised care
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#8A9A5B]" size={20} /> Safe, non-invasive fat reduction
                  with no downtime
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#8A9A5B]" size={20} /> Quick in-office treatment—many
                  areas done in under an hour
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#8A9A5B]" size={20} /> Personalized treatment plans
                  tailored to your body & goals
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#8A9A5B]" size={20} /> Discreet, comfortable, and
                  professional environment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#2e4033] text-[#F0E9B0]">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">
                🕒 What to Expect During Your CoolSculpting Experience
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Initial Consultation</strong> – We evaluate your goals and determine if
                  CoolSculpting is right for you.
                </li>
                <li>
                  <strong>Treatment</strong> – A cooling applicator is placed on the target area.
                  You’ll relax, read, or even nap during your session.
                </li>
                <li>
                  <strong>Aftercare</strong> – Minimal side effects like numbness or redness may
                  occur but usually resolve quickly.
                </li>
                <li>
                  <strong>Results</strong> – See a visible reduction in fat in as little as 3 weeks,
                  with full results in 2 to 3 months.
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="bg-[#2e4033] text-[#F0E9B0] p-6 rounded-2xl shadow-md ">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <MapPin /> Now Serving Tampa Bay & Surrounding Areas
            </h2>
            <p className="mt-2">
              Located in the heart of Tampa, Aura Wellness proudly welcomes clients from St.
              Petersburg, Clearwater, Wesley Chapel, Brandon, and surrounding communities. We’re
              your trusted local destination for non-surgical body sculpting and wellness.
            </p>
          </div>

          <div className="text-center bg-[#8A9A5B] p-6 rounded-2xl shadow-md space-y-4 text-white">
            <h2 className="text-2xl font-semibold">💬 Book Your FREE CoolSculpting Consultation</h2>
            <p>
              Let’s sculpt the best version of you—naturally. Call us today at
              <strong> (813) 755-4461</strong> or
              <strong>
                <Link to="/contact-us" className="underline">
                  {" "}
                  contact us online
                </Link>
              </strong>{" "}
              to book your FREE CoolSculpting consultation at Aura Wellness.
            </p>
            <div className="bg-[#F0E9B0] text-[#5C7566] p-4 rounded-xl font-medium">
              ✨ Special Offer: Buy 3 CoolSculpting cycles, get 1 FREE – limited-time only!
            </div>
            <Link to="/contact-us">
              <Button className="bg-[#D2B86C] text-[#5C7566] hover:bg-[#c5a754] mt-4">
                Contact Us Today!
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Coolsculpting;
