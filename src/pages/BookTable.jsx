import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { TfiWorld } from 'react-icons/tfi'
import { Link, useParams } from 'react-router-dom'
import ReserveTableForm from '../ReserveTable/ReserveTableForm'

const BookTable = () => {
  const {id} = useParams()
  return (
    <div className="bg-black opacity-95  pb-14">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full opacity-20 h-[60vh] lg:h-[90vh] bg-fixed bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg')` }}
        ></div>
        <div className="flex justify-center absolute top-[270px] items-center w-full">
          <div>
            <h1 className="leading-loose md:text-4xl sm:text-3xl text-3xl lg:text-6xl font-merienda font-bold text-white">
             Reserve Your Table
            </h1>
            <div className="flex text-gray-400 mt-3 text-lg justify-center gap-2">
              <Link to="/">Home</Link>
              <p>/</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:pt-[650px] pt-[500px]'>
        <div className='lg:flex justify-between items-center w-[100%]'>
          <div className='lg:w-[45%] w-full'>
            <div className='items-center gap-3 px-4'>

              <div className='flex items-center gap-3'>
                <div className='h-[5px] w-[5px] rounded-full bg-customColor'></div>
                <h1 className='uppercase text-sm font-bold text-customColor'>contact us</h1>
              </div>
              <div>
                <p className='text-[40px] text-white font-bold uppercase'>get in touch <span className='text-customColor'>with us</span></p>
              </div>
              <div>
                <p className='text-lg text-gray-400 leading-7 mt-3 font-jakarta'>Have questions or feedback? Reach out to us through the form below, call us, or visit our restaurant. We're here to help and look forward to connecting with you!</p>
              </div>
              <div className='text-gray-400 flex flex-col gap-4 items-start text-lg mt-10'>
                <p>27 Division St, New York, NY 10002, USA</p>
                <p>+01 780 859 632</p>
                <p>info@domainname.com</p>
              </div>
              <div className='flex gap-5 items-center mt-8'>
                <div className='rounded-full text-white font-bold h-[50px] w-[50px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                  <TfiWorld className='text-xl' />
                </div>
                <div className='rounded-full text-white font-bold h-[50px] w-[50px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                  <FaFacebookF className='text-xl' />
                </div>
                <div className='rounded-full text-white font-bold h-[50px] w-[50px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                  <FaInstagram className='text-xl' />
                </div>
              </div>
            </div>
          </div>
          <ReserveTableForm id={id}/>

        </div>
      </div>
    </div>
  )
}

export default BookTable;