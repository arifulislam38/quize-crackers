import { useLoaderData } from 'react-router-dom';
import AllTopics from '../All-topics/AllTopics';

const Main = () => {
    const datas = useLoaderData();
    console.log(datas);
    const topics = datas.data;
   
    return (
        <div>
            <h1 className='text-4xl text-blue-400 font-semibold mt-6'>Welcome to the Exam-Era</h1>
            <div className='md:flex gap-8 justify-center items-center w-3/4 mx-auto mt-24'>
            {
                topics.map(topic => <AllTopics key={topic.id} topics={topic}></AllTopics>)
            }
        </div>
        </div>
        
    );
};

export default Main;