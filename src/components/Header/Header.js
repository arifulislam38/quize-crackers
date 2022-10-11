import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-300 h-20 px-10 shadow-gray-300'>
          <div>
            <h1 className='text-6xl text-blue-700'>Exam-Era</h1>
          </div>
          <div className='text-xl text-blue-700 flex gap-4'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
        </nav>
    );
};

export default Header;