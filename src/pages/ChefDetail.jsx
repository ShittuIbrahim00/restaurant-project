import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PiPhoneThin } from "react-icons/pi";
import ReserveTable from '../ReserveTable/ReserveTable';
import ContactChefForm from '../ReserveTable/ContactChefForm'
const ChefDetail = () => {
  const { id } = useParams()
  const chefId = parseInt(id)
  const chefs = [
    { id: 1, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-1.jpg', name: 'Sophia Martinez', position: 'Executive Chef', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 2, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-2.jpg', name: 'Liam Patel', position: 'Sous Chef', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 3, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-3.jpg', name: 'Isabella Carter', position: 'Pastry Chef', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 4, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-4.jpg', name: 'Ethan Johnson', position: 'Restaurant Manager', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 5, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-5.jpg', name: 'Oliver Bennett', position: 'Executive Chef', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 7, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-7.jpg', name: 'James Anderson', position: 'Operations Manager', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 6, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-6.jpg', name: 'Ava Martinez', position: 'Culinary Artist', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' },
    { id: 8, img: 'https://html.awaikenthemes.com/spicyhunt/images/team-8.jpg', name: 'Liam Robinson', position: 'Marketing Strategist', speciality: 'Chef', experience: 12, email: 'phone@gmail.com', phone: '+123 456 789', descp: 'Sophia Martinez is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurants guests. Williams leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.' }
  ];
  const chef = chefs.find((prev) => prev.id === chefId)
  return (
    <div className='bg-gray-950 opacity-100  pb-14'>
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full opacity-20 h-[60vh] lg:h-[90vh] bg-fixed bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg')` }}
        ></div>
        <div className="flex justify-center absolute top-[240px] items-center w-full">
          <div>
            <h1 className="leading-loose uppercase md:text-4xl sm:text-3xl text-3xl lg:text-6xl font-merienda font-bold text-white">
              {chef?.name}
            </h1>
            <div className="flex text-gray-400 mt-3 text-lg justify-center gap-2">
              <Link to="/">Home</Link>
              <p>/</p>
              <Link to='/chefs'>Chefs</Link>
              <p>/</p>
              <p>{chef?.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[98%] w-[90%] lg:pt-[600px] pt-[550px] mx-4 lg:flex items-start gap-9 '>
        <div className='lg:w-[30%] w-full lg:sticky lg:top-0'>
          <div className='lg:w-full '>
            <img src={chef?.img} alt={chef?.name} className='w-full rounded-2xl h-[450px]' />
          </div>
          <div className='w-full bg-customColor px-7 rounded-xl mt-5 h-[350px]'>
            <div className='flex justify-center'>
              <img src="https://html.awaikenthemes.com/spicyhunt/images/icon-sidebar-cta.svg" alt="" className='lg:w-[55px] pb-8 pt-4 flex justify-center' />
            </div>
            <h1 className='font-bold text-gray-200 text-xl'>You have different questions?</h1>
            <p className='leading-7 text-center text-md text-gray-200 font-semibold mt-4'>Our team will answer all your <br /> questions. we ensure a quick <br /> response.</p>
            <div className='flex justify-center mt-3'>
              <button className='text-black hover:text-white bg-white hover:bg-black transition-all duration-300 ease-in-out font-bold rounded-full p-4 flex justify-center items-center gap-2'><PiPhoneThin className='font-bold text-xl' /> {chef?.phone}</button>
            </div>
          </div>
        </div> 
        <div className='w-[65%]'>
          <div className='flex items-center gap-3'>
            <div className='h-[5px] w-[5px] bg-customColor rounded-full'></div>
            <p className='text-sm leading-9 font-bold uppercase text-customColor'>{chef.speciality}</p>
          </div>
          <div className='mt-3'>
            <h1 className='text-white leading-5 font-bold lg:text-[45px] md:text-[35px] text-[30px]'>ABOUT <span className='text-customColor'>ME</span></h1>
          </div>
          <div className='w-[150%] lg:w-full mt-7 text-gray-300 opacity-90 text-lg leading-7'>
            <p>{chef?.descp}</p>
          </div>
          <div className='mt-12'>
            <div className='w-full lg:w-[35%] flex items-center justify-between'>
              <p className='text-white font-bold text-xl'>Speciality:</p>
              <p className='text-white font-semibold'>{chef?.speciality}</p>
            </div>
            <div className='w-full mt-2 lg:w-[35%] flex items-center justify-between'>
              <p className='text-white font-bold text-xl'>Experience:</p>
              <p className='text-white font-semibold'>{chef?.experience}</p>
            </div>
            <div className='w-full mt-2 lg:w-[35%] flex items-center justify-between'>
              <p className='text-white font-bold text-xl'>Email:</p>
              <p className='text-white font-semibold text-right'>{chef?.email}</p>
            </div>
            <div className='w-full mt-2 lg:w-[35%] flex items-center justify-between'>
              <p className='text-white font-bold text-xl'>Phone:</p>
              <p className='text-white font-semibold'>{chef?.phone}</p>
            </div>
          </div>

          <div>
            <hr className='bg-gray-100 opacity-15 mt-12 lg:w-full w-[150%]' />
          </div>
          <div>
            <div className='mt-12'>
              <h1 className='text-white leading-5 font-bold lg:text-[40px] md:text-[35px] text-[30px]'>CONTACT <span className='text-customColor'>ME</span></h1>
            </div>
            <div className='lg:w-full w-[150%] mt-7 text-gray-300 opacity-90 text-lg leading-7'>
            <p>{chef?.descp}</p>
          </div>
          </div>
          <ContactChefForm className='w-full'/>
        </div>
      </div>
    <ReserveTable/>
    </div>
  )
}

export default ChefDetail