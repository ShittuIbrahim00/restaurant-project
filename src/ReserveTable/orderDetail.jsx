import React from 'react';


const OrderDetails = ({ order }) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex mx-auto flex-col items-center justify-center p-6 bg-white shadow-md rounded-2xl w-80'>
                <h2 className='text-2xl font-bold mb-4'>Order Details</h2>
                <div className='text-lg space-y-2 mb-6'>
                    <p className='font-semibold'>Fullname: </p>
                    <p className='font-semibold'>Date:</p>
                    <p className='font-semibold'>Qty_people:</p>
                    <p className='font-semibold'>Total:</p>
                </div>
                <div className='flex space-x-4'>
                    <button className='bg-green-700 p-3 rounded-xl text-white'>Pay Now</button>
                    <button className='bg-red-500 p-3 rounded-xl text-white'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
