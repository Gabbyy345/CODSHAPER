
import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo/Navlogo.png'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-500 text-white w-full">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 border-b border-white/20">
        
        {/* Left: Logo */}
        <div className="border-r border-white/20 pr-6">
        <img src={logo} alt="Logo" className='w-16 h-16' />  
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden lg:flex gap-6 px-6">
          <a href="#" className="hover:text-blue-400">HOME</a>
          <a href="#" className="hover:text-blue-400 flex items-center gap-1">SERVICES <span className="text-sm">⌄</span></a>
          <a href="#" className="hover:text-blue-400">PAGES</a>
          <a href="#" className="hover:text-blue-400">CASE SHOP</a>
          <a href="#" className="hover:text-blue-400">BLOG</a>
          <a href="#" className="hover:text-blue-400">CONTENT</a>
        </nav>

        {/* Right: Icons + Contact */}
        <div className="hidden lg:flex items-center border-l border-white/20 pl-6 gap-4">
        <a href='https://www.instagram.com'>  
         <FaInstagram className="hover:text-blue-400 cursor-pointer" />
          </a>
          <a href='https://www.linkedin.com'>
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
          </a>
          <a href='https://www.twitter.com'>
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          </a>
          <a href='https://www.facebook.com'>
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          </a>
         
          <FaSearch className="ml-4 hover:text-blue-400 cursor-pointer" />


          <div className="ml-4 text-sm">
            <p className="text-gray-300 font-medium">Need help?</p>
            <p className="font-bold">+92 666 888 0000</p>
          </div>
        </div>

        {/* Mobile: Hamburger */}
        <button className="lg:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-[#3A3A3A] px-6 py-4 gap-4 text-sm border-t border-white/20">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">PAGES</a>
          <a href="#">CASE SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">CONTENT</a>
          <div className="flex gap-4 mt-4">
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebookF />
            <FaSearch />
          </div>
          <div className="text-xs mt-2">
            <p className="text-gray-300">Need help?</p>
            <p>+92 666 888 0000</p>
          </div>

          <hr className="w-full gray-200" />
        </div>
        
      )}
    </header>
  );
}
