import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    
        <div className='text-center flex flex-col items-center justify-center mt-10 gap-6'>
            <p className='text-2xl font-bold'>Find By Speciality</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Impedit atque quam deleniti nihil  ut libero.</p>
<div className='flex flex-wrap justify-center gap-10 mt-10' id='speciality'>
  {specialityData.map((item,index)=>(
<Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center  cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`/doctors/${item.speciality}`} key={index}>
<img className='w-16' src={item.image} alt="" />
<p>{item.speciality}</p>
</Link>
  ))}
</div>

        </div>
   
  )
}

export default SpecialityMenu