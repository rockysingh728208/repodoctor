import { createContext,useState,useEffect } from "react";
// import { doctors } from "../assets/assets";
import axios from "axios"
import {toast} from 'react-toastify'
export const AppContext=createContext(); 

const AppcontextProvider=({children})=>{
const backendUrl=import.meta.env.VITE_BACKEND_URL
const [doctors,setDoctors]=useState([])
const[token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

const [userData,setUserData]=useState(false)
const currencySymbol = "$"; 


const loadUserProfileData=async()=>{
    try {
     
      const {data}=await axios.get(backendUrl+'/api/user/get-profile',{headers:{token}})  
if(data.success){
    setUserData(data.userData)
}
else{
    console.log(error)
    toast.error(data.message)
}
    } catch (error) {
       console.log(error) 
       toast.error(error.message)
    }
}



const getDoctorsData=async()=>{
    try {
      const {data}=await axios.get(backendUrl+'/api/doctor/list')  
if(data.success){
setDoctors(data.doctors)
}else{
    toast.error(data.message)
}

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}
const value={
doctors,getDoctorsData,
currencySymbol,
token,
setToken,
backendUrl,
userData,setUserData,loadUserProfileData
}



useEffect(() => {
getDoctorsData()
}, [])


useEffect(() => {
if(token){
    loadUserProfileData()
}else{
    setUserData(false)
}
}, [token])

return (
    <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
)
}
export default AppcontextProvider;
