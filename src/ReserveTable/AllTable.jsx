import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTable = () => {
    const [category, setCategory] = useState([]);
    const [table, setTable] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            const resp = await axios.get('https://restaurant-backend-wwjm.onrender.com/api/v1/get-all-category');
            if (resp.data.sucess === true) {
                setCategory(resp.data.data);
            } else {
                setCategory([]);
            }
        };
        fetchCategory();
    }, []);

    useEffect(() => {
        const fetchAllTable = async () => {
            setLoading(true);
            const resp = await axios.get('https://restaurant-backend-wwjm.onrender.com/api/v1/get-all-table');
            if (resp.data.success === true) {
                setTable(resp.data.data);
            } else {
                setTable([]);
            }
            setLoading(false);
        };
        fetchAllTable();
    }, []);

    return (
        <div className='w-[60%] mx-auto mt-[30px]'>
            <div>
                <h1 className='text-center text-3xl font-bold underline mb-8'>Tables</h1>
            </div>

            {loading ? (
                <p className='text-center font-bold text-3xl mt-9'>Please wait while we retrieve all available tables...</p>
            ) : (
                <div className='grid cursor-pointer shadow-xl p-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 w-full m-auto gap-5 text-center'>
                    {table?.map((e) => (
                        <Link to={`/reservation/${e._id}`} key={e._id} className='bg-customColor leading-loose rounded-md p-2 hover:scale-95 text-black hover:text-white hover:bg-black'>
                            <h1 className='text-3xl font-bold'>{e.tableNumber}</h1>
                            <p className='text-sm font-semibold'>Price: ${e.price}</p>
                            <p className='text-sm font-semibold'>Capacity: {e.capacity} persons</p>
                            <p>Category: {e?.categoryId?.name}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllTable;
