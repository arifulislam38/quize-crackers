import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTopics from '../All-topics/AllTopics';

const Main = () => {
    const data = useLoaderData();
    const topics = data.data;
    // console.log(topics);
    return (
        <div className='flex gap-8 justify-center items-center w-3/4 mx-auto mt-32'>
            {
                topics.map(topic => <AllTopics key={topic.id} topic={topic}></AllTopics>)
            }
        </div>
    );
};

export default Main;