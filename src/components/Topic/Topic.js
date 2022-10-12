
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Topic = () => {
    const data = useLoaderData();
    const topic = data.data;
    const questions = data.data.questions;

    const {name} = topic;

   
    const [correct, setcorrect] = useState([]);
    const [incorrect, setincorrect] = useState([]);
    const [attempt, setattempt] = useState([]);

    const succesToast = () =>{
        toast.success('Your ans is right', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const wrongToast = () =>{
        toast.success('Ops! its a wrong answer', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const showAns = (correctAnswer) =>{
        toast.success( correctAnswer, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
   
    
    const ansCount = (select, corrected, id) =>{
       if(attempt.indexOf(id) < 0){
            const totalAttempt = [...attempt, id];
            setattempt(totalAttempt);
        if(correct.indexOf(select) < 0){
            if(select === corrected){
                const totalCorrect = [...correct, select];
                setcorrect(totalCorrect);
                succesToast();
            }
            else{
                if(incorrect.indexOf(id) <0 ){
                    const totalinCorrect = [...incorrect, id];
                    setincorrect(totalinCorrect);
                    wrongToast();
                }
            }
        }

       }
        
    };

    

   


    return (
        <div className='mt-12'>
            <h2 className='my-7 text-4xl text-green-600'><span className=' text-blue-600'>{name}</span> questions</h2>
            
            <h2 className='flex justify-evenly mb-4 text-xl font-semibold'><span className='text-slate-600'>Total attempt: {attempt.length}</span><span className='text-blue-500'>Total correct: {correct.length}</span><span className='text-red-500'>Total Wrong: {incorrect.length}</span></h2>
            {
                questions.map(question => <Question key={question.id} question={question} ansCount={ansCount} showAns={showAns}></Question>)
            }
            
        </div>
    );
};

export default Topic;