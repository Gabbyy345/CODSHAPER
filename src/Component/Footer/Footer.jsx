import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#111225] text-white pt-12 pb-4 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-xl mb-4">CreativeLogo</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Welcome to our consultancy agency. Lore ipsum simply text amet cing elit simply text amet cing elit.
          </p>
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+92 666 888 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>needhelp@company.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>66 Brooklyn Street New York, USA</span>
            </div>
          </div>
        </div>

        {/* Center: Explore */}
        <div className="flex-1 min-w-[180px] flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <h3 className="font-bold mb-3">EXPLORE</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Meet our Team</li>
              <li>Case studies</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3"> </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Support</li>
              <li>Terms of use</li>
              <li>Privacy & Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-bold mb-3">NEWSLETTER</h3>
          <div className="bg-[#18192b] rounded-md p-6">
            <p className="mb-3 text-gray-300 text-sm">Subscribe for latest articles and resources</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-2 rounded-md outline-none text-black bg-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-md font-semibold"
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright & Social */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-xs">&copy; Copyright 2025 by Company</p>
        <div className="flex gap-4 text-xl">
          <a href="https://www.instagram.com" className="hover:text-blue-400 transition"><FaInstagram /></a>
          <a href="https://www.linkedin.com" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
          <a href="https://www.twitter.com" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="https://www.facebook.com" className="hover:text-blue-400 transition"><FaFacebookF /></a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;