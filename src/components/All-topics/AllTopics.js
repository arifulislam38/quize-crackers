import React from 'react';
import { NavLink } from 'react-router-dom';

const AllTopics = ({topic}) => {
    const {logo, name, id} = topic;
    return (
        <div className='shadow shadow-slate-300 p-2 rounded'>
            <img className='bg-gray-200 rounded' src={logo} alt='this is an imag'></img>
            <div className='flex justify-between mt-2'>
                <p>{name}</p>
                <NavLink to={`../topics/${id}`}><button className='bg-blue-500 px-2 rounded'>start quiz</button></NavLink>
            </div>
        </div>
    );
};

export default AllTopics;