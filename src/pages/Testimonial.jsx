import React from 'react'
import herobg from "../assets/hero-bg.jpg";
import { HiOutlineSlash } from "react-icons/hi2";
import dishImgOne from "../assets/our-ingredients-image.png";
import dishImgTwo from "../assets/author-2.jpg";
import dishImgThree from "../assets/author-1.jpg";
import dishImgFour from "../assets/about-us-img-2.jpg";
import { TiStarFullOutline } from "react-icons/ti";

const Testimonial = () => {
    const data = [
        {
            id: 1,
            descps: "The food here was exceptional, especially their Butter Garlic Prawns! The ambiance was cozy and cheerful. I'll definitely visit again.",
            img: dishImgOne,
            title: "anshul gupta",
            descp:
                "food blogger",
        },
        {
            id: 2,
            descps: "The staff was helpful, attentive, and friendly. We ordered Spicy Bites, which exceeded our expectations in both taste and presentation.",
            img: dishImgTwo,
            title: "pooja sharma",
            descp:
                "lifestyle influencer",
        },
        {
            id: 3,
            descps: "This restaurant serves delicious food with amazing presentation. The Fire Grill Platter was a big hit with my entire family and friends!",
            img: dishImgThree,
            title: "kabir singh",
            descp:
                "restaurant manager",
        },
        {
            id: 4,
            descps: "If you want to experience real flavors, this place is absolutely perfect. Their Corn Tostada and Zesty Rolls truly won our hearts.",
            img: dishImgFour,
            title: "neha verma",
            descp:
                "head chef",
        },
        {
            id: 5,
            descps: "This was one of my best dining experiences ever. Their Purple Corn Tostada and delectable desserts truly made our evening unforgettable.",
            img: dishImgFour,
            title: "appetrohit mishraizers",
            descp:
                "restaurant manager",
        },
        {
            id: 6,
            descps: "The food at SpicyHunt is truly extraordinary, with every dish showcasing exceptional attention to detail, flavor, and creativity.",
            img: dishImgFour,
            title: "aisha verma",
            descp:
                "head chef",
        },
    ];
    return (
        <div className="">
            <div className="relative min-h-screen">
                <img
                    src={herobg}
                    alt="Hero Background"
                    className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
                    <div className="text-center mx-auto mt-10">
                        <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
                            Testimonial
                        </h1>
                        <div className="flex justify-center items-center mt-4 text-gray-400">
                            <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
                            <HiOutlineSlash size={20} />
                            <p className="text-xs md:text-sm font-bold tracking-widest">Testimonials</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customBlack">
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[84%] text-white mx-auto py-28">
                    {data?.map((mainDish) => (
                        <div key={mainDish.id} className="py-12 flex flex-col items-center gap-2 border border-gray-600 rounded-xl px-10">
                            <div className="flex text-customColor justify-center items-center mb-2">
                                <TiStarFullOutline size={22} />
                                <TiStarFullOutline size={22} />
                                <TiStarFullOutline size={22} />
                                <TiStarFullOutline size={22} />
                                <TiStarFullOutline size={22} />
                            </div>
                            <h1 className="text-center text-gray-400 text-">{mainDish.descps}</h1>
                            <div className="w-20 sm:w-15 md:w-15 rounded-full my-4">
                                <div className="relative overflow-hidden rounded-full group">
                                    <img
                                        src={mainDish.img}
                                        alt=""
                                        className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
                                    />
                                </div>
                            </div>
                            <h1 className="text-2xl capitalize text-center">
                                {mainDish.title}
                            </h1>
                            <h1 className="text-center text-gray-400 capitalize">{mainDish.descp}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
