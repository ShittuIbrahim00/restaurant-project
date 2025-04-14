import React from 'react'

const SignUp = () => {
  return (
    <div className='bg-customBlack min-h-screen font-Merienda'>
    <div className='grid lg:grid-cols-2 p-5 grid-cols-1 '>
      <div className='flex flex-col gap-6 pt-28 items-start justify-start'>
          <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
             register <br /> <div className='text-customColor'> <span className='text-white'>and</span> enjoy dining <br /> experience.</div>
          </div>
      </div>
      <div className='lg:w-[48%] w-full z-50 lg:absolute right-8 lg:top-24 bg-white rounded-2xl mt-8'>
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
                  <div className='flex flex-col gap-3 items-start w-full lg:mt-0 md:mt-4'>
                      <label htmlFor="phone" className='font-normal text-md'>Phone Number</label>
                      <input type="number" name="" id="phone" placeholder='09135611021' className='w-full border border-gray-300 p-4 rounded-xl' />
                  </div>
              </div>
              <div className='lg:flex w-full items-center gap-6 mt-4'>
                  <div className='flex flex-col gap-3 items-start w-full'>
                      <label htmlFor="password" className='font-normal text-md'>Password</label>
                      <input type="password" name="" id="password" className='w-full border border-gray-300 p-4 rounded-xl' />
                  </div>
                  <div className='flex flex-col gap-3 items-start w-full lg:mt-0 md:mt-4'>
                      <label htmlFor="phone" className='font-normal text-md'>Gender</label>
                      <select name="" id="" className='w-full rounded-xl border p-5 '>
          <option value="">Select</option>
          <option value="">Female</option>
          <option value="">Male</option>
        </select>
                  </div>
              </div>
              <div className='w-full mt-4 lg:mt-12'>
                  <button className='bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full'>Submit</button>
              </div>
          </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp
