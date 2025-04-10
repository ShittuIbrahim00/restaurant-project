import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  return (
    <div className=''>
        <div className='relative w-full min-h-screen'>
            <div className='absolute inset-0'>
                <img
                    src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
                    alt="Pizza"
                    className='w-full h-full object-cover opacity-85'
                />
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70'>
                <h2 className='text-4xl md:text-5xl lg:text-7xl text-white'>SERVICES</h2>
            </div>
        </div>

        <div className='bg-[#0E110D]'>
            <div className='grid grid-cols-3 gap-5 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 min-[320px]:grid-cols-1'>
                <div className='p-8 rounded  border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Dine-In Experience</h2>
                    <p className='text-[#AEB0B4]'>Enjoy a cozy and vibrant ambiance<br/>with impeccable service and delicious<br/>meals crafted to perfection.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>

                <div className='p-8 rounded border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Online Table Reservations</h2>
                    <p className='text-[#AEB0B4]'>Reserve your table effortlessly through<br/> our online booking system for a <br/>seamless dining experience.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>

                <div className='p-8 rounded border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Home Delivery Service</h2>
                    <p className='text-[#AEB0B4]'>Savor your favorite dishes in the<br/>comfort of your home with our reliable<br/>and quick delivery service.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-5 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 min-[320px]:grid-cols-1'>
                <div className='p-8 rounded border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Catering for Events</h2>
                    <p className='text-[#AEB0B4]'>From small gatherings to grand<br/>celebrations, let us bring our culinary<br/>excellence to your special event.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>

                <div className='p-8 rounded border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Takeout Orders</h2>
                    <p className='text-[#AEB0B4]'>Convenient and fast takeout options<br/>for when you're on the go but still<br/>craving our flavors.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>

                <div className='p-8 rounded  border-solid border-2 border-[#191f17] mt-10'>
                    <h2 className='text-2xl text-white mb-4 font-bold'>Private Dining</h2>
                    <p className='text-[#AEB0B4]'>Host intimate gatherings or private<br/>events in our dedicated dining space<br/>tailored to your needs.</p>
                    <button className='flex justify-center items-center gap-3 text-[#58584e] font-bold text-lg mt-4 hover:text-white transition ease-in delay-150 hover:translate-x-2 duration-300'>Read More <FaArrowRight /></button>
                </div>
            </div>  


        </div>

        

        
    </div>
  )
}

export default Service
