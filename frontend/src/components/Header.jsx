import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 py-10 bg-blue-600 text-white gap-10">
      
      {/* Left Content */}
      <div className="flex flex-col items-start md:w-1/2 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        {/* Description with group image */}
        <div className="flex gap-4 items-start">
          <img src={assets.group_profiles} alt="Group" className="w-12 sm:w-14 md:w-16 h-auto mt-1" />
          <p className="text-sm sm:text-base leading-relaxed">
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment for free.
          </p>
        </div>

        {/* Book Button */}
        <a
          href="#speciality"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="w-4 h-4" />
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={assets.header_img}
          alt="Header"
          className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
