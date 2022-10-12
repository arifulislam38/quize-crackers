import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({question,ansCount, showAns}) => {
    const {question:query, options, correctAnswer,id} = question;

    
    return (
        <div className='rounded md:w-2/3 mx-auto mb-3 p-4 shadow-md shadow-zinc-500 relative'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold w-[90%]'>{query} </h2>
                <EyeIcon className='h-6 w-6 cursor-pointer' onClick={()=> showAns(correctAnswer)} ></EyeIcon>
            </div>
            
           <form className='grid md:grid-cols-2 sm:grid-cols-1 gap-3 mt-6'>
             {
            options.map(option => <Option key={option} option={option} ansCount={ansCount} correctAnswer={correctAnswer} id={id}></Option>)
             }
           </form>
        </div>
    );
};

export default Question;