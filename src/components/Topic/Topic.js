
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Topic = () => {
    const data = useLoaderData();
    const topic = data.data;
    const questions = data.data.questions;
    // console.log('insiede topic',topic);
    const {name} = topic;
    return (
        <div>
            <h2>inside the <span className='text-xl text-green-600'>{name}</span> page</h2>
            {
                questions.map(question => <Question key={question.id} question={question}></Question>)
            }
        </div>
    );
};

export default Topic;