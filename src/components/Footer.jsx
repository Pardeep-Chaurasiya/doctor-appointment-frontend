import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section */}
            <div >
                <img className='mb-5 w-40' src={assets.logo} alt="logo image" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id corporis hic modi similique voluptas assumenda fuga sint nesciunt cupiditate. Fugit vel delectus similique impedit, corrupti commodi!</p>
            </div>
            {/* Center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-123457890</li>
                    <li>chaurasiyapardeep001@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright Text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Prescripto &copy; 2024 All rights reserved By Pardeep Chaurasiya.</p>
        </div>
    </div>
  )
}

export default Footer