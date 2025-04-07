import React from 'react'

const ReserveTableForm = () => {
    return (
        <div className='lg:w-[48%] w-full z-50 lg:absolute right-4 bg-white rounded-2xl'>
            <form action="" className='w-full lg:pt-12 lg:pb-7 p-5 lg:px-9'>
                <div className='flex flex-col gap-3 items-start'>
                    <label htmlFor="name" className='font-normal text-md'>Your Name</label>
                    <input type="text" name="" id="name" placeholder='e.g John' className='w-full border border-gray-300 p-4 rounded-xl' />
                </div>
                <div className='lg:flex w-full items-center gap-6 mt-4'>
                    <div className='flex flex-col gap-3 items-start w-full'>
                        <label htmlFor="email" className='font-normal text-md'>Email Address</label>
                        <input type="email" name="" id="email" placeholder='e.g John@example.com' className='w-full border border-gray-300 p-4 rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-3 items-start w-full mt-4'>
                        <label htmlFor="phone" className='font-normal text-md'>Phone Number</label>
                        <input type="number" name="" id="phone" placeholder='09135611021' className='w-full border border-gray-300 p-4 rounded-xl' />
                    </div>
                </div>
                <div className='lg:flex w-full items-center gap-6 mt-4'>
                    <div className='flex flex-col gap-3 items-start w-full'>
                        <label htmlFor="name" className='font-normal text-md'>Date</label>
                        <input type="date" name="" id="name" placeholder='e.g John' className='w-full border border-gray-300 p-4 rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-3 items-start w-full mt-4'>
                        <label htmlFor="time" className='font-normal text-md'>Time</label>
                       <select name="time" id="" className='w-full border border-gray-300 p-4 rounded-xl' >
                        <option value="">Select Time</option>
                        <option value="06:30 PM">06:30 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="07:30 PM">07:30 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="08:30 PM">08:30 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                       </select>
                    </div>
                    <div className='flex flex-col gap-3 items-start w-full mt-4'>
                        <label htmlFor="quantity" className='font-normal text-md'>No Of Person</label>
                        <select name="time" id="quantity" className='w-full border border-gray-300 p-4 rounded-xl' >
                        <option value="">no of person</option>
                        <option value="10 person">10 person</option>
                        <option value="20 person">20 person</option>
                        <option value="30 person">30 person</option>
                        <option value="40 person">40 person</option>
                        <option value="50 person">50 person</option>
                        <option value="60 person">60 person</option>
                       </select>
                    </div>
                </div>

                <div className='w-full mt-4 lg:mt-12'>
                    <button className='bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full'>Reserve Now</button>
                </div>
            </form>
        </div>
    )
}

export default ReserveTableForm