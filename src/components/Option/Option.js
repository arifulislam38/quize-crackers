import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex gap-3 items-center border rounded p-2 text-start'>
            <input type="radio" id={option} name='select' />
            <label htmlFor={option}>{option}</label>
        </div>      
    );
};

export default Option;