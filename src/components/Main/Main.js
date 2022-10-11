import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { allContext } from '../../App';
import AllTopics from '../All-topics/AllTopics';

const Main = () => {
    const datas = useLoaderData();
    // const datas = useContext(allContext);
    console.log(datas);
    const topics = datas.data;
   
    return (
        <div className='flex gap-8 justify-center items-center w-3/4 mx-auto mt-32'>
            {
                topics.map(topic => <AllTopics key={topic.id} topics={topic}></AllTopics>)
            }
        </div>
    );
};

export default Main;