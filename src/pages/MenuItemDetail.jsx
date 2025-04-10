import React from 'react';

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
                    <button type="submit" className="w-40 p-3 mt-8 font-bold bg-[#A6A182] text-white rounded-md hover:bg-white hover:text-black hover:scale-110 duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItemDetail