import React from 'react';
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import logo from '../Assests/logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="bg-white text-center py-8 footer border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-6">
          <img src={logo} alt="Shopper Logo" className="h-12 w-auto" />
          <h2 className="ml-3 text-2xl font-bold">ECOMART</h2>
        </div>
        
        <ul className="flex justify-center space-x-6 text-sm font-medium text-black mb-6">
  <li><a href="#company" className="no-underline text-black hover:text-black">Company</a></li>
  <li><a href="#products" className="no-underline text-black hover:text-black">Products</a></li>
  <li><a href="#offices" className="no-underline text-black hover:text-black">Offices</a></li>
  <li><a href="#about" className="no-underline text-black hover:text-black">About</a></li>
  <li><a href="#contact" className="no-underline text-black hover:text-black">Contact</a></li>
</ul>


        {/* Updated section with images instead of icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#instagram" className="text-gray-600 hover:text-black">
            <img src={instagram_icon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="#pinterest" className="text-gray-600 hover:text-black">
            <img src={pintester_icon} alt="Pinterest" className="h-8 w-8" />
          </a>
          <a href="#whatsapp" className="text-gray-600 hover:text-black">
            <img src={whatsapp_icon} alt="WhatsApp" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
        <p className="text-gray-600 ml-5 text-sm text-center border-t-4 container pt-3">
          Copyright &copy; 2023 - All Rights Reserved.
        </p>
    </div>
  );
};

export default Footer;
