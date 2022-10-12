import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
const Question = ({question,ansCount, showAns}) => {
    const {question:query, options, correctAnswer,id} = question;
    console.log('inside the question', question)
    return (
        <div className='rounded md:w-1/2 mx-auto mb-3 p-4 shadow-md shadow-zinc-500 relative'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>{query} </h2>
                <EyeIcon className='h-6 w-6 cursor-pointer' onClick={()=> showAns(correctAnswer)} ></EyeIcon>
            </div>
            
           <form className='grid grid-cols-2 gap-3 mt-6'>
             {
            options.map(option => <Option key={option} option={option} ansCount={ansCount} correctAnswer={correctAnswer} id={id}></Option>)
             }
           </form>
        </div>
    );
};

export default Question;