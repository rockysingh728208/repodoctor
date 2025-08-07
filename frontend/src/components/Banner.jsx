import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 px-6 py-12 rounded-lg shadow-md gap-10 mt-6">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <div>
          <p className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Book Appointment
            <br />
            With 100+ Trusted Doctors
          </p>
        </div>

        <button
          onClick={() => {
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          className="bg-white text-black px-6 py-2  rounded-md hover:bg-blue-700 transition w-fit text-[20px]"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-full max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
