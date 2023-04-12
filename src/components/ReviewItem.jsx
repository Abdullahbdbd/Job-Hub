import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({ job }) => {
    return (
        <div className='border my-5 h-40 p-5'>
            <div className='flex justify-between'>

                <div className='flex space-x-4'>

                    <div className='p-5 bg-gray-200 m-auto rounded-lg'>
                        <img className='h-20' src={job.logo} alt="" />
                    </div>

                    <div>
                        <h4 className='font-bold'>{job.jobtitle}</h4>
                        <p className='text-slate-400'>{job.companyName}</p>

                        <div className='flex space-x-3 my-2 '>
                            <h2 className='text-indigo-400 font-semibold p-1 px-2 border-solid border-2 border-indigo-300 rounded-sm text-sm'>{job.remoteOrOnsite}</h2>
                            <h2 className='text-indigo-400 font-semibold p-1 px-2 border-solid border-2 border-indigo-300 rounded-sm text-sm'>{job.fulltimePartTime}</h2>
                        </div>

                        <div className='flex space-x-4 font-semibold'>
                            <h2>{job.location}</h2>
                            <h2>Salary : {job.salary}</h2>
                        </div>

                    </div>
                </div>



                <div className='my-auto'>
                    
                    <button className='bg-indigo-400 p-3 rounded-lg text-white'>View Details</button>
                   
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;