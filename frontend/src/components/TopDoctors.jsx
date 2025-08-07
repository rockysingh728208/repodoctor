import React, { useContext } from 'react';
// import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../pages/Appcontext';
const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors}= useContext(AppContext);
  return (
    <div className="px-6 py-10 bg-gray-50 mt-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600">Top Doctors to Book</h1>
        <p className="text-gray-600 mt-2">Simply browse through our extensive list of trusted doctors</p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
          onClick={()=> navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img src={item.image} alt={item.name} className="w-50 h-50 rounded-full object-cover mb-4" />

            <div className="mb-2 flex items-center justify-center gap-2">
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
              <span className="text-green-500 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
                Available
              </span>
            </div>

            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.speciality}</p>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="text-center mt-10">
        <button 
        onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
