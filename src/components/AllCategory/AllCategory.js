import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AllCategory = () => {
    const data = useLoaderData();
    const allCategory = data.data;
    console.log('inside all category',data);
    return (
        <div>
            <p className='text-3xl font-semibold mb-10'>Total Category in this page</p>
            <LineChart height={600} width={600} data={allCategory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
              
            </LineChart>
        </div>
    );
};

export default AllCategory;