import { useLoaderData } from 'react-router-dom';
import AllTopics from '../All-topics/AllTopics';

const Main = () => {
    const datas = useLoaderData();
    console.log(datas);
    const topics = datas.data;
   
    return (
        <div className='md:flex gap-8 justify-center items-center w-3/4 mx-auto mt-32'>
            {
                topics.map(topic => <AllTopics key={topic.id} topics={topic}></AllTopics>)
            }
        </div>
    );
};

export default Main;