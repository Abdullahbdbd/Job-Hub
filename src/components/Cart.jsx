import React, { useEffect, useState } from 'react';
import CartShow from './CartShow';
import { key } from 'localforage';

const Cart = () => {
    const [jobNum, setJobNum] = useState([])

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setJobNum(data))
    }, [])

    return (
        <div className='items-center'>

            <div className='text-center'>
                <h1 className='text-4xl font-bold mt-20 mb-4'>Job Category List</h1>
            </div>

            <div className=' lg:flex'>
               {
                jobNum.map(job=> 
                <CartShow
                key={job.id}
                job={job}
                ></CartShow>)
               }
            </div>
        </div>
    );
};

export default Cart;