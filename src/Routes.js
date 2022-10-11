import { createBrowserRouter } from "react-router-dom";
import AllCategory from "./components/AllCategory/AllCategory";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Main from "./components/Main/Main";
import Reacts from "./components/Reacts/Reacts";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";

import Topic from "./components/Topic/Topic";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Main></Main>,
            },
            {
                path: '/home',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Main></Main>,
            },
            {
                path: 'topics/:id',
                loader: async ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Topic></Topic>,
            },
           {
            path: 'statistics',
            element: <Statistics></Statistics>,
            children:[
                {
                    path: '/statistics',
                    loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <AllCategory></AllCategory>
                },
                {
                    path: '/statistics/react',
                    element: <Reacts></Reacts>
                }
            ],
           }
        ],
    }
]);

export default routes;