import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
  const [open, setOpen] = useState(false);

    return (
        <nav className={`flex justify-between items-center bg-slate-300 h-[10vh] px-10 shadow-gray-300 ${open? 'mb-32' : 'mb-1'}`}>
          <div>
            <h1 className='lg:text-5xl sm:text-4xl text-2xl text-blue-700 sm:text-start'>Exam-Era</h1>
          </div>
          <div className={`lg:text-xl md:text-xl text-lg text-blue-700 flex gap-4 absolute md:static ${open? 'top-14 flex flex-col bg-slate-300 ml-[-40px] w-full': 'top-[-400px]'}`} >
              <NavLink to='/home' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Home</NavLink>

              <NavLink to='/statistics' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Statistics</NavLink>

              <NavLink to='/blog' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>Blog</NavLink>

              <NavLink to='/about' className={({isActive}) => isActive ? 'text-red-500' : 'text-blue-700'}>About</NavLink>
          </div>
          <div className='md:hidden h-6 w-6' onClick={() => setOpen(!open)}>
            {
              open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
            }
          </div>
        </nav>
    );
};

export default Header;