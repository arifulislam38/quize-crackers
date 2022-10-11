
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Topic = () => {
    const data = useLoaderData();
    const topic = data.data;
    const questions = data.data.questions;
    // console.log('insiede topic',topic);
    const {name} = topic;
    return (
        <div className='mt-12'>
            <h2 className='my-7 text-4xl text-green-600'><span className=' text-blue-600'>{name}</span> questions</h2>
            {
                questions.map(question => <Question key={question.id} question={question}></Question>)
            }
        </div>
    );
};

export default Topic;