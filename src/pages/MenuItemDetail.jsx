import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io";

const MenuItemDetail = () => {
  return (
    <div>
        <div className='relative w-full h-screen '>
            <div className='absolute inset-0'>
                <img
                    src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
                    alt="Pizza"
                    className='w-full h-full object-cover opacity-85'
                />
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70'>
                <h2 className='absolute top-2/4 text-2xl md:text-4xl lg:text-7xl text-white mb-44'>OUR MENU</h2>
            </div>
        </div>


        <div className='bg-[#0E110D]'>
            <div className='flex flex-wrap gap-8 mx-5 md:grid md:grid-cols-2 '>
                <div className='md:my-20'>
                    <img
                        src="https://html.awaikenthemes.com/spicyhunt/images/pizza-img.png"
                        alt="Pizza"
                        className='object-cover opacity-85 rounded-2xl w-[90%] h-[90%] md:[w-60%] md:[h-60%]'
                    />
                </div>
                <div className='md:my-20'>
                    <h5 className='font-bold text-[#A6A182]'>CHEF</h5>
                    <h1 className='text-white font-bold text-4xl py-3'>ABOUT THE <span className='text-[#A6A182]'>DISH</span></h1>
                    <p className='text-[#AEB0B4] text-lg'>Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to<br/>modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and<br/>precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only<br/>meets but exceeds the expectations of the restaurant's guests. William's leadership fosters a<br/>collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.</p>
                    <button className=" my-5 relative overflow-hidden text-white bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                         Order Now
                        </span>
                        <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                        <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItemDetail