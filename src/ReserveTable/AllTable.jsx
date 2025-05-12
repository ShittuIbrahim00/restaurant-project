import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllTable = () => {
    const [category, setCategory] = useState([])
    const [table, setTable] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
            const resp = await axios.get('https://restaurant-backend-wwjm.onrender.com/api/v1/get-all-category')
            console.log(resp.data)
            if (resp.data.sucess === true) {
                setCategory(resp.data.data)
            } else {
                setCategory([])
            }
        }
        fetchCategory()
    }, [])

    useEffect(() => {
        const fetchAllTable = async () => {
            const resp = await axios.get('https://restaurant-backend-wwjm.onrender.com/api/v1/get-all-table')
            if (resp.data.success === true) {
                setTable(resp.data.data)
            } else {
                setTable([])
            }
        }
        fetchAllTable()
    }, [])

    // const fetchTable = async (_id) => {
    //     try {
    //         const resp = await axios.get(`https://restaurant-backend-wwjm.onrender.com/api/v1/get-table-category/${_id}`);
    //         if (resp.data.success) {
    //             setTable(resp.data.data);
    //         } else {
    //             setTable([]);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching table data:", error);
    //         setTable([]); // Set empty table on error
    //     }
    // };

    if(table.length === 0) return <p className='text-center font-bold text-3xl mt-9'>Please wait while we retrieve all available tables</p>
return (
    <div className='w-[60%] mx-auto mt-[30px]'>
        {/* <div className='flex justify-between w-full mb-[20px]'>
            {
                category?.map((e) => (
                    <div key={e._id} onClick={() => fetchTable(e._id)} className='text-2xl hover:bg-gray-200 py-3 rounded-md cursor-pointer px-5'>{e.name}</div>
                ))
            }
        </div> */}

        <div>
            <h1 className='text-center text-3xl font-bold underline mb-8'>Tables</h1>
        </div>
        <div className='grid cursor-pointer md:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 w-full m-auto gap-5 text-center'>
            {
                table?.map((e) => (
                    <Link to={`/reservation/${e._id}`} className='bg-customColor leading-loose rounded-md p-2 hover:scale-95 text-black hover:text-white hover:bg-black'>
                        <h1 className='text-3xl font-bold'>{e.tableNumber}</h1>
                        <p className='text-sm font-semibold'>price: ${e.price} </p>
                        <p className='text-sm font-semibold'>capacity: {e.capacity} persons</p>
                        <p>category: {e?.categoryId?.name}</p>
                    </Link>

                ))
            }
        </div>
    </div>
)
}

export default AllTable