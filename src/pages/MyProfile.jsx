import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData,setUserDate] = useState({
    name: 'Pardeep Chaurasiya',
    image:assets.profile_pic,
    email: 'chaurasiyapardeep001@gmail.com',
    phone: '+91-1234567890',
    address:{
      line1:"xxx xxx xxx",
      line2:"xxxx xxxx",
    },
    gender:"Male",
    dob:"xxxx-xx-xx",
  })
  const [isEdit,setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="profile image" />
      {
        isEdit ? 
        <input className='bg-gray-50 text-3xl font-medium max-w-70 mt-4' type='text' value={userData.name} onChange={e=> setUserDate(prev =>({...prev,name:e.currentTarget.value}))}/> 
        : 
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ? 
            <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e=> setUserDate(prev =>({...prev,phone:e.currentTarget.value}))}/> 
            : 
            <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
            <p>
              <input className='bg-gray-50' type='text' value={userData.address.line1} onChange={e=> setUserDate(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))}/>
              <br />
              <input className='bg-gray-50' type='text' value={userData.address.line2} onChange={e=> setUserDate(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))}/>
            </p>
            :
            <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p  className='font-medium'>Gender:</p>

          {
        isEdit ? 
        <select className='max-w-20 bg-gray-100' onChange={e=> setUserDate(prev =>({...prev,gender:e.currentTarget.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : 
        <p className='text-gray-400'>{userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit ?
        <input className='max-w-28 bg-gray-100' type="date" onChange={e=> setUserDate(prev =>({...prev,dob:e.currentTarget.value}))} value={userData.dob} />
        :
        <p className='text-gray-400'>{userData.dob}</p>
      }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit ?
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover-=:text-white transition-all' onClick={()=> setIsEdit(false)}>Save information</button>
          :
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover-=:text-white transition-all' onClick={()=> setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile