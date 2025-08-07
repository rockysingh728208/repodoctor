import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white px-6 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
        
        {/* Left Section */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur expedita inventore blanditiis aperiam quia dolorem
            prodit quam iste maiores ducimus excepturi eaque animi vitae maxime dolore quaerat,
            tenetur perspiciatis amet, nostrum cupiditate libero corporis id dolor!
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-4">Get in Touch</p>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white">📞 7282089286</li>
            <li className="hover:text-white">✉️ sagarkashyap9155@gmail.com</li>
          </ul>
        </div>
      </div>
{/* comments */}
      <hr />
      <p className='pt-4'>CopyRight 2024@ Prescripto-All right reserved</p>
    </div>
  );
};

export default Footer;
