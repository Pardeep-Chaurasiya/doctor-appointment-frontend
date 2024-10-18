import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData,setUserData] = useState(false)

    

    const getDoctorsData = async()=>{
        try {
            const {data} = await axios.get(`${backendUrl}/api/doctor/list`)
            if(data.success){
                setDoctors(data.doctors)
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async()=>{
        try {
        const {data} = await axios.get(`${backendUrl}/api/user/get-profile`,{headers:{token}})
        if(data.success){
            setUserData(data.user)
        }else{
            toast.error(data.message)
        }
    }
    catch(error){
        console.log(error)
        toast.error(error.message)
    }
    }

    const value = {
        doctors,currencySymbol,getDoctorsData,
        token,setToken,backendUrl,userData,setUserData,
        loadUserProfileData
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default  AppContextProvider;