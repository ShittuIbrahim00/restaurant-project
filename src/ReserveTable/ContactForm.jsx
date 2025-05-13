import React from 'react'
import ReserveTableForm from './ReserveTableForm'
import { useParams } from 'react-router-dom'

const ReserveTable = () => {

  return (
    <div>
      <div className='bg-customGray grid lg:grid-cols-2 p-3 lg:p-9 grid-cols-1 gap-8 '>
        <div className='flex flex-col gap-6 pt-16 items-start justify-start'>
          <div>
            <div className='flex items-center gap-3'>
              <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
              <p className='text-sm leading-9 font-bold uppercase text-customColor'>reserve a table</p>
            </div>
            <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
              reserve now your table <br /> <div className='text-customColor'> <span className='text-white'>and</span> enjoy dining <br /> experience.</div>
            </div>
          </div>
          <div className='mt-4'>
            <h1 className='text-lg leading-8 font-bold font-jakarta text-white'>Open Hours</h1>
            <div>
              <div className='flex text-gray-400 mt-3 items-center gap-2'>
                <p>Mon - Thu</p>
                <p>10:00 AM - 09:00 PM</p>
              </div>
              <div className='flex text-gray-400 mt-2 items-center gap-2'>
                <p>Fri - Sat</p>
                <p>09:00 AM - 10:00 PM</p>
              </div>
              <div className='flex text-gray-400 mt-2 items-center gap-2'>
                <p>Sun</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:pt-16'>
          <ReserveTableForm />
        </div>
      </div>
    </div>
  )
}

export default ReserveTable