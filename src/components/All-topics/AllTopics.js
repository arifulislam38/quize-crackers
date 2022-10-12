import React from 'react';
import { NavLink } from 'react-router-dom';
import {  ArrowRightIcon } from '@heroicons/react/24/solid';

const AllTopics = ({topics}) => {
    const {logo, name, id, total} = topics;
    return (
        <div className='shadow shadow-slate-300 p-2 rounded'>
            <img className='bg-gray-200 rounded' src={logo} alt='this is an imag'></img>
            <p className='font-semibold mt-3'>Total Quiz: {total} </p>
            <div className='flex justify-between mt-2'>
                <p>{name}</p>
                <NavLink to={`../topics/${id}`}><button className='bg-blue-500 px-2 rounded flex gap-2'>start quiz<ArrowRightIcon className='h-6 w-6 cursor-pointer'></ArrowRightIcon></button></NavLink>
            </div>
        </div>
    );
};

export default AllTopics;