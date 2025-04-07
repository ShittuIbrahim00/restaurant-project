import React, {useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";


const About = () => {
    const [selected, setSelected] = useState('mission'); //default vision

    //data
    const content = {
        mission:{
            text:"At SpicyHunt, our vision is to redefine the dining experience by\n bringing people together over authentic, flavorful meals crafted\n with love and passion.We aim to be a beacon of culinary excellence,\n where every dish tells a story of tradition, innovation,\n and uncompromising quality.",
            image:"https://html.awaikenthemes.com/spicyhunt/images/our-mission-img.jpg"

        },
        vision:{
            text:"At SpicyHunt, our vision is to redefine the dining experience by\n bringing people together over authentic, flavorful meals crafted\n with love and passion.We aim to be a beacon of culinary excellence,\n where every dish tells a story of tradition, innovation,\n and uncompromising quality.",
            image:"https://html.awaikenthemes.com/spicyhunt/images/our-vision-img.jpg"
        },

        values:{
            text:"At SpicyHunt, our vision is to redefine the dining experience by\n bringing people together over authentic, flavorful meals crafted\n with love and passion.We aim to be a beacon of culinary excellence,\n where every dish tells a story of tradition, innovation,\n and uncompromising quality.",
            image:"https://html.awaikenthemes.com/spicyhunt/images/our-value-img.jpg"
        },
    };

    const handleClick = (section)=>{
        setSelected(section)
    };

    const renderText = (text) => {
        return text.split("\n").map((line, index) => (
          <p key={index} className="text-lg text-[#AEB0B4] ">{line}</p>
        ));
    };


    const buttonClasses = (section) => {
        return selected === section
          ? `text-[#A6A182]` 
          : `text-white hover:text-[#A6A182]`;
    };
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
                    <h2 className='text-7xl text-white mb-44'>ABOUT US</h2>
                </div>
            </div>

            <div className='bg-[#0E110D] '>
                <div className='grid grid-cols-2 mx-5 py-14 min-[320px]:grid-cols-1 md:grid-cols-2 md:gap-4'>
                    <div className=''>
                        <img
                            src="https://html.awaikenthemes.com/spicyhunt/images/about-us-image.jpg"
                            alt="light"
                            className='rounded-t-full rounded-b-full'
                        />
                    </div>
                    <div>
                        <h2 className='text-[#A6A182] font-bold'>ABOUT US</h2>
                        <h2 className='text-white font-bold text-4xl my-4'>OUR COMMITMENT TO<br/>AUTHENTICITY & <span className='text-[#A6A182]'>EXCELLENCE</span></h2>
                        <p className='text-[#AEB0B4]'>Every dish we create is a celebration of connection, crafted with passion<br/>and inspired by diverse flavors. Join us in an inviting space where every<br/>bite sparks joy and every moment becomes a cherished memory.</p>
                        <div className='text-[#AEB0B4] mt-5'>
                            <li>Seasonal & Locally Sourced Ingredients</li>
                            <li>Vegetarian & Dietary-Friendly Options</li>
                            <li>Exquisite Pairings & Unique Flavors</li>
                            <div className='flex mt-5 gap-8'>
                                <button className='text-white bg-[#A6A182] py-2 px-7 rounded-3xl font-bold hover:bg-white hover:text-black hover:scale-110 duration-300 flex justify-center items-center gap-3'>Order Now<FaArrowRight /></button>
                                <button className='text-white bg-[#A6A182] py-2 px-7 rounded-3xl font-bold hover:bg-white hover:text-black hover:scale-110 duration-300 flex justify-center items-center gap-3'>Book A Table<FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-8 mx-5  bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className='flex flex-wrap mx-5 py-9 gap-6 lg:grid lg:grid-cols-3'>
                    <div className='flex gap-7 min-[320px]:mb-5'>
                        <div className='rounded-full border-solid border-[0.5px] border-[#A6A182] p-5'>
                            <img
                                src="https://html.awaikenthemes.com/spicyhunt/images/icon-about-detail-1.svg"
                                alt="plate"
                                className='size-12'
                            />
                        </div>
                        <div>
                            <h2 className='text-white text-2xl font-bold'>Premium Dining</h2>
                            <p className='text-[#AEB0B4] text-lg'>It's very personal, and can only be<br/> a positive experience.</p>
                        </div>
                    </div>
                    <div className='flex gap-7 min-[320px]:mb-5'>
                        <div className='rounded-full border-solid border-[0.5px] border-[#A6A182] p-5'>
                            <img
                                src="https://html.awaikenthemes.com/spicyhunt/images/icon-about-detail-2.svg"
                                alt="plate"
                                className='size-12'
                            />
                        </div>
                        <div>
                            <h2 className='text-white text-2xl font-bold'>Abundant Flavors</h2>
                            <p className='text-[#AEB0B4] text-lg'>At secret recipe, we take immense<br/> pride in crafting.</p>
                        </div>
                    </div>
                    <div className='flex gap-7 min-[320px]:mb-5'>
                        <div className='rounded-full border-solid border-[0.5px] border-[#A6A182] p-5'>
                            <img
                                src="https://html.awaikenthemes.com/spicyhunt/images/icon-about-detail-3.svg"
                                alt="plate"
                                className='size-12'
                            />
                        </div>
                        <div>
                            <h2 className='text-white text-2xl font-bold'>Indigenous meal</h2>
                            <p className='text-[#AEB0B4] text-lg'>With local ingredients, unique spins on traditional flavors.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1F2120]'>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h5 className='text-[#A6A182] font-bold mt-20'>OUR APPROACH</h5>
                        <h2 className='text-white font-bold text-4xl'>DELIVERING MEMORABLE</h2>
                        <h2 className='text-white font-bold text-4xl'>DINING <span className='text-[#A6A182] font-bold'>EXPERIENCES</span></h2>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='flex justify-center gap-10 bg-[#363837] rounded-full w-3/12 h-12 text-base'>
                            <button onClick={() => handleClick("mission")} className={buttonClasses('mission')}>Mission</button>
                            <button onClick={() => handleClick("vision")} className={buttonClasses('vision')}>Vision</button>
                            <button onClick={() => handleClick("values")} className={buttonClasses('values')}>Values</button>
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-wrap gap-6 mt-14 mx-5 lg:grid lg:grid-cols-2'>
                    {/* text-section */}
                    <div>
                        <h2 className='text-[#A6A182] font-bold'>{selected === 'mission' ? 'OUR MISSION' : selected === 'vision' ? 'OUR VISION' : 'OUR VALUES'}</h2>

                        {/* <p className='text-[#AEB0B4]'>{content[selected].text}</p> */}
                        <h1 className='text-white text-4xl font-bold my-5'>CREATING MOMENT AROUND FLAVOUR</h1>
                        {renderText(content[selected].text)}
                    </div>

                    {/* image-section */}
                    <div>
                        <img
                            src={content[selected].image}
                            alt={selected}
                            className='rounded-3xl mb-14'
                        />
                    </div>
                </div>

            </div>

            <div className='bg-[#0E110D]'>
                
                <div className='flex flex-wrap gap-36 mx-5 lg:grid lg:grid-cols-2'>
                    {/* image-section */}
                    <div className='my-20'>
                        <img
                            src='https://html.awaikenthemes.com/spicyhunt/images/daily-offer-image.png'
                            alt="pizza"
                            className=''
                        />
                    </div>

                    {/* text-section */}
                    <div className='my-40'>
                        <h2 className='text-[#A6A182] font-bold'>OUR DAILY OFFERS</h2>
                        {/* <p className='text-[#AEB0B4]'>{content[selected].text}</p> */}
                        <h1 className='text-white text-4xl font-bold my-5'>TASTE THE SAVINGS WITH <br/> OUR <span className='text-[#A6A182] font-bold'>DAILY SPECIALS</span></h1>
                        <p className='text-[#AEB0B4]'>Every day is an opportunity to enjoy your favorites at a discounted price.<br/> Explore our daily rotating specials and indulge in flavorful meals at a <br/> fraction of the cost.</p>
                        <div className='flex mt-5 gap-8'>
                            <button className='text-white bg-[#A6A182] py-2 px-7 rounded-3xl font-bold hover:bg-white hover:text-black hover:scale-110 duration-300 flex justify-center items-center gap-3'>Order Now<FaArrowRight /></button>
                            <button className='text-white bg-[#A6A182] py-2 px-7 rounded-3xl font-bold hover:bg-white hover:text-black hover:scale-110 duration-300 flex justify-center items-center gap-3'>Book A Table<FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1F2120]'>
                <div className='flex flex-col items-center justify-center pt-10'>
                    <h5 className='text-[#A6A182] font-bold p-4'>ALWAYS QUALITY</h5>
                    <h2 className='text-white text-4xl font-bold'>THE TALENTED MINDS BEHIND</h2>
                    <h2 className='text-white text-4xl font-bold'>EVERY <span className='text-[#A6A182]'>FLAVOURFUL DISH</span></h2>
                </div>

                <div className="flex flex-wrap overflow-hidden justify-center py-14 lg:grid lg:grid-cols-4">
                    <div className="relative flex flex-col items-center rounded-xl p-4">
                        <img
                            src="https://html.awaikenthemes.com/spicyhunt/images/team-1.jpg"
                            alt="John Doe"
                            className="rounded-2xl h-[20rem] w-[20rem] object-cover hover:scale-105 duration-500"
                        />  
                        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                            <h3 className="text-2xl font-semibold">Esther</h3>
                            <div className="flex gap-4 mt-2 justify-center">
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiFacebook className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiTwitter className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiInstagram className='size-12'/>
                                </a>
                            </div>
                        </div>
                    </div>

            
                    <div className="relative flex flex-col items-center rounded-xl p-4">
                        <img
                            src="https://html.awaikenthemes.com/spicyhunt/images/team-2.jpg"
                            alt="Jane Smith"
                            className="rounded-2xl h-[20rem] w-[20rem] object-cover hover:scale-105 duration-500"
                        />
                        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                            <h3 className="text-2xl font-semibold">Smith</h3>
                            <div className="flex gap-4 mt-2 justify-center">
                                <a href="#" className="text-white color-[#A6A182] hover:text-[#A6A182] ">
                                    <CiFacebook className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiTwitter className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiInstagram className='size-12'/>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex flex-col items-center rounded-xl p-4">
                        <img
                        src="https://html.awaikenthemes.com/spicyhunt/images/team-3.jpg"
                        alt="Michael Johnson"
                        className="rounded-2xl h-[20rem] w-[20rem] object-cover hover:scale-105 duration-500"
                        />
                        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                            <h3 className="text-2xl font-semibold">Johnson</h3>
                            <div className="flex gap-4 mt-2 justify-center">
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiFacebook className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiTwitter className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiInstagram className='size-12'/>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex flex-col items-center  rounded-xl p-4">
                        <img
                        src="https://html.awaikenthemes.com/spicyhunt/images/team-4.jpg"
                        alt="Sarah Lee"
                        className="rounded-2xl h-[20rem] w-[20rem] object-cover hover:scale-105 duration-500"
                        />
                        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                            <h3 className="text-2xl font-semibold">Lee</h3>
                            <div className="flex gap-4 mt-2 justify-center">
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiFacebook className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182]">
                                    <CiTwitter className='size-12'/>
                                </a>
                                <a href="#" className="text-white hover:text-[#A6A182] group">
                                    <CiInstagram className='size-12 group-hover:fill-[#A6A182]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='flex items-center justify-center pb-14 text-white'>Meet the passionate team behind every flavour and experience meet our team</h3>

            </div>
        </div>
    )
}

export default About
