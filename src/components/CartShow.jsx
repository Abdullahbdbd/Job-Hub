import React from 'react';

const CartShow = ({job}) => {
    return (
       <div className='mt-10 w-40 ml-20 lg:ml-40'>
         <div className='bg-indigo-50 p-5 space-y-2 rounded-lg sm:w-48'>
            <img className='h-10' src={job.picture} alt="" />
           <h1 className=' font-bold'>{job.title}</h1>
           <p><small>{job.peragraph}</small></p>
        </div>
       </div>
    );
};

export default CartShow;