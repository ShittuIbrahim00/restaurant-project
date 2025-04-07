import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneThin } from "react-icons/pi";
import { TfiWorld } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-customBlack  pb-12'>
      <div className='lg:pt-28  p-4'>
        <div className='flex flex-col items-start gap-6'>
          <div>
            <img src="https://html.awaikenthemes.com/spicyhunt/images/logo.svg" alt="" className='' />
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <SlLocationPin className='text-customColor text-xl' />
              <p className='text-gray-500 font-semibold text-lg'>4517 Washington Ave, Kentucky 39495</p>
            </div>
            <div className='flex items-center gap-4 mt-5'>
              <PiPhoneThin className='text-customColor text-2xl' />
              <p className='text-gray-500 font-semibold text-lg'>+01 780 859 632</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex items-center  justify-between m-4'>
        <div className='flex gap-6 justify-center items-center'>
          <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
            <TfiWorld className='text-xl text-white font-bold'/>
          </div>
          <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
            <FaFacebookF className='text-xl text-white font-bold'/>
          </div>
          <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
            <FaInstagram className='text-xl text-white font-bold'/>
          </div>
        </div>
        <div className='flex justify-center mt-2'>
          <p className='text-gray-500 font-semibold text-lg'>Copyright © 2025 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer