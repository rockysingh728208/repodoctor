import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './Appcontext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Browse Through Specialist Doctors</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Filter Sidebar */}
        <div className="w-full lg:w-1/4 bg-white shadow p-4 rounded h-fit">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Filter by Speciality</h3>
          <div className="space-y-3 text-gray-600">
  <div className="space-y-3 text-gray-600">
  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "General Physician" ? "/doctors" : "/doctors/General Physician")} className="cursor-pointer hover:text-blue-600 transition">
      General Physician
    </p>
  </div>

  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "Gynecologist" ? "/doctors" : "/doctors/Gynecologist")} className="cursor-pointer hover:text-blue-600 transition">
      Gynecologist
    </p>
  </div>

  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "Dermatologist" ? "/doctors" : "/doctors/Dermatologist")} className="cursor-pointer hover:text-blue-600 transition">
      Dermatologist
    </p>
  </div>

  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "Pediatrician" ? "/doctors" : "/doctors/Pediatrician")} className="cursor-pointer hover:text-blue-600 transition">
      Pediatrician
    </p>
  </div>

  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "Neurologist" ? "/doctors" : "/doctors/Neurologist")} className="cursor-pointer hover:text-blue-600 transition">
      Neurologist
    </p>
  </div>

  <div className="p-2 rounded hover:bg-blue-50 transition">
    <p onClick={() => navigate(speciality === "Gastroenterologist" ? "/doctors" : "/doctors/Gastroenterologist")} className="cursor-pointer hover:text-blue-600 transition">
      Gastroenterologist
    </p>
  </div>
</div>

          </div>
        </div>

        {/* Right Doctor Cards Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center cursor-pointer"
            >
              <img src={item.image} alt={item.name} className="w-50 h-50 rounded-full object-cover mb-4" />

              <div className="mb-2 flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-green-500  font-semibold bg-green-100 px-2 py-1 rounded-full">
                  Available
                </span>
              </div>

              <p className="text-2xl font-semibold text-gray-800">{item.name}</p>
              <p className="text-[20px] text-gray-500">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
