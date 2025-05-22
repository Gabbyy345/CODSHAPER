import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2c2c2c] text-white w-full font-sans">
      <nav className="max-w-[1920px] mx-auto flex items-center h-[100px] text-sm border-b border-white/30 px-4">
        {/* Logo */}
        <div className="h-full flex items-center pr-6 border-r border-white/60">
          <span className="text-[18px] font-semibold tracking-wide ml-4 md:ml-12">CreativeLogo</span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center h-full ml-2 space-x-4">
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">Home</li>
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">
            Services<span className="ml-1 text-xs">▾</span>
          </li>
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">Pages</li>
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">Case Shop</li>
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">Blog</li>
          <li className="h-full px-3 flex items-center hover:text-blue-400 cursor-pointer uppercase lg:text-[16px] font-medium">Content</li>
        </ul>
        <div className="flex-grow"></div>
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center h-full">
          <div className="flex items-center space-x-4 px-6 h-full border-r border-white/60">
            <FaInstagram className="cursor-pointer hover:text-pink-400 text-2xl" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500 text-2xl" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 text-2xl" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700 text-2xl" />
          </div>
          <div className="flex items-center px-6 h-full border-r border-white/60">
            <FaSearch className="cursor-pointer hover:text-gray-300 text-2xl" />
          </div>
          <div className="flex flex-col items-start text-[12px] font-semibold px-4">
            <p className="leading-3 mb-2">Need help?</p>
            <p className="text-white">+92 666 888 0000</p>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden pl-4 text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#232323] px-4 py-6 space-y-4 border-b border-white/20 animate-fade-in-down">
          <ul className="flex flex-col space-y-2">
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium">Home</li>
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium flex items-center">
              Services <span className="ml-1 text-xs">▾</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium">Pages</li>
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium">Case Shop</li>
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium">Blog</li>
            <li className="hover:text-blue-400 cursor-pointer uppercase font-medium">Content</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <FaInstagram className="hover:text-pink-400 text-xl" />
            <FaLinkedinIn className="hover:text-blue-500 text-xl" />
            <FaTwitter className="hover:text-blue-400 text-xl" />
            <FaFacebookF className="hover:text-blue-700 text-xl" />
            <FaSearch className="hover:text-gray-300 text-xl" />
          </div>
          <div className="flex flex-col items-start text-xs font-semibold mt-4">
            <p className="leading-3 mb-2 text-gray-300">Need help?</p>
            <p className="text-white">+92 666 888 0000</p>
          </div>
        </div>
      )}
    </header>
  );
}