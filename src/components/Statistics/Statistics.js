import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const data = useLoaderData();
    const allCategory = data.data;
    return (
        <div className='md:w-3/4 mx-auto h-2/3 flex flex-col items-center'>
             <p className='text-3xl font-semibold mb-6 mt-6'>Total Category in this page</p>
            
            <div className='sm:w-screen md:w-full'>
            <LineChart width={800} height={400} data={allCategory}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </div>
        
        </div>
    );
};

export default Statistics;