// import React, { useState, useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { AppContext } from './Appcontext';
// import { assets } from '../assets/assets';
// import RelatedDoctors from '../components/RelatedDoctors';


// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol } = useContext(AppContext);
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");
//   const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

//   const fetchDocInfo = () => {
//     const doc = doctors.find((doc) => doc._id === docId);
//     setDocInfo(doc);
//   };

//   const getAvailableSlots = async () => {
//     const slotsByDate = [];
//     const today = new Date();

//     for (let i = 0; i < 7; i++) {
//       const currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       const endTime = new Date(currentDate);
//       endTime.setHours(21, 0, 0, 0);

//       if (i === 0) {
//         currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       const timeSlots = [];
//       while (currentDate < endTime) {
//         timeSlots.push({
//           datetime: new Date(currentDate),
//           time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         });
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       slotsByDate.push({
//         date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + i),
//         day: daysofWeek[(today.getDay() + i) % 7],
//         slots: timeSlots
//       });
//     }

//     setDocSlots(slotsByDate);
//   };

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) getAvailableSlots();
//   }, [docInfo]);

//   return docInfo && (
//     <div className="px-6 py-10">
//       {/* Doctor Info */}
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col lg:flex-row gap-8">
        
//         {/* Left Image */}
//         <div className="flex-shrink-0 w-full lg:w-1/3">
//           <img src={docInfo.image} alt={docInfo.name} className="w-full h-auto rounded-lg object-cover bg-blue-600" />
//         </div>

//         {/* Right Info */}
//         <div className="w-full lg:w-2/3 flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <h2 className="text-3xl font-bold text-gray-800">{docInfo.name}</h2>
//             <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
//           </div>

//           <p className="text-[15px] text-gray-700 font-medium">{docInfo.degree} - {docInfo.speciality}</p>

//           <div>
//             <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-[14px] font-medium">
//               {docInfo.experience} Experience
//             </span>
//           </div>

//           <div>
//             <div className="flex items-center gap-2 mb-1">
//               <p className="text-lg font-semibold text-gray-800">About</p>
//               <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
//             </div>
//             <p className="text-gray-600 text-sm">{docInfo.about}</p>
//           </div>

//           <div>
//             <p className="text-lg text-gray-800 font-medium">
//               Appointment Fee: <span className="text-blue-600">{currencySymbol}{docInfo.fees}</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Booking Slots */}
//       <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold mb-4 text-gray-800">Choose a Date</h3>

//         {/* Date Selection */}
//         <div className="flex gap-4 overflow-auto pb-2">
//           {docSlots.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setSlotIndex(index)}
//               className={`text-center px-4 py-3 min-w-20 rounded-xl cursor-pointer transition ${
//                 slotIndex === index
//                   ? 'bg-indigo-600 text-white'
//                   : 'border border-gray-300 text-gray-700'
//               }`}
//             >
//               <p className="font-semibold text-sm">{item.day}</p>
//               <p className="text-xs">{item.date.getDate()}</p>
//             </div>
//           ))}
//         </div>

//         {/* Time Slots */}
//         <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Choose a Time</h3>
//         <div className="flex flex-wrap gap-4">
//           {docSlots[slotIndex]?.slots.map((slot, index) => (
//             <div
//               key={index}
//               onClick={() => setSlotTime(slot.time)}
//               className={`px-4 py-2 rounded-lg border cursor-pointer text-sm transition ${
//                 slotTime === slot.time
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               {slot.time}
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="mt-10 text-center">
//           <button
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          

//           >
//             Book an Appointment
//           </button>
//         </div>

// {/* related doctor */}
// <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
//       </div>
//     </div>
//   );
// };

// export default Appointment;


import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
// import { AppContext } from './Appcontext';
import { AppContext } from './Appcontext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import {toast} from "react-toastify"

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol,getDoctorsData,backendUrl,userData } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const navigate=useNavigate();
  const fetchDocInfo = () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = async () => {
    const slotsByDate = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slotsByDate.push({
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + i),
        day: daysofWeek[(today.getDay() + i) % 7],
        slots: timeSlots
      });
    }

    setDocSlots(slotsByDate);
  };

  
const bookAppointment = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    toast.warn('Login to book appointment');
    return navigate('/login');
  }

  try {
    const selectedDate = docSlots[slotIndex].date;
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    const slotDate = `${day}-${month}-${year}`;

    // Log to console
    console.log('Selected Date:', slotDate);
    console.log('Selected Time:', slotTime);

    const { data } = await axios.post(
      backendUrl + '/api/user/book-appointment',
      { docId, slotDate, slotTime,userId:userData._id },
      { headers: { token } }
    );
    
    if (data.success) {
      toast.success(data.message);
      getDoctorsData();
      navigate('/my-appointments');
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong');
  }
};

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return docInfo && (
    <div className="px-6 py-10">
      {/* Doctor Info */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col lg:flex-row gap-8">
        
        {/* Left Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img src={docInfo.image} alt={docInfo.name} className="w-full h-auto rounded-lg object-cover bg-blue-600" />
        </div>

        {/* Right Info */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold text-gray-800">{docInfo.name}</h2>
            <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
          </div>

          <p className="text-[15px] text-gray-700 font-medium">{docInfo.degree} - {docInfo.speciality}</p>

          <div>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-[14px] font-medium">
              {docInfo.experience} Experience
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-lg font-semibold text-gray-800">About</p>
              <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
            </div>
            <p className="text-gray-600 text-sm">{docInfo.about}</p>
          </div>

          <div>
            <p className="text-lg text-gray-800 font-medium">
              Appointment Fee: <span className="text-blue-600">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Choose a Date</h3>

        {/* Date Selection */}
        <div className="flex gap-4 overflow-auto pb-2">
          {docSlots.map((item, index) => (
            <div
              key={index}
              
              onClick={() => setSlotIndex(index)}
              className={`text-center px-4 py-3 min-w-20 rounded-xl cursor-pointer transition ${
                slotIndex === index
                  ? 'bg-indigo-600 text-white'
                  : 'border border-gray-300 text-gray-700'
              }`}
            >
              <p className="font-semibold text-sm">{item.day}</p>
              <p className="text-xs">{item.date.getDate()}</p>
            </div>
          ))}
        </div>

        {/* date section */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Choose a Time</h3>
        <div className="flex flex-wrap gap-4">
          {docSlots[slotIndex]?.slots.map((slot, index) => (
            <div
              key={index}
              onClick={() => setSlotTime(slot.time)}
              className={`px-4 py-2 rounded-lg border cursor-pointer text-sm transition ${
                slotTime === slot.time
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {slot.time}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button
          onClick={bookAppointment}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Book an Appointment
          </button>
        </div>

{/* related doctor */}
<RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    </div>
  );
};

export default Appointment;

