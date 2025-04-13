import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TfiWorld } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const OurChef = () => {
    const chefs = [
        { id: 1, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-1.jpg', name: 'Sophia Martinez', position: 'Executive Chef' },
        { id: 2, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-2.jpg', name: 'Liam Patel', position: 'Sous Chef' },
        { id: 3, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-3.jpg', name: 'Isabella Carter', position: 'Pastry Chef' },
        { id: 4, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-4.jpg', name: 'Ethan Johnson', position: 'Restaurant Manager' },
        { id: 5, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-5.jpg', name: 'Oliver Bennett', position: 'Executive Chef' },
        { id: 7, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-7.jpg', name: 'James Anderson', position: 'Operations Manager' },
        { id: 6, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-6.jpg', name: 'Ava Martinez', position: 'Culinary Artist' },
        { id: 8, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-8.jpg', name: 'Liam Robinson', position: 'Marketing Strategist' }
    ];

    const [open, setOpen] = useState({});

    const handleMouseOver = (id) => {
        setOpen((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setOpen((prev) => ({ ...prev, [id]: false }));
    };

    return (
        <div className="bg-black opacity-95 pb-14">
            <div className="relative">
                <div
                    className="absolute top-0 left-0 w-full opacity-20 h-[60vh] lg:h-[90vh] bg-fixed bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url('https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg')` }}
                ></div>
                <div className="flex justify-center absolute top-[270px] items-center w-full">
                    <div>
                        <h1 className="leading-loose md:text-4xl sm:text-3xl text-3xl lg:text-6xl font-merienda font-bold text-white">
                            OUR CHEFS
                        </h1>
                        <div className="flex text-gray-400 mt-3 text-lg justify-center gap-2">
                            <Link to="/">Home</Link>
                            <p>/</p>
                            <p>Our Chef</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:pt-[550px] md:pt-[450px] sm:pt-[350px] pt-[350px]">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-3 gap-2">
                    {chefs.map((e) => (
                        <div key={e.id} className="mx-auto">
                            <div
                                onMouseOver={() => handleMouseOver(e.id)}
                                onMouseLeave={() => handleMouseLeave(e.id)}
                                className="relative"
                            >
                                <Link to={`${e.id}`} className='mx-auto'>
                                    <div
                                        style={{ backgroundImage: `url(${e.img})` }}
                                        className="rounded-2xl object-cover bg-cover bg-center lg:w-[280px] h-[400px] mt-16"
                                    >
                                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                                        <div className="absolute bottom-0 left-0  w-full p-4 flex flex-col items-center text-white">
                                            <h1 className="font-bold text-2xl text-center font-merienda">{e.name}</h1>
                                            <p className="text-gray-400 text-lg leading-7">{e.position}</p>

                                            {/* Motion Div for Smooth Pop-up */}
                                            {open[e.id] && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }} // Start hidden and lower
                                                    animate={{ opacity: 1, y: 0 }} // Animate into view
                                                    exit={{ opacity: 0, y: 30 }} // Animate out when hiding
                                                    transition={{ duration: 0.4, ease: 'easeInOut' }} // Smooth slow effect
                                                    className="flex items-center mt-3 gap-6"
                                                >
                                                    <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                                                        <TfiWorld />
                                                    </div>
                                                    <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                                                        <FaFacebookF />
                                                    </div>
                                                    <div className='rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none'>
                                                        <FaInstagram />
                                                    </div>
                                                </motion.div>
                                            )}

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurChef;
