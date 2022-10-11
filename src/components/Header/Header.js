import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-300 h-20 px-10 shadow-gray-300'>
          <div>
            <h1 className='text-6xl text-blue-700'>Exam-Era</h1>
          </div>
          <div className='text-xl text-blue-700 flex gap-4'>
            <NavLink to='/home' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Home</NavLink>

            <NavLink to='/statistics' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Statistics</NavLink>

            <NavLink to='/blog' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Blog</NavLink>

            <NavLink to='/about' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>About</NavLink>
          </div>
        </nav>
    );
};

export default Header;