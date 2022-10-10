import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTopics from '../All-topics/AllTopics';

const Main = () => {
    const data = useLoaderData();
    const topics = data.data;
    console.log(topics);
    return (
        <div className='flex justify-around items-center bg-slate-500 w-3/4 mx-auto'>
            {
                topics.map(topic => <AllTopics key={topic.id} topic={topic}></AllTopics>)
            }
        </div>
    );
};

export default Main;