import React from 'react';
import Option from '../Option/Option';

const Question = ({question}) => {
    const {question:query} = question;
    console.log('inside the question', question)
    return (
        <div className='rounded w-1/2 mx-auto mb-3 p-4 shadow-md shadow-zinc-500'>
            <h2 className='text-xl font-bold'>{query}</h2>
           <form className='grid grid-cols-2 gap-3 mt-6'>
             {
                (question.options).map(option => <Option key={option} option={option}></Option>)
             }
           </form>
        </div>
    );
};

export default Question;