import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
import AppliedJobs from './AppliedJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faCalendarDays, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
    const jobId = useParams()
    const jobs = useLoaderData()

    const [job, setJob] = useState({})

    const [cart, setCart]=useState([])

    useEffect(() => {
        const jobData = jobs.find(job => job.id === jobId.id)
        setJob(jobData)

    }, [])

    const handleApplyBtn = (job) => {
       const newCart =[...cart, job];
       setCart(newCart);
       addToDb(job.id)
    }

    return (
       
         <div>
            <div>
                <h1 className='text-5xl font-bold text-center bg-indigo-50 p-10 w-full'>Job Details </h1>
            </div>


            <div className='mt-32 m-8 flex justify-between '>

                <div className='w-2/4 mx-20'>
                    <h1><span className='font-bold'>Job Description:</span> {job.jobDescription}</h1>
                    <h1 className='mt-5'><span className='font-bold'>Job Responsibility:</span> {job.jobResponsibility}</h1>
                    <h1 className='font-bold mt-5 mb-3'>Educational Requirements:</h1>
                    <p className='font-semibold'>{job.educationalRequirements}</p>
                    <h1 className='font-bold mt-4'>Experiences:</h1>
                    <p>{job.experiences}</p>
                </div>



                <div>
                    <div className='bg-indigo-50 p-5 rounded-lg'>
                        <h1 className='font-bold mb-3'>Job Details</h1>
                        <hr />
                        <h1 className='mt-3'><span className='font-semibold'>
                        <FontAwesomeIcon icon={faCircleDollarToSlot} />
                            Salary : </span>{job.salary} (Per Month)</h1>
                        <h1 className='mt-2'><span className='font-semibold'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                            Job Title : </span>{job.jobtitle}</h1>

                        <h1 className='font-bold mt-5 mb-3'>Contact Information</h1>
                        <hr />
                        <h1 className='mt-3'><span className='font-semibold'>
                        <FontAwesomeIcon icon={faPhone} />
                            Phone : </span>{job.phone}</h1>
                        <h1 className='mt-3'><span className='font-semibold'>
                        <FontAwesomeIcon icon={faEnvelope} />
                            Email : </span>{job.email}</h1>
                        <h1 className='mt-3'><span className='font-semibold'>
                        <FontAwesomeIcon icon={faLocationDot} />
                            Address : </span>{job.location}</h1>

                    </div>
                    <button onClick={() => handleApplyBtn(job)} className='text-white font-semibold p-2 px-2 border-solid border-2 border-indigo-300 rounded-lg text-sm mt-3 bg-violet-400
                       w-60 '>Apply Now</button>
                </div>
            </div>

        </div>

        
       
    );
};

export default JobDetails;