import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    return (
        <div className='border-solid border-2 p-4 rounded-lg'>
            <img className='h-20' src={job.logo} alt="" />
            <h4 className='font-bold mt-2'>{job.jobtitle}</h4>
            <p className='text-slate-400'>{job.companyName}</p>

            <div className='flex space-x-4 my-2 '>
                <h2 className='text-indigo-400 font-semibold p-1 px-2 border-solid border-2 border-indigo-300 rounded-sm text-sm'>{job.remoteOrOnsite}</h2>
                <h2 className='text-indigo-400 font-semibold p-1 px-2 border-solid border-2 border-indigo-300 rounded-sm text-sm'>{job.fulltimePartTime}</h2>
            </div>

            <div className='flex space-x-4 font-semibold'>
                <h2>{job.location}</h2>
                <h2>Salary : {job.salary}</h2>
            </div>
            <Link to={`/${job.id}`}>
                <button className='text-white font-semibold p-2 px-2 border-solid border-2 border-indigo-300 rounded-lg text-sm mt-3 bg-violet-400
                         '>View Details</button>
            </Link>
        </div>
    );
};

export default Job;