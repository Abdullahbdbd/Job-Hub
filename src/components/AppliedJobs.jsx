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
                {
                    jobs.map(job=> <ReviewItem
                    key={job.id}
                    job={job}
                    ></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;