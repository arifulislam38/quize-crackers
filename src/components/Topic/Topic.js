
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Topic = () => {
    const data = useLoaderData();
    const topic = data.data;
    const questions = data.data.questions;

   
    const [correct, setcorrect] = useState([]);
    const [incorrect, setincorrect] = useState([]);
    const [attempt, setattempt] = useState([]);
   
    
    const ansCount = (select, corrected, id) =>{
       if(attempt.indexOf(id) < 0){
            const totalAttempt = [...attempt, id];
            setattempt(totalAttempt);
        if(correct.indexOf(select) < 0){
            if(select === corrected){
                const totalCorrect = [...correct, select];
                setcorrect(totalCorrect);
            }
            else{
                if(incorrect.indexOf(id) <0 ){
                    const totalinCorrect = [...incorrect, id];
                    setincorrect(totalinCorrect);
                }
            }
        }

       }
        
        console.log(correct)
    };

    

    const {name} = topic;
    return (
        <div className='mt-12'>
            <h2 className='my-7 text-4xl text-green-600'><span className=' text-blue-600'>{name}</span> questions</h2>
            {
                questions.map(question => <Question key={question.id} question={question} ansCount={ansCount}></Question>)
            }
            <div className='fixed top-28 right-10 w-48 h-44 bg-slate-200 rounded shadow-md shadow-slate-500 p-2 text-start flex items-center justify-center'>
               <div>
                    <h2 className='font-bold text-xl text-blue-500 mb-2'>Total attempt: {attempt.length}</h2>
                    <h2 className='font-bold text-xl text-gray-600 mb-2'>Total correct: {correct.length}</h2>
                    <h2 className='font-bold text-xl text-gray-600 mb-2'>total wrong: {incorrect.length}</h2>
               </div>
            </div>
        </div>
    );
};

export default Topic;