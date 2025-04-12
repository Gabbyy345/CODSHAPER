import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo/Navlogo.png'


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-500 text-white font-semibold py-2 px-2">

          <div className='flex gap-5 items-center'>
                <img src={logo} alt="Logo" className='w-16 h-16' />               

             <Link to="/"  >HOME</Link>

                <Link to="/service">SERVICE</Link>

                <Link to="/pages">PAGES</Link>

                <Link to="/cashshop">CASH SHOP</Link>

                <Link to="/blog">BLOG</Link>

                <Link to="/content">CONTENT</Link>
          </div>
          <hr className='border-gray-300' />
            <div className='flex gap-5 items-center'>
            <a href='https://www.instagram.com'>
                            <FaInstagram/>
                            </a>

                            <a href='https://www.linkedin.com'>
                            <FaLinkedin/>
                            </a>

                            <a href='https://www.twitter.com'>
                            <FaTwitter/>
                            </a>


                <a href='https://www.facebook.com'>
                            <FaFacebook/>
                            </a>
            </div>
            <hr className='border-gary -300' />

            <div className='flex gap-2 items-center'>
                <a href="">
                <FaSearch/>
                </a>
                
            </div>

            <div className='gap-2 items-center p-3'>
                <h1>need help</h1>
                <p>+9233388877</p>
            </div>
          
           
        </nav>
        
    );
};

export default Navbar;