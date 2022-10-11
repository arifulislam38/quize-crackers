import React from 'react';

const Option = ({option,ansCount,correctAnswer,id}) => {
    return (
        <div className='flex gap-3 items-center border rounded p-2 text-start ' onClick={() => ansCount(option, correctAnswer, id)}>
            <input type="radio" id={option} name='select' />
            <label htmlFor={option}>{option}</label>
        </div>      
    );
};

export default Option;