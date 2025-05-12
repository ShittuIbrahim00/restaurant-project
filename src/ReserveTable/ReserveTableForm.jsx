import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const ReserveTableForm = ({id}) => {
    
    const token = JSON.parse(localStorage.getItem(''))
    const [error, setError] = useState({});
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        reservation_Date: '',
        reservation_Time: '',
        qty_persons: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const newErrors = {};

        if (!formData.reservation_Date) newErrors.reservation_Date = 'Reservation date is required';
        if (!formData.reservation_Time) newErrors.reservation_Time = 'Reservation time is required';
        if (!formData.qty_persons) newErrors.qty_persons = 'Number of persons is required';

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            setLoader(false);
            return;
        }

        setError({});

        try {
            const resp = await axios.post(`https://restaurant-backend-wwjm.onrender.com/api/v1/create-reserve-table/${id}`, formData, {headers: {'bearer': token}});

            if (resp.data.success) {
                setLoader(false);
                toast.success(resp.data.msg);
            } else {
                setLoader(false);
                toast.error(resp.data.msg);
            }
        } catch (error) {
            setLoader(false);
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <div className='lg:w-[48%] w-full z-50 lg:absolute right-4 bg-white rounded-2xl'>
            <form onSubmit={handleSubmit} className='w-full lg:pt-12 lg:pb-7 p-5 lg:px-9'>
                <div className='flex flex-col gap-3 items-start mt-4'>
                    <label htmlFor='date' className='font-normal text-md'>Date</label>
                    <input type='date' name='reservation_Date' value={formData.reservation_Date} onChange={handleChange} className='w-full border border-gray-300 p-4 rounded-xl' />
                    {error.reservation_Date && <p className='text-red-500'>{error.reservation_Date}</p>}
                </div>

                <div className='flex flex-col gap-3 items-start mt-4'>
                    <label htmlFor='time' className='font-normal text-md'>Time</label>
                    <input type='time' name='reservation_Time' value={formData.reservation_Time} onChange={handleChange} className='w-full border border-gray-300 p-4 rounded-xl' />
                    {error.reservation_Time && <p className='text-red-500'>{error.reservation_Time}</p>}
                </div>

                <div className='flex flex-col gap-3 items-start mt-4'>
                    <label htmlFor='quantity' className='font-normal text-md'>No Of Person</label>
                    <input type='number' name='qty_persons' value={formData.qty_persons} onChange={handleChange} className='w-full border border-gray-300 p-4 rounded-xl' />
                    {error.qty_persons && <p className='text-red-500'>{error.qty_persons}</p>}
                </div>

                <div className='w-full mt-4 lg:mt-12'>
                    <button className='bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full'>{`${loader ? 'Please Wait while we process your request...' : 'Reserve Now'}`}</button>
                </div>
            </form>
        </div>
    );
};

export default ReserveTableForm;
