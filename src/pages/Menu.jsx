import React from 'react'
import herobg from "../assets/hero-bg.jpg";
import { HiOutlineSlash } from "react-icons/hi2";
import dishImgOne from "../assets/special-menu-img-1.jpg";
import dishImgTwo from "../assets/special-menu-img-2.jpg";
import dishImgThree from "../assets/special-menu-img-3.jpg";
import dishImgFour from "../assets/special-menu-img-4.jpg";
import dishImgFive from "../assets/special-menu-img-5.jpg";
import dishImgSix from "../assets/special-menu-img-6.jpg";
import startImgOne from "../assets/starters-img-1.png";
import startImgTwo from "../assets/starters-img-2.png";
import startImgThree from "../assets/starters-img-3.png";
import startImgFour from "../assets/starters-img-4.png";
import startImgFive from "../assets/starters-img-5.png";
import startImgSix from "../assets/starters-img-6.png";
import vegetablesImgOne from "../assets/vegetables-img-1.png";
import vegetablesImgTwo from "../assets/vegetables-img-2.png";
import vegetablesImgThree from "../assets/vegetables-img-3.png";
import vegetablesImgFour from "../assets/vegetables-img-4.png";
import vegetablesImgFive from "../assets/vegetables-img-5.png";
import vegetablesImgSix from "../assets/vegetables-img-6.png";
import seafood1 from "../assets/seafood-img-1.png";
import seafood2 from "../assets/seafood-img-2.png";
import seafood3 from "../assets/seafood-img-3.png";
import seafood4 from "../assets/seafood-img-4.png";
import seafood5 from "../assets/seafood-img-5.png";
import seafood6 from "../assets/seafood-img-6.png";
import desserts1 from "../assets/desserts-img-1.png";
import desserts2 from "../assets/desserts-img-2.png";
import desserts3 from "../assets/desserts-img-3.png";
import desserts4 from "../assets/desserts-img-4.png";
import desserts5 from "../assets/desserts-img-5.png";
import desserts6 from "../assets/desserts-img-6.png";
import beverages1 from "../assets/beverages-img-1.png";
import beverages2 from "../assets/beverages-img-2.png";
import beverages3 from "../assets/beverages-img-3.png";
import beverages4 from "../assets/beverages-img-4.png";
import beverages5 from "../assets/beverages-img-5.png";
import beverages6 from "../assets/beverages-img-6.png";
import salads1 from "../assets/salads-img-1.png";
import salads2 from "../assets/salads-img-2.png";
import salads4 from "../assets/salads-img-4.png";
import salads5 from "../assets/salads-img-5.png";
import salads6 from "../assets/salads-img-6.png";

const Menu = () => {
    const data = [
        {
            id: 1,
            img: dishImgOne,
            title: "starter",
        },
        {
            id: 2,
            img: dishImgTwo,
            title: "vegetables",
        },
        {
            id: 3,
            img: dishImgThree,
            title: "seafood",
        },
        {
            id: 4,
            img: dishImgFour,
            title: "desserts",
        },
        {
            id: 5,
            img: dishImgFive,
            title: "beverages",
        },
        {
            id: 6,
            img: dishImgSix,
            title: "salads & soups",
        },
    ];
    const datas = [
        {
            id: 1,
            img: startImgOne,
            title: "Spring rolls",
            price: "$16.00",
            descp: "Crispy rolls filled with vegetables, served with dipping sauce.",
        },
        {
            id: 2,
            img: startImgTwo,
            title: "Aloo tikki",
            price: "$12.00",
            descp: "Golden potato patties served with chutney.",
        },
        {
            id: 3,
            img: startImgThree,
            title: "Paneer tikka",
            price: "$26.00",
            descp: "Grilled paneer cubes, spiced to perfection.",
        },
        {
            id: 4,
            img: startImgFour,
            title: "Hara kebab",
            price: "$20.00",
            descp: "Green vegetable and herb kebabs, grilled to perfection.",
        },
        {
            id: 5,
            img: startImgFive,
            title: "Chili mushrooms",
            price: "$10.00",
            descp: "Spicy, crispy mushrooms with a tangy twist.",
        },
        {
            id: 6,
            img: startImgSix,
            title: "Veg Pakoras",
            price: "$22.00",
            descp: "Crispy vegetable fritters with a dip.",
        },
    ]
    const data1 = [
        {
            id: 1,
            img: vegetablesImgOne,
            title: "Veg biryani",
            price: "$06.00",
            descp: "Octopus Fennel pairs tender octopus with fresh fennel.",
        },
        {
            id: 2,
            img: vegetablesImgTwo,
            title: "Baingan bharta",
            price: "$05.00",
            descp: "Crispy, freshly made chips paired with rich, flavorful dips.",
        },
        {
            id: 3,
            img: vegetablesImgThree,
            title: "Paneer Butter",
            price: "$06.00",
            descp: "Corn Tostada offers a crunchy base with tasty toppings.",
        },
        {
            id: 4,
            img: vegetablesImgFour,
            title: "Palak Paneer",
            price: "$08.00",
            descp: "Zesty Rolls are filled with vibrant flavors wrapped in a crispy.",
        },
        {
            id: 5,
            img: vegetablesImgFive,
            title: "Aloo gobi",
            price: "$10.00",
            descp: "Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.",
        },
        {
            id: 6,
            img: vegetablesImgSix,
            title: "Veg. curry",
            price: "$08.00",
            descp: "Fire Grill offers perfectly charred, smoky-flavored dishes.",
        },
    ];
    const data2 = [
        {
            id: 1,
            img: seafood1,
            title: "grilled salmon",
            price: "$12.99",
            descp: "Octopus Fennel pairs tender octopus with fresh fennel.",
        },
        {
            id: 2,
            img: seafood2,
            title: "calamari rings",
            price: "$05.00",
            descp: "Crispy, freshly made chips paired with rich, flavorful dips.",
        },
        {
            id: 3,
            img: seafood3,
            title: "shrimp masala",
            price: "$09.10",
            descp: "Corn Tostada offers a crunchy base with tasty toppings.",
        },
        {
            id: 4,
            img: seafood4,
            title: "lobster roll",
            price: "$18.99",
            descp: "Zesty Rolls are filled with vibrant flavors wrapped in a crispy.",
        },
        {
            id: 5,
            img: seafood5,
            title: "fish tacos",
            price: "$12.10",
            descp: "Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.",
        },
        {
            id: 6,
            img: seafood6,
            title: "fish curry",
            price: "$18.50",
            descp: "Fire Grill offers perfectly charred, smoky-flavored dishes.",
        },
    ];
    const data3 = [
        {
            id: 1,
            img: desserts1,
            title: "choco lava cake",
            price: "$06.99",
            descp: "Warm, gooey chocolate cake with a molten center.",
        },
        {
            id: 2,
            img: desserts2,
            title: "gulab jamun",
            price: "$15.00",
            descp: "Soft, syrup-soaked Indian sweet dumplings.",
        },
        {
            id: 3,
            img: desserts3,
            title: "tiramisu",
            price: "$16.00",
            descp: "A creamy, coffee-flavored Italian classic.",
        },
        {
            id: 4,
            img: desserts4,
            title: "vanilla panna",
            price: "$20.00",
            descp: "Creamy, silky dessert with a hint of vanilla..",
        },
        {
            id: 5,
            img: desserts5,
            title: "berry cake",
            price: "$10.00",
            descp: "Smooth cheesecake topped with fresh berries.",
        },
        {
            id: 6,
            img: desserts6,
            title: "apple pie",
            price: "$22.00",
            descp: "Warm, spiced apple filling in a flaky crust.",
        },
    ];
    const data4 = [
        {
            id: 1,
            img: beverages1,
            title: "mango lassi",
            price: "$04.50",
            descp: "A refreshing yogurt-based mango drink.",
        },
        {
            id: 2,
            img: beverages2,
            title: "masala chai",
            price: "$05.50",
            descp: "Spiced Indian tea with a bold flavor.",
        },
        {
            id: 3,
            img: beverages3,
            title: "iced coffee",
            price: "$07.99",
            descp: "Chilled coffee with a smooth, rich flavor.",
        },
        {
            id: 4,
            img: beverages4,
            title: "mint mojito",
            price: "$04.99",
            descp: "A cool, minty drink with a citrus kick.",
        },
        {
            id: 5,
            img: beverages5,
            title: "lemonade",
            price: "$05.10",
            descp: "Sweet and tangy homemade lemonade.",
        },
        {
            id: 6,
            img: beverages6,
            title: "coconut water",
            price: "$03.99",
            descp: "Naturally refreshing and hydrating coconut water.",
        },
    ];
    const data5 = [
        {
            id: 1,
            img: salads1,
            title: "greek salad",
            price: "$06.00",
            descp: "A fresh mix of cucumbers, olives, feta, and tomatoes drizzled.",
        },
        {
            id: 2,
            img: salads2,
            title: "minestrone soup",
            price: "$05.00",
            descp: "Hearty vegetable soup with pasta and beans in a savory broth.",
        },
        {
            id: 3,
            img: startImgThree,
            title: "caesar salad",
            price: "$06.00",
            descp: "Crisp lettuce, creamy dressing, croutons, and parmesan cheese.",
        },
        {
            id: 4,
            img: salads4,
            title: "chicken salad",
            price: "$08.00",
            descp: "Grilled chicken, mixed greens, avocado, and a tangy dressing.",
        },
        {
            id: 5,
            img: salads5,
            title: "tomato soup",
            price: "$10.00",
            descp: "A rich, velvety tomato soup with a hint of basil.",
        },
        {
            id: 6,
            img: salads6,
            title: "sweet corn soup",
            price: "$08.00",
            descp: "A warm and comforting corn-based soup with mild spices.",
        },
    ]

    return (
        <div>
            <div className="relative min-h-screen">
                <img
                    src={herobg}
                    alt="Hero Background"
                    className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
                    <div className="text-center mx-auto mt-10">
                        <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
                            Our menu
                        </h1>
                        <div className="flex justify-center items-center mt-4 text-gray-400">
                            <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
                            <HiOutlineSlash size={20} />
                            <p className="text-xs md:text-sm font-bold tracking-widest capitalize">menu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customBlack py-20">
                <div className="text-center mx-auto pb-16">
                    <div className='flex items-center justify-center gap-3'>
                        <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                        <p className='text-sm leading-9 font-bold uppercase text-customColor'>taste the best that surprise you</p>
                    </div>
                    <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold my-3 uppercase tracking-wide leading-snug">
                        our special <span className="text-customColor">menu</span>
                    </h1>
                    <p className="text-xs md:text-sm font-bold tracking-widest text-gray-400 my-3">
                        Enjoy the unique dishes from the basillico restaurant that only our restaurant has,Fusce
                    </p>
                    <p className="text-xs md:text-sm font-bold tracking-widest text-gray-400">
                        malesuada, lorem vitae euismod lobortis.
                    </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
                    {data?.map((mainDish) => (
                        <div key={mainDish.id} className="py-4 flex flex-col items-center gap-6">
                            <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
                                <div className="relative overflow-hidden rounded-full group">
                                    <img
                                        src={mainDish.img}
                                        alt=""
                                        className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
                                    />
                                    <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                                </div>
                            </div>
                            <h1 className="text-2xl capitalize text-center">{mainDish.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-customGray py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            starters
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {datas?.map((startDish) => (
                                <div
                                    key={startDish.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customBlack py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            vegetables
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {data1?.map((startDish1) => (
                                <div
                                    key={startDish1.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish1.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish1.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish1.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish1.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customGray py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            seafood
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {data2?.map((startDish) => (
                                <div
                                    key={startDish.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customBlack py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            desserts
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {data3?.map((startDish) => (
                                <div
                                    key={startDish.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customGray py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            beverages
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {data4?.map((startDish) => (
                                <div
                                    key={startDish.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-customBlack py-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:w-[90%] lg:w-[88%] mx-auto text-white">
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
                            <h1 className='text-sm leading-9 font-bold uppercase text-customColor'>menu & pricing</h1>
                        </div>
                        <div className='text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug'>
                            salads & soups
                        </div>
                    </div>
                    <div className="col-span-3 sm:grid-cols-1">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {data5?.map((startDish) => (
                                <div
                                    key={startDish.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl"
                                >
                                    <img
                                        src={startDish.img}
                                        alt="Dish"
                                        className="w-[100px] h-[100px] object-contain rounded-full"
                                    />
                                    <div className="flex flex-col gap-2 text-white w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                                            <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                                                {startDish.title}
                                            </h1>
                                            <div className="hidden sm:block flex-1 border border-gray-600"></div>
                                            <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                                                {startDish.price}
                                            </p>
                                        </div>
                                        <p className="leading-relaxed text-gray-400 text-center sm:text-left">{startDish.descp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu