import React from 'react'

const Login = () => {
  return (
    <div className='bg-customBlack min-h-screen font-Merienda'>
      <div className='grid lg:grid-cols-2 p-5 grid-cols-1 '>
        <div className='flex flex-col gap-6 pt-40 items-start justify-start'>
            <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
               login <br /> <div className='text-customColor'> <span className='text-white'>and</span> enjoy dining <br /> experience.</div>
            </div>
        </div>
        <div className='lg:w-[48%] w-full z-50 lg:absolute right-8 lg:top-40 bg-white rounded-2xl'>
        <form action="" className='w-full lg:pt-12 lg:pb-7 p-5 lg:px-9'>
                <div className='flex flex-col gap-3 items-start'>
                    <label htmlFor="email" className='font-normal text-md'>Email Address</label>
                    <input type="email" name="" id="email" placeholder='e.g John@example.com' className='w-full border border-gray-300 p-4 rounded-xl' />
                </div>
                <div className='flex flex-col gap-3 items-start mt-4'>
                    <label htmlFor="password" className='font-normal text-md'>Password</label>
                    <input type="password" name="" id="password" className='w-full border border-gray-300 p-4 rounded-xl' />
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

export default Login
