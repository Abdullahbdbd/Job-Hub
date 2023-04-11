import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Job from './Job';

const Jobs = () => {
    const jobsData = useLoaderData()
    

    return (
        <div>
            <div className='text-center my-20 space-y-4  '>
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='lg:container'>

                <div className='grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1 mx-52'>

                    {
                        jobsData.map(job =>
                           <Job
                           key={job.id}
                           job={job}
                           ></Job>
                        ).slice(0, 4)}
               
               <button className='text-white font-semibold p-2 px-2 border-solid border-2 border-indigo-300 rounded-lg text-sm mt-3 bg-violet-400
                       w-32
                         '>See All Jobs</button>
              
                </div>
            </div>
        </div>
    );
};

export default Jobs;