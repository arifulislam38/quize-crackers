import React from 'react';
import { NavLink } from 'react-router-dom';

const AllTopics = ({topic}) => {
    const {logo, name, id} = topic;
    return (
        <div>
            <img src={logo} alt='this is an imag'></img>
            <div>
                <p>{name}</p>
                <NavLink to={`../topics/${id}`}><button>start quiz</button></NavLink>
            </div>
        </div>
    );
};

export default AllTopics;