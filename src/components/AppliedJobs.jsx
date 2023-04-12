import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';

const AppliedJobs = () => {

    const jobs = useLoaderData()

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center bg-indigo-50 p-10 w-full'>Applied Jobs</h1>
            </div>




            <div className='m-40'>
                <div className='flex flex-row-reverse space-x-4 space-x-reverse'>
                    <button className='bg-indigo-400 p-3 rounded-lg text-white'>Remote</button>
                    <button className='bg-indigo-400 p-3 rounded-lg text-white ml-5'>Onside</button>
                </div>
                
                {
                    jobs.map(job => <ReviewItem
                        key={job.id}
                        job={job}
                    ></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;