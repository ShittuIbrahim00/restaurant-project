import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomModal from './Modal';
const OrderDetails = () => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('')
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const reserveId = JSON.parse(localStorage.getItem('reserveTable'));
        const id = reserveId?._id;
        setId(id);
        const fetchData = async () => {
            const resp = await axios.get(`https://restaurant-backend-wwjm.onrender.com/api/v1/get-single-resevertable/${id}`);
            if (resp.data.success) setData(resp.data.data);
        };
        fetchData();
    }, []);

    const cancelReservation = async () => {
        try {
            const resp = await axios.delete(`https://restaurant-backend-wwjm.onrender.com/api/v1/cancel-reservation/${id}`);
            if (resp.data.success) {
                toast.success(resp.data.msg);
                setShowModal(false);
                navigate('/')
            } else toast.error(resp.data.msg);
        } catch (error) {
            toast.error('An error occurred');
        }
    };




    return (
        <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Reservation Details</h1>
                </div>

                {/* Reservation Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Table Information */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Table Number</span>
                        <span className="font-semibold text-lg text-gray-800">{data?.table?.tableNumber}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">qty_persons</span>
                        <span className="font-semibold text-lg text-gray-800">{data.qty_persons}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">reservation_Time</span>
                        <span className="font-semibold text-lg text-gray-800">{data?.reservation_Time}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Username</span>
                        <span className="font-semibold text-lg text-gray-800">{data?.user?.name}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Email</span>
                        <span className="font-semibold text-lg text-gray-800">{data?.user?.email}</span>
                    </div>

                    {/* Reservation Date */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Reservation Date</span>
                        <span className="font-semibold text-lg text-gray-800">
                            {new Date(data?.reservation_Date).toLocaleDateString()}
                        </span>
                    </div>
                </div>

                {/* Total Price Information */}
                <div className="flex justify-between items-center mt-4 border-t pt-4">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Total</span>
                        <span className="font-semibold text-2xl text-gray-800">${data?.table?.price}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-8">
                    <button className="bg-green-500 text-white py-2 px-6 rounded" onClick={() => navigate('/cart-checkout')}>Proceed to Payment</button>
                    <button className="bg-red-500 text-white py-2 px-6 rounded" onClick={() => setShowModal(true)}>Cancel Reservation</button>
                </div>

                {showModal && <CustomModal cancelReservation={cancelReservation} setShowModal={setShowModal} />}

                {/* Footer */}
                <div className="mt-10 text-center text-gray-500 text-sm">
                    <p>{data.msg}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
