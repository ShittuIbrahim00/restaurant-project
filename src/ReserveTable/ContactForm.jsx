import React from 'react'

const ReserveTableForm = () => {
    return (
        <div className='lg:w-[100%] w-[100%] bg-customBlack opacity-80 rounded-2xl mt-4'>
            <form action="" className='w-full lg:pt-12 lg:pb-7 p-5 lg:px-9 text-white'>
                <div className='flex flex-col gap-3 items-start'>
                    <label htmlFor="name" className='font-normal text-md'>Your Name</label>
                    <input type="text" name="" id="name" placeholder='e.g John' className='w-full border border-gray-300 bg-customBlack outline-none p-4 rounded-xl' />
                </div>
                <div className='lg:flex w-full items-center gap-6 mt-4'>
                    <div className='flex flex-col gap-3 items-start w-full'>
                        <label htmlFor="email" className='font-normal text-md'>Email Address</label>
                        <input type="email" name="" id="email" placeholder='e.g John@example.com' className='w-full bg-customBlack outline-none border border-gray-300 p-4 rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-3 items-start w-full mt-4'>
                        <label htmlFor="phone" className='font-normal text-md'>Phone Number</label>
                        <input type="number" name="" id="phone" placeholder='09135611021' className='w-full border bg-customBlack outline-none border-gray-300 p-4 rounded-xl' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-start w-full mt-4'>
                        <label htmlFor="message" className='font-normal text-md'>Message</label>
                        <textarea name="message" id="message" placeholder='Message' className='w-full border bg-customBlack outline-none border-gray-300 p-4 rounded-xl'></textarea>
                        
                    </div>

                <div className='w-full mt-4 lg:mt-12'>
                    <button className='bg-customColor transition-all duration-300 ease-in-out hover:bg-white text-white hover:text-black font-bold w-full p-4 rounded-full'>Submit Inquiry</button>
                </div>
            </form>
        </div>
    )
}

export default ReserveTableForm