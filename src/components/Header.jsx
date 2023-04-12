import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
    return (
        <div>
            <div className=' bg-indigo-50 py-5'>

                <div className='lg:flex justify-between lg:mx-52 ml-10 space-y-5 items-center'>
                    <div className='text-2xl font-bold'>
                        <h1 className='-mb-5'>JobHub</h1>
                    </div>
                    <div className='items-center space-x-10 lg:space-x-20 '>
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>AppliedJobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    <div>
                        <button className='bg-indigo-500 p-3 rounded-lg text-white'>Star Applying</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Header;