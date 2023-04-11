import React from 'react';
import Cart from './Cart';
import heroImg from '../assets/hardy.png'
import Jobs from './Jobs';
import JobDetails from './JobDetails';

const Home = () => {
    return (
        <div>

            <div className=' bg-indigo-50 -mt-10'>
                <div className='lg:flex justify-between mt-10 ml-10 lg:mx-52'>
                    <div className='space-y-5 lg:mt-52'>
                        <h1 className='text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                        <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />
                            your job application from start to finish.</p>
                        <button className='bg-indigo-500 p-3 rounded-lg text-white'>Get Started</button>
                    </div>
                    <div>
                        <img className='' src={heroImg} alt="" />
                    </div>
                </div>
            </div>



            <div>
            <Cart></Cart>
            <Jobs></Jobs>
            </div>
        </div>
    );
};

export default Home;