import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const Statistics = () => {
const totalMarks=useLoaderData()

const {data}=totalMarks;

    return (
        <div className=' mt-60'>
            
           <div className='w-60'>
           <LineChart width={400} height={300} data={data}>
            <Line type="monotone" dataKey='total' stroke="#8884d8" />
            <XAxis dataKey="total" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
           </LineChart>
           </div>

        



        </div>
    );
};

export default Statistics;