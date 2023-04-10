import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const jobsData = useLoaderData()
    console.log(jobsData)

    return (
        <div>
            <div className='text-center my-20 space-y-4  '>
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='container'>

                <div className='grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1 mx-52'>

                    {
                        jobsData.map(job =>
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
                                <button className='text-white font-semibold p-2 px-2 border-solid border-2 border-indigo-300 rounded-lg text-sm mt-3 bg-violet-400
                         '>View Details</button>
                            </div>
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