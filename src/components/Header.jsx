import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
    return (
        <div>
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

            </div>

        </div>

    );
};

export default Header;