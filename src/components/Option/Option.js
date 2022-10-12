import React from 'react';
import { ToastContainer } from 'react-toastify';
const Option = ({option,ansCount,correctAnswer,id}) => {
    return (
        <div className='flex gap-3 items-center border rounded p-2 text-start hover:bg-slate-200 ' onClick={() => ansCount(option, correctAnswer, id)}>
            <input type="radio" id={option} name='select' />
            <label htmlFor={option}>{option}</label>
            <ToastContainer></ToastContainer>
        </div>      
    );
};

export default Option;