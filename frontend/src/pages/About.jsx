import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className="px-6 py-12 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-700">
            About <span className="text-blue-500">Us</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img src={assets.about_image} alt="About Us" className="rounded-lg w-full h-auto" />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently.
              At Prescripto, we understand the challenges individuals face when it comes to scheduling doctors' appointments and managing their records.
            </p>

            <p className="text-lg leading-relaxed">
              Our platform is designed to simplify and streamline the entire process, ensuring that you can access the care you need—when you need it.
            </p>

            <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access care promptly and confidently.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Why <span className="text-blue-500">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-100 p-[40px] rounded-lg shadow hover:bg-blue-100 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Efficiency</h3>
            <p className="text-gray-700">
              Streamlined Appointment Scheduling <br />
              That fits into your busy lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-[40px] rounded-lg shadow hover:bg-blue-100 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Convenience</h3>
            <p className="text-gray-700">
              Access to a network of trusted <br />
              healthcare professionals in your area.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-[40px] rounded-lg shadow hover:bg-blue-100 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Personalization</h3>
            <p className="text-gray-700">
              Tailored recommendations and reminders <br />
              to help you stay on top of your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
