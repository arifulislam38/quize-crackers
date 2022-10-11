import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Statistics = () => {
    
    return (
        <div>
            <h1>this is statistics page</h1>
            <div className='flex justify-evenly items-center bg-slate-200 shadow shadow-slate-300 p-4'>
                <NavLink to='/statistics'>All Category</NavLink>
                <NavLink to='/statistics/react'>React</NavLink>
                <NavLink to='/statistics/js'>JS</NavLink>
                <NavLink to='/statistics/css'>CSS</NavLink>
                <NavLink to='/statistics/git'>Git</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Statistics;