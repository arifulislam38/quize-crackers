import React from 'react';
import Option from '../Option/Option';

const Question = ({question,ansCount}) => {
    const {question:query, options, correctAnswer,id} = question;
    console.log('inside the question', question)
    return (
        <div className='rounded w-1/2 mx-auto mb-3 p-4 shadow-md shadow-zinc-500'>
            <h2 className='text-xl font-bold'>{query}</h2>
           <form className='grid grid-cols-2 gap-3 mt-6'>
             {
            options.map(option => <Option key={option} option={option} ansCount={ansCount} correctAnswer={correctAnswer} id={id}></Option>)
             }
           </form>
        </div>
    );
};

export default Question;