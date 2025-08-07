import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700">
          CONTACT <span className="text-blue-500">US</span>
        </h2>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>

        {/* Right - Info */}
        <div className="w-full md:w-1/2 text-gray-700 space-y-6 text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">OUR OFFICE</h3>
            <p className="mt-1">
              72820 Sagar <br />
              Street 250, Shahwajpur, Bihar, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600">Contact Details</h3>
            <p>Mobile: 7282089286</p>
            <p>Email: sagarkashyap9155@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600">Careers at Prescripto</h3>
            <p>Learn more about our teams and job openings</p>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
