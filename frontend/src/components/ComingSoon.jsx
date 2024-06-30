import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import oldCouple from "../assets/old-couple.jpg";
import botox from "../assets/botox.jpg";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5C7566] md:mt-20">
      <div className="text-center p-6 sm:p-12 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#D2B86C] mb-4">Coming Soon</h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Hormone Replacement Therapy & Aesthetic Medicine
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-around mb-6">
          <img
            src={oldCouple}
            alt="Old Couple"
            className="w-full sm:w-1/2 rounded-md mb-4 sm:mb-0 sm:mr-2"
          />
          <img
            src={botox}
            alt="Botox"
            className="w-full sm:w-1/2 rounded-md sm:ml-2 object-cover"
          />
        </div>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          We're excited to announce that our comprehensive services in hormone replacement therapy
          and aesthetic medicine will be launching soon. Stay tuned for more updates!
        </p>
        {/* <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-[#D2B86C] hover:text-blue-600 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-[#D2B86C] hover:text-pink-600 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-[#D2B86C] hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div> */}
        <p className="text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Aura Wellness. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
