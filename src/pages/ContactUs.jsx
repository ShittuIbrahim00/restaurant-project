import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const ContactUs = () => {
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
                <h2 className='text-7xl text-white mb-44'>CONTACT US</h2>
            </div>
        </div>


        <div className='bg-[#0E110D]'>
            <div className="min-h-screen py-10">
                <div className="flex flex-wrap lg:grid lg:grid-cols-2 mx-5 gap-9 mb-12">
                    <div>
                        <h4 className='text-[#A6A182] font-bold text-lg'>Contact Us</h4>
                        <h2 className='text-white text-4xl font-bold py-3'>GET IN TOUCH <span className='text-[#A6A182]'>WITH US</span></h2>
                        <p className='text-[#AEB0B4] pb-8 text-lg'>Have questions or feedback? Reach out to us through the form below,<br/> call us, or visit our restaurant. We're here to help and look forward to<br/>connecting with you!</p>

                        <p className='text-[#AEB0B4] py-2 text-lg'>27 Division St, New York, NY 10002, USA</p>
                        <p className='text-[#AEB0B4] py-2 text-lg'>+01 780 859 632</p>
                        <p className='text-[#AEB0B4] py-2 text-lg'>info@domainname.com</p>

                        <div className="flex space-x-8 mt-5">
                            <a href="https://facebook.com/spicyhunt" className="text-white hover:text-[#A6A182] transition duration-300">
                                <CiFacebook className='size-12'/>
                            </a>
                            <a href="https://twitter.com/spicyhunt" className="text-white hover:text-[#A6A182] transition duration-300">
                                <CiTwitter className='size-12'/>
                            </a>
                             <a href="https://instagram.com/spicyhunt" className="text-white hover:text-[#A6A182] transition duration-300">
                                <CiInstagram className='size-12'/>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-[50%] min-[320px]:w-full bg-[#1F2120] p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#A6A182]">Send Us a Message</h2>
                        <form  className="mt-6 space-y-6">
                            <div>
                                <label className="block text-lg text-gray-700">Name</label>
                                <input
                                type="text"
                                name="name"
                                value=""
                                onChange=""
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 bg-transparent"
                                placeholder="Your Name"
                                required
                                />
                            </div>

                            <div>
                            <label className="block text-lg text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value=""
                                onChange=""
                                className="w-full p-3 border border-gray-300 rounded-md mt-2 bg-transparent"
                                placeholder="Your Email"
                                required
                            />
                            </div>

                            <div>
                                <label className="block text-lg text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value=""
                                    onChange=""
                                    className="w-full p-3 border border-gray-300 rounded-md mt-2 bg-transparent"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full p-3 bg-[#A6A182] text-white rounded-md hover:bg-[#A6A182] transition duration-300">
                                Submit Message
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ContactUs


// import React, { useState } from "react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // You can replace this with form submission logic
//     alert("Thank you for contacting us!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       {/* Contact Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-[#A6A182]">Contact Us</h1>
//         <p className="text-xl text-gray-600 mt-2">We’d love to hear from you!</p>
//       </div>

//       {/* Contact Information */}
//       <div className="flex justify-center space-x-16 mb-12">
//         <div className="flex flex-col items-center">
//           <h2 className="text-2xl font-semibold text-[#A6A182]">Our Location</h2>
//           <p className="text-lg text-gray-600 mt-2">
//             123 Spicy Street, Food Town, NY 10001
//           </p>
//           <div className="mt-4">
//             <iframe
//               title="SpicyHunt Location"
//               className="rounded-md"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.175756973302!2d-74.00601588459545!3d40.71277517932981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a15c5b7d263%3A0x8d5fda5411cc2769!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1629504381719!5m2!1sen!2sin"
//               width="300"
//               height="200"
//               style={{ border: "0" }}
//               allowFullScreen=""
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="w-[40%] bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-[#A6A182]">Send Us a Message</h2>
//           <form onSubmit={handleSubmit} className="mt-6 space-y-6">
//             <div>
//               <label className="block text-lg text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md mt-2"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-lg text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md mt-2"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-lg text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md mt-2"
//                 placeholder="Your Message"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full p-3 bg-[#A6A182] text-white rounded-md hover:bg-[#A6A182] transition duration-300"
//             >
//               Submit Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer with Social Links */}
//       <div className="flex justify-center space-x-8 mt-12">
//         <a
//           href="https://facebook.com/spicyhunt"
//           className="text-[#4267B2] hover:text-[#365899] transition duration-300"
//         >
//           <i className="fab fa-facebook-f text-3xl"></i>
//         </a>
//         <a
//           href="https://twitter.com/spicyhunt"
//           className="text-[#1DA1F2] hover:text-[#0d95e8] transition duration-300"
//         >
//           <i className="fab fa-twitter text-3xl"></i>
//         </a>
//         <a
//           href="https://instagram.com/spicyhunt"
//           className="text-[#E4405F] hover:text-[#c13584] transition duration-300"
//         >
//           <i className="fab fa-instagram text-3xl"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

