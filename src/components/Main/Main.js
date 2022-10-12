import { useLoaderData } from 'react-router-dom';
import AllTopics from '../All-topics/AllTopics';
import image from '../../quiz.png'

const Main = () => {
    const datas = useLoaderData();
    const topics = datas.data;
   
    return (
        <div className='mb-16'>
            <h1 className='text-4xl text-blue-400 font-semibold mt-6'>Welcome to the Exam-Era</h1>
            <div className='mx-auto md:flex items-center mt-16 w-[85%] gap-4'>
                <img src={image} alt="" className='md:w-[50%] mb-6'/>
                <h1 className='text-5xl font-semibold italic'>Train your brain with Exam-Era by some programming quiz</h1>
            </div>
            <div className='md:flex gap-8 justify-center items-center w-3/4 mx-auto mt-32'>
            {
                topics.map(topic => <AllTopics key={topic.id} topics={topic}></AllTopics>)
            }
        </div>
        </div>
        
    );
};

export default Main;