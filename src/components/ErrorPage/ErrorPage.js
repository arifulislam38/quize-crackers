import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h1>Ops An Error Occured!!</h1>
            
        </div>
    );
};

export default ErrorPage;