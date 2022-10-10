import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-300 h-20 px-10'>
          <div>
            <h1 className='text-6xl text-blue-700'>Exam-Era</h1>
          </div>
          <div>
            <NavLink to='/topics'>Topics</NavLink>
            <NavLink to='/statics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
        </nav>
    );
};

export default Header;