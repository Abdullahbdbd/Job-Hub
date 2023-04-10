import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';




const Statistics = () => {

    const data = [
        {
            name: 'Assignment 1',
            id: 1,
            marks: 23,
        },
        {
            name: 'Assignment 2',
            id: 2,
            marks: 57,
        },
        {
            name: 'Assignment 3',
            id: 3,
            marks: 54,
        },
        {
            name: 'Assignment 4',
            id: 4,
            marks: 28,
        },
        {
            name: 'Assignment 5',
            id: 5,
            marks: 55,
        },
        {
            name: 'Assignment 6',
            id: 6,
            marks: 56,
        },
        {
            name: 'Assignment 7',
            id: 7,
            marks: 60,
        },

    ];


    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center bg-indigo-50 p-10 w-full'> Statistics</h1>
            </div>

            <div className='ml-10 mt-20'>
                <AreaChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Statistics;