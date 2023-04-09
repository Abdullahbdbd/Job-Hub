import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-indigo-50'>

            <div className='lg:flex justify-between lg:mx-52 ml-10 sm:space-y-5 items-center'>
                <div className='text-2xl font-bold'>
                    <h1>JobHub</h1>
                </div>
                <div className='items-center space-x-20'>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/appliedJobs'>AppliedJobs</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div>
                    <button className='bg-indigo-500 p-3 rounded-lg text-white'>Star Applying</button>
                </div>
            </div>


            <div className='lg:flex justify-between mt-10 lg:mt-52 ml-10 lg:mx-52'>
                <div className='space-y-5'>
                    <h1 className='text-5xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-indigo-500'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />
                    your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img className='' src="../../public/istockphoto-1034391536-170667a-PhotoRoom.png-PhotoRoom.png" alt="" />
                </div>
            </div>

        </div>
        
    );
};

export default Header;